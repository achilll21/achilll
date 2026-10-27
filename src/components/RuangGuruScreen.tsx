import React, { useState, useEffect } from 'react';
import { useGame } from '../context/GameContext';
import { WORLDS, CHARACTERS } from '../data/gameData';
import { StudentRecord } from '../types/game';
import {
  GraduationCap,
  Download,
  Printer,
  Plus,
  Trash2,
  CheckCircle2,
  AlertCircle,
  Star,
  Sparkles,
  Heart,
  BookOpen,
  Award,
  ArrowLeft,
  FileSpreadsheet,
  FileText,
  UserCheck,
  TrendingUp,
  RotateCcw,
} from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface RuangGuruScreenProps {
  onBack: () => void;
}

const STORAGE_KEY_CLASS = 'petualangan_cinta_kelas_records_v1';

const INITIAL_CLASS_STUDENTS: StudentRecord[] = [
  {
    id: 'std_1',
    name: 'Ahmad Rizki Maulana',
    nisn: '0134982711',
    characterName: 'Ahmad',
    preTestScore: 70,
    worldQuizScores: { 1: 100, 2: 90, 3: 80, 4: 100, 5: 90, 6: 100 },
    postTestScore: 95,
    stars: 38,
    xp: 420,
    completedWorldsCount: 6,
    cintaRating: {
      cintaAllahRasul: 'Sangat Baik',
      cintaQuran: 'Sangat Baik',
      cintaDiri: 'Sangat Baik',
      cintaSesama: 'Sangat Baik',
      cintaLingkungan: 'Sangat Baik',
      cintaBangsa: 'Sangat Baik',
    },
    notes: 'Sangat aktif mentadaburi ayat, berakhlak santun, dan rajin membantu teman.',
  },
  {
    id: 'std_2',
    name: 'Siti Fatimah Zahra',
    nisn: '0134982712',
    characterName: 'Fatimah',
    preTestScore: 80,
    worldQuizScores: { 1: 90, 2: 100, 3: 100, 4: 90, 5: 90, 6: 90 },
    postTestScore: 90,
    stars: 35,
    xp: 390,
    completedWorldsCount: 6,
    cintaRating: {
      cintaAllahRasul: 'Sangat Baik',
      cintaQuran: 'Sangat Baik',
      cintaDiri: 'Baik',
      cintaSesama: 'Sangat Baik',
      cintaLingkungan: 'Sangat Baik',
      cintaBangsa: 'Baik',
    },
    notes: 'Penuh empati, selalu merawat kebersihan ruang kelas, dan sopan dalam bertutur kata.',
  },
  {
    id: 'std_3',
    name: 'Salman Al-Farisi',
    nisn: '0134982713',
    characterName: 'Salman',
    preTestScore: 60,
    worldQuizScores: { 1: 80, 2: 80, 3: 90, 4: 80, 5: 100, 6: 80 },
    postTestScore: 85,
    stars: 29,
    xp: 330,
    completedWorldsCount: 6,
    cintaRating: {
      cintaAllahRasul: 'Baik',
      cintaQuran: 'Baik',
      cintaDiri: 'Baik',
      cintaSesama: 'Baik',
      cintaLingkungan: 'Sangat Baik',
      cintaBangsa: 'Sangat Baik',
    },
    notes: 'Gemar menanam pohon dan hemat air, perlu terus dimotivasi dalam hafalan ayat.',
  },
  {
    id: 'std_4',
    name: 'Aisyah Humaira Putri',
    nisn: '0134982714',
    characterName: 'Aisyah',
    preTestScore: 75,
    worldQuizScores: { 1: 100, 2: 90, 3: 90, 4: 100, 5: 80, 6: 90 },
    postTestScore: 90,
    stars: 32,
    xp: 360,
    completedWorldsCount: 6,
    cintaRating: {
      cintaAllahRasul: 'Sangat Baik',
      cintaQuran: 'Sangat Baik',
      cintaDiri: 'Baik',
      cintaSesama: 'Sangat Baik',
      cintaLingkungan: 'Baik',
      cintaBangsa: 'Sangat Baik',
    },
    notes: 'Sangat toleran dan ramah kepada teman berbeda suku, daya tangkap materi tinggi.',
  },
  {
    id: 'std_5',
    name: 'Muhammad Zidan Al-Ghifari',
    nisn: '0134982715',
    characterName: 'Ahmad',
    preTestScore: 50,
    worldQuizScores: { 1: 70, 2: 80, 3: 75, 4: 70, 5: null, 6: null },
    postTestScore: null,
    stars: 18,
    xp: 190,
    completedWorldsCount: 4,
    cintaRating: {
      cintaAllahRasul: 'Baik',
      cintaQuran: 'Cukup',
      cintaDiri: 'Baik',
      cintaSesama: 'Baik',
      cintaLingkungan: 'Cukup',
      cintaBangsa: 'Baik',
    },
    notes: 'Sedang menyelesaikan Bab 5 dan 6, perlu pendampingan membaca kosa kata Arab.',
  },
];

