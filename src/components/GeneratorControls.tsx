import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  Search, 
  BookMarked, 
  Flame, 
  RefreshCw, 
  CheckCheck,
  Atom,
  FlaskConical,
  Dna,
  HeartPulse,
  BookOpen,
  Zap,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { NEETSubject, AppMode } from '../types/neet';
import { NEET_COMPLETE_SYLLABUS, ChapterInfo } from '../data/neetSyllabus';
import { normalizeNCERTPage } from '../utils/ncertUtils';

interface GeneratorControlsProps {
  currentSubject: NEETSubject;
  currentTopic: string;
  currentMode: AppMode;
  onSubjectChange: (subject: NEETSubject) => void;
  onTopicSelect: (topic: string, ncertClass?: string) => void;
  onGenerateMCQs: (subject: NEETSubject, topic: string, classLevel?: string, questionTypes?: string) => void;
  onLoadCurated: (subject: NEETSubject) => void;
  isLoading: boolean;
  isBackgroundLoading?: boolean;
}

export const GeneratorControls: React.FC<GeneratorControlsProps> = ({
  currentSubject,
  currentTopic,
  currentMode,
  onSubjectChange,
  onTopicSelect,
  onGenerateMCQs,
  onLoadCurated,
  isLoading,
  isBackgroundLoading = false,
}) => {
  const [customTopic, setCustomTopic] = useState('');
  const [selectedClass, setSelectedClass] = useState<'Class 11' | 'Class 12'>('Class 12');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFormat, setSelectedFormat] = useState<string>('Standard NEET Mix (Statements, A-R, Direct Lines)');

  const subjects: { id: NEETSubject; label: string; icon: any; color: string; border: string; bg: string }[] = [
    { id: 'Botany', label: 'Botany', icon: Dna, color: 'text-emerald-700', border: 'border-emerald-400', bg: 'bg-emerald-50' },
    { id: 'Zoology', label: 'Zoology', icon: HeartPulse, color: 'text-rose-700', border: 'border-rose-400', bg: 'bg-rose-50' },
    { id: 'Physics', label: 'Physics', icon: Atom, color: 'text-sky-700', border: 'border-sky-400', bg: 'bg-sky-50' },
    { id: 'Chemistry', label: 'Chemistry', icon: FlaskConical, color: 'text-amber-700', border: 'border-amber-400', bg: 'bg-amber-50' },
  ];

  const allSubjectChapters: ChapterInfo[] = NEET_COMPLETE_SYLLABUS[currentSubject] || [];

  // Filter by selected Class tab and search query
  const filteredChapters = useMemo(() => {
    return allSubjectChapters.filter((ch) => {
      const matchesClass = ch.ncertClass === selectedClass;
      if (!matchesClass) return false;
      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const inName = ch.name.toLowerCase().includes(q);
      const inUnit = ch.unit.toLowerCase().includes(q);
      const inSections = ch.sections.some(s => s.toLowerCase().includes(q));
      return inName || inUnit || inSections;
    });
  }, [allSubjectChapters, selectedClass, searchQuery]);

  const handleChapterClick = (ch: ChapterInfo) => {
    onTopicSelect(ch.name, ch.ncertClass);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xs border border-slate-200/90 p-4 sm:p-6 mb-6">
      {/* Subject Pill Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Step 1: Choose Subject
            </span>
            <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              100% Official NCERT Syllabus
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {subjects.map((s) => {
              const Icon = s.icon;
              const isActive = currentSubject === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => onSubjectChange(s.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-bold transition-all ${
                    isActive
                      ? `${s.bg} ${s.color} border-2 ${s.border} shadow-xs scale-102`
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{s.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Quick zero-latency actions */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => onLoadCurated(currentSubject)}
            disabled={isLoading}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition-colors shadow-2xs"
            title="Instantly loads verified 30 questions with 0 latency"
          >
            <CheckCheck className="w-4 h-4 text-emerald-600" />
            <span>Load Curated {currentSubject} Set</span>
          </button>
        </div>
      </div>

      {/* Class 11 and Class 12 Syllabus Browser */}
      <div className="pt-4">
        {/* Class Tabs & Search Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wide flex items-center gap-1">
              <BookMarked className="w-4 h-4 text-emerald-600" />
              Official Curriculum:
            </span>

            {/* Clear Class 11 and Class 12 Toggle Tabs */}
            <div className="inline-flex rounded-xl bg-slate-100 p-1 border border-slate-200">
              <button
                onClick={() => setSelectedClass('Class 11')}
                className={`px-3.5 py-1 text-xs font-extrabold rounded-lg transition-all ${
                  selectedClass === 'Class 11'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                NCERT Class 11
              </button>
              <button
                onClick={() => setSelectedClass('Class 12')}
                className={`px-3.5 py-1 text-xs font-extrabold rounded-lg transition-all ${
                  selectedClass === 'Class 12'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                NCERT Class 12
              </button>
            </div>
          </div>

          {/* Search bar across chapters and subtopics */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search ${currentSubject} ${selectedClass} chapters or sections...`}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white"
            />
          </div>
        </div>

        {/* Complete Syllabus Chapters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 max-h-56 overflow-y-auto pr-1 py-1 mb-4">
          {filteredChapters.map((ch) => {
            const isSelected = currentTopic.toLowerCase() === ch.name.toLowerCase();
            return (
              <button
                key={ch.name}
                onClick={() => handleChapterClick(ch)}
                className={`text-left p-2.5 rounded-xl border transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs ring-2 ring-emerald-500/20'
                    : 'bg-slate-50/70 hover:bg-slate-100 text-slate-800 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-start justify-between gap-1 mb-1">
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                    isSelected ? 'bg-emerald-700 text-emerald-100' : 'bg-slate-200 text-slate-700'
                  }`}>
                    Ch {ch.chapterNumber.toString().padStart(2, '0')}
                  </span>
                  
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-0.5 ${
                    ch.weightage === 'Very High' 
                      ? isSelected ? 'bg-amber-400 text-amber-950' : 'bg-amber-100 text-amber-800'
                      : isSelected ? 'bg-emerald-700 text-emerald-100' : 'bg-slate-200 text-slate-600'
                  }`}>
                    {ch.weightage === 'Very High' && <Flame className="w-2.5 h-2.5" />}
                    <span>{ch.typicalQuestions}</span>
                  </span>
                </div>

                <div className="font-bold text-xs line-clamp-1 mb-0.5">
                  {ch.name}
                </div>

                <div className={`text-[10px] line-clamp-1 ${
                  isSelected ? 'text-emerald-100' : 'text-slate-500'
                }`}>
                  {ch.unit} • {normalizeNCERTPage(ch.pageRange)}
                </div>
              </button>
            );
          })}
        </div>

        {/* NCERT Question Type Filters */}
        <div className="mb-3.5 p-3 rounded-xl bg-slate-50/80 border border-slate-200 flex flex-wrap items-center justify-between gap-2.5">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wide flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>NCERT Question Types:</span>
            </span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {[
              { id: 'All Types (Standard NEET Mix)', label: 'All Question Types', color: 'bg-emerald-600 text-white' },
              { id: 'Verbatim NCERT Line', label: 'Verbatim NCERT Line', color: 'bg-teal-700 text-white' },
              { id: 'Assertion-Reason', label: 'Assertion-Reason', color: 'bg-purple-700 text-white' },
              { id: 'Match the Following', label: 'Match the Following', color: 'bg-sky-700 text-white' },
              { id: 'Diagram/Statement Based', label: 'Diagram/Statement Based', color: 'bg-amber-700 text-white' },
            ].map((type) => {
              const isSelected = selectedFormat.includes(type.id) || (type.id.startsWith('All') && selectedFormat.includes('Standard'));
              return (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setSelectedFormat(type.id)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-extrabold transition-all border cursor-pointer ${
                    isSelected
                      ? `${type.color} shadow-xs border-transparent`
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                  }`}
                >
                  {type.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Action Panel: Selected Topic & Progressive Generation Engine */}
        <div className="bg-slate-50 p-3.5 sm:p-4 rounded-xl border border-slate-200 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-semibold text-slate-500">Selected Chapter:</span>
              <span className="text-xs font-extrabold text-slate-900 bg-white px-2.5 py-1 rounded-lg border border-slate-300 shadow-2xs">
                {currentTopic}
              </span>
              <span className="text-[11px] font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md border border-teal-200">
                {selectedClass}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600">
              <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                <Zap className="w-3.5 h-3.5" />
                <span>Instant 15+15 Split:</span>
              </span>
              <span>Practice Mode loads Q1–Q15; Exam Mode tests with unseen Q16–Q30 (15:00 min clock, 60 marks).</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                const targetTopic = customTopic.trim() || currentTopic;
                onGenerateMCQs(
                  currentSubject, 
                  targetTopic, 
                  selectedClass, 
                  selectedFormat
                );
              }}
              disabled={isLoading}
              className="py-2.5 px-5 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2 transition-all disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
            >
              {isLoading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-white" />
                  <span>Loading Questions (0s)...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-emerald-200" />
                  <span>Start 15-MCQ {currentMode === 'exam' ? 'Exam Mock (15 Mins)' : 'Practice Set'}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
