import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { Heart, Sparkles, BookOpen, X, Check, Star } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface ReflectionModalProps {
  isOpen: boolean;
  worldId: number;
  worldTitle: string;
  question: string;
  promptText: string;
  onClose: () => void;
  onSaved: () => void;
}

export const ReflectionModal: React.FC<ReflectionModalProps> = ({
  isOpen,
  worldId,
  worldTitle,
  question,
  promptText,
  onClose,
  onSaved,
}) => {
  const { player, saveReflection } = useGame();
  const existingLog = player.reflections.find((r) => r.worldId === worldId);
  const [reflectionText, setReflectionText] = useState(existingLog?.answer || '');
  const [isSaved, setIsSaved] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reflectionText.trim()) return;

    saveReflection(worldId, worldTitle, question, reflectionText);
    setIsSaved(true);
    setTimeout(() => {
      onSaved();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/65 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-lg w-full max-h-[92vh] overflow-y-auto border border-amber-200 shadow-2xl p-6 sm:p-8 relative">
        <button
          onClick={() => {
            sounds.playClick();
            onClose();
          }}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
          aria-label="Tutup Refleksi"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-2 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center text-2xl mx-auto shadow-2xs">
            <Heart className="w-7 h-7 text-rose-600 fill-rose-600" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-rose-800 block">
            Refleksi Hati &bull; Wilayah {worldId}
          </span>
          <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
            Renungan Kasih Sayang Penjelajah
          </h3>
          <p className="text-xs text-slate-600">
            Hubungkan ilmu Al-Qur'an dan Hadis dengan perbuatan nyata dalam kehidupanmu.
          </p>
        </div>

        {/* Reflection Prompt Box */}
        <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-2xl mb-4 text-left">
          <span className="text-[11px] font-bold text-amber-900 block mb-1">
            Pertanyaan Reflektif:
          </span>
          <p className="text-sm font-bold text-slate-900 leading-relaxed">
            "{question}"
          </p>
          <p className="text-xs text-slate-600 mt-2 italic">
            Petunjuk: {promptText}
          </p>
        </div>

        {/* Text Input Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="reflection-input" className="block text-xs font-bold text-slate-700 mb-1.5 text-left">
              Tuliskan Jawaban dan Tekad Kebaikanmu:
            </label>
            <textarea
              id="reflection-input"
              rows={4}
              value={reflectionText}
              onChange={(e) => setReflectionText(e.target.value)}
              placeholder="Contoh: Hari ini saya berjanji akan menyapa teman dengan senyum ramah, tidak mengejek siapapun, dan membantu ibu mencuci piring..."
              required
              className="w-full p-3.5 text-xs sm:text-sm border border-slate-300 rounded-2xl focus:outline-hidden focus:ring-2 focus:ring-emerald-500 font-medium text-slate-900"
            />
          </div>

          <div className="flex items-center justify-between text-xs text-slate-500">
            <span className="flex items-center gap-1 font-semibold text-amber-800">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              Hadiah: +2 Bintang Kebaikan & Jurnal Tersimpan
            </span>
          </div>

          <div className="pt-2 flex gap-3">
            <button
              type="button"
              onClick={() => {
                sounds.playClick();
                onClose();
              }}
              className="w-1/2 py-2.5 text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
            >
              Nanti Saja
            </button>

            <button
              type="submit"
              disabled={!reflectionText.trim() || isSaved}
              className={`w-1/2 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white shadow-md transition-all flex items-center justify-center gap-1.5 ${
                isSaved
                  ? 'bg-emerald-600'
                  : !reflectionText.trim()
                  ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                  : 'bg-emerald-600 hover:bg-emerald-700'
              }`}
            >
              {isSaved ? (
                <>
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>Tersimpan!</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-amber-200" />
                  <span>Simpan ke Jurnal</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
