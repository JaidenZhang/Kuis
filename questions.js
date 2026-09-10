const questions = [

    // QUESTION 1
    {
        question:
            "Acara OSIS dimulai 20 menit lagi. Divisi perlengkapan memberi tahu bahwa proyektor utama tiba-tiba tidak berfungsi. Proyektor dipakai untuk hampir seluruh acara.",

        answers: [
            {
                text: "Cari proyektor pengganti sambil acara tetap dimulai sesuai rundown.",
                leadership: 8,
                teamwork: 8,
                problem: 8,
                communication: 7,

                analysis:
                    "Keputusan ini menjaga acara tetap berjalan sambil mencari solusi. Namun, beberapa bagian rundown tetap berisiko terganggu jika proyektor pengganti belum tersedia."
            },

            {
                text: "Tunda pembukaan sampai proyektor berhasil diperbaiki.",
                leadership: 5,
                teamwork: 5,
                problem: 5,
                communication: 6,

                analysis:
                    "Penundaan memberi waktu untuk memperbaiki masalah, tetapi seluruh acara menjadi bergantung pada satu perlengkapan."
            },

            {
                text: "Ubah bagian awal rundown menjadi kegiatan yang tidak membutuhkan proyektor sambil tim perlengkapan mencari solusi.",
                leadership: 10,
                teamwork: 10,
                problem: 10,
                communication: 9,

                analysis:
                    "Tim menjaga acara tetap berjalan sambil mendelegasikan masalah kepada divisi terkait. Ini menunjukkan adaptasi, pembagian tugas, dan pengelolaan waktu yang efektif."
            },

            {
                text: "Ketua dan beberapa anggota ikut membantu memperbaiki proyektor.",
                leadership: 6,
                teamwork: 7,
                problem: 6,
                communication: 5,

                analysis:
                    "Kerja sama terlihat kuat, tetapi terlalu banyak anggota terfokus pada satu masalah sehingga persiapan bagian lain berisiko terabaikan."
            }
        ]
    },


    // QUESTION 2
    {
        question:
            "Divisi acara ingin konsep formal, sedangkan divisi kreatif ingin konsep yang lebih santai. Keduanya memiliki alasan yang kuat dan waktu rapat tinggal 15 menit.",

        answers: [
            {
                text: "Ketua menentukan konsep berdasarkan pendapatnya agar keputusan cepat dibuat.",
                leadership: 6,
                teamwork: 4,
                problem: 6,
                communication: 4,

                analysis:
                    "Keputusan menjadi cepat, tetapi terlalu bergantung pada satu orang dan kurang melibatkan pertimbangan dari kedua divisi."
            },

            {
                text: "Lakukan voting seluruh anggota dan gunakan konsep dengan suara terbanyak.",
                leadership: 7,
                teamwork: 8,
                problem: 7,
                communication: 7,

                analysis:
                    "Voting memberikan kesempatan kepada anggota untuk menentukan pilihan, tetapi belum tentu menyelesaikan alasan utama dari perbedaan pendapat."
            },

            {
                text: "Tentukan tujuan utama acara lalu gabungkan bagian terbaik dari kedua konsep yang mendukung tujuan tersebut.",
                leadership: 10,
                teamwork: 10,
                problem: 10,
                communication: 10,

                analysis:
                    "Tim mengembalikan diskusi pada tujuan kegiatan dan mencari titik temu. Keputusan tidak berfokus pada siapa yang menang, tetapi pada kebutuhan acara."
            },

            {
                text: "Minta kedua divisi membuat konsep baru yang dapat diterima semua pihak.",
                leadership: 7,
                teamwork: 8,
                problem: 7,
                communication: 8,

                analysis:
                    "Cara ini melibatkan kedua divisi, tetapi waktu rapat yang terbatas membuat pembuatan konsep baru berisiko memperlambat keputusan."
            }
        ]
    },


    // QUESTION 3
    {
        question:
            "Seorang anggota salah mengirim informasi jadwal kegiatan. Beberapa peserta sudah menerima informasi yang salah.",

        answers: [
            {
                text: "Ketua langsung mengambil alih seluruh komunikasi agar kesalahan tidak bertambah.",
                leadership: 7,
                teamwork: 5,
                problem: 7,
                communication: 8,

                analysis:
                    "Masalah dapat ditangani dengan cepat, tetapi anggota menjadi terlalu bergantung pada ketua ketika terjadi kesalahan."
            },

            {
                text: "Minta anggota tersebut memperbaiki informasi dengan didampingi koordinator.",
                leadership: 10,
                teamwork: 10,
                problem: 10,
                communication: 10,

                analysis:
                    "Kesalahan diperbaiki sambil tetap memberikan tanggung jawab kepada anggota. Pendampingan membantu memastikan informasi berikutnya sudah benar."
            },

            {
                text: "Minta divisi lain mengambil alih komunikasi agar masalah cepat selesai.",
                leadership: 6,
                teamwork: 7,
                problem: 6,
                communication: 7,

                analysis:
                    "Tim membantu menyelesaikan masalah, tetapi pemindahan tanggung jawab tidak membantu anggota memahami dan memperbaiki kesalahannya."
            },

            {
                text: "Ketua menghubungi peserta yang menerima informasi salah satu per satu.",
                leadership: 7,
                teamwork: 4,
                problem: 6,
                communication: 8,

                analysis:
                    "Informasi dapat diperbaiki secara langsung, tetapi metode ini kurang efisien dan terlalu membebankan pekerjaan kepada ketua."
            }
        ]
    },


    // QUESTION 4
    {
        question:
            "Ketua panitia sakit pada hari pelaksanaan kegiatan. Rundown sudah siap, tetapi beberapa keputusan masih membutuhkan persetujuan.",

        answers: [
            {
                text: "Setiap koordinator mengambil keputusan untuk divisinya masing-masing.",
                leadership: 7,
                teamwork: 8,
                problem: 8,
                communication: 6,

                analysis:
                    "Pekerjaan tetap berjalan, tetapi keputusan antar divisi berisiko tidak sinkron karena tidak ada satu pusat koordinasi."
            },

            {
                text: "Wakil mengambil koordinasi utama dan tetap berkonsultasi dengan para koordinator.",
                leadership: 10,
                teamwork: 10,
                problem: 9,
                communication: 10,

                analysis:
                    "Struktur kepemimpinan tetap berjalan. Wakil menjaga koordinasi utama sambil tetap melibatkan koordinator dalam keputusan."
            },

            {
                text: "Tunda keputusan penting sampai ketua bisa dihubungi.",
                leadership: 4,
                teamwork: 5,
                problem: 4,
                communication: 6,

                analysis:
                    "Cara ini menjaga keputusan tetap berada pada ketua, tetapi kegiatan menjadi terlalu bergantung pada satu orang."
            },

            {
                text: "Lakukan voting untuk memilih ketua sementara sebelum kegiatan dimulai.",
                leadership: 6,
                teamwork: 7,
                problem: 5,
                communication: 7,

                analysis:
                    "Tim mendapatkan pemimpin sementara, tetapi proses pemilihan memakan waktu dan mengabaikan struktur kepemimpinan yang sudah tersedia."
            }
        ]
    },


    // QUESTION 5
    {
        question:
            "Persiapan kegiatan sudah berlangsung berjam-jam. Beberapa anggota terlihat kelelahan, sementara masih banyak pekerjaan yang harus diselesaikan.",

        answers: [
            {
                text: "Semua anggota tetap bekerja sampai seluruh tugas selesai.",
                leadership: 5,
                teamwork: 5,
                problem: 5,
                communication: 4,

                analysis:
                    "Pekerjaan terus berjalan, tetapi kelelahan dapat menurunkan konsentrasi dan meningkatkan risiko kesalahan."
            },

            {
                text: "Berikan seluruh anggota waktu istirahat selama 30 menit.",
                leadership: 7,
                teamwork: 8,
                problem: 6,
                communication: 7,

                analysis:
                    "Istirahat membantu kondisi anggota, tetapi menghentikan seluruh pekerjaan secara bersamaan kurang efektif jika masih ada tugas mendesak."
            },

            {
                text: "Evaluasi pekerjaan tersisa, prioritaskan tugas penting, lalu atur pergantian anggota untuk beristirahat.",
                leadership: 10,
                teamwork: 10,
                problem: 10,
                communication: 9,

                analysis:
                    "Tim mengatur prioritas sekaligus menjaga kondisi anggota. Sistem pergantian membuat pekerjaan penting tetap berjalan."
            },

            {
                text: "Kurangi target kegiatan agar pekerjaan dapat diselesaikan lebih cepat.",
                leadership: 6,
                teamwork: 6,
                problem: 7,
                communication: 6,

                analysis:
                    "Mengurangi target dapat membantu dalam kondisi tertentu, tetapi keputusan ini terlalu cepat jika pekerjaan masih dapat diselesaikan melalui pembagian tugas yang lebih baik."
            }
        ]
    },


    // QUESTION 6
    {
        question:
            "Tiga hari sebelum kegiatan, tim mengetahui bahwa dana yang tersedia ternyata Rp1.000.000 lebih sedikit dari rencana awal.",

        answers: [
            {
                text: "Kurangi seluruh pengeluaran dengan persentase yang sama.",
                leadership: 7,
                teamwork: 6,
                problem: 7,
                communication: 6,

                analysis:
                    "Pengeluaran langsung berkurang, tetapi beberapa kebutuhan penting dan tidak penting mendapat pemotongan yang sama."
            },

            {
                text: "Fokus mencari sponsor tambahan agar rencana awal tetap berjalan.",
                leadership: 8,
                teamwork: 8,
                problem: 8,
                communication: 9,

                analysis:
                    "Sponsor dapat membantu menutup kekurangan dana, tetapi keberhasilannya tidak terjamin dengan waktu yang hanya tiga hari."
            },

            {
                text: "Urutkan kebutuhan berdasarkan prioritas, kurangi bagian yang tidak memengaruhi tujuan utama, lalu cari alternatif yang lebih hemat.",
                leadership: 10,
                teamwork: 9,
                problem: 10,
                communication: 8,

                analysis:
                    "Tim menyesuaikan anggaran berdasarkan prioritas. Kebutuhan utama tetap terlindungi dan pengeluaran yang kurang penting dapat dikurangi."
            },

            {
                text: "Gunakan uang kas organisasi terlebih dahulu agar rencana tidak berubah.",
                leadership: 6,
                teamwork: 6,
                problem: 6,
                communication: 5,

                analysis:
                    "Masalah jangka pendek selesai, tetapi penggunaan kas dapat memengaruhi kegiatan organisasi berikutnya."
            }
        ]
    },


    // QUESTION 7
    {
        question:
            "Satu anggota memiliki pengalaman paling banyak dan sering memberikan solusi yang bagus. Namun, hampir semua keputusan mulai berasal darinya dan anggota lain semakin jarang berbicara.",

        answers: [
            {
                text: "Biarkan karena idenya terbukti sering memberikan hasil yang baik.",
                leadership: 5,
                teamwork: 4,
                problem: 7,
                communication: 4,

                analysis:
                    "Tim mendapat banyak ide yang baik, tetapi ketergantungan pada satu anggota membuat partisipasi anggota lain menurun."
            },

            {
                text: "Minta anggota tersebut tidak memberikan pendapat untuk beberapa keputusan berikutnya.",
                leadership: 6,
                teamwork: 6,
                problem: 5,
                communication: 6,

                analysis:
                    "Anggota lain mendapat ruang berbicara, tetapi membatasi satu anggota secara langsung bukan solusi terbaik untuk membangun diskusi yang sehat."
            },

            {
                text: "Berikan setiap anggota kesempatan menyampaikan pendapat sebelum keputusan dibuat.",
                leadership: 10,
                teamwork: 10,
                problem: 9,
                communication: 10,

                analysis:
                    "Semua anggota mendapat ruang untuk berkontribusi. Anggota yang berpengalaman tetap dapat memberikan masukan tanpa mendominasi keputusan."
            },

            {
                text: "Gunakan voting untuk setiap keputusan agar semua anggota memiliki suara.",
                leadership: 7,
                teamwork: 8,
                problem: 7,
                communication: 8,

                analysis:
                    "Voting meningkatkan keterlibatan, tetapi tidak semua keputusan membutuhkan voting dan prosesnya dapat memperlambat kerja tim."
            }
        ]
    },


    // QUESTION 8
    {
        question:
            "Satu jam sebelum kegiatan, muncul kabar bahwa lokasi mungkin harus dipindahkan. Belum ada keputusan resmi dari sekolah.",

        answers: [
            {
                text: "Langsung pindahkan seluruh perlengkapan untuk mengantisipasi perubahan lokasi.",
                leadership: 7,
                teamwork: 7,
                problem: 6,
                communication: 5,

                analysis:
                    "Tim bertindak cepat, tetapi keputusan dibuat berdasarkan informasi yang belum terkonfirmasi."
            },

            {
                text: "Tunggu keputusan resmi dan lanjutkan persiapan seperti biasa.",
                leadership: 6,
                teamwork: 6,
                problem: 6,
                communication: 6,

                analysis:
                    "Tim menghindari keputusan berdasarkan rumor, tetapi tidak menyiapkan diri jika perubahan lokasi benar terjadi."
            },

            {
                text: "Konfirmasi informasi sambil menyiapkan rencana alternatif jika perpindahan benar terjadi.",
                leadership: 10,
                teamwork: 9,
                problem: 10,
                communication: 10,

                analysis:
                    "Tim memverifikasi informasi sekaligus menyiapkan langkah cadangan. Ini mengurangi risiko keputusan terburu-buru maupun keterlambatan."
            },

            {
                text: "Beritahu seluruh peserta bahwa lokasi kemungkinan akan berubah.",
                leadership: 5,
                teamwork: 5,
                problem: 5,
                communication: 7,

                analysis:
                    "Peserta mendapat informasi lebih awal, tetapi penyampaian kabar yang belum pasti berpotensi menimbulkan kebingungan."
            }
        ]
    },


    // QUESTION 9
    {
        question:
            "Poster kegiatan harus dipublikasikan malam ini. Desainnya sudah layak digunakan, tetapi tim kreatif ingin memperbaikinya lagi selama beberapa jam.",

        answers: [
            {
                text: "Publikasikan sekarang karena informasi kegiatan lebih penting daripada penyempurnaan kecil.",
                leadership: 8,
                teamwork: 7,
                problem: 8,
                communication: 8,

                analysis:
                    "Deadline terpenuhi dan informasi segera tersebar, tetapi tim kreatif tidak mendapat kesempatan melakukan perbaikan terakhir."
            },

            {
                text: "Berikan waktu tambahan satu jam dengan batas revisi yang jelas sebelum dipublikasikan.",
                leadership: 10,
                teamwork: 10,
                problem: 9,
                communication: 10,

                analysis:
                    "Tim menyeimbangkan kualitas dengan deadline. Batas waktu yang jelas mencegah proses revisi berlangsung terlalu lama."
            },

            {
                text: "Biarkan tim kreatif menentukan sendiri kapan desain sudah siap.",
                leadership: 5,
                teamwork: 7,
                problem: 5,
                communication: 6,

                analysis:
                    "Tim kreatif mendapat kebebasan, tetapi deadline publikasi menjadi tidak terkontrol."
            },

            {
                text: "Ketua mengambil file desain dan menyelesaikan revisi sendiri.",
                leadership: 6,
                teamwork: 4,
                problem: 6,
                communication: 4,

                analysis:
                    "Ketua berusaha mempercepat pekerjaan, tetapi mengambil alih tugas divisi dapat mengurangi koordinasi dan tanggung jawab tim."
            }
        ]
    },


    // QUESTION 10
    {
        question:
            "Dua anggota yang memiliki masalah pribadi mulai sulit bekerja sama. Keduanya berada dalam divisi yang sama dan memegang tugas penting.",

        answers: [
            {
                text: "Pisahkan tugas mereka agar tidak perlu banyak berinteraksi.",
                leadership: 7,
                teamwork: 6,
                problem: 7,
                communication: 5,

                analysis:
                    "Konflik sementara dapat dikurangi, tetapi akar masalah kerja sama belum diselesaikan."
            },

            {
                text: "Ganti salah satu anggota dengan anggota dari divisi lain.",
                leadership: 6,
                teamwork: 5,
                problem: 6,
                communication: 5,

                analysis:
                    "Pekerjaan dapat kembali berjalan, tetapi memindahkan anggota tidak menyelesaikan masalah komunikasi yang terjadi."
            },

            {
                text: "Bicarakan masalah dengan keduanya, fokus pada tanggung jawab kegiatan, lalu sepakati aturan kerja bersama.",
                leadership: 10,
                teamwork: 10,
                problem: 10,
                communication: 10,

                analysis:
                    "Tim menangani konflik secara langsung tanpa membawa masalah pribadi lebih jauh. Aturan kerja membantu keduanya kembali fokus pada tanggung jawab."
            },

            {
                text: "Serahkan masalah sepenuhnya kepada koordinator divisi.",
                leadership: 7,
                teamwork: 7,
                problem: 6,
                communication: 7,

                analysis:
                    "Koordinator memang bertanggung jawab terhadap divisinya, tetapi konflik penting tetap perlu dipantau agar tidak memengaruhi kegiatan."
            }
        ]
    },


    // QUESTION 11
    {
        question:
            "Saat persiapan kegiatan, beberapa pekerjaan kecil muncul secara bersamaan. Banyak anggota terus meminta persetujuan ketua sebelum melakukan sesuatu.",

        answers: [
            {
                text: "Ketua memberikan instruksi untuk setiap pekerjaan agar semuanya tetap terkontrol.",
                leadership: 7,
                teamwork: 5,
                problem: 6,
                communication: 8,

                analysis:
                    "Kontrol tetap kuat, tetapi ketua menjadi pusat seluruh keputusan sehingga pekerjaan berpotensi melambat."
            },

            {
                text: "Tunjuk beberapa koordinator dan tentukan keputusan yang boleh mereka ambil sendiri.",
                leadership: 10,
                teamwork: 10,
                problem: 9,
                communication: 9,

                analysis:
                    "Delegasi membuat keputusan sederhana dapat diselesaikan lebih cepat tanpa kehilangan struktur koordinasi."
            },

            {
                text: "Buat grup komunikasi khusus agar anggota dapat meminta persetujuan ketua dengan cepat.",
                leadership: 7,
                teamwork: 7,
                problem: 7,
                communication: 9,

                analysis:
                    "Komunikasi menjadi lebih cepat, tetapi ketergantungan terhadap persetujuan ketua masih tetap terjadi."
            },

            {
                text: "Minta seluruh anggota mengambil keputusan sendiri tanpa perlu meminta persetujuan.",
                leadership: 5,
                teamwork: 6,
                problem: 7,
                communication: 4,

                analysis:
                    "Anggota menjadi lebih mandiri, tetapi tanpa batas kewenangan yang jelas keputusan antaranggota dapat saling bertentangan."
            }
        ]
    },


    // QUESTION 12 - FINAL SITUATION
    {
        question:
            "FINAL SITUATION: Acara dimulai 40 menit lagi. MC terlambat, salah satu perlengkapan belum datang, peserta mulai masuk, guru meminta perubahan rundown, dan dua anggota sedang menangani masalah registrasi. Sebagai ketua, apa tindakan pertama?",

        answers: [
            {
                text: "Tangani perubahan rundown terlebih dahulu karena permintaan guru harus segera diselesaikan.",
                leadership: 8,
                teamwork: 6,
                problem: 7,
                communication: 8,

                analysis:
                    "Permintaan guru memang penting, tetapi terdapat beberapa masalah lain yang terjadi secara bersamaan dan membutuhkan koordinasi."
            },

            {
                text: "Kumpulkan seluruh panitia untuk melakukan rapat darurat sebelum mengambil tindakan.",
                leadership: 7,
                teamwork: 8,
                problem: 6,
                communication: 8,

                analysis:
                    "Rapat membuat seluruh tim memahami situasi, tetapi mengumpulkan semua panitia dapat menghentikan pekerjaan yang sedang berjalan."
            },

            {
                text: "Identifikasi masalah berdasarkan urgensi, delegasikan setiap masalah kepada koordinator terkait, lalu pantau perkembangannya.",
                leadership: 10,
                teamwork: 10,
                problem: 10,
                communication: 10,

                analysis:
                    "Ketua menentukan prioritas dan membagi masalah kepada orang yang tepat. Beberapa masalah dapat diselesaikan secara paralel tanpa membuat seluruh tim berhenti."
            },

            {
                text: "Tangani masalah MC terlebih dahulu karena acara membutuhkan seseorang untuk memandu kegiatan.",
                leadership: 8,
                teamwork: 7,
                problem: 8,
                communication: 7,

                analysis:
                    "Masalah MC memang mendesak, tetapi fokus pada satu masalah saja membuat beberapa persoalan penting lainnya belum terkoordinasi."
            }
        ]
    }

];
