import React, { useState } from 'react';
import { TrueFalseQuestion } from '../../types/game';
import { useGame } from '../../context/GameContext';
import { Check, X, Sparkles, CheckCircle2, AlertCircle, ArrowRight, RotateCcw } from 'lucide-react';
import { sounds } from '../../utils/soundEffects';

interface MiniGameBenarSalahProps {
  questions: TrueFalseQuestion[];
  worldId: number;
}

export const MiniGameBenarSalah: React.FC<MiniGameBenarSalahProps> = ({ questions, worldId }) => {
  const { addReward } = useGame();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<{ [index: number]: boolean }>({});
  const [hasClaimedReward, setHasClaimedReward] = useState(false);

  const currentQ = questions[currentIndex] || questions[0];
  const isAnswered = userAnswers[currentIndex] !== undefined;
  const userAnswer = userAnswers[currentIndex];
  const isCorrect = isAnswered && userAnswer === currentQ.isTrue;

  const handleAnswer = (choice: boolean) => {
    if (isAnswered) return;

    setUserAnswers((prev) => ({
      ...prev,
      [currentIndex]: choice,
    }));

    if (choice === currentQ.isTrue) {
      sounds.playCorrect();
      addReward(2, 15, 'Tepat sekali! Kamu memahami pernyataan ini dengan baik.');
    } else {
      sounds.playIncorrect();
    }
  };

  const handleNext = () => {
    sounds.playClick();
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
    }
  };

  const handlePrev = () => {
    sounds.playClick();
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
    }
  };

  const handleReset = () => {
    sounds.playClick();
    setCurrentIndex(0);
    setUserAnswers({});
    setHasClaimedReward(false);
  };

  return (
    <div className="bg-white rounded-2xl p-5 sm:p-7 border border-amber-200/80 shadow-xs space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xl">⚖️</span>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Mini-Game E: Benar atau Salah?
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
            Tentukan apakah pernyataan mengenai ayat, hadis, atau adab di bawah ini Benar atau Salah.
          </p>
        </div>

        <span className="self-start sm:self-center px-3 py-1 bg-amber-50 border border-amber-200 rounded-full text-xs font-bold text-amber-900">
          Soal {currentIndex + 1} dari {questions.length}
        </span>
      </div>

      {/* Question Card */}
      <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-3">
        <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block">
          Pernyataan:
        </span>
        <p className="text-base sm:text-lg font-semibold text-slate-900 max-w-xl mx-auto leading-relaxed">
          "{currentQ.statement}"
        </p>
      </div>

      {/* True / False Buttons */}
      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
        <button
          disabled={isAnswered}
          onClick={() => handleAnswer(true)}
          className={`py-4 px-6 rounded-2xl font-bold text-base sm:text-lg flex items-center justify-center gap-2 transition-all cursor-pointer ${
            isAnswered
              ? userAnswer === true
                ? currentQ.isTrue
                  ? 'bg-emerald-600 text-white ring-4 ring-emerald-300'
                  : 'bg-rose-600 text-white ring-4 ring-rose-300'
                : currentQ.isTrue
                ? 'bg-emerald-100 text-emerald-900 border-2 border-emerald-500'
                : 'bg-slate-100 text-slate-400'
              : 'bg-emerald-50 hover:bg-emerald-600 text-emerald-800 hover:text-white border-2 border-emerald-300 hover:border-emerald-600 shadow-sm active:scale-95'
          }`}
        >
          <Check className="w-5 h-5 stroke-[3]" />
          <span>BENAR</span>
        </button>

        <button
          disabled={isAnswered}
          onClick={() => handleAnswer(false)}
          className={`py-4 px-6 rounded-2xl font-bold text-base sm:text-lg flex items-center justify-center gap-2 transition-all cursor-pointer ${
            isAnswered
              ? userAnswer === false
                ? !currentQ.isTrue
                  ? 'bg-emerald-600 text-white ring-4 ring-emerald-300'
                  : 'bg-rose-600 text-white ring-4 ring-rose-300'
                : !currentQ.isTrue
                ? 'bg-emerald-100 text-emerald-900 border-2 border-emerald-500'
                : 'bg-slate-100 text-slate-400'
              : 'bg-rose-50 hover:bg-rose-600 text-rose-800 hover:text-white border-2 border-rose-300 hover:border-rose-600 shadow-sm active:scale-95'
          }`}
        >
          <X className="w-5 h-5 stroke-[3]" />
          <span>SALAH</span>
        </button>
      </div>

      {/* Feedback Card */}
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
          <p className="text-xs text-slate-700 leading-relaxed">{currentQ.explanation}</p>
        </div>
      )}

      {/* Navigation */}
      <div className="flex items-center justify-between pt-2">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`px-4 py-2 text-xs font-semibold rounded-xl transition-colors ${
            currentIndex === 0
              ? 'text-slate-300 bg-slate-100 cursor-not-allowed'
              : 'text-slate-700 bg-slate-100 hover:bg-slate-200'
          }`}
        >
          Sebelumnya
        </button>

        {currentIndex < questions.length - 1 ? (
          <button
            onClick={handleNext}
            className="px-5 py-2 text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-700 rounded-xl transition-colors flex items-center gap-1.5"
          >
            <span>Soal Selanjutnya</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        ) : (
          <button
            onClick={handleReset}
            className="px-4 py-2 text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Mulai Ulang Soal</span>
          </button>
        )}
      </div>
    </div>
  );
};
