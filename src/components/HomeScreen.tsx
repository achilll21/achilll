import React from 'react';
import { useGame } from '../context/GameContext';
import { CHARACTERS, WORLDS, HERO_IMAGE } from '../data/gameData';
import { Play, Sparkles, HelpCircle, MapPin, Compass, Award, Heart, CheckCircle2, ChevronRight, BookOpen, Trophy, GraduationCap, Music } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface HomeScreenProps {
  onStartGame: () => void;
  onOpenInstructions: () => void;
  onOpenCharacterSelect: () => void;
  onOpenAssessment: () => void;
  onSelectWorld: (worldId: number) => void;
  onOpenRuangGuru?: () => void;
  onOpenAchievements?: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onStartGame,
  onOpenInstructions,
  onOpenCharacterSelect,
  onOpenAssessment,
  onSelectWorld,
  onOpenRuangGuru,
  onOpenAchievements,
}) => {
  const { player, isWorldUnlocked, isWorldCompleted, toggleMusic } = useGame();
  const activeChar = CHARACTERS.find((c) => c.id === player.characterId) || CHARACTERS[0];

  return (
    <div className="space-y-8 sm:space-y-12 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-900 via-teal-900 to-emerald-950 text-white shadow-xl border border-emerald-700/40">
        {/* Background Image with Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_IMAGE}
            alt="Ilustrasi Petualangan Al-Qur'an dan Hadis"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-25 mix-blend-luminosity scale-105 transform hover:scale-100 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-900/85 to-transparent" />
        </div>

        <div className="relative z-10 p-6 sm:p-10 lg:p-12 max-w-4xl">
          {/* Subtle natural eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/80 border border-emerald-600/60 text-xs sm:text-sm font-semibold text-emerald-200 mb-4 backdrop-blur-xs">
            <span>✨</span>
            <span>Mata Pelajaran Al-Qur'an Hadis Kelas IV MI/SD &bull; Fase B</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white font-sans text-balance">
            PETUALANGAN CINTA <br className="hidden sm:inline" />
            <span className="text-amber-300">AL-QUR'AN DAN HADIS</span>
          </h1>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-emerald-100/90 max-w-2xl leading-relaxed">
            Jadilah <strong className="text-white">Penjelajah Cinta</strong> sejati! Jelajahi 6 dunia ilmu,
            susun ayat, cocokkan hadis, selesaikan misi kebaikan, dan raih piala pencapaian setiap bab
            serta wujudkan nilai kasih sayang, kejujuran, dan cinta tanah air dalam kehidupan sehari-hari.
          </p>

          {/* Action CTAs */}
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-2.5 sm:gap-3.5">
            <button
              onClick={() => {
                sounds.playVictory();
                onStartGame();
              }}
              className="px-6 py-3.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-emerald-950 font-bold text-sm sm:text-base rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2.5 cursor-pointer"
            >
              <Play className="w-5 h-5 fill-current" />
              <span>Mulai Petualangan</span>
            </button>

            {onOpenAchievements && (
              <button
                onClick={() => {
                  sounds.playClick();
                  onOpenAchievements();
                }}
                className="px-4 py-3.5 bg-amber-400/20 hover:bg-amber-400/30 text-amber-200 font-bold text-sm rounded-2xl border border-amber-300/40 backdrop-blur-xs transition-all flex items-center gap-2 cursor-pointer shadow-xs"
                title="Buka Koleksi Piala dan Pencapaian Semua Bab"
              >
                <Trophy className="w-4 h-4 text-amber-300" />
                <span>Piala & Pencapaian</span>
                {(player.achievements?.length || 0) > 0 && (
                  <span className="px-1.5 py-0.2 bg-amber-400 text-slate-950 text-[10px] font-black rounded-md">
                    {player.achievements.length}
                  </span>
                )}
              </button>
            )}

            {onOpenRuangGuru && (
              <button
                onClick={() => {
                  sounds.playClick();
                  onOpenRuangGuru();
                }}
                className="px-4 py-3.5 bg-emerald-800/90 hover:bg-emerald-700/90 text-white font-bold text-sm rounded-2xl border border-emerald-500/60 backdrop-blur-xs transition-all flex items-center gap-2 cursor-pointer shadow-xs"
                title="Masuk ke Portal Ruang Guru & Rekap Nilai Siswa"
              >
                <GraduationCap className="w-4 h-4 text-amber-300" />
                <span>Ruang Guru</span>
              </button>
            )}

            <button
              onClick={() => {
                sounds.playClick();
                onOpenInstructions();
              }}
              className="px-4 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-2xl border border-white/20 backdrop-blur-xs transition-colors flex items-center gap-2 cursor-pointer"
            >
              <HelpCircle className="w-4 h-4 text-emerald-300" />
              <span>Petunjuk</span>
            </button>
          </div>
        </div>
      </section>

      {/* Explorer Status Bar */}
      <section className="bg-white rounded-3xl p-5 sm:p-7 border border-amber-200/90 shadow-sm relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center gap-4 sm:gap-5 w-full md:w-auto relative z-10">
          <div className="relative shrink-0 group">
            <img
              src={activeChar.avatar}
              alt={activeChar.name}
              referrerPolicy="no-referrer"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-3 border-emerald-500 shadow-md transform group-hover:scale-105 transition-transform"
            />
            <span className="absolute -bottom-1 -right-1 text-lg animate-bounce-soft">⭐</span>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                Sahabat Penjelajah
              </span>
              <button
                onClick={() => {
                  sounds.playClick();
                  onOpenCharacterSelect();
                }}
                className="text-xs text-emerald-700 underline font-semibold hover:text-emerald-900"
              >
                Ganti Karakter
              </button>
            </div>

            <h3 className="text-lg sm:text-xl font-black text-slate-900">
              {player.name} &bull; {activeChar.name}
            </h3>

            {/* Speech bubble greeting */}
            <div className="relative inline-block bg-amber-50/90 border border-amber-200 rounded-xl px-3 py-1.5 text-xs text-amber-950 font-medium shadow-2xs">
              <span className="font-bold text-emerald-800">"{activeChar.name}": </span>
              <span>"Assalamu'alaikum {player.name}! Ayo bersemangat menebarkan cinta Al-Qur'an dan Hadis hari ini!"</span>
            </div>
          </div>
        </div>

        {/* Quick Metrics */}
        <div className="flex items-center gap-4 sm:gap-6 w-full md:w-auto justify-around md:justify-end border-t md:border-t-0 pt-3 md:pt-0 border-slate-100 relative z-10">
          <div className="text-center group">
            <span className="text-xs text-slate-500 block">Bintang Kebaikan</span>
            <span className="text-2xl sm:text-3xl font-black text-amber-900 flex items-center justify-center gap-1 group-hover:scale-105 transition-transform">
              <span className="text-amber-500">⭐</span>
              <span className="tabular-nums font-mono">{player.stars}</span>
            </span>
          </div>
          <div className="h-10 w-px bg-slate-200" />
          <div className="text-center group">
            <span className="text-xs text-slate-500 block">Pengalaman</span>
            <span className="text-2xl sm:text-3xl font-black text-emerald-900 flex items-center justify-center gap-1 group-hover:scale-105 transition-transform">
              <span className="text-emerald-600">⚡</span>
              <span className="tabular-nums font-mono">{player.xp}</span>
            </span>
          </div>
          <div className="h-10 w-px bg-slate-200" />
          <div className="text-center group">
            <span className="text-xs text-slate-500 block">Dunia Terbuka</span>
            <span className="text-2xl sm:text-3xl font-black text-indigo-900 flex items-center justify-center gap-1 group-hover:scale-105 transition-transform">
              <span className="tabular-nums font-mono">{player.unlockedWorld}</span>
              <span className="text-xs font-normal text-slate-400">/6</span>
            </span>
          </div>
        </div>
      </section>

      {/* Nilai Kurikulum Cinta Highlight */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <Heart className="w-5 h-5 text-rose-500 fill-rose-500 animate-gentle-pulse" />
              <span>Integrasi Nilai Luhur Kurikulum Cinta</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Setiap pilihan tindakanmu dalam permainan akan memupuk pilar-pilar kebaikan mulia ini (klik untuk dengarkan):
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {[
            { title: 'Cinta Allah & Rasul', icon: '🤲', desc: 'Ikhlas & taat beribadah', voice: 'Cinta Allah dan Rasul: Menumbuhkan keikhlasan dan ketaatan ibadah dalam setiap langkah.' },
            { title: 'Cinta Al-Qur\'an', icon: '📖', desc: 'Tadabur & amalkan ayat', voice: 'Cinta Al-Qur\'an: Gemar membaca, memahami, dan mengamalkan pesan suci Al-Qur\'an.' },
            { title: 'Cinta Diri Sendiri', icon: '🌱', desc: 'Jaga raga & bersyukur', voice: 'Cinta Diri Sendiri: Merawat tubuh karunia Allah, menjauhi maksiat, dan selalu bersyukur.' },
            { title: 'Cinta Sesama', icon: '🤝', desc: 'Kasih sayang & peduli', voice: 'Cinta Sesama: Menyayangi teman, bertoleransi, dan saling tolong-menolong.' },
            { title: 'Cinta Lingkungan', icon: '🌿', desc: 'Kebersihan & rawat bumi', voice: 'Cinta Lingkungan: Menjaga kebersihan dan melestarikan tanaman ciptaan Allah.' },
            { title: 'Cinta Bangsa', icon: '🇮🇩', desc: 'Rukun & tolong menolong', voice: 'Cinta Bangsa: Menjaga persatuan Indonesia dan gotong royong dalam kebajikan.' },
          ].map((item, i) => (
            <div
              key={i}
              onClick={() => {
                sounds.playClick();
                if ('speechSynthesis' in window) {
                  window.speechSynthesis.cancel();
                  const utterance = new SpeechSynthesisUtterance(item.voice);
                  utterance.lang = 'id-ID';
                  utterance.rate = 0.92;
                  window.speechSynthesis.speak(utterance);
                }
              }}
              className="p-3.5 rounded-2xl bg-white border border-amber-100/90 shadow-2xs hover:shadow-md hover:border-emerald-400 hover:-translate-y-1 transition-all text-center flex flex-col items-center justify-center cursor-pointer group"
              title="Klik untuk dengarkan penjelasan nilai"
            >
              <span className="text-3xl mb-1.5 transform group-hover:scale-125 transition-transform animate-float-slow">
                {item.icon}
              </span>
              <h4 className="text-xs font-bold text-slate-800 leading-tight mb-0.5 group-hover:text-emerald-800">
                {item.title}
              </h4>
              <p className="text-[10px] text-slate-500 leading-snug">{item.desc}</p>
              <span className="text-[9px] text-emerald-600 font-semibold mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                🔊 Dengarkan
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 6 Dunia Preview Grid */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-emerald-600" />
              6 Wilayah Petualangan Penjelajah
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Selesaikan wilayah secara bertahap untuk membuka dunia berikutnya:
            </p>
          </div>
          <button
            onClick={() => {
              sounds.playClick();
              onStartGame();
            }}
            className="text-xs sm:text-sm font-semibold text-emerald-700 hover:text-emerald-900 flex items-center gap-1"
          >
            <span>Buka Peta</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {WORLDS.map((world) => {
            const unlocked = isWorldUnlocked(world.id);
            const completed = isWorldCompleted(world.id);

            return (
              <div
                key={world.id}
                onClick={() => {
                  if (unlocked) {
                    sounds.playClick();
                    onSelectWorld(world.id);
                  }
                }}
                className={`group rounded-3xl border-2 transition-all duration-300 text-left relative overflow-hidden flex flex-col justify-between ${
                  unlocked
                    ? 'bg-white hover:border-emerald-500 hover:shadow-xl cursor-pointer border-slate-200 hover:-translate-y-1'
                    : 'bg-slate-50 border-slate-200/80 opacity-65 cursor-not-allowed'
                }`}
              >
                {/* Visual Image Header */}
                <div className="relative h-36 w-full overflow-hidden bg-slate-100">
                  <img
                    src={world.image}
                    alt={world.title}
                    referrerPolicy="no-referrer"
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      unlocked ? 'group-hover:scale-110' : 'grayscale'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                  {/* Top status indicator on top of image */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="w-7 h-7 rounded-lg bg-emerald-600/90 text-white text-xs font-black flex items-center justify-center backdrop-blur-xs shadow-xs">
                      0{world.id}
                    </span>

                    {completed ? (
                      <span className="flex items-center gap-1 text-[11px] font-bold text-white bg-emerald-600/95 px-2.5 py-0.5 rounded-full backdrop-blur-xs shadow-xs">
                        <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                        Tuntas
                      </span>
                    ) : unlocked ? (
                      <span className="text-[11px] font-bold text-slate-950 bg-amber-400 px-2.5 py-0.5 rounded-full shadow-xs">
                        Terbuka
                      </span>
                    ) : (
                      <span className="text-[11px] font-medium text-white/90 bg-slate-800/80 px-2.5 py-0.5 rounded-full backdrop-blur-xs">
                        Terkunci
                      </span>
                    )}
                  </div>

                  {/* Bottom title on image */}
                  <div className="absolute bottom-2.5 left-3.5 right-3.5 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 block">
                      {world.theme}
                    </span>
                    <h3 className="text-sm font-bold text-white leading-tight drop-shadow-xs line-clamp-1">
                      {world.shortTitle}
                    </h3>
                  </div>
                </div>

                {/* Content body */}
                <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {world.description}
                  </p>

                  <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2.5 border-t border-slate-100">
                    <span className="font-semibold text-emerald-800 flex items-center gap-1">
                      <span>{world.icon}</span>
                      <span>{world.badgeName}</span>
                    </span>
                    <span className="font-bold text-emerald-700 group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                      <span>Jelajahi</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
