import React, { useState } from 'react';
import { QuizQuestion } from '../types/game';
import { useGame } from '../context/GameContext';
import { CheckCircle2, AlertCircle, Sparkles, Trophy, ArrowRight, RotateCcw, X, Star } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface QuizModalProps {
  isOpen: boolean;
  worldId: number;
  worldTitle: string;
  questions: QuizQuestion[];
  onClose: () => void;
  onComplete: () => void;
}

export const QuizModal: React.FC<QuizModalProps> = ({
  isOpen,
  worldId,
  worldTitle,
  questions,
  onClose,
  onComplete,
}) => {
  const { addReward, completeWorld, saveTestResult } = useGame();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [userAnswers, setUserAnswers] = useState<{ [qIdx: number]: number }>({});
  const [isFinished, setIsFinished] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  if (!isOpen) return null;

  const currentQ = questions[currentIdx] || questions[0];
  const isCurrentAnswered = userAnswers[currentIdx] !== undefined;
  const chosenIndex = userAnswers[currentIdx];
  const isCorrect = chosenIndex === currentQ.correctIndex;

  const handleSelectOption = (optIdx: number) => {
    if (isCurrentAnswered) return;

    setUserAnswers((prev) => ({
      ...prev,
      [currentIdx]: optIdx,
    }));
    setShowExplanation(true);

    if (optIdx === currentQ.correctIndex) {
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
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    sounds.playVictory();
    setIsFinished(true);

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

    // Save test result
    saveTestResult({
      type: 'quiz',
      worldId,
      score,
      totalQuestions: questions.length,
      correctAnswers: correctCount,
      masteredTopics: mastered,
      reviewTopics: review,
      timestamp: new Date().toLocaleDateString('id-ID'),
    });

    // Reward player
    if (score >= 60) {
      addReward(5, 50, `Kuis Wilayah ${worldId} Tuntas dengan skor ${score}!`);
      completeWorld(worldId);
    } else {
      addReward(2, 20, `Terus semangat! Kamu mendapatkan +2 Bintang Kebaikan.`);
    }
  };

  const handleRestart = () => {
    sounds.playClick();
    setCurrentIdx(0);
    setUserAnswers({});
    setIsFinished(false);
    setShowExplanation(false);
  };

  // Summary metrics if finished
  const correctCount = questions.filter((q, idx) => userAnswers[idx] === q.correctIndex).length;
  const finalScore = Math.round((correctCount / questions.length) * 100);
  const isPassed = finalScore >= 60;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/65 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-xl w-full max-h-[92vh] overflow-y-auto border border-amber-200 shadow-2xl p-5 sm:p-7 relative">
        <button
          onClick={() => {
            sounds.playClick();
            onClose();
          }}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
          aria-label="Tutup Kuis"
        >
          <X className="w-5 h-5" />
        </button>

        {!isFinished ? (
          <div className="space-y-5">
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl">📝</span>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                  Kuis Penjelajah &bull; Wilayah {worldId}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                {worldTitle}
              </h3>
              <div className="flex items-center justify-between text-xs text-slate-500 mt-2">
                <span>Soal {currentIdx + 1} dari {questions.length}</span>
                <span className="font-semibold text-emerald-700">Topik: {currentQ.topic}</span>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full mt-2 overflow-hidden">
                <div
                  className="h-full bg-emerald-600 transition-all duration-300"
                  style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question Text */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
              <p className="text-sm sm:text-base font-bold text-slate-900 leading-relaxed">
                {currentQ.question}
              </p>
              {currentQ.arabicSnippet && (
                <p dir="rtl" className="text-xl font-arabic text-emerald-800 text-center py-1">
                  {currentQ.arabicSnippet}
                </p>
              )}
            </div>

            {/* 4 Multiple Choice Options */}
            <div className="space-y-2.5">
              {currentQ.options.map((opt, oIdx) => {
                const letter = String.fromCharCode(65 + oIdx);
                const isChosen = isCurrentAnswered && chosenIndex === oIdx;

                return (
                  <button
                    key={oIdx}
                    disabled={isCurrentAnswered}
                    onClick={() => handleSelectOption(oIdx)}
                    className={`w-full p-3.5 rounded-xl text-left border-2 transition-all flex items-start gap-3 cursor-pointer ${
                      isChosen
                        ? isCorrect
                          ? 'bg-emerald-50 border-emerald-500 shadow-sm'
                          : 'bg-rose-50 border-rose-400 shadow-sm'
                        : isCurrentAnswered && oIdx === currentQ.correctIndex
                        ? 'bg-emerald-50/50 border-emerald-300'
                        : 'bg-white border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/30'
                    }`}
                  >
                    <span
                      className={`w-6 h-6 rounded-md flex items-center justify-center font-bold text-xs shrink-0 ${
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

            {/* Immediate Educational Feedback */}
            {isCurrentAnswered && (
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
            {isCurrentAnswered && (
              <div className="flex justify-end pt-2">
                <button
                  onClick={handleNext}
                  className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center gap-2"
                >
                  <span>{currentIdx < questions.length - 1 ? 'Soal Berikutnya' : 'Lihat Hasil Kuis'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Finished Screen */
          <div className="text-center space-y-6 py-3">
            <div className="w-16 h-16 rounded-3xl bg-amber-100 text-amber-900 mx-auto flex items-center justify-center text-3xl shadow-sm">
              {isPassed ? '🏆' : '🌱'}
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                Hasil Kuis Wilayah {worldId}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                {isPassed ? 'MasyaAllah! Kamu Lulus!' : 'Semangat Belajar Kembali!'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-sm mx-auto">
                {isPassed
                  ? 'Pemahamanmu tentang materi dan nilai Kurikulum Cinta sangat membanggakan!'
                  : 'Jangan berkecil hati, yuk ulangi kuis untuk memperkuat pemahamanmu!'}
              </p>
            </div>

            {/* Score Grid */}
            <div className="grid grid-cols-3 gap-3 p-4 bg-slate-50 border border-slate-200 rounded-2xl max-w-md mx-auto">
              <div>
                <span className="text-[11px] text-slate-500 block">Skor Akhir</span>
                <span className={`text-xl sm:text-2xl font-black ${isPassed ? 'text-emerald-700' : 'text-amber-700'}`}>
                  {finalScore}%
                </span>
              </div>
              <div>
                <span className="text-[11px] text-slate-500 block">Jawaban Benar</span>
                <span className="text-xl sm:text-2xl font-black text-slate-800">
                  {correctCount}/{questions.length}
                </span>
              </div>
              <div>
                <span className="text-[11px] text-slate-500 block">Bintang</span>
                <span className="text-xl sm:text-2xl font-black text-amber-800">
                  {isPassed ? '+5 ⭐' : '+2 ⭐'}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={handleRestart}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors flex items-center justify-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Ulangi Kuis</span>
              </button>

              <button
                onClick={() => {
                  sounds.playVictory();
                  onComplete();
                }}
                className="w-full sm:w-auto px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Lanjut ke Refleksi</span>
                <Sparkles className="w-4 h-4 text-amber-200" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
