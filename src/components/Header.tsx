import React from 'react';
import { ShieldCheck, WifiOff, HardDrive, Sparkles, Info, Sun, Moon } from 'lucide-react';
import { PWAInstallButton } from './PWAInstallButton';
import { useOnlineStatus } from '../hooks/useOnlineStatus';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  onOpenSettings: () => void;
  onNewAudit: () => void;
  onOpenAPropos?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSettings, onNewAudit, onOpenAPropos }) => {
  const isOnline = useOnlineStatus();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-30 bg-white/90 dark:bg-[#12202A]/90 backdrop-blur-md border-b border-slate-200 dark:border-[#1E3342] shadow-soft px-3 sm:px-4 py-2.5 transition-colors duration-200 no-print">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-2">
        {/* Logo and Moroccan Ministry / Hospital Identity */}
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#0F766E] to-[#115E59] flex items-center justify-center shadow-md shadow-teal-900/10 shrink-0 text-white font-bold border border-teal-400/20">
            <ShieldCheck className="w-5 h-5 text-white" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#0F766E] dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60 px-2 py-0.5 rounded-full border border-teal-200 dark:border-teal-800/60">
                ESSP Maroc
              </span>
              {!isOnline ? (
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/80 px-2 py-0.5 rounded-full border border-amber-200 dark:border-amber-800/60 animate-pulse">
                  <WifiOff className="w-3 h-3" />
                  Hors-ligne
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800/60">
                  <HardDrive className="w-3 h-3" />
                  Local 100%
                </span>
              )}
            </div>
            <h1 className="font-heading text-sm sm:text-base font-bold text-slate-900 dark:text-white truncate leading-tight mt-0.5">
              Sécurité Sanitaire ESSP
            </h1>
          </div>
        </div>

        {/* Right Actions: Theme Toggle, About, PWA, New Audit */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-500 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-[#172B38] border border-slate-200 dark:border-slate-700/60 transition active:scale-95"
            title={theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'}
            aria-label="Changer le thème d'affichage"
          >
            {theme === 'dark' ? (
              <Sun className="w-4.5 h-4.5 text-amber-400" />
            ) : (
              <Moon className="w-4.5 h-4.5 text-slate-600" />
            )}
          </button>

          {/* Info / À propos */}
          {onOpenAPropos && (
            <button
              onClick={onOpenAPropos}
              className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-500 dark:text-slate-300 hover:text-[#0F766E] dark:hover:text-teal-300 hover:bg-slate-100 dark:hover:bg-[#172B38] border border-slate-200 dark:border-slate-700/60 transition active:scale-95"
              title="À propos du Guide ESSP 2021"
              aria-label="À propos"
            >
              <Info className="w-4.5 h-4.5" />
            </button>
          )}

          <PWAInstallButton compact={true} />

          {/* New Audit Action */}
          <button
            onClick={onNewAudit}
            className="min-h-[40px] flex items-center gap-1.5 bg-[#0F766E] hover:bg-[#115E59] active:scale-95 text-white font-bold px-3 py-2 rounded-xl text-xs sm:text-sm shadow-md shadow-teal-900/10 transition"
            title="Démarrer un nouvel audit"
          >
            <Sparkles className="w-4 h-4 text-teal-200" />
            <span className="hidden xs:inline">Nouvel</span>
            <span>Audit</span>
          </button>
        </div>
      </div>
    </header>
  );
};