export const RuangGuruScreen: React.FC<RuangGuruScreenProps> = ({ onBack }) => {
  const { player } = useGame();
  const [activeTab, setActiveTab] = useState<'siswa' | 'kelas' | 'rubrik'>('siswa');
  const [classList, setClassList] = useState<StudentRecord[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_CLASS);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Fallback
    }
    return INITIAL_CLASS_STUDENTS;
  });

  const [isAddingStudent, setIsAddingStudent] = useState(false);
  const [newStudentName, setNewStudentName] = useState('');
  const [newStudentNisn, setNewStudentNisn] = useState('');

  // Persist class records
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_CLASS, JSON.stringify(classList));
    } catch (e) {
      console.error('Failed to save class records', e);
    }
  }, [classList]);

  // Extract current player's scores
  const getPlayerQuizScore = (worldId: number): number | null => {
    const result = player.testResults.find((r) => r.type === 'quiz' && r.worldId === worldId);
    return result ? result.score : null;
  };

  const playerPreTest = player.testResults.find((r) => r.type === 'pre-test')?.score ?? null;
  const playerPostTest = player.testResults.find((r) => r.type === 'post-test')?.score ?? null;

  const playerQuizAvg = (() => {
    const scores = [1, 2, 3, 4, 5, 6]
      .map((wId) => getPlayerQuizScore(wId))
      .filter((s): s is number => s !== null);
    if (scores.length === 0) return null;
    return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
  })();

  const playerFinalGrade = (() => {
    const pre = playerPreTest ?? 0;
    const post = playerPostTest ?? playerQuizAvg ?? 0;
    const avgQuiz = playerQuizAvg ?? 0;
    if (playerPostTest !== null) {
      return Math.round(pre * 0.2 + avgQuiz * 0.4 + post * 0.4);
    }
    if (playerQuizAvg !== null) {
      return playerQuizAvg;
    }
    return pre || null;
  })();

  // Class statistics
  const totalStudents = classList.length;
  const completedClassCount = classList.filter((s) => s.completedWorldsCount === 6).length;
  const classAvgScore = (() => {
    const scores = classList
      .map((s) => s.postTestScore || s.preTestScore)
      .filter((s): s is number => s !== null);
    if (scores.length === 0) return 0;
    return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
  })();

  const ketuntasanPct = Math.round(
    (classList.filter((s) => (s.postTestScore ?? s.preTestScore ?? 0) >= 75).length /
      Math.max(1, totalStudents)) *
      100
  );

  const handleExportCSV = () => {
    sounds.playVictory();
    // Headers
    const headers = [
      'No',
      'NISN',
      'Nama Siswa',
      'Karakter',
      'Pre-Test',
      'Kuis Bab 1 (Quran)',
      'Kuis Bab 2 (Hadis)',
      'Kuis Bab 3 (Akhlak)',
      'Kuis Bab 4 (Sahabat)',
      'Kuis Bab 5 (Lingkungan)',
      'Kuis Bab 6 (Cinta)',
      'Post-Test',
      'Bintang',
      'XP',
      'Status Kelulusan',
      'Catatan Sikap',
    ];

    // Combine active player into export if not already there
    const allRows = [
      {
        name: `${player.name} (Siswa Aktif)`,
        nisn: '0134982700',
        char: CHARACTERS.find((c) => c.id === player.characterId)?.name || 'Ahmad',
        pre: playerPreTest !== null ? playerPreTest : '-',
        q1: getPlayerQuizScore(1) !== null ? getPlayerQuizScore(1) : '-',
        q2: getPlayerQuizScore(2) !== null ? getPlayerQuizScore(2) : '-',
        q3: getPlayerQuizScore(3) !== null ? getPlayerQuizScore(3) : '-',
        q4: getPlayerQuizScore(4) !== null ? getPlayerQuizScore(4) : '-',
        q5: getPlayerQuizScore(5) !== null ? getPlayerQuizScore(5) : '-',
        q6: getPlayerQuizScore(6) !== null ? getPlayerQuizScore(6) : '-',
        post: playerPostTest !== null ? playerPostTest : '-',
        stars: player.stars,
        xp: player.xp,
        status: player.completedWorlds.length === 6 ? 'Tuntas' : 'Sedang Belajar',
        notes: 'Hasil belajar langsung dari sesi permainan terkini.',
      },
      ...classList.map((s) => ({
        name: s.name,
        nisn: s.nisn,
        char: s.characterName,
        pre: s.preTestScore !== null ? s.preTestScore : '-',
        q1: s.worldQuizScores[1] !== null ? s.worldQuizScores[1] : '-',
        q2: s.worldQuizScores[2] !== null ? s.worldQuizScores[2] : '-',
        q3: s.worldQuizScores[3] !== null ? s.worldQuizScores[3] : '-',
        q4: s.worldQuizScores[4] !== null ? s.worldQuizScores[4] : '-',
        q5: s.worldQuizScores[5] !== null ? s.worldQuizScores[5] : '-',
        q6: s.worldQuizScores[6] !== null ? s.worldQuizScores[6] : '-',
        post: s.postTestScore !== null ? s.postTestScore : '-',
        stars: s.stars,
        xp: s.xp,
        status: s.completedWorldsCount === 6 ? 'Tuntas' : 'Belum Tuntas',
        notes: s.notes,
      })),
    ];

    const csvContent =
      'data:text/csv;charset=utf-8,' +
      [
        headers.join(','),
        ...allRows.map((r, i) =>
          [
            i + 1,
            `"${r.nisn}"`,
            `"${r.name}"`,
            `"${r.char}"`,
            r.pre,
            r.q1,
            r.q2,
            r.q3,
            r.q4,
            r.q5,
            r.q6,
            r.post,
            r.stars,
            r.xp,
            `"${r.status}"`,
            `"${r.notes}"`,
          ].join(',')
        ),
      ].join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Rekap_Nilai_AlQuranHadis_Kelas4_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    sounds.playClick();
    window.print();
  };

  const handleAddStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStudentName.trim()) return;

    sounds.playVictory();
    const newRecord: StudentRecord = {
      id: `std_${Date.now()}`,
      name: newStudentName.trim(),
      nisn: newStudentNisn.trim() || `013498${Math.floor(1000 + Math.random() * 9000)}`,
      characterName: 'Ahmad',
      preTestScore: 70,
      worldQuizScores: { 1: 85, 2: 80, 3: null, 4: null, 5: null, 6: null },
      postTestScore: null,
      stars: 12,
      xp: 140,
      completedWorldsCount: 2,
      cintaRating: {
        cintaAllahRasul: 'Baik',
        cintaQuran: 'Baik',
        cintaDiri: 'Baik',
        cintaSesama: 'Baik',
        cintaLingkungan: 'Baik',
        cintaBangsa: 'Baik',
      },
      notes: 'Siswa baru ditambahkan ke data rekapan kelas.',
    };

    setClassList((prev) => [...prev, newRecord]);
    setNewStudentName('');
    setNewStudentNisn('');
    setIsAddingStudent(false);
  };

  const handleDeleteStudent = (id: string) => {
    sounds.playClick();
    setClassList((prev) => prev.filter((s) => s.id !== id));
  };

  const handleResetClass = () => {
    sounds.playClick();
    if (confirm('Kembalikan data rekapan kelas ke daftar default simulasi?')) {
      setClassList(INITIAL_CLASS_STUDENTS);
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 pb-20 print:p-0 print:space-y-4">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-amber-200/80 pb-4 print:hidden">
        <button
          onClick={() => {
            sounds.playClick();
            onBack();
          }}
          className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-emerald-800 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Permainan</span>
        </button>

        <div className="text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-800 text-amber-300 text-xs font-bold rounded-full shadow-2xs">
            <GraduationCap className="w-4 h-4" />
            <span>Portal & Ruang Guru MI/SD</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
            REKAPITULASI PENILAIAN & RAPOR KURIKULUM CINTA
          </h1>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleExportCSV}
            className="px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
            title="Ekspor rekapitulasi nilai ke format CSV/Excel"
          >
            <FileSpreadsheet className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Ekspor Excel</span>
          </button>
          <button
            onClick={handlePrint}
            className="px-3 py-1.5 bg-slate-800 hover:bg-slate-900 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
            title="Cetak lembar rapor penilaian"
          >
            <Printer className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Cetak Rapor</span>
          </button>
        </div>
      </div>

      {/* Official Madrasah Print Header (only shows when printing) */}
      <div className="hidden print:block text-center border-b-2 border-slate-900 pb-4 mb-4">
        <h2 className="text-lg font-black uppercase tracking-wider">
          KEMENTERIAN AGAMA REPUBLIK INDONESIA
        </h2>
        <h3 className="text-base font-bold">
          MADRASAH IBTIDAIYAH (MI) TARBIYATUL ATHFAL FASE B
        </h3>
        <p className="text-xs text-slate-600">
          Lembar Laporan Hasil Asesmen Al-Qur'an Hadis & Penguatan Karakter Kurikulum Cinta
        </p>
        <p className="text-xs text-slate-500 italic mt-0.5">
          Tahun Pelajaran 2026/2027 &bull; Kelas IV (Empat) MI/SD
        </p>
      </div>

      {/* Teacher Dashboard Banner */}
      <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-emerald-700/50 relative overflow-hidden print:hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2">
            <span className="px-3 py-1 rounded-full bg-emerald-800/80 border border-emerald-500/50 text-xs font-bold text-amber-300">
              Mata Pelajaran: Al-Qur'an Hadis Fase B (Kelas IV)
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              Pusat Evaluasi Pembelajaran & Observasi Sikap
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100/90 max-w-2xl leading-relaxed">
              Memantau ketercapaian Tujuan Pembelajaran (TP) peserta didik secara formatif dan sumatif,
              mengintegrasikan nilai Kurikulum Cinta (kasih sayang, kejujuran, tanggung jawab, kepedulian lingkungan, dan cinta bangsa), serta memberikan rekomendasi pengayaan atau remedial.
            </p>
          </div>

          {/* Quick Metrics of Class */}
          <div className="grid grid-cols-3 gap-3 bg-white/10 backdrop-blur-xs p-4 rounded-2xl border border-white/20 shrink-0 text-center">
            <div>
              <span className="text-[11px] text-emerald-200 block">Siswa Aktif</span>
              <span className="text-xl sm:text-2xl font-black text-white">{totalStudents + 1}</span>
            </div>
            <div>
              <span className="text-[11px] text-emerald-200 block">Rata-Rata</span>
              <span className="text-xl sm:text-2xl font-black text-amber-300">{classAvgScore}</span>
            </div>
            <div>
              <span className="text-[11px] text-emerald-200 block">Ketuntasan</span>
              <span className="text-xl sm:text-2xl font-black text-emerald-300">{ketuntasanPct}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Ruang Guru Navigation Tabs */}
      <div className="flex items-center gap-2 p-1.5 bg-white border border-amber-200/80 rounded-2xl shadow-xs overflow-x-auto print:hidden">
        <button
          onClick={() => {
            sounds.playClick();
            setActiveTab('siswa');
          }}
          className={`flex-1 min-w-[170px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
            activeTab === 'siswa'
              ? 'bg-emerald-800 text-white shadow-xs'
              : 'text-slate-600 hover:text-emerald-900 hover:bg-emerald-50'
          }`}
        >
          <UserCheck className="w-4 h-4" />
          <span>Rekap Siswa Terkini ({player.name})</span>
        </button>

        <button
          onClick={() => {
            sounds.playClick();
            setActiveTab('kelas');
          }}
          className={`flex-1 min-w-[170px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
            activeTab === 'kelas'
              ? 'bg-emerald-800 text-white shadow-xs'
              : 'text-slate-600 hover:text-emerald-900 hover:bg-emerald-50'
          }`}
        >
          <TrendingUp className="w-4 h-4" />
          <span>Rekapitulasi Kelas IV ({totalStudents} Siswa)</span>
        </button>

        <button
          onClick={() => {
            sounds.playClick();
            setActiveTab('rubrik');
          }}
          className={`flex-1 min-w-[170px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
            activeTab === 'rubrik'
              ? 'bg-emerald-800 text-white shadow-xs'
              : 'text-slate-600 hover:text-emerald-900 hover:bg-emerald-50'
          }`}
        >
          <Heart className="w-4 h-4 text-rose-400" />
          <span>Rubrik Kurikulum Cinta</span>
        </button>
      </div>

      {/* ============================================================== */}
      {/* TAB 1: REKAP NILAI SISWA AKTIF (RAPOR INDIVIDUAL)               */}
      {/* ============================================================== */}
      {activeTab === 'siswa' && (
        <div className="space-y-6">
          {/* Student Biodata Card */}
          <div className="bg-white rounded-3xl p-6 border-2 border-emerald-200/90 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 border-2 border-emerald-400 flex items-center justify-center text-3xl shrink-0 shadow-xs">
                🎓
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  Laporan Hasil Belajar Peserta Didik
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                  {player.name}
                </h3>
                <p className="text-xs text-slate-600">
                  Karakter: <strong>{CHARACTERS.find((c) => c.id === player.characterId)?.name}</strong> &bull;
                  Fase B &bull; Kelas IV MI/SD &bull; Semester Ganjil
                </p>
              </div>
            </div>

            {/* Overall Performance Badge */}
            <div className="flex items-center gap-3 bg-amber-50/80 border border-amber-200 p-3.5 rounded-2xl">
              <div className="text-center">
                <span className="text-[10px] font-bold text-amber-800 block">Bintang Kebaikan</span>
                <span className="text-lg font-black text-amber-900">⭐ {player.stars}</span>
              </div>
              <div className="h-8 w-px bg-amber-200" />
              <div className="text-center">
                <span className="text-[10px] font-bold text-emerald-800 block">Nilai Akhir</span>
                <span className="text-lg font-black text-emerald-900">
                  {playerFinalGrade !== null ? `${playerFinalGrade}` : 'Dalam Proses'}
                </span>
              </div>
              <div className="h-8 w-px bg-amber-200" />
              <div className="text-center">
                <span className="text-[10px] font-bold text-purple-800 block">Predikat</span>
                <span className="text-lg font-black text-purple-900">
                  {playerFinalGrade && playerFinalGrade >= 85
                    ? 'A (Amat Baik)'
                    : playerFinalGrade && playerFinalGrade >= 75
                    ? 'B (Baik)'
                    : playerFinalGrade
                    ? 'C (Cukup)'
                    : '-'}
                </span>
              </div>
            </div>
          </div>

          {/* Table of Modular Scores */}
          <div className="bg-white rounded-3xl border border-amber-200/90 shadow-sm overflow-hidden">
            <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-emerald-700" />
                <h3 className="text-sm font-bold text-slate-900">
                  Rincian Asesmen Formatif & Sumatif Al-Qur'an Hadis
                </h3>
              </div>
              <span className="text-xs text-slate-500">KKM Madrasah: 75</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-100/80 text-slate-700 font-bold border-b border-slate-200">
                  <tr>
                    <th className="p-3.5">No</th>
                    <th className="p-3.5">Materi Pembelajaran / Asesmen</th>
                    <th className="p-3.5">Jenis Asesmen</th>
                    <th className="p-3.5">Nilai Skor</th>
                    <th className="p-3.5">Status Ketercapaian</th>
                    <th className="p-3.5">Tindak Lanjut Guru</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {/* Pre-Test */}
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-3.5 font-semibold text-slate-500">01</td>
                    <td className="p-3.5 font-bold text-slate-900">
                      Asesmen Diagnostik Awal (Pre-Test)
                    </td>
                    <td className="p-3.5 text-slate-600">Diagnostik Awal</td>
                    <td className="p-3.5 font-mono font-bold text-slate-900">
                      {playerPreTest !== null ? playerPreTest : <span className="text-slate-400">Belum Ujian</span>}
                    </td>
                    <td className="p-3.5">
                      {playerPreTest !== null ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          Terlaksana
                        </span>
                      ) : (
                        <span className="text-[11px] font-medium text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full">
                          Perlu Mengerjakan
                        </span>
                      )}
                    </td>
                    <td className="p-3.5 text-slate-600 text-xs">
                      Pemetaan pemahaman awal materi Fase B.
                    </td>
                  </tr>

                  {/* 6 Worlds Quizzes */}
                  {WORLDS.map((w, i) => {
                    const score = getPlayerQuizScore(w.id);
                    const isDone = score !== null;
                    const isPassed = isDone && score >= 75;

                    return (
                      <tr key={w.id} className="hover:bg-slate-50/80">
                        <td className="p-3.5 font-semibold text-slate-500">0{i + 2}</td>
                        <td className="p-3.5">
                          <span className="font-bold text-slate-900 block">
                            {w.shortTitle}
                          </span>
                          <span className="text-[11px] text-slate-500">
                            {w.theme}
                          </span>
                        </td>
                        <td className="p-3.5 text-slate-600">Formatif Bab {w.id}</td>
                        <td className="p-3.5 font-mono font-bold text-slate-900">
                          {isDone ? score : <span className="text-slate-400">-</span>}
                        </td>
                        <td className="p-3.5">
                          {isPassed ? (
                            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                              Tuntas (KKM Tercapai)
                            </span>
                          ) : isDone ? (
                            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full">
                              <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                              Remedial
                            </span>
                          ) : (
                            <span className="text-[11px] font-medium text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                              Belum Dikerjakan
                            </span>
                          )}
                        </td>
                        <td className="p-3.5 text-slate-600 text-xs">
                          {isPassed
                            ? 'Diberikan pengayaan materi Kurikulum Cinta lanjutan.'
                            : isDone
                            ? 'Ulangi membaca modul penjelasan lengkap & kuis remedial.'
                            : 'Bimbingan belajar mandiri modul bab ini.'}
                        </td>
                      </tr>
                    );
                  })}

                  {/* Post-Test */}
                  <tr className="hover:bg-slate-50/80 bg-emerald-50/30">
                    <td className="p-3.5 font-semibold text-slate-500">08</td>
                    <td className="p-3.5 font-bold text-emerald-950">
                      Asesmen Sumatif Akhir (Post-Test)
                    </td>
                    <td className="p-3.5 text-slate-600">Sumatif Semester</td>
                    <td className="p-3.5 font-mono font-bold text-emerald-950 text-base">
                      {playerPostTest !== null ? playerPostTest : <span className="text-slate-400">Belum Ujian</span>}
                    </td>
                    <td className="p-3.5">
                      {playerPostTest !== null && playerPostTest >= 75 ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-900 bg-emerald-200 px-2.5 py-0.5 rounded-full shadow-2xs">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                          Lulus Memuaskan
                        </span>
                      ) : playerPostTest !== null ? (
                        <span className="text-[11px] font-bold text-amber-900 bg-amber-200 px-2 py-0.5 rounded-full">
                          Perlu Remedial
                        </span>
                      ) : (
                        <span className="text-[11px] font-medium text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                          Belum Asesmen
                        </span>
                      )}
                    </td>
                    <td className="p-3.5 text-slate-600 text-xs">
                      {playerPostTest !== null
                        ? 'Siap melanjutkan ke materi Fase C Kelas V MI.'
                        : 'Selesaikan seluruh wilayah 1-6 sebelum mengikuti ujian akhir.'}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Kurikulum Cinta Attitude Assessment Matrix */}
          <div className="bg-white rounded-3xl p-6 border border-amber-200/90 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  Matriks Penilaian Sikap Spiritual & Sosial "Kurikulum Cinta"
                </h3>
              </div>
              <span className="text-xs text-slate-500">Observasi Berkelanjutan</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {[
                {
                  dimensi: 'Cinta Kepada Allah & Rasul',
                  kegiatan: 'Meluruskan niat dalam berbuat, tekun shalat, dan meneladani sunnah.',
                  predikat: 'Sangat Baik',
                  deskripsi: 'Menunjukkan keikhlasan tinggi tanpa riya\' dan selalu bersyukur.',
                },
                {
                  dimensi: 'Cinta Kepada Al-Qur\'an',
                  kegiatan: 'Tartil membaca QS. At-Tin & Al-Insyirah serta mentadaburi maknanya.',
                  predikat: 'Sangat Baik',
                  deskripsi: 'Memiliki komitmen membaca dan menghafal ayat-ayat pilihan dengan tartil.',
                },
                {
                  dimensi: 'Cinta Kepada Diri Sendiri',
                  kegiatan: 'Merawat tubuh karunia Allah, pantang minder, dan menjaga kehormatan raga.',
                  predikat: 'Baik',
                  deskripsi: 'Menjaga kebersihan diri dan makan makanan yang halal lagi thoyyib.',
                },
                {
                  dimensi: 'Cinta Kepada Sesama Manusia',
                  kegiatan: 'Menyayangi sahabat, bersikap toleran, tolong menolong, dan gemar tersenyum.',
                  predikat: 'Sangat Baik',
                  deskripsi: 'Aktif mendamaikan perselisihan dan berbagi kebaikan tanpa membeda-bedakan.',
                },
                {
                  dimensi: 'Cinta Kepada Lingkungan Hidup',
                  kegiatan: 'Hemat air wudhu, menanam tanaman, dan membuang sampah pada tempatnya.',
                  predikat: 'Sangat Baik',
                  deskripsi: 'Menyadari bahwa merawat alam dan tanaman bernilai sedekah jariyah.',
                },
                {
                  dimensi: 'Cinta Kepada Bangsa & Negara',
                  kegiatan: 'Gotong royong membersihkan madrasah dan menjaga persatuan Indonesia.',
                  predikat: 'Sangat Baik',
                  deskripsi: 'Menghargai keragaman suku adat dan cinta tanah air (Hubbul Wathan).',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-slate-50 rounded-2xl border border-slate-200/90 space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-emerald-800 uppercase">
                      Dimensi {idx + 1}
                    </span>
                    <span className="text-xs font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200">
                      {item.predikat}
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                    {item.dimensi}
                  </h4>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    {item.deskripsi}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Student Qualitative Reflections Log for Portfolio */}
          <div className="bg-white rounded-3xl p-6 border border-amber-200/90 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-indigo-600" />
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  Dokumentasi Portofolio Jurnal Refleksi Hati Siswa
                </h3>
              </div>
              <span className="text-xs text-slate-500">
                {player.reflections.length} Catatan Masuk
              </span>
            </div>

            {player.reflections.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {player.reflections.map((ref, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-amber-50/50 border border-amber-200 rounded-2xl space-y-1.5"
                  >
                    <div className="flex items-center justify-between text-[11px] text-amber-900 font-bold">
                      <span>{ref.worldTitle}</span>
                      <span className="text-slate-500 font-normal">{ref.date}</span>
                    </div>
                    <p className="text-xs text-slate-700 font-medium italic">
                      "{ref.question}"
                    </p>
                    <div className="p-2.5 bg-white rounded-xl border border-amber-200/80 text-xs text-slate-900 font-semibold">
                      Jawaban Siswa: "{ref.answer}"
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-slate-500 italic py-3 text-center">
                Belum ada catatan refleksi yang diisi oleh siswa. Catatan akan muncul otomatis setelah siswa menyelesaikan refleksi di setiap wilayah.
              </p>
            )}
          </div>

          {/* Official Signatures for Printing */}
          <div className="hidden print:grid grid-cols-2 pt-8 text-center text-xs">
            <div>
              <p className="mb-14">
                Mengetahui,<br />
                <strong>Kepala Madrasah Ibtidaiyah</strong>
              </p>
              <p className="font-bold underline">H. Muhammad Mansur, M.Pd.I</p>
              <p className="text-[11px] text-slate-500">NIP. 19780512 200501 1 004</p>
            </div>
            <div>
              <p className="mb-14">
                Guru Mata Pelajaran Al-Qur'an Hadis,<br />
                <strong>Wali Kelas IV Fase B</strong>
              </p>
              <p className="font-bold underline">Ustadzah Nurul Latifah, S.Pd.I</p>
              <p className="text-[11px] text-slate-500">NIP. 19850914 201101 2 008</p>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* TAB 2: REKAPITULASI NILAI KELAS (MULTI-SISWA)                   */}
      {/* ============================================================== */}
      {activeTab === 'kelas' && (
        <div className="space-y-6">
          {/* Controls Bar */}
          <div className="bg-white rounded-2xl p-4 border border-amber-200 shadow-xs flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-700">Daftar Rekap Kelas:</span>
              <span className="text-xs font-mono font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-md">
                {classList.length} Siswa Terdaftar
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  sounds.playClick();
                  setIsAddingStudent(!isAddingStudent);
                }}
                className="px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Tambah Siswa</span>
              </button>
              <button
                onClick={handleResetClass}
                className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                title="Reset data ke contoh default"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Contoh</span>
              </button>
            </div>
          </div>

          {/* Form Tambah Siswa */}
          {isAddingStudent && (
            <form
              onSubmit={handleAddStudent}
              className="bg-emerald-50/70 border-2 border-emerald-300 rounded-3xl p-5 space-y-4 animate-in fade-in"
            >
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-emerald-950 flex items-center gap-1.5">
                  <Plus className="w-4 h-4 text-emerald-700" />
                  Tambah Data Nilai Siswa Baru
                </h4>
                <button
                  type="button"
                  onClick={() => setIsAddingStudent(false)}
                  className="text-xs text-slate-500 hover:text-slate-800"
                >
                  Batal
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Nama Lengkap Siswa:</label>
                  <input
                    type="text"
                    required
                    value={newStudentName}
                    onChange={(e) => setNewStudentName(e.target.value)}
                    placeholder="Contoh: Muhammad Farhan"
                    className="w-full p-2.5 bg-white border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">NISN (Nomor Induk):</label>
                  <input
                    type="text"
                    value={newStudentNisn}
                    onChange={(e) => setNewStudentNisn(e.target.value)}
                    placeholder="Contoh: 0134982719"
                    className="w-full p-2.5 bg-white border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2">
                <button
                  type="submit"
                  className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold shadow-xs cursor-pointer"
                >
                  Simpan ke Rekap Kelas
                </button>
              </div>
            </form>
          )}

          {/* Class Grade Recap Table */}
          <div className="bg-white rounded-3xl border border-amber-200/90 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                  <tr>
                    <th className="p-3">No</th>
                    <th className="p-3">NISN</th>
                    <th className="p-3">Nama Siswa</th>
                    <th className="p-3 text-center">Pre-Test</th>
                    <th className="p-3 text-center">B1</th>
                    <th className="p-3 text-center">B2</th>
                    <th className="p-3 text-center">B3</th>
                    <th className="p-3 text-center">B4</th>
                    <th className="p-3 text-center">B5</th>
                    <th className="p-3 text-center">B6</th>
                    <th className="p-3 text-center">Post-Test</th>
                    <th className="p-3 text-center">Bintang</th>
                    <th className="p-3 text-center">Status</th>
                    <th className="p-3 text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-sans">
                  {/* Current Active Player First Row */}
                  <tr className="bg-emerald-50/70 font-semibold border-b-2 border-emerald-200">
                    <td className="p-3 font-bold text-emerald-800">⭐</td>
                    <td className="p-3 font-mono text-[11px] text-slate-500">0134982700</td>
                    <td className="p-3">
                      <span className="font-bold text-slate-900 block">{player.name}</span>
                      <span className="text-[10px] text-emerald-700 font-bold uppercase">
                        (Sesi Pemain Aktif)
                      </span>
                    </td>
                    <td className="p-3 text-center font-mono font-bold">
                      {playerPreTest !== null ? playerPreTest : '-'}
                    </td>
                    <td className="p-3 text-center font-mono">{getPlayerQuizScore(1) ?? '-'}</td>
                    <td className="p-3 text-center font-mono">{getPlayerQuizScore(2) ?? '-'}</td>
                    <td className="p-3 text-center font-mono">{getPlayerQuizScore(3) ?? '-'}</td>
                    <td className="p-3 text-center font-mono">{getPlayerQuizScore(4) ?? '-'}</td>
                    <td className="p-3 text-center font-mono">{getPlayerQuizScore(5) ?? '-'}</td>
                    <td className="p-3 text-center font-mono">{getPlayerQuizScore(6) ?? '-'}</td>
                    <td className="p-3 text-center font-mono font-bold text-emerald-800">
                      {playerPostTest !== null ? playerPostTest : '-'}
                    </td>
                    <td className="p-3 text-center font-bold text-amber-700">
                      ⭐ {player.stars}
                    </td>
                    <td className="p-3 text-center">
                      <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                        {player.completedWorlds.length === 6 ? 'Khatam 6 Bab' : `${player.completedWorlds.length}/6 Bab`}
                      </span>
                    </td>
                    <td className="p-3 text-center text-slate-400 text-xs">-</td>
                  </tr>

                  {/* Rest of Students */}
                  {classList.map((student, idx) => (
                    <tr key={student.id} className="hover:bg-slate-50">
                      <td className="p-3 text-slate-500 font-medium">{idx + 1}</td>
                      <td className="p-3 font-mono text-[11px] text-slate-500">{student.nisn}</td>
                      <td className="p-3">
                        <span className="font-bold text-slate-900 block">{student.name}</span>
                        <span className="text-[10px] text-slate-500">Avatar: {student.characterName}</span>
                      </td>
                      <td className="p-3 text-center font-mono">
                        {student.preTestScore !== null ? student.preTestScore : '-'}
                      </td>
                      <td className="p-3 text-center font-mono">{student.worldQuizScores[1] ?? '-'}</td>
                      <td className="p-3 text-center font-mono">{student.worldQuizScores[2] ?? '-'}</td>
                      <td className="p-3 text-center font-mono">{student.worldQuizScores[3] ?? '-'}</td>
                      <td className="p-3 text-center font-mono">{student.worldQuizScores[4] ?? '-'}</td>
                      <td className="p-3 text-center font-mono">{student.worldQuizScores[5] ?? '-'}</td>
                      <td className="p-3 text-center font-mono">{student.worldQuizScores[6] ?? '-'}</td>
                      <td className="p-3 text-center font-mono font-bold text-slate-900">
                        {student.postTestScore !== null ? student.postTestScore : '-'}
                      </td>
                      <td className="p-3 text-center font-bold text-amber-700">
                        ⭐ {student.stars}
                      </td>
                      <td className="p-3 text-center">
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            student.completedWorldsCount === 6
                              ? 'text-emerald-800 bg-emerald-100'
                              : 'text-amber-800 bg-amber-100'
                          }`}
                        >
                          {student.completedWorldsCount === 6 ? 'Tuntas' : `${student.completedWorldsCount}/6`}
                        </span>
                      </td>
                      <td className="p-3 text-center">
                        <button
                          onClick={() => handleDeleteStudent(student.id)}
                          className="p-1 text-slate-400 hover:text-rose-600 rounded-md transition-colors"
                          title="Hapus data siswa ini"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* TAB 3: RUBRIK & PANDUAN KURIKULUM CINTA                         */}
      {/* ============================================================== */}
      {activeTab === 'rubrik' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/90 shadow-sm space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200 text-xs font-bold mb-2">
                <Heart className="w-3.5 h-3.5 text-rose-600 fill-rose-600" />
                <span>Pedoman Penilaian Sikap Spiritual & Sosial</span>
              </div>
              <h3 className="text-xl font-black text-slate-900">
                Rubrik Observasi 6 Pilar Kurikulum Cinta Fase B
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl mt-1">
                Panduan guru Al-Qur'an Hadis dalam memetakan perilaku harian murid kelas IV. Penilaian tidak hanya mengukur ranah kognitif hafalan, namun menitikberatkan pada pengamalan akhlakul karimah di madrasah dan lingkungan sekitar.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  pilar: '1. Cinta Kepada Allah & Rasul',
                  kriteria: 'Ikhlas berniat, antusias shalat berjamaah, dan meneladani sifat amanah.',
                  skorSangatBaik: 'Selalu meluruskan niat dalam berbuat dan tidak pernah pamer amal.',
                  skorBaik: 'Melaksanakan ibadah dengan tertib dan memerlukan sedikit dorongan motivasi.',
                  skorCukup: 'Masih perlu diingatkan untuk khusyuk dan meluruskan niat beribadah.',
                },
                {
                  pilar: '2. Cinta Kepada Al-Qur\'an',
                  kriteria: 'Membaca tartil, adab memegang mushaf, dan mentadaburi kandungan ayat.',
                  skorSangatBaik: 'Fasih membaca makharijul huruf dan rajin mentadaburi pesan moral ayat.',
                  skorBaik: 'Mampu membaca dengan baik dan memahami makna ringkas ayat.',
                  skorCukup: 'Masih terbata-bata dalam membaca tajwid atau harakat.',
                },
                {
                  pilar: '3. Cinta Kepada Diri Sendiri',
                  kriteria: 'Menjaga kesehatan fisik, bersyukur atas rupa fisik, dan pantang berputus asa.',
                  skorSangatBaik: 'Sangat percaya diri, selalu bersyukur, dan pantang menyerah saat ujian.',
                  skorBaik: 'Mampu menjaga kebersihan diri dan berpikiran positif.',
                  skorCukup: 'Kadang merasa minder atau mudah menyerah saat tugas terasa berat.',
                },
                {
                  pilar: '4. Cinta Kepada Sesama Manusia',
                  kriteria: 'Kasih sayang, toleransi, empati, tolong-menolong, dan suka tersenyum.',
                  skorSangatBaik: 'Suka menolong teman tanpa pamrih, menghormati teman berbeda suku, dan pemaaf.',
                  skorBaik: 'Rukun dengan teman sebangku dan santun berbicara kepada guru.',
                  skorCukup: 'Kadang masih suka menggoda atau berselisih faham dengan teman.',
                },
                {
                  pilar: '5. Cinta Kepada Lingkungan Hidup',
                  kriteria: 'Kebersihan madrasah, hemat air wudhu, dan merawat tanaman sekolah.',
                  skorSangatBaik: 'Pelopor memungut sampah, hemat memakai air wudhu, dan menyayangi binatang.',
                  skorBaik: 'Membuang sampah pada tempatnya dan mematikan kran air setelah wudhu.',
                  skorCukup: 'Perlu diingatkan untuk tidak membuang sampah sembarangan di laci meja.',
                },
                {
                  pilar: '6. Cinta Kepada Bangsa & Negara',
                  kriteria: 'Gotong royong, menjaga persatuan Indonesia, dan bangga berprestasi.',
                  skorSangatBaik: 'Aktif dalam kerja bakti, bangga atas tanah air, dan cinta kerukunan NKRI.',
                  skorBaik: 'Tertib mengikuti upacara bendera dan mematuhi tata tertib madrasah.',
                  skorCukup: 'Perlu pemahaman lebih tentang arti kerja sama dan toleransi keberagaman.',
                },
              ].map((rub, i) => (
                <div
                  key={i}
                  className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2"
                >
                  <h4 className="text-xs sm:text-sm font-bold text-emerald-950 flex items-center gap-1.5">
                    <span>🌟</span>
                    <span>{rub.pilar}</span>
                  </h4>
                  <p className="text-[11px] text-slate-600 italic">
                    Fokus: {rub.kriteria}
                  </p>
                  <div className="space-y-1 text-[11px] pt-1">
                    <div className="p-2 bg-emerald-50 text-emerald-900 rounded-lg">
                      <strong>Sangat Baik (A):</strong> {rub.skorSangatBaik}
                    </div>
                    <div className="p-2 bg-blue-50 text-blue-900 rounded-lg">
                      <strong>Baik (B):</strong> {rub.skorBaik}
                    </div>
                    <div className="p-2 bg-amber-50 text-amber-900 rounded-lg">
                      <strong>Cukup (C):</strong> {rub.skorCukup}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
