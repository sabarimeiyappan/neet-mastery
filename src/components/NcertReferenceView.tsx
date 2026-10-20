import React, { useState } from 'react';
import { BookOpen, Search, ArrowRight, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { NEETQuestion } from '../types/neet';
import { normalizeNCERTPage } from '../utils/ncertUtils';

interface NcertReferenceViewProps {
  questions: NEETQuestion[];
  subject: string;
  topic: string;
  onSelectQuestion: (index: number) => void;
}

export const NcertReferenceView: React.FC<NcertReferenceViewProps> = ({
  questions,
  subject,
  topic,
  onSelectQuestion,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = questions.filter((q) => {
    const qText = q.question.toLowerCase();
    const explanation = q.explanation.toLowerCase();
    const page = q.ncert_reference.page_number.toLowerCase();
    const chapter = q.ncert_reference.chapter.toLowerCase();
    const query = searchQuery.toLowerCase();
    return qText.includes(query) || explanation.includes(query) || page.includes(query) || chapter.includes(query);
  });

  return (
    <div className="bg-white rounded-2xl shadow-xs border border-slate-200/80 p-5 sm:p-7 mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
              NCERT Textbook Page Citations Master Index
            </h2>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-teal-100 text-teal-800 border border-teal-200">
              30 Citations
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Every question strictly mapped to verified Class 11 / Class 12 standard NCERT textbook pages
          </p>
        </div>

        {/* Search within citations */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by page, concept, or term..."
            className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-slate-50 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white"
          />
        </div>
      </div>

      {/* Grid of 30 Reference Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-5">
        {filtered.map((q) => {
          const index = q.question_number - 1;
          return (
            <div
              key={q.question_number}
              className="p-4 rounded-xl border border-slate-200 hover:border-teal-300 hover:shadow-xs transition-all bg-slate-50/60 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-slate-900 text-white text-xs font-bold flex items-center justify-center">
                      #{q.question_number}
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-teal-50 text-teal-800 border border-teal-200 flex items-center gap-1">
                      <BookOpen className="w-3 h-3 text-teal-600" />
                      <span>{q.ncert_reference.class} • {q.ncert_reference.chapter}</span>
                    </span>
                  </div>

                  <div className="flex flex-col items-end gap-1">
                    <span className="text-xs font-bold text-teal-700 bg-teal-100/70 px-2.5 py-0.5 rounded-md border border-teal-300">
                      {normalizeNCERTPage(q.ncert_reference.page_number)}
                    </span>
                    {q.ncert_reference.official_section && (
                      <span className="text-[10px] font-semibold text-slate-500">
                        {q.ncert_reference.official_section}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-xs sm:text-sm font-medium text-slate-800 line-clamp-2 mb-2">
                  {q.question}
                </p>

                <div className="text-[11px] text-slate-600 line-clamp-3 bg-white p-2 rounded-lg border border-slate-100 mb-2">
                  <strong className="text-slate-900">Line Rationale: </strong>
                  {q.explanation}
                </div>

                {q.ncert_reference.exact_quote && (
                  <div className="text-[11px] text-teal-900 bg-teal-50/70 p-2 rounded-lg border border-teal-200/80 mb-3 italic">
                    <span className="font-bold text-teal-800 not-italic mr-1">Quote:</span>
                    &ldquo;{q.ncert_reference.exact_quote}&rdquo;
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-200/60 text-xs">
                <span className="text-emerald-700 font-bold">
                  Ans: Option ({q.correct_answer})
                </span>
                <button
                  onClick={() => onSelectQuestion(index)}
                  className="text-teal-700 hover:text-teal-900 font-semibold flex items-center gap-1 hover:underline"
                >
                  <span>Practice Question</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-slate-500 text-sm">
          No NCERT references found matching &quot;{searchQuery}&quot;. Try a different search term.
        </div>
      )}
    </div>
  );
};
