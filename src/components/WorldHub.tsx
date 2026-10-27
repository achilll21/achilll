import React, { useState } from 'react';
import { World } from '../types/game';
import { useGame } from '../context/GameContext';
import { ArrowLeft, BookOpen, Gamepad2, Award, Heart, CheckCircle2, Star, Sparkles, ChevronRight } from 'lucide-react';
import { VisualMaterialCard } from './VisualMaterialCard';
import { ChapterExplanationView } from './ChapterExplanationView';
import { MiniGameSusunAyat } from './games/MiniGameSusunAyat';
import { MiniGameCocokkan } from './games/MiniGameCocokkan';
import { MiniGamePilihSikap } from './games/MiniGamePilihSikap';
import { MiniGameMemoryCard } from './games/MiniGameMemoryCard';
import { MiniGameBenarSalah } from './games/MiniGameBenarSalah';
import { MiniGameMisiKebaikan } from './games/MiniGameMisiKebaikan';
import { QuizModal } from './QuizModal';
import { ReflectionModal } from './ReflectionModal';
import { sounds } from '../utils/soundEffects';

interface WorldHubProps {
  world: World;
  onBackToMap: () => void;
  onNextWorld?: () => void;
}

export const WorldHub: React.FC<WorldHubProps> = ({ world, onBackToMap, onNextWorld }) => {
  const { isWorldCompleted, isWorldUnlocked, player } = useGame();
  const [activeTab, setActiveTab] = useState<'materi' | 'penjelasan' | 'games' | 'kuis' | 'refleksi'>('materi');
  const [selectedMiniGame, setSelectedMiniGame] = useState<'susun' | 'cocok' | 'sikap' | 'memory' | 'benar_salah' | 'misi'>('susun');

  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isReflectionOpen, setIsReflectionOpen] = useState(false);

  const completed = isWorldCompleted(world.id);
  const existingReflection = player.reflections.find((r) => r.worldId === world.id);

  const handleTabChange = (tab: 'materi' | 'penjelasan' | 'games' | 'kuis' | 'refleksi') => {
    sounds.playClick();
    setActiveTab(tab);
    if (tab === 'kuis') {
      setIsQuizOpen(true);
    } else if (tab === 'refleksi') {
      setIsReflectionOpen(true);
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 pb-16">
      {/* Top Breadcrumb & Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-amber-200/80 pb-4">
        <button
          onClick={() => {
            sounds.playClick();
            onBackToMap();
          }}
          className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-emerald-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Peta Dunia</span>
        </button>

        <div className="flex items-center gap-2">
          {completed && (
            <span className="flex items-center gap-1 px-3 py-1 bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-bold rounded-full">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Wilayah Tuntas</span>
            </span>
          )}
          <span className="text-xs font-mono font-bold text-slate-500">
            Wilayah {world.id} dari 6
          </span>
        </div>
      </div>

      {/* Hero Header of World */}
      <div className="bg-gradient-to-r from-emerald-950 via-teal-950 to-emerald-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden border border-emerald-700/50">
        {/* Background Artwork Backdrop with measured scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src={world.image}
            alt={world.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-25 mix-blend-luminosity scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-900/90 to-teal-950/85" />
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/15 flex items-center justify-center text-4xl sm:text-5xl border border-white/25 shrink-0 shadow-lg backdrop-blur-xs transform hover:rotate-3 transition-transform">
              {world.icon}
            </div>

            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/80 border border-emerald-500/50 text-xs font-bold text-amber-300 backdrop-blur-xs">
                <span>⭐ Lencana: {world.badgeName}</span>
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white leading-tight">
                {world.title}
              </h2>
              <p className="text-xs sm:text-sm text-emerald-100/90 max-w-2xl leading-relaxed">
                {world.description}
              </p>
            </div>
          </div>

          {/* Quick Action on Header */}
          <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0">
            <button
              onClick={() => {
                sounds.playClick();
                setIsQuizOpen(true);
              }}
              className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Award className="w-4 h-4" />
              <span>{completed ? 'Kuis Wilayah (Tuntas)' : 'Mulai Kuis Wilayah'}</span>
            </button>
            <button
              onClick={() => {
                sounds.playClick();
                setIsReflectionOpen(true);
              }}
              className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-xs sm:text-sm rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <Heart className="w-4 h-4 text-rose-300" />
              <span>{existingReflection ? 'Lihat Refleksi Hati' : 'Tulis Refleksi Hati'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Tab Navigation */}
      <div className="flex items-center gap-2 p-1.5 bg-white border border-amber-200/80 rounded-2xl shadow-xs overflow-x-auto">
        <button
          onClick={() => handleTabChange('materi')}
          className={`flex-1 min-w-[125px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
            activeTab === 'materi'
              ? 'bg-emerald-700 text-white shadow-xs'
              : 'text-slate-600 hover:text-emerald-900 hover:bg-emerald-50'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Kartu Rangkuman</span>
        </button>

        <button
          onClick={() => handleTabChange('penjelasan')}
          className={`flex-1 min-w-[155px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer relative ${
            activeTab === 'penjelasan'
              ? 'bg-emerald-700 text-white shadow-xs'
              : 'text-slate-600 hover:text-emerald-900 hover:bg-emerald-50'
          }`}
        >
          <Sparkles className="w-4 h-4 text-amber-400 animate-gentle-pulse" />
          <span>Penjelasan Lengkap</span>
          <span className="hidden sm:inline-block px-1.5 py-0.5 bg-amber-400 text-slate-950 text-[10px] font-black rounded-md">
            Bab {world.id}
          </span>
        </button>

        <button
          onClick={() => handleTabChange('games')}
          className={`flex-1 min-w-[130px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
            activeTab === 'games'
              ? 'bg-emerald-700 text-white shadow-xs'
              : 'text-slate-600 hover:text-emerald-900 hover:bg-emerald-50'
          }`}
        >
          <Gamepad2 className="w-4 h-4" />
          <span>6 Mini-Game</span>
        </button>

        <button
          onClick={() => handleTabChange('kuis')}
          className={`flex-1 min-w-[110px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
            activeTab === 'kuis'
              ? 'bg-emerald-700 text-white shadow-xs'
              : 'text-slate-600 hover:text-emerald-900 hover:bg-emerald-50'
          }`}
        >
          <Award className="w-4 h-4" />
          <span>Kuis Wilayah</span>
        </button>

        <button
          onClick={() => handleTabChange('refleksi')}
          className={`flex-1 min-w-[120px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
            activeTab === 'refleksi'
              ? 'bg-emerald-700 text-white shadow-xs'
              : 'text-slate-600 hover:text-emerald-900 hover:bg-emerald-50'
          }`}
        >
          <Heart className="w-4 h-4" />
          <span>Refleksi Hati</span>
        </button>
      </div>

      {/* Tab 1: Visual Materials */}
      {activeTab === 'materi' && (
        <VisualMaterialCard
          materials={world.materials}
          worldTitle={world.title}
          worldImage={world.image}
          onOpenDetailedExplanation={() => setActiveTab('penjelasan')}
        />
      )}

      {/* Tab 2: Penjelasan Materi Mendalam & Tafsir */}
      {activeTab === 'penjelasan' && (
        <ChapterExplanationView
          world={world}
          onBackToFlashcard={() => setActiveTab('materi')}
        />
      )}

      {/* Tab 2: Mini-Games Arena (6 Mini-Games) */}
      {activeTab === 'games' && (
        <div className="space-y-6">
          {/* Sub-selector for the 6 mini games */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {[
              { id: 'susun', name: 'A. Susun Ayat', icon: '🧩' },
              { id: 'cocok', name: 'B. Cocokkan', icon: '🔗' },
              { id: 'sikap', name: 'C. Pilih Sikap', icon: '🌟' },
              { id: 'memory', name: 'D. Memory Card', icon: '🎴' },
              { id: 'benar_salah', name: 'E. Benar/Salah', icon: '⚖️' },
              { id: 'misi', name: 'F. Misi Kebaikan', icon: '🎒' },
            ].map((game) => (
              <button
                key={game.id}
                onClick={() => {
                  sounds.playClick();
                  setSelectedMiniGame(game.id as typeof selectedMiniGame);
                }}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                  selectedMiniGame === game.id
                    ? 'bg-amber-400 text-slate-950 shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-amber-50'
                }`}
              >
                <span>{game.icon}</span>
                <span>{game.name}</span>
              </button>
            ))}
          </div>

          {/* Active Mini-Game Render */}
          {selectedMiniGame === 'susun' && (
            <MiniGameSusunAyat gameData={world.susunAyatGame} worldId={world.id} />
          )}
          {selectedMiniGame === 'cocok' && (
            <MiniGameCocokkan pairs={world.matchPairs} worldId={world.id} />
          )}
          {selectedMiniGame === 'sikap' && (
            <MiniGamePilihSikap scenarios={world.sikapScenarios} worldId={world.id} />
          )}
          {selectedMiniGame === 'memory' && (
            <MiniGameMemoryCard cards={world.memoryCards} worldId={world.id} />
          )}
          {selectedMiniGame === 'benar_salah' && (
            <MiniGameBenarSalah questions={world.trueFalseQuestions} worldId={world.id} />
          )}
          {selectedMiniGame === 'misi' && (
            <MiniGameMisiKebaikan missions={world.misiKebaikan} worldId={world.id} />
          )}
        </div>
      )}

      {/* Tab 3: Kuis Content fallback preview if modal closed */}
      {activeTab === 'kuis' && (
        <div className="bg-white rounded-3xl p-8 border border-amber-200 text-center space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-900 mx-auto flex items-center justify-center text-3xl">
            📝
          </div>
          <h3 className="text-xl font-bold text-slate-900">Kuis Evaluasi Wilayah {world.id}</h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
            Uji pemahamanmu mengenai {world.shortTitle} dan dapatkan Bintang Kebaikan serta lencana kehormatan!
          </p>
          <button
            onClick={() => setIsQuizOpen(true)}
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow-md transition-all inline-flex items-center gap-2"
          >
            <span>Buka Soal Kuis</span>
            <Sparkles className="w-4 h-4 text-amber-200" />
          </button>
        </div>
      )}

      {/* Tab 4: Refleksi Content preview */}
      {activeTab === 'refleksi' && (
        <div className="bg-white rounded-3xl p-8 border border-amber-200 text-center space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-rose-100 text-rose-600 mx-auto flex items-center justify-center text-3xl">
            💖
          </div>
          <h3 className="text-xl font-bold text-slate-900">Refleksi Hati Nurani</h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
            "{world.reflectionQuestion}"
          </p>
          {existingReflection && (
            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-xs text-slate-800 max-w-md mx-auto italic text-left">
              <strong>Catatan Refleksimu:</strong> "{existingReflection.answer}"
            </div>
          )}
          <button
            onClick={() => setIsReflectionOpen(true)}
            className="px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm rounded-xl shadow-md transition-all inline-flex items-center gap-2"
          >
            <span>{existingReflection ? 'Ubah Catatan Refleksi' : 'Tulis Refleksi Sekarang'}</span>
            <Heart className="w-4 h-4 text-rose-200 fill-rose-200" />
          </button>
        </div>
      )}

      {/* Modals */}
      <QuizModal
        isOpen={isQuizOpen}
        worldId={world.id}
        worldTitle={world.title}
        questions={world.quiz}
        onClose={() => setIsQuizOpen(false)}
        onComplete={() => {
          setIsQuizOpen(false);
          setIsReflectionOpen(true);
        }}
      />

      <ReflectionModal
        isOpen={isReflectionOpen}
        worldId={world.id}
        worldTitle={world.title}
        question={world.reflectionQuestion}
        promptText={world.reflectionPrompt}
        onClose={() => setIsReflectionOpen(false)}
        onSaved={() => {
          setIsReflectionOpen(false);
        }}
      />
    </div>
  );
};
