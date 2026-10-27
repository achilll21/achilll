import { Character, World, Badge, QuizQuestion } from '../types/game';
import { CHAPTER_EXPLANATIONS } from './chapterExplanations';

export const HERO_IMAGE = '/src/assets/images/hero_quran_adventure_1790689166844.jpg';

export const CHARACTERS: Character[] = [
  {
    id: 'ahmad',
    name: 'Ahmad',
    title: 'Si Penyelami Hikmah',
    avatar: '/src/assets/images/avatar_ahmad_explorer_1790689181663.jpg',
    bio: 'Siswa kelas 4 MI yang gemar mentadaburi ayat Al-Qur\'an, selalu tenang, dan senang mengajak teman berbuat baik.',
    trait: 'Bijaksana & Jujur',
    favoriteValue: 'Cinta Al-Qur\'an & Kejujuran',
    motto: 'Al-Qur\'an adalah kompas cahaya dalam setiap langkahku.',
  },
  {
    id: 'fatimah',
    name: 'Fatimah',
    title: 'Si Duta Kasih Sayang',
    avatar: '/src/assets/images/avatar_fatimah_explorer_1790689194478.jpg',
    bio: 'Siswi ceria yang memiliki kelembutan hati luar biasa, gemar merawat kebersihan, dan selalu siap mengulurkan tangan.',
    trait: 'Penuh Empati & Ramah',
    favoriteValue: 'Kasih Sayang & Peduli Sesama',
    motto: 'Tebarkan senyum dan kebaikan karena itu adalah sedekah.',
  },
  {
    id: 'salman',
    name: 'Salman',
    title: 'Si Sahabat Alam',
    avatar: '/src/assets/images/avatar_salman_explorer_1790689206116.jpg',
    bio: 'Penjelajah cilik pemberani yang sangat peduli pada kelestarian alam, gemar menanam pohon, dan hemat menggunakan air.',
    trait: 'Tangkas & Bertanggung Jawab',
    favoriteValue: 'Cinta Lingkungan & Tanggung Jawab',
    motto: 'Menjaga bumi ciptaan Allah adalah bukti cinta kita kepada Sang Pencipta.',
  },
  {
    id: 'aisyah',
    name: 'Aisyah',
    title: 'Si Teladan Ceria',
    avatar: '/src/assets/images/avatar_aisyah_explorer_1790689218061.jpg',
    bio: 'Siswi cerdas yang gemar menghafal hadis, sangat berbakti kepada orang tua dan guru, serta menghargai perbedaan teman.',
    trait: 'Santun & Toleran',
    favoriteValue: 'Cinta Sesama & Toleransi',
    motto: 'Perbedaan suku dan pendapat adalah warna pelangi persaudaraan kita.',
  },
];

export const BADGES: Badge[] = [
  {
    id: 'badge_al_quran',
    name: 'Bintang Pecinta Al-Qur\'an',
    description: 'Menyelesaikan eksplorasi Dunia Al-Qur\'an dan mentadaburi kemuliaan ciptaan Allah.',
    icon: '📖',
    worldId: 1,
  },
  {
    id: 'badge_hadis',
    name: 'Lencana Beningnya Niat',
    description: 'Menyelesaikan Dunia Hadis dengan memahami ketulusan dan ketakwaan dalam berbuat.',
    icon: '✨',
    worldId: 2,
  },
  {
    id: 'badge_akhlak',
    name: 'Perisai Kejujuran & Bakti',
    description: 'Menuntaskan Dunia Akhlak dengan menjunjung tinggi kejujuran dan birrul walidain.',
    icon: '🛡️',
    worldId: 3,
  },
  {
    id: 'badge_sahabat',
    name: 'Mahkota Duta Persahabatan',
    description: 'Menyelesaikan Dunia Sahabat dengan mempraktikkan kasih sayang dan toleransi rukun.',
    icon: '🤝',
    worldId: 4,
  },
  {
    id: 'badge_lingkungan',
    name: 'Penjaga Bumi Ciptaan Ilahi',
    description: 'Menuntaskan Dunia Lingkungan dengan menjaga kebersihan dan kelestarian alam sekitar.',
    icon: '🌱',
    worldId: 5,
  },
  {
    id: 'badge_cinta_sejati',
    name: 'Satria Kurikulum Cinta',
    description: 'Menyelesaikan seluruh Dunia Petualangan dan menjadi teladan cinta sesama & bangsa!',
    icon: '💖',
    worldId: 6,
  },
  {
    id: 'badge_pretest',
    name: 'Langkah Pertama Penjelajah',
    description: 'Menuntaskan asesmen awal untuk memetakan pengetahuan Al-Qur\'an Hadis.',
    icon: '🧭',
  },
  {
    id: 'badge_posttest',
    name: 'Master Cinta Al-Qur\'an & Hadis',
    description: 'Menuntaskan asesmen akhir Fase B dengan nilai memuaskan.',
    icon: '🎓',
  },
];

