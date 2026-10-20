import React from 'react';
import { 
  BookOpen, 
  Clock, 
  Award, 
  FileCode, 
  Bookmark, 
  CheckCircle2, 
  Sparkles, 
  User, 
  LogOut, 
  Crown,
  Volume2,
  VolumeX,
  Sun,
  Moon,
  ShieldCheck
} from 'lucide-react';
import { AppMode, NEETSubject } from '../types/neet';
import { StudentSession } from './EntryLockScreen';
import { MedicalCaduceusLogo } from './MedicalCaduceusLogo';

interface HeaderProps {
  currentMode: AppMode;
  setMode: (mode: AppMode) => void;
  subject: NEETSubject | string;
  topic: string;
  totalQuestions: number;
  bookmarkedCount: number;
  timeRemaining?: number;
  onOpenJson: () => void;
  student?: StudentSession | null;
  onLogout?: () => void;
  isDarkMode?: boolean;
  onToggleDarkMode?: () => void;
  isSoundEnabled?: boolean;
  onToggleSound?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentMode,
  setMode,
  subject,
  topic,
  totalQuestions,
  bookmarkedCount,
  timeRemaining,
  onOpenJson,
  student,
  onLogout,
  isDarkMode = false,
  onToggleDarkMode,
  isSoundEnabled = true,
  onToggleSound,
}) => {
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    if (hours > 0) {
      return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getSubjectColor = (subj: string) => {
    switch (subj) {
      case 'Botany':
        return 'bg-emerald-500/10 text-emerald-700 border-emerald-300';
      case 'Zoology':
        return 'bg-rose-500/10 text-rose-700 border-rose-300';
      case 'Physics':
        return 'bg-sky-500/10 text-sky-700 border-sky-300';
      case 'Chemistry':
        return 'bg-amber-500/10 text-amber-700 border-amber-300';
      default:
        return 'bg-teal-500/10 text-teal-700 border-teal-300';
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-3">
          {/* Logo & Official Medical Caduceus Identity */}
          <div className="flex items-center gap-3 shrink-0">
            <MedicalCaduceusLogo className="w-10 h-10 sm:w-12 sm:h-12" />
            <div>
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span className="text-base sm:text-lg lg:text-xl font-black tracking-tight text-slate-900">
                  NEET <span className="text-emerald-600">Mastery</span>
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-extrabold bg-emerald-100 text-emerald-900 border border-emerald-300">
                  <ShieldCheck className="w-3 h-3 text-emerald-700" />
                  <span>NTA Standard CBT • 100% NCERT Verified</span>
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden md:block">
                Authentic Medical Entrance Simulation • Stethoscope &amp; DNA Line-Grounded System
              </p>
            </div>
          </div>

          {/* Active Context Banner */}
          <div className="hidden xl:flex items-center gap-2">
            <span className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${getSubjectColor(subject)}`}>
              {subject}
            </span>
            <span className="text-xs font-semibold text-slate-600 max-w-xs truncate bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200">
              {topic}
            </span>
            <span className="text-xs font-semibold text-slate-500 bg-slate-50 px-2 py-1 rounded-md border border-slate-200">
              {totalQuestions} MCQs
            </span>
          </div>

          {/* Action Navigation & Accessibility Controls */}
          <div className="flex items-center gap-1 sm:gap-2">
            {/* 15:00 Timer in Exam Mode */}
            {currentMode === 'exam' && timeRemaining !== undefined && (
              <div 
                className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl font-mono text-xs sm:text-sm font-extrabold border shadow-2xs ${
                  timeRemaining < 120 
                    ? 'bg-rose-50 text-rose-700 border-rose-300 animate-pulse' 
                    : 'bg-amber-50 text-amber-900 border-amber-300'
                }`}
                title="Strict NTA 15:00 Timer (15 Questions / 15 Minutes / 60 Marks)"
              >
                <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                <span className="hidden sm:inline text-[11px] font-sans font-bold text-amber-700">Exam:</span>
                <span>{formatTime(timeRemaining)}</span>
              </div>
            )}

            {/* Practice Mode Tab */}
            <button
              onClick={() => setMode('practice')}
              className={`px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
                currentMode === 'practice'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
              title="Practice Mode: Learn with instant NCERT explanations (Questions 1 to 15)"
            >
              <BookOpen className="w-4 h-4" />
              <span className="hidden md:inline">Practice (1–15)</span>
              <span className="md:hidden">Learn</span>
            </button>

            {/* Exam Mode Tab */}
            <button
              onClick={() => setMode('exam')}
              className={`px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
                currentMode === 'exam'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
              title="Exam Mode: 15-Minute Timed Mock with NEET OMR Sheet (Unseen Questions 16 to 30)"
            >
              <Award className="w-4 h-4" />
              <span className="hidden md:inline">Exam Mock (16–30)</span>
              <span className="md:hidden">Mock</span>
            </button>

            {/* NCERT Pages Citation Tab */}
            <button
              onClick={() => setMode('ncert_map')}
              className={`px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
                currentMode === 'ncert_map'
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
              title="View all verified NCERT textbook page citations"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span className="hidden lg:inline">NCERT Pages</span>
            </button>

            {/* Mistakes & Bookmarks Notebook */}
            <button
              onClick={() => setMode('mistakes')}
              className={`px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
                currentMode === 'mistakes'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
              title="Mistake & Bookmarks Notebook"
            >
              <Bookmark className="w-4 h-4" />
              <span className="hidden lg:inline">Notebook</span>
              {bookmarkedCount > 0 && (
                <span className="w-4 h-4 rounded-full bg-amber-500 text-white text-[10px] flex items-center justify-center font-bold">
                  {bookmarkedCount}
                </span>
              )}
            </button>

            {/* JSON Export */}
            <button
              onClick={onOpenJson}
              className="px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer"
              title="View & Export strict JSON format requested"
            >
              <FileCode className="w-4 h-4 text-emerald-400" />
              <span>JSON</span>
            </button>

            {/* Accessibility Controls: Sound & Dark Mode */}
            <div className="flex items-center gap-1 pl-1.5 border-l border-slate-200">
              {onToggleSound && (
                <button
                  onClick={onToggleSound}
                  className={`p-1.5 sm:p-2 rounded-xl border transition-all cursor-pointer ${
                    isSoundEnabled
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-300 hover:bg-emerald-100'
                      : 'bg-slate-100 text-slate-400 border-slate-200 hover:bg-slate-200'
                  }`}
                  title={isSoundEnabled ? 'Audio Cues: Enabled (OMR Click & 2-Min Chime)' : 'Audio Cues: Muted'}
                >
                  {isSoundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                </button>
              )}

              {onToggleDarkMode && (
                <button
                  onClick={onToggleDarkMode}
                  className="p-1.5 sm:p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition-all cursor-pointer"
                  title={isDarkMode ? 'Switch to Light Theme' : 'Eye-Saver / Dark Study Mode'}
                >
                  {isDarkMode ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4 text-slate-600" />}
                </button>
              )}
            </div>

            {/* Candidate Session Pill & Logout */}
            {student && (
              <div className="flex items-center gap-1.5 pl-1.5 border-l border-slate-200">
                {student.isOwner || student.contact?.toLowerCase() === 'sabarimeiyappan594@gmail.com' ? (
                  <div 
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-amber-50 border border-amber-300 text-xs font-black text-amber-950 shadow-2xs"
                    title="Sabari Meiyappan M (VIT Vellore) — Platform Owner & Lead Developer"
                  >
                    <Crown className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span className="hidden sm:inline">Sabari Meiyappan M (VIT Vellore)</span>
                    <span className="sm:hidden">Owner</span>
                    <span className="text-[10px] bg-amber-200 text-amber-900 px-1.5 py-0.2 rounded-md font-extrabold uppercase">Lead Dev</span>
                  </div>
                ) : (
                  <div 
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-100 border border-slate-200 text-xs font-bold text-slate-800"
                    title={`Logged in as ${student.name} (${student.contact})`}
                  >
                    <User className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="max-w-[80px] sm:max-w-[120px] truncate">{student.name}</span>
                  </div>
                )}
                {onLogout && (
                  <button
                    onClick={onLogout}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                    title="Sign Out / Switch Candidate"
                  >
                    <LogOut className="w-4 h-4" />
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
