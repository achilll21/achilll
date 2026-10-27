import React, { useState, useEffect } from 'react';
import { MemoryCardItem } from '../../types/game';
import { useGame } from '../../context/GameContext';
import { RotateCcw, CheckCircle2, Sparkles, HelpCircle } from 'lucide-react';
import { sounds } from '../../utils/soundEffects';

interface MiniGameMemoryCardProps {
  cards: MemoryCardItem[];
  worldId: number;
}

export const MiniGameMemoryCard: React.FC<MiniGameMemoryCardProps> = ({ cards, worldId }) => {
  const { addReward } = useGame();

  // Shuffle cards on init
  const [deck, setDeck] = useState(() => {
    return [...cards].sort(() => Math.random() - 0.5);
  });

  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  const [moves, setMoves] = useState(0);
  const [hasClaimedReward, setHasClaimedReward] = useState(false);

  // Handle card click
  const handleCardClick = (index: number) => {
    // If already flipped 2 cards, or clicked already flipped/matched card
    if (
      flippedIndices.length === 2 ||
      flippedIndices.includes(index) ||
      matchedPairs.includes(deck[index].pairId)
    ) {
      return;
    }

    sounds.playClick();
    const newFlipped = [...flippedIndices, index];
    setFlippedIndices(newFlipped);

    if (newFlipped.length === 2) {
      setMoves((m) => m + 1);
      const firstCard = deck[newFlipped[0]];
      const secondCard = deck[newFlipped[1]];

      if (firstCard.pairId === secondCard.pairId) {
        // Matched!
        sounds.playCorrect();
        setMatchedPairs((prev) => [...prev, firstCard.pairId]);
        setFlippedIndices([]);
      } else {
        // Not matched, flip back after timeout
        sounds.playIncorrect();
        setTimeout(() => {
          setFlippedIndices([]);
        }, 900);
      }
    }
  };

  const isAllMatched = matchedPairs.length === cards.length / 2;

  useEffect(() => {
    if (isAllMatched && !hasClaimedReward) {
      sounds.playVictory();
      addReward(3, 25, 'MasyaAllah! Kamu berhasil mengingat dan mencocokkan seluruh kartu kebaikan!');
      setHasClaimedReward(true);
    }
  }, [isAllMatched, hasClaimedReward, addReward]);

  const handleRestart = () => {
    sounds.playClick();
    setDeck([...cards].sort(() => Math.random() - 0.5));
    setFlippedIndices([]);
    setMatchedPairs([]);
    setMoves(0);
    setHasClaimedReward(false);
  };

  return (
    <div className="bg-white rounded-2xl p-5 sm:p-7 border border-amber-200/80 shadow-xs space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xl">🎴</span>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Mini-Game D: Memory Card Hikmah
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
            Buka dua kartu untuk menemukan pasangan simbol nilai kebaikan yang sama.
          </p>
        </div>

        <div className="flex items-center gap-3 self-start sm:self-center">
          <div className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-semibold text-slate-700">
            Langkah: <span className="font-mono font-bold">{moves}</span>
          </div>
          <button
            onClick={handleRestart}
            className="p-1.5 text-slate-600 hover:text-emerald-800 hover:bg-slate-100 rounded-lg transition-colors"
            title="Kocok Ulang Kartu"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto perspective-1000">
        {deck.map((card, idx) => {
          const isFlipped = flippedIndices.includes(idx) || matchedPairs.includes(card.pairId);
          const isMatched = matchedPairs.includes(card.pairId);

          return (
            <div
              key={idx}
              onClick={() => handleCardClick(idx)}
              className="h-32 sm:h-36 cursor-pointer select-none"
            >
              <div
                className={`relative w-full h-full duration-500 preserve-3d transition-transform ${
                  isFlipped ? '[transform:rotateY(180deg)]' : ''
                }`}
              >
                {/* Back of Card (Shown when un-flipped) */}
                <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl bg-gradient-to-tr from-emerald-900 via-teal-800 to-emerald-800 border-2 border-emerald-600/60 shadow-md flex flex-col items-center justify-center text-white/90 hover:scale-102 transition-transform">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-1">
                    <span className="text-xl">✨</span>
                  </div>
                  <span className="text-[11px] font-black text-amber-200 tracking-wider">
                    CINTA
                  </span>
                  <span className="text-[9px] text-emerald-200">Buka Kartu</span>
                </div>

                {/* Front of Card (Shown when flipped) */}
                <div
                  className={`absolute inset-0 w-full h-full backface-hidden rounded-2xl border-2 p-2 flex flex-col items-center justify-center text-center [transform:rotateY(180deg)] ${
                    isMatched
                      ? 'bg-emerald-50 border-emerald-500 shadow-sm ring-2 ring-emerald-300'
                      : 'bg-white border-amber-400 shadow-lg ring-2 ring-amber-300'
                  }`}
                >
                  <span className="text-2xl sm:text-3xl block mb-1">
                    {card.pairId.includes('1')
                      ? '📖'
                      : card.pairId.includes('2')
                      ? '⭐'
                      : card.pairId.includes('3')
                      ? '🌱'
                      : '🤝'}
                  </span>
                  <h4 className="text-xs font-black text-slate-900 leading-tight">
                    {card.label}
                  </h4>
                  <p className="text-[10px] text-emerald-800 font-bold mt-0.5 line-clamp-1">
                    {card.detail}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Completion Banner */}
      {isAllMatched && (
        <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-2xl text-center space-y-1 animate-in zoom-in-95">
          <div className="flex items-center justify-center gap-2 text-emerald-950 font-bold text-sm sm:text-base">
            <Sparkles className="w-5 h-5 text-amber-500" />
            <span>MasyaAllah! Daya Ingatmu Sangat Hebat!</span>
          </div>
          <p className="text-xs text-slate-600">
            Kamu menyelesaikan dalam <strong className="font-mono">{moves} langkah</strong> dan berhasil merekatkan memori nilai kebaikan!
          </p>
          <div className="pt-2">
            <button
              onClick={handleRestart}
              className="px-4 py-2 text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl shadow-xs transition-colors"
            >
              Mainkan Lagi
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
