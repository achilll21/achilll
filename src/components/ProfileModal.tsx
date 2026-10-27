import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { CHARACTERS, BADGES, WORLDS } from '../data/gameData';
import { X, Award, Star, Sparkles, BookOpen, RotateCcw, CheckCircle2, Lock } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToCharacter: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  isOpen,
  onClose,
  onNavigateToCharacter,
}) => {
  const { player, updatePlayerName, resetProgress, hasBadge } = useGame();
  const [isEditingName, setIsEditingName] = useState(false);
  const [nameInput, setNameInput] = useState(player.name);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [activeTab, setActiveTab] = useState<'stats' | 'badges' | 'reflections' | 'assessment'>('stats');

  if (!isOpen) return null;

  const activeChar = CHARACTERS.find((c) => c.id === player.characterId) || CHARACTERS[0];

  const handleSaveName = (e: React.FormEvent) => {
    e.preventDefault();
    if (nameInput.trim()) {
      updatePlayerName(nameInput);
      setIsEditingName(false);
      sounds.playClick();
    }
  };

  const handleConfirmReset = () => {
    resetProgress();
    setShowResetConfirm(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto border border-amber-200 shadow-2xl p-5 sm:p-7 relative">
        <button
          onClick={() => {
            sounds.playClick();
            onClose();
          }}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
          aria-label="Tutup"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Character Header Lockup */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 pb-5 border-b border-slate-100">
          <div className="relative group shrink-0">
            <img
              src={activeChar.avatar}
              alt={activeChar.name}
              referrerPolicy="no-referrer"
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-3 border-emerald-500 shadow-md"
            />
            <button
              onClick={() => {
                sounds.playClick();
                onClose();
                onNavigateToCharacter();
              }}
              title="Ganti Karakter"
              className="absolute -bottom-2 -right-2 px-2 py-0.5 bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] font-bold rounded-full shadow-xs"
            >
              Ganti
            </button>
          </div>

          <div className="text-center sm:text-left flex-1">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              {isEditingName ? (
                <form onSubmit={handleSaveName} className="flex items-center gap-2">
                  <input
                    type="text"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    maxLength={20}
                    className="px-2.5 py-1 text-sm border border-emerald-400 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="px-3 py-1 text-xs font-semibold bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
                  >
                    Simpan
                  </button>
                </form>
              ) : (
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-bold text-slate-900">{player.name}</h2>
                  <button
                    onClick={() => {
                      sounds.playClick();
                      setNameInput(player.name);
                      setIsEditingName(true);
                    }}
                    className="text-xs text-emerald-700 hover:underline"
                  >
                    (Ubah Nama)
                  </button>
                </div>
              )}
            </div>

            <p className="text-xs sm:text-sm font-semibold text-emerald-800 mt-0.5">
              Karakter: {activeChar.name} &bull; {activeChar.title}
            </p>
            <p className="text-xs text-slate-500 italic mt-1 max-w-md">
              "{activeChar.motto}"
            </p>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl mt-4 text-xs font-semibold text-slate-600">
          <button
            onClick={() => {
              sounds.playClick();
              setActiveTab('stats');
            }}
            className={`flex-1 py-1.5 rounded-lg transition-all ${
              activeTab === 'stats' ? 'bg-white text-emerald-900 shadow-2xs' : 'hover:text-slate-900'
            }`}
          >
            Statistik
          </button>
          <button
            onClick={() => {
              sounds.playClick();
              setActiveTab('badges');
            }}
            className={`flex-1 py-1.5 rounded-lg transition-all ${
              activeTab === 'badges' ? 'bg-white text-emerald-900 shadow-2xs' : 'hover:text-slate-900'
            }`}
          >
            Lencana ({player.badges.length}/{BADGES.length})
          </button>
          <button
            onClick={() => {
              sounds.playClick();
              setActiveTab('reflections');
            }}
            className={`flex-1 py-1.5 rounded-lg transition-all ${
              activeTab === 'reflections' ? 'bg-white text-emerald-900 shadow-2xs' : 'hover:text-slate-900'
            }`}
          >
            Jurnal ({player.reflections.length})
          </button>
          <button
            onClick={() => {
              sounds.playClick();
              setActiveTab('assessment');
            }}
            className={`flex-1 py-1.5 rounded-lg transition-all ${
              activeTab === 'assessment' ? 'bg-white text-emerald-900 shadow-2xs' : 'hover:text-slate-900'
            }`}
          >
            Asesmen
          </button>
        </div>

        {/* Tab 1: Stats */}
        {activeTab === 'stats' && (
          <div className="mt-5 space-y-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-center">
                <span className="text-xl block mb-0.5">⭐</span>
                <span className="text-xl font-bold text-amber-900 block tabular-nums">{player.stars}</span>
                <span className="text-[11px] text-amber-700">Bintang Kebaikan</span>
              </div>
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-center">
                <span className="text-xl block mb-0.5">⚡</span>
                <span className="text-xl font-bold text-emerald-900 block tabular-nums">{player.xp}</span>
                <span className="text-[11px] text-emerald-700">Poin Pengalaman</span>
              </div>
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-center">
                <span className="text-xl block mb-0.5">🗺️</span>
                <span className="text-xl font-bold text-blue-900 block tabular-nums">{player.unlockedWorld}/6</span>
                <span className="text-[11px] text-blue-700">Wilayah Terbuka</span>
              </div>
              <div className="p-3 bg-purple-50 border border-purple-200 rounded-xl text-center">
                <span className="text-xl block mb-0.5">🏅</span>
                <span className="text-xl font-bold text-purple-900 block tabular-nums">{player.completedWorlds.length}/6</span>
                <span className="text-[11px] text-purple-700">Dunia Tuntas</span>
              </div>
            </div>

            {/* Progress Bar of Completion */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
              <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                <span>Progress Petualangan Kurikulum Cinta</span>
                <span>{Math.round((player.completedWorlds.length / 6) * 100)}%</span>
              </div>
              <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-500"
                  style={{ width: `${(player.completedWorlds.length / 6) * 100}%` }}
                />
              </div>
              <p className="text-[11px] text-slate-500 mt-2">
                Selesaikan materi, mini-game, dan kuis di setiap wilayah untuk mengumpulkan semua Lencana Kurikulum Cinta.
              </p>
            </div>
          </div>
        )}

        {/* Tab 2: Badges */}
        {activeTab === 'badges' && (
          <div className="mt-5 space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {BADGES.map((b) => {
                const unlocked = hasBadge(b.id);
                return (
                  <div
                    key={b.id}
                    className={`p-3 rounded-xl border flex items-start gap-3 transition-all ${
                      unlocked
                        ? 'bg-amber-50/70 border-amber-300 shadow-2xs'
                        : 'bg-slate-50 border-slate-200 opacity-60'
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0 ${
                        unlocked ? 'bg-amber-100 text-amber-900' : 'bg-slate-200 text-slate-400'
                      }`}
                    >
                      {unlocked ? b.icon : <Lock className="w-4 h-4 text-slate-400" />}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-xs font-bold text-slate-900">{b.name}</h4>
                        {unlocked && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />}
                      </div>
                      <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">{b.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 3: Reflections */}
        {activeTab === 'reflections' && (
          <div className="mt-5 space-y-3">
            {player.reflections.length === 0 ? (
              <div className="p-8 text-center bg-slate-50 rounded-xl border border-dashed border-slate-300">
                <BookOpen className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                <p className="text-xs sm:text-sm font-semibold text-slate-700">Belum Ada Catatan Refleksi</p>
                <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                  Selesaikan eksplorasi di peta dunia dan tuliskan renungan hatimu pada sesi Refleksi Akhir Dunia!
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {player.reflections.map((r, idx) => (
                  <div key={idx} className="p-4 bg-emerald-50/50 border border-emerald-200 rounded-xl">
                    <div className="flex items-center justify-between text-[11px] font-semibold text-emerald-800 mb-1">
                      <span>{r.worldTitle}</span>
                      <span className="text-slate-500">{r.date}</span>
                    </div>
                    <p className="text-xs font-bold text-slate-800 mb-1">"{r.question}"</p>
                    <div className="p-2.5 bg-white rounded-lg border border-emerald-100 text-xs text-slate-700 italic">
                      "{r.answer}"
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 4: Assessment History */}
        {activeTab === 'assessment' && (
          <div className="mt-5 space-y-3">
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                <span className="font-bold text-slate-900 block">Pre-Test (Awal)</span>
                <span className="text-slate-600">
                  {player.preTestDone ? 'Sudah diselesaikan' : 'Belum dikerjakan'}
                </span>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                <span className="font-bold text-slate-900 block">Post-Test (Akhir)</span>
                <span className="text-slate-600">
                  {player.postTestDone ? 'Sudah diselesaikan' : 'Belum dikerjakan'}
                </span>
              </div>
            </div>

            {player.testResults.length === 0 ? (
              <p className="text-xs text-slate-500 text-center py-4">Belum ada riwayat tes.</p>
            ) : (
              <div className="space-y-2 mt-2">
                <h4 className="text-xs font-bold text-slate-800">Riwayat Ujian:</h4>
                {player.testResults.slice(0, 5).map((t, idx) => (
                  <div key={idx} className="p-3 bg-white border border-slate-200 rounded-lg flex items-center justify-between text-xs">
                    <div>
                      <span className="font-bold text-slate-900 capitalize block">
                        {t.type === 'pre-test' ? 'Asesmen Awal (Pre-Test)' : t.type === 'post-test' ? 'Asesmen Akhir (Post-Test)' : `Kuis Dunia ${t.worldId}`}
                      </span>
                      <span className="text-slate-500 text-[10px]">{t.timestamp}</span>
                    </div>
                    <div className="text-right">
                      <span className={`text-sm font-bold block ${t.score >= 75 ? 'text-emerald-700' : 'text-amber-700'}`}>
                        {t.score}%
                      </span>
                      <span className="text-[10px] text-slate-500">{t.correctAnswers}/{t.totalQuestions} Benar</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Footer & Danger Zone */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-3">
          {showResetConfirm ? (
            <div className="flex items-center gap-2">
              <span className="text-xs text-rose-700 font-semibold">Yakin reset semua?</span>
              <button
                onClick={handleConfirmReset}
                className="px-3 py-1.5 text-xs font-bold bg-rose-600 text-white rounded-lg hover:bg-rose-700"
              >
                Ya, Reset
              </button>
              <button
                onClick={() => setShowResetConfirm(false)}
                className="px-3 py-1.5 text-xs font-semibold bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300"
              >
                Batal
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowResetConfirm(true)}
              className="text-xs text-rose-600 hover:text-rose-800 flex items-center gap-1.5 py-1 px-2 hover:bg-rose-50 rounded-lg transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset Data Petualangan
            </button>
          )}

          <button
            onClick={() => {
              sounds.playClick();
              onClose();
            }}
            className="px-5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
