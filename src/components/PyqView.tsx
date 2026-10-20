import React, { useState, useMemo, useEffect } from 'react';
import { 
  Award, 
  Search, 
  Filter, 
  BookOpen, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Quote, 
  Sparkles, 
  Clock, 
  Layers,
  GraduationCap,
  FileText,
  Bookmark,
  CheckSquare,
  ArrowRight,
  TrendingUp,
  ChevronRight,
  HelpCircle,
  BellRing,
  X,
  Target,
  BarChart3
} from 'lucide-react';
import { NEETSubject } from '../types/neet';
import { 
  AVAILABLE_PYQ_YEARS, 
  getPYQPaper, 
  getFullOfficial180Paper,
  getChapterWisePYQs, 
  PYQQuestion, 
  PYQPaper,
  FullOfficial180Paper 
} from '../data/pyq';
import { NEET_COMPLETE_SYLLABUS } from '../data/neetSyllabus';
import { normalizeNCERTPage, formatNCERTCitationHeader, getNCERTSectionHeading } from '../utils/ncertUtils';

interface PyqViewProps {
  onBackToPractice: () => void;
}

type PYQSubMode = 'full_paper' | 'chapter_wise';
type SubjectFilterTab = 'ALL' | NEETSubject;

// PYQ Full Official Paper Mode: Strictly set timer to 180:00 MINUTES (3 Hours for complete 180 questions)
const FULL_PAPER_DURATION = 180 * 60; // 180:00 Minutes (10,800 seconds)

