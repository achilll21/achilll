import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { PlayerProfile, CharacterId, ReflectionLog, TestResult } from '../types/game';
import { BADGES, WORLDS } from '../data/gameData';
import { ACHIEVEMENTS } from '../data/achievementsData';
import { sounds } from '../utils/soundEffects';
import { bgm } from '../utils/backgroundMusic';

interface GameContextType {
  player: PlayerProfile;
  selectCharacter: (characterId: CharacterId, name: string) => void;
  updatePlayerName: (name: string) => void;
  addReward: (stars: number, xp: number, reason?: string) => void;
  unlockWorld: (worldId: number) => void;
  completeWorld: (worldId: number) => void;
  awardBadge: (badgeId: string) => void;
  unlockAchievement: (achievementId: string) => void;
  saveReflection: (worldId: number, worldTitle: string, question: string, answer: string) => void;
  saveTestResult: (result: TestResult) => void;
  resetProgress: () => void;
  toggleSound: () => void;
  toggleMusic: () => void;
  setMusicVolume: (volume: number) => void;
  isWorldUnlocked: (worldId: number) => boolean;
  isWorldCompleted: (worldId: number) => boolean;
  hasBadge: (badgeId: string) => boolean;
  hasAchievement: (achievementId: string) => boolean;
  notification: { title: string; message: string; stars?: number; icon?: string } | null;
  clearNotification: () => void;
}

const STORAGE_KEY = 'petualangan_cinta_quran_v1';

