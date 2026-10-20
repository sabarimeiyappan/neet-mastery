import React, { useState } from 'react';
import { 
  Award, 
  CheckCircle2, 
  XCircle, 
  MinusCircle, 
  RotateCcw, 
  BookOpen, 
  TrendingUp, 
  Target,
  ArrowRight,
  Filter,
  Flame,
  FileCode,
  AlertTriangle,
  Lightbulb,
  Sparkles,
  Layers,
  ChevronRight,
  Compass
} from 'lucide-react';
import { NEETQuestion, UserAnswerRecord } from '../types/neet';
import { normalizeNCERTPage } from '../utils/ncertUtils';

interface ResultAnalyticsProps {
  questions: NEETQuestion[];
  answers: Record<number, UserAnswerRecord>;
  subject: string;
  topic: string;
  onRetake: () => void;
  onReviewQuestion: (index: number) => void;
  onOpenJson: () => void;
  onOpenScorecard?: () => void;
}

export const ResultAnalytics: React.FC<ResultAnalyticsProps> = ({
  questions,
  answers,
  subject,
  topic,
  onRetake,
  onReviewQuestion,
  onOpenJson,
  onOpenScorecard,
}) => {
  const [filter, setFilter] = useState<'all' | 'correct' | 'incorrect' | 'unattempted'>('all');

  let correctCount = 0;
  let incorrectCount = 0;
  let unattemptedCount = 0;

  questions.forEach((q, idx) => {
    const rec = answers[idx];
    if (!rec?.selectedOption) {
      unattemptedCount++;
    } else if (rec.selectedOption === q.correct_answer) {
      correctCount++;
    } else {
      incorrectCount++;
    }
  });

  const totalScore = correctCount * 4 - incorrectCount * 1;
  const maxScore = questions.length * 4; // 15 questions * 4 = 60
  const attemptedCount = correctCount + incorrectCount;
  const accuracy = attemptedCount > 0 ? Math.round((correctCount / attemptedCount) * 100) : 0;
  const percentage = Math.max(0, Math.round((totalScore / maxScore) * 100));

  // Score-Based Dynamic Motivation Tiers
  const getMotivationalFeedback = (score: number, max: number) => {
    const ratio = score / max;
    if (ratio >= 0.85) {
      return {
        tier: 'Target 650+ / AIIMS & Top GMC Contender',
        badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
        textColor: 'text-emerald-700',
        bgGradient: 'from-emerald-500/15 via-teal-500/10 to-transparent',
        headline: 'Phenomenal NCERT Retention & Master-Level Speed!',
        message:
          'Your conceptual clarity is in the top 1% percentile! You successfully dodged tricky distractor traps. Maintain this disciplined zero-negative pace to guarantee a 650+ score on the actual NTA paper.',
        action: 'Solidify your standing by running another 15-minute mock on adjacent high-weightage chapters.',
      };
    } else if (ratio >= 0.60) {
      return {
        tier: 'Consistent Performer (State GMC & 600+ Bracket)',
        badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-300',
        textColor: 'text-indigo-700',
        bgGradient: 'from-indigo-500/15 via-sky-500/10 to-transparent',
        headline: 'Solid Foundational Grasp — Fine-Tune Tricky Distractors!',
        message:
          'You have a strong understanding of core NCERT lines. A few negative marks in nuanced statement & assertion-reason questions trimmed your score. Eliminating just 2 or 3 wrong attempts will catapult you straight into the 650+ league.',
        action: 'Carefully review the specific textbook lines flagged in your Weakness Breakdown below.',
      };
    } else {
      return {
        tier: 'Strategic Recovery & Foundation Building',
        badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
        textColor: 'text-amber-800',
        bgGradient: 'from-amber-500/15 via-rose-500/10 to-transparent',
        headline: 'High Growth Opportunity — Curtail Negative Mark Drag!',
        message:
          'Blind guessing on ambiguous questions penalized your score with -1 deductions. In NEET-UG, skipping an unsure question (+0) is vastly superior to a negative mark (-1). Re-read highlighted NCERT paragraphs to build unwavering confidence.',
        action: 'Switch to Practice Mode for this chapter to view instant explanations before your next exam retake.',
      };
    }
  };

  const motivation = getMotivationalFeedback(totalScore, maxScore);

  // Group Weaknesses by Subtopic / Section
  const weakSectionsMap: Record<
    string,
    {
      section: string;
      page: string;
      chapter: string;
      classLevel: string;
      questionsMissed: { qNum: number; selected: string; correct: string; isWrong: boolean }[];
      marksLost: number;
    }
  > = {};

  questions.forEach((q, idx) => {
    const rec = answers[idx];
    const isCorrect = rec?.selectedOption === q.correct_answer;
    if (!isCorrect) {
      const secKey = q.ncert_reference.official_section || `General ${q.ncert_reference.chapter}`;
      if (!weakSectionsMap[secKey]) {
        weakSectionsMap[secKey] = {
          section: secKey,
          page: normalizeNCERTPage(q.ncert_reference.page_number),
          chapter: q.ncert_reference.chapter,
          classLevel: q.ncert_reference.class,
          questionsMissed: [],
          marksLost: 0,
        };
      }
      const isWrong = !!rec?.selectedOption;
      weakSectionsMap[secKey].questionsMissed.push({
        qNum: q.question_number,
        selected: rec?.selectedOption || 'Unattempted',
        correct: q.correct_answer,
        isWrong,
      });
      // A wrong answer lost 5 marks relative to maximum (+4 lost + 1 deducted), unattempted lost 4
      weakSectionsMap[secKey].marksLost += isWrong ? 5 : 4;
    }
  });

  const weakSectionsList = Object.values(weakSectionsMap).sort((a, b) => b.marksLost - a.marksLost);

  const filteredQuestions = questions.filter((q, idx) => {
    const rec = answers[idx];
    if (filter === 'correct') return rec?.selectedOption === q.correct_answer;
    if (filter === 'incorrect') return rec?.selectedOption && rec.selectedOption !== q.correct_answer;
    if (filter === 'unattempted') return !rec?.selectedOption;
    return true;
  });

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-200/90 p-6 sm:p-8 mb-8 animate-in fade-in zoom-in-95 duration-200">
      {/* Top Banner */}
      <div className="text-center max-w-xl mx-auto mb-8">
        <div className="inline-flex p-3 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-600 text-white mb-3 shadow-md shadow-emerald-600/20">
          <Award className="w-8 h-8" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          NTA NEET-UG Exam Performance Scorecard
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          {subject} • <span className="font-bold text-slate-900">{topic}</span> (15 MCQs • Strict 15:00 Timer)
        </p>
      </div>

      {/* Main Score Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white rounded-2xl p-5 shadow-sm text-center">
          <span className="text-xs uppercase tracking-wider text-slate-400 font-bold block mb-1">
            Total NEET Score
          </span>
          <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono">
            {totalScore}
            <span className="text-sm font-normal text-slate-400 ml-1">/ {maxScore}</span>
          </div>
          <span className="text-[11px] text-slate-300 mt-1 block">
            (+4 Correct, -1 Incorrect)
          </span>
        </div>

        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 text-center">
          <span className="text-xs uppercase tracking-wider text-emerald-700 font-bold block mb-1">
            Accuracy Rate
          </span>
          <div className="text-3xl sm:text-4xl font-black text-emerald-800 font-mono">
            {accuracy}%
          </div>
          <span className="text-[11px] text-emerald-600 mt-1 block">
            {correctCount} correct of {attemptedCount} attempted
          </span>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-center">
          <span className="text-xs uppercase tracking-wider text-slate-600 font-bold block mb-1">
            Question Attempts
          </span>
          <div className="flex items-center justify-center gap-3 text-sm font-black mt-2">
            <span className="text-emerald-600 flex items-center gap-1" title="Correct">
              <CheckCircle2 className="w-4 h-4" /> {correctCount}
            </span>
            <span className="text-rose-600 flex items-center gap-1" title="Incorrect (-1)">
              <XCircle className="w-4 h-4" /> {incorrectCount}
            </span>
            <span className="text-slate-500 flex items-center gap-1" title="Unattempted (0)">
              <MinusCircle className="w-4 h-4" /> {unattemptedCount}
            </span>
          </div>
          <span className="text-[11px] text-slate-500 mt-1 block">
            {attemptedCount} / {questions.length} Attempted
          </span>
        </div>

        <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-5 text-center">
          <span className="text-xs uppercase tracking-wider text-indigo-700 font-bold block mb-1">
            Standard Normalized %
          </span>
          <div className="text-3xl sm:text-4xl font-black text-indigo-900 font-mono">
            {percentage}%
          </div>
          <span className="text-[11px] font-bold text-indigo-600 mt-1 block">
            {totalScore >= 52 ? 'AIIMS Tier' : totalScore >= 36 ? 'State GMC Tier' : 'Foundation Tier'}
          </span>
        </div>
      </div>

      {/* Score-Based Dynamic Motivation Banner */}
      <div className={`p-5 sm:p-6 rounded-2xl border mb-8 bg-gradient-to-r ${motivation.bgGradient} border-slate-200`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2 pb-2 border-b border-slate-200/80">
          <div className="flex items-center gap-2">
            <Sparkles className={`w-5 h-5 ${motivation.textColor}`} />
            <h3 className="text-base font-extrabold text-slate-900">
              {motivation.headline}
            </h3>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border ${motivation.badgeColor}`}>
            {motivation.tier}
          </span>
        </div>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
          {motivation.message}
        </p>
        <div className="flex items-center gap-2 text-xs font-bold text-slate-900 bg-white/80 p-2.5 rounded-xl border border-slate-200 shadow-2xs">
          <Compass className="w-4 h-4 text-indigo-600 shrink-0" />
          <span>Strategic Recommendation: {motivation.action}</span>
        </div>
      </div>

      {/* Comprehensive Weakness Breakdown */}
      <div className="mb-8">
        <div className="flex items-center justify-between gap-2 mb-3">
          <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-rose-600" />
            <span>Targeted Weakness Breakdown & Negative-Mark Auditing</span>
          </h3>
          <span className="text-xs text-slate-500 font-semibold">
            {weakSectionsList.length === 0 ? 'Zero Weaknesses Found!' : `${weakSectionsList.length} Subtopics Need Revision`}
          </span>
        </div>

        {weakSectionsList.length === 0 ? (
          <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
            <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
            <h4 className="text-sm font-bold text-emerald-900">Flawless 100% Accuracy!</h4>
            <p className="text-xs text-emerald-700 mt-1">
              You scored maximum marks across all subtopics in this chapter. Zero negative marks incurred.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {weakSectionsList.map((sec, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl border border-rose-200 bg-rose-50/40 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <span className="text-xs font-extrabold text-rose-950 line-clamp-1">
                      {sec.section}
                    </span>
                    <span className="text-[11px] font-black text-rose-700 bg-rose-100 px-2 py-0.5 rounded border border-rose-200 shrink-0">
                      -{sec.marksLost} Marks Drag
                    </span>
                  </div>

                  <div className="text-[11px] text-slate-600 mb-2 flex items-center gap-2">
                    <span className="font-semibold text-slate-800">{sec.chapter}</span>
                    <span>•</span>
                    <span className="font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                      {sec.page}
                    </span>
                  </div>

                  <div className="space-y-1 mb-2">
                    {sec.questionsMissed.map((m, mIdx) => (
                      <div key={mIdx} className="text-xs text-slate-700 flex items-center justify-between bg-white/80 px-2.5 py-1.5 rounded-lg border border-rose-100">
                        <span className="font-bold text-slate-800">Q#{m.qNum}:</span>
                        <span className={m.isWrong ? 'text-rose-600 font-semibold' : 'text-slate-500'}>
                          {m.isWrong ? `Selected (${m.selected}) vs Correct (${m.correct})` : `Unattempted (Correct: ${m.correct})`}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-rose-200/70 text-[11px] font-semibold text-rose-800 flex items-center gap-1">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>Action: Reread {sec.page} text paragraphs for &quot;{sec.section}&quot;.</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Actionable NCERT Revision Tips */}
      <div className="p-5 sm:p-6 rounded-2xl bg-teal-50/80 border border-teal-200 mb-8">
        <h3 className="text-sm font-extrabold text-teal-950 uppercase tracking-wide flex items-center gap-2 mb-3">
          <BookOpen className="w-4 h-4 text-teal-700" />
          <span>Actionable NCERT Revision Protocol (High-Yield Fixes):</span>
        </h3>
        <ul className="space-y-2.5 text-xs sm:text-sm text-teal-900 leading-relaxed">
          <li className="flex items-start gap-2">
            <span className="w-4 h-4 rounded-full bg-teal-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">1</span>
            <span><strong>Zero-Guessing Discipline:</strong> Each wrong response costs 5 total marks (+4 lost + 1 deducted). If you cannot eliminate at least two options, leave it unattempted.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-4 h-4 rounded-full bg-teal-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">2</span>
            <span><strong>Target Underlined Figures:</strong> NCERT diagram labels and summary footnotes frequently appear verbatim in NEET statement-type questions.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-4 h-4 rounded-full bg-teal-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">3</span>
            <span><strong>Retake After Revision:</strong> After reviewing the exact page numbers above, retake this chapter test to verify your negative mark count drops to zero.</span>
          </li>
        </ul>
      </div>

      {/* Action Retake / Export / Scorecard Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-8 pb-8 border-b border-slate-200">
        {onOpenScorecard && (
          <button
            onClick={onOpenScorecard}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 hover:from-emerald-700 hover:to-indigo-700 text-white text-xs sm:text-sm font-extrabold flex items-center gap-2 shadow-md shadow-emerald-600/20 transition-all cursor-pointer"
          >
            <Award className="w-4 h-4" />
            <span>View Scorecard &amp; Email Report</span>
          </button>
        )}

        <button
          onClick={onRetake}
          className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-extrabold flex items-center gap-2 shadow-xs transition-colors cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Retake 15-MCQ Test</span>
        </button>

        <button
          onClick={onOpenJson}
          className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-extrabold flex items-center gap-2 shadow-xs transition-colors cursor-pointer"
        >
          <FileCode className="w-4 h-4" />
          <span>Export 15-MCQ NCERT JSON</span>
        </button>
      </div>

      {/* Question Review Section with Filter Pills */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-600" />
            Detailed NCERT Question-by-Question Review
          </h3>

          <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl">
            {(['all', 'incorrect', 'correct', 'unattempted'] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setFilter(mode)}
                className={`px-2.5 py-1 text-xs font-bold rounded-lg capitalize transition-colors ${
                  filter === mode
                    ? 'bg-white text-slate-900 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {mode} ({
                  mode === 'all'
                    ? questions.length
                    : mode === 'correct'
                    ? correctCount
                    : mode === 'incorrect'
                    ? incorrectCount
                    : unattemptedCount
                })
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {filteredQuestions.map((q) => {
            const originalIndex = q.question_number - 1;
            const rec = answers[originalIndex];
            const isUserCorrect = rec?.selectedOption === q.correct_answer;
            const isAttempted = !!rec?.selectedOption;

            return (
              <div
                key={q.question_number}
                className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                  !isAttempted
                    ? 'bg-slate-50/70 border-slate-200'
                    : isUserCorrect
                    ? 'bg-emerald-50/40 border-emerald-200'
                    : 'bg-rose-50/40 border-rose-200'
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-slate-900 text-white text-xs font-bold flex items-center justify-center">
                      Q{q.question_number}
                    </span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-teal-100 text-teal-900 border border-teal-200">
                      {q.ncert_reference.class} • {q.ncert_reference.chapter} • {q.ncert_reference.official_section ? `${q.ncert_reference.official_section} • ` : ''}{normalizeNCERTPage(q.ncert_reference.page_number)}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                        !isAttempted
                          ? 'bg-slate-200 text-slate-700'
                          : isUserCorrect
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-rose-100 text-rose-800'
                      }`}
                    >
                      {!isAttempted ? 'Unattempted (0)' : isUserCorrect ? '+4 Marks' : '-1 Mark'}
                    </span>

                    <button
                      onClick={() => onReviewQuestion(originalIndex)}
                      className="text-xs font-bold text-indigo-600 hover:text-indigo-800 hover:underline flex items-center gap-1"
                    >
                      <span>Jump</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <p className="text-sm font-medium text-slate-900 mb-3 whitespace-pre-line">
                  {q.question}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs mb-3">
                  {(['A', 'B', 'C', 'D'] as const).map((opt) => (
                    <div
                      key={opt}
                      className={`p-2 rounded-lg border flex items-center gap-2 ${
                        q.correct_answer === opt
                          ? 'bg-emerald-100/70 border-emerald-400 text-emerald-900 font-bold'
                          : rec?.selectedOption === opt
                          ? 'bg-rose-100/70 border-rose-400 text-rose-900 font-bold line-through'
                          : 'bg-white border-slate-200 text-slate-600'
                      }`}
                    >
                      <span className="font-bold w-4">{opt}.</span>
                      <span className="truncate">{q.options[opt]}</span>
                    </div>
                  ))}
                </div>

                <div className="text-xs text-slate-700 bg-white/90 p-3.5 rounded-xl border border-slate-200 leading-relaxed">
                  <div className="flex items-center justify-between mb-1 pb-1 border-b border-slate-100">
                    <strong className="text-slate-900">Line-by-Line NCERT Explanation:</strong>
                    <span className="text-[11px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                      Exact Printed {normalizeNCERTPage(q.ncert_reference.page_number)}
                    </span>
                  </div>
                  <p className="text-slate-700">{q.explanation}</p>

                  {q.ncert_reference.exact_quote && (
                    <div className="mt-2.5 p-2.5 rounded-lg bg-teal-50/80 border border-teal-200/90 text-xs text-teal-950 flex items-start gap-2">
                      <span className="font-bold text-teal-800 uppercase tracking-wider text-[10px] shrink-0 pt-0.5">NCERT Quote:</span>
                      <span className="italic text-slate-800">
                        &ldquo;{q.ncert_reference.exact_quote}&rdquo;
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
