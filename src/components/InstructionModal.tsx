import React from 'react';
import { X, Heart, Star, Sparkles, BookOpen, Trophy, ShieldCheck, MapPin } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface InstructionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartAdventure: () => void;
}

export const InstructionModal: React.FC<InstructionModalProps> = ({
  isOpen,
  onClose,
  onStartAdventure,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-amber-200 shadow-2xl p-6 sm:p-8 relative">
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

        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center text-xl">
            🧭
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Petunjuk Petualangan Cinta
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Panduan Menjadi Penjelajah Cinta Al-Qur'an dan Hadis Kelas IV MI/SD
            </p>
          </div>
        </div>

        <div className="space-y-6 text-sm text-slate-700 mt-4 leading-relaxed">
          {/* Konsep Kurikulum Cinta */}
          <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl">
            <h3 className="font-bold text-emerald-950 flex items-center gap-2 mb-2 text-sm sm:text-base">
              <Heart className="w-4 h-4 text-emerald-700" />
              Apa Itu Kurikulum Cinta?
            </h3>
            <p className="text-xs sm:text-sm text-emerald-900/90">
              Belajar Al-Qur'an dan Hadis bukan sekadar menghafal, melainkan menumbuhkan rasa cinta sejati:
              cinta kepada Allah dan Rasul, cinta Al-Qur'an, cinta diri sendiri, kasih sayang kepada sesama,
              menjaga alam semesta, dan mencintai tanah air Indonesia.
            </p>
          </div>

          {/* 6 Dunia Petualangan */}
          <div>
            <h3 className="font-bold text-slate-900 flex items-center gap-2 mb-3 text-sm sm:text-base">
              <MapPin className="w-4 h-4 text-emerald-600" />
              6 Wilayah Pembelajaran
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              <div className="p-3 bg-amber-50/60 border border-amber-100 rounded-lg">
                <span className="font-bold text-amber-950 block">1. Dunia Al-Qur'an</span>
                <span>QS. At-Tin & Al-Insyirah (Kemuliaan ciptaan & optimisme)</span>
              </div>
              <div className="p-3 bg-blue-50/60 border border-blue-100 rounded-lg">
                <span className="font-bold text-blue-950 block">2. Dunia Hadis</span>
                <span>Hadis Niat Ikhlas & Taqwa di mana pun berada</span>
              </div>
              <div className="p-3 bg-indigo-50/60 border border-indigo-100 rounded-lg">
                <span className="font-bold text-indigo-950 block">3. Dunia Akhlak</span>
                <span>Kejujuran (As-Sidq) & Berbakti pada Orang Tua</span>
              </div>
              <div className="p-3 bg-rose-50/60 border border-rose-100 rounded-lg">
                <span className="font-bold text-rose-950 block">4. Dunia Sahabat</span>
                <span>Kasih sayang sesama, toleransi, & ukhuwah</span>
              </div>
              <div className="p-3 bg-teal-50/60 border border-teal-100 rounded-lg">
                <span className="font-bold text-teal-950 block">5. Dunia Lingkungan</span>
                <span>Kebersihan sebagian dari iman & sedekah merawat pohon</span>
              </div>
              <div className="p-3 bg-amber-50/80 border border-amber-200 rounded-lg">
                <span className="font-bold text-amber-950 block">6. Dunia Cinta & Kepedulian</span>
                <span>Rahmatan lil 'Alamin, cinta bangsa & gotong royong</span>
              </div>
            </div>
          </div>

          {/* Langkah Aktivitas di Setiap Dunia */}
          <div>
            <h3 className="font-bold text-slate-900 flex items-center gap-2 mb-3 text-sm sm:text-base">
              <BookOpen className="w-4 h-4 text-emerald-600" />
              Tahapan Belajar di Setiap Dunia
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-xs sm:text-sm text-slate-600">
              <li>
                <strong className="text-slate-800">Materi Visual:</strong> Pelajari kartu ringkas berharakat dengan makna dan pesan cinta aplikatif.
              </li>
              <li>
                <strong className="text-slate-800">6 Macam Mini-Game:</strong> Susun Ayat, Cocokkan Pasangan, Pilih Sikap, Memory Card, Benar/Salah, dan Misi Kebaikan Harian.
              </li>
              <li>
                <strong className="text-slate-800">Kuis Dunia:</strong> Uji pemahaman dengan 5 pertanyaan bergambar untuk membuka dunia berikutnya.
              </li>
              <li>
                <strong className="text-slate-800">Refleksi Hati:</strong> Tuliskan tekad kebaikanmu di jurnal petualangan.
              </li>
              <li>
                <strong className="text-slate-800">Reward:</strong> Kumpulkan Bintang Kebaikan ⭐, XP ⚡, dan Lencana Kehormatan 🏅!
              </li>
            </ol>
          </div>

          {/* Sistem Skor & Kurikulum Cinta */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
            <h3 className="font-bold text-slate-900 flex items-center gap-2 mb-2 text-sm sm:text-base">
              <Trophy className="w-4 h-4 text-amber-600" />
              Sistem Bintang Kebaikan
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Game ini tidak mengutamakan persaingan keras, melainkan mengapresiasi setiap tindakan jujur,
              kasih sayang, dan kepedulian yang kamu pilih. Semakin banyak kamu membantu sesama dan menjaga lingkungan,
              semakin bersinar Bintang Kebaikanmu!
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-end border-t border-slate-100 pt-4">
          <button
            onClick={() => {
              sounds.playClick();
              onClose();
            }}
            className="px-5 py-2.5 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
          >
            Tutup Petunjuk
          </button>
          <button
            onClick={() => {
              sounds.playVictory();
              onClose();
              onStartAdventure();
            }}
            className="px-6 py-2.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
          >
            <span>Mulai Petualangan</span>
            <Sparkles className="w-4 h-4 text-amber-200" />
          </button>
        </div>
      </div>
    </div>
  );
};