const DEFAULT_PROFILE: PlayerProfile = {
  name: 'Penjelajah Cilik',
  characterId: 'ahmad',
  stars: 0,
  xp: 0,
  unlockedWorld: 1, // World 1 is unlocked initially
  completedWorlds: [],
  badges: [],
  achievements: [],
  reflections: [],
  preTestDone: false,
  postTestDone: false,
  testResults: [],
  soundEnabled: true,
  musicEnabled: false, // Starts false until player clicks/toggles music
  musicVolume: 0.35,
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [player, setPlayer] = useState<PlayerProfile>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return { ...DEFAULT_PROFILE, ...parsed };
      }
    } catch {
      // Fallback
    }
    return DEFAULT_PROFILE;
  });

  const [notification, setNotification] = useState<{ title: string; message: string; stars?: number; icon?: string } | null>(null);

  // Sync sounds state with player preference
  useEffect(() => {
    sounds.enabled = player.soundEnabled;
  }, [player.soundEnabled]);

  // Sync BGM with player preference
  useEffect(() => {
    bgm.isEnabled = player.musicEnabled;
    if (player.musicVolume !== undefined) {
      bgm.setVolume(player.musicVolume);
    }
    if (player.musicEnabled) {
      bgm.start();
    } else {
      bgm.stop();
    }
  }, [player.musicEnabled, player.musicVolume]);

  // Persist player to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(player));
    } catch (e) {
      console.error('Failed to save state to localStorage', e);
    }
  }, [player]);

  const selectCharacter = (characterId: CharacterId, name: string) => {
    const finalName = name.trim() || DEFAULT_PROFILE.name;
    setPlayer((prev) => ({
      ...prev,
      characterId,
      name: finalName,
    }));
    sounds.playVictory();
    setNotification({
      title: 'Karakter Dipilih!',
      message: `Selamat datang Penjelajah ${finalName}! Siap memulai petualangan cinta Al-Qur'an dan Hadis.`,
    });
  };

  const updatePlayerName = (name: string) => {
    setPlayer((prev) => ({ ...prev, name: name.trim() || 'Penjelajah Cilik' }));
  };

  const unlockAchievement = useCallback((achievementId: string) => {
    setPlayer((prev) => {
      const currentList = prev.achievements || [];
      if (currentList.includes(achievementId)) return prev;

      const ach = ACHIEVEMENTS.find((a) => a.id === achievementId);
      if (!ach) return prev;

      sounds.playVictory();
      setNotification({
        title: `🏆 Pencapaian Terbuka: ${ach.title}`,
        message: `${ach.description} (+${ach.rewardStars}⭐, +${ach.rewardXp} XP)`,
        stars: ach.rewardStars,
        icon: ach.icon,
      });

      return {
        ...prev,
        achievements: [...currentList, achievementId],
        stars: prev.stars + ach.rewardStars,
        xp: prev.xp + ach.rewardXp,
      };
    });
  }, []);

  const addReward = (stars: number, xp: number, reason?: string) => {
    if (stars > 0) {
      sounds.playStar();
    }
    setPlayer((prev) => {
      const nextStars = prev.stars + stars;
      const nextXp = prev.xp + xp;

      // Check star collector achievement
      if (nextStars >= 30 && !(prev.achievements || []).includes('ach_star_collector')) {
        setTimeout(() => unlockAchievement('ach_star_collector'), 400);
      }

      return {
        ...prev,
        stars: nextStars,
        xp: nextXp,
      };
    });

    if (stars > 0 || xp > 0) {
      setNotification({
        title: 'Bintang Kebaikan Didapat!',
        message: reason || `Kamu mendapatkan +${stars} Bintang Kebaikan dan +${xp} XP.`,
        stars,
      });
    }
  };

  const unlockWorld = (worldId: number) => {
    setPlayer((prev) => {
      if (worldId > prev.unlockedWorld && worldId <= 6) {
        sounds.playVictory();
        return {
          ...prev,
          unlockedWorld: worldId,
        };
      }
      return prev;
    });
  };

  const completeWorld = (worldId: number) => {
    setPlayer((prev) => {
      const alreadyCompleted = prev.completedWorlds.includes(worldId);
      const nextUnlocked = Math.max(prev.unlockedWorld, Math.min(worldId + 1, 6));
      const newCompleted = alreadyCompleted ? prev.completedWorlds : [...prev.completedWorlds, worldId];

      // Check badge for world
      const worldBadge = BADGES.find((b) => b.worldId === worldId);
      const newBadges = [...prev.badges];
      if (worldBadge && !newBadges.includes(worldBadge.id)) {
        newBadges.push(worldBadge.id);
      }

      // If all 6 worlds completed, award grand badge & achievement
      if (newCompleted.length === 6 && !newBadges.includes('badge_cinta_sejati')) {
        newBadges.push('badge_cinta_sejati');
      }

      sounds.playVictory();
      return {
        ...prev,
        completedWorlds: newCompleted,
        unlockedWorld: nextUnlocked,
        badges: newBadges,
      };
    });

    const currentWorld = WORLDS.find((w) => w.id === worldId);
    setNotification({
      title: 'MasyaAllah! Dunia Selesai!',
      message: `Kamu telah menuntaskan ${currentWorld?.shortTitle || 'Dunia Pembelajaran'} dengan luar biasa!`,
    });

    // Check world-specific achievements
    if (worldId === 1) unlockAchievement('ach_quran_perfect');
    if (worldId === 2) unlockAchievement('ach_hadis_perfect');
    if (worldId === 3) unlockAchievement('ach_akhlak_perfect');
    if (worldId === 4) unlockAchievement('ach_sahabat_perfect');
    if (worldId === 5) unlockAchievement('ach_lingkungan_perfect');
    if (worldId === 6) {
      unlockAchievement('ach_cinta_perfect');
      unlockAchievement('ach_master_explorer');
    }
  };

  const awardBadge = (badgeId: string) => {
    setPlayer((prev) => {
      if (prev.badges.includes(badgeId)) return prev;
      sounds.playVictory();
      const badge = BADGES.find((b) => b.id === badgeId);
      if (badge) {
        setNotification({
          title: `Lencana Baru: ${badge.name}`,
          message: badge.description,
        });
      }
      return {
        ...prev,
        badges: [...prev.badges, badgeId],
      };
    });
  };

  const saveReflection = (worldId: number, worldTitle: string, question: string, answer: string) => {
    const newLog: ReflectionLog = {
      worldId,
      worldTitle,
      question,
      answer: answer.trim(),
      date: new Date().toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
    };

    setPlayer((prev) => {
      // replace if exists for same world, or append
      const filtered = prev.reflections.filter((r) => r.worldId !== worldId);
      return {
        ...prev,
        reflections: [...filtered, newLog],
        stars: prev.stars + 2,
        xp: prev.xp + 30,
      };
    });

    sounds.playStar();
    setNotification({
      title: 'Refleksi Tersimpan!',
      message: 'MasyaAllah! Catatan kebaikanmu tersimpan di Jurnal Petualang. +2 Bintang Kebaikan!',
      stars: 2,
    });

    // World reflection achievement triggers
    if (worldId === 1) unlockAchievement('ach_quran_lapang');
  };

  const saveTestResult = (result: TestResult) => {
    setPlayer((prev) => {
      const updatedResults = [result, ...prev.testResults];
      let newBadges = [...prev.badges];
      let preDone = prev.preTestDone;
      let postDone = prev.postTestDone;

      if (result.type === 'pre-test') {
        preDone = true;
        if (!newBadges.includes('badge_pretest')) {
          newBadges.push('badge_pretest');
        }
      } else if (result.type === 'post-test') {
        postDone = true;
        if (result.score >= 70 && !newBadges.includes('badge_posttest')) {
          newBadges.push('badge_posttest');
        }
        if (result.score >= 80) {
          setTimeout(() => unlockAchievement('ach_master_assessment'), 300);
        }
      }

      return {
        ...prev,
        testResults: updatedResults,
        preTestDone: preDone,
        postTestDone: postDone,
        badges: newBadges,
      };
    });
  };

  const resetProgress = () => {
    setPlayer(DEFAULT_PROFILE);
    localStorage.removeItem(STORAGE_KEY);
    sounds.playClick();
    bgm.stop();
    setNotification({
      title: 'Data Direset',
      message: 'Seluruh progress petualangan telah diatur ulang ke awal.',
    });
  };

  const toggleSound = () => {
    setPlayer((prev) => {
      const next = !prev.soundEnabled;
      sounds.enabled = next;
      if (next) sounds.playClick();
      return { ...prev, soundEnabled: next };
    });
  };

  const toggleMusic = () => {
    setPlayer((prev) => {
      const next = !prev.musicEnabled;
      bgm.isEnabled = next;
      if (next) {
        bgm.start();
        sounds.playClick();
      } else {
        bgm.stop();
      }
      return { ...prev, musicEnabled: next };
    });
  };

  const setMusicVolume = (vol: number) => {
    bgm.setVolume(vol);
    setPlayer((prev) => ({ ...prev, musicVolume: vol }));
  };

  const isWorldUnlocked = (worldId: number) => {
    return worldId <= player.unlockedWorld;
  };

  const isWorldCompleted = (worldId: number) => {
    return player.completedWorlds.includes(worldId);
  };

  const hasBadge = (badgeId: string) => {
    return player.badges.includes(badgeId);
  };

  const hasAchievement = (achievementId: string) => {
    return (player.achievements || []).includes(achievementId);
  };

  const clearNotification = () => setNotification(null);

  return (
    <GameContext.Provider
      value={{
        player,
        selectCharacter,
        updatePlayerName,
        addReward,
        unlockWorld,
        completeWorld,
        awardBadge,
        unlockAchievement,
        saveReflection,
        saveTestResult,
        resetProgress,
        toggleSound,
        toggleMusic,
        setMusicVolume,
        isWorldUnlocked,
        isWorldCompleted,
        hasBadge,
        hasAchievement,
        notification,
        clearNotification,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};
