import React from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  Bookmark, 
  BookmarkCheck, 
  Flag, 
  ChevronLeft, 
  ChevronRight, 
  BookOpen, 
  RotateCcw,
  Sparkles,
  Layers,
  HelpCircle
} from 'lucide-react';
import { NEETQuestion, UserAnswerRecord, AppMode } from '../types/neet';
import { normalizeNCERTPage } from '../utils/ncertUtils';
import { soundEffects } from '../utils/soundEffects';

const getQuestionTypeInfo = (type?: string) => {
  if (!type) return { label: 'Verbatim NCERT Line', color: 'bg-emerald-50 text-emerald-800 border-emerald-300' };
  const lower = type.toLowerCase();
  if (lower.includes('assertion') || lower.includes('reason') || lower.includes('a-r')) {
    return { label: 'Assertion-Reason', color: 'bg-purple-50 text-purple-800 border-purple-300' };
  }
  if (lower.includes('match') || lower.includes('column')) {
    return { label: 'Match the Following', color: 'bg-sky-50 text-sky-800 border-sky-300' };
  }
  if (lower.includes('statement') || lower.includes('diagram') || lower.includes('figure')) {
    return { label: 'Diagram/Statement Based', color: 'bg-amber-50 text-amber-800 border-amber-300' };
  }
  return { label: 'Verbatim NCERT Line', color: 'bg-teal-50 text-teal-800 border-teal-300' };
};

interface TestViewProps {
  question: NEETQuestion;
  currentIndex: number;
  totalQuestions: number;
  subject: string;
  userAnswer?: UserAnswerRecord;
  onSelectOption: (option: 'A' | 'B' | 'C' | 'D') => void;
  onClearResponse: () => void;
  onToggleMarkReview: () => void;
  onToggleBookmark: () => void;
  onNext: () => void;
  onPrev: () => void;
  mode: AppMode;
  isExamSubmitted?: boolean;
}

