import React, { useState } from 'react';
import { SikapScenario } from '../../types/game';
import { useGame } from '../../context/GameContext';
import { Heart, Sparkles, CheckCircle2, AlertCircle, ArrowRight, RotateCcw } from 'lucide-react';
import { sounds } from '../../utils/soundEffects';

interface MiniGamePilihSikapProps {
  scenarios: SikapScenario[];
  worldId: number;
}

export const MiniGamePilihSikap: React.FC<MiniGamePilihSikapProps> = ({ scenarios, worldId }) => {
  const { addReward, unlockAchievement } = useGame();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [answeredScenarios, setAnsweredScenarios] = useState<{ [index: number]: number }>({});

  const currentScenario = scenarios[currentIndex] || scenarios[0];
  const isAnswered = answeredScenarios[currentIndex] !== undefined;

  const handleSelectOption = (optionIndex: number) => {
    if (isAnswered) return;

    setSelectedOptionIndex(optionIndex);
    const chosen = currentScenario.options[optionIndex];

    setAnsweredScenarios((prev) => ({
      ...prev,
      [currentIndex]: optionIndex,
    }));

    if (chosen.isCorrect) {
      sounds.playCorrect();
      addReward(
        chosen.stars,
        20,
        `MasyaAllah! Tindakanmu mencerminkan nilai "${chosen.cintaValue}". +${chosen.stars} Bintang Kebaikan!`
      );

      if (worldId === 2) {
        unlockAchievement('ach_hadis_muraqabah');
        unlockAchievement('ach_hadis_senyum');
      }
      if (worldId === 3) unlockAchievement('ach_akhlak_jujur');
      if (worldId === 4) unlockAchievement('ach_sahabat_toleran');
      if (worldId === 5) unlockAchievement('ach_lingkungan_hemat_air');
    } else {
      sounds.playIncorrect();
    }
  };

  const handleNext = () => {
    sounds.playClick();
    if (currentIndex < scenarios.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOptionIndex(answeredScenarios[currentIndex + 1] ?? null);
    }
  };

  const handlePrev = () => {
    sounds.playClick();
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setSelectedOptionIndex(answeredScenarios[currentIndex - 1] ?? null);
    }
  };

  const handleReset = () => {
    sounds.playClick();
    setCurrentIndex(0);
    setSelectedOptionIndex(null);
    setAnsweredScenarios({});
  };

  return (
    <div className="bg-white rounded-2xl p-5 sm:p-7 border border-amber-200/80 shadow-xs space-y-6">
      {/* Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xl">🌟</span>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Mini-Game C: Pilih Sikap Cinta & Kebaikan
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
            Baca situasi kehidupan sehari-hari di bawah ini dan tentukan tindakan yang paling sesuai dengan ajaran Al-Qur'an & Hadis.
          </p>
        </div>

        <span className="self-start sm:self-center px-3 py-1 bg-amber-50 border border-amber-200 rounded-full text-xs font-bold text-amber-900">
          Kasus {currentIndex + 1} dari {scenarios.length}
        </span>
      </div>

      {/* Scenario Card */}
      <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-200/90 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-amber-100/80 text-[11px] font-bold text-amber-900">
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          <span>Konteks: {currentScenario.context}</span>
        </div>

        <p className="text-sm sm:text-base font-semibold text-slate-900 leading-relaxed">
          "{currentScenario.scenario}"
        </p>
      </div>

      {/* Options */}
      <div className="space-y-3">
        <span className="text-xs font-bold text-slate-700 block">
          Pilihan Tindakanmu:
        </span>
        <div className="space-y-2.5">
          {currentScenario.options.map((option, idx) => {
            const letter = String.fromCharCode(65 + idx); // A, B, C
            const isChosen = isAnswered && answeredScenarios[currentIndex] === idx;

            return (
              <button
                key={idx}
                disabled={isAnswered}
                onClick={() => handleSelectOption(idx)}
                className={`w-full p-4 rounded-xl text-left border-2 transition-all flex items-start gap-3 cursor-pointer ${
                  isChosen
                    ? option.isCorrect
                      ? 'bg-emerald-50 border-emerald-500 shadow-md ring-2 ring-emerald-300'
                      : 'bg-rose-50 border-rose-400'
                    : isAnswered && option.isCorrect
                    ? 'bg-emerald-50/50 border-emerald-300'
                    : 'bg-white border-slate-200 hover:border-emerald-300 hover:bg-slate-50'
                }`}
              >
                <span
                  className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                    isChosen
                      ? option.isCorrect
                        ? 'bg-emerald-600 text-white'
                        : 'bg-rose-600 text-white'
                      : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {letter}
                </span>

                <div className="flex-1">
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug block">
                    {option.text}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Feedback Card after choosing */}
      {isAnswered && (
        <div
          className={`p-4 rounded-2xl border text-xs sm:text-sm animate-in fade-in ${
            currentScenario.options[answeredScenarios[currentIndex]].isCorrect
              ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
              : 'bg-amber-50 border-amber-300 text-amber-950'
          }`}
        >
          <div className="flex items-center gap-2 font-bold mb-1.5">
            {currentScenario.options[answeredScenarios[currentIndex]].isCorrect ? (
              <>
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>MasyaAllah! Pilihan Sikapmu Tepat.</span>
              </>
            ) : (
              <>
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
                <span>Belum Tepat. Renungkan Kembali Nilai Ini:</span>
              </>
            )}
          </div>

          <p className="text-xs leading-relaxed text-slate-700">
            {currentScenario.options[answeredScenarios[currentIndex]].feedback}
          </p>

          <div className="mt-2.5 pt-2 border-t border-slate-200/60 flex items-center justify-between text-xs">
            <span className="font-semibold text-emerald-800">
              Nilai Kurikulum Cinta: {currentScenario.options[answeredScenarios[currentIndex]].cintaValue}
            </span>
            {currentScenario.options[answeredScenarios[currentIndex]].isCorrect && (
              <span className="font-bold text-amber-800 flex items-center gap-1">
                ⭐ +{currentScenario.options[answeredScenarios[currentIndex]].stars} Bintang Kebaikan
              </span>
            )}
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
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
          Kasus Sebelumnya
        </button>

        {currentIndex < scenarios.length - 1 ? (
          <button
            onClick={handleNext}
            className="px-5 py-2 text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-700 rounded-xl transition-colors flex items-center gap-1.5"
          >
            <span>Kasus Berikutnya</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        ) : (
          <button
            onClick={handleReset}
            className="px-4 py-2 text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Mulai Ulang Kasus</span>
          </button>
        )}
      </div>
    </div>
  );
};
