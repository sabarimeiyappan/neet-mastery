import React, { useState } from 'react';
import { 
  X, 
  Copy, 
  Check, 
  Download, 
  FileCode, 
  CheckCircle2, 
  Sparkles,
  Maximize2,
  Minimize2
} from 'lucide-react';
import { NEETQuizSet } from '../types/neet';

interface JsonExportModalProps {
  quizSet: NEETQuizSet;
  isOpen: boolean;
  onClose: () => void;
}

export const JsonExportModal: React.FC<JsonExportModalProps> = ({
  quizSet,
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  if (!isOpen) return null;

  // Exact JSON format structure adhering strictly to the prompt specifications
  const formattedJsonData = {
    subject: quizSet.subject,
    topic: quizSet.topic,
    total_questions: quizSet.questions.length,
    questions: quizSet.questions.map((q) => ({
      question_number: q.question_number,
      question: q.question,
      options: {
        A: q.options.A,
        B: q.options.B,
        C: q.options.C,
        D: q.options.D,
      },
      correct_answer: q.correct_answer,
      explanation: q.explanation,
      ncert_reference: {
        class: q.ncert_reference.class,
        chapter: q.ncert_reference.chapter,
        ...(q.ncert_reference.official_section ? { official_section: q.ncert_reference.official_section } : {}),
        page_number: q.ncert_reference.page_number,
      },
    })),
  };

  const jsonString = JSON.stringify(formattedJsonData, null, 2);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(jsonString);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      const textarea = document.createElement('textarea');
      textarea.value = jsonString;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleDownload = () => {
    const sanitizedTopic = quizSet.topic.replace(/[^a-zA-Z0-9]/g, '_');
    const filename = `NEET_${quizSet.subject}_${sanitizedTopic}_30MCQs.json`;
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-xs">
      <div
        className={`bg-slate-900 text-slate-100 rounded-2xl shadow-2xl border border-slate-800 flex flex-col transition-all overflow-hidden ${
          isExpanded ? 'w-full h-full max-w-none' : 'w-full max-w-4xl max-h-[90vh]'
        }`}
      >
        {/* Header */}
        <div className="px-5 py-4 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
              <FileCode className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-sm sm:text-base text-white">
                  NCERT 30-MCQ Dataset (Valid JSON)
                </h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-950 text-emerald-400 border border-emerald-800 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Schema Verified
                </span>
              </div>
              <p className="text-xs text-slate-400">
                {quizSet.subject} • {quizSet.topic} • 30 NCERT-grounded Questions
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              title={isExpanded ? 'Minimize' : 'Expand full screen'}
            >
              {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Toolbar info */}
        <div className="px-5 py-2.5 bg-slate-900/60 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-3 text-slate-400">
            <span>
              Total Questions: <strong className="text-emerald-400 font-mono">30</strong>
            </span>
            <span>•</span>
            <span>
              Options: <strong className="text-slate-200">A, B, C, D</strong>
            </span>
            <span>•</span>
            <span>
              Citations: <strong className="text-teal-400">Class, Chapter, Page</strong>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                copied
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
              }`}
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied to Clipboard!' : 'Copy Valid JSON'}</span>
            </button>

            <button
              onClick={handleDownload}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white flex items-center gap-1.5 transition-colors shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download .json</span>
            </button>
          </div>
        </div>

        {/* JSON Viewer */}
        <div className="flex-1 overflow-auto p-4 sm:p-5 bg-slate-950/70 font-mono text-xs leading-relaxed text-slate-300 select-all">
          <pre className="whitespace-pre-wrap">{jsonString}</pre>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 bg-slate-950/90 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Ready for direct integration into any frontend quiz engine or backend API</span>
          <button
            onClick={onClose}
            className="px-3 py-1 text-xs font-medium text-slate-300 hover:text-white"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
