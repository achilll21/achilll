import React, { useState } from 'react';
import { World, MaterialCard, VocabularyItem } from '../types/game';
import {
  BookOpen,
  Volume2,
  CheckCircle2,
  Sparkles,
  Heart,
  HelpCircle,
  Award,
  Layers,
  Flame,
  Globe,
  Share2,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface ChapterExplanationViewProps {
  world: World;
  onBackToFlashcard?: () => void;
}

export const ChapterExplanationView: React.FC<ChapterExplanationViewProps> = ({
  world,
  onBackToFlashcard,
}) => {
  const [selectedMaterialIdx, setSelectedMaterialIdx] = useState(0);
  const [activeSection, setActiveSection] = useState<'tafsir' | 'mufradat' | 'cinta' | 'faq'>('tafsir');
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const currentMat: MaterialCard = world.materials[selectedMaterialIdx] || world.materials[0];
  const detail = currentMat.detailedExplanation;

  const handlePlayAudio = (text: string) => {
    sounds.playClick();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'id-ID';
      utterance.rate = 0.88;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Chapter Overview Banner */}
      <div className="bg-gradient-to-br from-amber-500/10 via-emerald-500/10 to-teal-500/10 border-2 border-emerald-300/80 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-xs">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-300/20 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative z-10">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800 text-amber-200 text-xs font-bold shadow-xs">
              <span>📖 Modul Penjelasan Lengkap</span>
              <span>&bull;</span>
              <span>Bab {world.id} &bull; Fase B Kelas IV MI/SD</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900">
              {world.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 max-w-2xl leading-relaxed">
              {world.chapterSummary?.keyConcept || world.description}
            </p>
          </div>

          {onBackToFlashcard && (
            <button
              onClick={() => {
                sounds.playClick();
                onBackToFlashcard();
              }}
              className="px-4 py-2 bg-white hover:bg-emerald-50 text-emerald-800 border border-emerald-300 font-bold text-xs rounded-xl shadow-xs transition-colors shrink-0"
            >
              &larr; Kembali ke Kartu Kilas
            </button>
          )}
        </div>

        {/* Chapter Learning Goals */}
        {world.chapterSummary && (
          <div className="mt-5 pt-4 border-t border-emerald-200/80">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 block mb-2">
              🎯 Tujuan Pembelajaran Bab {world.id}:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
              {world.chapterSummary.learningGoals.map((goal, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-white/90 border border-emerald-200 rounded-xl flex items-start gap-2 shadow-2xs"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-slate-800 font-medium leading-snug">{goal}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Material Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {world.materials.map((mat, idx) => (
          <button
            key={mat.id}
            onClick={() => {
              sounds.playClick();
              setSelectedMaterialIdx(idx);
            }}
            className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
              selectedMaterialIdx === idx
                ? 'bg-emerald-800 text-white shadow-md ring-2 ring-emerald-500/30'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-emerald-50'
            }`}
          >
            <span>Materi {idx + 1}:</span>
            <span>{mat.title}</span>
          </button>
        ))}
      </div>

      {/* Main Material Detail Container */}
      <div className="bg-white rounded-3xl border-2 border-emerald-200/80 shadow-sm p-6 sm:p-8 space-y-6">
        {/* Header of Active Material */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
          <div>
            <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider block">
              Sub-Materi {selectedMaterialIdx + 1}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-0.5">
              {currentMat.title}
            </h3>
            <span className="text-xs font-semibold text-slate-500">
              Tema: {currentMat.theme}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handlePlayAudio(`${currentMat.title}. ${currentMat.translation}`)}
              className="px-3.5 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 rounded-xl text-xs font-bold flex items-center gap-2 transition-colors shadow-2xs"
            >
              <Volume2 className="w-4 h-4 text-emerald-600 animate-gentle-pulse" />
              <span>Dengarkan Pembacaan</span>
            </button>
          </div>
        </div>

        {/* Big Arabic Display Card */}
        {currentMat.arabicText && (
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-amber-50/80 via-white to-emerald-50/50 border border-amber-200 text-center space-y-3 shadow-xs">
            <p
              dir="rtl"
              className="text-2xl sm:text-3xl lg:text-4xl font-arabic text-emerald-950 font-bold leading-relaxed tracking-wide select-all"
            >
              {currentMat.arabicText}
            </p>
            {currentMat.transliteration && (
              <p className="text-xs sm:text-sm text-emerald-800 font-semibold italic">
                "{currentMat.transliteration}"
              </p>
            )}
            <div className="p-3.5 bg-white rounded-xl border border-amber-200/90 text-xs sm:text-sm text-slate-800 font-medium max-w-2xl mx-auto shadow-2xs">
              <strong className="text-emerald-900 block mb-0.5">Artinya:</strong>
              "{currentMat.translation}"
            </div>
          </div>
        )}

        {/* Section Navigation Tabs within Material */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-2xl text-xs font-bold text-slate-600">
          <button
            onClick={() => {
              sounds.playClick();
              setActiveSection('tafsir');
            }}
            className={`flex-1 py-2 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
              activeSection === 'tafsir'
                ? 'bg-white text-emerald-950 shadow-xs'
                : 'hover:text-slate-900'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
            <span>Tafsir & Penjelasan</span>
          </button>
          <button
            onClick={() => {
              sounds.playClick();
              setActiveSection('mufradat');
            }}
            className={`flex-1 py-2 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
              activeSection === 'mufradat'
                ? 'bg-white text-emerald-950 shadow-xs'
                : 'hover:text-slate-900'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-amber-600" />
            <span>Kosa Kata (Mufradat)</span>
          </button>
          <button
            onClick={() => {
              sounds.playClick();
              setActiveSection('cinta');
            }}
            className={`flex-1 py-2 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
              activeSection === 'cinta'
                ? 'bg-white text-emerald-950 shadow-xs'
                : 'hover:text-slate-900'
            }`}
          >
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>Kurikulum Cinta</span>
          </button>
          <button
            onClick={() => {
              sounds.playClick();
              setActiveSection('faq');
            }}
            className={`flex-1 py-2 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
              activeSection === 'faq'
                ? 'bg-white text-emerald-950 shadow-xs'
                : 'hover:text-slate-900'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            <span>Tanya Jawab & Fakta</span>
          </button>
        </div>

        {/* Section 1: Tafsir & Penjelasan Mendalam */}
        {activeSection === 'tafsir' && (
          <div className="space-y-5 animate-in fade-in duration-200">
            {/* Latar Belakang / Asbabun Nuzul */}
            {detail?.background && (
              <div className="p-5 bg-amber-50/60 border border-amber-200 rounded-2xl space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-base">📜</span>
                  <h4 className="text-xs sm:text-sm font-bold text-amber-950">
                    Latar Belakang & Konteks Pembelajaran:
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {detail.background}
                </p>
              </div>
            )}

            {/* Tafsir Kalimat per Kalimat */}
            {detail?.tafsirAndMeaning && detail.tafsirAndMeaning.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  <span>Uraian & Penjelasan Makna Mendalam:</span>
                </h4>
                <div className="space-y-3">
                  {detail.tafsirAndMeaning.map((point, i) => (
                    <div
                      key={i}
                      className="p-4 bg-slate-50 border border-slate-200/80 rounded-2xl flex items-start gap-3.5"
                    >
                      <span className="w-6 h-6 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Intisari Pelajaran / Core Lessons */}
            {detail?.coreLessons && detail.coreLessons.length > 0 && (
              <div className="p-5 bg-emerald-50/70 border border-emerald-200 rounded-2xl space-y-3">
                <h4 className="text-xs sm:text-sm font-bold text-emerald-950 flex items-center gap-2">
                  <Award className="w-4 h-4 text-emerald-700" />
                  <span>Intisari Pelajaran Utama (Hikmah Bab):</span>
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                  {detail.coreLessons.map((lesson, i) => (
                    <li
                      key={i}
                      className="p-3 bg-white rounded-xl border border-emerald-200 flex items-start gap-2 text-slate-800"
                    >
                      <span className="text-emerald-600 font-bold">&bull;</span>
                      <span className="font-medium leading-snug">{lesson}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Section 2: Mufradat / Kosa Kata Kunci */}
        {activeSection === 'mufradat' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                Kamus Kosa Kata Kunci (Mufradat Arab):
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Pelajari lafadz kata-kata Arab kunci dalam bab ini beserta cara baca dan artinya.
              </p>
            </div>

            {detail?.vocabulary && detail.vocabulary.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {detail.vocabulary.map((vocab, i) => (
                  <div
                    key={i}
                    onClick={() => handlePlayAudio(`${vocab.meaning}`)}
                    className="p-4 bg-white border-2 border-slate-200 hover:border-emerald-400 hover:shadow-xs rounded-2xl space-y-1.5 transition-all cursor-pointer group"
                    title="Klik untuk dengarkan arti"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                        Kata {i + 1}
                      </span>
                      <Volume2 className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600 transition-colors" />
                    </div>
                    <p
                      dir="rtl"
                      className="text-xl sm:text-2xl font-arabic text-emerald-950 font-bold py-1 text-right"
                    >
                      {vocab.arabic}
                    </p>
                    <div className="border-t border-slate-100 pt-1.5">
                      <span className="text-xs font-semibold text-emerald-800 block italic">
                        {vocab.transliteration}
                      </span>
                      <span className="text-xs font-bold text-slate-800 block mt-0.5">
                        = {vocab.meaning}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-slate-500 italic py-4">Kosa kata belum tersedia.</p>
            )}
          </div>
        )}

        {/* Section 3: Penerapan Kurikulum Cinta */}
        {activeSection === 'cinta' && (
          <div className="space-y-5 animate-in fade-in duration-200">
            <div className="p-5 bg-gradient-to-r from-rose-50 to-amber-50 border border-rose-200 rounded-2xl flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center text-2xl shrink-0 shadow-2xs">
                <Heart className="w-6 h-6 text-rose-600 fill-rose-600" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-rose-900">
                  Nilai Kurikulum Cinta Terintegrasi
                </span>
                <h4 className="text-base sm:text-lg font-black text-slate-900">
                  {currentMat.cintaValue}
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {currentMat.dailyAction}
                </p>
              </div>
            </div>

            {/* Aksi Nyata Berkelanjutan */}
            {detail?.cintaApplication && detail.cintaApplication.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                  Langkah Pembiasaan Sikap Sehari-Hari:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {detail.cintaApplication.map((app, i) => (
                    <div
                      key={i}
                      className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                        {app}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Section 4: Tanya Jawab & Fakta Unik (FAQ Cilik) */}
        {activeSection === 'faq' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                Tanya Jawab & Fakta Menarik (Tadabur Cilik):
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Pertanyaan yang sering muncul dari sahabat-sahabat kelas IV dan penjelasannya.
              </p>
            </div>

            {detail?.faqOrFunFact && detail.faqOrFunFact.length > 0 ? (
              <div className="space-y-3">
                {detail.faqOrFunFact.map((faq, i) => {
                  const isOpen = openFaqIdx === i;
                  return (
                    <div
                      key={i}
                      className="border border-slate-200 rounded-2xl overflow-hidden transition-all bg-white"
                    >
                      <button
                        onClick={() => {
                          sounds.playClick();
                          setOpenFaqIdx(isOpen ? null : i);
                        }}
                        className="w-full p-4 text-left flex items-center justify-between gap-3 bg-slate-50/80 hover:bg-slate-100 transition-colors cursor-pointer"
                      >
                        <span className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                          <HelpCircle className="w-4 h-4 text-blue-600 shrink-0" />
                          <span>{faq.question}</span>
                        </span>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-slate-500 shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="p-4 bg-white border-t border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed animate-in fade-in duration-150">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-xs text-slate-500 italic py-4">Tanya jawab belum tersedia.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
