import React, { useEffect } from 'react';
import { useGame } from '../context/GameContext';
import { X, Sparkles, Star } from 'lucide-react';

export const NotificationToast: React.FC = () => {
  const { notification, clearNotification } = useGame();

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        clearNotification();
      }, 4500);
      return () => clearTimeout(timer);
    }
  }, [notification, clearNotification]);

  if (!notification) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 max-w-sm w-full bg-white/95 backdrop-blur-md border border-amber-300 rounded-2xl shadow-xl p-4 animate-in slide-in-from-bottom-5 duration-300">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-400 to-amber-200 text-amber-950 flex items-center justify-center shrink-0 text-xl shadow-xs animate-bounce-soft">
          {notification.icon || (notification.stars ? '⭐' : '✨')}
        </div>
        <div className="flex-1 pr-2">
          <div className="flex items-center gap-1.5">
            <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
              {notification.title}
            </h4>
            {notification.stars && (
              <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-1.5 py-0.5 rounded-full">
                +{notification.stars} Bintang
              </span>
            )}
          </div>
          <p className="text-xs text-slate-600 mt-1 leading-snug">
            {notification.message}
          </p>
        </div>
        <button
          onClick={clearNotification}
          className="text-slate-400 hover:text-slate-700 p-1 rounded-md"
          aria-label="Tutup Notifikasi"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
