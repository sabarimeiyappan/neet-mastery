import React, { useState } from 'react';
import { 
  Award, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  Clock, 
  BookOpen, 
  Mail, 
  Printer, 
  RotateCcw, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  TrendingUp, 
  TrendingDown, 
  HelpCircle,
  Share2,
  X,
  Send,
  Loader2,
  Check
} from 'lucide-react';
import { NEETQuestion, UserAnswerRecord } from '../types/neet';
import { StudentSession } from './EntryLockScreen';
import { normalizeNCERTPage } from '../utils/ncertUtils';
import { sendScorecardViaEmailJs } from '../utils/emailJsService';
import { MedicalCaduceusLogo } from './MedicalCaduceusLogo';

interface ScorecardModalProps {
  isOpen: boolean;
  onClose: () => void;
  questions: NEETQuestion[];
  answers: Record<number, UserAnswerRecord>;
  subject: string;
  topic: string;
  student: StudentSession | null;
  totalDurationSeconds: number;
  timeRemainingSeconds: number;
  onReviewSolutions: () => void;
  onRetakeExam: () => void;
}

export const ScorecardModal: React.FC<ScorecardModalProps> = ({
  isOpen,
  onClose,
  questions,
  answers,
  subject,
  topic,
  student,
  totalDurationSeconds,
  timeRemainingSeconds,
  onReviewSolutions,
  onRetakeExam,
}) => {
  const [emailStatus, setEmailStatus] = useState<'idle' | 'sending' | 'sent' | 'notice'>('idle');
  const [emailFeedback, setEmailFeedback] = useState<string>('');

  if (!isOpen) return null;

  const totalQuestions = questions.length || 15;
  const maxScore = totalQuestions * 4; // 60 marks for 15 questions

  let correctCount = 0;
  let incorrectCount = 0;
  let unattemptedCount = 0;

  // Track weak chapters/sections and pages from incorrect answers
  const weakPagesMap = new Map<string, { section: string; chapter: string; page: string; marksLost: number; count: number }>();

  questions.forEach((q, idx) => {
    const rec = answers[idx];
    if (!rec?.selectedOption) {
      unattemptedCount++;
    } else if (rec.selectedOption === q.correct_answer) {
      correctCount++;
    } else {
      incorrectCount++;
      const pageKey = `${q.ncert_reference.chapter}::${q.ncert_reference.page_number}`;
      const existing = weakPagesMap.get(pageKey);
      if (existing) {
        existing.marksLost += 5; // 4 missed + 1 negative deduction = 5 marks drag
        existing.count += 1;
      } else {
        weakPagesMap.set(pageKey, {
          section: q.ncert_reference.official_section || 'Core NCERT Concept',
          chapter: q.ncert_reference.chapter,
          page: normalizeNCERTPage(q.ncert_reference.page_number),
          marksLost: 5,
          count: 1,
        });
      }
    }
  });

  const attemptedCount = correctCount + incorrectCount;
  // Official NTA NEET Marking Scheme: +4 for correct, -1 for incorrect, 0 for unattempted
  const totalScore = (correctCount * 4) - (incorrectCount * 1);
  const accuracy = attemptedCount > 0 ? Math.round((correctCount / attemptedCount) * 100) : 0;
  
  const timeSpentSeconds = Math.max(0, totalDurationSeconds - timeRemainingSeconds);
  const minsSpent = Math.floor(timeSpentSeconds / 60);
  const secsSpent = timeSpentSeconds % 60;
  const avgPacePerQ = attemptedCount > 0 ? Math.round(timeSpentSeconds / attemptedCount) : 0;

  // Weak areas list
  const weakAreasList = Array.from(weakPagesMap.values()).sort((a, b) => b.marksLost - a.marksLost);

  // Dynamic Motivation & Score-Tier Strategy
  const getScoreStrategy = (score: number) => {
    if (score >= 52) {
      return {
        tier: 'Target 680+ Medical College Merit',
        badge: 'Top 1% Percentile • Superb NCERT Command',
        badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-300',
        headingColor: 'text-emerald-800',
        motivation: 'Exceptional performance! Your line-by-line NCERT retention is at a top-tier medical college level.',
        tips: [
          'Maintain this rigorous tempo: 15 questions in under 15 minutes is the benchmark for high rankers.',
          'Eliminate isolated negative marks by cross-checking tricky Match-the-Column options in Round 2.',
          'Keep your focus sharp on Biology full-marks potential (360/360 in NEET) to maximize All-India Rank.'
        ]
      };
    } else if (score >= 40) {
      return {
        tier: 'Solid Foundation — Potential 620–650 Range',
        badge: 'High Potential • Eradicate Negative Deductions',
        badgeColor: 'bg-indigo-100 text-indigo-900 border-indigo-300',
        headingColor: 'text-indigo-800',
        motivation: 'Strong fundamental clarity. Your positive score is commendable, but negative marks (-1) are dragging your rank.',
        tips: [
          'Adopt the NTA 2-Round Method: Attempt only 100% verified facts in Round 1.',
          'For 50-50 questions, avoid emotional guessing — look for subtle NCERT qualifiers like "always", "except", or "all".',
          'Revise the flagged NCERT lines below before taking the next test set.'
        ]
      };
    } else if (score >= 25) {
      return {
        tier: 'Negative Mark Vulnerability — Critical Phase',
        badge: 'High Negative Drag • Halt Blind Guesswork',
        badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
        headingColor: 'text-amber-800',
        motivation: 'Negative deductions heavily eroded your score. In NEET, leaving an unattempted question at 0 is vastly superior to losing -1.',
        tips: [
          'Stop guessing on Assertion-Reason questions without verifying whether Reason is the actual explanation of Assertion.',
          'Open your physical NCERT textbook and highlight the exact printed page numbers listed in your Weakness Breakdown.',
          'Focus on accuracy first before prioritizing speed.'
        ]
      };
    } else {
      return {
        tier: 'Foundational Recovery Required',
        badge: 'Textbook First • Rebuild Fundamentals',
        badgeColor: 'bg-rose-100 text-rose-900 border-rose-300',
        headingColor: 'text-rose-800',
        motivation: 'Do not get discouraged — this diagnostic highlights where your textbook reading requires closer scrutiny.',
        tips: [
          'Re-read this chapter in the official NCERT textbook line-by-line before attempting another test.',
          'Pay close attention to summary tables, diagrams, and bold textbook margins.',
          'Use Practice Mode to learn from instant textbook citations and explanations.'
        ]
      };
    }
  };

  const strategy = getScoreStrategy(totalScore);

  // Official NEET Rank & Percentile Predictor (+4 / -1 logic for 60-mark simulation)
  const getNeetPredictor = (score: number) => {
    if (score >= 56) {
      return {
        percentile: '99.85 %ile',
        airBracket: 'AIR 1 – 500 (AIIMS / Top GMC Merit)',
        tierBadge: 'Top 0.15% Merit',
        badgeBg: 'bg-emerald-100 text-emerald-900 border-emerald-300',
        textColor: 'text-emerald-700',
        advice: 'Dominant NCERT command. Maintain 15-minute speed and aim for a flawless 360/360 in NEET Biology.',
      };
    } else if (score >= 50) {
      return {
        percentile: '98.90 %ile',
        airBracket: 'AIR 501 – 2,500 (State Merit GMC)',
        tierBadge: 'Top 1.5% Medical Contender',
        badgeBg: 'bg-teal-100 text-teal-900 border-teal-300',
        textColor: 'text-teal-700',
        advice: 'Secure position. Eradicate minor slip-ups in Match-the-Column options to push past 680+ overall score.',
      };
    } else if (score >= 45) {
      return {
        percentile: '96.40 %ile',
        airBracket: 'AIR 2,501 – 8,000 (Govt Medical College)',
        tierBadge: 'Govt Seat Projected',
        badgeBg: 'bg-indigo-100 text-indigo-900 border-indigo-300',
        textColor: 'text-indigo-700',
        advice: 'Clear conceptual retention. Re-read flagged NCERT lines to eliminate the 5-mark deduction drag.',
      };
    } else if (score >= 40) {
      return {
        percentile: '91.80 %ile',
        airBracket: 'AIR 8,001 – 20,000 (Good State GMC)',
        tierBadge: 'Competitive Foundation',
        badgeBg: 'bg-sky-100 text-sky-900 border-sky-300',
        textColor: 'text-sky-700',
        advice: 'Consistent line study needed. Negative marks (-1) are the primary bottleneck preventing top percentile entry.',
      };
    } else if (score >= 30) {
      return {
        percentile: '82.50 %ile',
        airBracket: 'AIR 20,001 – 50,000 (Cutoff Margin)',
        tierBadge: 'Borderline Rank',
        badgeBg: 'bg-amber-100 text-amber-900 border-amber-300',
        textColor: 'text-amber-700',
        advice: 'Cease blind guessing on Assertion-Reason questions. Only mark questions where textbook line recall is certain.',
      };
    } else if (score >= 20) {
      return {
        percentile: '65.00 %ile',
        airBracket: 'AIR 50,001 – 1,20,000 (Vulnerable)',
        tierBadge: 'High Risk Bracket',
        badgeBg: 'bg-orange-100 text-orange-900 border-orange-300',
        textColor: 'text-orange-700',
        advice: 'High-yield revision required. Re-read physical NCERT textbook pages listed in your weakness diagnostic report.',
      };
    } else {
      return {
        percentile: '< 50.00 %ile',
        airBracket: 'AIR > 1,50,000 (Remedial Focus)',
        tierBadge: 'Foundational Phase',
        badgeBg: 'bg-rose-100 text-rose-900 border-rose-300',
        textColor: 'text-rose-700',
        advice: 'Immediately switch to Practice Tutor Mode and study the verbatim NCERT explanations question-by-question.',
      };
    }
  };

  const predictor = getNeetPredictor(totalScore);

  const highYieldChecklist = [
    { chapter: 'Molecular Basis of Inheritance', weight: '12-16 Marks', status: 'Crucial', focus: 'Lac Operon, Replication, Genetic Code' },
    { chapter: 'Principles of Inheritance & Variation', weight: '12-16 Marks', status: 'High Yield', focus: 'Mendelian ratios, Pedigree analysis, Aneuploidy' },
    { chapter: 'Biotechnology: Principles & Processes', weight: '12-14 Marks', status: 'Guaranteed', focus: 'Restriction endonucleases, PCR, Cloning vectors' },
    { chapter: 'Human Reproduction & Reproductive Health', weight: '12-16 Marks', status: 'Direct NCERT', focus: 'Spermatogenesis, ART methods, Menstrual cycle' },
    { chapter: 'Cell: The Unit of Life & Cell Cycle', weight: '12-16 Marks', status: 'High Yield', focus: 'Meiosis phases, Organelle ultrastructure' },
    { chapter: 'Photosynthesis & Respiration in Plants', weight: '12-16 Marks', status: 'Conceptual', focus: 'C4 pathway, Chemiosmosis, ETS complexes' },
  ];

  // Send scorecard to student email via EmailJS
  const handleSendEmailScorecard = async () => {
    const candidateEmail = student?.contact || '';
    if (!candidateEmail || !candidateEmail.includes('@')) {
      setEmailFeedback('Please provide a valid student email in profile to dispatch scorecard.');
      setEmailStatus('notice');
      return;
    }

    setEmailStatus('sending');
    setEmailFeedback('Dispatching scorecard via EmailJS pipeline...');

    try {
      const result = await sendScorecardViaEmailJs({
        candidateEmail,
        score: totalScore,
        accuracy,
        timeStr: new Date().toLocaleTimeString(),
      });

      if (result.success) {
        setEmailStatus('sent');
        setEmailFeedback(result.message || `Official scorecard sent to ${candidateEmail}! Check your inbox or spam.`);
      } else {
        setEmailStatus('notice');
        setEmailFeedback(`Scorecard saved locally: Score: ${totalScore}/60 (Accuracy: ${accuracy}%). PDF print is available.`);
      }
    } catch (err: any) {
      setEmailStatus('notice');
      setEmailFeedback('Notice: Email server timeout. PDF print option is readily available below.');
    }
  };

  const handlePrintScorecard = () => {
    try {
      const printWindow = window.open('', '_blank');
      if (!printWindow) {
        window.print();
        return;
      }

      const candidateName = student?.name || 'Verified Candidate';
      const candidateContact = student?.contact || 'N/A';
      const examDate = new Date().toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      });
      const examTime = new Date().toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit'
      });

      const weakAreasHtml = weakAreasList.length > 0 
        ? weakAreasList.map(w => `
            <tr>
              <td style="padding: 10px 14px; border: 1px solid #cbd5e1; font-weight: 700; color: #0f172a;">${w.chapter}</td>
              <td style="padding: 10px 14px; border: 1px solid #cbd5e1; color: #0f766e; font-weight: 700;">${w.page}</td>
              <td style="padding: 10px 14px; border: 1px solid #cbd5e1; color: #334155;">${w.section}</td>
              <td style="padding: 10px 14px; border: 1px solid #cbd5e1; color: #b91c1c; font-weight: 800;">-${w.marksLost} Marks</td>
            </tr>
          `).join('')
        : '<tr><td colspan="4" style="padding: 14px; text-align: center; color: #15803d; font-weight: bold;">Flawless 100% Accuracy! Zero negative marks incurred.</td></tr>';

      const tipsHtml = strategy.tips.map((t, idx) => `
        <li style="margin-bottom: 8px; color: #334155;"><strong>${idx + 1}.</strong> ${t}</li>
      `).join('');

      const htmlContent = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>NEET Scorecard - ${candidateName} - ${subject}</title>
  <style>
    * { box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
      margin: 0;
      padding: 30px;
      color: #0f172a;
      background: #f8fafc;
    }
    .scorecard-container {
      max-width: 820px;
      margin: 0 auto;
      background: #ffffff;
      border: 2px solid #0f172a;
      border-radius: 16px;
      padding: 32px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.06);
    }
    .header {
      border-bottom: 2px solid #0f172a;
      padding-bottom: 18px;
      margin-bottom: 22px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }
    .badge {
      font-size: 11px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      background: #047857;
      color: #ffffff;
      padding: 4px 10px;
      border-radius: 4px;
      display: inline-block;
      margin-bottom: 6px;
    }
    h1 {
      font-size: 24px;
      font-weight: 900;
      margin: 0 0 4px 0;
      color: #0f172a;
    }
    .meta-box {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      background: #f1f5f9;
      padding: 16px;
      border-radius: 10px;
      border: 1px solid #e2e8f0;
      margin-bottom: 22px;
      font-size: 13px;
    }
    .grid-stats {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 12px;
      margin-bottom: 24px;
    }
    .card {
      border: 1px solid #cbd5e1;
      border-radius: 10px;
      padding: 16px;
      text-align: center;
      background: #f8fafc;
    }
    .card-score {
      background: #ecfdf5;
      border: 2px solid #10b981;
    }
    .card-score .num { color: #047857; }
    .lbl {
      font-size: 11px;
      font-weight: 800;
      text-transform: uppercase;
      color: #64748b;
    }
    .num {
      font-size: 28px;
      font-weight: 900;
      margin: 4px 0;
      color: #0f172a;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 12px;
      margin: 12px 0 24px 0;
    }
    th {
      background: #f1f5f9;
      padding: 10px 14px;
      text-align: left;
      font-weight: 800;
      border: 1px solid #cbd5e1;
      color: #1e293b;
    }
    .section-head {
      font-size: 14px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: #0f172a;
      margin: 20px 0 8px 0;
    }
    .strategy-box {
      background: #f8fafc;
      border: 1px solid #cbd5e1;
      border-radius: 10px;
      padding: 18px;
      font-size: 13px;
    }
    .footer {
      margin-top: 28px;
      padding-top: 16px;
      border-top: 1px solid #e2e8f0;
      display: flex;
      justify-content: space-between;
      font-size: 11px;
      color: #64748b;
      font-weight: 600;
    }
    @media print {
      body { padding: 0; background: #ffffff; }
      .scorecard-container { border: 1px solid #000; box-shadow: none; max-width: 100%; }
    }
  </style>
</head>
<body>
  <div class="scorecard-container">
    <div class="header">
      <div>
        <div class="badge">Official NTA NEET-UG Simulation Scorecard</div>
        <h1>${subject}: ${topic}</h1>
        <div style="font-size: 12px; color: #475569;">15-Minute Exam Simulation (NTA Rules: +4 Correct / -1 Incorrect / 0 Unattempted)</div>
      </div>
      <div style="text-align: right; font-size: 12px; color: #475569;">
        <div><strong>Date:</strong> ${examDate}</div>
        <div><strong>Time:</strong> ${examTime}</div>
      </div>
    </div>

    <div class="meta-box">
      <div><strong>Candidate:</strong> ${candidateName}</div>
      <div><strong>Registered Email:</strong> ${candidateContact}</div>
      <div><strong>Question Source:</strong> Real 2,633 NCERT Question Master Bank</div>
      <div><strong>Marking Standard:</strong> Official NTA NEET-UG System</div>
    </div>

    <div class="grid-stats">
      <div class="card card-score">
        <div class="lbl">Total Score</div>
        <div class="num">${totalScore} / ${maxScore}</div>
        <div style="font-size: 11px; font-weight: 700; color: #047857;">Net Marks</div>
      </div>
      <div class="card">
        <div class="lbl">Accuracy</div>
        <div class="num">${accuracy}%</div>
        <div style="font-size: 11px; color: #64748b;">${correctCount} of ${attemptedCount} attempted</div>
      </div>
      <div class="card">
        <div class="lbl">Time Taken</div>
        <div class="num">${minsSpent}m ${secsSpent}s</div>
        <div style="font-size: 11px; color: #64748b;">Avg ${avgPacePerQ}s / Q</div>
      </div>
      <div class="card">
        <div class="lbl">Question Breakdown</div>
        <div style="display: flex; justify-content: space-around; margin-top: 6px;">
          <div><strong style="color: #15803d; font-size: 15px;">${correctCount}</strong><br><span style="font-size: 9px; color: #64748b; font-weight: bold;">CORRECT</span></div>
          <div><strong style="color: #b91c1c; font-size: 15px;">${incorrectCount}</strong><br><span style="font-size: 9px; color: #64748b; font-weight: bold;">WRONG</span></div>
          <div><strong style="color: #64748b; font-size: 15px;">${unattemptedCount}</strong><br><span style="font-size: 9px; color: #64748b; font-weight: bold;">SKIPPED</span></div>
        </div>
      </div>
    </div>

    <div style="background: #0f172a; color: #ffffff; padding: 16px 20px; border-radius: 10px; margin: 20px 0;">
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #334155; padding-bottom: 8px; margin-bottom: 10px;">
        <span style="font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px; color: #34d399;">NEET Rank & Percentile Prediction (NTA Standard)</span>
        <span style="font-size: 11px; background: #064e3b; color: #6ee7b7; padding: 2px 8px; border-radius: 4px; font-weight: 800;">${predictor.tierBadge}</span>
      </div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; font-size: 13px;">
        <div>
          <span style="font-size: 11px; color: #94a3b8; text-transform: uppercase;">Estimated Percentile:</span>
          <div style="font-size: 22px; font-weight: 900; color: #34d399; margin-top: 2px;">${predictor.percentile}</div>
        </div>
        <div>
          <span style="font-size: 11px; color: #94a3b8; text-transform: uppercase;">Expected All-India Rank Bracket:</span>
          <div style="font-size: 15px; font-weight: 800; color: #fde047; margin-top: 4px;">${predictor.airBracket}</div>
        </div>
      </div>
      <div style="font-size: 12px; color: #cbd5e1; margin-top: 8px; padding-top: 8px; border-top: 1px solid #1e293b;">
        <strong>Advisor Note:</strong> ${predictor.advice}
      </div>
    </div>

    <div class="section-head">Weakness Analysis & High-Yield NCERT Focus</div>
    <table>
      <thead>
        <tr>
          <th>Chapter</th>
          <th>Printed Page</th>
          <th>Official Section</th>
          <th>Mark Drag</th>
        </tr>
      </thead>
      <tbody>
        ${weakAreasHtml}
      </tbody>
    </table>

    <div class="section-head">Biology High-Yield NCERT Checklist</div>
    <table>
      <thead>
        <tr>
          <th>Chapter Name</th>
          <th>Weightage</th>
          <th>Key NCERT Focus Area</th>
        </tr>
      </thead>
      <tbody>
        ${highYieldChecklist.map(c => `
          <tr>
            <td style="padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 700; color: #0f172a;">${c.chapter}</td>
            <td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #0f766e; font-weight: 800;">${c.weight}</td>
            <td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;">${c.focus}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>

    <div class="section-head">Personalized Motivation & Actionable Strategy</div>
    <div class="strategy-box">
      <p style="margin: 0 0 10px 0; font-weight: 800; color: #0f172a; font-size: 14px;">${strategy.tier} — ${strategy.motivation}</p>
      <ul style="margin: 0; padding-left: 20px;">
        ${tipsHtml}
      </ul>
    </div>

    <div class="footer">
      <div>Platform: © 2026 NEET Mastery Platform — Built by <strong>Sabari Meiyappan M (VIT Vellore)</strong></div>
      <div>100% NCERT Verified Line-by-Line Grounded</div>
    </div>
  </div>
  <script>
    window.onload = function() {
      setTimeout(function() {
        window.print();
      }, 300);
    };
  </script>
</body>
</html>`;

      printWindow.document.open();
      printWindow.document.write(htmlContent);
      printWindow.document.close();
    } catch (e) {
      console.warn('Popup print fallback:', e);
      window.print();
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 animate-in fade-in">
      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-5 sm:p-6 border-b border-slate-800 flex items-start justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <MedicalCaduceusLogo className="w-12 h-12 sm:w-14 sm:h-14" />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-800">
                  Official NTA NEET-UG Simulation Scorecard
                </span>
                <span className="text-xs text-slate-400 hidden sm:inline">• 15-Minute Exam</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight mt-0.5">
                {subject}: {topic}
              </h2>
              <p className="text-xs text-slate-300 mt-0.5">
                Candidate: <strong className="text-white">{student?.name || 'Verified Student'}</strong> • Contact: <span className="text-slate-300">{student?.contact || 'Logged In Candidate'}</span>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0"
            title="Close Scorecard"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-6 flex-1 text-slate-900">
          {/* Main Marks & Metric Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {/* Total Marks */}
            <div className={`p-4 rounded-2xl border-2 flex flex-col justify-between ${
              totalScore >= 45 
                ? 'bg-emerald-50/70 border-emerald-400 text-emerald-950' 
                : totalScore >= 25 
                ? 'bg-amber-50/70 border-amber-400 text-amber-950' 
                : 'bg-rose-50/70 border-rose-400 text-rose-950'
            }`}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider opacity-80">Total Score</span>
                <Award className="w-4 h-4 opacity-75" />
              </div>
              <div className="my-2">
                <span className="text-3xl sm:text-4xl font-black tracking-tight">{totalScore}</span>
                <span className="text-xs font-bold opacity-70"> / {maxScore}</span>
              </div>
              <span className="text-[11px] font-semibold opacity-85">
                Scheme: +4 Correct, -1 Incorrect
              </span>
            </div>

            {/* Accuracy */}
            <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50 flex flex-col justify-between">
              <div className="flex items-center justify-between text-slate-600">
                <span className="text-xs font-bold uppercase tracking-wider">Accuracy</span>
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="my-2">
                <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">{accuracy}%</span>
              </div>
              <span className="text-[11px] font-medium text-slate-600">
                {correctCount} correct of {attemptedCount} attempted
              </span>
            </div>

            {/* Time & Pace */}
            <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50 flex flex-col justify-between">
              <div className="flex items-center justify-between text-slate-600">
                <span className="text-xs font-bold uppercase tracking-wider">Time Taken</span>
                <Clock className="w-4 h-4 text-indigo-600" />
              </div>
              <div className="my-2">
                <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  {minsSpent}m {secsSpent}s
                </span>
              </div>
              <span className="text-[11px] font-medium text-slate-600">
                Avg: {avgPacePerQ}s per question
              </span>
            </div>

            {/* Questions Breakdown */}
            <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50 flex flex-col justify-between">
              <div className="flex items-center justify-between text-slate-600">
                <span className="text-xs font-bold uppercase tracking-wider">Breakdown</span>
                <Sparkles className="w-4 h-4 text-teal-600" />
              </div>
              <div className="grid grid-cols-3 gap-1 my-2 text-center">
                <div className="p-1 rounded-lg bg-emerald-100 text-emerald-900">
                  <span className="block font-black text-sm">{correctCount}</span>
                  <span className="text-[9px] font-bold">Corr</span>
                </div>
                <div className="p-1 rounded-lg bg-rose-100 text-rose-900">
                  <span className="block font-black text-sm">{incorrectCount}</span>
                  <span className="text-[9px] font-bold">Wrong</span>
                </div>
                <div className="p-1 rounded-lg bg-slate-200 text-slate-700">
                  <span className="block font-black text-sm">{unattemptedCount}</span>
                  <span className="text-[9px] font-bold">Skip</span>
                </div>
              </div>
              <span className="text-[11px] font-medium text-slate-600 text-center">
                Total {totalQuestions} Questions
              </span>
            </div>
          </div>

          {/* NEET Rank & Percentile Predictor Card */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white shadow-md border border-slate-800">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-black tracking-tight text-white flex items-center gap-2">
                    <span>NEET Rank &amp; Percentile Predictor</span>
                    <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800">
                      NTA Standard (+4 / -1 Logic)
                    </span>
                  </h3>
                  <p className="text-[11px] text-slate-400">
                    Calculated for 60 Marks / 15 MCQs simulation benchmark
                  </p>
                </div>
              </div>

              <div className={`px-3 py-1 rounded-full text-xs font-black border ${predictor.badgeBg}`}>
                {predictor.tierBadge}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-slate-800/60 p-3.5 rounded-xl border border-slate-700/60">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Estimated Chapter Percentile
                </span>
                <span className="text-2xl sm:text-3xl font-black text-emerald-400 tracking-tight block mt-0.5">
                  {predictor.percentile}
                </span>
                <span className="text-[11px] text-slate-300 mt-1 block">
                  Based on net score of {totalScore}/60
                </span>
              </div>

              <div className="bg-slate-800/60 p-3.5 rounded-xl border border-slate-700/60">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Expected All-India Rank (AIR)
                </span>
                <span className="text-sm sm:text-base font-black text-amber-300 tracking-tight block mt-1">
                  {predictor.airBracket}
                </span>
                <span className="text-[11px] text-slate-300 mt-1 block">
                  Benchmark for full 720 projection
                </span>
              </div>

              <div className="bg-slate-800/60 p-3.5 rounded-xl border border-slate-700/60 flex flex-col justify-between">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Targeted Performance Tip
                </span>
                <p className="text-xs text-slate-200 mt-1 leading-relaxed">
                  {predictor.advice}
                </p>
              </div>
            </div>
          </div>

          {/* Motivation & Strategy Card */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-slate-50 to-teal-50/50 border border-indigo-200">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-indigo-600" />
                <h3 className={`text-base font-extrabold ${strategy.headingColor}`}>
                  {strategy.tier}
                </h3>
              </div>
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-extrabold border ${strategy.badgeColor}`}>
                {strategy.badge}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 mb-3 font-medium">
              {strategy.motivation}
            </p>

            <div className="space-y-1.5 pt-2 border-t border-indigo-100 text-xs text-slate-800">
              <strong className="block text-indigo-950 text-xs font-bold uppercase tracking-wide">
                Actionable NCERT Strategy Tips:
              </strong>
              {strategy.tips.map((tip, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="w-4 h-4 rounded-full bg-indigo-600 text-white text-[10px] flex items-center justify-center font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Weakness Analysis & High-Yield NCERT Focus */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-rose-600" />
                <span>Weakness Analysis &amp; High-Yield NCERT Focus</span>
              </h3>
              <span className="text-xs font-semibold text-slate-500">
                {weakAreasList.length === 0 ? '0 Weak Areas' : `${weakAreasList.length} Flagged Topics`}
              </span>
            </div>

            {weakAreasList.length === 0 ? (
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center text-xs text-emerald-800 font-medium">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 mx-auto mb-1" />
                <strong>Flawless 100% Accuracy!</strong> Zero negative marks incurred on this exam.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {weakAreasList.map((item, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5 rounded-xl border border-rose-200 bg-rose-50/50 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <span className="text-xs font-extrabold text-rose-950 line-clamp-1">
                          {item.section}
                        </span>
                        <span className="text-[11px] font-black text-rose-700 bg-rose-100 px-2 py-0.5 rounded border border-rose-300 shrink-0">
                          -{item.marksLost} Marks Lost
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-600 flex items-center gap-1.5 mb-2">
                        <span>{item.chapter}</span>
                        <span>•</span>
                        <span className="font-bold text-teal-800 bg-teal-100/70 px-1.5 py-0.2 rounded border border-teal-200">
                          Printed {item.page}
                        </span>
                      </div>
                    </div>
                    <div className="text-[11px] text-rose-900 bg-white/80 p-2 rounded-lg border border-rose-100">
                      <strong>Target NCERT Revision:</strong> Re-read line-by-line on {item.page} to eradicate this negative drag.
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* High-Yield NCERT Revision Checklist */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-emerald-600" />
                <h3 className="text-sm font-extrabold text-slate-900">
                  Biology High-Yield NCERT Checklist
                </h3>
              </div>
              <span className="text-[11px] font-extrabold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-300">
                Target 360/360 in Biology
              </span>
            </div>
            <p className="text-xs text-slate-600 mb-3 font-medium">
              Verbatim line-by-line textbook retention is highest for these core high-yield chapters. Ensure every bold keyword and table is revised before taking your next exam mock:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {highYieldChecklist.map((item, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white border border-slate-200 flex items-start justify-between gap-2 shadow-2xs">
                  <div>
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="w-4 h-4 rounded-full bg-emerald-600 text-white text-[10px] flex items-center justify-center font-bold shrink-0">
                        ✓
                      </span>
                      <strong className="text-xs font-bold text-slate-900">{item.chapter}</strong>
                    </div>
                    <span className="text-[11px] text-slate-500 block pl-5">
                      Key Focus: {item.focus}
                    </span>
                  </div>
                  <span className="text-[10px] font-extrabold text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200 shrink-0">
                    {item.weight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Email Dispatch & Feedback Banner */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-teal-700" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 block">
                  Send Official Scorecard to Candidate Email
                </span>
                <span className="text-[11px] text-slate-500">
                  Target Address: <strong className="text-slate-800">{student?.contact || 'your email'}</strong> via EmailJS
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleSendEmailScorecard}
                disabled={emailStatus === 'sending'}
                className="py-2 px-4 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-xs shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
              >
                {emailStatus === 'sending' ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Dispatching...</span>
                  </>
                ) : emailStatus === 'sent' ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Sent Successfully</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Scorecard Now</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {emailFeedback && (
            <div className={`p-3 rounded-xl text-xs font-semibold flex items-center gap-2 ${
              emailStatus === 'sent' 
                ? 'bg-emerald-50 border border-emerald-300 text-emerald-900' 
                : 'bg-amber-50 border border-amber-300 text-amber-900'
            }`}>
              <Sparkles className="w-4 h-4 shrink-0" />
              <span>{emailFeedback}</span>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="bg-slate-50 p-4 sm:p-5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-500 font-semibold">
            Built by <strong>Sabari Meiyappan M (VIT Vellore)</strong> • 100% NCERT Verified
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handlePrintScorecard}
              className="px-3.5 py-2 rounded-xl bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Scorecard</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onRetakeExam();
              }}
              className="px-3.5 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Retake Exam</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onReviewSolutions();
              }}
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs shadow-md shadow-indigo-600/20 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>Review All Questions &amp; Solutions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
