import React from 'react';
import { Bookmark, BookmarkX, AlertTriangle, ArrowRight, BookOpen, CheckCircle2 } from 'lucide-react';
import { NEETQuestion, UserAnswerRecord } from '../types/neet';
import { normalizeNCERTPage } from '../utils/ncertUtils';

interface MistakesNotebookProps {
  questions: NEETQuestion[];
  answers: Record<number, UserAnswerRecord>;
  onSelectQuestion: (index: number) => void;
  onRemoveBookmark: (index: number) => void;
}

export const MistakesNotebook: React.FC<MistakesNotebookProps> = ({
  questions,
  answers,
  onSelectQuestion,
  onRemoveBookmark,
}) => {
  // Collect bookmarked questions and incorrect questions
  const bookmarkedIndices: number[] = [];
  const incorrectIndices: number[] = [];

  questions.forEach((q, idx) => {
    const rec = answers[idx];
    if (rec?.isBookmarked) {
      bookmarkedIndices.push(idx);
    }
    if (rec?.selectedOption && rec.selectedOption !== q.correct_answer) {
      incorrectIndices.push(idx);
    }
  });

  const combinedIndices = Array.from(new Set([...bookmarkedIndices, ...incorrectIndices]));

  return (
    <div className="bg-white rounded-2xl shadow-xs border border-slate-200/80 p-5 sm:p-7 mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-200 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
              Mistakes & High-Yield Revision Notebook
            </h2>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-200">
              {combinedIndices.length} Question{combinedIndices.length !== 1 ? 's' : ''}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Re-test and memorize lines where mistakes occurred or questions you marked for revision
          </p>
        </div>
      </div>

      {combinedIndices.length === 0 ? (
        <div className="text-center py-16 px-4 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
          <Bookmark className="w-10 h-10 text-slate-300 mx-auto mb-3" />
          <h3 className="text-sm font-bold text-slate-800 mb-1">
            Your Revision Notebook is Currently Empty
          </h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            As you practice, any questions you answer incorrectly or bookmark using the flag/bookmark button will appear here for focused line-by-line NCERT drills.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {combinedIndices.map((idx) => {
            const q = questions[idx];
            const rec = answers[idx];
            const isIncorrect = rec?.selectedOption && rec.selectedOption !== q.correct_answer;
            const isBookmarked = !!rec?.isBookmarked;

            return (
              <div
                key={q.question_number}
                className="p-4 sm:p-5 rounded-2xl border border-slate-200 hover:border-slate-300 bg-slate-50/50 transition-all"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-slate-900 text-white text-xs font-bold flex items-center justify-center">
                      Q{q.question_number}
                    </span>

                    {isIncorrect && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-100 text-rose-800 border border-rose-200 flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" /> Incorrect Attempt
                      </span>
                    )}

                    {isBookmarked && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-200 flex items-center gap-1">
                        <Bookmark className="w-3 h-3" /> Bookmarked
                      </span>
                    )}

                    <span className="text-xs font-medium text-slate-600 bg-white px-2 py-0.5 rounded-md border border-slate-200">
                      {q.ncert_reference.class} • {q.ncert_reference.chapter} • <strong>{normalizeNCERTPage(q.ncert_reference.page_number)}</strong>
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {isBookmarked && (
                      <button
                        onClick={() => onRemoveBookmark(idx)}
                        className="text-xs text-slate-400 hover:text-rose-600 p-1"
                        title="Remove bookmark"
                      >
                        <BookmarkX className="w-4 h-4" />
                      </button>
                    )}

                    <button
                      onClick={() => onSelectQuestion(idx)}
                      className="px-3 py-1 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg flex items-center gap-1"
                    >
                      <span>Practice</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <p className="text-sm font-medium text-slate-900 mb-3 whitespace-pre-line">
                  {q.question}
                </p>

                <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 leading-relaxed">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-emerald-700">Correct: Option ({q.correct_answer})</span>
                    {rec?.selectedOption && (
                      <span className="text-slate-400">• Your Answer: Option ({rec.selectedOption})</span>
                    )}
                  </div>
                  <p>{q.explanation}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
