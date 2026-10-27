import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { CHARACTERS } from '../data/gameData';
import { CharacterId } from '../types/game';
import { Check, Sparkles, Heart, ArrowRight, ArrowLeft } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface CharacterSelectProps {
  onBack: () => void;
  onContinue: () => void;
}

export const CharacterSelect: React.FC<CharacterSelectProps> = ({ onBack, onContinue }) => {
  const { player, selectCharacter } = useGame();
  const [selectedId, setSelectedId] = useState<CharacterId>(player.characterId);
  const [playerName, setPlayerName] = useState<string>(player.name);

  const handleSelect = (id: CharacterId) => {
    sounds.playClick();
    setSelectedId(id);
  };

  const handleConfirm = () => {
    selectCharacter(selectedId, playerName);
    onContinue();
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8 pb-16">
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
            Halaman 2 &bull; Karakter Penjelajah
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            PILIH KARAKTERMU
          </h2>
        </div>

        <div className="w-16" />
      </div>

      {/* Name Input Card */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-amber-200/80 shadow-xs max-w-xl mx-auto text-center">
        <label htmlFor="student-name" className="block text-xs sm:text-sm font-bold text-slate-800 mb-2">
          Masukkan Nama Panggilanmu:
        </label>
        <div className="flex items-center justify-center gap-2">
          <input
            id="student-name"
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            placeholder="Contoh: Farhan / Maryam"
            maxLength={25}
            className="w-full max-w-md px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 font-medium text-slate-900 text-sm sm:text-base text-center"
          />
        </div>
        <p className="text-[11px] text-slate-500 mt-2">
          Nama ini akan muncul pada sertifikat kelulusan dan profil petualangmu!
        </p>
      </div>

      {/* 4 Character Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {CHARACTERS.map((char) => {
          const isSelected = selectedId === char.id;

          return (
            <div
              key={char.id}
              onClick={() => handleSelect(char.id)}
              className={`rounded-2xl p-5 border-2 cursor-pointer transition-all duration-200 text-left flex flex-col justify-between relative overflow-hidden ${
                isSelected
                  ? 'bg-emerald-50/80 border-emerald-500 shadow-md ring-2 ring-emerald-500/20 transform scale-[1.02]'
                  : 'bg-white border-slate-200 hover:border-emerald-300 hover:shadow-xs'
              }`}
            >
              {isSelected && (
                <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
              )}

              <div>
                {/* Character Avatar */}
                <div className="w-24 h-24 mx-auto mb-4 relative">
                  <img
                    src={char.avatar}
                    alt={char.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full rounded-2xl object-cover border-2 border-emerald-400 shadow-sm"
                  />
                  <div className="absolute -bottom-1 -right-1 text-base">⭐</div>
                </div>

                <div className="text-center mb-3">
                  <h3 className="text-lg font-black text-slate-900">{char.name}</h3>
                  <span className="text-xs font-semibold text-emerald-700 block">
                    {char.title}
                  </span>
                </div>

                <p className="text-xs text-slate-600 text-center leading-relaxed mb-4">
                  {char.bio}
                </p>

                <div className="space-y-2 border-t border-slate-100 pt-3 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Karakter:</span>
                    <span className="font-semibold text-slate-800">{char.trait}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Nilai Cinta:</span>
                    <span className="font-semibold text-emerald-800">{char.favoriteValue}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 text-center">
                <span className="text-[11px] italic text-slate-500 block">
                  "{char.motto}"
                </span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelect(char.id);
                  }}
                  className={`mt-3 w-full py-2 text-xs font-bold rounded-xl transition-colors ${
                    isSelected
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-emerald-100 hover:text-emerald-900'
                  }`}
                >
                  {isSelected ? 'Karakter Terpilih' : 'Pilih Karakter'}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Confirmation CTA */}
      <div className="flex justify-center pt-4">
        <button
          onClick={handleConfirm}
          className="px-8 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-base rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2 transform hover:-translate-y-0.5"
        >
          <span>Konfirmasi & Buka Peta Dunia</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
