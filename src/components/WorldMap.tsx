import React from 'react';
import { useGame } from '../context/GameContext';
import { WORLDS, CHARACTERS } from '../data/gameData';
import { Lock, CheckCircle2, Star, Sparkles, MapPin, ArrowLeft, ChevronRight, Compass } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface WorldMapProps {
  onBack: () => void;
  onSelectWorld: (worldId: number) => void;
}

export const WorldMap: React.FC<WorldMapProps> = ({ onBack, onSelectWorld }) => {
  const { player, isWorldUnlocked, isWorldCompleted } = useGame();
  const activeChar = CHARACTERS.find((c) => c.id === player.characterId) || CHARACTERS[0];

  const handleWorldClick = (worldId: number) => {
    if (isWorldUnlocked(worldId)) {
      sounds.playClick();
      onSelectWorld(worldId);
    } else {
      sounds.playIncorrect();
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 pb-16">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-amber-200/80 pb-4">
        <button
          onClick={() => {
            sounds.playClick();
            onBack();
          }}
          className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-emerald-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali</span>
        </button>

        <div className="text-center">
          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
            Halaman 3 &bull; Peta Wilayah Belajar
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            PETA ENAM WILAYAH CINTA
          </h2>
        </div>

        <div className="text-right hidden sm:block">
          <span className="text-xs text-slate-500">Progress Wilayah:</span>
          <div className="text-sm font-bold text-emerald-800">
            {player.completedWorlds.length} dari 6 Tuntas
          </div>
        </div>
      </div>

      {/* Narrative Banner & Trail */}
      <div className="space-y-4">
        <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-900 text-white shadow-lg border border-emerald-700/50 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center gap-3.5 relative z-10">
            <div className="relative shrink-0">
              <img
                src={activeChar.avatar}
                alt={activeChar.name}
                referrerPolicy="no-referrer"
                className="w-14 h-14 rounded-2xl object-cover border-2 border-amber-300 shadow-md transform hover:rotate-3 transition-transform"
              />
              <span className="absolute -bottom-1 -right-1 text-sm animate-bounce-soft">⭐</span>
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-800/90 text-amber-300 text-[11px] font-bold mb-1">
                <span>🧭 Posisi Penjelajah: Wilayah 0{player.unlockedWorld}</span>
              </div>
              <h3 className="text-base sm:text-lg font-black text-white">
                Lanjutkan Langkah Muliamu, {player.name}!
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed max-w-xl">
                Setiap wilayah menyimpan mutiara Al-Qur'an dan Hadis. Baca penjelasan lengkapnya, mainkan tantangannya, dan amalkan dalam kehidupan sehari-hari!
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-2 bg-emerald-800/80 px-4 py-2.5 rounded-2xl border border-emerald-600/50 text-xs text-emerald-100 relative z-10">
            <Compass className="w-5 h-5 text-amber-300 animate-spin-slow" />
            <div>
              <span className="block font-bold text-white">Target Selanjutnya:</span>
              <span className="text-amber-200">
                {player.completedWorlds.length === 6 ? 'Semua Dunia Tuntas! 🎉' : `Wilayah 0${player.unlockedWorld}`}
              </span>
            </div>
          </div>
        </div>

        {/* Visual 6-Step Adventure Trail Ribbon */}
        <div className="bg-white rounded-2xl p-3 sm:p-4 border border-amber-200/90 shadow-2xs overflow-x-auto">
          <div className="flex items-center justify-between min-w-[550px] gap-2 px-2">
            {WORLDS.map((w, i) => {
              const isDone = isWorldCompleted(w.id);
              const isCurrent = player.unlockedWorld === w.id && !isDone;
              const isNext = !isDone && !isCurrent;

              return (
                <React.Fragment key={w.id}>
                  <div
                    onClick={() => handleWorldClick(w.id)}
                    className={`flex flex-col items-center gap-1 text-center cursor-pointer group transition-transform hover:scale-105 ${
                      !isWorldUnlocked(w.id) ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    <div
                      className={`w-10 h-10 sm:w-11 sm:h-11 rounded-2xl flex items-center justify-center text-base sm:text-lg font-black transition-all ${
                        isDone
                          ? 'bg-emerald-600 text-white shadow-xs ring-2 ring-emerald-300'
                          : isCurrent
                          ? 'bg-amber-400 text-slate-950 shadow-md ring-4 ring-amber-300/50 animate-bounce-soft'
                          : isWorldUnlocked(w.id)
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                          : 'bg-slate-100 text-slate-400 border border-slate-200'
                      }`}
                    >
                      {isDone ? '✓' : w.icon}
                    </div>
                    <span className="text-[10px] font-bold text-slate-700 max-w-[70px] truncate block">
                      {w.shortTitle}
                    </span>
                  </div>

                  {i < WORLDS.length - 1 && (
                    <div className="flex-1 h-1.5 mx-1 rounded-full relative overflow-hidden bg-slate-200">
                      <div
                        className={`h-full transition-all duration-500 ${
                          isDone ? 'bg-emerald-500 w-full' : isCurrent ? 'bg-amber-400 w-1/2' : 'w-0'
                        }`}
                      />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>

      {/* Interactive Map Grid */}
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WORLDS.map((world, idx) => {
            const unlocked = isWorldUnlocked(world.id);
            const completed = isWorldCompleted(world.id);
            const isCurrent = player.unlockedWorld === world.id && !completed;

            return (
              <div
                key={world.id}
                onClick={() => handleWorldClick(world.id)}
                className={`group relative rounded-3xl border-2 transition-all duration-300 text-left flex flex-col justify-between overflow-hidden ${
                  completed
                    ? 'bg-white border-emerald-400 hover:border-emerald-500 hover:shadow-xl cursor-pointer hover:-translate-y-1'
                    : isCurrent
                    ? 'bg-white border-amber-400 shadow-xl ring-4 ring-amber-300/40 hover:border-amber-500 cursor-pointer hover:-translate-y-1'
                    : unlocked
                    ? 'bg-white border-slate-200 hover:border-emerald-400 hover:shadow-lg cursor-pointer hover:-translate-y-1'
                    : 'bg-slate-100 border-slate-200/80 opacity-60 cursor-not-allowed'
                }`}
              >
                {/* World Image Header */}
                <div className="relative h-40 w-full overflow-hidden bg-slate-100">
                  <img
                    src={world.image}
                    alt={world.title}
                    referrerPolicy="no-referrer"
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      unlocked ? 'group-hover:scale-110' : 'grayscale'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />

                  {/* Top Badges overlay */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="w-8 h-8 rounded-xl bg-emerald-600/90 text-white text-xs font-black flex items-center justify-center backdrop-blur-xs shadow-md">
                      0{world.id}
                    </span>

                    {completed ? (
                      <span className="flex items-center gap-1 text-xs font-bold text-white bg-emerald-600 px-3 py-1 rounded-full backdrop-blur-xs shadow-md">
                        <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                        Tuntas
                      </span>
                    ) : isCurrent ? (
                      <span className="flex items-center gap-1.5 text-xs font-bold text-slate-950 bg-amber-400 px-3 py-1 rounded-full shadow-md animate-gentle-pulse">
                        <Sparkles className="w-3.5 h-3.5 text-slate-950" />
                        Sedang Aktif
                      </span>
                    ) : unlocked ? (
                      <span className="text-xs font-bold text-white bg-emerald-800/80 px-2.5 py-1 rounded-full backdrop-blur-xs">
                        Terbuka
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-xs font-medium text-white/90 bg-slate-800/80 px-2.5 py-1 rounded-full backdrop-blur-xs">
                        <Lock className="w-3 h-3 text-slate-300" />
                        Terkunci
                      </span>
                    )}
                  </div>

                  {/* Bottom title overlay */}
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider block">
                      {world.theme}
                    </span>
                    <h3 className="text-base font-black text-white leading-tight drop-shadow-xs line-clamp-1">
                      {world.shortTitle}
                    </h3>
                  </div>

                  {/* Active Character Floating Pin */}
                  {isCurrent && (
                    <div className="absolute -bottom-3 right-3 z-20 flex items-center gap-1.5 px-3 py-1 bg-amber-400 text-slate-950 font-black text-[11px] rounded-full shadow-lg border-2 border-white animate-bounce-soft">
                      <img
                        src={activeChar.avatar}
                        alt={activeChar.name}
                        className="w-4 h-4 rounded-full object-cover"
                      />
                      <span>{activeChar.name} di sini!</span>
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {world.description}
                  </p>

                  <div className="pt-3 border-t border-slate-100 space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span className="flex items-center gap-1 text-emerald-800 font-semibold">
                        <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                        Lencana: {world.badgeName}
                      </span>
                    </div>

                    <button
                      disabled={!unlocked}
                      className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                        completed
                          ? 'bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-300'
                          : isCurrent
                          ? 'bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-md font-extrabold'
                          : unlocked
                          ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                          : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                      }`}
                    >
                      {completed ? (
                        <>
                          <span>Jelajahi Ulang</span>
                          <ChevronRight className="w-4 h-4" />
                        </>
                      ) : isCurrent ? (
                        <>
                          <span>Masuk Wilayah Aktif</span>
                          <Sparkles className="w-4 h-4" />
                        </>
                      ) : unlocked ? (
                        <>
                          <span>Mulai Wilayah</span>
                          <ChevronRight className="w-4 h-4" />
                        </>
                      ) : (
                        <>
                          <Lock className="w-3.5 h-3.5" />
                          <span>Selesaikan Wilayah 0{world.id - 1}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