export const TestView: React.FC<TestViewProps> = ({
  question,
  currentIndex,
  totalQuestions,
  subject,
  userAnswer,
  onSelectOption,
  onClearResponse,
  onToggleMarkReview,
  onToggleBookmark,
  onNext,
  onPrev,
  mode,
  isExamSubmitted = false,
}) => {
  // Practice Mode reveals instant feedback immediately; Exam Mode keeps everything strictly hidden until submission
  const showInstantFeedback = mode === 'practice' || isExamSubmitted;
  const isExamActive = mode === 'exam' && !isExamSubmitted;

  const selectedOption = userAnswer?.selectedOption;
  const hasAnswered = selectedOption !== null && selectedOption !== undefined;
  const isCorrect = selectedOption === question.correct_answer;

  const optionsList: ('A' | 'B' | 'C' | 'D')[] = ['A', 'B', 'C', 'D'];

  const getOptionStyles = (key: 'A' | 'B' | 'C' | 'D') => {
    const isThisSelected = selectedOption === key;
    const isThisCorrect = question.correct_answer === key;

    // In Practice Mode (or after Exam Submission), show clear Green for correct, Red for incorrect
    if (showInstantFeedback && (hasAnswered || isExamSubmitted)) {
      if (isThisCorrect) {
        return 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-500/30 font-medium';
      }
      if (isThisSelected && !isThisCorrect) {
        return 'bg-rose-50 border-rose-500 text-rose-950 ring-2 ring-rose-500/30 font-medium';
      }
      return 'bg-slate-50/50 border-slate-200 text-slate-500 opacity-70';
    }

    // In Exam Mode while active: neutral OMR selection without revealing correct or incorrect!
    if (isThisSelected) {
      return 'bg-indigo-50/90 border-indigo-600 text-indigo-950 font-bold ring-2 ring-indigo-500/25 shadow-xs';
    }

    return 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800 hover:border-slate-300';
  };

  const getBubbleStyles = (key: 'A' | 'B' | 'C' | 'D') => {
    const isThisSelected = selectedOption === key;
    const isThisCorrect = question.correct_answer === key;

    if (showInstantFeedback && (hasAnswered || isExamSubmitted)) {
      if (isThisCorrect) {
        return 'bg-emerald-600 text-white border-emerald-600 font-extrabold';
      }
      if (isThisSelected && !isThisCorrect) {
        return 'bg-rose-600 text-white border-rose-600 font-extrabold';
      }
      return 'bg-slate-200 text-slate-600 border-slate-300';
    }

    if (isThisSelected) {
      return 'bg-indigo-600 text-white border-indigo-600 font-bold shadow-xs';
    }

    return 'bg-slate-100 text-slate-700 border-slate-300 group-hover:bg-slate-200';
  };

  return (
    <div className="bg-white rounded-2xl shadow-xs border border-slate-200/90 overflow-hidden mb-6">
      {/* Question Header Meta */}
      <div className="bg-slate-50 px-4 sm:px-6 py-3 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-slate-900 text-white text-xs font-bold flex items-center justify-center">
            Q{question.question_number}
          </span>
          <span className="text-xs font-bold text-slate-500">
            of {totalQuestions}
          </span>

          {(() => {
            const qType = getQuestionTypeInfo(question.question_type);
            return (
              <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-extrabold border ${qType.color}`}>
                {qType.label}
              </span>
            );
          })()}

          {isExamActive ? (
            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-800 bg-amber-100/70 px-2.5 py-0.5 rounded-md border border-amber-300">
              Official NEET Exam (+4 / -1)
            </span>
          ) : (
            <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-md border border-emerald-200">
              Practice Tutor Mode
            </span>
          )}
        </div>

        {/* NCERT Citation Badge in Header */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5 text-teal-600" />
            <span>{question.ncert_reference.class}</span>
            <span className="text-teal-400">•</span>
            <span>{question.ncert_reference.chapter}</span>
            <span className="text-teal-400">•</span>
            <span className="font-bold underline decoration-teal-400 underline-offset-2">
              {normalizeNCERTPage(question.ncert_reference.page_number)}
            </span>
          </div>

          <button
            onClick={onToggleBookmark}
            className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
              userAnswer?.isBookmarked
                ? 'bg-amber-50 text-amber-600 border-amber-300'
                : 'text-slate-400 hover:text-slate-600 border-slate-200 hover:bg-slate-100'
            }`}
            title="Bookmark this question for Mistakes Notebook"
          >
            {userAnswer?.isBookmarked ? (
              <BookmarkCheck className="w-4 h-4 fill-amber-500 text-amber-600" />
            ) : (
              <Bookmark className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Official Section Breadcrumb */}
      {question.ncert_reference.official_section && (
        <div className="px-4 sm:px-6 py-1.5 bg-slate-100/70 border-b border-slate-200 text-[11px] text-slate-600 flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5 text-teal-600" />
          <span>NCERT Section:</span>
          <strong className="text-slate-800">{question.ncert_reference.official_section}</strong>
        </div>
      )}

      {/* Question Body */}
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="text-base sm:text-lg font-medium text-slate-900 leading-relaxed mb-6 whitespace-pre-line font-sans">
          {question.question}
        </div>

        {/* Options Grid */}
        <div className="space-y-3 mb-6">
          {optionsList.map((key) => {
            const optionText = question.options[key];
            const isThisSelected = selectedOption === key;
            const isThisCorrect = question.correct_answer === key;

            return (
              <button
                key={key}
                onClick={() => {
                  soundEffects.playBubbleClick();
                  onSelectOption(key);
                }}
                className={`group w-full text-left p-3.5 sm:p-4 rounded-xl border transition-all flex items-start gap-3.5 cursor-pointer ${getOptionStyles(
                  key
                )}`}
              >
                <span
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg border flex items-center justify-center font-bold text-xs sm:text-sm shrink-0 transition-all ${getBubbleStyles(
                    key
                  )}`}
                >
                  {key}
                </span>

                <div className="flex-1 pt-0.5 text-sm sm:text-base leading-snug">
                  {optionText}
                </div>

                {showInstantFeedback && hasAnswered && (
                  <div className="shrink-0 pt-0.5">
                    {isThisCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    )}
                    {isThisSelected && !isThisCorrect && (
                      <XCircle className="w-5 h-5 text-rose-500" />
                    )}
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Practice Mode & Review Mode: Instant NCERT Explanation Card right below question */}
        {showInstantFeedback && (hasAnswered || isExamSubmitted) && (
          <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-emerald-50/70 via-teal-50/40 to-slate-50 border border-emerald-300">
            <div className="flex flex-wrap items-center justify-between pb-3 mb-3 border-b border-emerald-200/60 gap-2">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-emerald-600 text-white flex items-center justify-center text-xs font-bold">
                  {question.correct_answer}
                </span>
                <span className="text-sm font-bold text-emerald-900">
                  Official Correct Option: ({question.correct_answer})
                </span>
                {isExamSubmitted && !hasAnswered && (
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-slate-200 text-slate-700">
                    Unattempted
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white text-xs font-semibold text-emerald-800 border border-emerald-200 shadow-2xs">
                <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
                <span>
                  {question.ncert_reference.class} • {question.ncert_reference.chapter} •{' '}
                  <strong>{normalizeNCERTPage(question.ncert_reference.page_number)}</strong>
                </span>
              </div>
            </div>

            <div className="text-sm text-slate-800 leading-relaxed font-sans mb-3">
              <strong className="text-slate-900 block mb-1">
                Line-by-Line NCERT Explanation & Distractor Analysis:
              </strong>
              {question.explanation}
            </div>

            {/* Verbatim NCERT Line Quote */}
            {question.ncert_reference.exact_quote && (
              <div className="p-3 rounded-xl bg-white border border-teal-200/90 text-xs text-teal-950 flex items-start gap-2.5 shadow-2xs mb-2">
                <span className="font-bold text-teal-700 uppercase tracking-wider text-[10px] shrink-0 pt-0.5">NCERT Line:</span>
                <span className="italic text-slate-800 font-medium">
                  &ldquo;{question.ncert_reference.exact_quote}&rdquo;
                </span>
              </div>
            )}

            <div className="text-xs text-slate-700 bg-white/90 p-2.5 rounded-xl border border-emerald-200/80 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                <strong>Verified Citation:</strong> {question.ncert_reference.official_section || 'Core NCERT Topic'} (
                {normalizeNCERTPage(question.ncert_reference.page_number)}). Stick strictly to NCERT definitions for NEET-UG.
              </span>
            </div>
          </div>
        )}

        {/* Exam Mode: Clean prompt reminding student that solutions are hidden until submission */}
        {isExamActive && (
          <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
            <span className="flex items-center gap-1.5 font-medium">
              <HelpCircle className="w-4 h-4 text-slate-400" />
              <span>Exam Mode Active: Answer keys & explanations are hidden until you click &quot;Submit OMR & See Score&quot;.</span>
            </span>
            <span className="font-bold text-slate-700">1 min per question</span>
          </div>
        )}
      </div>

      {/* Action Footer Navigation */}
      <div className="bg-slate-50 px-4 sm:px-6 py-3.5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          {hasAnswered && (
            <button
              onClick={onClearResponse}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Clear Response</span>
            </button>
          )}

          {mode === 'exam' && !isExamSubmitted && (
            <button
              onClick={onToggleMarkReview}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border transition-colors cursor-pointer ${
                userAnswer?.isMarkedForReview
                  ? 'bg-purple-100 text-purple-800 border-purple-300'
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
              }`}
            >
              <Flag className="w-3.5 h-3.5 text-purple-600" />
              <span>{userAnswer?.isMarkedForReview ? 'Marked for Review' : 'Mark for Review'}</span>
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 ml-auto">
          <button
            onClick={onPrev}
            disabled={currentIndex === 0}
            className="flex items-center gap-1 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 rounded-xl transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <button
            onClick={onNext}
            disabled={currentIndex === totalQuestions - 1}
            className="flex items-center gap-1 px-4 py-1.5 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors disabled:opacity-40 disabled:cursor-not-allowed shadow-xs cursor-pointer"
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