export const PyqView: React.FC<PyqViewProps> = ({ onBackToPractice }) => {
  const [subMode, setSubMode] = useState<PYQSubMode>('full_paper');

  // --- Full Paper Mode State ---
  const [selectedYear, setSelectedYear] = useState<string>('NEET 2024');
  const [paperTabFilter, setPaperTabFilter] = useState<SubjectFilterTab>('ALL');
  
  // Full 180-Question Paper Engine
  const [fullPaper, setFullPaper] = useState<FullOfficial180Paper>(() => 
    getFullOfficial180Paper('NEET 2024')
  );
  
  const [paperAnswers, setPaperAnswers] = useState<Record<number, 'A' | 'B' | 'C' | 'D'>>({});
  const [isPaperSubmitted, setIsPaperSubmitted] = useState<boolean>(false);
  const [paperTimerSeconds, setPaperTimerSeconds] = useState<number>(FULL_PAPER_DURATION);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [activeQuestionNumber, setActiveQuestionNumber] = useState<number>(1);
  const [pacingAlert, setPacingAlert] = useState<{ elapsedStr: string; remainingStr: string; tip: string } | null>(null);

  // --- Chapter-wise Mode State ---
  const [chapterSubject, setChapterSubject] = useState<NEETSubject>('Botany');
  const [selectedChapter, setSelectedChapter] = useState<string>('All Chapters');
  const [chapterAnswers, setChapterAnswers] = useState<Record<number, 'A' | 'B' | 'C' | 'D'>>({});
  const [searchQuery, setSearchQuery] = useState<string>('');

  const subjectsList: NEETSubject[] = ['Physics', 'Chemistry', 'Botany', 'Zoology'];

  // Sync active paper when year changes
  useEffect(() => {
    const paper = getFullOfficial180Paper(selectedYear);
    setFullPaper(paper);
    setPaperAnswers({});
    setIsPaperSubmitted(false);
    setActiveQuestionNumber(1);
    setPaperTimerSeconds(FULL_PAPER_DURATION);
    setIsTimerRunning(false);
    setPacingAlert(null);
  }, [selectedYear]);

  // Paper timer effect with 30-minute interval pacing alerts
  // Countdown runs from 180:00 (10,800s) down to 00:00
  useEffect(() => {
    let timer: any;
    if (isTimerRunning && !isPaperSubmitted && paperTimerSeconds > 0) {
      timer = setInterval(() => {
        setPaperTimerSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setIsPaperSubmitted(true);
            setIsTimerRunning(false);
            return 0;
          }
          const next = prev - 1;

          // 30-minute pacing alerts strictly calculated for 180:00 total clock:
          // 2h 30m remaining (9000s) -> 30 mins elapsed
          if (next === 9000) {
            setPacingAlert({
              elapsedStr: '30 Minutes Elapsed',
              remainingStr: '2 Hours 30 Mins Remaining',
              tip: 'Pacing Check: Ideal milestone to complete your first subject (Botany or Zoology) and transfer bubbles.'
            });
          } else if (next === 7200) { // 2h 00m remaining -> 60 mins (1h) elapsed
            setPacingAlert({
              elapsedStr: '1 Hour Elapsed',
              remainingStr: '2 Hours Remaining',
              tip: 'Pacing Check: You should have completed Biology (90 Questions) and be transitioning to Chemistry.'
            });
          } else if (next === 5400) { // 1h 30m remaining -> 90 mins (1h 30m) elapsed
            setPacingAlert({
              elapsedStr: '1 Hour 30 Mins Elapsed',
              remainingStr: '1 Hour 30 Mins Remaining',
              tip: 'Halfway Milestone! Ideal time to transition into Physics numerical problems and calculations.'
            });
          } else if (next === 3600) { // 1h 00m remaining -> 120 mins (2h) elapsed
            setPacingAlert({
              elapsedStr: '2 Hours Elapsed',
              remainingStr: '1 Hour Remaining',
              tip: 'Final Hour Alert: Complete Section B optional choices across subjects and review marked items.'
            });
          } else if (next === 1800) { // 30m remaining -> 150 mins (2h 30m) elapsed
            setPacingAlert({
              elapsedStr: '2 Hours 30 Mins Elapsed',
              remainingStr: '30 Minutes Remaining',
              tip: 'Final 30-Minute Sprint! Check unattempted bubbles and ensure negative marking risk is managed.'
            });
          } else if (next === 600) { // 10m remaining -> 170 mins elapsed
            setPacingAlert({
              elapsedStr: '2 Hours 50 Mins Elapsed',
              remainingStr: '10 Minutes Remaining',
              tip: 'Final 10 Minutes! Verify all 180 OMR bubble selections before paper auto-submission!'
            });
          }

          return next;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isTimerRunning, isPaperSubmitted, paperTimerSeconds]);

  const formatTimer = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    if (hours > 0) {
      return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Questions to display based on active subject tab filter
  const displayedQuestions = useMemo(() => {
    if (paperTabFilter === 'ALL') return fullPaper.questions;
    if (paperTabFilter === 'Physics') return fullPaper.physics;
    if (paperTabFilter === 'Chemistry') return fullPaper.chemistry;
    if (paperTabFilter === 'Botany') return fullPaper.botany;
    if (paperTabFilter === 'Zoology') return fullPaper.zoology;
    return fullPaper.questions;
  }, [fullPaper, paperTabFilter]);

  // Available chapters for the selected subject
  const availableChapters = useMemo(() => {
    const chapters = NEET_COMPLETE_SYLLABUS[chapterSubject] || [];
    return ['All Chapters', ...chapters.map(c => c.name)];
  }, [chapterSubject]);

  // Questions for Chapter-wise PYQ - dynamically provides rich authentic set
  const chapterWiseQuestions = useMemo(() => {
    const list = getChapterWisePYQs(chapterSubject, selectedChapter);
    if (!searchQuery.trim()) return list;

    const q = searchQuery.toLowerCase();
    return list.filter(item => 
      item.question.toLowerCase().includes(q) ||
      item.explanation.toLowerCase().includes(q) ||
      item.ncert_reference.chapter.toLowerCase().includes(q) ||
      (item.pyq_year && item.pyq_year.toLowerCase().includes(q))
    );
  }, [chapterSubject, selectedChapter, searchQuery]);

  // Complete NEET Scoring breakdown for Full Paper (180 questions, 720 Marks)
  const fullPaperStats = useMemo(() => {
    let totalCorrect = 0;
    let totalIncorrect = 0;

    const calcSubject = (qList: PYQQuestion[]) => {
      let c = 0;
      let inc = 0;
      qList.forEach(q => {
        const chosen = paperAnswers[q.question_number];
        if (chosen) {
          if (chosen === q.correct_answer) c++;
          else inc++;
        }
      });
      const score = c * 4 - inc * 1;
      return { correct: c, incorrect: inc, attempted: c + inc, score, maxScore: qList.length * 4 };
    };

    const physicsStats = calcSubject(fullPaper.physics);
    const chemStats = calcSubject(fullPaper.chemistry);
    const botanyStats = calcSubject(fullPaper.botany);
    const zoologyStats = calcSubject(fullPaper.zoology);

    totalCorrect = physicsStats.correct + chemStats.correct + botanyStats.correct + zoologyStats.correct;
    totalIncorrect = physicsStats.incorrect + chemStats.incorrect + botanyStats.incorrect + zoologyStats.incorrect;
    const attempted = Object.keys(paperAnswers).length;
    const totalScore = totalCorrect * 4 - totalIncorrect * 1;

    return {
      attempted,
      totalCorrect,
      totalIncorrect,
      totalScore,
      maxScore: 720,
      physics: physicsStats,
      chemistry: chemStats,
      botany: botanyStats,
      zoology: zoologyStats,
    };
  }, [fullPaper, paperAnswers]);

  const handleSelectPaperOption = (qNum: number, opt: 'A' | 'B' | 'C' | 'D') => {
    if (isPaperSubmitted) return;
    setPaperAnswers(prev => ({
      ...prev,
      [qNum]: opt
    }));
  };

  const handleSelectChapterOption = (globalIdx: number, opt: 'A' | 'B' | 'C' | 'D') => {
    setChapterAnswers(prev => ({
      ...prev,
      [globalIdx]: opt
    }));
  };

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-slate-200/90 p-5 sm:p-8 mb-8 animate-fade-in">
      {/* 30-Minute Interval Pacing Alert Banner */}
      {pacingAlert && (
        <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 text-slate-950 font-sans shadow-md border border-amber-400 animate-slide-down flex items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-slate-950 text-amber-300 flex items-center justify-center shrink-0 mt-0.5">
              <BellRing className="w-5 h-5 animate-bounce" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase tracking-wider bg-slate-950 text-white px-2 py-0.5 rounded-md">
                  30-Min Pacing Alert
                </span>
                <span className="text-xs font-extrabold text-slate-950">
                  {pacingAlert.elapsedStr} • {pacingAlert.remainingStr}
                </span>
              </div>
              <p className="text-xs text-slate-950 font-semibold mt-1">
                {pacingAlert.tip}
              </p>
            </div>
          </div>
          <button
            onClick={() => setPacingAlert(null)}
            className="p-1.5 rounded-lg bg-black/10 hover:bg-black/20 text-slate-950 transition-colors cursor-pointer"
            title="Dismiss alert"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Header section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-2xs">
              NEET Archives (Past 12 Years: 2013 – 2025)
            </span>
            <span className="text-xs font-bold text-slate-500 font-mono">
              180 Questions • 180 Minutes Clock
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight flex items-center gap-2.5">
            <Award className="w-7 h-7 text-amber-500" />
            <span>NEET Past Year Papers (PYQ Bank)</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl font-medium">
            Solve complete official 180-question NEET question papers with the official 180:00 timer, or explore past questions chapter-by-chapter with verified single NCERT pages.
          </p>
        </div>

        <button
          onClick={onBackToPractice}
          className="self-start md:self-auto px-4 py-2 text-xs sm:text-sm font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition-all cursor-pointer border border-slate-300"
        >
          Back to Chapter Practice
        </button>
      </div>

      {/* Mode Toggle Bar: Full Paper vs Chapter-wise */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 border-b border-slate-100">
        <div className="flex items-center gap-2 p-1.5 bg-slate-100/90 rounded-2xl max-w-md w-full border border-slate-200">
          <button
            onClick={() => setSubMode('full_paper')}
            className={`flex-1 py-2 px-4 rounded-xl text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 transition-all cursor-pointer ${
              subMode === 'full_paper'
                ? 'bg-white text-slate-950 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <FileText className={`w-4 h-4 ${subMode === 'full_paper' ? 'text-indigo-600' : 'text-slate-400'}`} />
            <span>Full Paper Mode (180 Qs)</span>
          </button>

          <button
            onClick={() => setSubMode('chapter_wise')}
            className={`flex-1 py-2 px-4 rounded-xl text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 transition-all cursor-pointer ${
              subMode === 'chapter_wise'
                ? 'bg-white text-slate-950 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <BookOpen className={`w-4 h-4 ${subMode === 'chapter_wise' ? 'text-amber-600' : 'text-slate-400'}`} />
            <span>Chapter-wise PYQ</span>
          </button>
        </div>

        <div className="text-xs text-slate-500 font-semibold flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>
            {subMode === 'full_paper'
              ? 'Complete official 180 questions (45 Physics, 45 Chemistry, 45 Botany, 45 Zoology) • 180:00 Timer'
              : 'Explore all past questions organized by NCERT syllabus with verified textbook pages'}
          </span>
        </div>
      </div>

      {/* ========================================================= */}
      {/* MODE 1: FULL OFFICIAL PAPER MODE (180 Questions = 180 Mins) */}
      {/* ========================================================= */}
      {subMode === 'full_paper' && (
        <div className="pt-4 space-y-6">
          {/* Controls: Year Selector & Subject Tab Filter */}
          <div className="space-y-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
            {/* Year Selector Pills (Past 12 Years) */}
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" /> Select Official Exam Year (Past 12 Years: 2013 – 2025):
              </span>
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full flex-wrap">
                {AVAILABLE_PYQ_YEARS.map((yr) => (
                  <button
                    key={yr}
                    onClick={() => setSelectedYear(yr)}
                    className={`px-3 py-1.5 text-xs font-extrabold rounded-xl transition-all cursor-pointer shrink-0 ${
                      selectedYear === yr
                        ? 'bg-indigo-600 text-white shadow-xs ring-2 ring-indigo-500/20'
                        : 'bg-white hover:bg-slate-200 text-slate-700 border border-slate-200'
                    }`}
                  >
                    {yr}
                  </button>
                ))}
              </div>
            </div>

            {/* Subject Tabs Navigation across 180 Questions */}
            <div className="flex items-center gap-2 pt-2 border-t border-slate-200 flex-wrap">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1">Section:</span>
              
              <button
                onClick={() => setPaperTabFilter('ALL')}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                  paperTabFilter === 'ALL'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white hover:bg-slate-200 text-slate-700 border border-slate-200'
                }`}
              >
                <span>All 180 Questions</span>
                <span className="text-[10px] bg-slate-700 text-white px-1.5 py-0.2 rounded font-mono">180</span>
              </button>

              <button
                onClick={() => setPaperTabFilter('Physics')}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                  paperTabFilter === 'Physics'
                    ? 'bg-sky-600 text-white shadow-xs'
                    : 'bg-white hover:bg-sky-50 text-slate-700 border border-slate-200'
                }`}
              >
                <span>Physics (Q1–45)</span>
                <span className="text-[10px] bg-sky-700 text-white px-1.5 py-0.2 rounded font-mono">45</span>
              </button>

              <button
                onClick={() => setPaperTabFilter('Chemistry')}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                  paperTabFilter === 'Chemistry'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'bg-white hover:bg-amber-50 text-slate-700 border border-slate-200'
                }`}
              >
                <span>Chemistry (Q46–90)</span>
                <span className="text-[10px] bg-amber-700 text-white px-1.5 py-0.2 rounded font-mono">45</span>
              </button>

              <button
                onClick={() => setPaperTabFilter('Botany')}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                  paperTabFilter === 'Botany'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-white hover:bg-emerald-50 text-slate-700 border border-slate-200'
                }`}
              >
                <span>Botany (Q91–135)</span>
                <span className="text-[10px] bg-emerald-700 text-white px-1.5 py-0.2 rounded font-mono">45</span>
              </button>

              <button
                onClick={() => setPaperTabFilter('Zoology')}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                  paperTabFilter === 'Zoology'
                    ? 'bg-rose-600 text-white shadow-xs'
                    : 'bg-white hover:bg-rose-50 text-slate-700 border border-slate-200'
                }`}
              >
                <span>Zoology (Q136–180)</span>
                <span className="text-[10px] bg-rose-700 text-white px-1.5 py-0.2 rounded font-mono">45</span>
              </button>
            </div>
          </div>

          {/* Active Paper Banner & Timer Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-4 sm:p-5 rounded-2xl shadow-sm">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-amber-400 text-slate-950">
                  {fullPaper.yearLabel}
                </span>
                <span className="text-xs text-indigo-300 font-bold">
                  Complete Official NEET Paper (Total 180 Questions)
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-black text-white mt-1">
                45 Physics • 45 Chemistry • 45 Botany • 45 Zoology = 720 Marks
              </h3>
              <span className="text-xs text-slate-400">
                Official NEET Marking: +4 for Correct • -1 for Incorrect • 0 Unattempted
              </span>
            </div>

            {/* Timer & Submission Action (Strictly 180:00 Countdown) */}
            <div className="flex items-center gap-3">
              <div className="bg-slate-800/90 border border-slate-700 px-3.5 py-2 rounded-xl text-center">
                <span className="text-[10px] font-bold uppercase text-slate-400 block">Strict 180:00 Timer</span>
                <span className={`font-mono text-sm sm:text-base font-extrabold ${paperTimerSeconds < 600 ? 'text-rose-400 animate-pulse' : 'text-amber-300'}`}>
                  {formatTimer(paperTimerSeconds)}
                </span>
              </div>

              {!isPaperSubmitted ? (
                <div className="flex gap-2">
                  {!isTimerRunning ? (
                    <button
                      onClick={() => setIsTimerRunning(true)}
                      className="px-3.5 py-2 text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl transition-colors cursor-pointer"
                    >
                      Start 3-Hour Exam
                    </button>
                  ) : (
                    <button
                      onClick={() => setIsTimerRunning(false)}
                      className="px-3 py-2 text-xs font-semibold bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-xl transition-colors cursor-pointer"
                    >
                      Pause
                    </button>
                  )}
                  <button
                    onClick={() => {
                      setIsPaperSubmitted(true);
                      setIsTimerRunning(false);
                    }}
                    className="px-4 py-2 text-xs font-black bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 rounded-xl transition-all shadow-md cursor-pointer"
                  >
                    Submit 180-Q Paper
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    setPaperAnswers({});
                    setIsPaperSubmitted(false);
                    setPaperTimerSeconds(FULL_PAPER_DURATION);
                    setIsTimerRunning(false);
                    setPacingAlert(null);
                  }}
                  className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold bg-slate-700 hover:bg-slate-600 text-white rounded-xl transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake Full Paper</span>
                </button>
              )}
            </div>
          </div>

          {/* Submitted Score Summary Card */}
          {isPaperSubmitted && (
            <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50 via-teal-50 to-slate-50 border-2 border-emerald-400 shadow-sm animate-fade-in space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-emerald-200">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-black text-slate-900">
                      Official 180-Question Scorecard: {fullPaperStats.totalScore} / 720 Marks
                    </h4>
                    <span className="text-xs text-slate-600">
                      Accuracy: {fullPaperStats.attempted > 0 ? Math.round((fullPaperStats.totalCorrect / fullPaperStats.attempted) * 100) : 0}% • Attempted: {fullPaperStats.attempted} of 180 questions
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-bold flex-wrap">
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-800 border border-emerald-300">
                    +{fullPaperStats.totalCorrect} Correct (+{fullPaperStats.totalCorrect * 4})
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-rose-100 text-rose-800 border border-rose-300">
                    -{fullPaperStats.totalIncorrect} Incorrect (-{fullPaperStats.totalIncorrect})
                  </span>
                </div>
              </div>

              {/* Subject Breakdown Grid (Physics /180, Chem /180, Botany /180, Zoology /180) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                <div className="bg-white p-3 rounded-xl border border-sky-200">
                  <span className="text-[11px] font-bold text-sky-800 uppercase block">Physics (Q1–45)</span>
                  <span className="text-base font-black text-slate-900">{fullPaperStats.physics.score} / 180</span>
                  <span className="text-[11px] text-slate-500 block">{fullPaperStats.physics.correct} Correct • {fullPaperStats.physics.incorrect} Wrong</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-amber-200">
                  <span className="text-[11px] font-bold text-amber-800 uppercase block">Chemistry (Q46–90)</span>
                  <span className="text-base font-black text-slate-900">{fullPaperStats.chemistry.score} / 180</span>
                  <span className="text-[11px] text-slate-500 block">{fullPaperStats.chemistry.correct} Correct • {fullPaperStats.chemistry.incorrect} Wrong</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-emerald-200">
                  <span className="text-[11px] font-bold text-emerald-800 uppercase block">Botany (Q91–135)</span>
                  <span className="text-base font-black text-slate-900">{fullPaperStats.botany.score} / 180</span>
                  <span className="text-[11px] text-slate-500 block">{fullPaperStats.botany.correct} Correct • {fullPaperStats.botany.incorrect} Wrong</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-rose-200">
                  <span className="text-[11px] font-bold text-rose-800 uppercase block">Zoology (Q136–180)</span>
                  <span className="text-base font-black text-slate-900">{fullPaperStats.zoology.score} / 180</span>
                  <span className="text-[11px] text-slate-500 block">{fullPaperStats.zoology.correct} Correct • {fullPaperStats.zoology.incorrect} Wrong</span>
                </div>
              </div>
            </div>
          )}

          {/* Quick Question Jump Palette */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase text-slate-600 flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5 text-indigo-600" />
                Question Palette ({displayedQuestions.length} Questions Displayed):
              </span>
              <span className="text-[11px] text-slate-500">
                Click any number to jump to question
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto p-1">
              {displayedQuestions.map((q) => {
                const ans = paperAnswers[q.question_number];
                const isAnswered = ans !== undefined;
                const isCurrent = activeQuestionNumber === q.question_number;

                let btnClass = 'bg-white text-slate-700 border-slate-300';
                if (isPaperSubmitted) {
                  if (ans === q.correct_answer) btnClass = 'bg-emerald-600 text-white border-emerald-700';
                  else if (isAnswered) btnClass = 'bg-rose-600 text-white border-rose-700';
                  else btnClass = 'bg-slate-200 text-slate-500 border-slate-300';
                } else if (isAnswered) {
                  btnClass = 'bg-indigo-600 text-white border-indigo-700 font-bold';
                }

                return (
                  <button
                    key={q.question_number}
                    onClick={() => {
                      setActiveQuestionNumber(q.question_number);
                      const el = document.getElementById(`pyq-q-${q.question_number}`);
                      el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }}
                    className={`w-7 h-7 text-xs rounded-lg border font-mono transition-all cursor-pointer flex items-center justify-center ${btnClass} ${
                      isCurrent ? 'ring-2 ring-amber-400 font-black scale-105' : ''
                    }`}
                  >
                    {q.question_number}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Questions Stream for Full Paper */}
          <div className="space-y-6">
            {displayedQuestions.map((q) => {
              const userAnswer = paperAnswers[q.question_number];
              const hasAnswered = userAnswer !== undefined;
              const isCorrect = userAnswer === q.correct_answer;

              return (
                <div
                  key={q.question_number}
                  id={`pyq-q-${q.question_number}`}
                  className={`p-5 sm:p-6 rounded-2xl border transition-all ${
                    !isPaperSubmitted
                      ? 'bg-white border-slate-200 shadow-2xs hover:border-slate-300'
                      : isCorrect
                      ? 'bg-emerald-50/40 border-emerald-300 shadow-xs'
                      : hasAnswered
                      ? 'bg-rose-50/40 border-rose-300 shadow-xs'
                      : 'bg-slate-50/80 border-slate-200'
                  }`}
                >
                  {/* Question Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-lg bg-slate-900 text-white font-bold text-xs flex items-center justify-center">
                        Q{q.question_number}
                      </span>

                      {q.subject && (
                        <span className={`text-xs font-extrabold px-2.5 py-0.5 rounded-md border ${
                          q.subject === 'Physics' ? 'bg-sky-50 text-sky-800 border-sky-300'
                          : q.subject === 'Chemistry' ? 'bg-amber-50 text-amber-900 border-amber-300'
                          : q.subject === 'Botany' ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                          : 'bg-rose-50 text-rose-800 border-rose-300'
                        }`}>
                          {q.subject}
                        </span>
                      )}

                      {q.section && (
                        <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-200">
                          {q.section}
                        </span>
                      )}

                      <span className="text-xs font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200">
                        {q.pyq_year || selectedYear}
                      </span>

                      {q.question_type && (
                        <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
                          {q.question_type}
                        </span>
                      )}
                    </div>

                    {/* Verified Citation Badge with EXACT SINGLE PAGE NUMBER */}
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-teal-50 border border-teal-200 text-teal-900 text-xs font-semibold shadow-2xs">
                      <BookOpen className="w-3.5 h-3.5 text-teal-600" />
                      <span>{q.ncert_reference.class}</span>
                      <span className="text-teal-400">•</span>
                      <span>{q.ncert_reference.chapter}</span>
                      <span className="text-teal-400">•</span>
                      <span className="font-extrabold text-teal-800 bg-teal-100/80 px-1.5 py-0.2 rounded border border-teal-300">
                        {normalizeNCERTPage(q.ncert_reference.page_number)}
                      </span>
                    </div>
                  </div>

                  {/* Section Heading */}
                  {q.ncert_reference.official_section && (
                    <div className="text-[11px] font-bold text-slate-500 mb-2 flex items-center gap-1">
                      <span className="text-teal-700">Topic Section:</span>
                      <span>{getNCERTSectionHeading(q.ncert_reference)}</span>
                    </div>
                  )}

                  {/* Question Text */}
                  <p className="text-sm sm:text-base font-medium text-slate-900 mb-4 whitespace-pre-line leading-relaxed">
                    {q.question}
                  </p>

                  {/* Options Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
                    {(['A', 'B', 'C', 'D'] as const).map((opt) => {
                      const isThisSelected = userAnswer === opt;
                      const isThisCorrect = q.correct_answer === opt;

                      let optClass = 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800';

                      if (isPaperSubmitted) {
                        if (isThisCorrect) {
                          optClass = 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-500/30 font-bold';
                        } else if (isThisSelected) {
                          optClass = 'bg-rose-50 border-rose-500 text-rose-950 ring-2 ring-rose-500/30';
                        } else {
                          optClass = 'bg-slate-50/50 border-slate-200 text-slate-400';
                        }
                      } else if (isThisSelected) {
                        optClass = 'bg-indigo-50 border-indigo-600 text-indigo-950 font-bold ring-2 ring-indigo-500/25';
                      }

                      return (
                        <button
                          key={opt}
                          onClick={() => handleSelectPaperOption(q.question_number, opt)}
                          disabled={isPaperSubmitted}
                          className={`text-left p-3.5 rounded-xl border transition-all flex items-start gap-2.5 cursor-pointer ${optClass}`}
                        >
                          <span className={`w-6 h-6 rounded-lg font-bold text-xs flex items-center justify-center shrink-0 ${
                            isThisSelected
                              ? 'bg-indigo-600 text-white'
                              : 'bg-white border border-slate-300 text-slate-700'
                          }`}>
                            {opt}
                          </span>
                          <span className="text-xs sm:text-sm pt-0.5 leading-snug">
                            {q.options[opt]}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Post-submission Line-by-Line NCERT Explanation */}
                  {isPaperSubmitted && (
                    <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded bg-emerald-600 text-white font-bold text-xs flex items-center justify-center">
                          {q.correct_answer}
                        </span>
                        <strong className="text-emerald-900 font-bold">
                          Official Answer Key: ({q.correct_answer})
                        </strong>
                      </div>
                      <p className="leading-relaxed text-slate-700">
                        {q.explanation}
                      </p>
                      {q.ncert_reference.exact_quote && (
                        <div className="p-2.5 rounded-lg bg-teal-50/60 border border-teal-200/80 text-teal-950 flex items-start gap-2 italic">
                          <Quote className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                          <span>"{q.ncert_reference.exact_quote}"</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODE 2: CHAPTER-WISE PYQ EXPLORER (Past 12 Years by Topic) */}
      {/* ========================================================= */}
      {subMode === 'chapter_wise' && (
        <div className="pt-4 space-y-6">
          {/* Controls: Subject Selector & Chapter Dropdown */}
          <div className="space-y-4 bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200">
            {/* Subject Selector Buttons */}
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                Step 1: Choose Subject
              </span>
              <div className="flex flex-wrap gap-2">
                {subjectsList.map((subj) => (
                  <button
                    key={subj}
                    onClick={() => {
                      setChapterSubject(subj);
                      setSelectedChapter('All Chapters');
                    }}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                      chapterSubject === subj
                        ? 'bg-amber-500 text-slate-950 shadow-xs'
                        : 'bg-white hover:bg-slate-200 text-slate-700 border border-slate-200'
                    }`}
                  >
                    {subj}
                  </button>
                ))}
              </div>
            </div>

            {/* Chapter Selector & Search */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 border-t border-slate-200">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Step 2: Select NCERT Chapter
                </label>
                <select
                  value={selectedChapter}
                  onChange={(e) => setSelectedChapter(e.target.value)}
                  className="w-full p-2.5 text-xs sm:text-sm bg-white rounded-xl border border-slate-300 font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  {availableChapters.map((ch) => (
                    <option key={ch} value={ch}>
                      {ch}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Filter by Keyword or Exam Year
                </label>
                <div className="relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search questions, years, concepts..."
                    className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-white rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Chapter Questions Stream Header */}
          <div className="flex items-center justify-between gap-3 bg-slate-900 text-white p-4 rounded-2xl">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                {chapterSubject} • {selectedChapter}
              </span>
              <h3 className="text-sm sm:text-base font-black text-white mt-0.5">
                Past 12 Years NEET Questions ({chapterWiseQuestions.length} Questions Found)
              </h3>
            </div>
            <span className="text-xs font-bold bg-amber-400 text-slate-950 px-2.5 py-1 rounded-lg">
              Instant Explanations
            </span>
          </div>

          {/* Questions Stream */}
          <div className="space-y-6">
            {chapterWiseQuestions.map((q, idx) => {
              const userAnswer = chapterAnswers[idx];
              const hasAnswered = userAnswer !== undefined;
              const isCorrect = userAnswer === q.correct_answer;

              return (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-slate-300 transition-all"
                >
                  {/* Top Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-slate-900 text-white font-bold text-xs flex items-center justify-center">
                        #{idx + 1}
                      </span>
                      <span className="text-xs font-black text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded-md border border-amber-300">
                        {q.pyq_year || 'NEET Official'}
                      </span>
                      <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
                        {q.ncert_reference.chapter}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-teal-50 border border-teal-200 text-teal-900 text-xs font-semibold shadow-2xs">
                      <BookOpen className="w-3.5 h-3.5 text-teal-600" />
                      <span>{q.ncert_reference.class}</span>
                      <span className="text-teal-400">•</span>
                      <span className="font-extrabold text-teal-800 bg-teal-100/80 px-1.5 py-0.2 rounded border border-teal-300">
                        {normalizeNCERTPage(q.ncert_reference.page_number)}
                      </span>
                    </div>
                  </div>

                  {q.ncert_reference.official_section && (
                    <div className="text-[11px] font-bold text-slate-500 mb-2">
                      <span className="text-teal-700">Section: </span>
                      <span>{getNCERTSectionHeading(q.ncert_reference)}</span>
                    </div>
                  )}

                  <p className="text-sm sm:text-base font-medium text-slate-900 mb-4 whitespace-pre-line leading-relaxed">
                    {q.question}
                  </p>

                  {/* Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
                    {(['A', 'B', 'C', 'D'] as const).map((opt) => {
                      const isThisSelected = userAnswer === opt;
                      const isThisCorrect = q.correct_answer === opt;

                      let optClass = 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800';
                      if (hasAnswered) {
                        if (isThisCorrect) {
                          optClass = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold ring-2 ring-emerald-500/20';
                        } else if (isThisSelected) {
                          optClass = 'bg-rose-50 border-rose-500 text-rose-950 ring-2 ring-rose-500/20';
                        }
                      }

                      return (
                        <button
                          key={opt}
                          onClick={() => handleSelectChapterOption(idx, opt)}
                          className={`text-left p-3.5 rounded-xl border transition-all flex items-start gap-2.5 cursor-pointer ${optClass}`}
                        >
                          <span className={`w-6 h-6 rounded-lg font-bold text-xs flex items-center justify-center shrink-0 ${
                            isThisSelected
                              ? 'bg-amber-500 text-slate-950'
                              : 'bg-white border border-slate-300 text-slate-700'
                          }`}>
                            {opt}
                          </span>
                          <span className="text-xs sm:text-sm pt-0.5 leading-snug">
                            {q.options[opt]}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Instant Explanation upon option selection */}
                  {hasAnswered && (
                    <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-50/70 to-slate-50 border border-emerald-200 text-xs text-slate-800 space-y-2 animate-fade-in">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded bg-emerald-600 text-white font-bold text-xs flex items-center justify-center">
                          {q.correct_answer}
                        </span>
                        <strong className="text-emerald-900 font-bold">
                          Verified Correct Option: ({q.correct_answer})
                        </strong>
                      </div>
                      <p className="leading-relaxed text-slate-700">
                        {q.explanation}
                      </p>
                      {q.ncert_reference.exact_quote && (
                        <div className="p-2.5 rounded-lg bg-white border border-teal-200 text-teal-950 flex items-start gap-2 italic">
                          <Quote className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                          <span>"{q.ncert_reference.exact_quote}"</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
