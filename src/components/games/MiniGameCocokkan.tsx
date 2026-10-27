import React, { useState } from 'react';
import { MatchPair } from '../../types/game';
import { useGame } from '../../context/GameContext';
import { CheckCircle2, RotateCcw, Sparkles } from 'lucide-react';
import { sounds } from '../../utils/soundEffects';

interface MiniGameCocokkanProps {
  pairs: MatchPair[];
  worldId: number;
}

export const MiniGameCocokkan: React.FC<MiniGameCocokkanProps> = ({ pairs, worldId }) => {
  const { addReward, unlockAchievement } = useGame();

  // Left items (Arabic)
  const [leftItems] = useState(() => pairs.map((p) => ({ id: p.id, text: p.left })));
  // Right items (Indonesian translations) shuffled
  const [rightItems, setRightItems] = useState(() =>
    [...pairs].map((p) => ({ id: p.id, text: p.right })).sort(() => Math.random() - 0.5)
  );

  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [selectedRight, setSelectedRight] = useState<string | null>(null);
  const [matchedIds, setMatchedIds] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<{ message: string; isCorrect: boolean } | null>(null);
  const [hasClaimedReward, setHasClaimedReward] = useState(false);

  const handleLeftClick = (id: string) => {
    if (matchedIds.includes(id)) return;
    sounds.playClick();
    setSelectedLeft(id);
    setFeedback(null);

    // If right is already selected, check match
    if (selectedRight) {
      checkMatch(id, selectedRight);
    }
  };

  const handleRightClick = (id: string) => {
    if (matchedIds.includes(id)) return;
    sounds.playClick();
    setSelectedRight(id);
    setFeedback(null);

    // If left is already selected, check match
    if (selectedLeft) {
      checkMatch(selectedLeft, id);
    }
  };

  const checkMatch = (leftId: string, rightId: string) => {
    if (leftId === rightId) {
      sounds.playCorrect();
      const newMatched = [...matchedIds, leftId];
      setMatchedIds(newMatched);
      setSelectedLeft(null);
      setSelectedRight(null);
      setFeedback({
        message: 'MasyaAllah! Jawabanmu tepat.',
        isCorrect: true,
      });

      if (newMatched.length === pairs.length && !hasClaimedReward) {
        sounds.playVictory();
        addReward(3, 25, 'Luar biasa! Kamu berhasil mencocokkan semua lafadz dengan artinya.');
        setHasClaimedReward(true);

        if (worldId === 2) unlockAchievement('ach_hadis_niat');
      }
    } else {
      sounds.playIncorrect();
      setFeedback({
        message: 'Belum tepat. Yuk, pelajari kembali petunjuknya.',
        isCorrect: false,
      });
      // Deselect after slight pause
      setTimeout(() => {
        setSelectedLeft(null);
        setSelectedRight(null);
      }, 700);
    }
  };

  const handleReset = () => {
    sounds.playClick();
    setMatchedIds([]);
    setSelectedLeft(null);
    setSelectedRight(null);
    setFeedback(null);
    setRightItems([...pairs].map((p) => ({ id: p.id, text: p.right })).sort(() => Math.random() - 0.5));
  };

  const allMatched = matchedIds.length === pairs.length;

  return (
    <div className="bg-white rounded-2xl p-5 sm:p-7 border border-amber-200/80 shadow-xs space-y-6">
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xl">🔗</span>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Mini-Game B: Cocokkan Lafadz & Makna
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
            Pilih satu kartu ayat/hadis di kolom kiri, lalu pilih terjemahan yang sesuai di kolom kanan.
          </p>
        </div>

        <button
          onClick={handleReset}
          className="self-start sm:self-center px-3 py-1.5 text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center gap-1.5"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Atur Ulang</span>
        </button>
      </div>

      {/* Progress pill */}
      <div className="flex justify-between items-center text-xs font-semibold text-slate-600">
        <span>Tercocokkan: {matchedIds.length} dari {pairs.length}</span>
        {allMatched && (
          <span className="text-emerald-700 font-bold flex items-center gap-1">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Semua Pasangan Tuntas!
          </span>
        )}
      </div>

      {/* 2 Columns: Left (Arabic) & Right (Artinya) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {/* Left Column */}
        <div className="space-y-3">
          <span className="text-xs font-bold text-emerald-900 uppercase tracking-wide block">
            Potongan Lafadz Arab:
          </span>
          <div className="space-y-2.5">
            {leftItems.map((item) => {
              const isMatched = matchedIds.includes(item.id);
              const isSelected = selectedLeft === item.id;

              return (
                <button
                  key={item.id}
                  disabled={isMatched}
                  onClick={() => handleLeftClick(item.id)}
                  dir="rtl"
                  className={`w-full p-4 rounded-xl text-right font-arabic text-lg sm:text-xl border-2 transition-all cursor-pointer ${
                    isMatched
                      ? 'bg-emerald-50 border-emerald-400 text-emerald-900 opacity-80 cursor-default'
                      : isSelected
                      ? 'bg-amber-100 border-amber-500 shadow-md ring-2 ring-amber-300'
                      : 'bg-white border-slate-200 hover:border-emerald-400 hover:bg-emerald-50/50'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2" dir="ltr">
                    {isMatched ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-slate-300 shrink-0" />
                    )}
                    <span dir="rtl" className="w-full text-right">{item.text}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-3">
          <span className="text-xs font-bold text-slate-800 uppercase tracking-wide block">
            Arti / Pesan Makna:
          </span>
          <div className="space-y-2.5">
            {rightItems.map((item) => {
              const isMatched = matchedIds.includes(item.id);
              const isSelected = selectedRight === item.id;

              return (
                <button
                  key={item.id}
                  disabled={isMatched}
                  onClick={() => handleRightClick(item.id)}
                  className={`w-full p-4 rounded-xl text-left text-xs sm:text-sm font-semibold border-2 transition-all cursor-pointer ${
                    isMatched
                      ? 'bg-emerald-50 border-emerald-400 text-emerald-900 opacity-80 cursor-default'
                      : isSelected
                      ? 'bg-amber-100 border-amber-500 shadow-md ring-2 ring-amber-300'
                      : 'bg-white border-slate-200 hover:border-emerald-400 hover:bg-emerald-50/50'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="leading-snug">{item.text}</span>
                    {isMatched && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Immediate Feedback */}
      {feedback && (
        <div
          className={`p-3.5 rounded-xl border text-xs font-bold flex items-center gap-2 ${
            feedback.isCorrect
              ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
              : 'bg-amber-50 border-amber-300 text-amber-900'
          }`}
        >
          <span>{feedback.isCorrect ? '⭐' : '💡'}</span>
          <span>{feedback.message}</span>
        </div>
      )}

      {/* All Complete Banner */}
      {allMatched && (
        <div className="p-4 bg-emerald-100/70 border border-emerald-300 rounded-2xl text-center space-y-1">
          <h4 className="font-bold text-emerald-950 text-sm sm:text-base flex items-center justify-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>MasyaAllah! Semua Pasangan Berhasil Dicocokkan!</span>
          </h4>
          <p className="text-xs text-emerald-900">
            Kamu telah memahami keterkaitan antara ayat/hadis dengan maknanya secara cermat.
          </p>
        </div>
      )}
    </div>
  );
};
