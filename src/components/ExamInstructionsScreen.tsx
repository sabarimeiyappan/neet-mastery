import React, { useState } from 'react';
import { 
  ShieldAlert, 
  CheckCircle2, 
  Clock, 
  Award, 
  HelpCircle, 
  ArrowLeft, 
  BookOpen, 
  CheckSquare, 
  Square,
  Sparkles,
  GraduationCap,
  BellRing,
  FileText,
  AlertTriangle,
  PenTool
} from 'lucide-react';

interface ExamInstructionsScreenProps {
  subject: string;
  topic: string;
  totalQuestions?: number;
  onStartExam: (durationSeconds?: number) => void;
  onCancel: () => void;
}

export const ExamInstructionsScreen: React.FC<ExamInstructionsScreenProps> = ({
  subject,
  topic,
  totalQuestions = 15,
  onStartExam,
  onCancel,
}) => {
  const [hasAgreed, setHasAgreed] = useState(false);
  const EXAM_DURATION_MINUTES = 15; // Strictly locked to 15:00 Minutes (15 questions = 15 minutes, 60 marks)

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden mb-10 animate-in fade-in zoom-in-95 duration-200">
      {/* NTA Official Header Banner */}
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 text-white p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center font-bold shadow-inner">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                  Official NTA NEET-UG Guidelines
                </span>
                <span className="text-xs text-amber-400 font-mono font-bold">15:00 Min Clock • 60 Marks</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight mt-1">
                Candidate Instructions & Examination Rules
              </h1>
            </div>
          </div>

          <button
            onClick={onCancel}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Practice</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 sm:p-8 space-y-6 text-slate-800">
        {/* Test Summary Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
          <div>
            <span className="text-[11px] font-bold uppercase text-slate-500 block">Subject & Chapter</span>
            <span className="text-sm font-extrabold text-slate-900 line-clamp-1">{subject}: {topic}</span>
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase text-slate-500 block">Fresh Test Questions</span>
            <span className="text-sm font-extrabold text-slate-900">15 MCQs (Q16–Q30 Pool)</span>
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase text-slate-500 block">Strict Timer</span>
            <span className="text-sm font-extrabold text-indigo-600 font-mono flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> 15:00 Minutes (1 min/Q)
            </span>
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase text-slate-500 block">NTA Marking</span>
            <span className="text-sm font-extrabold text-emerald-600 font-mono">+4 / -1 / 0 (Max: 60)</span>
          </div>
        </div>

        {/* Official NTA Marking & Scheme Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-extrabold text-emerald-950 uppercase tracking-wide">
                Correct Response: +4 Marks
              </h4>
              <p className="text-xs text-emerald-800 mt-1 leading-relaxed">
                Four marks (+4) are credited for each question answered correctly according to official NCERT keys.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-rose-50/80 border border-rose-200 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-extrabold text-rose-950 uppercase tracking-wide">
                Incorrect Response: -1 Mark
              </h4>
              <p className="text-xs text-rose-800 mt-1 leading-relaxed">
                One mark (-1) is deducted for each incorrect answer. Manage negative marking carefully.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-100/80 border border-slate-300 flex items-start gap-3">
            <HelpCircle className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wide">
                Unattempted: 0 Marks
              </h4>
              <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                No marks are awarded or deducted for questions left blank or unattempted.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Authentic NTA Rules */}
        <div className="space-y-4">
          <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider flex items-center gap-2">
            <FileText className="w-4 h-4 text-indigo-600" />
            Official NTA NEET-UG Examination Regulations:
          </h3>

          <div className="space-y-3 text-xs sm:text-sm text-slate-700">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
              <div>
                <strong className="text-slate-900 block mb-0.5">Single-Option Selection & OMR Integrity:</strong>
                <span>Each question consists of four options (A, B, C, D) with strictly ONE correct answer. Darkening/selecting multiple options for a single question is considered an incorrect attempt and attracts a <strong>-1 mark penalty</strong>. You can change your selection or click &quot;Clear Response&quot; anytime prior to submission.</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
              <div>
                <strong className="text-slate-900 block mb-0.5">Rough Work & Calculations:</strong>
                <span>All numerical computations and rough work must be carried out on designated scratch paper. In Physics and Physical Chemistry, use standard rounded values of physical constants unless explicitly specified in the problem statement.</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
              <div>
                <strong className="text-slate-900 block mb-0.5">Strict 15:00 Minute Time Management:</strong>
                <span>The timer is set to exactly <strong>15:00 minutes</strong> (1 minute per question for 15 questions). Halfway pacing alert triggers at <strong>7:30 remaining</strong> and final alert at <strong>2:00 remaining</strong>. The test will auto-submit automatically once the timer reaches 00:00.</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
              <div>
                <strong className="text-slate-900 block mb-0.5">Unseen Exam Questions & Review Mode:</strong>
                <span>Exam Mode loads the second half of the chapter question bank (Questions 16–30), ensuring 100% unseen content from Practice Mode. Correct answers and textbook line citations are masked until final OMR submission to preserve exam realism.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Candidate Declaration and Checkbox */}
        <div className="p-4 rounded-2xl bg-indigo-50/70 border-2 border-indigo-200">
          <label className="flex items-start gap-3 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={hasAgreed}
              onChange={(e) => setHasAgreed(e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
            />
            <span className="text-xs sm:text-sm text-slate-900 leading-snug">
              <strong>Candidate Declaration:</strong> I have read and understood all official NTA NEET-UG instructions stated above. I pledge to attempt this 15-minute exam strictly within timed conditions without consulting external books or notes.
            </span>
          </label>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2 border-t border-slate-200">
          <button
            onClick={onCancel}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-bold text-sm hover:bg-slate-50 transition-colors cursor-pointer"
          >
            Cancel
          </button>

          <button
            onClick={() => onStartExam(EXAM_DURATION_MINUTES * 60)}
            disabled={!hasAgreed}
            className={`w-full sm:w-auto px-7 py-3 rounded-xl font-black text-sm text-white flex items-center justify-center gap-2 shadow-lg transition-all ${
              hasAgreed
                ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 shadow-indigo-600/30 cursor-pointer scale-100 hover:scale-[1.02]'
                : 'bg-slate-300 cursor-not-allowed shadow-none'
            }`}
          >
            <Clock className="w-4 h-4" />
            <span>I Agree & Start 15-Minute Exam (60 Marks)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