const BASE_WORLDS: World[] = [
  {
    id: 1,
    slug: 'dunia-al-quran',
    title: 'Dunia Al-Qur\'an: Kemuliaan Manusia & Cahaya Kelapangan',
    shortTitle: 'Dunia Al-Qur\'an',
    theme: 'Cinta kepada Al-Qur\'an & Cinta kepada Diri Sendiri',
    description: 'Belajar memahami Surah At-Tin dan Surah Al-Insyirah yang mengajarkan bahwa manusia diciptakan sebaik-baiknya dan Allah memberi kemudahan di setiap kesulitan.',
    icon: '📖',
    accentColor: 'emerald',
    badgeName: 'Bintang Pecinta Al-Qur\'an',
    badgeDescription: 'Paham keistimewaan manusia dalam Surah At-Tin dan semangat pantang putus asa dalam Surah Al-Insyirah.',
    badgeIcon: '📖',
    image: '/src/assets/images/world_quran_illustration_1790689772889.jpg',
    materials: [
      {
        id: 'mat_1_1',
        title: 'Mengenal Surah At-Tin',
        theme: 'Manusia Diciptakan Sempurna',
        arabicText: 'لَقَدْ خَلَقْنَا الْإِنسَانَ فِي أَحْسَنِ تَقْوِيمٍ',
        transliteration: 'Laqad khalaqnal-insaana fii ahsani taqwiim (QS. At-Tin: 4)',
        translation: 'Sungguh, Kami telah menciptakan manusia dalam bentuk yang sebaik-baiknya.',
        explanation: [
          'Allah SWT menciptakan kita dengan akal, hati, dan rupa yang indah.',
          'Bentuk terbaik ini harus kita syukuri dengan selalu berbuat kebajikan.',
          'Jika tidak beriman dan beramal shalih, manusia bisa jatuh ke derajat terendah.'
        ],
        cintaValue: 'Cinta Diri Sendiri & Rasa Syukur',
        dailyAction: 'Merawat tubuh dengan makanan halal, rajin berwudhu, dan tidak minder karena setiap kita istimewa di mata Allah.'
      },
      {
        id: 'mat_1_2',
        title: 'Cahaya Surah Al-Insyirah',
        theme: 'Di Balik Kesulitan Ada Kemudahan',
        arabicText: 'فَإِنَّ مَعَ الْعُسْرِ يُسْرًا • إِنَّ مَعَ الْعُسْرِ يُسْرًا',
        transliteration: 'Fa inna ma\'al-\'usri yusraa • Inna ma\'al-\'usri yusraa (QS. Al-Insyirah: 5-6)',
        translation: 'Maka sesungguhnya beserta kesulitan ada kemudahan, sesungguhnya beserta kesulitan itu ada kemudahan.',
        explanation: [
          'Allah mengulang janji kemudahan sebanyak dua kali agar hati kita lapang dan optimis.',
          'Saat menghadapi pelajaran yang sulit atau ujian, kita tidak boleh berputus asa.',
          'Berdoa, berusaha tekun, dan bertawakal akan membuka pintu jalan keluar.'
        ],
        cintaValue: 'Optimisme & Cinta kepada Allah',
        dailyAction: 'Tidak mudah menyerah saat belajar matematika atau menghafal surah, selalu tersenyum dan berdoa saat menghadapi kesulitan.'
      }
    ],
    susunAyatGame: {
      surahName: 'QS. At-Tin Ayat 4',
      ayatNumber: 4,
      fullArabic: 'لَقَدْ خَلَقْنَا الْإِنسَانَ فِي أَحْسَنِ تَقْوِيمٍ',
      translation: 'Sungguh, Kami telah menciptakan manusia dalam bentuk yang sebaik-baiknya.',
      hint: 'Mulai dari kata "Laqad", lalu "Khalaqna", "Al-Insaana", "Fii", "Ahsani", "Taqwiim".',
      tiles: [
        { id: 't1', arabic: 'تَقْوِيمٍ', order: 5 },
        { id: 't2', arabic: 'لَقَدْ', order: 0 },
        { id: 't3', arabic: 'الْإِنسَانَ', order: 2 },
        { id: 't4', arabic: 'فِي', order: 3 },
        { id: 't5', arabic: 'خَلَقْنَا', order: 1 },
        { id: 't6', arabic: 'أَحْسَنِ', order: 4 },
      ]
    },
    matchPairs: [
      { id: 'mp1', left: 'لَقَدْ خَلَقْنَا الْإِنسَانَ', right: 'Sungguh Kami telah menciptakan manusia', category: 'At-Tin' },
      { id: 'mp2', left: 'فِي أَحْسَنِ تَقْوِيمٍ', right: 'Dalam bentuk yang sebaik-baiknya', category: 'At-Tin' },
      { id: 'mp3', left: 'إِنَّ مَعَ الْعُسْرِ يُسْرًا', right: 'Sesungguhnya bersama kesulitan ada kemudahan', category: 'Al-Insyirah' },
      { id: 'mp4', left: 'وَإِلَىٰ رَبِّكَ فَارْغَب', right: 'Dan hanya kepada Tuhanmulah engkau berharap', category: 'Al-Insyirah' },
    ],
    sikapScenarios: [
      {
        id: 'ss1',
        context: 'Di Sekolah',
        scenario: 'Ahmad merasa kesulitan menghafal ayat Al-Qur\'an untuk tugas esok hari. Nilai yang ia peroleh sebelumnya belum sempurna.',
        options: [
          {
            text: 'Menyerah dan menangis di kamar, tidak mau berangkat sekolah besok.',
            isCorrect: false,
            feedback: 'Belum tepat. Yuk, pelajari kembali petunjuknya. Surah Al-Insyirah mengajarkan bahwa sesudah kesulitan pasti ada kemudahan!',
            cintaValue: 'Kurang Gigih',
            stars: 0
          },
          {
            text: 'Menyontek tulisan teman agar nilainya langsung bagus tanpa usaha.',
            isCorrect: false,
            feedback: 'Belum tepat. Menyontek adalah perbuatan tidak jujur yang dilarang agama.',
            cintaValue: 'Ketidakjujuran',
            stars: 0
          },
          {
            text: 'Berwudhu, berdoa kepada Allah, lalu meminta bimbingan guru atau orang tua dengan tekun.',
            isCorrect: true,
            feedback: 'MasyaAllah! Jawabanmu tepat. Sikap pantang menyerah dan memohon pertolongan Allah adalah wujud pengamalan Surah Al-Insyirah.',
            cintaValue: 'Tanggung Jawab & Optimisme',
            stars: 3
          }
        ]
      },
      {
        id: 'ss2',
        context: 'Pergaulan',
        scenario: 'Seorang teman mengejek bentuk hidung atau warna kulit teman lain di kelas saat jam istirahat.',
        options: [
          {
            text: 'Ikut menertawakan agar dianggap kompak oleh teman-teman.',
            isCorrect: false,
            feedback: 'Belum tepat. Mencela fisik orang lain berarti mencela ciptaan Allah.',
            cintaValue: 'Perundungan',
            stars: 0
          },
          {
            text: 'Menegur dengan sopan dan mengingatkan bahwa Allah menciptakan manusia dalam bentuk sebaik-baiknya (QS. At-Tin: 4).',
            isCorrect: true,
            feedback: 'MasyaAllah! Jawabanmu tepat. Kamu menjunjung tinggi nilai cinta kepada sesama dan memuliakan ciptaan Allah.',
            cintaValue: 'Kepedulian & Menghargai Sesama',
            stars: 3
          },
          {
            text: 'Membalas mengejek teman tersebut dengan kata-kata kasar.',
            isCorrect: false,
            feedback: 'Belum tepat. Kebaikan tidak boleh dibalas dengan keburukan.',
            cintaValue: 'Emosi',
            stars: 0
          }
        ]
      }
    ],
    memoryCards: [
      { id: 'm1', pairId: 'p1', label: 'Surah At-Tin', iconName: 'Fig', detail: 'Buah Tin & Zaitun' },
      { id: 'm2', pairId: 'p1', label: 'Surah At-Tin', iconName: 'Fig', detail: 'Buah Tin & Zaitun' },
      { id: 'm3', pairId: 'p2', label: 'Ahsani Taqwiim', iconName: 'Star', detail: 'Bentuk Sebaik-baiknya' },
      { id: 'm4', pairId: 'p2', label: 'Ahsani Taqwiim', iconName: 'Star', detail: 'Bentuk Sebaik-baiknya' },
      { id: 'm5', pairId: 'p3', label: 'Al-Insyirah', iconName: 'Sun', detail: 'Kelapangan Dada' },
      { id: 'm6', pairId: 'p3', label: 'Al-Insyirah', iconName: 'Sun', detail: 'Kelapangan Dada' },
      { id: 'm7', pairId: 'p4', label: 'Al-\'Usri Yusra', iconName: 'Smile', detail: 'Kemudahan di Balik Kesulitan' },
      { id: 'm8', pairId: 'p4', label: 'Al-\'Usri Yusra', iconName: 'Smile', detail: 'Kemudahan di Balik Kesulitan' },
    ],
    trueFalseQuestions: [
      {
        id: 'tf1',
        statement: 'Dalam Surah At-Tin, Allah bersumpah demi buah Tin, buah Zaitun, Bukit Sinai, dan Kota Makkah yang aman.',
        isTrue: true,
        explanation: 'Benar! Allah bersumpah dengan tempat-tempat dan hal mulia untuk menegaskan kemuliaan penciptaan manusia.',
        cintaValue: 'Tadabur Al-Qur\'an'
      },
      {
        id: 'tf2',
        statement: 'Orang yang beriman dan beramal shalih akan jatuh ke tempat yang serendah-rendahnya.',
        isTrue: false,
        explanation: 'Salah! Orang yang beriman dan beramal kebajikan akan mendapatkan pahala yang tiada putus-putusnya.',
        cintaValue: 'Keimanan'
      },
      {
        id: 'tf3',
        statement: 'Janji kemudahan dalam Surah Al-Insyirah hanya disebutkan satu kali saja oleh Allah.',
        isTrue: false,
        explanation: 'Salah! Allah mengulanginya dua kali (ayat 5 dan 6) untuk menguatkan hati hamba-Nya yang sedang berusaha.',
        cintaValue: 'Optimisme'
      }
    ],
    misiKebaikan: [
      {
        id: 'mk1',
        title: 'Misi Sahabat yang Sedih',
        location: 'Taman Sekolah MI',
        situation: 'Kamu melihat teman sebangkumu duduk menunduk dan bersedih karena pensil warnanya hilang saat ujian menggambar kaligrafi.',
        task: 'Bagaimana kamu menerapkan nilai cinta sesama dan kasih sayang?',
        choices: [
          {
            text: 'Mendekatinya, menghibur dengan kata-kata lembut, dan meminjamkan pensil warnamu bersamanya.',
            isBest: true,
            rewardStars: 3,
            explanation: 'MasyaAllah! Sikap ini meringankan beban teman dan membawa kemudahan baginya seperti pesan Surah Al-Insyirah.',
            impact: 'Temanmu kembali tersenyum dan bersama menyelesaikan tugas dengan gembira!'
          },
          {
            text: 'Membiarkannya karena itu bukan urusanmu.',
            isBest: false,
            rewardStars: 0,
            explanation: 'Belum tepat. Seorang muslim peduli terhadap saudaranya yang membutuhkan pertolongan.',
            impact: 'Temanmu merasa kesepian dan nilainya tertinggal.'
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q1_1',
        question: 'Menurut Surah At-Tin ayat 4, Allah SWT menciptakan manusia dalam bentuk...',
        arabicSnippet: 'فِي أَحْسَنِ تَقْوِيمٍ',
        options: ['Sebaik-baiknya (Ahsani Taqwiim)', 'Paling kuat fisiknya', 'Selalu kaya raya', 'Paling tinggi tubuhnya'],
        correctIndex: 0,
        explanation: 'Surah At-Tin ayat 4 menegaskan bahwa manusia diciptakan dalam bentuk dan susunan yang sebaik-baiknya.',
        topic: 'Surah At-Tin'
      },
      {
        id: 'q1_2',
        question: 'Pesan utama yang terdapat dalam Surah Al-Insyirah ayat 5-6 adalah...',
        arabicSnippet: 'فَإِنَّ مَعَ الْعُسْرِ يُسْرًا',
        options: [
          'Setelah kesulitan pasti ada kemudahan',
          'Manusia harus selalu mengeluh',
          'Kemudahan hanya datang pada orang kaya',
          'Kita tidak perlu belajar'
        ],
        correctIndex: 0,
        explanation: 'Allah menjanjikan bahwa di balik setiap kesulitan yang kita hadapi, pasti ada pintu kemudahan.',
        topic: 'Surah Al-Insyirah'
      },
      {
        id: 'q1_3',
        question: 'Bagaimana cara kita mencintai diri sendiri sesuai ajaran Al-Qur\'an?',
        options: [
          'Menjaga kesehatan tubuh, bersyukur, dan rajin beribadah',
          'Membeli barang mewah agar dipuji orang lain',
          'Makan makanan manis sebanyak-banyaknya',
          'Tidur seharian tanpa belajar'
        ],
        correctIndex: 0,
        explanation: 'Cinta diri sendiri diwujudkan dengan menjaga amanah tubuh karunia Allah, menjauhi maksiat, dan bersyukur.',
        topic: 'Kurikulum Cinta'
      },
      {
        id: 'q1_4',
        question: 'Apa arti dari potongan ayat "Al-Insyirah"?',
        arabicSnippet: 'أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ',
        options: ['Kelapangan dada', 'Buah yang manis', 'Malam kemuliaan', 'Waktu fajar'],
        correctIndex: 0,
        explanation: 'Al-Insyirah bermakna kelapangan dada dan ketenangan batin yang Allah anugerahkan.',
        topic: 'Surah Al-Insyirah'
      },
      {
        id: 'q1_5',
        question: 'Perilaku yang TIDAK sesuai dengan nilai memuliakan ciptaan Allah adalah...',
        options: [
          'Mengejek kelemahan fisik teman',
          'Membantu teman yang terjatuh',
          'Merawat kebersihan badan',
          'Berbicara dengan santun'
        ],
        correctIndex: 0,
        explanation: 'Mengejek fisik teman adalah perbuatan tercela yang melanggar adab Islami dan nilai kasih sayang.',
        topic: 'Akhlak Qur\'ani'
      }
    ],
    reflectionQuestion: 'Apa kebaikan yang bisa kamu lakukan hari ini untuk merawat anugerah terbaik yang telah Allah berikan padamu?',
    reflectionPrompt: 'Tuliskan satu cara kamu bersyukur dan satu tindakan baik yang akan kamu lakukan untuk teman atau keluargamu hari ini.'
  },
  {
    id: 2,
    slug: 'dunia-hadis',
    title: 'Dunia Hadis: Beningnya Niat & Cahaya Taqwa',
    shortTitle: 'Dunia Hadis',
    theme: 'Cinta kepada Allah dan Rasul & Kejujuran Hati',
    description: 'Meneladani sabda Rasulullah SAW tentang keutamaan niat yang ikhlas dan bertakwa kepada Allah di manapun berada.',
    icon: '✨',
    accentColor: 'blue',
    badgeName: 'Lencana Beningnya Niat',
    badgeDescription: 'Memahami bahwa setiap kebaikan bernilai ibadah bila diawali dengan niat yang tulus karena Allah.',
    badgeIcon: '✨',
    image: '/src/assets/images/world_hadis_illustration_1790689790069.jpg',
    materials: [
      {
        id: 'mat_2_1',
        title: 'Hadis tentang Niat yang Ikhlas',
        theme: 'Semua Amal Tergantung Niat',
        arabicText: 'إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى',
        transliteration: 'Innamal a\'maalu bin-niyyaat, wa innamaa likullim-ri-in maa nawaa (HR. Bukhari & Muslim)',
        translation: 'Sesungguhnya setiap amal perbuatan itu bergantung pada niatnya, dan sesungguhnya setiap orang akan mendapatkan sesuai apa yang dia niatkan.',
        explanation: [
          'Niat adalah penentu apakah suatu perbuatan bernilai ibadah atau sia-sia.',
          'Belajar di sekolah, membantu ibu, atau berolahraga bisa bernilai pahala jika diniatkan karena Allah.',
          'Hindari berbuat baik hanya untuk riya\' (pamer pujian manusia).'
        ],
        cintaValue: 'Kejujuran Hati & Ikhlas',
        dailyAction: 'Membaca Basmalah dan berniat menuntut ilmu karena Allah setiap kali melangkahkan kaki keluar rumah menuju sekolah.'
      },
      {
        id: 'mat_2_2',
        title: 'Hadis tentang Taqwa & Akhlak Mulia',
        theme: 'Menghapus Kesalahan dengan Kebaikan',
        arabicText: 'اتَّقِ اللَّهَ حَيْثُمَا كُنْتَ، وَأَتْبِعِ السَّيِّئَةَ الْحَسَنَةَ تَمْحُهَا، وَخَالِقِ النَّاسَ بِخُلُقٍ حَسَنٍ',
        transliteration: 'Ittaqillaaha haitsumaa kunta, wa atbi\'is-sayyiatil-hasanata tamhuhaa, wa khaaliqin-naasa bikhuluqin hasan (HR. Tirmidzi)',
        translation: 'Bertakwalah kepada Allah di mana pun engkau berada, iringilah keburukan dengan kebaikan niscaya akan menghapusnya, dan bergaullah dengan manusia dengan akhlak yang mulia.',
        explanation: [
          'Taqwa artinya takut melanggar perintah Allah baik saat dilihat orang maupun sendirian.',
          'Jika kita terlanjur berbuat salah atau khilaf, segera bertaubat dan lakukan perbuatan baik.',
          'Bergaul dengan siapa saja dengan santun, sopan, dan penuh keramahan.'
        ],
        cintaValue: 'Tanggung Jawab & Akhlak Terpuji',
        dailyAction: 'Meminta maaf langsung jika tanpa sengaja menyakiti hati teman dan segera berbuat kebaikan pengganti.'
      }
    ],
    susunAyatGame: {
      surahName: 'Hadis Niat (HR. Bukhari)',
      ayatNumber: 1,
      fullArabic: 'إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ',
      translation: 'Sesungguhnya setiap amalan itu bergantung pada niatnya.',
      hint: 'Mulai dari kata "Innama", lalu "Al-A\'maalu", dan "Bin-Niyyaat".',
      tiles: [
        { id: 'hn1', arabic: 'بِالنِّيَّاتِ', order: 2 },
        { id: 'hn2', arabic: 'الْأَعْمَالُ', order: 1 },
        { id: 'hn3', arabic: 'إِنَّمَا', order: 0 },
      ]
    },
    matchPairs: [
      { id: 'mp2_1', left: 'إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ', right: 'Amal itu bergantung pada niatnya', category: 'Hadis Niat' },
      { id: 'mp2_2', left: 'اتَّقِ اللَّهَ حَيْثُمَا كُنْتَ', right: 'Bertakwalah di mana pun engkau berada', category: 'Hadis Taqwa' },
      { id: 'mp2_3', left: 'وَخَالِقِ النَّاسَ بِخُلُقٍ حَسَنٍ', right: 'Dan pergauililah manusia dengan akhlak mulia', category: 'Hadis Akhlak' },
      { id: 'mp2_4', left: 'وَأَتْبِعِ السَّيِّئَةَ الْحَسَنَةَ', right: 'Iringilah keburukan dengan kebaikan', category: 'Hadis Taqwa' },
    ],
    sikapScenarios: [
      {
        id: 'ss2_1',
        context: 'Di Masjid / Rumah',
        scenario: 'Salman ingin memasukkan uang saku ke kotak infak di masjid. Teman-temannya sedang melihat ke arahnya.',
        options: [
          {
            text: 'Memasukkan uang sambil menoleh ke teman-teman agar semua orang memujinya dermawan.',
            isCorrect: false,
            feedback: 'Belum tepat. Beramal demi pujian (riya\') dapat mengurangi pahala keikhlasan kita.',
            cintaValue: 'Riya\'',
            stars: 0
          },
          {
            text: 'Memasukkan uang dengan hati tulus, berniat bersedekah semata-mata mengharap ridha Allah.',
            isCorrect: true,
            feedback: 'MasyaAllah! Jawabanmu tepat. Niat yang murni karena Allah adalah inti dari Hadis "Innamal A\'maalu Binniyaat".',
            cintaValue: 'Ikhlas & Kejujuran Batin',
            stars: 3
          },
          {
            text: 'Membatalkan infak karena malu dilihat teman.',
            isCorrect: false,
            feedback: 'Belum tepat. Tetaplah berinfak dan luruskan niat dalam hati hanya untuk Allah.',
            cintaValue: 'Ragu-ragu',
            stars: 0
          }
        ]
      }
    ],
    memoryCards: [
      { id: 'mc2_1', pairId: 'p2_1', label: 'Innamal A\'mal', iconName: 'Heart', detail: 'Niat Ikhlas' },
      { id: 'mc2_2', pairId: 'p2_1', label: 'Innamal A\'mal', iconName: 'Heart', detail: 'Niat Ikhlas' },
      { id: 'mc2_3', pairId: 'p2_2', label: 'Ittaqillah', iconName: 'Compass', detail: 'Taqwa di Mana Saja' },
      { id: 'mc2_4', pairId: 'p2_2', label: 'Ittaqillah', iconName: 'Compass', detail: 'Taqwa di Mana Saja' },
      { id: 'mc2_5', pairId: 'p2_3', label: 'Khuluqin Hasan', iconName: 'Award', detail: 'Akhlak yang Terpuji' },
      { id: 'mc2_6', pairId: 'p2_3', label: 'Khuluqin Hasan', iconName: 'Award', detail: 'Akhlak yang Terpuji' },
      { id: 'mc2_7', pairId: 'p2_4', label: 'Tamhuha', iconName: 'Sparkles', detail: 'Kebaikan Menghapus Dosa' },
      { id: 'mc2_8', pairId: 'p2_4', label: 'Tamhuha', iconName: 'Sparkles', detail: 'Kebaikan Menghapus Dosa' },
    ],
    trueFalseQuestions: [
      {
        id: 'tf2_1',
        statement: 'Amalan yang besar sekalipun tidak akan berbuah pahala bila diniatkan untuk pamer (riya\').',
        isTrue: true,
        explanation: 'Benar! Rasulullah SAW menegaskan bahwa amalan dinilai dari niat keikhlasan di dalam hati.',
        cintaValue: 'Ketulusan'
      },
      {
        id: 'tf2_2',
        statement: 'Kita hanya perlu bertakwa saat berada di dalam masjid, tetapi bebas berbuat curang saat bermain game di rumah.',
        isTrue: false,
        explanation: 'Salah! Hadis bersabda: "Ittaqillaaha haitsumaa kunta" (Bertakwalah di manapun kamu berada).',
        cintaValue: 'Integritas'
      }
    ],
    misiKebaikan: [
      {
        id: 'mk2_1',
        title: 'Misi Kejujuran di Kantin Kejujuran',
        location: 'Kantin Sekolah',
        situation: 'Saat membeli kue seharga Rp 2.000, penjual sedang melayani banyak murid dan tidak melihatmu meletakkan uang.',
        task: 'Apa yang kamu lakukan untuk mengamalkan rasa taqwa kepada Allah?',
        choices: [
          {
            text: 'Memasukkan uang tepat sejumlah Rp 2.000 ke dalam kotak pembayaran karena yakin Allah Maha Melihat (Bashir).',
            isBest: true,
            rewardStars: 3,
            explanation: 'MasyaAllah! Tindakanmu mencerminkan taqwa sejati, karena iman merasa diawasi Allah di setiap saat.',
            impact: 'Hati menjadi tenang dan berkah makanan membawa kebaikan bagi tubuh.'
          },
          {
            text: 'Mengambil dua kue tapi hanya membayar satu karena uangnya kurang.',
            isBest: false,
            rewardStars: 0,
            explanation: 'Belum tepat. Mengambil hak orang lain tanpa izin adalah perbuatan zalim.',
            impact: 'Merugikan penjual kantin dan menodai kesucian hati.'
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q2_1',
        question: 'Siapakah perawi utama hadis tentang niat yang diriwayatkan oleh Imam Bukhari dan Muslim?',
        options: ['Umar bin Khattab radhiyallahu \'anhu', 'Abu Hurairah radhiyallahu \'anhu', 'Ali bin Abi Thalib radhiyallahu \'anhu', 'Anas bin Malik radhiyallahu \'anhu'],
        correctIndex: 0,
        explanation: 'Hadis "Innamal a\'maalu bin-niyyaat" diriwayatkan dari sahabat mulia Umar bin Khattab ra.',
        topic: 'Hadis Niat'
      },
      {
        id: 'q2_2',
        question: 'Arti dari potongan hadis "Ittaqillaaha haitsumaa kunta" adalah...',
        options: [
          'Bertakwalah kepada Allah di mana pun engkau berada',
          'Berbicaralah dengan kata-kata yang baik',
          'Berpuasalah di bulan Ramadhan',
          'Tuntutlah ilmu ke negeri yang jauh'
        ],
        correctIndex: 0,
        explanation: 'Hadis ini mengajarkan kita untuk selalu taat dan takut berbuat maksiat di mana pun berada.',
        topic: 'Hadis Taqwa'
      },
      {
        id: 'q2_3',
        question: 'Jika kita tanpa sengaja berbuat salah kepada teman, menurut hadis Rasulullah apa yang sebaiknya dilakukan?',
        options: [
          'Segera meminta maaf dan mengiringinya dengan perbuatan baik',
          'Menyalahkan orang lain agar tidak dimarahi',
          'Pura-pura tidak tahu dan melarikan diri',
          'Mendiamkannya berhari-hari'
        ],
        correctIndex: 0,
        explanation: 'Rasulullah mengajarkan: "Wa atbi\'is sayyiatil hasanata tamhuhaa" (Iringilah keburukan dengan kebaikan niscaya akan menghapusnya).',
        topic: 'Akhlak Terpuji'
      },
      {
        id: 'q2_4',
        question: 'Pahala ibadah seseorang akan lenyap dan tidak diterima Allah apabila diiringi dengan sifat...',
        options: ['Riya\' (ingin dipuji orang)', 'Ikhlas', 'Tawadhu\' (rendah hati)', 'Sabar'],
        correctIndex: 0,
        explanation: 'Riya\' adalah syirik kecil yang dapat merusak dan menghanguskan pahala amal shalih.',
        topic: 'Kemurnian Niat'
      },
      {
        id: 'q2_5',
        question: 'Contoh niat yang benar ketika belajar di sekolah adalah...',
        options: [
          'Menuntut ilmu agar bermanfaat bagi agama, orang tua, dan bangsa',
          'Hanya agar mendapat uang saku lebih banyak',
          'Supaya bisa menyombongkan kepintaran di depan teman',
          'Hanya untuk mengisi waktu luang karena bosan di rumah'
        ],
        correctIndex: 0,
        explanation: 'Menuntut ilmu dengan niat ikhlas untuk kemaslahatan umat bernilai pahala jihad di jalan Allah.',
        topic: 'Kurikulum Cinta'
      }
    ],
    reflectionQuestion: 'Sebelum melakukan kegiatan hari ini, apakah kamu sudah meluruskan niatmu hanya untuk mencari ridha Allah?',
    reflectionPrompt: 'Tuliskan niat baikmu untuk kegiatan belajar dan membantu orang tua esok pagi.'
  },
  {
    id: 3,
    slug: 'dunia-akhlak',
    title: 'Dunia Akhlak: Kejujuran & Bakti Kepada Orang Tua',
    shortTitle: 'Dunia Akhlak',
    theme: 'Kejujuran, Tanggung Jawab, & Birrul Walidain',
    description: 'Meneladani kemuliaan akhlak Nabi Muhammad SAW: selalu berkata jujur dalam segala hal dan berbakti kepada ayah ibu dengan penuh rasa hormat.',
    icon: '🛡️',
    accentColor: 'indigo',
    badgeName: 'Perisai Kejujuran & Bakti',
    badgeDescription: 'Mampu mempraktikkan tutur kata yang jujur dan perilaku santun serta patuh kepada orang tua dan guru.',
    badgeIcon: '🛡️',
    image: '/src/assets/images/world_akhlak_family_1790689804114.jpg',
    materials: [
      {
        id: 'mat_3_1',
        title: 'Keutamaan Kejujuran (As-Sidq)',
        theme: 'Jujur Membawa Ketenangan & Surga',
        arabicText: 'عَلَيْكُمْ بِالصِّدْقِ فَإِنَّ الصِّدْقَ يَهْدِي إِلَى الْبِرِّ وَإِنَّ الْبِرَّ يَهْدِي إِلَى الْجَنَّةِ',
        transliteration: '‘Alaikum bis-shidqi fa innash-shidqa yahdii ilal-birri, wa innal-birra yahdii ilal-jannah (HR. Muslim)',
        translation: 'Hendaklah kalian berlaku jujur, karena kejujuran itu membimbing kepada kebaikan, dan kebaikan membimbing ke surga.',
        explanation: [
          'Kejujuran adalah ciri utama orang beriman, sebagaimana gelar Rasulullah: Al-Amin (Dapat dipercaya).',
          'Jujur dalam perkataan, jujur saat ujian, dan jujur mengakui kesalahan bila berbuat keliru.',
          'Kebohongan akan menimbulkan rasa takut, gelisah, dan merusak kepercayaan orang lain.'
        ],
        cintaValue: 'Kejujuran & Tanggung Jawab',
        dailyAction: 'Selalu berbicara apa adanya tanpa melebih-lebihkan, serta tidak menyontek saat ulangan berlangsung.'
      },
      {
        id: 'mat_3_2',
        title: 'Berbakti Kepada Orang Tua (Birrul Walidain)',
        theme: 'Ridha Allah Ada Pada Ridha Orang Tua',
        arabicText: 'رِضَا الرَّبِّ فِي رِضَا الْوَالِدِ، وَسَخَطُ الرَّبِّ فِي سَخَطِ الْوَالِدِ',
        transliteration: 'Ridhar-rabbi fii ridhal-waalidi, wa sakhatur-rabbi fii sakhatil-waalidi (HR. Tirmidzi)',
        translation: 'Ridha Allah bergantung pada ridha kedua orang tua, dan murka Allah bergantung pada murka kedua orang tua.',
        explanation: [
          'Orang tua merawat kita sejak kecil dengan penuh pengorbanan dan kasih sayang tulus.',
          'Mendengarkan nasihat mereka dengan santun dan tidak membantah dengan suara keras.',
          'Mendoakan mereka setiap selesai shalat: Rabbighfir lii wa liwaalidayya warhamhumaa kamaa rabbayaanii shaghiiraa.'
        ],
        cintaValue: 'Cinta Orang Tua & Kasih Sayang',
        dailyAction: 'Membantu merapikan tempat tidur sendiri dan menyalami tangan ayah ibu sebelum berangkat ke sekolah.'
      }
    ],
    susunAyatGame: {
      surahName: 'Hadis Ridha Orang Tua (HR. Tirmidzi)',
      ayatNumber: 1,
      fullArabic: 'رِضَا الرَّبِّ فِي رِضَا الْوَالِدِ',
      translation: 'Ridha Allah berada pada ridha kedua orang tua.',
      hint: 'Mulai dari "Ridhar-Rabbi", "Fii", "Ridhal-Waalid".',
      tiles: [
        { id: 'ha1', arabic: 'الْوَالِدِ', order: 3 },
        { id: 'ha2', arabic: 'رِضَا', order: 2 },
        { id: 'ha3', arabic: 'فِي', order: 1 },
        { id: 'ha4', arabic: 'رِضَا الرَّبِّ', order: 0 },
      ]
    },
    matchPairs: [
      { id: 'mp3_1', left: 'الصِّدْقُ يَهْدِي إِلَى الْبِرِّ', right: 'Kejujuran membimbing pada kebaikan', category: 'Kejujuran' },
      { id: 'mp3_2', left: 'رِضَا الرَّبِّ', right: 'Ridha Allah Yang Maha Pemelihara', category: 'Birrul Walidain' },
      { id: 'mp3_3', left: 'فِي رِضَا الْوَالِدِ', right: 'Tergantung pada ridha kedua orang tua', category: 'Birrul Walidain' },
      { id: 'mp3_4', left: 'الْكِذْبَ يَهْدِي إِلَى الْفُجُورِ', right: 'Dusta membimbing pada kejahatan', category: 'Kejujuran' },
    ],
    sikapScenarios: [
      {
        id: 'ss3_1',
        context: 'Di Rumah',
        scenario: 'Fatimah tanpa sengaja menyenggol vas bunga kesayangan ibu hingga pecah. Tidak ada orang di ruangan itu saat kejadian.',
        options: [
          {
            text: 'Menyembunyikan pecahan vas ke kolong meja dan berpura-pura tidak tahu saat ibu bertanya.',
            isCorrect: false,
            feedback: 'Belum tepat. Berdusta dan menyembunyikan kesalahan melanggar nilai kejujuran.',
            cintaValue: 'Berdusta',
            stars: 0
          },
          {
            text: 'Menuduh kucing atau adik yang memecahkannya.',
            isCorrect: false,
            feedback: 'Belum tepat. Memfitnah orang lain adalah dosa besar yang dilarang agama.',
            cintaValue: 'Fitnah',
            stars: 0
          },
          {
            text: 'Mendatangi ibu dengan sopan, menceritakan kejadian yang sebenarnya, meminta maaf, dan membantu membersihkan.',
            isCorrect: true,
            feedback: 'MasyaAllah! Jawabanmu tepat. Mengakui kesalahan dengan jujur adalah tanda keberanian dan ketaatan kepada ajaran Rasulullah SAW.',
            cintaValue: 'Kejujuran & Tanggung Jawab',
            stars: 3
          }
        ]
      }
    ],
    memoryCards: [
      { id: 'mc3_1', pairId: 'p3_1', label: 'As-Sidq', iconName: 'Shield', detail: 'Kejujuran Hati' },
      { id: 'mc3_2', pairId: 'p3_1', label: 'As-Sidq', iconName: 'Shield', detail: 'Kejujuran Hati' },
      { id: 'mc3_3', pairId: 'p3_2', label: 'Birrul Walidain', iconName: 'Users', detail: 'Berbakti Pada Orang Tua' },
      { id: 'mc3_4', pairId: 'p3_2', label: 'Birrul Walidain', iconName: 'Users', detail: 'Berbakti Pada Orang Tua' },
      { id: 'mc3_5', pairId: 'p3_3', label: 'Al-Amin', iconName: 'CheckCircle', detail: 'Gelar Terpercaya Rasulullah' },
      { id: 'mc3_6', pairId: 'p3_3', label: 'Al-Amin', iconName: 'CheckCircle', detail: 'Gelar Terpercaya Rasulullah' },
      { id: 'mc3_7', pairId: 'p3_4', label: 'Doa Ibu Ayah', iconName: 'HeartHandshake', detail: 'Warhamhumaa Kamaa Rabbayaanii' },
      { id: 'mc3_8', pairId: 'p3_4', label: 'Doa Ibu Ayah', iconName: 'HeartHandshake', detail: 'Warhamhumaa Kamaa Rabbayaanii' },
    ],
    trueFalseQuestions: [
      {
        id: 'tf3_1',
        statement: 'Rasulullah SAW bersabda bahwa kejujuran menuntun seseorang menuju kebaikan, dan kebaikan menuntun ke surga.',
        isTrue: true,
        explanation: 'Benar! Kejujuran adalah pilar utama seorang muslim menuju keridhaan Allah dan surga-Nya.',
        cintaValue: 'Kejujuran'
      },
      {
        id: 'tf3_2',
        statement: 'Bila orang tua menyuruh kita belajar, kita boleh membantah dengan berteriak jika sedang asyik bermain game.',
        isTrue: false,
        explanation: 'Salah! Al-Qur\'an melarang kita mengucapkan kata "ah" atau membentak orang tua (QS. Al-Isra: 23).',
        cintaValue: 'Bakti Orang Tua'
      }
    ],
    misiKebaikan: [
      {
        id: 'mk3_1',
        title: 'Misi Menemukan Uang Terjatuh',
        location: 'Lorong Kelas MI',
        situation: 'Saat berjalan menuju musala, kamu menemukan uang kertas Rp 20.000 tergeletak di lantai tanpa pemilik.',
        task: 'Tindakan terpuji apa yang kamu pilih?',
        choices: [
          {
            text: 'Menyerahkannya kepada bapak/ibu guru piket dan mengumumkan bahwa ada uang tercecer agar pemiliknya dapat mengambil.',
            isBest: true,
            rewardStars: 3,
            explanation: 'MasyaAllah! Menjaga amanah barang temuan (luqathah) adalah bukti kejujuran yang dicintai Allah.',
            impact: 'Teman yang kehilangan uang merasa sangat tertolong dan bersyukur atas kejujuranmu.'
          },
          {
            text: 'Langsung memasukkannya ke kantong untuk jajan es krim.',
            isBest: false,
            rewardStars: 0,
            explanation: 'Belum tepat. Mengambil barang temuan untuk kepentingan pribadi bertentangan dengan sifat jujur.',
            impact: 'Pemilik uang kebingungan dan sedih karena tidak bisa membayar keperluan sekolahnya.'
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q3_1',
        question: 'Gelar "Al-Amin" yang diberikan masyarakat Quraisy kepada Nabi Muhammad SAW memiliki arti...',
        options: ['Orang yang dapat dipercaya dan jujur', 'Pemberani di medan perang', 'Orang yang paling kaya', 'Penyair yang fasih'],
        correctIndex: 0,
        explanation: 'Gelar Al-Amin disematkan kepada Rasulullah sejak muda karena beliau tidak pernah berbohong.',
        topic: 'Kejujuran Rasulullah'
      },
      {
        id: 'q3_2',
        question: 'Berdasarkan hadis Rasulullah, murka Allah SWT bergantung kepada...',
        options: ['Murka kedua orang tua', 'Banyaknya harta seseorang', 'Kekalahan dalam perlombaan', 'Pendapat orang lain'],
        correctIndex: 0,
        explanation: 'Murka Allah timbul jika orang tua murka akibat kedurhakaan atau perlakuan buruk anak.',
        topic: 'Birrul Walidain'
      },
      {
        id: 'q3_3',
        question: 'Berikut ini adalah contoh pengamalan birrul walidain di lingkungan rumah:',
        options: [
          'Mendengarkan nasihat ibu dan membantu menyapu halaman',
          'Mengunci pintu kamar saat dipanggil ayah',
          'Menuntut dibelikan mainan mahal tanpa peduli kondisi ekonomi keluarga',
          'Menyuruh adik mengerjakan tugas kita'
        ],
        correctIndex: 0,
        explanation: 'Membantu pekerjaan rumah dan mematuhi arahan baik orang tua adalah bukti bakti anak shalih.',
        topic: 'Birrul Walidain'
      },
      {
        id: 'q3_4',
        question: 'Akibat dari perbuatan suka berdusta (berbohong) adalah...',
        options: [
          'Hati menjadi gelisah dan tidak dipercaya orang lain',
          'Mendapatkan banyak sahabat sejati',
          'Dicintai oleh Allah dan malaikat',
          'Membuat hidup selalu beruntung'
        ],
        correctIndex: 0,
        explanation: 'Kebohongan melahirkan ketidaktenangan batin dan menghancurkan rasa saling percaya di masyarakat.',
        topic: 'Bahaya Dusta'
      },
      {
        id: 'q3_5',
        question: 'Ketika seorang anak berbuat kesalahan kepada guru di kelas, sikap jujur yang seharusnya diambil adalah...',
        options: [
          'Meminta maaf dengan tulus dan berjanji memperbaiki perilakunya',
          'Diam saja dan menyalahkan teman di sebelahnya',
          'Keluar kelas tanpa izin',
          'Membantah penjelasan guru'
        ],
        correctIndex: 0,
        explanation: 'Mengakui kesalahan dan memohon maaf dengan tulus menunjukkan kedewasaan akhlak.',
        topic: 'Adab terhadap Guru'
      }
    ],
    reflectionQuestion: 'Bagaimana cara kamu membahagiakan ayah dan ibumu ketika sampai di rumah hari ini?',
    reflectionPrompt: 'Tuliskan satu ucapan terima kasih yang tulus yang ingin kamu sampaikan kepada orang tuamu.'
  },
  {
    id: 4,
    slug: 'dunia-sahabat',
    title: 'Dunia Sahabat: Indahnya Kasih Sayang & Toleransi',
    shortTitle: 'Dunia Sahabat',
    theme: 'Kasih Sayang, Toleransi, & Cinta Sesama',
    description: 'Menjaga persaudaraan, menghargai perbedaan latar belakang teman, dan menerapkan prinsip mencintai sesama seperti mencintai diri sendiri.',
    icon: '🤝',
    accentColor: 'rose',
    badgeName: 'Mahkota Duta Persahabatan',
    badgeDescription: 'Mampu menyemai rasa kasih sayang, toleransi terhadap teman yang berbeda suku/adat, dan suka menolong.',
    badgeIcon: '🤝',
    image: '/src/assets/images/world_sahabat_friends_1790689819991.jpg',
    materials: [
      {
        id: 'mat_4_1',
        title: 'Mencintai Sahabat Seperti Diri Sendiri',
        theme: 'Tanda Kesempurnaan Iman',
        arabicText: 'لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ',
        transliteration: 'Laa yu\'minu ahadukum hattaa yuhibba li-akhiihi maa yuhibbu li-nafsih (HR. Bukhari & Muslim)',
        translation: 'Tidak beriman secara sempurna salah seorang di antara kalian sampai ia mencintai bagi saudaranya apa yang ia cintai bagi dirinya sendiri.',
        explanation: [
          'Jika kita senang diperlakukan dengan ramah, maka perlakukanlah teman kita dengan ramah.',
          'Jika kita sedih saat diejek, jangan pernah mengejek atau mencela orang lain.',
          'Saling mendoakan kebaikan saat sahabat kita sedang sakit atau tertimpa cobaan.'
        ],
        cintaValue: 'Kasih Sayang & Empati',
        dailyAction: 'Berbagi bekal makanan dengan teman yang tidak membawa bekal, dan mengucapkan salam saat bertemu.'
      },
      {
        id: 'mat_4_2',
        title: 'Indahnya Toleransi dan Kerukunan',
        theme: 'Menghargai Keberagaman Bangsa',
        arabicText: 'إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ فَأَصْلِحُوا بَيْنَ أَخَوَيْكُمْ',
        transliteration: 'Innamal-mu\'minuuna ikhwatun fa ashlihuu baina akhawaikum (QS. Al-Hujurat: 10)',
        translation: 'Sesungguhnya orang-orang mukmin itu bersaudara, karena itu damaikanlah antara kedua saudaramu (yang berselisih).',
        explanation: [
          'Di Indonesia terdapat banyak suku, budaya, bahasa daerah, dan agama.',
          'Islam mengajarkan ukhuwah (persaudaraan) dan tasamuh (toleransi) yang santun.',
          'Bila ada teman yang berselisih paham, kita menjadi juru damai yang adil dan menyejukkan.'
        ],
        cintaValue: 'Toleransi & Cinta Bangsa',
        dailyAction: 'Bermain bersama semua teman tanpa membeda-bedakan warna kulit, suku Jawa, Sunda, Batak, Papua, atau lainnya.'
      }
    ],
    susunAyatGame: {
      surahName: 'Hadis Cinta Sesama (HR. Bukhari)',
      ayatNumber: 1,
      fullArabic: 'لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ',
      translation: 'Tidak sempurna iman seseorang hingga mencintai saudaranya seperti mencintai dirinya sendiri.',
      hint: 'Mulai dari "Laa Yu\'minu", "Ahadukum", "Hattaa Yuhibba", "Li-akhiihi".',
      tiles: [
        { id: 'hs1', arabic: 'مَا يُحِبُّ لِنَفْسِهِ', order: 3 },
        { id: 'hs2', arabic: 'لِأَخِيهِ', order: 2 },
        { id: 'hs3', arabic: 'حَتَّى يُحِبَّ', order: 1 },
        { id: 'hs4', arabic: 'لَا يُؤْمِنُ أَحَدُكُمْ', order: 0 },
      ]
    },
    matchPairs: [
      { id: 'mp4_1', left: 'لَا يُؤْمِنُ أَحَدُكُمْ', right: 'Tidak sempurna iman salah seorang kalian', category: 'Hadis Sahabat' },
      { id: 'mp4_2', left: 'حَتَّى يُحِبَّ لِأَخِيهِ', right: 'Hingga ia mencintai saudaranya', category: 'Hadis Sahabat' },
      { id: 'mp4_3', left: 'إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ', right: 'Sesungguhnya orang mukmin itu bersaudara', category: 'QS. Al-Hujurat' },
      { id: 'mp4_4', left: 'فَأَصْلِحُوا بَيْنَ أَخَوَيْكُمْ', right: 'Maka damaikanlah antara saudaramu', category: 'QS. Al-Hujurat' },
    ],
    sikapScenarios: [
      {
        id: 'ss4_1',
        context: 'Di Lapangan Olahraga',
        scenario: 'Saat bermain kasti, teman baru pindahan dari luar pulau berbicara dengan logat bahasa daerah yang berbeda dan melakukan kesalahan dalam melempar bola.',
        options: [
          {
            text: 'Menertawakan logat bahasanya dan tidak mau mengoper bola lagi kepadanya.',
            isCorrect: false,
            feedback: 'Belum tepat. Mengolok-olok asal daerah teman bertentangan dengan nilai ukhuwah dan toleransi.',
            cintaValue: 'Diskriminasi',
            stars: 0
          },
          {
            text: 'Menyemangatinya dengan hangat, mengajaknya berlatih bersama, dan menghargai keberagaman budayanya.',
            isCorrect: true,
            feedback: 'MasyaAllah! Jawabanmu tepat. Sikap ramah dan menerima teman apa adanya adalah wujud cinta sesama manusia dan cinta bangsa.',
            cintaValue: 'Kasih Sayang & Toleransi',
            stars: 3
          },
          {
            text: 'Menyuruhnya duduk saja di pinggir lapangan sendirian.',
            isCorrect: false,
            feedback: 'Belum tepat. Menyingkirkan teman membuat hatinya sedih dan terisolasi.',
            cintaValue: 'Egois',
            stars: 0
          }
        ]
      }
    ],
    memoryCards: [
      { id: 'mc4_1', pairId: 'p4_1', label: 'Tasamuh', iconName: 'Handshake', detail: 'Toleransi & Tenggang Rasa' },
      { id: 'mc4_2', pairId: 'p4_1', label: 'Tasamuh', iconName: 'Handshake', detail: 'Toleransi & Tenggang Rasa' },
      { id: 'mc4_3', pairId: 'p4_2', label: 'Ukhuwah', iconName: 'Heart', detail: 'Persaudaraan Sesama' },
      { id: 'mc4_4', pairId: 'p4_2', label: 'Ukhuwah', iconName: 'Heart', detail: 'Persaudaraan Sesama' },
      { id: 'mc4_5', pairId: 'p4_3', label: 'Tabassum', iconName: 'Smile', detail: 'Senyum Adalah Sedekah' },
      { id: 'mc4_6', pairId: 'p4_3', label: 'Tabassum', iconName: 'Smile', detail: 'Senyum Adalah Sedekah' },
      { id: 'mc4_7', pairId: 'p4_4', label: 'Ishlah', iconName: 'Check', detail: 'Mendamaikan yang Berselisih' },
      { id: 'mc4_8', pairId: 'p4_4', label: 'Ishlah', iconName: 'Check', detail: 'Mendamaikan yang Berselisih' },
    ],
    trueFalseQuestions: [
      {
        id: 'tf4_1',
        statement: 'Mencintai saudara seiman sama seperti mencintai diri sendiri adalah syarat kesempurnaan iman seorang muslim.',
        isTrue: true,
        explanation: 'Benar! Rasulullah SAW menegaskan hal ini dalam hadis shahih riwayat Imam Bukhari dan Muslim.',
        cintaValue: 'Kasih Sayang'
      },
      {
        id: 'tf4_2',
        statement: 'Jika melihat dua teman sedang bertengkar, kita sebaiknya memanas-manasi keadaan agar semakin seru.',
        isTrue: false,
        explanation: 'Salah! Surah Al-Hujurat ayat 10 memerintahkan kita untuk mendamaikan (ishlah) saudara yang berselisih.',
        cintaValue: 'Perdamaian'
      }
    ],
    misiKebaikan: [
      {
        id: 'mk4_1',
        title: 'Misi Merangkul Teman Pemalu',
        location: 'Perpustakaan Madrasah',
        situation: 'Ada teman yang baru masuk sekolah dan duduk menyendiri di sudut perpustakaan karena belum punya teman mengobrol.',
        task: 'Bagaimana langkah persahabatanmu?',
        choices: [
          {
            text: 'Menghampiri dengan senyum manis, memperkenalkan diri, dan mengajaknya membaca buku cerita bersama.',
            isBest: true,
            rewardStars: 3,
            explanation: 'MasyaAllah! Tindakanmu menghilangkan rasa cemas teman baru dan menciptakan jalinan kasih sayang yang indah.',
            impact: 'Teman baru merasa diterima dengan hangat dan menemukan sahabat sejati.'
          },
          {
            text: 'Membiarkannya saja karena takut dicap sok akrab.',
            isBest: false,
            rewardStars: 0,
            explanation: 'Belum tepat. Memulai salam dan keramahan adalah sunnah mulia Rasulullah.',
            impact: 'Temanmu tetap merasa terasing di lingkungan barunya.'
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q4_1',
        question: 'Makna hadis "Laa yu\'minu ahadukum hattaa yuhibba li-akhiihi..." adalah...',
        options: [
          'Tidak sempurna iman seseorang hingga ia mencintai saudaranya seperti mencintai dirinya sendiri',
          'Seseorang harus selalu menang dalam setiap pertandingan',
          'Kita hanya boleh berteman dengan orang yang kaya',
          'Iman seseorang bertambah jika banyak makan'
        ],
        correctIndex: 0,
        explanation: 'Hadis ini mengajarkan rasa empati mendalam: menginginkan kebaikan untuk orang lain sebagaimana kita menginginkannya untuk diri kita.',
        topic: 'Hadis Persaudaraan'
      },
      {
        id: 'q4_2',
        question: 'Menurut Surah Al-Hujurat ayat 10, hubungan antara sesama orang mukmin diibaratkan seperti...',
        options: ['Saudara kandung (Ikhwah)', 'Orang asing', 'Rival yang bersaing', 'Majikan dan buruh'],
        correctIndex: 0,
        explanation: 'Orang beriman diikat oleh tali persaudaraan iman (ukhuwah Islamiyah) yang kokoh.',
        topic: 'Surah Al-Hujurat'
      },
      {
        id: 'q4_3',
        question: 'Sikap yang mencerminkan rasa toleransi (tasamuh) di lingkungan madrasah adalah...',
        options: [
          'Menghargai pendapat teman dalam musyawarah kelompok',
          'Memaksa teman mengikuti makanan kesukaan kita',
          'Hanya mau berteman dengan yang satu suku saja',
          'Menolak belajar bersama teman yang berbeda kemampuan'
        ],
        correctIndex: 0,
        explanation: 'Menghargai perbedaan pendapat dan latar belakang adalah perwujudan akhlak tasamuh.',
        topic: 'Toleransi'
      },
      {
        id: 'q4_4',
        question: 'Hadis Rasulullah SAW menyatakan bahwa tersenyum di hadapan saudaramu bernilai...',
        options: ['Sedekah', 'Dosa kecil', 'Hanya candaan', 'Kewajiban shalat'],
        correctIndex: 0,
        explanation: 'Rasulullah SAW bersabda: "Tabassumuka fii wajhi akhiika laka shadaqah" (Senyummu di hadapan saudaramu adalah sedekah).',
        topic: 'Sedekah Senyum'
      },
      {
        id: 'q4_5',
        question: 'Ketika sahabat kita sedang tertimpa musibah sakit, kewajiban kita sebagai muslim adalah...',
        options: [
          'Menjenguk dan mendoakan kesembuhannya',
          'Mengejeknya karena tidak masuk sekolah',
          'Menghapus namanya dari daftar teman',
          'Mengambil barang-barangnya'
        ],
        correctIndex: 0,
        explanation: 'Menjenguk orang sakit dan mendoakannya adalah salah satu hak seorang muslim atas muslim lainnya.',
        topic: 'Hak Muslim'
      }
    ],
    reflectionQuestion: 'Bagaimana cara kamu menunjukkan rasa kasih sayang kepada teman sekelasmu besok?',
    reflectionPrompt: 'Tuliskan nama satu temanmu dan kebaikan apa yang ingin kamu lakukan untuk membuatnya tersenyum.'
  },
  {
    id: 5,
    slug: 'dunia-lingkungan',
    title: 'Dunia Lingkungan: Menjaga Alam Ciptaan Ilahi & Kebersihan',
    shortTitle: 'Dunia Lingkungan',
    theme: 'Cinta Lingkungan & Kebersihan Bagian dari Iman',
    description: 'Menjaga kelestarian pepohonan, hemat air, tidak membuang sampah sembarangan, serta mengamalkan hadis kesucian dan kebersihan.',
    icon: '🌱',
    accentColor: 'teal',
    badgeName: 'Penjaga Bumi Ciptaan Ilahi',
    badgeDescription: 'Aktif menjaga kebersihan diri, merawat tanaman, menghemat sumber daya air, dan mencintai lingkungan hidup.',
    badgeIcon: '🌱',
    image: '/src/assets/images/world_nature_garden_1790689834324.jpg',
    materials: [
      {
        id: 'mat_5_1',
        title: 'Kebersihan adalah Sebagian dari Iman',
        theme: 'Kesucian Jiwa dan Raga',
        arabicText: 'الطَّهُورُ شَطْرُ الْإِيمَانِ',
        transliteration: 'Ath-thuhuuru syathrul-iimaan (HR. Muslim)',
        translation: 'Bersuci (kebersihan) itu adalah sebagian dari iman.',
        explanation: [
          'Islam sangat mencintai keindahan, kerapian, dan kebersihan lahir maupun batin.',
          'Bersuci sebelum shalat dengan wudhu, memotong kuku, dan mandi secara teratur.',
          'Menjaga kelas dan tempat tinggal bebas dari sampah dan kotoran.'
        ],
        cintaValue: 'Kebersihan & Cinta Diri Sendiri',
        dailyAction: 'Membuang sampah pada tempatnya dan memungut sampah yang berserakan saat melihatnya di halaman sekolah.'
      },
      {
        id: 'mat_5_2',
        title: 'Sedekah Menanam Pohon & Menjaga Alam',
        theme: 'Merawat Makhluk Ciptaan Allah',
        arabicText: 'مَا مِنْ مُسْلِمٍ يَغْرِسُ غَرْسًا أَوْ يَزْرَعُ زَرْعًا فَيَأْكُلُ مِنْهُ طَيْرٌ أَوْ إِنْسَانٌ إِلَّا كَانَ لَهُ بِهِ صَدَقَةٌ',
        transliteration: 'Maa min muslimin yagh-risu gharsan aw yazra\'u zar\'an fa-ya\'kulu minhu thairun aw insaanun illaa kaana lahuu bihii shadaqah (HR. Bukhari)',
        translation: 'Tidaklah seorang muslim menanam sebatang pohon atau menabur benih, lalu burung atau manusia memakannya, melainkan hal itu bernilai sedekah baginya.',
        explanation: [
          'Pohon menghasilkan oksigen segar dan menjadi tempat berteduh makhluk hidup.',
          'Menanam dan menyiram tanaman adalah amal jariyah yang terus mengalirkan pahala.',
          'Rasulullah juga melarang pemborosan air, bahkan saat berwudhu di sungai yang mengalir.'
        ],
        cintaValue: 'Cinta Lingkungan & Tanggung Jawab Bumi',
        dailyAction: 'Menyiram tanaman di pot depan rumah dan mematikan kran air yang menetes agar tidak mubazir.'
      }
    ],
    susunAyatGame: {
      surahName: 'Hadis Kebersihan (HR. Muslim)',
      ayatNumber: 1,
      fullArabic: 'الطَّهُورُ شَطْرُ الْإِيمَانِ',
      translation: 'Bersuci/kebersihan itu adalah sebagian dari iman.',
      hint: 'Mulai dari kata "Ath-Thuhuru", "Syathrul", "Al-Iimaan".',
      tiles: [
        { id: 'hl1', arabic: 'الْإِيمَانِ', order: 2 },
        { id: 'hl2', arabic: 'الطَّهُورُ', order: 0 },
        { id: 'hl3', arabic: 'شَطْرُ', order: 1 },
      ]
    },
    matchPairs: [
      { id: 'mp5_1', left: 'الطَّهُورُ شَطْرُ الْإِيمَانِ', right: 'Kebersihan adalah sebagian dari iman', category: 'Kebersihan' },
      { id: 'mp5_2', left: 'يَغْرِسُ غَرْسًا', right: 'Menanam sebatang pohon', category: 'Lingkungan' },
      { id: 'mp5_3', left: 'إِلَّا كَانَ لَهُ بِهِ صَدَقَةٌ', right: 'Melainkan bernilai sedekah baginya', category: 'Lingkungan' },
      { id: 'mp5_4', left: 'لَا تُسْرِفْ فِي الْمَاءِ', right: 'Janganlah berlebih-lebihan memakai air', category: 'Hemat Air' },
    ],
    sikapScenarios: [
      {
        id: 'ss5_1',
        context: 'Di Halaman Sekolah',
        scenario: 'Setelah makan biskuit, Salman melihat tempat sampah penuh, lalu seorang teman menyuruhnya membuang bungkus plastik ke selokan air saja.',
        options: [
          {
            text: 'Mengikuti saran teman dan melempar plastik ke selokan karena tidak ada yang melihat.',
            isCorrect: false,
            feedback: 'Belum tepat. Membuang sampah ke selokan menyumbat aliran air dan menyebabkan banjir serta penyakit.',
            cintaValue: 'Merusak Lingkungan',
            stars: 0
          },
          {
            text: 'Menyimpan bungkus plastik di saku tas sementara waktu sampai menemukan tempat sampah yang kosong.',
            isCorrect: true,
            feedback: 'MasyaAllah! Jawabanmu tepat. Menjaga kebersihan lingkungan adalah bukti keimanan sejati kepada Allah.',
            cintaValue: 'Cinta Lingkungan & Tanggung Jawab',
            stars: 3
          },
          {
            text: 'Membakar sampah plastik di bawah pohon sekolah.',
            isCorrect: false,
            feedback: 'Belum tepat. Asap pembakaran plastik beracun dan mencemari udara yang kita hirup.',
            cintaValue: 'Polusi Udara',
            stars: 0
          }
        ]
      }
    ],
    memoryCards: [
      { id: 'mc5_1', pairId: 'p5_1', label: 'Ath-Thuhur', iconName: 'Droplet', detail: 'Kesucian & Wudhu' },
      { id: 'mc5_2', pairId: 'p5_1', label: 'Ath-Thuhur', iconName: 'Droplet', detail: 'Kesucian & Wudhu' },
      { id: 'mc5_3', pairId: 'p5_2', label: 'Shadaqah Pohon', iconName: 'TreePine', detail: 'Sedekah Menanam Tanaman' },
      { id: 'mc5_4', pairId: 'p5_2', label: 'Shadaqah Pohon', iconName: 'TreePine', detail: 'Sedekah Menanam Tanaman' },
      { id: 'mc5_5', pairId: 'p5_3', label: 'Hemat Air', iconName: 'Waves', detail: 'Tidak Mubazir Sumber Daya' },
      { id: 'mc5_6', pairId: 'p5_3', label: 'Hemat Air', iconName: 'Waves', detail: 'Tidak Mubazir Sumber Daya' },
      { id: 'mc5_7', pairId: 'p5_4', label: 'Bumi Asri', iconName: 'Globe', detail: 'Amanah Khilafah di Muka Bumi' },
      { id: 'mc5_8', pairId: 'p5_4', label: 'Bumi Asri', iconName: 'Globe', detail: 'Amanah Khilafah di Muka Bumi' },
    ],
    trueFalseQuestions: [
      {
        id: 'tf5_1',
        statement: 'Menanam pohon yang buah atau dedaunannya dimakan burung akan bernilai pahala sedekah bagi penanamnya.',
        isTrue: true,
        explanation: 'Benar! Rasulullah SAW menjamin bahwa setiap manfaat dari tanaman yang dinikmati makhluk hidup adalah sedekah.',
        cintaValue: 'Sedekah Alam'
      },
      {
        id: 'tf5_2',
        statement: 'Saat berwudhu, kita boleh membiarkan kran air mengalir deras dan terbuang sia-sia karena air ada banyak.',
        isTrue: false,
        explanation: 'Salah! Rasulullah SAW melarang berlebih-lebihan (israf) dalam memakai air sekalipun di sungai mengalir.',
        cintaValue: 'Hemat Sumber Daya'
      }
    ],
    misiKebaikan: [
      {
        id: 'mk5_1',
        title: 'Misi Merawat Bunga yang Layu',
        location: 'Taman Depan Kelas',
        situation: 'Tanaman bunga melati di pot depan kelas terlihat menunduk layu di bawah terik matahari siang karena tanahnya kering.',
        task: 'Apa aksi nyata cinta lingkunganmu?',
        choices: [
          {
            text: 'Mengambil gayung air secukupnya, menyiram pangkal tanah dengan lembut, dan membersihkan daun-daun kering di sekitarnya.',
            isBest: true,
            rewardStars: 3,
            explanation: 'MasyaAllah! Menyayangi tanaman adalah bentuk kasih sayang kepada sesama makhluk ciptaan Allah.',
            impact: 'Bunga melati kembali segar, mekar indah, dan menebarkan aroma wangi semerbak di sekolah.'
          },
          {
            text: 'Memetik bunganya untuk dijadikan mainan lalu mencabut akarnya.',
            isBest: false,
            rewardStars: 0,
            explanation: 'Belum tepat. Merusak tanaman tanpa alasan membuat lingkungan gersang dan mati.',
            impact: 'Tanaman mati dan halaman menjadi gersang.'
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q5_1',
        question: 'Arti dari potongan hadis "Ath-thuhuuru syathrul iimaan" adalah...',
        options: [
          'Bersuci/kebersihan itu adalah sebagian dari iman',
          'Shalat adalah tiang agama',
          'Menuntut ilmu adalah kewajiban setiap muslim',
          'Puasa adalah benteng dari godaan syaitan'
        ],
        correctIndex: 0,
        explanation: 'Hadis ini mengajarkan bahwa menjaga kebersihan diri dan lingkungan adalah bukti keimanan kepada Allah.',
        topic: 'Hadis Kebersihan'
      },
      {
        id: 'q5_2',
        question: 'Mengapa menanam tanaman di pekarangan rumah bernilai pahala sedekah?',
        options: [
          'Karena memberikan oksigen dan tempat hidup bagi hewan serta manusia',
          'Supaya bisa pamer kepada tetangga',
          'Agar tidak perlu pergi ke sekolah',
          'Karena tanahnya bisa dijual mahal'
        ],
        correctIndex: 0,
        explanation: 'Setiap buah, daun, atau oksigen yang dinikmati makhluk hidup bernilai amal jariyah bagi penanamnya.',
        topic: 'Hadis Lingkungan'
      },
      {
        id: 'q5_3',
        question: 'Adab yang benar saat menggunakan air wudhu sesuai sunnah Rasulullah adalah...',
        options: [
          'Membuka kran secukupnya dan tidak membuang-buang air secara berlebihan',
          'Membuka kran sekencang-kencangnya agar cepat selesai',
          'Menyiramkan air ke teman yang sedang menunggu',
          'Membiarkan kran tetap menyala setelah selesai berwudhu'
        ],
        correctIndex: 0,
        explanation: 'Islam melarang sikap israf (berlebih-lebihan/boros) dalam segala hal, termasuk dalam memakai air.',
        topic: 'Adab Wudhu'
      },
      {
        id: 'q5_4',
        question: 'Tindakan yang menunjukkan rasa cinta kepada lingkungan sekolah adalah...',
        options: [
          'Memilah sampah organik dan anorganik pada tempatnya',
          'Mencoret-coret dinding toilet sekolah',
          'Menginjak-injak rumput taman yang baru ditanam',
          'Membuang bungkus es ke dalam laci meja'
        ],
        correctIndex: 0,
        explanation: 'Memilah sampah dan menjaga fasilitas umum membuat lingkungan madrasah tetap asri dan nyaman.',
        topic: 'Peduli Lingkungan'
      },
      {
        id: 'q5_5',
        question: 'Di antara manfaat menjaga kebersihan badan seperti rajin mencuci tangan dan menggosok gigi adalah...',
        options: [
          'Terhindar dari kuman penyakit dan disukai oleh Allah serta malaikat',
          'Bisa makan makanan kotor tanpa sakit',
          'Tidak perlu berwudhu lagi saat shalat',
          'Membuat orang lain merasa takut'
        ],
        correctIndex: 0,
        explanation: 'Allah mencintai hamba-Nya yang senantiasa bertaubat dan menyucikan diri (QS. Al-Baqarah: 222).',
        topic: 'Kesehatan Islami'
      }
    ],
    reflectionQuestion: 'Bagaimana caramu menjaga kebersihan kamarmu dan kelestarian tanaman di sekitarmu hari ini?',
    reflectionPrompt: 'Tuliskan satu hal sederhana yang akan kamu lakukan untuk merawat bumi hari ini (contoh: hemat air wudhu atau memungut sampah).'
  },
  {
    id: 6,
    slug: 'dunia-cinta-kepedulian',
    title: 'Dunia Cinta & Kepedulian: Misi Akbar Cinta Umat & Bangsa',
    shortTitle: 'Dunia Cinta',
    theme: 'Cinta kepada Allah, Rasul, Sesama, & Tanah Air',
    description: 'Puncak petualangan Kurikulum Cinta: menyatukan seluruh nilai kebaikan, memperkuat persatuan bangsa, tolong-menolong, dan menebarkan rahmat bagi semesta alam.',
    icon: '💖',
    accentColor: 'amber',
    badgeName: 'Satria Kurikulum Cinta',
    badgeDescription: 'Berhasil mengintegrasikan seluruh nilai cinta: kepada Allah, Al-Qur\'an, diri sendiri, sesama manusia, lingkungan, dan tanah air Indonesia.',
    badgeIcon: '💖',
    image: '/src/assets/images/world_cinta_unity_1791797865938.jpg',
    materials: [
      {
        id: 'mat_6_1',
        title: 'Islam adalah Rahmat Bagi Semesta Alam',
        theme: 'Rahmatan Lil \'Alamin',
        arabicText: 'وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِلْعَالَمِينَ',
        transliteration: 'Wa maa arsalnaaka illaa rahmatan lil-\'aalamiin (QS. Al-Anbiya: 107)',
        translation: 'Dan Kami tidak mengutus engkau (Muhammad) melainkan untuk (menjadi) rahmat bagi seluruh alam.',
        explanation: [
          'Ajaran Islam membawa kedamaian, keselamatan, dan kasih sayang untuk seluruh manusia, hewan, tumbuhan, dan alam semesta.',
          'Tidak boleh berbuat aniaya kepada sesama makhluk hidup.',
          'Menebarkan perdamaian di mana pun kita berada.'
        ],
        cintaValue: 'Kasih Sayang Universal & Perdamaian',
        dailyAction: 'Menjadi juru damai saat melihat perselisihan dan menyapa teman dengan salam hangat dan mendoakan keselamatan.'
      },
      {
        id: 'mat_6_2',
        title: 'Cinta Tanah Air & Tolong Menolong',
        theme: 'Tolong-Menolong Dalam Kebajikan',
        arabicText: 'وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ وَلَا تَعَاوَنُوا عَلَى الْإِثْمِ وَالْعُدْوَانِ',
        transliteration: 'Wa ta\'aawanuu \'alal-birri wat-taqwaa, wa laa ta\'aawanuu \'alal-itsmi wal-\'udwaan (QS. Al-Maidah: 2)',
        translation: 'Dan tolong-menolonglah kamu dalam (mengerjakan) kebajikan dan takwa, dan jangan tolong-menolong dalam berbuat dosa dan permusuhan.',
        explanation: [
          'Mencintai negara Indonesia dengan menjaga kerukunan, persatuan, dan mematuhi aturan yang baik.',
          'Bahu membahu menolong sesama yang terkena musibah bencana alam tanpa membedakan agama dan suku.',
          'Mengharumkan nama bangsa dengan rajin belajar dan berprestasi.'
        ],
        cintaValue: 'Cinta Bangsa & Gotong Royong',
        dailyAction: 'Ikut bergotong royong membersihkan lingkungan madrasah dan menghormati lagu kebangsaan serta bendera merah putih.'
      }
    ],
    susunAyatGame: {
      surahName: 'QS. Al-Anbiya Ayat 107',
      ayatNumber: 107,
      fullArabic: 'وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِلْعَالَمِينَ',
      translation: 'Dan tidaklah Kami mengutusmu melainkan sebagai rahmat bagi semesta alam.',
      hint: 'Mulai dari "Wa maa", "Arsalnaaka", "Illaa", "Rahmatan", "Lil-\'Aalamiin".',
      tiles: [
        { id: 'hc1', arabic: 'لِلْعَالَمِينَ', order: 4 },
        { id: 'hc2', arabic: 'أَرْسَلْنَاكَ', order: 1 },
        { id: 'hc3', arabic: 'رَحْمَةً', order: 3 },
        { id: 'hc4', arabic: 'وَمَا', order: 0 },
        { id: 'hc5', arabic: 'إِلَّا', order: 2 },
      ]
    },
    matchPairs: [
      { id: 'mp6_1', left: 'رَحْمَةً لِلْعَالَمِينَ', right: 'Rahmat bagi seluruh semesta alam', category: 'QS. Al-Anbiya' },
      { id: 'mp6_2', left: 'وَتَعَاوَنُوا عَلَى الْبِرِّ', right: 'Tolong-menolonglah dalam kebajikan', category: 'QS. Al-Maidah' },
      { id: 'mp6_3', left: 'وَلَا تَعَاوَنُوا عَلَى الْإِثْمِ', right: 'Jangan tolong-menolong dalam dosa', category: 'QS. Al-Maidah' },
      { id: 'mp6_4', left: 'الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ', right: 'Muslim sejati adalah yang lisannya aman bagi orang lain', category: 'Hadis Muslim' },
    ],
    sikapScenarios: [
      {
        id: 'ss6_1',
        context: 'Di Lingkungan Masyarakat',
        scenario: 'Warga di desa sedang mengadakan kerja bakti membersihkan balai desa dan membantu renovasi rumah nenek jompo. Salman diajak teman-temannya main game online di warnet saat itu.',
        options: [
          {
            text: 'Pergi main game online seharian dan pura-pura tidak mendengar panggilan ayah.',
            isCorrect: false,
            feedback: 'Belum tepat. Mengabaikan gotong royong dan perintah orang tua bertentangan dengan Kurikulum Cinta.',
            cintaValue: 'Ketidakpedulian',
            stars: 0
          },
          {
            text: 'Ikut serta bersama ayah membantu membawakan minuman, menyapu halaman balai desa, dan tersenyum menyapa warga.',
            isCorrect: true,
            feedback: 'MasyaAllah! Jawabanmu tepat. Sikap gotong royong adalah wujud nyata tolong-menolong dalam kebajikan (QS. Al-Maidah: 2) dan cinta tanah air.',
            cintaValue: 'Gotong Royong & Kepedulian Sosial',
            stars: 3
          },
          {
            text: 'Hadir hanya untuk mengambil kue konsumsi lalu langsung pulang sembunyi-sembunyi.',
            isCorrect: false,
            feedback: 'Belum tepat. Mengambil keuntungan tanpa mau berkontribusi adalah sikap kurang terpuji.',
            cintaValue: 'Egois',
            stars: 0
          }
        ]
      }
    ],
    memoryCards: [
      { id: 'mc6_1', pairId: 'p6_1', label: 'Rahmatan Lil \'Alamin', iconName: 'Sun', detail: 'Kasih Sayang Semesta' },
      { id: 'mc6_2', pairId: 'p6_1', label: 'Rahmatan Lil \'Alamin', iconName: 'Sun', detail: 'Kasih Sayang Semesta' },
      { id: 'mc6_3', pairId: 'p6_2', label: 'Ta\'awun', iconName: 'Users', detail: 'Tolong Menolong Kebaikan' },
      { id: 'mc6_4', pairId: 'p6_2', label: 'Ta\'awun', iconName: 'Users', detail: 'Tolong Menolong Kebaikan' },
      { id: 'mc6_5', pairId: 'p6_3', label: 'Cinta Bangsa', iconName: 'Flag', detail: 'Persatuan & Hubbul Wathan' },
      { id: 'mc6_6', pairId: 'p6_3', label: 'Cinta Bangsa', iconName: 'Flag', detail: 'Persatuan & Hubbul Wathan' },
      { id: 'mc6_7', pairId: 'p6_4', label: 'Bintang Kebaikan', iconName: 'Star', detail: 'Puncak Penjelajah Cinta' },
      { id: 'mc6_8', pairId: 'p6_4', label: 'Bintang Kebaikan', iconName: 'Star', detail: 'Puncak Penjelajah Cinta' },
    ],
    trueFalseQuestions: [
      {
        id: 'tf6_1',
        statement: 'Nabi Muhammad SAW diutus Allah bukan hanya untuk orang Arab, melainkan sebagai rahmat bagi seluruh alam semesta.',
        isTrue: true,
        explanation: 'Benar! Penegasan ini tertulis dalam Al-Qur\'an Surah Al-Anbiya ayat 107.',
        cintaValue: 'Rahmat Semesta'
      },
      {
        id: 'tf6_2',
        statement: 'Kita diperbolehkan tolong-menolong dengan teman dalam hal berbuat curang saat ujian semester.',
        isTrue: false,
        explanation: 'Salah! Surah Al-Maidah ayat 2 melarang tolong-menolong dalam perbuatan dosa dan pelanggaran.',
        cintaValue: 'Integritas'
      }
    ],
    misiKebaikan: [
      {
        id: 'mk6_1',
        title: 'Misi Akbar: Duta Kebaikan Nusantara',
        location: 'Posko Donasi Bencana',
        situation: 'Terjadi musibah banjir di daerah tetangga. Sekolah membuka posko bantuan untuk anak-anak korban bencana yang kehilangan seragam dan buku pelajaran.',
        task: 'Bagaimana kamu menunjukkan kepedulian cintamu?',
        choices: [
          {
            text: 'Menyisihkan sebagian uang saku, menyumbangkan buku tulis dan pakaian layak pakai, serta mendoakan keselamatan mereka.',
            isBest: true,
            rewardStars: 3,
            explanation: 'MasyaAllah! Inilah wujud puncak Kurikulum Cinta: cinta kepada sesama saudara sebangsa dan setanah air.',
            impact: 'Anak-anak di daerah bencana dapat kembali belajar dengan ceria dan kebutuhan pokoknya terbantu.'
          },
          {
            text: 'Mengatakan bahwa bencana itu bukan salah kita jadi tidak perlu ikut membantu.',
            isBest: false,
            rewardStars: 0,
            explanation: 'Belum tepat. Sesama manusia ibarat satu tubuh, jika satu bagian sakit maka seluruh tubuh merasakannya.',
            impact: 'Kepekaan hati nurani menjadi tumpul.'
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q6_1',
        question: 'Makna dari konsep "Rahmatan lil \'Aalamiin" dalam ajaran Islam adalah...',
        options: [
          'Membawa rahmat, kasih sayang, dan kedamaian bagi seluruh alam',
          'Menguasai seluruh harta benda dunia',
          'Hanya menyayangi orang yang kaya saja',
          'Memusuhi orang yang berbeda pendapat'
        ],
        correctIndex: 0,
        explanation: 'Islam diturunkan sebagai rahmat universal yang menjaga kedamaian dan kesejahteraan seluruh alam semesta.',
        topic: 'Rahmatan Lil \'Alamin'
      },
      {
        id: 'q6_2',
        question: 'Menurut Surah Al-Maidah ayat 2, perkara apakah yang diperintahkan untuk saling tolong-menolong?',
        arabicSnippet: 'وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ',
        options: [
          'Dalam kebajikan dan ketakwaan',
          'Dalam perbuatan dosa dan kecurangan',
          'Dalam merusak fasilitas umum',
          'Dalam mengejek suku lain'
        ],
        correctIndex: 0,
        explanation: 'Allah memerintahkan umat manusia untuk saling bekerja sama dalam hal-hal kebajikan dan ketaqwaan.',
        topic: 'Tolong Menolong'
      },
      {
        id: 'q6_3',
        question: 'Bagaimana wujud cinta tanah air (Hubbul Wathan) yang dapat dilakukan oleh murid kelas 4 MI/SD?',
        options: [
          'Belajar dengan sungguh-sungguh, rukun dengan teman, dan menjaga kelestarian negeri',
          'Sering membolos sekolah',
          'Merusak tanaman di tempat wisata',
          'Membanggakan bangsa lain dan merendahkan budaya sendiri'
        ],
        correctIndex: 0,
        explanation: 'Mencintai bangsa diwujudkan melalui akhlak mulia, kerukunan, menjaga tanah air, dan tekun menuntut ilmu.',
        topic: 'Cinta Bangsa'
      },
      {
        id: 'q6_4',
        question: 'Pilar utama Kurikulum Cinta yang mengajarkan kita untuk tidak sombong dan menjaga amanah tubuh adalah...',
        options: [
          'Cinta kepada diri sendiri dan rasa syukur kepada Allah',
          'Cinta kepada pujian manusia',
          'Cinta kepada permainan game',
          'Cinta kepada tidur larut malam'
        ],
        correctIndex: 0,
        explanation: 'Cinta diri sendiri menuntun kita untuk menjaga kesehatan, kehormatan, dan kesucian jiwa raga karunia Allah.',
        topic: 'Kurikulum Cinta'
      },
      {
        id: 'q6_5',
        question: 'Tindakan yang paling mencerminkan seorang "Penjelajah Cinta Al-Qur\'an dan Hadis" adalah...',
        options: [
          'Menerapkan ayat dan hadis dalam perilaku jujur, penyayang, dan peduli sehari-hari',
          'Hanya menghafal tanpa mengerti artinya',
          'Menjadikan Al-Qur\'an sekadar pajangan di lemari',
          'Memamerkan hafalan agar mendapat banyak uang'
        ],
        correctIndex: 0,
        explanation: 'Penjelajah Cinta sejati menjadikan Al-Qur\'an dan Hadis sebagai pedoman hidup nyata dalam setiap perbuatan terpuji.',
        topic: 'Pengamalan Cinta'
      }
    ],
    reflectionQuestion: 'Setelah menjelajahi seluruh dunia pembelajaran, apa janji cintamu untuk menjadi anak shalih/shalihah di madrasah dan di rumah?',
    reflectionPrompt: 'Tuliskan janji kebaikanmu kepada Allah, orang tua, teman, dan lingkungan sekitarmu.'
  }
];

export const WORLDS: World[] = BASE_WORLDS.map((w) => {
  const exp = CHAPTER_EXPLANATIONS[w.id];
  return {
    ...w,
    chapterSummary: exp?.chapterSummary,
    materials: w.materials.map((m) => ({
      ...m,
      detailedExplanation: exp?.materialsDetail[m.id],
    })),
  };
});

export const PRE_TEST_QUESTIONS: QuizQuestion[] = [
  {
    id: 'pt_1',
    question: 'Surah At-Tin ayat 4 menjelaskan bahwa manusia diciptakan oleh Allah dalam bentuk...',
    arabicSnippet: 'فِي أَحْسَنِ تَقْوِيمٍ',
    options: ['Bentuk yang sebaik-baiknya', 'Bentuk yang paling tinggi', 'Bentuk yang paling lemah', 'Bentuk yang serba kekurangan'],
    correctIndex: 0,
    explanation: 'Ahsani taqwiim artinya bentuk ciptaan yang paling sempurna dan mulia.',
    topic: 'Surah At-Tin'
  },
  {
    id: 'pt_2',
    question: 'Berdasarkan sabda Rasulullah SAW, penentu utama nilai suatu amal perbuatan di mata Allah adalah...',
    arabicSnippet: 'إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ',
    options: ['Niat di dalam hati', 'Banyaknya orang yang melihat', 'Pujian dari teman', 'Besarnya suara saat beramal'],
    correctIndex: 0,
    explanation: 'Amalan sah dan berpahala bila didasari niat ikhlas karena Allah semata.',
    topic: 'Hadis Niat'
  },
  {
    id: 'pt_3',
    question: 'Jika kamu tanpa sengaja memecahkan barang milik orang tua di rumah, sikap yang paling terpuji adalah...',
    options: [
      'Jujur mengakui kesalahan dan meminta maaf dengan santun',
      'Menyalahkan adik atau hewan peliharaan',
      'Pura-pura tidur agar tidak ditanya',
      'Marah-marah kepada orang tua'
    ],
    correctIndex: 0,
    explanation: 'Kejujuran menuntun pada kebaikan dan keridhaan orang tua.',
    topic: 'Kejujuran & Akhlak'
  },
  {
    id: 'pt_4',
    question: 'Rasulullah SAW bersabda bahwa kebersihan (bersuci) adalah...',
    arabicSnippet: 'الطَّهُورُ شَطْرُ الْإِيمَانِ',
    options: ['Sebagian dari iman', 'Hanya untuk orang kaya', 'Kewajiban saat hari raya saja', 'Pekerjaan yang membuang waktu'],
    correctIndex: 0,
    explanation: 'Ath-thuhuuru syathrul iimaan berarti kebersihan/kesucian merupakan separuh dari keimanan.',
    topic: 'Kebersihan'
  },
  {
    id: 'pt_5',
    question: 'Bagaimana sikap seorang muslim terhadap teman yang berbeda suku atau logat bahasanya?',
    options: [
      'Menghormati, bersikap ramah, dan bermain bersama secara rukun',
      'Mengejek logat bicaranya',
      'Menjauhi dan tidak mau mengajak belajar kelompok',
      'Memaksa teman mengganti bahasanya'
    ],
    correctIndex: 0,
    explanation: 'Toleransi dan ukhuwah mengajarkan kita merangkul semua saudara sebangsa.',
    topic: 'Toleransi & Sahabat'
  }
];

export const POST_TEST_QUESTIONS: QuizQuestion[] = [
  {
    id: 'post_1',
    question: 'Surah At-Tin diakhiri dengan penegasan bahwa Allah SWT adalah...',
    arabicSnippet: 'أَلَيْسَ اللَّهُ بِأَحْكَمِ الْحَاكِمِينَ',
    options: ['Hakim yang paling adil', 'Tuhan pencipta bintang', 'Pemilik gunung Sinai', 'Pemberi rezeki tanaman'],
    correctIndex: 0,
    explanation: 'Allah adalah Ahkamul Hakimiin, Hakim yang paling adil dan bijaksana.',
    topic: 'Surah At-Tin'
  },
  {
    id: 'post_2',
    question: 'Kabar gembira apakah yang diulang sebanyak dua kali dalam Surah Al-Insyirah ayat 5 dan 6?',
    arabicSnippet: 'فَإِنَّ مَعَ الْعُسْرِ يُسْرًا',
    options: [
      'Beserta setiap kesulitan pasti ada kemudahan',
      'Manusia akan selalu kaya raya',
      'Ujian hidup tidak akan pernah ada',
      'Orang beriman tidak perlu berusaha'
    ],
    correctIndex: 0,
    explanation: 'Allah mengulang dua kali untuk meyakinkan hati hamba-Nya agar selalu optimis.',
    topic: 'Surah Al-Insyirah'
  },
  {
    id: 'post_3',
    question: 'Hadis "Ittaqillaaha haitsumaa kunta" memerintahkan kita untuk bertakwa kepada Allah di mana pun berada. Contoh perilakunya adalah...',
    options: [
      'Tetap tidak menyontek saat ujian meskipun pengawas tidak melihat',
      'Rajin shalat hanya jika disuruh oleh guru di sekolah',
      'Membayar makanan di kantin hanya bila diawasi',
      'Berbicara santun hanya di depan orang tua saja'
    ],
    correctIndex: 0,
    explanation: 'Taqwa hakiki adalah merasa selalu dalam pengawasan Allah (Muraqabah) kapan dan di mana pun.',
    topic: 'Hadis Taqwa'
  },
  {
    id: 'post_4',
    question: 'Mengapa birrul walidain (berbakti kepada kedua orang tua) menempati kedudukan sangat tinggi dalam Islam?',
    options: [
      'Karena ridha Allah berada pada ridha orang tua dan murka Allah pada murka orang tua',
      'Supaya mendapatkan warisan yang melimpah',
      'Agar dipuji oleh tetangga sekitar',
      'Hanya sekadar adat istiadat'
    ],
    correctIndex: 0,
    explanation: 'Rasulullah menegaskan ridha Allah bergantung pada ridha ayah dan ibu kita.',
    topic: 'Birrul Walidain'
  },
  {
    id: 'post_5',
    question: 'Lafadz hadis "Laa yu\'minu ahadukum hattaa yuhibba li-akhiihi maa yuhibbu linafsih" menegaskan tentang...',
    options: [
      'Kewajiban mencintai saudara seperti mencintai diri sendiri',
      'Kewajiban puasa di bulan Ramadhan',
      'Larangan bermain saat malam hari',
      'Keutamaan membaca doa sebelum tidur'
    ],
    correctIndex: 0,
    explanation: 'Empati dan kasih sayang kepada sesama adalah tolak ukur kesempurnaan iman seorang mukmin.',
    topic: 'Hadis Persaudaraan'
  },
  {
    id: 'post_6',
    question: 'Ketika kita menanam sebatang pohon dan buahnya dimakan oleh burung atau manusia, maka nilainya adalah...',
    options: ['Sedekah yang berpahala bagi kita', 'Kerugian karena buahnya habis', 'Perbuatan sia-sia', 'Dosa karena tidak dijual'],
    correctIndex: 0,
    explanation: 'HR. Bukhari menegaskan hal tersebut bernilai sedekah jariyah bagi orang yang menanam.',
    topic: 'Hadis Lingkungan'
  },
  {
    id: 'post_7',
    question: 'Perilaku boros (israf) dalam menggunakan air wudhu dilarang dalam Islam karena...',
    options: [
      'Air adalah karunia Allah yang harus dijaga dan dihemat penggunaannya',
      'Bisa membuat tangan menjadi dingin',
      'Malaikat tidak suka dengan orang bersih',
      'Dapat membuat kran menjadi cepat aus'
    ],
    correctIndex: 0,
    explanation: 'Mubazir dan israf adalah perbuatan yang dibenci Allah dan menyerupai perbuatan syaitan.',
    topic: 'Adab Menggunakan Air'
  },
  {
    id: 'post_8',
    question: 'Surah Al-Maidah ayat 2 memerintahkan kita untuk saling tolong-menolong dalam...',
    arabicSnippet: 'وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ',
    options: [
      'Kebajikan dan takwa',
      'Kecurangan dan fitnah',
      'Pamer kekayaan',
      'Mencari kelemahan orang lain'
    ],
    correctIndex: 0,
    explanation: 'Tolong-menolong diwajibkan dalam hal yang mendatangkan kemaslahatan dan ketakwaan.',
    topic: 'Tolong Menolong'
  },
  {
    id: 'post_9',
    question: 'Pengertian dari "Rahmatan lil \'Aalamiin" (QS. Al-Anbiya: 107) adalah...',
    options: [
      'Kasih sayang dan rahmat untuk seluruh alam semesta',
      'Hukum yang hanya berlaku untuk bangsa tertentu',
      'Kemenangan dalam perlombaan',
      'Kekayaan yang tiada habisnya'
    ],
    correctIndex: 0,
    explanation: 'Islam membawa misi kasih sayang dan kemaslahatan untuk seisi bumi.',
    topic: 'Rahmat Semesta'
  },
  {
    id: 'post_10',
    question: 'Seorang peserta didik yang telah mempraktikkan "Kurikulum Cinta" akan bersikap...',
    options: [
      'Jujur, santun kepada guru, menyayangi teman, hemat air, dan rajin tadabur Al-Qur\'an',
      'Pintar di kelas namun sering mengolok-olok teman',
      'Rajin menghafal hadis tetapi membantah perintah ibu',
      'Banyak teman tetapi suka membuang sampah sembarangan'
    ],
    correctIndex: 0,
    explanation: 'Kurikulum Cinta menyatukan pemahaman ilmu dengan pengamalan akhlak mulia sejati.',
    topic: 'Integrasi Kurikulum Cinta'
  }
];
