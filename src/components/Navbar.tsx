import React from 'react';
import { useGame } from '../context/GameContext';
import { CHARACTERS } from '../data/gameData';
import { Volume2, VolumeX, Sparkles, User, HelpCircle, MapPin, Compass, Music, Trophy, GraduationCap } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface NavbarProps {
  currentTab: 'home' | 'character' | 'map' | 'world' | 'assessment' | 'ruang_guru';
  onNavigate: (tab: 'home' | 'character' | 'map' | 'world' | 'assessment' | 'ruang_guru') => void;
  onOpenProfile: () => void;
  onOpenInstructions: () => void;
  onOpenAchievements: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onNavigate,
  onOpenProfile,
  onOpenInstructions,
  onOpenAchievements,
}) => {
  const { player, toggleSound, toggleMusic } = useGame();
  const activeChar = CHARACTERS.find((c) => c.id === player.characterId) || CHARACTERS[0];

  const handleNav = (tab: 'home' | 'character' | 'map' | 'world' | 'assessment' | 'ruang_guru') => {
    sounds.playClick();
    onNavigate(tab);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-amber-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 h-16 flex items-center justify-between gap-2 sm:gap-4">
        {/* Zone 1: Brand title */}
        <button
          onClick={() => handleNav('home')}
          className="flex items-center gap-2.5 text-left focus:outline-hidden group shrink-0 cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform">
            <Compass className="w-5 h-5 text-amber-200" />
          </div>
          <div>
            <span className="block text-base sm:text-lg font-bold text-emerald-950 tracking-tight leading-tight">
              Petualangan Cinta
            </span>
            <span className="hidden sm:block text-[11px] font-medium text-emerald-700">
              Al-Qur'an & Hadis Fase B
            </span>
          </div>
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="flex items-center gap-1 sm:gap-2">
          <button
            onClick={() => handleNav('home')}
            className={`px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              currentTab === 'home'
                ? 'bg-emerald-100 text-emerald-900 font-semibold'
                : 'text-slate-600 hover:text-emerald-800 hover:bg-emerald-50'
            }`}
          >
            Beranda
          </button>
          <button
            onClick={() => handleNav('map')}
            className={`px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
              currentTab === 'map' || currentTab === 'world'
                ? 'bg-emerald-100 text-emerald-900 font-semibold'
                : 'text-slate-600 hover:text-emerald-800 hover:bg-emerald-50'
            }`}
          >
            <MapPin className="w-3.5 h-3.5 text-emerald-600 hidden sm:inline" />
            Peta Dunia
          </button>
          <button
            onClick={() => handleNav('character')}
            className={`hidden md:block px-3 py-1.5 text-sm font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              currentTab === 'character'
                ? 'bg-emerald-100 text-emerald-900 font-semibold'
                : 'text-slate-600 hover:text-emerald-800 hover:bg-emerald-50'
            }`}
          >
            Karakter
          </button>
          <button
            onClick={() => handleNav('assessment')}
            className={`px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              currentTab === 'assessment'
                ? 'bg-emerald-100 text-emerald-900 font-semibold'
                : 'text-slate-600 hover:text-emerald-800 hover:bg-emerald-50'
            }`}
          >
            Asesmen
          </button>
          <button
            onClick={() => handleNav('ruang_guru')}
            className={`px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm font-bold rounded-lg transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
              currentTab === 'ruang_guru'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'text-emerald-950 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300'
            }`}
            title="Portal & Rekapan Nilai Siswa untuk Guru"
          >
            <GraduationCap className="w-3.5 h-3.5 text-amber-500" />
            <span>Ruang Guru</span>
          </button>
        </nav>

        {/* Zone 3: Actions & Status HUD */}
        <div className="flex items-center gap-1 sm:gap-2.5 shrink-0">
          {/* Bintang Kebaikan Indicator */}
          <div
            title="Bintang Kebaikan yang dikumpulkan dari kejujuran, kepedulian, dan kebaikan"
            className="flex items-center gap-1.5 px-2.5 py-1 bg-amber-50 border border-amber-200 rounded-lg text-amber-900 text-xs sm:text-sm font-bold shadow-2xs"
          >
            <span className="text-amber-500 text-sm sm:text-base leading-none">⭐</span>
            <span className="tabular-nums font-mono">{player.stars}</span>
            <span className="hidden lg:inline text-[11px] font-normal text-amber-700">Bintang</span>
          </div>

          {/* XP Meter */}
          <div
            title="Poin Pengalaman Belajar"
            className="hidden sm:flex items-center gap-1 px-2.5 py-1 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-900 text-xs font-semibold"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span className="tabular-nums font-mono">{player.xp}</span>
            <span className="text-[10px] text-emerald-700 font-medium">XP</span>
          </div>

          {/* Background Music (BGM) Toggle */}
          <button
            onClick={toggleMusic}
            aria-label={player.musicEnabled ? 'Matikan Musik Penggiring' : 'Nyalakan Musik Penggiring'}
            title={
              player.musicEnabled
                ? 'Musik Penggiring Aktif (Klik untuk Matikan)'
                : 'Nyalakan Musik Penggiring Permainan (BGM Melodi Ceria)'
            }
            className={`p-2 rounded-lg transition-all flex items-center gap-1 cursor-pointer ${
              player.musicEnabled
                ? 'bg-amber-100/90 text-amber-950 border border-amber-300 font-bold'
                : 'text-slate-500 hover:text-emerald-700 hover:bg-slate-100'
            }`}
          >
            <Music className={`w-4 h-4 ${player.musicEnabled ? 'text-amber-600 animate-gentle-pulse' : 'text-slate-400'}`} />
            <span className="hidden xl:inline text-[11px]">
              {player.musicEnabled ? 'BGM Nyala' : 'Musik'}
            </span>
          </button>

          {/* Sound FX Toggle */}
          <button
            onClick={toggleSound}
            aria-label={player.soundEnabled ? 'Matikan Efek Suara' : 'Nyalakan Efek Suara'}
            className="p-2 text-slate-500 hover:text-emerald-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            title={player.soundEnabled ? 'Efek Suara Aktif' : 'Efek Suara Mati'}
          >
            {player.soundEnabled ? (
              <Volume2 className="w-4 h-4 text-emerald-700" />
            ) : (
              <VolumeX className="w-4 h-4 text-slate-400" />
            )}
          </button>

          {/* Achievements / Trophy Trigger */}
          <button
            onClick={() => {
              sounds.playClick();
              onOpenAchievements();
            }}
            title="Lihat Pencapaian & Piala Bab (Dunia Al-Qur'an s/d Dunia Cinta)"
            className="p-2 text-slate-600 hover:text-amber-800 hover:bg-amber-50 rounded-lg transition-colors relative cursor-pointer"
          >
            <Trophy className="w-4 h-4 text-amber-600" />
            {(player.achievements?.length || 0) > 0 && (
              <span className="absolute -top-1 -right-1 min-w-4 h-4 px-1 bg-amber-500 text-white text-[9px] font-black rounded-full flex items-center justify-center">
                {player.achievements.length}
              </span>
            )}
          </button>

          {/* Petunjuk Modal Trigger */}
          <button
            onClick={() => {
              sounds.playClick();
              onOpenInstructions();
            }}
            aria-label="Petunjuk Bermain"
            className="p-2 text-slate-600 hover:text-emerald-800 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
          >
            <HelpCircle className="w-4 h-4 text-slate-600" />
          </button>

          {/* Profile Trigger */}
          <button
            onClick={() => {
              sounds.playClick();
              onOpenProfile();
            }}
            className="flex items-center gap-2 pl-1 pr-2 sm:pr-3 py-1 bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 rounded-lg transition-all text-left"
          >
            <img
              src={activeChar.avatar}
              alt={player.name}
              referrerPolicy="no-referrer"
              className="w-7 h-7 rounded-full object-cover border border-emerald-500"
            />
            <div className="hidden sm:block">
              <span className="block text-xs font-bold text-slate-800 leading-tight max-w-[90px] truncate">
                {player.name}
              </span>
              <span className="block text-[10px] text-slate-500">Profil</span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};
