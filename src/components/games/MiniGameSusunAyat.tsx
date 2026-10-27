import React, { useState } from 'react';
import { SusunAyatGame, AyatTile } from '../../types/game';
import { useGame } from '../../context/GameContext';
import { RotateCcw, Check, Sparkles, HelpCircle, ArrowRight } from 'lucide-react';
import { sounds } from '../../utils/soundEffects';

interface MiniGameSusunAyatProps {
  gameData: SusunAyatGame;
  worldId: number;
}

export const MiniGameSusunAyat: React.FC<MiniGameSusunAyatProps> = ({ gameData, worldId }) => {
  const { addReward, unlockAchievement } = useGame();
  // Available pool of tiles (shuffled)
  const [availableTiles, setAvailableTiles] = useState<AyatTile[]>(() => {
    return [...gameData.tiles].sort(() => Math.random() - 0.5);
  });
  // Placed tiles in order
  const [placedTiles, setPlacedTiles] = useState<AyatTile[]>([]);
  const [status, setStatus] = useState<'idle' | 'success' | 'incorrect'>('idle');
  const [showHint, setShowHint] = useState(false);
  const [hasClaimedReward, setHasClaimedReward] = useState(false);

  const handleTileClick = (tile: AyatTile) => {
    sounds.playClick();
    if (status === 'success') return;

    // Move from available to placed
    setAvailableTiles((prev) => prev.filter((t) => t.id !== tile.id));
    setPlacedTiles((prev) => [...prev, tile]);
    setStatus('idle');
  };

  const handlePlacedTileClick = (tile: AyatTile) => {
    sounds.playClick();
    if (status === 'success') return;

    // Move back to available
    setPlacedTiles((prev) => prev.filter((t) => t.id !== tile.id));
    setAvailableTiles((prev) => [...prev, tile]);
    setStatus('idle');
  };

  const handleReset = () => {
    sounds.playClick();
    setAvailableTiles([...gameData.tiles].sort(() => Math.random() - 0.5));
    setPlacedTiles([]);
    setStatus('idle');
  };

  const handleCheckOrder = () => {
    if (placedTiles.length !== gameData.tiles.length) {
      sounds.playIncorrect();
      setStatus('incorrect');
      return;
    }

    const isCorrect = placedTiles.every((tile, index) => tile.order === index);

    if (isCorrect) {
      sounds.playVictory();
      setStatus('success');
      if (!hasClaimedReward) {
        addReward(3, 25, 'MasyaAllah! Kamu berhasil menyusun potongan lafadz dengan urutan yang tepat.');
        setHasClaimedReward(true);

        if (worldId === 1) unlockAchievement('ach_quran_tin');
        if (worldId === 4) unlockAchievement('ach_sahabat_kasih');
        if (worldId === 6) unlockAchievement('ach_cinta_gotong_royong');
      }
    } else {
      sounds.playIncorrect();
      setStatus('incorrect');
    }
  };

  return (
    <div className="bg-white rounded-2xl p-5 sm:p-7 border border-amber-200/80 shadow-xs space-y-6">
      {/* Title & Prompt */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xl">🧩</span>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Mini-Game A: Susun Potongan Ayat
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
            Klik potongan lafadz secara berurutan dari kanan ke kiri (arah baca Arab) untuk menyusun{' '}
            <strong className="text-emerald-800">{gameData.surahName}</strong>.
          </p>
        </div>

        <button
          onClick={() => {
            sounds.playClick();
            setShowHint(!showHint);
          }}
          className="self-start sm:self-center px-3 py-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-lg border border-emerald-200 transition-colors flex items-center gap-1.5"
        >
          <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
          <span>{showHint ? 'Tutup Bantuan' : 'Petunjuk Urutan'}</span>
        </button>
      </div>

      {showHint && (
        <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 animate-in fade-in">
          <strong className="block font-bold mb-0.5">Petunjuk Penyusunan:</strong>
          {gameData.hint}
        </div>
      )}

      {/* Target Placement Area (Slot urutan) */}
      <div className="space-y-2">
        <span className="text-xs font-bold text-slate-700 block">
          Papan Susunan Ayat (Klik untuk membatalkan pilihan):
        </span>
        <div
          dir="rtl"
          className="min-h-[90px] p-4 bg-emerald-50/50 border-2 border-dashed border-emerald-300 rounded-2xl flex flex-wrap items-center justify-center gap-3 transition-colors"
        >
          {placedTiles.length === 0 ? (
            <p dir="ltr" className="text-xs text-slate-400 font-medium italic">
              Klik kartu kata di bawah untuk meletakkannya di sini...
            </p>
          ) : (
            placedTiles.map((tile) => (
              <button
                key={tile.id}
                onClick={() => handlePlacedTileClick(tile)}
                className="px-4 py-2.5 bg-emerald-700 text-white rounded-xl shadow-xs text-lg sm:text-2xl font-arabic hover:bg-rose-600 transition-colors cursor-pointer group flex items-center gap-1"
                title="Klik untuk kembalikan"
              >
                <span>{tile.arabic}</span>
              </button>
            ))
          )}
        </div>
      </div>

      {/* Available Tiles Pool */}
      <div className="space-y-2">
        <span className="text-xs font-bold text-slate-700 block">
          Pilihan Kata Tersedia:
        </span>
        <div
          dir="rtl"
          className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex flex-wrap items-center justify-center gap-3"
        >
          {availableTiles.length === 0 && placedTiles.length > 0 ? (
            <p dir="ltr" className="text-xs text-slate-400 font-medium">
              Semua kata telah diletakkan di papan! Tekan "Periksa Susunan".
            </p>
          ) : (
            availableTiles.map((tile) => (
              <button
                key={tile.id}
                onClick={() => handleTileClick(tile)}
                className="px-4 py-2.5 bg-white border-2 border-emerald-300 text-slate-900 rounded-xl shadow-xs text-lg sm:text-2xl font-arabic hover:border-emerald-600 hover:bg-emerald-50 active:scale-95 transition-all cursor-pointer"
              >
                {tile.arabic}
              </button>
            ))
          )}
        </div>
      </div>

      {/* Action Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
        <button
          onClick={handleReset}
          className="px-4 py-2 text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors flex items-center gap-1.5"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Atur Ulang</span>
        </button>

        <button
          onClick={handleCheckOrder}
          disabled={placedTiles.length === 0 || status === 'success'}
          className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-md transition-all flex items-center gap-2 ${
            status === 'success'
              ? 'bg-emerald-600 text-white cursor-default'
              : placedTiles.length === 0
              ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
              : 'bg-emerald-600 hover:bg-emerald-700 text-white'
          }`}
        >
          <Check className="w-4 h-4 stroke-[3]" />
          <span>{status === 'success' ? 'Tersusun Sempurna!' : 'Periksa Susunan'}</span>
        </button>
      </div>

      {/* Feedback Banner */}
      {status === 'success' && (
        <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-2xl animate-in zoom-in-95">
          <div className="flex items-center gap-2 text-emerald-950 font-bold text-sm mb-1">
            <span className="text-lg">⭐</span>
            <span>MasyaAllah! Jawabanmu tepat.</span>
          </div>
          <p dir="rtl" className="text-xl sm:text-2xl font-arabic text-emerald-900 my-2">
            {gameData.fullArabic}
          </p>
          <p className="text-xs text-slate-700">
            <strong>Artinya:</strong> "{gameData.translation}"
          </p>
          {hasClaimedReward && (
            <p className="text-[11px] font-bold text-amber-800 mt-1 flex items-center gap-1">
              <span>+3 Bintang Kebaikan didapat! ⭐</span>
            </p>
          )}
        </div>
      )}

      {status === 'incorrect' && (
        <div className="p-4 bg-amber-50 border border-amber-300 rounded-2xl animate-in shake">
          <div className="flex items-center gap-2 text-amber-950 font-bold text-sm mb-1">
            <span>💡</span>
            <span>Belum tepat. Yuk, pelajari kembali petunjuknya.</span>
          </div>
          <p className="text-xs text-amber-900 leading-relaxed">
            Periksa urutan kata dari kanan ke kiri. Gunakan tombol "Petunjuk Urutan" jika kamu membutuhkan bantuan.
          </p>
        </div>
      )}
    </div>
  );
};
