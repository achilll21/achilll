import { ChapterSummary, DetailedExplanation } from '../types/game';

export interface WorldExplanationData {
  worldId: number;
  chapterSummary: ChapterSummary;
  materialsDetail: { [materialId: string]: DetailedExplanation };
}

export const CHAPTER_EXPLANATIONS: Record<number, WorldExplanationData> = {
  1: {
    worldId: 1,
    chapterSummary: {
      learningGoals: [
        'Membaca dan menghafal QS. At-Tin dan QS. Al-Insyirah dengan tartil dan harakat yang benar.',
        'Memahami pesan bahwa manusia diciptakan dalam bentuk paling mulia (Ahsani Taqwiim) serta mensyukuri karunia fisik dan akal budi.',
        'Menginternalisasi prinsip optimisme bahwa di balik setiap kesulitan pasti Allah sediakan kemudahan (Inna ma\'al \'usri yusra).',
      ],
      keyConcept:
        'Bab 1 membimbing peserta didik untuk mencintai Al-Qur\'an dan mencintai diri sendiri dengan menjaga kehormatan tubuh, berakhlak mulia, serta tidak berputus asa saat menghadapi tantangan belajar.',
      dailyHabits: [
        'Membiasakan membaca basmalah dan berdoa sebelum belajar agar hati dilapangkan Allah.',
        'Merawat kebersihan tubuh karunia Allah dan tidak minder ataupun sombong.',
        'Tidak mudah menyerah saat mengerjakan tugas yang sulit di sekolah.',
      ],
    },
    materialsDetail: {
      mat_1_1: {
        overview:
          'Surah At-Tin adalah surah ke-95 dalam Al-Qur\'an, terdiri dari 8 ayat dan termasuk golongan surah Makkiyah (diturunkan di Makkah sebelum hijrah). Nama At-Tin diambil dari kata pertama pada ayat ke-1 yang berarti buah Tin.',
        background:
          'Allah SWT membuka surah ini dengan bersumpah demi empat perkara agung: buah Tin, buah Zaitun, Bukit Sinai (tempat Nabi Musa AS bermunajat dan menerima Taurat), serta Kota Makkah yang aman (kota kelahiran Nabi Muhammad SAW dan tempat berdirinya Ka\'bah). Sumpah ini menegaskan betapa agungnya penciptaan manusia.',
        tafsirAndMeaning: [
          'Ayat 1-3: Sumpah demi buah Tin dan Zaitun melambangkan kawasan Syam dan Palestina tempat lahirnya nabi-nabi mulia seperti Nabi Isa AS. Bukit Sinai melambangkan risalah Nabi Musa AS, dan Kota Makkah melambangkan risalah Nabi Muhammad SAW.',
          'Ayat 4: "Laqad khalaqnal-insaana fii ahsani taqwiim" — Allah menegaskan bahwa manusia diciptakan dalam bentuk dan rancangan yang paling sempurna. Kesempurnaan ini meliputi keserasian jasmani, akal pikiran untuk menuntut ilmu, dan hati nurani untuk membedakan yang haq dan bathil.',
          'Ayat 5: "Tsumma radadnaahu asfala saafiliin" — Jika manusia tidak menggunakan akal dan hatinya untuk taat kepada Allah, maka Allah akan menjatuhkannya ke tingkat yang paling rendah dan hina (neraka), bahkan lebih rendah perilakunya daripada binatang.',
          'Ayat 6: Orang-orang yang beriman dan rajin beramal shalih dikecualikan dari kehinaan itu. Bagi mereka pahala yang mengalir tiada henti (ajrun ghairu mamnuun) di surga.',
          'Ayat 7-8: Tidak ada alasan bagi manusia untuk mendustakan hari pembalasan, karena Allah SWT adalah Hakim yang Maha Adil dan Maha Bijaksana (Ahkamul Haakimiin).',
        ],
        vocabulary: [
          { arabic: 'وَالتِّينِ', transliteration: 'Wat-Tiini', meaning: 'Demi buah Tin' },
          { arabic: 'وَالزَّيْتُونِ', transliteration: 'Waz-Zaituuni', meaning: 'Dan buah Zaitun' },
          { arabic: 'طُورِ سِينِينَ', transliteration: 'Thuuri Siiniin', meaning: 'Bukit Sinai' },
          { arabic: 'الْبَلَدِ الْأَمِينِ', transliteration: 'Al-Baladil Amiin', meaning: 'Kota Makkah yang aman' },
          { arabic: 'أَحْسَنِ تَقْوِيمٍ', transliteration: 'Ahsani Taqwiim', meaning: 'Bentuk yang sebaik-baiknya' },
          { arabic: 'أَسْفَلَ سَافِلِينَ', transliteration: 'Asfala Saafiliin', meaning: 'Tempat yang serendah-rendahnya' },
          { arabic: 'أَجْرٌ غَيْرُ مَمْنُونٍ', transliteration: 'Ajrun Ghairu Mamnuun', meaning: 'Pahala yang tiada putus-putusnya' },
          { arabic: 'أَحْكَمِ الْحَاكِمِينَ', transliteration: 'Ahkamil Haakimiin', meaning: 'Hakim yang paling adil' },
        ],
        coreLessons: [
          'Manusia adalah makhluk ciptaan Allah yang paling mulia derajatnya.',
          'Kemuliaan manusia bukan diukur dari kekayaan atau warna kulit, melainkan keimanan dan amal kebajikannya.',
          'Mengejek bentuk fisik orang lain adalah dosa karena mencela ciptaan Allah.',
          'Allah SWT pasti memberi balasan adil atas setiap amal perbuatan manusia di akhirat.',
        ],
        cintaApplication: [
          'Cinta Diri Sendiri: Merawat kesehatan badan, makan makanan bergizi dan halal, serta bersyukur atas rupa yang Allah berikan.',
          'Menghargai Sesama: Tidak pernah memanggil teman dengan julukan fisik atau mengejek kekurangan tubuh teman.',
          'Cinta Al-Qur\'an: Gemar membaca dan mentadaburi kandungan Surah At-Tin setiap hari.',
        ],
        faqOrFunFact: [
          {
            question: 'Mengapa Allah bersumpah dengan buah Tin dan Zaitun?',
            answer:
              'Para ulama tafsir menjelaskan buah Tin dan Zaitun kaya akan manfaat nutrisi dan pengobatan, serta melambangkan bumi para nabi (Baitul Maqdis / Syam). Allah bersumpah dengan makhluk-Nya untuk menarik perhatian kita akan keagungan ciptaan-Nya.',
          },
          {
            question: 'Apa maksud manusia diciptakan dalam Ahsani Taqwiim?',
            answer:
              'Artinya manusia memiliki rupa yang serasi, bisa berdiri tegak, serta dianugerahi akal pikiran dan hati. Hewan hanya memiliki nafsu tanpa akal, sementara manusia dapat berpikir dan memilih jalan kebaikan.',
          },
        ],
      },
      mat_1_2: {
        overview:
          'Surah Al-Insyirah (dikenal juga sebagai Surah Asy-Syarh) adalah surah ke-94 dalam Al-Qur\'an, terdiri dari 8 ayat dan tergolong surah Makkiyah. Surah ini diturunkan setelah Surah Ad-Dhuha sebagai pelipur lara dan penenang hati.',
        background:
          'Surah ini diturunkan ketika Rasulullah SAW menghadapi tekanan berat dan ejekan dari kaum kafir Quraisy saat mendakwahkan Islam di Makkah. Allah SWT menurunkan surah ini untuk menghibur, meneguhkan hati, dan melapangkan dada baginda Nabi.',
        tafsirAndMeaning: [
          'Ayat 1: "Alam nasyrah laka shadrak" — Bukankah Kami telah melapangkan dadamu (Muhammad)? Allah membersihkan hati Nabi dari keraguan dan mengisinya dengan hikmah, kesabaran, dan keimanan yang kokoh.',
          'Ayat 2-3: "Wa wadha\'na \'anka wizrak, alladzii anqadha zhahrak" — Dan Kami telah meringankan beban beratmu yang dahulu memberatkan punggungmu.',
          'Ayat 4: "Wa rafa\'na laka dzikrak" — Dan Kami tinggikan bagimu sebutan nama dan kemuliaanmu. Nama Nabi Muhammad SAW selalu disebut berdampingan dengan nama Allah dalam syahadat, adzan, iqamah, dan tasyahud shalat.',
          'Ayat 5-6: "Fa inna ma\'al-\'usri yusraa, inna ma\'al-\'usri yusraa" — Maka sesungguhnya beserta kesulitan ada kemudahan, sesungguhnya beserta kesulitan ada kemudahan. Allah mengulanginya dua kali! Kaidah bahasa Arab menegaskan: satu kesulitan tidak akan pernah mengalahkan dua kemudahan.',
          'Ayat 7: "Fa idzaa faraghta fanshab" — Apabila engkau telah selesai dari satu urusan ibadah atau pekerjaan, bersungguh-sungguhlah mengerjakan urusan yang lain. Islam melarang umatnya bermalas-malasan dan membuang waktu.',
          'Ayat 8: "Wa ilaa rabbika farghab" — Dan hanya kepada Tuhanmulah hendaknya engkau menumpahkan seluruh harapan dan tawakal.',
        ],
        vocabulary: [
          { arabic: 'نَشْرَحْ', transliteration: 'Nasyrah', meaning: 'Melapangkan / membukakan' },
          { arabic: 'صَدْرَكَ', transliteration: 'Shadraka', meaning: 'Dadamu' },
          { arabic: 'وِزْرَكَ', transliteration: 'Wizraka', meaning: 'Beban beratmu' },
          { arabic: 'ذِكْرَكَ', transliteration: 'Dzikraka', meaning: 'Sebutan / namamu' },
          { arabic: 'الْعُسْرِ', transliteration: 'Al-\'Usri', meaning: 'Kesulitan' },
          { arabic: 'يُسْرًا', transliteration: 'Yusraa', meaning: 'Kemudahan' },
          { arabic: 'فَانصَبْ', transliteration: 'Fanshab', meaning: 'Bekerjalah dengan sungguh-sungguh' },
          { arabic: 'فَارْغَب', transliteration: 'Farghab', meaning: 'Berharaplah kepada Allah' },
        ],
        coreLessons: [
          'Allah senantiasa menolong hamba-Nya yang bersabar dan ikhlas.',
          'Tidak ada kesulitan yang abadi; di balik setiap ujian pasti Allah sediakan pintu kemudahan.',
          'Seorang muslim harus memiliki jiwa optimis, pantang berputus asa, dan disiplin memanfaatkan waktu.',
          'Hanya kepada Allah SWT kita menggantungkan doa dan harapan.',
        ],
        cintaApplication: [
          'Semangat Belajar: Tidak menangis atau mengeluh saat menemui soal matematika atau hafalan yang sulit; tetap tenang, berwudhu, dan mencoba kembali.',
          'Produktivitas Harian: Setelah selesai belajar di sekolah, memanfaatkan waktu senggang untuk membantu orang tua atau membaca buku bermanfaat.',
          'Tawakal: Senantiasa berdoa memohon kelapangan hati sebelum memulai ujian.',
        ],
        faqOrFunFact: [
          {
            question: 'Mengapa janji kemudahan diulang dua kali dalam Surah Al-Insyirah?',
            answer:
              'Pengulangan pada ayat 5 dan 6 adalah penegasan kuat dari Allah. Kata "Al-\'Usri" (kesulitan) memakai alif lam (makrifah, berarti satu kesulitan yang sama), sedangkan "Yusra" (kemudahan) berbentuk nakirah (berarti bermacam-macam kemudahan baru). Jadi satu kesulitan dikepung oleh banyak kemudahan!',
          },
          {
            question: 'Bagaimana cara mempraktikkan ayat "Fa idza faraghta fanshab" bagi murid kelas 4?',
            answer:
              'Setelah selesai belajar di kelas, tidak lantas bermalas-malasan berjam-jam bermain HP, melainkan berpindah melakukan hal baik lain seperti shalat berjamaah, berolahraga, atau membantu merapikan rumah.',
          },
        ],
      },
    },
  },
  2: {
    worldId: 2,
    chapterSummary: {
      learningGoals: [
        'Menghafal dan mengartikan hadis tentang niat (HR. Bukhari & Muslim) dan hadis taqwa serta akhlak mulia (HR. Tirmidzi).',
        'Memahami bahwa niat yang ikhlas adalah syarat utama diterimanya setiap amal ibadah dan perbuatan baik.',
        'Membiasakan sikap taqwa di mana pun berada, segera bertaubat saat khilaf, dan berakhlak mulia kepada semua orang.',
      ],
      keyConcept:
        'Bab 2 menanamkan kejujuran hati nurani dan rasa cinta kepada Allah dan Rasul-Nya melalui ketulusan niat dan ketakwaan yang nyata dalam perilaku sehari-hari.',
      dailyHabits: [
        'Meluruskan niat saat berangkat ke sekolah: menuntut ilmu karena Allah dan membahagiakan orang tua.',
        'Tidak berbuat curang saat bermain atau ujian, meski tidak diawasi guru atau orang tua.',
        'Segera meminta maaf dan berbuat baik jika tanpa sengaja menyakiti hati teman.',
      ],
    },
    materialsDetail: {
      mat_2_1: {
        overview:
          'Hadis tentang niat adalah salah satu hadis paling agung dalam ajaran Islam. Diriwayatkan oleh Amirul Mukminin Abu Hafsh Umar bin Khattab radhiyallahu \'anhu dalam kitab Shahih Bukhari (nomor 1) dan Shahih Muslim (nomor 1907).',
        background:
          'Para ulama hadis menyebutkan hadis ini berkaitan dengan peristiwa seorang laki-laki yang ikut berhijrah dari Makkah ke Madinah bukan semata-mata karena Allah dan Rasul, melainkan demi menikahi seorang wanita bernama Ummu Qais. Maka Rasulullah SAW menegaskan bahwa nilai setiap hijrah dan amal bergantung pada niat pelakunya.',
        tafsirAndMeaning: [
          'Lafadz "Innamal a\'maalu bin-niyyaat": Kata "innama" berfungsi untuk membatasi (hasyr), artinya sah dan diterimanya seluruh amal perbuatan itu semata-mata ditentukan oleh niatnya.',
          'Niat bertempat di dalam hati (al-qalb). Niat berfungsi membedakan antara perbuatan kebiasaan biasa (seperti mandi untuk mendinginkan badan) dengan ibadah (mandi wajib / bersuci).',
          'Niat juga membedakan tujuan beramal: apakah ikhlas semata-mata mencari ridha Allah, atau demi mendapatkan pujian manusia (riya\') dan keuntungan duniawi semata.',
          'Lafadz "Wa innamaa likullim-ri-in maa nawaa": Setiap orang hanya akan memperoleh balasan pahala sesuai dengan apa yang ia niatkan dalam hatinya.',
        ],
        vocabulary: [
          { arabic: 'إِنَّمَا', transliteration: 'Innamaa', meaning: 'Sesungguhnya / hanyalah' },
          { arabic: 'الْأَعْمَالُ', transliteration: 'Al-A\'maalu', meaning: 'Amal-amal perbuatan' },
          { arabic: 'بِالنِّيَّاتِ', transliteration: 'Bin-Niyyaat', meaning: 'Dengan niat-niat' },
          { arabic: 'لِكُلِّ امْرِئٍ', transliteration: 'Likullim-ri-in', meaning: 'Bagi setiap orang' },
          { arabic: 'مَا نَوَى', transliteration: 'Maa nawaa', meaning: 'Apa yang dia niatkan' },
          { arabic: 'هِجْرَتُهُ', transliteration: 'Hijratuhu', meaning: 'Hijrah / perpindahannya' },
        ],
        coreLessons: [
          'Niat yang ikhlas adalah ruh dari setiap amal kebajikan.',
          'Perbuatan mubah (seperti makan, tidur, belajar) dapat bernilai pahala ibadah jika diniatkan untuk menguatkan ibadah kepada Allah.',
          'Riya\' (pamer agar dipuji orang) adalah syirik kecil yang dapat menghanguskan pahala amal shalih.',
          'Allah Maha Mengetahui isi hati hamba-Nya yang terdalam.',
        ],
        cintaApplication: [
          'Kejujuran Batin: Memasukkan uang infak ke kotak amal tanpa perlu menoleh mencari perhatian teman.',
          'Niat Belajar: Belajar dengan sungguh-sungguh bukan demi ranking semata, melainkan agar ilmunya bermanfaat bagi umat dan agama.',
          'Membantu Orang Tua: Membantu ibu dengan sukarela tanpa menuntut imbalan uang jajan.',
        ],
        faqOrFunFact: [
          {
            question: 'Apakah Imam Syafi\'i memuji hadis tentang niat ini?',
            answer:
              'Ya! Imam Syafi\'i berkata: "Hadis tentang niat ini mencakup sepertiga dari seluruh ilmu Islam, dan masuk ke dalam 70 bab ilmu fiqih."',
          },
          {
            question: 'Bagaimana jika kita lupa berniat sebelum belajar?',
            answer:
              'Kita bisa langsung berniat di dalam hati kapan saja kita ingat, membaca basmalah dan memohon keberkahan ilmu kepada Allah.',
          },
        ],
      },
      mat_2_2: {
        overview:
          'Hadis tentang taqwa dan akhlak mulia diriwayatkan oleh sahabat mulia Abu Dzar Al-Ghifari dan Mu\'adz bin Jabal radhiyallahu \'anhuma, dicatat oleh Imam At-Tirmidzi (hadis nomor 1987) dengan derajat hasan shahih.',
        background:
          'Rasulullah SAW memberikan wasiat emas ini kepada sahabat Mu\'adz bin Jabal sebelum beliau diutus berdakwah ke negeri Yaman sebagai pedoman hidup seorang muslim dalam menjaga hubungan dengan Allah dan hubungan dengan sesama manusia.',
        tafsirAndMeaning: [
          'Wasiat 1: "Ittaqillaaha haitsumaa kunta" (Bertaqwalah kepada Allah di mana pun engkau berada). Taqwa adalah menjalankan perintah Allah dan menjauhi larangan-Nya. Taqwa harus dijaga saat bersama orang banyak maupun saat sendirian tanpa ada yang melihat.',
          'Wasiat 2: "Wa atbi\'is-sayyiatil-hasanata tamhuhaa" (Dan iringilah keburukan dengan perbuatan baik, niscaya kebaikan itu akan menghapusnya). Manusia tidak luput dari salah dan khilaf. Bila terlanjur berbuat salah, segera bertaubat, beristighfar, dan lakukan kebaikan (seperti sedekah atau shalat sunnah) untuk menghapusnya.',
          'Wasiat 3: "Wa khaaliqin-naasa bikhuluqin hasan" (Dan pergauililah manusia dengan akhlak yang mulia). Bergaul dengan sesama dengan tutur kata sopan, wajah berseri, suka menolong, toleran, dan tidak menyakiti perasaan siapapun.',
        ],
        vocabulary: [
          { arabic: 'اتَّقِ اللَّهَ', transliteration: 'Ittaqillaaha', meaning: 'Bertaqwalah kepada Allah' },
          { arabic: 'حَيْثُمَا كُنْتَ', transliteration: 'Haitsumaa kunta', meaning: 'Di mana pun engkau berada' },
          { arabic: 'وَأَتْبِعِ', transliteration: 'Wa atbi\'', meaning: 'Dan iringilah' },
          { arabic: 'السَّيِّئَةَ', transliteration: 'As-Sayyi\'ata', meaning: 'Keburukan / kesalahan' },
          { arabic: 'الْحَسَنَةَ', transliteration: 'Al-Hasanata', meaning: 'Kebaikan' },
          { arabic: 'تَمْحُهَا', transliteration: 'Tamhuhaa', meaning: 'Niscaya menghapusnya' },
          { arabic: 'وَخَالِقِ النَّاسَ', transliteration: 'Wa khaaliqin-naasa', meaning: 'Dan pergaulilah manusia' },
          { arabic: 'بِخُلُقٍ حَسَنٍ', transliteration: 'Bikhuluqin hasan', meaning: 'Dengan akhlak yang mulia' },
        ],
        coreLessons: [
          'Taqwa sejati adalah merasa selalu diawasi oleh Allah SWT (Muraqabatullah).',
          'Pintu taubat selalu terbuka lebar bagi hamba yang mau memperbaiki diri.',
          'Kebaikan memiliki daya pembersih yang dapat menghapus dosa-dosa kecil.',
          'Islam menggabungkan kesalehan ritual (hubungan dengan Allah) dan kesalehan sosial (akhlak mulia kepada manusia).',
        ],
        cintaApplication: [
          'Integritas di Sekolah: Tetap tidak mencontek saat ujian meskipun guru sedang keluar kelas.',
          'Minta Maaf Langsung: Jika tanpa sengaja menjatuhkan buku teman, segera meminta maaf dengan sopan dan membantu merapikannya kembali.',
          'Santun dalam Bergaul: Menghormati teman yang berbeda suku dan menyapa bapak ibu penjaga sekolah dengan senyum.',
        ],
        faqOrFunFact: [
          {
            question: 'Apa arti Muraqabatullah?',
            answer:
              'Muraqabatullah adalah perasaan yakin dalam hati bahwa Allah Maha Melihat (Al-Bashir) dan Maha Mengetahui (Al-\'Alim) setiap gerak-gerik kita, baik di tempat terang maupun di tempat sunyi.',
          },
          {
            question: 'Apakah tersenyum termasuk akhlak yang mulia?',
            answer:
              'Benar sekali! Rasulullah SAW bersabda: "Senyummu di hadapan saudaramu adalah sedekah." Senyum yang tulus mencairkan suasana dan menebarkan kebahagiaan.',
          },
        ],
      },
    },
  },
  3: {
    worldId: 3,
    chapterSummary: {
      learningGoals: [
        'Memahami keutamaan berlaku jujur (As-Sidq) dan bahaya berkata dusta dalam kehidupan sehari-hari.',
        'Menerapkan adab berbakti kepada kedua orang tua (Birrul Walidain) dan guru sebagai pintu meraih ridha Allah.',
        'Meneladani sifat amanah Rasulullah SAW yang bergelar Al-Amin.',
      ],
      keyConcept:
        'Bab 3 menanamkan nilai kejujuran, tanggung jawab moral, dan kasih sayang berbakti kepada orang tua dan guru sesuai tuntunan Al-Qur\'an dan Hadis.',
      dailyHabits: [
        'Selalu berkata jujur dan berani mengakui kesalahan tanpa mencari kambing hitam.',
        'Mencium tangan kedua orang tua saat hendak berangkat dan pulang sekolah.',
        'Mendoakan orang tua setiap selesai shalat fardhu.',
      ],
    },
    materialsDetail: {
      mat_3_1: {
        overview:
          'Kejujuran (As-Sidq) adalah mahkota kepribadian seorang muslim. Hadis tentang keutamaan jujur diriwayatkan oleh sahabat mulia Abdullah bin Mas\'ud radhiyallahu \'anhu dalam Shahih Muslim (nomor 2607) dan Shahih Bukhari.',
        background:
          'Sejak masa mudanya, Nabi Muhammad SAW dikenal oleh seluruh bangsa Arab sebagai sosok yang tidak pernah berbohong, sehingga beliau dianugerahi gelar kehormatan "Al-Amin" (Orang yang terpercaya). Kejujuran adalah pondasi kepercayaan dalam hidup bermasyarakat.',
        tafsirAndMeaning: [
          'Lafadz "‘Alaikum bis-shidqi" (Hendaklah kalian berlaku jujur): Perintah tegas dari Nabi untuk memegang teguh kejujuran dalam segala situasi.',
          '"Fa innash-shidqa yahdii ilal-birri" (Karena sesungguhnya kejujuran itu menuntun kepada kebaikan): Kejujuran membuka jalan bagi perbuatan-perbuatan baik lainnya seperti kedermawanan, tanggung jawab, dan kesetiaan.',
          '"Wa innal-birra yahdii ilal-jannah" (Dan kebaikan itu menuntun ke surga): Balasan tertinggi bagi orang yang jujur adalah kenikmatan surga Allah.',
          'Sebaliknya, kebohongan (Al-Kadzib) menuntun kepada kejahatan dan dosa (Al-Fujur), dan kejahatan menuntun pelakunya ke dalam api neraka.',
        ],
        vocabulary: [
          { arabic: 'عَلَيْكُمْ بِالصِّدْقِ', transliteration: '\'Alaikum bis-shidqi', meaning: 'Wajib atas kalian berlaku jujur' },
          { arabic: 'يَهْدِي', transliteration: 'Yahdii', meaning: 'Membimbing / menuntun' },
          { arabic: 'الْبِرِّ', transliteration: 'Al-Birri', meaning: 'Kebaikan yang luas' },
          { arabic: 'الْجَنَّةِ', transliteration: 'Al-Jannati', meaning: 'Surga' },
          { arabic: 'الْكِذْبَ', transliteration: 'Al-Kadziba', meaning: 'Dusta / bohong' },
          { arabic: 'الْفُجُورِ', transliteration: 'Al-Fujuuri', meaning: 'Kejahatan / dosa' },
          { arabic: 'الْأَمِينُ', transliteration: 'Al-Amiin', meaning: 'Orang yang terpercaya' },
        ],
        coreLessons: [
          'Kejujuran mendatangkan ketenangan batin, sedangkan kedustaan menimbulkan rasa was-was dan ketakutan.',
          'Kejujuran mencakup jujur dalam niat, jujur dalam perkataan, dan jujur dalam perbuatan.',
          'Orang yang membiasakan diri jujur akan dicatat di sisi Allah sebagai Shiddiq (orang yang sangat jujur).',
          'Sekali berdusta akan memicu kebohongan-kebohongan berikutnya untuk menutupi dusta pertama.',
        ],
        cintaApplication: [
          'Jujur saat Ujian: Mengerjakan ulangan sendiri tanpa melirik lembar jawaban teman.',
          'Jujur tentang Uang Kembalian: Mengembalikan sisa uang belanjaan kepada ibu tanpa mengambilnya secara diam-diam.',
          'Mengakui Kekeliruan: Berani berkata "Saya yang memecahkannya bu, maafkan saya" saat tidak sengaja merusak barang.',
        ],
        faqOrFunFact: [
          {
            question: 'Apakah ada kebohongan yang diperbolehkan dalam Islam?',
            answer:
              'Islam sangat tegas melarang dusta. Pengecualian hanya ada dalam 3 hal darurat: untuk mendamaikan dua orang yang bertengkar hebat, taktik dalam peperangan mempertahankan negara, dan ucapan kasih sayang suami-istri demi keharmonisan keluarga.',
          },
          {
            question: 'Mengapa orang yang suka bohong sulit dipercaya orang lain?',
            answer:
              'Karena kepercayaan ibarat kaca; jika sekali retak akibat kebohongan, sangat sulit untuk kembali utuh seperti sedia kala.',
          },
        ],
      },
      mat_3_2: {
        overview:
          'Berbakti kepada orang tua (Birrul Walidain) adalah kewajiban paling mulia setelah tauhid kepada Allah. Hadis tentang ridha orang tua diriwayatkan oleh Abdullah bin \'Amr radhiyallahu \'anhuma dalam Sunan At-Tirmidzi (nomor 1899).',
        background:
          'Dalam Al-Qur\'an Surah Al-Isra ayat 23-24, Allah SWT menggandengkan perintah beribadah kepada-Nya dengan perintah berbuat baik kepada kedua orang tua. Ibu mengandung selama 9 bulan dengan susah payah, melahirkan, dan merawat anak, sedangkan ayah bekerja membanting tulang mencari nafkah yang halal.',
        tafsirAndMeaning: [
          '"Ridhar-rabbi fii ridhal-waalidi" (Ridha Allah bergantung pada ridha kedua orang tua): Allah SWT meridhai seorang anak apabila ayah dan ibunya merasa ridha, bahagia, dan bangga atas akhlak anak tersebut.',
          '"Wa sakhatur-rabbi fii sakhatil-waalidi" (Dan murka Allah bergantung pada murka kedua orang tua): Murka Allah akan menimpa anak yang menyakiti hati orang tuanya, membantah dengan kasar, atau menelantarkan mereka.',
          'Adab Berbakti: Al-Qur\'an melarang anak mengucapkan perkataan "Uff" (kata "Ah" atau desahan kesal) kepada orang tua dan melarang membentak mereka.',
          'Kewajiban mendoakan: "Rabbighfir lii wa liwaalidayya warhamhumaa kamaa rabbayaanii shaghiiraa".',
        ],
        vocabulary: [
          { arabic: 'رِضَا الرَّبِّ', transliteration: 'Ridhar-Rabbi', meaning: 'Ridha Allah' },
          { arabic: 'رِضَا الْوَالِدِ', transliteration: 'Ridhal-Waalidi', meaning: 'Ridha orang tua' },
          { arabic: 'سَخَطُ', transliteration: 'Sakhatu', meaning: 'Kemurkaan' },
          { arabic: 'بِرُّ الْوَالِدَيْنِ', transliteration: 'Birrul Waalidain', meaning: 'Berbakti kepada kedua orang tua' },
          { arabic: 'عُقُوقُ الْوَالِدَيْنِ', transliteration: '\'Uquuqul Waalidain', meaning: 'Durhaka kepada kedua orang tua' },
          { arabic: 'فَلَا تَقُل لَّهُمَا أُفٍّ', transliteration: 'Falaa taqul lahumaa uff', meaning: 'Jangan berkata "ah" kepada keduanya' },
        ],
        coreLessons: [
          'Berbakti kepada orang tua adalah jalan pintas meraih surga Allah SWT.',
          'Doa orang tua untuk anaknya termasuk doa yang mustajab (pasti dikabulkan Allah).',
          'Durhaka kepada orang tua adalah dosa besar nomor dua setelah syirik.',
          'Berbakti tetap berlanjut bahkan setelah orang tua wafat melalui doa, sedekah atas nama mereka, dan menyambung silaturahmi dengan kerabat mereka.',
        ],
        cintaApplication: [
          'Mendengarkan Nasihat: Tidak cemberut atau membantah saat disuruh ibu mandi atau belajar.',
          'Membantu Pekerjaan Rumah: Menyapu lantai, mencuci piring makan sendiri, dan merapikan kamar tidur tanpa disuruh.',
          'Tutur Kata Lembut: Berbicara kepada orang tua dengan nada suara yang tenang, hormat, dan penuh kasih sayang.',
        ],
        faqOrFunFact: [
          {
            question: 'Mengapa Rasulullah menyebut ibu sebanyak tiga kali baru kemudian ayah?',
            answer:
              'Dalam hadis riwayat Bukhari dan Muslim, saat ditanya siapa orang yang paling berhak diperlakukan baik, Rasulullah menjawab: "Ibumu, ibumu, ibumu, kemudian ayahmu." Ini karena ibu mengalami tiga kesulitan besar: mengandung, melahirkan, dan menyusui.',
          },
          {
            question: 'Bagaimana cara berbakti jika orang tua menyuruh hal yang bertentangan dengan agama?',
            answer:
              'Kita tidak boleh menaati perintah yang melanggar syariat, namun tetap wajib menolaknya dengan tutur kata yang paling santun dan tetap berbuat baik kepada mereka di dunia.',
          },
        ],
      },
    },
  },
  4: {
    worldId: 4,
    chapterSummary: {
      learningGoals: [
        'Memahami kandungan hadis ukhuwah tentang mencintai sesama seperti mencintai diri sendiri (HR. Bukhari & Muslim).',
        'Menerapkan nilai tasamuh (toleransi), kerukunan, dan perdamaian di tengah keberagaman bangsa sesuai QS. Al-Hujurat: 10 & 13.',
        'Mencegah segala bentuk perundungan (bullying) dan menumbuhkan empati di madrasah/sekolah.',
      ],
      keyConcept:
        'Bab 4 membina kasih sayang persaudaraan antar teman, menghargai keberagaman suku dan adat nusantara, serta menumbuhkan empati tolong-menolong.',
      dailyHabits: [
        'Mau berteman dan bermain dengan siapa saja tanpa membeda-bedakan suku, logat daerah, atau kekayaan.',
        'Menjenguk teman yang sakit dan mendoakan kesembuhannya.',
        'Menjadi juru damai saat melihat dua teman sedang berselisih paham.',
      ],
    },
    materialsDetail: {
      mat_4_1: {
        overview:
          'Hadis tentang ukhuwah dan kasih sayang diriwayatkan oleh sahabat Anas bin Malik radhiyallahu \'anhu dalam kitab Shahih Bukhari (nomor 13) dan Shahih Muslim (nomor 45).',
        background:
          'Islam datang mempersatukan kaum Muhajirin (pendatang dari Makkah) dan kaum Anshar (penduduk asli Madinah) yang sebelumnya saling terpecah belah oleh perang suku puluhan tahun. Rasulullah SAW mempersaudarakan mereka atas dasar iman dan kasih sayang.',
        tafsirAndMeaning: [
          'Lafadz "Laa yu\'minu ahadukum" (Tidak beriman secara sempurna salah seorang di antara kalian): Yang dimaksud bukanlah hilang iman sama sekali, melainkan imannya belum mencapai puncak kesempurnaan.',
          '"Hattaa yuhibba li-akhiihi maa yuhibbu linafsih" (Hingga ia mencintai bagi saudaranya apa yang ia cintai bagi dirinya sendiri): Standar emas empati muslim.',
          'Jika kita senang dipuji dan dihargai, maka hargailah teman kita. Jika kita sakit hati saat diejek, jangan pernah mengejek orang lain.',
          'Seorang muslim tidak boleh merasa iri (hasad) saat temannya mendapat nilai bagus atau prestasi, melainkan ikut berbahagia dan mendoakan keberkahan.',
        ],
        vocabulary: [
          { arabic: 'لَا يُؤْمِنُ', transliteration: 'Laa yu\'minu', meaning: 'Tidak sempurna iman' },
          { arabic: 'حَتَّى يُحِبَّ', transliteration: 'Hattaa yuhibba', meaning: 'Hingga ia mencintai' },
          { arabic: 'لِأَخِيهِ', transliteration: 'Li-akhiihi', meaning: 'Bagi saudaranya' },
          { arabic: 'مَا يُحِبُّ', transliteration: 'Maa yuhibbu', meaning: 'Apa yang ia sukai' },
          { arabic: 'لِنَفْسِهِ', transliteration: 'Linafsihi', meaning: 'Bagi dirinya sendiri' },
          { arabic: 'أُخُوَّةٌ', transliteration: 'Ukhuwwah', meaning: 'Persaudaraan' },
        ],
        coreLessons: [
          'Iman dan kasih sayang kepada sesama adalah dua hal yang tidak terpisahkan.',
          'Empati berarti mampu merasakan apa yang dirasakan orang lain.',
          'Perundungan (bullying) baik secara verbal maupun fisik bertentangan dengan ajaran Islam.',
          'Mendoakan kebaikan untuk sahabat secara diam-diam akan diaminkan oleh malaikat.',
        ],
        cintaApplication: [
          'Berbagi Rezeki: Membagi kue atau bekal makanan kepada teman sebangku yang tidak membawa uang saku.',
          'Membantu Belajar: Sabar mengajari teman yang kesulitan memahami materi pelajaran.',
          'Menghibur Sahabat: Duduk menemani dan mendengarkan curahan hati teman yang sedang bersedih.',
        ],
        faqOrFunFact: [
          {
            question: 'Bagaimana perumpamaan persaudaraan sesama mukmin menurut Rasulullah?',
            answer:
              'Rasulullah SAW bersabda: "Perumpamaan orang-orang mukmin dalam cinta dan kasih sayangnya ibarat satu tubuh; jika satu anggota tubuh merasakan sakit, maka seluruh tubuh akan merasa demam dan tidak bisa tidur." (HR. Muslim).',
          },
          {
            question: 'Apa hukum menyebarkan aib atau kekurangan teman?',
            answer:
              'Hukumnya haram dan termasuk dosa ghibah. Rasulullah mengajarkan kita untuk menutup aib saudara kita agar Allah menutup aib kita di hari kiamat.',
          },
        ],
      },
      mat_4_2: {
        overview:
          'Toleransi (Tasamuh) dan persaudaraan bangsa diatur dalam Al-Qur\'an Surah Al-Hujurat ayat 10 dan 13. Ayat-ayat ini menjadi landasan kerukunan dan persatuan umat beragama dan berbangsa.',
        background:
          'Surah Al-Hujurat diturunkan di Madinah (Madaniyah). Ayat ini mengingatkan seluruh umat manusia bahwa keberagaman adalah sunnatullah (ketetapan Allah) yang harus disyukuri, bukan alasan untuk bermusuhan.',
        tafsirAndMeaning: [
          'Ayat 10: "Innamal-mu\'minuuna ikhwatun fa ashlihuu baina akhawaykum" — Sesungguhnya orang-orang mukmin itu bersaudara, karena itu damaikanlah antara kedua saudaramu yang berselisih.',
          'Ayat 13: "Yaa ayyuhan-naasu innaa khalaqnaakum min dzakarin wa untsaa wa ja\'alnaakum syu\'uuban wa qabaa-ila lita\'aarafuu" — Wahai manusia, Kami menciptakan kamu dari laki-laki dan perempuan, dan Kami jadikan kamu berbangsa-bangsa dan bersuku-suku agar kamu saling mengenal.',
          '"Inna akramakum \'indallaahi atqaakum" — Sesungguhnya orang yang paling mulia di antara kalian di sisi Allah adalah orang yang paling bertaqwa. Bukan yang paling kaya, bukan yang kulitnya paling putih, dan bukan yang sukunya paling banyak.',
          'Prinsip Tasamuh: Menghormati perbedaan pendapat, saling menghargai tradisi yang baik, dan hidup rukun berdampingan secara damai.',
        ],
        vocabulary: [
          { arabic: 'إِخْوَةٌ', transliteration: 'Ikhwatun', meaning: 'Bersaudara' },
          { arabic: 'فَأَصْلِحُوا', transliteration: 'Fa ashlihuu', meaning: 'Maka damaikanlah' },
          { arabic: 'شُعُوبًا', transliteration: 'Syu\'uuban', meaning: 'Berbangsa-bangsa' },
          { arabic: 'قَبَائِلَ', transliteration: 'Qabaa-ila', meaning: 'Bersuku-suku' },
          { arabic: 'لِتَعَارَفُوا', transliteration: 'Lita\'aarafuu', meaning: 'Agar kamu saling mengenal' },
          { arabic: 'أَكْرَمَكُمْ', transliteration: 'Akramakum', meaning: 'Paling mulia di antara kalian' },
          { arabic: 'أَتْقَاكُمْ', transliteration: 'Atqaakum', meaning: 'Paling bertaqwa di antara kalian' },
          { arabic: 'تَسَامُحٌ', transliteration: 'Tasaamuh', meaning: 'Toleransi / lapang dada' },
        ],
        coreLessons: [
          'Perbedaan suku, budaya, bahasa daerah, dan warna kulit adalah kekayaan karunia Allah.',
          'Tujuan keberagaman adalah "Lita\'aarafuu" (saling mengenal, berkolaborasi, dan tolong-menolong).',
          'Tolak ukur kemuliaan manusia di hadapan Allah hanyalah ketaqwaan.',
          'Kewajiban setiap muslim untuk menjadi juru damai saat melihat perselisihan.',
        ],
        cintaApplication: [
          'Cinta Tanah Air: Bangga terhadap keragaman budaya Indonesia dan rukun dengan teman dari berbagai daerah.',
          'Menghargai Musyawarah: Mendengarkan pendapat teman dalam kerja kelompok tanpa memotong pembicaraan.',
          'Anti Diskriminasi: Mengajak semua anak bermain bersama di jam istirahat tanpa memandang latar belakang keluarganya.',
        ],
        faqOrFunFact: [
          {
            question: 'Apa arti kata "Lita\'aarafuu"?',
            answer:
              'Berasal dari kata \'arafa yang berarti mengenal. Maksudnya saling memahami karakter, bertukar kebaikan ilmu, dan saling melengkapi kelebihan masing-masing bangsa.',
          },
          {
            question: 'Bagaimana cara mendamaikan teman yang bertengkar?',
            answer:
              'Ajak keduanya duduk dengan tenang, dengarkan alasan masing-masing dengan adil, ingatkan hadis persaudaraan, dan dorong mereka saling memaafkan dan bersalaman.',
          },
        ],
      },
    },
  },
  5: {
    worldId: 5,
    chapterSummary: {
      learningGoals: [
        'Memahami hadis kebersihan sebagai bagian dari iman (HR. Muslim).',
        'Memahami keutamaan sedekah menanam pohon dan merawat alam (HR. Bukhari).',
        'Mempraktikkan adab hemat air wudhu dan merawat kelestarian lingkungan sekolah dan rumah.',
      ],
      keyConcept:
        'Bab 5 mendidik generasi cinta lingkungan hidup, menjaga kebersihan diri dan ruang belajar, serta memandang alam semesta sebagai amanah khilafah dari Allah SWT.',
      dailyHabits: [
        'Membuang sampah pada tempatnya dan memilah sampah organik serta anorganik.',
        'Menghemat penggunaan air saat berwudhu dan mematikan kran air yang menetes.',
        'Menyiram dan merawat tanaman di pekarangan rumah dan halaman madrasah.',
      ],
    },
    materialsDetail: {
      mat_5_1: {
        overview:
          'Hadis tentang kesucian dan kebersihan diri diriwayatkan oleh sahabat mulia Abu Malik Al-Harits bin Ashim Al-Asy\'ari radhiyallahu \'anhu dalam Shahih Muslim (hadis nomor 223).',
        background:
          'Islam adalah agama yang sangat menjunjung tinggi kebersihan dan keindahan. Sebelum menghadap Allah dalam shalat lima waktu, setiap muslim diwajibkan menyucikan diri dengan berwudhu atau mandi janabah.',
        tafsirAndMeaning: [
          '"Ath-thuhuuru syathrul-iimaan" (Bersuci/kebersihan adalah separuh dari keimanan): Kata "Ath-Thuhur" mencakup dua dimensi: thaharah lahiriyah (kebersihan tubuh, pakaian, tempat tinggal dari najis dan kotoran) dan thaharah bathiniyah (kebersihan hati dari syirik, riya\', dengki, dan dendam).',
          'Menjaga kebersihan badan dengan mandi teratur, memotong kuku, menggosok gigi (siwak), dan memakai wewangian saat shalat Jumat.',
          'Menjaga kebersihan lingkungan tempat umum: Rasulullah melarang buang air di jalan yang dilewati manusia, di tempat berteduh, atau di sumber air bersih karena mendatangkan laknat dan penyakit.',
        ],
        vocabulary: [
          { arabic: 'الطَّهُورُ', transliteration: 'Ath-Thuhuuru', meaning: 'Bersuci / kebersihan' },
          { arabic: 'شَطْرُ', transliteration: 'Syathru', meaning: 'Separuh / sebagian dari' },
          { arabic: 'الْإِيمَانِ', transliteration: 'Al-Iimaan', meaning: 'Keimanan' },
          { arabic: 'نَظَافَةٌ', transliteration: 'Nazhaafah', meaning: 'Kebersihan' },
          { arabic: 'وُضُوءٌ', transliteration: 'Wudhuu\'', meaning: 'Berwudhu' },
        ],
        coreLessons: [
          'Kebersihan adalah bukti nyata keimanan seseorang kepada Allah SWT.',
          'Allah mencintai orang-orang yang bertaubat dan orang-orang yang menyucikan diri (QS. Al-Baqarah: 222).',
          'Lingkungan yang bersih menjauhkan kuman penyakit dan mendatangkan kenyamanan belajar.',
          'Memungut duri atau sampah dari jalanan adalah salah satu cabang iman.',
        ],
        cintaApplication: [
          'Piket Kelas: Melaksanakan piket menyapu dan menghapus papan tulis dengan ikhlas dan gembira.',
          'Kebersihan Diri: Rajin mencuci tangan sebelum makan dan berwudhu dengan tertib.',
          'Menjaga Fasilitas Umum: Tidak mencoret-coret meja sekolah atau dinding toilet madrasah.',
        ],
        faqOrFunFact: [
          {
            question: 'Apa kaitan antara shalat dan wudhu dalam hal kebersihan?',
            answer:
              'Shalat tidak akan sah tanpa bersuci (wudhu). Dengan berwudhu minimal 5 kali sehari, seorang muslim secara teratur membersihkan wajah, tangan, telinga, dan kaki dari kotoran dan debu.',
          },
          {
            question: 'Mengapa memungut sampah di jalan disebut bagian dari iman?',
            answer:
              'Rasulullah SAW bersabda bahwa iman memiliki 70 lebih cabang; yang tertinggi adalah la ilaha illallah dan yang paling rendah adalah menyingkirkan gangguan (seperti duri, batu, atau sampah) dari jalanan.',
          },
        ],
      },
      mat_5_2: {
        overview:
          'Hadis tentang sedekah menanam tanaman dan menjaga kelestarian alam diriwayatkan oleh sahabat mulia Anas bin Malik radhiyallahu \'anhu dalam Shahih Bukhari (nomor 2320) dan Shahih Muslim (nomor 1552).',
        background:
          'Nabi Muhammad SAW sangat mencintai penghijauan dan kelestarian alam. Beliau menetapkan kawasan konservasi alam di sekitar Madinah (disebut Al-Hima) di mana pohon tidak boleh ditebang sembarangan dan binatang liar tidak boleh diburu tanpa hak.',
        tafsirAndMeaning: [
          '"Maa min muslimin yagh-risu gharsan aw yazra\'u zar\'an" (Tidaklah seorang muslim menanam sebatang pohon atau menabur benih tanaman): Perintah untuk aktif menghijaukan bumi.',
          '"Fa-ya\'kulu minhu thairun aw insaanun illaa kaana lahuu bihii shadaqah" (Lalu burung, binatang, atau manusia memakan darinya melainkan bernilai sedekah baginya): Setiap buah, dedaunan, atau bahkan oksigen yang dihasilkan tanaman dan dinikmati makhluk hidup dicatat sebagai sedekah jariyah bagi penanamnya.',
          'Larangan Israf (Boros Air): Ketika Nabi melihat sahabat Sa\'ad berwudhu dengan air berlimpah, Nabi menegur: "Jangan boros memakai air sekalipun engkau berada di sungai yang mengalir deras!"',
          'Tanggung Jawab Khilafah: Manusia diutus di bumi sebagai khalifah untuk merawat dan memakmurkan bumi, bukan merusaknya.',
        ],
        vocabulary: [
          { arabic: 'يَغْرِسُ غَرْسًا', transliteration: 'Yaghrisu gharsan', meaning: 'Menanam tanaman/pohon' },
          { arabic: 'يَزْرَعُ زَرْعًا', transliteration: 'Yazra\'u zar\'an', meaning: 'Menabur benih' },
          { arabic: 'طَيْرٌ', transliteration: 'Thairun', meaning: 'Burung' },
          { arabic: 'إِنسَانٌ', transliteration: 'Insaanun', meaning: 'Manusia' },
          { arabic: 'صَدَقَةٌ', transliteration: 'Shadaqah', meaning: 'Pahala sedekah' },
          { arabic: 'لَا تُسْرِفْ', transliteration: 'Laa tusrif', meaning: 'Janganlah berlebih-lebihan' },
        ],
        coreLessons: [
          'Merawat lingkungan adalah bentuk ibadah sosial dan ekologis dalam Islam.',
          'Menanam pohon adalah amal jariyah yang pahalanya terus mengalir meskipun penanamnya sudah meninggal dunia.',
          'Islam melarang pemborosan sumber daya alam (air, energi, makanan).',
          'Menyayangi binatang dan tumbuhan mendatangkan rahmat dan kasih sayang Allah.',
        ],
        cintaApplication: [
          'Menanam Tanaman di Pot: Menanam cabai, bunga melati, atau pohon buah di halaman rumah atau sekolah.',
          'Hemat Air: Membuka kran air wudhu secukupnya dan mematikan kran saat menyabuni tangan.',
          'Tidak Memetik Bunga Sembarangan: Menghargai keindahan taman sekolah tanpa merusak ranting dan daunnya.',
        ],
        faqOrFunFact: [
          {
            question: 'Apa pesan Nabi jika kiamat hendak tiba sementara di tangan kita ada bibit pohon?',
            answer:
              'Rasulullah SAW bersabda: "Sekiranya hari kiamat hendak terjadi, sedangkan di tangan salah seorang di antaramu ada bibit pohon kurma, jika ia mampu menanamnya sebelum kiamat berdiri, maka tanamlah!" (HR. Ahmad). Ini membuktikan betapa tingginya anjuran menanam dalam Islam!',
          },
          {
            question: 'Mengapa burung yang memakan buah tanaman kita dihitung sedekah?',
            answer:
              'Karena Allah Maha Pemurah. Sekalipun tanpa niat khusus menjualnya, setiap makhluk bernyawa yang terenyang oleh rezeki dari tanaman kita dinilai sebagai kebaikan oleh Allah SWT.',
          },
        ],
      },
    },
  },
  6: {
    worldId: 6,
    chapterSummary: {
      learningGoals: [
        'Memahami misi kerasulan Nabi Muhammad SAW sebagai Rahmatan lil \'Alamin (QS. Al-Anbiya: 107).',
        'Menerapkan prinsip tolong-menolong dalam kebajikan dan ketaqwaan (Ta\'awun) sesuai QS. Al-Maidah: 2.',
        'Mengintegrasikan seluruh nilai Kurikulum Cinta: cinta Allah, Al-Qur\'an, diri sendiri, sesama, lingkungan, dan tanah air Indonesia.',
      ],
      keyConcept:
        'Bab 6 merupakan puncak petualangan Kurikulum Cinta: menyatukan seluruh pemahaman keilmuan Al-Qur\'an dan Hadis menjadi aksi nyata kepedulian sosial, gotong royong, dan cinta bangsa.',
      dailyHabits: [
        'Menebarkan salam, keselamatan, dan keramahan kepada siapa saja yang dijumpai.',
        'Ikut serta dalam kegiatan sosial dan gotong royong di lingkungan sekolah maupun tempat tinggal.',
        'Menyisihkan uang saku untuk membantu korban bencana alam atau kaum dhuafa.',
      ],
    },
    materialsDetail: {
      mat_6_1: {
        overview:
          'Konsep Islam sebagai Rahmatan lil \'Alamin (Rahmat bagi Semesta Alam) ditegaskan dalam Al-Qur\'an Surah Al-Anbiya ayat 107. Ayat ini adalah piagam kasih sayang universal ajaran Islam.',
        background:
          'Nabi Muhammad SAW diutus bukan hanya untuk bangsa Arab dan bukan hanya untuk zamannya saja, melainkan untuk seluruh umat manusia, bangsa-bangsa di dunia, bahkan makhluk hidup di alam semesta hingga akhir zaman.',
        tafsirAndMeaning: [
          '"Wa maa arsalnaaka illaa rahmatan lil-\'aalamiin" (Dan Kami tidak mengutus engkau melainkan untuk menjadi rahmat bagi seluruh alam).',
          'Kata "Rahmat" bermakna kasih sayang, kelembutan, kebaikan, petunjuk jalan keluar, dan keselamatan dari azab.',
          'Kata "Al-\'Aalamiin" adalah bentuk jamak dari \'alam, yang mencakup alam manusia, alam jin, alam hewan, alam nabati (tumbuhan), dan alam fisik.',
          'Bukti Rahmat Nabi: Mendoakan orang yang memusuhinya agar mendapat hidayah, melarang membunuh wanita dan anak-anak dalam perang, melarang menyiksa hewan beban, dan menjamin hak-hak kaum lemah.',
        ],
        vocabulary: [
          { arabic: 'وَمَا أَرْسَلْنَاكَ', transliteration: 'Wa maa arsalnaaka', meaning: 'Dan Kami tidak mengutus engkau' },
          { arabic: 'إِلَّا رَحْمَةً', transliteration: 'Illaa rahmatan', meaning: 'Melainkan sebagai rahmat / kasih sayang' },
          { arabic: 'لِلْعَالَمِينَ', transliteration: 'Lil-\'Aalamiin', meaning: 'Bagi semesta alam' },
          { arabic: 'رَأْفَةٌ', transliteration: 'Ra\'fah', meaning: 'Kelembutan' },
          { arabic: 'سَلَامٌ', transliteration: 'Salaam', meaning: 'Kedamaian / keselamatan' },
        ],
        coreLessons: [
          'Inti ajaran Islam adalah kedamaian, keselamatan, dan kasih sayang sejati.',
          'Seorang muslim sejati adalah yang orang lain selamat dari gangguan lisan dan tangannya (HR. Bukhari).',
          'Kekerasan, fitnah, dan kebencian bertolak belakang dengan misi Rahmatan lil \'Alamin.',
          'Menjadi duta kasih sayang di mana pun berada.',
        ],
        cintaApplication: [
          'Menebarkan Kasih Sayang: Menyayangi kucing atau hewan peliharaan dengan memberi makan dan minum, tidak memukulnya.',
          'Menjaga Lisan: Tidak berkata kotor, tidak mengejek, dan tidak menyebarkan berita bohong.',
          'Menghargai Keberagaman Bangsa: Ramah kepada turis atau masyarakat dari suku dan agama lain.',
        ],
        faqOrFunFact: [
          {
            question: 'Bagaimana sikap Nabi kepada penduduk Thaif yang melempari beliau dengan batu?',
            answer:
              'Ketika Malaikat Jibril menawarkan untuk menimpakan dua gunung kepada penduduk Thaif, Rasulullah SAW menolaknya dan justru berdoa: "Ya Allah, berilah petunjuk kepada kaumku, sesungguhnya mereka belum mengetahui." Inilah puncak keteladanan Rahmatan lil \'Alamin!',
          },
          {
            question: 'Apakah menyayangi hewan termasuk pengamalan ayat ini?',
            answer:
              'Tentu saja! Rasulullah menceritakan kisah seorang pria yang diampuni dosanya dan dimasukkan surga hanya karena memberi minum anjing yang kehausan di sumur dengan sepatunya.',
          },
        ],
      },
      mat_6_2: {
        overview:
          'Prinsip tolong-menolong dalam kebajikan dan ketaqwaan diatur dalam Al-Qur\'an Surah Al-Maidah ayat 2. Ayat ini menjadi fondasi gotong royong, solidaritas sosial, dan cinta tanah air (Hubbul Wathan).',
        background:
          'Sebagai makhluk sosial, manusia tidak dapat hidup sendirian. Bangsa Indonesia terkenal dengan budaya luhur gotong royong. Al-Qur\'an mengarahkan agar kerja sama dan gotong royong selalu berada dalam koridor kebajikan dan ketaqwaan.',
        tafsirAndMeaning: [
          '"Wa ta\'aawanuu \'alal-birri wat-taqwaa" (Dan tolong-menolonglah kalian dalam kebajikan dan takwa): Saling membantu dalam segala hal yang mendatangkan kemaslahatan, pendidikan, bantuan sosial, dan menjaga keamanan negara.',
          '"Wa laa ta\'aawanuu \'alal-itsmi wal-\'udwaan" (Dan jangan tolong-menolong dalam berbuat dosa dan permusuhan): Dilarang bekerja sama dalam kecurangan (seperti menyontek berjamaah), fitnah, merusak fasilitas umum, atau merundung orang lain.',
          '"Wattaqullaah, innallaaha syadiidul \'iqaab" (Dan bertaqwalah kepada Allah, sesungguhnya Allah sangat keras siksaan-Nya): Mengingatkan kita untuk selalu mengawasi niat kerja sama kita.',
          'Cinta Tanah Air (Hubbul Wathan): Para ulama pejuang Indonesia menanamkan bahwa mencintai, membela, dan memajukan tanah air Indonesia adalah wujud pengamalan iman dan ketaqwaan.',
        ],
        vocabulary: [
          { arabic: 'وَتَعَاوَنُوا', transliteration: 'Wa ta\'aawanuu', meaning: 'Dan tolong-menolonglah kamu' },
          { arabic: 'عَلَى الْبِرِّ', transliteration: '\'Alal-birri', meaning: 'Dalam kebajikan' },
          { arabic: 'وَالتَّقْوَىٰ', transliteration: 'Wat-taqwaa', meaning: 'Dan ketaqwaan' },
          { arabic: 'وَلَا تَعَاوَنُوا', transliteration: 'Wa laa ta\'aawanuu', meaning: 'Dan janganlah tolong-menolong' },
          { arabic: 'عَلَى الْإِثْمِ', transliteration: '\'Alal-itsmi', meaning: 'Dalam berbuat dosa' },
          { arabic: 'وَالْعُدْوَانِ', transliteration: 'Wal-\'udwaan', meaning: 'Dan permusuhan' },
          { arabic: 'حُبُّ الْوَطَنِ', transliteration: 'Hubbul Wathan', meaning: 'Cinta Tanah Air' },
        ],
        coreLessons: [
          'Solidaritas dan tolong-menolong adalah kunci kekuatan umat dan bangsa.',
          'Tolong-menolong harus didasarkan pada kebaikan, bukan solidaritas buta pada kejahatan.',
          'Mencintai negara Indonesia diwujudkan dengan menjaga persatuan, mematuhi aturan hukum, dan giat belajar mengukir prestasi.',
          'Peka terhadap kesulitan saudara sebangsa yang tertimpa musibah.',
        ],
        cintaApplication: [
          'Gotong Royong Madrasah: Bahu-membahu membersihkan musala, menata perpustakaan, dan merapikan halaman sekolah.',
          'Peduli Bencana: Menyisihkan uang saku untuk disumbangkan ke posko bencana alam.',
          'Menjaga Nama Baik Bangsa: Menghormati bendera merah putih, menyanyikan lagu kebangsaan dengan khidmat, dan menghargai keragaman adat istiadat.',
        ],
        faqOrFunFact: [
          {
            question: 'Apakah boleh tolong-menolong dalam menyontek saat ujian?',
            answer:
              'Tidak boleh sama sekali! Menyontek adalah bentuk kecurangan dan perbuatan dosa (al-itsm). Membantu teman saat belajar sebelum ujian adalah ta\'awun \'alal birri, namun memberi contekan saat ujian adalah ta\'awun \'alal itsmi yang dilarang agama.',
          },
          {
            question: 'Bagaimana cara murid kelas 4 MI mewujudkan cinta tanah air?',
            answer:
              'Dengan belajar sungguh-sungguh agar menjadi generasi cerdas, menjaga kerukunan antar teman yang berbeda suku, memelihara fasilitas umum, dan mencintai produk dalam negeri.',
          },
        ],
      },
    },
  },
};
