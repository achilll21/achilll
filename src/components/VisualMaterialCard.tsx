import React, { useState, useEffect } from 'react';
import { MaterialCard } from '../types/game';
import { useGame } from '../context/GameContext';
import { BookOpen, Sparkles, Heart, CheckCircle2, ChevronRight, ChevronLeft, Volume2 } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface VisualMaterialCardProps {
  materials: MaterialCard[];
  worldTitle: string;
  worldImage?: string;
  onOpenDetailedExplanation?: () => void;
}

export const VisualMaterialCard: React.FC<VisualMaterialCardProps> = ({
  materials,
  worldTitle,
  worldImage,
  onOpenDetailedExplanation,
}) => {
  const { unlockAchievement } = useGame();
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const current = materials[activeCardIndex] || materials[0];

  useEffect(() => {
    if (current?.id === 'mat_1_1') {
      unlockAchievement('ach_quran_ahsani');
    } else if (current?.id === 'mat_5_2') {
      unlockAchievement('ach_lingkungan_pohon');
    } else if (current?.id === 'mat_6_1') {
      unlockAchievement('ach_cinta_rahmat');
    }
  }, [current, unlockAchievement]);

  const handleNext = () => {
    sounds.playClick();
    if (activeCardIndex < materials.length - 1) {
      setActiveCardIndex((i) => i + 1);
    }
  };

  const handlePrev = () => {
    sounds.playClick();
    if (activeCardIndex > 0) {
      setActiveCardIndex((i) => i - 1);
    }
  };

  const handlePlayVoice = () => {
    sounds.playClick();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      // Read Arabic text or Indonesian translation cleanly
      const textToRead = current.translation;
      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.lang = 'id-ID';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="space-y-6">
      {/* Tab Selector of Material Cards */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {materials.map((mat, idx) => (
          <button
            key={mat.id}
            onClick={() => {
              sounds.playClick();
              setActiveCardIndex(idx);
            }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
              activeCardIndex === idx
                ? 'bg-emerald-700 text-white shadow-sm'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-emerald-50'
            }`}
          >
            <span>Kartu {idx + 1}: {mat.title}</span>
          </button>
        ))}
      </div>

      {/* Visual Flashcard Container */}
      <div className="bg-white rounded-3xl border-2 border-amber-200/90 shadow-md p-6 sm:p-8 space-y-6 relative overflow-hidden">
        {/* Decorative backdrop thumbnail */}
        {worldImage && (
          <div className="relative h-28 sm:h-36 -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 mb-6 overflow-hidden rounded-t-3xl">
            <img
              src={worldImage}
              alt={current.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-slate-900/30" />
            <div className="absolute bottom-3 left-6 sm:left-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-700/90 text-white text-xs font-bold shadow-xs">
                <span>📖</span>
                <span>{current.theme}</span>
              </span>
            </div>
          </div>
        )}

        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-36 h-36 bg-amber-200/20 rounded-full blur-2xl pointer-events-none" />

        {/* Card Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
          <div>
            {!worldImage && (
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 text-[11px] font-bold mb-1">
                <span>📖</span>
                <span>{current.theme}</span>
              </div>
            )}
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              {current.title}
            </h3>
          </div>

          <button
            onClick={handlePlayVoice}
            className="self-start sm:self-center px-3.5 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 rounded-xl text-xs font-bold flex items-center gap-2 transition-colors shadow-2xs"
            title="Dengarkan terjemahan dan pesan"
          >
            <Volume2 className="w-4 h-4 text-emerald-600 animate-gentle-pulse" />
            <span>Dengarkan Terjemahan</span>
          </button>
        </div>

        {/* Arabic Calligraphy Display Box */}
        {current.arabicText && (
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-amber-50/70 via-white to-emerald-50/40 border border-amber-200 text-center space-y-3 shadow-2xs">
            <p
              dir="rtl"
              className="text-2xl sm:text-3xl lg:text-4xl font-arabic text-emerald-950 font-bold leading-relaxed tracking-wide select-all"
            >
              {current.arabicText}
            </p>
            {current.transliteration && (
              <p className="text-xs sm:text-sm text-emerald-800/80 font-medium italic">
                "{current.transliteration}"
              </p>
            )}
            <div className="p-3 bg-white/90 rounded-xl border border-amber-200/80 text-xs sm:text-sm text-slate-800 font-semibold max-w-xl mx-auto">
              "{current.translation}"
            </div>
          </div>
        )}

        {/* Point-by-Point Visual Insights (No long paragraphs!) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {current.explanation.map((point, i) => (
            <div
              key={i}
              className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-start gap-3"
            >
              <div className="w-6 h-6 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                {i + 1}
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-snug font-medium">
                {point}
              </p>
            </div>
          ))}
        </div>

        {/* Kurikulum Cinta & Practical Action Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {/* Nilai Cinta */}
          <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200 flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center text-lg shrink-0">
              <Heart className="w-5 h-5 text-rose-600 fill-rose-600" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-rose-900 uppercase tracking-wide block">
                Nilai Kurikulum Cinta:
              </span>
              <p className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5">
                {current.cintaValue}
              </p>
            </div>
          </div>

          {/* Aksi Kebaikan Nyata Hari Ini */}
          <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center text-lg shrink-0">
              <CheckCircle2 className="w-5 h-5 text-emerald-700" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-emerald-900 uppercase tracking-wide block">
                Aksi Kebaikan Nyatamu:
              </span>
              <p className="text-xs sm:text-sm text-slate-800 font-medium mt-0.5 leading-snug">
                {current.dailyAction}
              </p>
            </div>
          </div>
        </div>

        {/* CTA to Full Chapter Deep Explanation */}
        {onOpenDetailedExplanation && (
          <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-emerald-500/10 to-teal-500/10 border-2 border-dashed border-emerald-300 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-2xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-xs">
                📖
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                  Ingin Mempelajari Tafsir, Mufrodat & Cerita Hikmah Lengkap?
                </h4>
                <p className="text-[11px] text-slate-600">
                  Tersedia asbabun nuzul, bedah makna ayat demi ayat, kamus kosa kata Arab, dan tanya-jawab seru!
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                sounds.playClick();
                onOpenDetailedExplanation();
              }}
              className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl shadow-xs transition-transform transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-1.5 shrink-0"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Buka Penjelasan Lengkap</span>
            </button>
          </div>
        )}

        {/* Card Navigation Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <button
            onClick={handlePrev}
            disabled={activeCardIndex === 0}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors ${
              activeCardIndex === 0
                ? 'text-slate-300 bg-slate-100 cursor-not-allowed'
                : 'text-slate-700 bg-slate-100 hover:bg-slate-200'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Kartu Sebelumnya</span>
          </button>

          <span className="text-xs font-semibold text-slate-500">
            {activeCardIndex + 1} dari {materials.length} Kartu
          </span>

          <button
            onClick={handleNext}
            disabled={activeCardIndex === materials.length - 1}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors ${
              activeCardIndex === materials.length - 1
                ? 'text-slate-300 bg-slate-100 cursor-not-allowed'
                : 'text-white bg-emerald-600 hover:bg-emerald-700'
            }`}
          >
            <span>Kartu Selanjutnya</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
