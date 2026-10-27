/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { GameProvider, useGame } from './context/GameContext';
import { WORLDS } from './data/gameData';
import { Navbar } from './components/Navbar';
import { HomeScreen } from './components/HomeScreen';
import { CharacterSelect } from './components/CharacterSelect';
import { WorldMap } from './components/WorldMap';
import { WorldHub } from './components/WorldHub';
import { AssessmentScreen } from './components/AssessmentScreen';
import { ProfileModal } from './components/ProfileModal';
import { InstructionModal } from './components/InstructionModal';
import { NotificationToast } from './components/NotificationToast';
import { RuangGuruScreen } from './components/RuangGuruScreen';
import { AchievementModal } from './components/AchievementModal';

function GameApp() {
  const [currentTab, setCurrentTab] = useState<'home' | 'character' | 'map' | 'world' | 'assessment' | 'ruang_guru'>('home');
  const [selectedWorldId, setSelectedWorldId] = useState<number>(1);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isInstructionsOpen, setIsInstructionsOpen] = useState(false);
  const [isAchievementsOpen, setIsAchievementsOpen] = useState(false);

  const selectedWorld = WORLDS.find((w) => w.id === selectedWorldId) || WORLDS[0];

  const handleSelectWorld = (worldId: number) => {
    setSelectedWorldId(worldId);
    setCurrentTab('world');
  };

  const handleNextWorld = () => {
    if (selectedWorldId < 6) {
      setSelectedWorldId((prev) => prev + 1);
    } else {
      setCurrentTab('map');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/50 via-white to-emerald-50/30 flex flex-col font-sans text-slate-800">
      {/* Top Navbar */}
      <Navbar
        currentTab={currentTab}
        onNavigate={(tab) => setCurrentTab(tab)}
        onOpenProfile={() => setIsProfileOpen(true)}
        onOpenInstructions={() => setIsInstructionsOpen(true)}
        onOpenAchievements={() => setIsAchievementsOpen(true)}
      />

      {/* Main View Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 pt-6 sm:pt-8">
        {currentTab === 'home' && (
          <HomeScreen
            onStartGame={() => setCurrentTab('map')}
            onOpenInstructions={() => setIsInstructionsOpen(true)}
            onOpenCharacterSelect={() => setCurrentTab('character')}
            onOpenAssessment={() => setCurrentTab('assessment')}
            onSelectWorld={handleSelectWorld}
            onOpenRuangGuru={() => setCurrentTab('ruang_guru')}
            onOpenAchievements={() => setIsAchievementsOpen(true)}
          />
        )}

        {currentTab === 'character' && (
          <CharacterSelect
            onBack={() => setCurrentTab('home')}
            onContinue={() => setCurrentTab('map')}
          />
        )}

        {currentTab === 'map' && (
          <WorldMap
            onBack={() => setCurrentTab('home')}
            onSelectWorld={handleSelectWorld}
          />
        )}

        {currentTab === 'world' && (
          <WorldHub
            world={selectedWorld}
            onBackToMap={() => setCurrentTab('map')}
            onNextWorld={handleNextWorld}
          />
        )}

        {currentTab === 'assessment' && (
          <AssessmentScreen
            onBack={() => setCurrentTab('home')}
            onGoToMap={() => setCurrentTab('map')}
          />
        )}

        {currentTab === 'ruang_guru' && (
          <RuangGuruScreen
            onBack={() => setCurrentTab('home')}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-amber-200/80 bg-white/70 py-6 text-center text-xs text-slate-500 print:hidden">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            &copy; 2026 Petualangan Cinta Al-Qur'an dan Hadis &bull; Media Pembelajaran Fase B Kelas IV MI/SD
          </p>
          <div className="flex items-center gap-4 text-emerald-800 font-medium">
            <button
              onClick={() => setIsInstructionsOpen(true)}
              className="hover:underline cursor-pointer"
            >
              Petunjuk
            </button>
            <span>&bull;</span>
            <button
              onClick={() => setIsAchievementsOpen(true)}
              className="hover:underline cursor-pointer"
            >
              Pencapaian (Piala)
            </button>
            <span>&bull;</span>
            <button
              onClick={() => setIsProfileOpen(true)}
              className="hover:underline cursor-pointer"
            >
              Profil & Lencana
            </button>
            <span>&bull;</span>
            <button
              onClick={() => setCurrentTab('ruang_guru')}
              className="hover:underline font-bold text-emerald-900 cursor-pointer"
            >
              Portal Ruang Guru
            </button>
          </div>
        </div>
      </footer>

      {/* Global Modals & Toasts */}
      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        onNavigateToCharacter={() => {
          setIsProfileOpen(false);
          setCurrentTab('character');
        }}
      />

      <InstructionModal
        isOpen={isInstructionsOpen}
        onClose={() => setIsInstructionsOpen(false)}
        onStartAdventure={() => {
          setIsInstructionsOpen(false);
          setCurrentTab('map');
        }}
      />

      <AchievementModal
        isOpen={isAchievementsOpen}
        onClose={() => setIsAchievementsOpen(false)}
      />

      <NotificationToast />
    </div>
  );
}

export default function App() {
  return (
    <GameProvider>
      <GameApp />
    </GameProvider>
  );
}
