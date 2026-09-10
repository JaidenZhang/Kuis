let currentQuestion = 0;
let selectedAnswer = null;

let scores = {
    leadership: 0,
    teamwork: 0,
    problem: 0,
    communication: 0
};


function showScreen(screenId) {

    document
        .querySelectorAll(".screen")
        .forEach(screen => {
            screen.classList.remove("active");
        });

    document
        .getElementById(screenId)
        .classList.add("active");
}


function startQuiz() {

    currentQuestion = 0;

    scores = {
        leadership: 0,
        teamwork: 0,
        problem: 0,
        communication: 0
    };

    showScreen("quizScreen");

    loadQuestion();
}


function loadQuestion() {

    selectedAnswer = null;

    const question =
        questions[currentQuestion];

    const questionNumber =
        currentQuestion + 1;

    const total =
        questions.length;

    const percent =
        Math.round(
            (questionNumber / total) * 100
        );


    document.getElementById(
        "questionCounter"
    ).textContent =
        `QUESTION ${String(questionNumber).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;


    document.getElementById(
        "situationNumber"
    ).textContent =
        `SITUATION ${String(questionNumber).padStart(2, "0")}`;


    document.getElementById(
        "progressPercent"
    ).textContent =
        `${percent}%`;


    document.getElementById(
        "progressBar"
    ).style.width =
        `${percent}%`;


    document.getElementById(
        "questionText"
    ).textContent =
        question.question;


    const answersContainer =
        document.getElementById("answers");

    answersContainer.innerHTML = "";


    question.answers.forEach(
        (answer, index) => {

            const option =
                document.createElement("div");

            option.className =
                "answer";

            option.innerHTML = `

                <div class="answer-letter">
                    ${String.fromCharCode(65 + index)}
                </div>

                <div class="answer-text">
                    ${answer.text}
                </div>

            `;

            option.onclick =
                () => selectAnswer(
                    index,
                    option
                );

            answersContainer.appendChild(
                option
            );

        }
    );


    document.getElementById(
        "confirmButton"
    ).disabled = true;
}


function selectAnswer(index, element) {

    selectedAnswer = index;

    document
        .querySelectorAll(".answer")
        .forEach(answer => {
            answer.classList.remove(
                "selected"
            );
        });


    element.classList.add(
        "selected"
    );


    document.getElementById(
        "confirmButton"
    ).disabled = false;
}


function confirmAnswer() {

    if (selectedAnswer === null) {
        return;
    }


    const answer =
        questions[currentQuestion]
            .answers[selectedAnswer];


    scores.leadership +=
        answer.leadership;

    scores.teamwork +=
        answer.teamwork;

    scores.problem +=
        answer.problem;

    scores.communication +=
        answer.communication;


    document.getElementById(
        "analysisText"
    ).textContent =
        answer.analysis;


    document.getElementById(
        "leadershipScore"
    ).textContent =
        `+${answer.leadership}`;


    document.getElementById(
        "teamworkScore"
    ).textContent =
        `+${answer.teamwork}`;


    document.getElementById(
        "problemScore"
    ).textContent =
        `+${answer.problem}`;


    document.getElementById(
        "communicationScore"
    ).textContent =
        `+${answer.communication}`;


    showScreen(
        "analysisScreen"
    );
}


function nextQuestion() {

    currentQuestion++;


    if (
        currentQuestion <
        questions.length
    ) {

        showScreen(
            "quizScreen"
        );

        loadQuestion();

    } else {

        showResults();

    }
}


function showResults() {

    showScreen(
        "resultScreen"
    );


    const maxScore =
        questions.length * 10;


    const leadershipPercent =
        Math.round(
            scores.leadership /
            maxScore *
            100
        );

    const teamworkPercent =
        Math.round(
            scores.teamwork /
            maxScore *
            100
        );

    const problemPercent =
        Math.round(
            scores.problem /
            maxScore *
            100
        );

    const communicationPercent =
        Math.round(
            scores.communication /
            maxScore *
            100
        );


    document.getElementById(
        "finalLeadership"
    ).textContent =
        leadershipPercent;


    document.getElementById(
        "finalTeamwork"
    ).textContent =
        teamworkPercent;


    document.getElementById(
        "finalProblem"
    ).textContent =
        problemPercent;


    document.getElementById(
        "finalCommunication"
    ).textContent =
        communicationPercent;


    setTimeout(() => {

        document.getElementById(
            "leadershipBar"
        ).style.width =
            `${leadershipPercent}%`;


        document.getElementById(
            "teamworkBar"
        ).style.width =
            `${teamworkPercent}%`;


        document.getElementById(
            "problemBar"
        ).style.width =
            `${problemPercent}%`;


        document.getElementById(
            "communicationBar"
        ).style.width =
            `${communicationPercent}%`;

    }, 200);


    const total =
        scores.leadership +
        scores.teamwork +
        scores.problem +
        scores.communication;


    const maxTotal =
        questions.length * 40;


    const finalPercent =
        Math.round(
            total /
            maxTotal *
            100
        );


    document.getElementById(
        "totalScore"
    ).textContent =
        `${finalPercent}/100`;


    determineTeamType();
}


function determineTeamType() {

    const values = [
        {
            key: "leadership",
            name: "THE LEADER"
        },

        {
            key: "teamwork",
            name: "THE COORDINATOR"
        },

        {
            key: "problem",
            name: "THE STRATEGIST"
        },

        {
            key: "communication",
            name: "THE COMMUNICATOR"
        }
    ];


    values.sort(
        (a, b) =>
            scores[b.key] -
            scores[a.key]
    );


    const winner =
        values[0];


    const descriptions = {

        leadership:
            "Tim kalian kuat dalam mengambil keputusan, menentukan arah, dan menjaga pekerjaan tetap bergerak.",

        teamwork:
            "Tim kalian unggul dalam pembagian tugas, koordinasi, dan melibatkan anggota dalam penyelesaian masalah.",

        problem:
            "Tim kalian mampu membaca situasi, mempertimbangkan pilihan, dan mencari solusi secara terstruktur.",

        communication:
            "Tim kalian kuat dalam menyampaikan informasi, mendengarkan anggota, dan menjaga koordinasi."
    };


    document.getElementById(
        "teamType"
    ).textContent =
        winner.name;


    document.getElementById(
        "teamDescription"
    ).textContent =
        descriptions[winner.key];
}


function restartQuiz() {

    currentQuestion = 0;

    selectedAnswer = null;

    scores = {
        leadership: 0,
        teamwork: 0,
        problem: 0,
        communication: 0
    };


    document.getElementById(
        "leadershipBar"
    ).style.width = "0";


    document.getElementById(
        "teamworkBar"
    ).style.width = "0";


    document.getElementById(
        "problemBar"
    ).style.width = "0";


    document.getElementById(
        "communicationBar"
    ).style.width = "0";


    showScreen(
        "startScreen"
    );
}
