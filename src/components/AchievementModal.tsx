import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { ACHIEVEMENTS } from '../data/achievementsData';
import { Achievement } from '../types/game';
import { X, Trophy, Star, Sparkles, CheckCircle2, Lock, Award, Heart } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface AchievementModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AchievementModal: React.FC<AchievementModalProps> = ({ isOpen, onClose }) => {
  const { player, hasAchievement } = useGame();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  if (!isOpen) return null;

  const unlockedCount = ACHIEVEMENTS.filter((a) => hasAchievement(a.id)).length;
  const totalCount = ACHIEVEMENTS.length;
  const progressPct = Math.round((unlockedCount / totalCount) * 100);

  const categories = [
    { id: 'all', label: 'Semua', icon: '🏆' },
    { id: 'quran', label: 'Bab 1: Al-Qur\'an', icon: '📖' },
    { id: 'hadis', label: 'Bab 2: Hadis', icon: '💎' },
    { id: 'akhlak', label: 'Bab 3: Akhlak', icon: '🛡️' },
    { id: 'sahabat', label: 'Bab 4: Sahabat', icon: '🤝' },
    { id: 'lingkungan', label: 'Bab 5: Lingkungan', icon: '🌱' },
    { id: 'cinta', label: 'Bab 6: Cinta', icon: '💖' },
    { id: 'master', label: 'Master', icon: '👑' },
  ];

  const filteredAchievements = ACHIEVEMENTS.filter((a) => {
    if (activeCategory === 'all') return true;
    return a.category === activeCategory;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto border-2 border-amber-300 shadow-2xl p-5 sm:p-7 relative flex flex-col">
        {/* Close Button */}
        <button
          onClick={() => {
            sounds.playClick();
            onClose();
          }}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
          aria-label="Tutup Pencapaian"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-amber-200">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-300 text-amber-950 flex items-center justify-center text-2xl shadow-md">
              <Trophy className="w-6 h-6 text-amber-950 fill-amber-950" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
                Museum Prestasi & Penghargaan
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                Pencapaian Penjelajah Cinta
              </h2>
            </div>
          </div>

          {/* Overall Progress Pill */}
          <div className="w-full sm:w-auto bg-amber-50 border border-amber-200 rounded-2xl p-3 sm:px-4 flex items-center justify-between sm:justify-start gap-4">
            <div>
              <div className="text-[11px] font-bold text-amber-900 uppercase">
                Total Terbuka:
              </div>
              <div className="text-base font-black text-emerald-800">
                {unlockedCount} / {totalCount} <span className="text-xs text-slate-500 font-normal">({progressPct}%)</span>
              </div>
            </div>
            <div className="w-24 h-2.5 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-amber-400 rounded-full transition-all duration-500"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-3 border-b border-slate-100 pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                sounds.playClick();
                setActiveCategory(cat.id);
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 py-4 overflow-y-auto">
          {filteredAchievements.map((ach) => {
            const isUnlocked = hasAchievement(ach.id);

            return (
              <div
                key={ach.id}
                className={`p-4 rounded-2xl border-2 transition-all flex items-start gap-3.5 relative overflow-hidden ${
                  isUnlocked
                    ? 'bg-gradient-to-br from-white via-amber-50/40 to-emerald-50/30 border-amber-300 shadow-sm'
                    : 'bg-slate-50/80 border-slate-200/90 opacity-75'
                }`}
              >
                {/* Visual Icon Badge */}
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shrink-0 transition-transform ${
                    isUnlocked
                      ? 'bg-gradient-to-tr from-amber-400 to-amber-200 text-amber-950 shadow-xs scale-105'
                      : 'bg-slate-200 text-slate-400 grayscale'
                  }`}
                >
                  {isUnlocked ? ach.icon : <Lock className="w-5 h-5 text-slate-400" />}
                </div>

                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <h4
                      className={`text-sm font-black leading-tight ${
                        isUnlocked ? 'text-slate-900' : 'text-slate-600'
                      }`}
                    >
                      {ach.title}
                    </h4>

                    {isUnlocked ? (
                      <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        Terbuka
                      </span>
                    ) : (
                      <span className="text-[10px] font-medium text-slate-400 bg-slate-200/70 px-2 py-0.5 rounded-full shrink-0">
                        Terkunci
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-600 leading-snug">
                    {ach.description}
                  </p>

                  <div className="flex items-center justify-between pt-1.5 text-[11px]">
                    <span className="text-slate-500 italic">
                      🎯 {ach.conditionDescription}
                    </span>
                    <span className="font-bold text-amber-900 flex items-center gap-1">
                      <span>+{ach.rewardStars}⭐</span>
                      <span className="text-emerald-700">+{ach.rewardXp}XP</span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <p>
            💡 Setiap mini-game, susun ayat, kuis, dan refleksi yang kamu selesaikan akan membuka pencapaian baru!
          </p>
          <button
            onClick={() => {
              sounds.playClick();
              onClose();
            }}
            className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl text-xs transition-colors cursor-pointer"
          >
            Lanjut Petualangan
          </button>
        </div>
      </div>
    </div>
  );
};
