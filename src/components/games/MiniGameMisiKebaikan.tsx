import React, { useState } from 'react';
import { MisiKebaikanScenario } from '../../types/game';
import { useGame } from '../../context/GameContext';
import { Compass, CheckCircle2, AlertCircle, Sparkles, MapPin, ArrowRight, RotateCcw } from 'lucide-react';
import { sounds } from '../../utils/soundEffects';

interface MiniGameMisiKebaikanProps {
  missions: MisiKebaikanScenario[];
  worldId: number;
}

export const MiniGameMisiKebaikan: React.FC<MiniGameMisiKebaikanProps> = ({ missions, worldId }) => {
  const { addReward, unlockAchievement } = useGame();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [chosenIdx, setChosenIdx] = useState<number | null>(null);
  const [completedMissions, setCompletedMissions] = useState<{ [index: number]: number }>({});

  const mission = missions[currentIdx] || missions[0];
  const isDone = completedMissions[currentIdx] !== undefined;

  const handleChoose = (choiceIdx: number) => {
    if (isDone) return;
    setChosenIdx(choiceIdx);
    const choice = mission.choices[choiceIdx];

    setCompletedMissions((prev) => ({
      ...prev,
      [currentIdx]: choiceIdx,
    }));

    if (choice.isBest) {
      sounds.playCorrect();
      addReward(choice.rewardStars, 25, `Misi Sukses! ${choice.impact}`);

      if (worldId === 3) unlockAchievement('ach_akhlak_amanah');
      if (worldId === 4) unlockAchievement('ach_sahabat_damai');
      if (worldId === 5) unlockAchievement('ach_lingkungan_bersih');
      if (worldId === 6) unlockAchievement('ach_cinta_bangsa');
    } else {
      sounds.playIncorrect();
    }
  };

  const handleNext = () => {
    sounds.playClick();
    if (currentIdx < missions.length - 1) {
      setCurrentIdx((c) => c + 1);
      setChosenIdx(completedMissions[currentIdx + 1] ?? null);
    }
  };

  const handleReset = () => {
    sounds.playClick();
    setCurrentIdx(0);
    setChosenIdx(null);
    setCompletedMissions({});
  };

  return (
    <div className="bg-white rounded-2xl p-5 sm:p-7 border border-amber-200/80 shadow-xs space-y-6">
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xl">🎒</span>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Mini-Game F: Misi Kebaikan Sehari-hari
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
            Jadilah teladan nyata! Tuntaskan tantangan situasi di bawah ini dengan prinsip Kurikulum Cinta.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-center">
          <span className="px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-xs font-bold text-emerald-900 flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-emerald-600" />
            <span>Misi {currentIdx + 1} dari {missions.length}</span>
          </span>
        </div>
      </div>

      {/* Mission Briefing Card */}
      <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50 via-teal-50/50 to-white border border-emerald-200 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-emerald-900 uppercase tracking-wide">
            {mission.title}
          </span>
          <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1">
            <MapPin className="w-3 h-3 text-emerald-600" />
            {mission.location}
          </span>
        </div>

        <p className="text-sm font-semibold text-slate-800 leading-relaxed">
          "{mission.situation}"
        </p>

        <div className="p-2.5 bg-white/80 rounded-xl border border-emerald-100 text-xs text-emerald-950 font-medium">
          <strong>Tugasmu:</strong> {mission.task}
        </div>
      </div>

      {/* Choices */}
      <div className="space-y-3">
        <span className="text-xs font-bold text-slate-700 block">
          Pilihan Respon Terbaikmu:
        </span>
        <div className="space-y-2.5">
          {mission.choices.map((choice, i) => {
            const isSelected = isDone && completedMissions[currentIdx] === i;

            return (
              <button
                key={i}
                disabled={isDone}
                onClick={() => handleChoose(i)}
                className={`w-full p-4 rounded-xl text-left border-2 transition-all flex items-start gap-3 cursor-pointer ${
                  isSelected
                    ? choice.isBest
                      ? 'bg-emerald-50 border-emerald-500 shadow-md ring-2 ring-emerald-300'
                      : 'bg-rose-50 border-rose-400'
                    : isDone && choice.isBest
                    ? 'bg-emerald-50/50 border-emerald-300'
                    : 'bg-white border-slate-200 hover:border-emerald-300 hover:bg-slate-50'
                }`}
              >
                <span
                  className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                    isSelected
                      ? choice.isBest
                        ? 'bg-emerald-600 text-white'
                        : 'bg-rose-600 text-white'
                      : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {i + 1}
                </span>

                <div className="flex-1">
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug block">
                    {choice.text}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Feedback & Impact */}
      {isDone && (
        <div
          className={`p-4 rounded-2xl border text-xs sm:text-sm animate-in fade-in space-y-2 ${
            mission.choices[completedMissions[currentIdx]].isBest
              ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
              : 'bg-amber-50 border-amber-300 text-amber-950'
          }`}
        >
          <div className="flex items-center gap-2 font-bold">
            {mission.choices[completedMissions[currentIdx]].isBest ? (
              <>
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>MasyaAllah! Pilihan Kebaikanmu Sangat Tepat!</span>
              </>
            ) : (
              <>
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
                <span>Belum Tepat. Yuk, Renungkan Kembali:</span>
              </>
            )}
          </div>

          <p className="text-xs text-slate-700 leading-relaxed">
            {mission.choices[completedMissions[currentIdx]].explanation}
          </p>

          <div className="p-2.5 bg-white/80 rounded-xl border border-slate-200/80 text-xs">
            <strong className="text-emerald-900 block mb-0.5">Dampak Nyata Tindakanmu:</strong>
            <span className="text-slate-700">{mission.choices[completedMissions[currentIdx]].impact}</span>
          </div>

          {mission.choices[completedMissions[currentIdx]].isBest && (
            <div className="text-xs font-bold text-amber-800 pt-1 flex items-center gap-1">
              <span>⭐ +{mission.choices[completedMissions[currentIdx]].rewardStars} Bintang Kebaikan Berhasil Didapat!</span>
            </div>
          )}
        </div>
      )}

      {/* Navigation */}
      <div className="flex items-center justify-between pt-2">
        {currentIdx < missions.length - 1 ? (
          <button
            onClick={handleNext}
            className="px-5 py-2 text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-700 rounded-xl transition-colors flex items-center gap-1.5 ml-auto"
          >
            <span>Misi Berikutnya</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        ) : (
          <button
            onClick={handleReset}
            className="px-4 py-2 text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors flex items-center gap-1.5 ml-auto"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Mulai Ulang Misi</span>
          </button>
        )}
      </div>
    </div>
  );
};
