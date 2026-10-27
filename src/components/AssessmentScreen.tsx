import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { PRE_TEST_QUESTIONS, POST_TEST_QUESTIONS, CHARACTERS } from '../data/gameData';
import { QuizQuestion, TestResult } from '../types/game';
import { Award, CheckCircle2, AlertCircle, Sparkles, Trophy, ArrowRight, RotateCcw, ArrowLeft, Printer, Star } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface AssessmentScreenProps {
  onBack: () => void;
  onGoToMap: () => void;
}

export const AssessmentScreen: React.FC<AssessmentScreenProps> = ({ onBack, onGoToMap }) => {
  const { player, saveTestResult, addReward } = useGame();
  const [selectedTestType, setSelectedTestType] = useState<'pre-test' | 'post-test'>('pre-test');
  const [isTakingTest, setIsTakingTest] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [userAnswers, setUserAnswers] = useState<{ [qIdx: number]: number }>({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [testCompletedResult, setTestCompletedResult] = useState<TestResult | null>(null);

  const activeChar = CHARACTERS.find((c) => c.id === player.characterId) || CHARACTERS[0];
  const questions: QuizQuestion[] = selectedTestType === 'pre-test' ? PRE_TEST_QUESTIONS : POST_TEST_QUESTIONS;
  const currentQ = questions[currentIdx] || questions[0];
  const isAnswered = userAnswers[currentIdx] !== undefined;
  const chosenOpt = userAnswers[currentIdx];
  const isCorrect = chosenOpt === currentQ.correctIndex;

  const handleStartTest = (type: 'pre-test' | 'post-test') => {
    sounds.playClick();
    setSelectedTestType(type);
    setIsTakingTest(true);
    setCurrentIdx(0);
    setUserAnswers({});
    setShowExplanation(false);
    setTestCompletedResult(null);
  };

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;

    setUserAnswers((prev) => ({
      ...prev,
      [currentIdx]: idx,
    }));
    setShowExplanation(true);

    if (idx === currentQ.correctIndex) {
      sounds.playCorrect();
    } else {
      sounds.playIncorrect();
    }
  };

  const handleNext = () => {
    sounds.playClick();
    setShowExplanation(false);
    if (currentIdx < questions.length - 1) {
      setCurrentIdx((c) => c + 1);
    } else {
      finishAssessment();
    }
  };

  const finishAssessment = () => {
    sounds.playVictory();
    let correctCount = 0;
    const mastered: string[] = [];
    const review: string[] = [];

    questions.forEach((q, idx) => {
      if (userAnswers[idx] === q.correctIndex) {
        correctCount++;
        mastered.push(q.topic);
      } else {
        review.push(q.topic);
      }
    });

    const score = Math.round((correctCount / questions.length) * 100);

    const result: TestResult = {
      type: selectedTestType,
      score,
      totalQuestions: questions.length,
      correctAnswers: correctCount,
      masteredTopics: Array.from(new Set(mastered)),
      reviewTopics: Array.from(new Set(review)),
      timestamp: new Date().toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
    };

    saveTestResult(result);
    setTestCompletedResult(result);
    setIsTakingTest(false);

    // Reward
    if (selectedTestType === 'pre-test') {
      addReward(5, 50, 'Selamat telah menyelesaikan Asesmen Awal!');
    } else {
      addReward(10, 100, `Asesmen Akhir Selesai dengan Nilai ${score}!`);
    }
  };

  const handlePrintCertificate = () => {
    window.print();
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8 pb-16">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-amber-200/80 pb-4">
        <button
          onClick={() => {
            sounds.playClick();
            if (isTakingTest) {
              setIsTakingTest(false);
            } else {
              onBack();
            }
          }}
          className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-emerald-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{isTakingTest ? 'Batal Ujian' : 'Kembali'}</span>
        </button>

        <div className="text-center">
          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
            Pusat Evaluasi Pembelajaran &bull; Fase B
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            ASESMEN AL-QUR'AN HADIS
          </h2>
        </div>

        <div className="w-16" />
      </div>

      {/* View 1: Taking Test */}
      {isTakingTest ? (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-emerald-300 shadow-md space-y-6 max-w-2xl mx-auto">
          {/* Progress Header */}
          <div>
            <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
              <span className="font-bold text-emerald-800 capitalize">
                {selectedTestType === 'pre-test' ? 'Pre-Test (Asesmen Awal)' : 'Post-Test (Asesmen Akhir)'}
              </span>
              <span className="font-mono">
                Soal {currentIdx + 1} dari {questions.length}
              </span>
            </div>
            <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-emerald-600 transition-all duration-300"
                style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Box */}
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
            <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider">
              Topik: {currentQ.topic}
            </span>
            <p className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed">
              {currentQ.question}
            </p>
            {currentQ.arabicSnippet && (
              <p dir="rtl" className="text-2xl font-arabic text-emerald-800 text-center py-2">
                {currentQ.arabicSnippet}
              </p>
            )}
          </div>

          {/* Multiple Choices */}
          <div className="space-y-3">
            {currentQ.options.map((opt, oIdx) => {
              const letter = String.fromCharCode(65 + oIdx);
              const isChosen = isAnswered && chosenOpt === oIdx;

              return (
                <button
                  key={oIdx}
                  disabled={isAnswered}
                  onClick={() => handleSelectOption(oIdx)}
                  className={`w-full p-4 rounded-xl text-left border-2 transition-all flex items-start gap-3 cursor-pointer ${
                    isChosen
                      ? isCorrect
                        ? 'bg-emerald-50 border-emerald-500 shadow-sm'
                        : 'bg-rose-50 border-rose-400 shadow-sm'
                      : isAnswered && oIdx === currentQ.correctIndex
                      ? 'bg-emerald-50/50 border-emerald-300'
                      : 'bg-white border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/40'
                  }`}
                >
                  <span
                    className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                      isChosen
                        ? isCorrect
                          ? 'bg-emerald-600 text-white'
                          : 'bg-rose-600 text-white'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {letter}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    {opt}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Feedback */}
          {isAnswered && (
            <div
              className={`p-4 rounded-2xl border text-xs sm:text-sm animate-in fade-in ${
                isCorrect
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                  : 'bg-amber-50 border-amber-300 text-amber-950'
              }`}
            >
              <div className="flex items-center gap-2 font-bold mb-1">
                {isCorrect ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>MasyaAllah! Jawabanmu tepat.</span>
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-4 h-4 text-amber-600" />
                    <span>Belum tepat. Yuk, pelajari kembali petunjuknya.</span>
                  </>
                )}
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                {currentQ.explanation}
              </p>
            </div>
          )}

          {/* Next Button */}
          {isAnswered && (
            <div className="flex justify-end pt-2">
              <button
                onClick={handleNext}
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center gap-2"
              >
                <span>{currentIdx < questions.length - 1 ? 'Soal Berikutnya' : 'Selesaikan Asesmen'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      ) : testCompletedResult ? (
        /* View 2: Test Result Report Dashboard */
        <div className="space-y-6 max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200 shadow-md space-y-6">
            <div className="text-center space-y-2">
              <div className="w-16 h-16 rounded-3xl bg-amber-100 text-amber-900 mx-auto flex items-center justify-center text-3xl shadow-xs">
                🏆
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block">
                Laporan Hasil Belajar Penjelajah
              </span>
              <h3 className="text-2xl font-black text-slate-900">
                {testCompletedResult.type === 'pre-test' ? 'Hasil Pre-Test (Asesmen Awal)' : 'Hasil Post-Test (Asesmen Akhir)'}
              </h3>
              <p className="text-xs text-slate-500">
                Nama Peserta: <strong className="text-slate-800">{player.name}</strong> &bull; Karakter: {activeChar.name}
              </p>
            </div>

            {/* Score Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-slate-50 border border-slate-200 rounded-2xl text-center">
              <div>
                <span className="text-[11px] text-slate-500 block">Nilai Capaian</span>
                <span className="text-2xl sm:text-3xl font-black text-emerald-700 block">
                  {testCompletedResult.score}%
                </span>
              </div>
              <div>
                <span className="text-[11px] text-slate-500 block">Jawaban Benar</span>
                <span className="text-2xl sm:text-3xl font-black text-slate-800 block">
                  {testCompletedResult.correctAnswers}/{testCompletedResult.totalQuestions}
                </span>
              </div>
              <div>
                <span className="text-[11px] text-slate-500 block">Status Kelulusan</span>
                <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2 py-1 rounded-full inline-block mt-2">
                  {testCompletedResult.score >= 60 ? 'Tuntas / Baik' : 'Perlu Bimbingan'}
                </span>
              </div>
              <div>
                <span className="text-[11px] text-slate-500 block">Bintang Tambahan</span>
                <span className="text-xl sm:text-2xl font-black text-amber-700 block">
                  {testCompletedResult.type === 'pre-test' ? '+5 ⭐' : '+10 ⭐'}
                </span>
              </div>
            </div>

            {/* Diagnostic Topics: Dikuasai vs Perlu Dipelajari Kembali */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Materi yang Dikuasai */}
              <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-2xl space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <h4 className="text-xs sm:text-sm font-bold text-emerald-950">
                    Materi yang Telah Dikuasai:
                  </h4>
                </div>
                {testCompletedResult.masteredTopics.length > 0 ? (
                  <ul className="space-y-1.5 text-xs text-emerald-900 font-medium list-disc list-inside">
                    {testCompletedResult.masteredTopics.map((topic, i) => (
                      <li key={i}>{topic}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs text-slate-500 italic">Belum ada topik yang dijawab benar.</p>
                )}
              </div>

              {/* Materi yang Perlu Dipelajari Kembali */}
              <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-2xl space-y-2">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  <h4 className="text-xs sm:text-sm font-bold text-amber-950">
                    Materi yang Perlu Dipelajari Kembali:
                  </h4>
                </div>
                {testCompletedResult.reviewTopics.length > 0 ? (
                  <ul className="space-y-1.5 text-xs text-amber-900 font-medium list-disc list-inside">
                    {testCompletedResult.reviewTopics.map((topic, i) => (
                      <li key={i}>{topic} &mdash; Buka kartu materi wilayah terkait</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs text-emerald-700 font-bold">
                    MasyaAllah! Semua materi dijawab sempurna tanpa catatan review!
                  </p>
                )}
              </div>
            </div>

            {/* Certificate Preview Box (If Post-Test or high score) */}
            {testCompletedResult.score >= 70 && (
              <div className="p-6 bg-gradient-to-r from-amber-50 to-emerald-50 border-2 border-amber-300 rounded-2xl text-center space-y-2 print:border-4">
                <span className="text-2xl">🎓</span>
                <h4 className="text-sm sm:text-base font-black text-slate-900">
                  SERTIFIKAT KELULUSAN PENJELAJAH CINTA
                </h4>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Diberikan kepada <strong>{player.name}</strong> atas dedikasi dan keteladanan dalam memahami Al-Qur'an Hadis dan mengamalkan Kurikulum Cinta Fase B MI/SD.
                </p>
                <div className="pt-2">
                  <button
                    onClick={handlePrintCertificate}
                    className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold inline-flex items-center gap-2 transition-colors print:hidden"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Cetak Sertifikat</span>
                  </button>
                </div>
              </div>
            )}

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
              <button
                onClick={() => setTestCompletedResult(null)}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
              >
                Pilihan Asesmen Lain
              </button>
              <button
                onClick={() => {
                  sounds.playVictory();
                  onGoToMap();
                }}
                className="w-full sm:w-auto px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Lanjut Menjelajahi Peta</span>
                <Sparkles className="w-4 h-4 text-amber-200" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* View 3: Assessment Selection Dashboard */
        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pre-Test Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-amber-200/80 shadow-xs flex flex-col justify-between space-y-4">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center text-2xl mb-3">
                  🧭
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider">
                    Asesmen Awal
                  </span>
                  {player.preTestDone && (
                    <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      Sudah Dikerjakan
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mt-1">Pre-Test Diagnostik</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  Tes 5 soal singkat untuk mengukur kesiapan awal dan pemahaman dasar Al-Qur'an Hadis kelas IV Fase B.
                </p>
              </div>

              <button
                onClick={() => handleStartTest('pre-test')}
                className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>{player.preTestDone ? 'Ulangi Pre-Test' : 'Mulai Pre-Test Sekarang'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Post-Test Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-emerald-200/80 shadow-xs flex flex-col justify-between space-y-4">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-900 flex items-center justify-center text-2xl mb-3">
                  🎓
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider">
                    Asesmen Akhir
                  </span>
                  {player.postTestDone && (
                    <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      Sudah Dikerjakan
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mt-1">Post-Test Komprehensif</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  Tes sumatif 10 soal mencakup 6 dunia pembelajaran Fase B. Kerjakan setelah menjelajahi seluruh wilayah untuk mendapatkan Sertifikat Penjelajah!
                </p>
              </div>

              <button
                onClick={() => handleStartTest('post-test')}
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>{player.postTestDone ? 'Ulangi Post-Test' : 'Mulai Post-Test Sekarang'}</span>
                <Trophy className="w-4 h-4 text-amber-200" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
