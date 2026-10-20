import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Bookmark, 
  HelpCircle, 
  AlertCircle, 
  RefreshCw, 
  ChevronDown, 
  ChevronUp, 
  Flag,
  Circle,
  Layers,
  Sparkles
} from 'lucide-react';
import { NEETQuestion, UserAnswerRecord } from '../types/neet';
import { soundEffects } from '../utils/soundEffects';

interface OMRSheetProps {
  questions: NEETQuestion[];
  currentIndex: number;
  answers: Record<number, UserAnswerRecord>;
  visitedQuestions?: Record<number, boolean>;
  onSelectQuestion: (index: number) => void;
  onSelectOption?: (questionIndex: number, option: 'A' | 'B' | 'C' | 'D') => void;
  onClearOption?: (questionIndex: number) => void;
  onSubmitExam: () => void;
  isExamMode: boolean;
  isBackgroundLoading?: boolean;
}

export type NTAQuestionState = 
  | 'answered'                  // Green
  | 'not_answered'              // Red (visited but no option selected)
  | 'marked_review'             // Purple (marked for review, no option selected)
  | 'answered_marked_review'    // Purple with small green dot (option selected & marked for review)
  | 'not_visited';              // Grey

export const OMRSheet: React.FC<OMRSheetProps> = ({
  questions,
  currentIndex,
  answers,
  visitedQuestions = {},
  onSelectQuestion,
  onSelectOption,
  onClearOption,
  onSubmitExam,
  isExamMode,
  isBackgroundLoading = false,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState<'nta_matrix' | 'omr_bubbles'>('omr_bubbles');
  const totalQ = questions.length || 15;
  const maxMarks = totalQ * 4; // 60 Marks for 15 Questions

  // Compute the 5 official NTA status counts
  let answeredCount = 0;              // Green
  let notAnsweredCount = 0;           // Red
  let markedReviewCount = 0;          // Purple
  let answeredMarkedCount = 0;        // Purple with green dot
  let notVisitedCount = 0;            // Grey

  const questionStates: NTAQuestionState[] = [];

  for (let idx = 0; idx < totalQ; idx++) {
    const rec = answers[idx];
    const isVisited = !!visitedQuestions[idx] || idx === currentIndex;
    const hasOption = !!rec?.selectedOption;
    const isMarked = !!rec?.isMarkedForReview;

    let state: NTAQuestionState;

    if (hasOption && isMarked) {
      state = 'answered_marked_review';
      answeredMarkedCount++;
    } else if (hasOption) {
      state = 'answered';
      answeredCount++;
    } else if (isMarked) {
      state = 'marked_review';
      markedReviewCount++;
    } else if (isVisited) {
      state = 'not_answered';
      notAnsweredCount++;
    } else {
      state = 'not_visited';
      notVisitedCount++;
    }

    questionStates[idx] = state;
  }

  const optionsList: ('A' | 'B' | 'C' | 'D')[] = ['A', 'B', 'C', 'D'];

  // Handle bubble selection with audio feedback
  const handleBubbleClick = (qIdx: number, opt: 'A' | 'B' | 'C' | 'D') => {
    soundEffects.playBubbleClick();
    if (onSelectOption) {
      onSelectOption(qIdx, opt);
    }
    onSelectQuestion(qIdx);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200/90 overflow-hidden transition-all">
      {/* Panel Header */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-3.5 sm:p-4 border-b border-slate-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500 text-slate-950 font-black flex items-center justify-center text-xs shadow-xs shrink-0">
              NTA
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-extrabold text-sm text-white tracking-tight">
                  {isExamMode ? 'Official NTA Palette & OMR' : 'Question Palette'}
                </h3>
                <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                  {isExamMode ? 'CBT Standard' : 'Practice'}
                </span>
              </div>
              <p className="text-[11px] text-slate-300 font-mono">
                {isExamMode ? '15 Questions • 60 Marks (+4 / -1 Scheme)' : `${totalQ} MCQs Navigator`}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            {isBackgroundLoading && (
              <div className="flex items-center gap-1 text-[10px] text-teal-300 bg-teal-950/70 px-2 py-0.5 rounded-full border border-teal-800 animate-pulse">
                <RefreshCw className="w-3 h-3 animate-spin" />
                <span>Sync</span>
              </div>
            )}

            {/* Toggle collapse */}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title={isCollapsed ? 'Expand Panel' : 'Collapse Panel'}
            >
              {isCollapsed ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* NTA Simulated Barcode Strip & Instruction in Exam Mode */}
        {isExamMode && !isCollapsed && (
          <div className="mt-2.5 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-300">
            <span className="font-mono tracking-widest text-[9px] text-slate-400">
              ||| | ||||| || |||||| |
            </span>
            <span className="italic text-emerald-300 font-sans">
              Click bubble to darken • Audio cue active
            </span>
          </div>
        )}
      </div>

      {/* Collapsed Minimal Strip */}
      {isCollapsed ? (
        <div className="p-3 bg-slate-50 flex items-center justify-between text-xs text-slate-700">
          <div className="flex items-center gap-2">
            <span className="font-bold">NTA Status:</span>
            <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">
              {answeredCount + answeredMarkedCount}/{totalQ} Attempted
            </span>
          </div>
          <button
            onClick={() => setIsCollapsed(false)}
            className="text-xs font-bold text-indigo-600 hover:underline cursor-pointer"
          >
            Expand OMR Sheet
          </button>
        </div>
      ) : (
        <div className="p-3.5 sm:p-4">
          {/* Official 5-State NTA Question Palette Legend & Counters */}
          <div className="mb-4 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
            <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 mb-2 flex items-center justify-between">
              <span>Official NTA Question Status</span>
              <span className="text-slate-400">Total: {totalQ}</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px]">
              {/* 1. Green: Answered */}
              <div className="flex items-center gap-1.5 p-1 rounded-md bg-white border border-slate-200">
                <span className="w-5 h-5 rounded-md bg-emerald-600 text-white font-black text-[10px] flex items-center justify-center shrink-0">
                  {answeredCount}
                </span>
                <span className="text-slate-700 font-semibold truncate">Answered</span>
              </div>

              {/* 2. Red: Not Answered */}
              <div className="flex items-center gap-1.5 p-1 rounded-md bg-white border border-slate-200">
                <span className="w-5 h-5 rounded-md bg-rose-600 text-white font-black text-[10px] flex items-center justify-center shrink-0">
                  {notAnsweredCount}
                </span>
                <span className="text-slate-700 font-semibold truncate">Not Answered</span>
              </div>

              {/* 3. Purple: Marked for Review */}
              <div className="flex items-center gap-1.5 p-1 rounded-md bg-white border border-slate-200">
                <span className="w-5 h-5 rounded-md bg-purple-600 text-white font-black text-[10px] flex items-center justify-center shrink-0">
                  {markedReviewCount}
                </span>
                <span className="text-slate-700 font-semibold truncate">Review</span>
              </div>

              {/* 4. Purple with Green Dot: Answered & Marked */}
              <div className="flex items-center gap-1.5 p-1 rounded-md bg-white border border-slate-200">
                <span className="w-5 h-5 rounded-md bg-purple-700 text-white font-black text-[10px] flex items-center justify-center shrink-0 relative">
                  {answeredMarkedCount}
                  <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-emerald-400 border border-purple-900 rounded-full"></span>
                </span>
                <span className="text-slate-700 font-semibold truncate">Ans &amp; Review</span>
              </div>

              {/* 5. Grey: Not Visited */}
              <div className="flex items-center gap-1.5 p-1 rounded-md bg-white border border-slate-200 col-span-2 sm:col-span-1">
                <span className="w-5 h-5 rounded-md bg-slate-300 text-slate-800 font-black text-[10px] flex items-center justify-center shrink-0">
                  {notVisitedCount}
                </span>
                <span className="text-slate-700 font-semibold truncate">Not Visited</span>
              </div>
            </div>
          </div>

          {/* Toggle between OMR Bubble Grid & Quick Matrix View */}
          {isExamMode && (
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl mb-3 text-xs">
              <button
                type="button"
                onClick={() => setActiveTab('omr_bubbles')}
                className={`flex-1 py-1 px-2 rounded-lg font-bold transition-all text-center ${
                  activeTab === 'omr_bubbles'
                    ? 'bg-white text-slate-900 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                NTA OMR Bubbles
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('nta_matrix')}
                className={`flex-1 py-1 px-2 rounded-lg font-bold transition-all text-center ${
                  activeTab === 'nta_matrix'
                    ? 'bg-white text-slate-900 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                NTA Color Matrix
              </button>
            </div>
          )}

          {/* VIEW 1: Official NTA Color-Coded 15-Question Matrix */}
          {(!isExamMode || activeTab === 'nta_matrix') && (
            <div className="grid grid-cols-5 gap-2 mb-4">
              {Array.from({ length: totalQ }).map((_, idx) => {
                const qNum = idx + 1;
                const state = questionStates[idx];
                const isCurrent = currentIndex === idx;

                let stateClasses = 'bg-slate-200 text-slate-700 border-slate-300'; // Not Visited
                let hasGreenDot = false;

                if (state === 'answered') {
                  stateClasses = 'bg-emerald-600 text-white border-emerald-700 shadow-xs';
                } else if (state === 'not_answered') {
                  stateClasses = 'bg-rose-600 text-white border-rose-700 shadow-xs';
                } else if (state === 'marked_review') {
                  stateClasses = 'bg-purple-600 text-white border-purple-700 shadow-xs';
                } else if (state === 'answered_marked_review') {
                  stateClasses = 'bg-purple-700 text-white border-purple-800 shadow-xs';
                  hasGreenDot = true;
                }

                return (
                  <button
                    key={qNum}
                    type="button"
                    onClick={() => {
                      soundEffects.playBubbleClick();
                      onSelectQuestion(idx);
                    }}
                    className={`h-9 rounded-lg text-xs font-black border flex items-center justify-center transition-all relative cursor-pointer ${stateClasses} ${
                      isCurrent ? 'ring-3 ring-offset-1 ring-slate-950 scale-105 z-10' : 'hover:opacity-90'
                    }`}
                    title={`Question ${qNum}: ${state.replace('_', ' ').toUpperCase()}`}
                  >
                    <span>{qNum}</span>
                    {hasGreenDot && (
                      <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 border border-purple-900 rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>
          )}

          {/* VIEW 2: Authentic OMR Circular Bubble Rows */}
          {(!isExamMode || activeTab === 'omr_bubbles') && (
            <div className="space-y-1.5 max-h-[460px] overflow-y-auto pr-1">
              {Array.from({ length: totalQ }).map((_, idx) => {
                const qNum = idx + 1;
                const rec = answers[idx];
                const state = questionStates[idx];
                const isCurrent = currentIndex === idx;

                // NTA Color for question number badge
                let badgeBg = 'bg-slate-200 text-slate-700';
                let hasGreenDot = false;

                if (state === 'answered') {
                  badgeBg = 'bg-emerald-600 text-white';
                } else if (state === 'not_answered') {
                  badgeBg = 'bg-rose-600 text-white';
                } else if (state === 'marked_review') {
                  badgeBg = 'bg-purple-600 text-white';
                } else if (state === 'answered_marked_review') {
                  badgeBg = 'bg-purple-700 text-white';
                  hasGreenDot = true;
                }

                return (
                  <div
                    key={qNum}
                    className={`flex items-center justify-between p-2 rounded-xl transition-all border ${
                      isCurrent
                        ? 'bg-indigo-50/90 border-indigo-400 ring-2 ring-indigo-500/25 shadow-xs'
                        : rec?.selectedOption
                        ? 'bg-slate-50/80 border-slate-200 hover:bg-slate-100/60'
                        : 'bg-white border-slate-100 hover:bg-slate-50'
                    }`}
                  >
                    {/* Left: Question Number with Official NTA State Color */}
                    <div 
                      onClick={() => {
                        soundEffects.playBubbleClick();
                        onSelectQuestion(idx);
                      }}
                      className="flex items-center gap-1.5 cursor-pointer select-none group"
                      title={`Q${qNum} (${state.replace(/_/g, ' ')})`}
                    >
                      <span className={`w-7 h-6 rounded-md text-xs font-black flex items-center justify-center transition-colors relative ${badgeBg}`}>
                        {qNum < 10 ? `0${qNum}` : qNum}
                        {hasGreenDot && (
                          <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-emerald-400 border border-purple-900 rounded-full" />
                        )}
                      </span>
                    </div>

                    {/* Right: Authentic OMR Circular Bubbles [A] [B] [C] [D] */}
                    <div className="flex items-center gap-2 sm:gap-2.5">
                      {optionsList.map((opt) => {
                        const isDarkened = rec?.selectedOption === opt;

                        return (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => handleBubbleClick(idx, opt)}
                            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 text-xs font-bold font-mono transition-all flex items-center justify-center cursor-pointer select-none ${
                              isDarkened
                                ? 'bg-slate-950 text-white border-slate-950 ring-2 ring-slate-900/40 shadow-inner scale-105 font-black'
                                : 'bg-white border-slate-500 text-slate-800 hover:border-slate-800 hover:bg-slate-100 shadow-2xs'
                            }`}
                            title={`Darken bubble (${opt}) for Q${qNum}`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* OMR Exam Submission Action */}
          {isExamMode && (
            <div className="pt-3.5 mt-3 border-t border-slate-100">
              <button
                onClick={() => {
                  soundEffects.playSuccessChime();
                  onSubmitExam();
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-slate-900 hover:from-indigo-700 hover:to-slate-950 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-indigo-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Submit OMR ({answeredCount + answeredMarkedCount}/{totalQ} Attempted)</span>
              </button>
              <p className="text-[10px] text-center text-slate-400 mt-1 font-medium">
                NTA marking: +4 Correct, -1 Incorrect, 0 Unattempted.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
