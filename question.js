const questions = [

    {
        question:
            "Acara sekolah akan dimulai 30 menit lagi. Salah satu anggota inti belum datang dan membawa perlengkapan penting.",

        answers: [

            {
                text: "Menunggu anggota tersebut sampai datang.",
                leadership: 2,
                teamwork: 3,
                problem: 2,
                communication: 3,

                analysis:
                    "Tim memilih menunggu. Keputusan ini mengurangi risiko perubahan mendadak, tetapi waktu menjadi faktor yang cukup berbahaya."
            },

            {
                text: "Mencari perlengkapan pengganti dan membagi tugas kepada anggota yang tersedia.",
                leadership: 9,
                teamwork: 10,
                problem: 10,
                communication: 8,

                analysis:
                    "Tim beradaptasi dengan cepat. Pembagian tugas membuat pekerjaan tetap berjalan tanpa bergantung pada satu anggota."
            },

            {
                text: "Ketua mengambil alih seluruh pekerjaan agar lebih cepat.",
                leadership: 6,
                teamwork: 2,
                problem: 5,
                communication: 3,

                analysis:
                    "Keputusan cepat membantu situasi sementara, tetapi terlalu banyak pekerjaan terpusat pada satu orang."
            },

            {
                text: "Mengubah susunan acara agar perlengkapan tersebut digunakan nanti.",
                leadership: 8,
                teamwork: 7,
                problem: 9,
                communication: 7,

                analysis:
                    "Tim mengubah strategi berdasarkan sumber daya yang tersedia. Ini menunjukkan kemampuan adaptasi yang baik."
            }

        ]
    },


    {
        question:
            "Dua divisi berbeda pendapat mengenai konsep acara. Diskusi mulai memanas dan waktu rapat semakin sedikit.",

        answers: [

            {
                text: "Ketua langsung memilih salah satu konsep.",
                leadership: 7,
                teamwork: 3,
                problem: 6,
                communication: 3,

                analysis:
                    "Keputusan menjadi cepat, tetapi anggota yang idenya tidak dipilih berpotensi merasa tidak dilibatkan."
            },

            {
                text: "Membiarkan kedua divisi berdebat sampai menemukan kesepakatan.",
                leadership: 2,
                teamwork: 4,
                problem: 3,
                communication: 5,

                analysis:
                    "Diskusi tetap terbuka, tetapi tanpa arah yang jelas konflik berpotensi menghabiskan waktu."
            },

            {
                text: "Cari tujuan utama acara lalu gabungkan bagian terbaik dari kedua konsep.",
                leadership: 9,
                teamwork: 10,
                problem: 10,
                communication: 10,

                analysis:
                    "Tim mengembalikan diskusi pada tujuan utama dan mencari titik temu dari kedua pihak."
            },

            {
                text: "Lakukan voting secepatnya.",
                leadership: 6,
                teamwork: 6,
                problem: 6,
                communication: 5,

                analysis:
                    "Voting menyelesaikan keputusan dengan cepat, tetapi belum tentu menyelesaikan alasan utama konflik."
            }

        ]
    },


    {
        question:
            "Saat sebuah kegiatan berlangsung, jumlah peserta ternyata jauh lebih banyak dari perkiraan dan konsumsi tidak mencukupi.",

        answers: [

            {
                text: "Bagikan konsumsi kepada peserta yang datang lebih dulu.",
                leadership: 4,
                teamwork: 4,
                problem: 3,
                communication: 3,

                analysis:
                    "Cara ini sederhana, tetapi berpotensi menimbulkan ketidakadilan bagi peserta lain."
            },

            {
                text: "Kurangi porsi secara merata sambil mencari tambahan konsumsi.",
                leadership: 8,
                teamwork: 9,
                problem: 9,
                communication: 8,

                analysis:
                    "Tim menjaga pembagian tetap adil sambil mencari solusi tambahan."
            },

            {
                text: "Segera koordinasikan logistik, keuangan, dan panitia untuk mencari tambahan konsumsi.",
                leadership: 10,
                teamwork: 10,
                problem: 10,
                communication: 10,

                analysis:
                    "Masalah dibagi kepada divisi yang relevan. Koordinasi membuat tim dapat menangani kebutuhan mendesak dengan terstruktur."
            },

            {
                text: "Hentikan pembagian konsumsi sementara.",
                leadership: 5,
                teamwork: 4,
                problem: 5,
                communication: 4,

                analysis:
                    "Tim mendapat waktu untuk berpikir, tetapi penghentian tanpa solusi cepat berpotensi membuat peserta bingung."
            }

        ]
    },


    {
        question:
            "Seorang anggota tim melakukan kesalahan besar yang membuat persiapan acara terlambat.",

        answers: [

            {
                text: "Menegur anggota tersebut di depan seluruh tim.",
                leadership: 3,
                teamwork: 1,
                problem: 3,
                communication: 2,

                analysis:
                    "Masalah disampaikan secara langsung, tetapi cara ini berpotensi menurunkan kepercayaan anggota."
            },

            {
                text: "Fokus memperbaiki masalah terlebih dahulu lalu evaluasi secara pribadi setelah situasi terkendali.",
                leadership: 10,
                teamwork: 9,
                problem: 10,
                communication: 10,

                analysis:
                    "Tim memprioritaskan penyelesaian masalah dan tetap memberikan evaluasi kepada anggota secara tepat."
            },

            {
                text: "Mengambil alih seluruh tugas anggota tersebut.",
                leadership: 5,
                teamwork: 3,
                problem: 6,
                communication: 3,

                analysis:
                    "Masalah sementara terselesaikan, tetapi anggota kehilangan kesempatan memperbaiki pekerjaannya."
            },

            {
                text: "Abaikan kesalahan agar tidak terjadi konflik.",
                leadership: 1,
                teamwork: 4,
                problem: 1,
                communication: 2,

                analysis:
                    "Konflik memang dihindari, tetapi penyebab masalah tidak diselesaikan."
            }

        ]
    },


    {
        question:
            "Ketua tim tiba-tiba tidak bisa hadir saat hari pelaksanaan kegiatan.",

        answers: [

            {
                text: "Tunda kegiatan sampai ketua tersedia.",
                leadership: 2,
                teamwork: 3,
                problem: 2,
                communication: 3,

                analysis:
                    "Tim masih bergantung pada satu orang sehingga kegiatan sulit berjalan secara mandiri."
            },

            {
                text: "Wakil mengambil koordinasi dan membagi tanggung jawab sesuai divisi.",
                leadership: 10,
                teamwork: 10,
                problem: 9,
                communication: 9,

                analysis:
                    "Struktur organisasi digunakan dengan baik. Tim tetap bergerak meskipun pemimpin utama tidak tersedia."
            },

            {
                text: "Semua anggota bekerja sendiri berdasarkan tugas masing-masing.",
                leadership: 4,
                teamwork: 5,
                problem: 5,
                communication: 2,

                analysis:
                    "Pekerjaan tetap berjalan, tetapi kurangnya koordinasi meningkatkan risiko miskomunikasi."
            },

            {
                text: "Pilih ketua baru melalui voting sebelum kegiatan dimulai.",
                leadership: 6,
                teamwork: 6,
                problem: 5,
                communication: 7,

                analysis:
                    "Tim mendapatkan pemimpin, tetapi proses pemilihan baru berpotensi membuang waktu saat kondisi mendesak."
            }

        ]
    }

];
