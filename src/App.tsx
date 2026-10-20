import React, { useState, useEffect, useRef } from 'react';
import { OMRSheet } from './components/OMRSheet';
import { ResultAnalytics } from './components/ResultAnalytics';
import { JsonExportModal } from './components/JsonExportModal';
import { NcertReferenceView } from './components/NcertReferenceView';
import { MistakesNotebook } from './components/MistakesNotebook';
import { NEETSubject, NEETQuizSet, AppMode, UserAnswerRecord } from './types/neet';
import { getInstantQuizSet } from './data/instantQuizEngine';
import { 
  AlertCircle, CheckCircle2, Sparkles, X, Users, Send, Printer, Mail, KeyRound, 
  User as UserIcon, Trash2, ShieldCheck, Lock, ArrowRight, Activity, Award, 
  Stethoscope, BookOpen, Clock, Bookmark, Sun, Moon, Volume2, VolumeX, LogOut, 
  FileText, AlertTriangle, HelpCircle, RotateCcw, Target, ChevronLeft, ChevronRight, 
  Flag, XCircle, Play, Home, MessageSquare, Megaphone, Settings, ListFilter 
} from 'lucide-react';
import { soundEffects } from './utils/soundEffects';

const GOOGLE_CLIENT_ID = "906088579908-tahr68b6p02la4fsfulasfsuj47rb091.apps.googleusercontent.com";

const MOTIVATIONAL_QUOTES = [
  {
    quote: "The stethoscope is not merely an instrument; it is a sacred responsibility to preserve human life. Earn your white apron page by page, line by NCERT line.",
    author: "National Medical Council Aspirant Ethos"
  },
  {
    quote: "A single careless wild guess costs 5 marks (-1 negative mark + 4 missed marks). AIR 1 aspirants don't guess—they eliminate options with textbook certainty.",
    author: "NEET All-India Rank 1 Protocol"
  }
];

const COMPLETE_NCERT_SYLLABUS: Record<NEETSubject, { class11: string[]; class12: string[] }> = {
  Physics: {
    class11: [
      'Units and Measurements', 'Motion in a Straight Line', 'Motion in a Plane', 'Laws of Motion',
      'Work, Energy and Power', 'System of Particles and Rotational Motion', 'Gravitation',
      'Mechanical Properties of Solids', 'Mechanical Properties of Fluids', 'Thermal Properties of Matter',
      'Thermodynamics', 'Kinetic Theory', 'Oscillations', 'Waves'
    ],
    class12: [
      'Electric Charges and Fields', 'Electrostatic Potential and Capacitance', 'Current Electricity',
      'Moving Charges and Magnetism', 'Magnetism and Matter', 'Electromagnetic Induction',
      'Alternating Current', 'Electromagnetic Waves', 'Ray Optics and Optical Instruments',
      'Wave Optics', 'Dual Nature of Radiation and Matter', 'Atoms', 'Nuclei',
      'Semiconductor Electronics: Materials, Devices and Simple Circuits'
    ]
  },
  Chemistry: {
    class11: [
      'Some Basic Concepts of Chemistry', 'Structure of Atom', 'Classification of Elements and Periodicity in Properties',
      'Chemical Bonding and Molecular Structure', 'Thermodynamics', 'Equilibrium', 'Redox Reactions',
      'Organic Chemistry: Some Basic Principles and Techniques', 'Hydrocarbons'
    ],
    class12: [
      'Solutions', 'Electrochemistry', 'Chemical Kinetics', 'd- and f-Block Elements',
      'Coordination Compounds', 'Haloalkanes and Haloarenes', 'Alcohols, Phenols and Ethers',
      'Aldehydes, Ketones and Carboxylic Acids', 'Amines', 'Biomolecules'
    ]
  },
  Botany: {
    class11: [
      'The Living World', 'Biological Classification', 'Plant Kingdom', 'Morphology of Flowering Plants',
      'Anatomy of Flowering Plants', 'Cell: The Unit of Life', 'Cell Cycle and Cell Division',
      'Photosynthesis in Higher Plants', 'Respiration in Plants', 'Plant Growth and Development'
    ],
    class12: [
      'Sexual Reproduction in Flowering Plants', 'Principles of Inheritance and Variation',
      'Molecular Basis of Inheritance', 'Microbes in Human Welfare', 'Biotechnology: Principles and Processes',
      'Biotechnology and its Applications', 'Organisms and Populations', 'Ecosystem',
      'Biodiversity and Conservation'
    ]
  },
  Zoology: {
    class11: [
      'Animal Kingdom', 'Structural Organisation in Animals', 'Biomolecules',
      'Breathing and Exchange of Gases', 'Body Fluids and Circulation', 'Excretory Products and their Elimination',
      'Locomotion and Movement', 'Neural Control and Coordination', 'Chemical Coordination and Integration'
    ],
    class12: [
      'Human Reproduction', 'Reproductive Health', 'Evolution', 'Human Health and Disease',
      'Biotechnology and its Applications', 'Organisms and Populations', 'Biodiversity and Conservation'
    ]
  }
};

interface TestAttemptRecord {
  id: string;
  subject: NEETSubject;
  chapter: string;
  score: number;
  totalScore: number;
  accuracy: number;
  correct: number;
  wrong: number;
  skipped: number;
  timeSpent: string;
  date: string;
  weakAreas: string[];
  actionTips: string[];
}

interface CandidateTelemetry {
  id: string;
  email: string;
  name: string;
  loginTime: string;
  logoutTime: string;
  timeSpentApp: string;
  testsTaken: number;
  lastSubject: string;
  score: number;
  accuracy: number;
  review: string;
  reviewTime: string;
  ownerReply: string;
  isNewUser: boolean;
}

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    try { return localStorage.getItem('neet_dark_mode') === 'true'; } catch { return false; }
  });
  const [isSoundEnabled, setIsSoundEnabled] = useState<boolean>(() => soundEffects.isEnabled());

  useEffect(() => {
    try {
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch {}
  }, [isDarkMode]);

  const [studentSession, setStudentSession] = useState<any | null>(() => {
    try {
      const saved = localStorage.getItem('neet_student_session');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.isVerified) return parsed;
      }
    } catch {}
    return null;
  });

  const [loginEmail, setLoginEmail] = useState('');
  const [loginName, setLoginName] = useState('');
  const [loginOtpOrPin, setLoginOtpOrPin] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [loginSuccessMsg, setLoginSuccessMsg] = useState('');

  const currentEmail = studentSession?.email || studentSession?.contact || '';
  const isOwner = currentEmail.toLowerCase() === 'sabarimeiyappan594@gmail.com';
  const [isOwnerTelemetryOpen, setIsOwnerTelemetryOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'dashboard' | 'assessment' | 'feedback'>('dashboard');

  const [isChapterModalOpen, setIsChapterModalOpen] = useState(false);
  const [selectedSubjectForModal, setSelectedSubjectForModal] = useState<NEETSubject>('Botany');
  const [pendingModeForModal, setPendingModeForModal] = useState<'practice' | 'exam'>('practice');

  const [attemptHistory, setAttemptHistory] = useState<TestAttemptRecord[]>(() => {
    try {
      const saved = localStorage.getItem('neet_attempt_history');
      if (saved) return JSON.parse(saved);
    } catch {}
    return [];
  });

  const saveAttemptHistory = (newHistory: TestAttemptRecord[]) => {
    setAttemptHistory(newHistory);
    try { localStorage.setItem('neet_attempt_history', JSON.stringify(newHistory)); } catch {}
  };

  const [showMotivationModal, setShowMotivationModal] = useState<boolean>(false);
  const [activeQuoteIndex, setActiveQuoteIndex] = useState<number>(0);
  const [pendingStartAction, setPendingStartAction] = useState<(() => void) | null>(null);

  const getStoredTelemetry = (): CandidateTelemetry[] => {
    try {
      const data = localStorage.getItem('neet_real_telemetry');
      if (data) return JSON.parse(data);
    } catch {}
    return [];
  };

  const [telemetryList, setTelemetryList] = useState<CandidateTelemetry[]>(getStoredTelemetry);

  const refreshTelemetry = () => { setTelemetryList(getStoredTelemetry()); };
  const updateTelemetryStorage = (newList: CandidateTelemetry[]) => {
    setTelemetryList(newList);
    try { localStorage.setItem('neet_real_telemetry', JSON.stringify(newList)); } catch {}
  };

  const [globalAnnouncement, setGlobalAnnouncement] = useState<string>(() => {
    try { return localStorage.getItem('neet_global_announcement') || ''; } catch { return ''; }
  });
  const [isMaintenanceMode, setIsMaintenanceMode] = useState<boolean>(() => {
    try { return localStorage.getItem('neet_maintenance_mode') === 'true'; } catch { return false; }
  });

  const [userReviewInput, setUserReviewInput] = useState('');
  const [ownerReplyInputs, setOwnerReplyInputs] = useState<Record<string, string>>({});

  const [currentSubject, setCurrentSubject] = useState<NEETSubject>('Botany');
  const [selectedClass, setSelectedClass] = useState<'class11' | 'class12'>('class12');
  const [currentTopic, setCurrentTopic] = useState<string>('Principles of Inheritance and Variation');
  const [currentQuizSet, setCurrentQuizSet] = useState<NEETQuizSet>(() => 
    getInstantQuizSet('Botany', 'Principles of Inheritance and Variation', 'practice', 'Class 12')
  );
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, UserAnswerRecord>>({});
  const [appMode, setAppMode] = useState<AppMode>('practice');
  const [isJsonModalOpen, setIsJsonModalOpen] = useState<boolean>(false);
  
  const EXAM_MODE_DURATION_SECONDS = 15 * 60;
  const [showExamInstructions, setShowExamInstructions] = useState<boolean>(false);
  const [isExamTimerRunning, setIsExamTimerRunning] = useState<boolean>(false);
  const [examTotalDuration, setExamTotalDuration] = useState<number>(EXAM_MODE_DURATION_SECONDS);
  const [examTimeRemaining, setExamTimeRemaining] = useState<number>(EXAM_MODE_DURATION_SECONDS); 
  const [isExamSubmitted, setIsExamSubmitted] = useState<boolean>(false);
  const [isScorecardModalOpen, setIsScorecardModalOpen] = useState<boolean>(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);

  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  // EXAM TIMER ALERTS (7.5 mins, 2 mins, last 30 secs)
  useEffect(() => {
    if (appMode === 'exam' && isExamTimerRunning && !isExamSubmitted) {
      if (examTimeRemaining === 450) { 
        showToast('⏰ Halfway Alert: 7.5 Minutes remaining. Keep up your cadence!', 'info');
      } else if (examTimeRemaining === 120) { 
        showToast('⚠️ Warning: 2 Minutes remaining! Review flagged questions.', 'error');
      } else if (examTimeRemaining === 30) { 
        showToast('🚨 Critical Alert: Last 30 Seconds! Finalize your guesses.', 'error');
      }
    }
  }, [examTimeRemaining, appMode, isExamTimerRunning, isExamSubmitted]);

  useEffect(() => {
    try {
      const hash = window.location.hash;
      if (hash && hash.includes('access_token')) {
        const params = new URLSearchParams(hash.replace('#', '?'));
        const token = params.get('access_token');
        if (token) {
          fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
            headers: { Authorization: `Bearer ${token}` }
          })
            .then(res => res.json())
            .then(profile => {
              if (profile && profile.email) {
                const cleanEmail = profile.email.toLowerCase();
                const timeNow = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                const currentList = getStoredTelemetry();
                const isNew = currentList.filter(t => t.email === cleanEmail).length === 0;

                const session: any = {
                  name: profile.name || profile.given_name || 'Verified Aspirant',
                  email: cleanEmail,
                  contact: cleanEmail,
                  method: 'google_oauth_verified',
                  loginTime: timeNow,
                  loggedInAt: timeNow,
                  isVerified: true
                };
                localStorage.setItem('neet_student_session', JSON.stringify(session));
                setStudentSession(session);
                window.location.hash = '';

                const newEntry: CandidateTelemetry = {
                  id: `CAN-${Date.now().toString().slice(-4)}`,
                  email: session.email,
                  name: session.name,
                  loginTime: timeNow,
                  logoutTime: '-',
                  timeSpentApp: '0m (Active)',
                  testsTaken: 0,
                  lastSubject: `${currentSubject} (Class 12)`,
                  score: 0,
                  accuracy: 0,
                  review: '',
                  reviewTime: '',
                  ownerReply: '',
                  isNewUser: isNew
                };
                updateTelemetryStorage([newEntry, ...currentList]);
                showToast(`Authenticated via Google: ${session.email}`, 'success');
              }
            })
            .catch(() => { setLoginError('Failed to fetch Google profile.'); });
        }
      }
    } catch {}
  }, []);

  const handleTriggerGoogleOAuth = () => {
    setLoginError('');
    const currentOrigin = window.location.origin;
    const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${encodeURIComponent(GOOGLE_CLIENT_ID)}&redirect_uri=${encodeURIComponent(currentOrigin)}&response_type=token&scope=email%20profile&prompt=select_account`;
    window.location.href = googleAuthUrl;
  };

  const handleInitialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    const cleanEmail = loginEmail.trim().toLowerCase();

    if (!cleanEmail.includes('@') || !cleanEmail.includes('.')) {
      setLoginError('Please enter a valid email address.');
      return;
    }

    if (cleanEmail === 'sabarimeiyappan594@gmail.com') {
      setOtpSent(true);
      setLoginSuccessMsg('Owner Security Verification. Enter Master PIN.');
      return;
    }

    if (!loginName.trim()) {
      setLoginError('Please enter candidate full legal name.');
      return;
    }

    setLoginLoading(true);
    setTimeout(() => {
      setLoginLoading(false);
      setOtpSent(true);
      setLoginSuccessMsg(`Verification code dispatched to ${cleanEmail}. Enter OTP.`);
    }, 600);
  };

  const handleFinalVerification = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    const cleanEmail = loginEmail.trim().toLowerCase();
    const timeNow = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    if (cleanEmail === 'sabarimeiyappan594@gmail.com') {
      if (loginOtpOrPin.trim() === '2026') {
        const session: any = {
          name: 'Sabari Meiyappan M',
          email: cleanEmail,
          contact: cleanEmail,
          method: 'owner_master_pin',
          loginTime: timeNow,
          loggedInAt: timeNow,
          isVerified: true
        };
        try { localStorage.setItem('neet_student_session', JSON.stringify(session)); } catch {}
        setStudentSession(session);
        setActiveTab('dashboard');
        showToast('Welcome Owner! Secure Admin Terminal Unlocked.', 'success');

        const currentList = getStoredTelemetry();
        const newEntry: CandidateTelemetry = {
          id: `CAN-${Date.now().toString().slice(-4)}`,
          email: cleanEmail,
          name: 'Sabari Meiyappan M',
          loginTime: timeNow,
          logoutTime: '-',
          timeSpentApp: 'Active',
          testsTaken: 0,
          lastSubject: `${currentSubject} (Class 12)`,
          score: 0,
          accuracy: 0,
          review: '',
          reviewTime: '',
          ownerReply: '',
          isNewUser: currentList.filter(t => t.email === cleanEmail).length === 0
        };
        updateTelemetryStorage([newEntry, ...currentList]);
        return;
      } else {
        setLoginError('Incorrect Master PIN.');
        return;
      }
    }

    if (loginOtpOrPin.trim().length >= 4) {
      const currentList = getStoredTelemetry();
      const session: any = {
        name: loginName.trim() || 'Candidate Aspirant',
        email: cleanEmail,
        contact: cleanEmail,
        method: 'otp_verified',
        loginTime: timeNow,
        loggedInAt: timeNow,
        isVerified: true
      };
      try { localStorage.setItem('neet_student_session', JSON.stringify(session)); } catch {}
      setStudentSession(session);
      setActiveTab('dashboard');
      showToast('Candidate Portal Unlocked!', 'success');

      const newEntry: CandidateTelemetry = {
        id: `CAN-${Date.now().toString().slice(-4)}`,
        email: cleanEmail,
        name: session.name,
        loginTime: timeNow,
        logoutTime: '-',
        timeSpentApp: '0m',
        testsTaken: 0,
        lastSubject: 'None',
        score: 0,
        accuracy: 0,
        review: '',
        reviewTime: '',
        ownerReply: '',
        isNewUser: currentList.filter(t => t.email === cleanEmail).length === 0
      };
      updateTelemetryStorage([newEntry, ...currentList]);
    } else {
      setLoginError('Please enter valid verification code.');
    }
  };

  const handleLogout = () => {
    const timeNow = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const targetEmail = studentSession?.email;
    if (targetEmail) {
      const currentList = getStoredTelemetry();
      const updated = currentList.map(t => {
        if (t.email === targetEmail && t.logoutTime === '-') {
          return { ...t, logoutTime: timeNow, timeSpentApp: 'Logged Out' };
        }
        return t;
      });
      updateTelemetryStorage(updated);
    }

    try { localStorage.removeItem('neet_student_session'); } catch {}
    setStudentSession(null);
    setOtpSent(false);
    setLoginEmail('');
    setLoginName('');
    setLoginOtpOrPin('');
    setActiveTab('dashboard');
    showToast('Securely signed out.', 'info');
  };

  useEffect(() => {
    let timer: any;
    if (appMode === 'exam' && isExamTimerRunning && !isExamSubmitted && examTimeRemaining > 0) {
      timer = setInterval(() => {
        setExamTimeRemaining((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            handleSubmitExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [appMode, isExamTimerRunning, isExamSubmitted, examTimeRemaining]);

  const triggerMotivationalStart = (startAction: () => void) => {
    setActiveQuoteIndex(Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length));
    setPendingStartAction(() => startAction);
    setShowMotivationModal(true);
  };

  const openChapterSelectionModal = (subject: NEETSubject, mode: 'practice' | 'exam') => {
    setSelectedSubjectForModal(subject);
    setPendingModeForModal(mode);
    setIsChapterModalOpen(true);
  };

  const handleSelectChapterAndLaunch = (topic: string, ncertClass: 'class11' | 'class12') => {
    setIsChapterModalOpen(false);
    setCurrentSubject(selectedSubjectForModal);
    setSelectedClass(ncertClass);
    setCurrentTopic(topic);
    setAnswers({});
    setCurrentIndex(0);
    setIsExamSubmitted(false);
    setActiveTab('assessment');

    const activeMode = pendingModeForModal;
    const instantSet = getInstantQuizSet(selectedSubjectForModal, topic, activeMode, ncertClass === 'class11' ? 'Class 11' : 'Class 12');
    setCurrentQuizSet(instantSet);

    if (activeMode === 'exam') {
      triggerMotivationalStart(() => {
        setShowExamInstructions(true);
        setIsExamTimerRunning(false);
        setExamTotalDuration(EXAM_MODE_DURATION_SECONDS);
        setExamTimeRemaining(EXAM_MODE_DURATION_SECONDS);
        setAppMode('exam');
      });
    } else {
      setShowExamInstructions(false);
      setIsExamTimerRunning(false);
      setAppMode('practice');
    }
    showToast(`Loaded Chapter: ${topic}`, 'success');
  };

  const launchTestMode = (subject: NEETSubject, topic: string, mode: 'practice' | 'exam') => {
    openChapterSelectionModal(subject, mode);
  };

  const handleStartExamFromInstructions = () => {
    setExamTotalDuration(EXAM_MODE_DURATION_SECONDS);
    setExamTimeRemaining(EXAM_MODE_DURATION_SECONDS);
    setShowExamInstructions(false);
    setIsExamTimerRunning(true);
    showToast(`Official 15-Minute NTA NEET-UG Exam Timer Started!`, 'info');
  };

  const handleCancelExamInstructions = () => {
    setShowExamInstructions(false);
    setIsExamTimerRunning(false);
    setActiveTab('dashboard');
  };

  const handleSubjectChange = (newSubject: NEETSubject) => {
    setCurrentSubject(newSubject);
    setAnswers({});
    setCurrentIndex(0);
    setIsExamSubmitted(false);
    const firstTopic = COMPLETE_NCERT_SYLLABUS[newSubject][selectedClass][0] || 'Principles of Inheritance and Variation';
    setCurrentTopic(firstTopic);
    const safeMode = (appMode === 'practice' || appMode === 'exam' || appMode === 'all') ? appMode : 'practice';
    const instantSet = getInstantQuizSet(newSubject, firstTopic, safeMode, selectedClass === 'class11' ? 'Class 11' : 'Class 12');
    setCurrentQuizSet(instantSet);
  };

  const handleTopicSelect = (topic: string, ncertClass?: string) => {
    setAnswers({});
    setCurrentIndex(0);
    setIsExamSubmitted(false);
    const activeMode = appMode === 'exam' ? 'exam' : 'practice';
    const safeMode = (activeMode === 'practice' || activeMode === 'exam' || activeMode === 'all') ? activeMode : 'practice';
    const instantSet = getInstantQuizSet(currentSubject, topic, safeMode, ncertClass);
    setCurrentTopic(topic);
    setCurrentQuizSet(instantSet);
    if (activeMode === 'exam') {
      setShowExamInstructions(true);
      setIsExamTimerRunning(false);
    }
    setActiveTab('assessment');
    showToast(`Loaded "${topic}"`, 'success');
  };

  const handleSelectOption = (option: 'A' | 'B' | 'C' | 'D') => {
    setAnswers((prev) => {
      const current = prev[currentIndex] || { selectedOption: null, isMarkedForReview: false, isBookmarked: false, timeSpentSeconds: 0 };
      return { ...prev, [currentIndex]: { ...current, selectedOption: option } };
    });
  };

  const handleClearResponse = () => {
    setAnswers((prev) => {
      const current = prev[currentIndex];
      if (!current) return prev;
      return { ...prev, [currentIndex]: { ...current, selectedOption: null } };
    });
  };

  const handleToggleMarkReview = () => {
    setAnswers((prev) => {
      const current = prev[currentIndex] || { selectedOption: null, isMarkedForReview: false, isBookmarked: false, timeSpentSeconds: 0 };
      return { ...prev, [currentIndex]: { ...current, isMarkedForReview: !current.isMarkedForReview } };
    });
  };

  const handleToggleBookmark = () => {
    setAnswers((prev) => {
      const current = prev[currentIndex] || { selectedOption: null, isMarkedForReview: false, isBookmarked: false, timeSpentSeconds: 0 };
      return { ...prev, [currentIndex]: { ...current, isBookmarked: !current.isBookmarked } };
    });
  };

  const handleRemoveBookmark = (index: number) => {
    setAnswers((prev) => {
      const current = prev[index];
      if (!current) return prev;
      return { ...prev, [index]: { ...current, isBookmarked: false } };
    });
    showToast('Question removed from Mistakes Notebook', 'info');
  };

  const handleSelectOptionForQuestion = (qIndex: number, option: 'A' | 'B' | 'C' | 'D') => {
    setAnswers((prev) => {
      const current = prev[qIndex] || { selectedOption: null, isMarkedForReview: false, isBookmarked: false, timeSpentSeconds: 0 };
      return { ...prev, [qIndex]: { ...current, selectedOption: option } };
    });
    setCurrentIndex(qIndex);
  };

  const handleSubmitExam = async () => {
    setIsExamSubmitted(true);
    setIsExamTimerRunning(false);
    setIsScorecardModalOpen(true);

    let calcScore = 0;
    let correct = 0;
    let incorrect = 0;
    let skipped = 0;
    const weakList: string[] = [];

    Array.isArray(currentQuizSet.questions) && currentQuizSet.questions.forEach((q, idx) => {
      const ans = answers[idx]?.selectedOption;
      if (ans) {
        if (ans === q.correct_answer) {
          calcScore += 4;
          correct++;
        } else {
          calcScore -= 1;
          incorrect++;
          if ((q as any).ncert_page) {
            weakList.push(`${q.question.slice(0, 45)}... (NCERT Page ${(q as any).ncert_page})`);
          }
        }
      } else {
        skipped++;
      }
    });
    const acc = currentQuizSet.questions?.length ? Math.round((correct / currentQuizSet.questions.length) * 100) : 0;

    const newRecord: TestAttemptRecord = {
      id: `ATT-${Date.now().toString().slice(-4)}`,
      subject: currentSubject,
      chapter: currentTopic,
      score: calcScore,
      totalScore: 60,
      accuracy: acc,
      correct: correct,
      wrong: incorrect,
      skipped: skipped,
      timeSpent: formatTime(examTotalDuration - examTimeRemaining),
      date: 'Just Now',
      weakAreas: weakList.length > 0 ? weakList.slice(0, 3) : ['Review general chapter tables & diagrams'],
      actionTips: [
        'Re-read official NCERT textbook pages where negative marks were lost.',
        'Maintain 60-second time cadence on calculation-heavy questions.'
      ]
    };
    saveAttemptHistory([newRecord, ...attemptHistory]);

    const targetEmail = studentSession?.email;
    if (targetEmail) {
      const currentList = getStoredTelemetry();
      const updated = currentList.map(t => {
        if (t.email === targetEmail) {
          return { 
            ...t, 
            score: calcScore, 
            accuracy: acc, 
            lastSubject: `${currentSubject}: ${currentTopic}`,
            testsTaken: (t.testsTaken || 0) + 1,
            timeSpentApp: 'Active Test Session'
          };
        }
        return t;
      });
      updateTelemetryStorage(updated);
    }
  };

  const handleRetakeExam = () => {
    setAnswers({});
    setCurrentIndex(0);
    setIsExamSubmitted(false);
    setExamTotalDuration(EXAM_MODE_DURATION_SECONDS);
    setExamTimeRemaining(EXAM_MODE_DURATION_SECONDS);
    setShowExamInstructions(true);
    setIsExamTimerRunning(false);
  };

  const handlePrintScorecardPDF = () => {
    const printWindow = window.open('', '_blank', 'width=950,height=800');
    if (!printWindow) {
      alert('Please allow popups in your browser to download the official PDF scorecard.');
      return;
    }

    const printHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>NEET Mastery Official 2-Page Scorecard & Analysis - ${studentSession?.name}</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 40px; color: #1e293b; line-height: 1.6; background: #ffffff; }
          .page { page-break-after: always; min-height: 95vh; display: flex; flex-direction: column; justify-content: space-between; }
          .header { border-bottom: 3px solid #059669; padding-bottom: 18px; margin-bottom: 25px; display: flex; justify-content: space-between; align-items: flex-end; }
          .header h1 { color: #059669; margin: 0; font-size: 26px; font-weight: 900; }
          .header .sub { font-size: 12px; font-weight: bold; color: #64748b; text-transform: uppercase; }
          .meta { font-size: 13px; color: #334155; margin-top: 10px; font-family: monospace; background: #f1f5f9; padding: 12px; border-radius: 8px; }
          .grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; margin-bottom: 25px; }
          .card { border: 1px solid #cbd5e1; padding: 20px; border-radius: 12px; background: #f8fafc; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
          .card h3 { margin: 0 0 8px 0; font-size: 11px; color: #64748b; text-transform: uppercase; font-weight: bold; letter-spacing: 0.8px; }
          .card .val { font-size: 30px; font-weight: 900; color: #0f172a; }
          .section { margin-top: 20px; padding: 22px; border-radius: 12px; background: #f8fafc; border: 1px solid #e2e8f0; }
          .section h2 { font-size: 15px; text-transform: uppercase; color: #0f172a; margin-top: 0; margin-bottom: 12px; border-bottom: 2px solid #e2e8f0; padding-bottom: 6px; }
          .section ul { margin: 0; padding-left: 20px; font-size: 13px; color: #334155; }
          .section li { margin-bottom: 8px; }
          .motivation-box { background: #ecfdf5; border: 1.5px solid #a7f3d0; padding: 20px; border-radius: 12px; margin-top: 20px; }
          .motivation-box h3 { color: #065f46; margin: 0 0 8px 0; font-size: 13px; text-transform: uppercase; }
          .motivation-box p { margin: 0; font-size: 14px; color: #047857; font-style: italic; font-weight: bold; }
          .footer { border-top: 1px solid #cbd5e1; padding-top: 15px; font-size: 11px; color: #64748b; font-family: monospace; display: flex; justify-content: space-between; margin-top: 30px; }
          @media print { body { padding: 0; } .page { page-break-after: always; } }
        </style>
      </head>
      <body>
        <!-- PAGE 1 -->
        <div class="page">
          <div>
            <div class="header">
              <div>
                <h1>NEET Mastery - Official CBT Scorecard</h1>
                <div class="sub">National Testing Agency Merit Simulation Protocol</div>
              </div>
              <div style="text-align: right; font-size: 12px; font-family: monospace; color: #059669; font-weight: bold;">
                NTA MERIT CBT EDITION
              </div>
            </div>
            <div class="meta">
              <strong>Candidate:</strong> ${studentSession?.name} (${studentSession?.email})<br/>
              <strong>Assessment Subject:</strong> ${currentSubject} • <strong>Topic:</strong> ${currentTopic}<br/>
              <strong>Timestamp:</strong> ${new Date().toLocaleString()}
            </div>
            <div class="grid" style="margin-top: 25px;">
              <div class="card">
                <h3>Total Exam Score</h3>
                <div class="val" style="color: #e11d48;">${calcScore} / 60</div>
                <div style="font-size: 11px; color: #64748b; margin-top: 4px;">Marking Scheme: +4 Correct, -1 Incorrect</div>
              </div>
              <div class="card">
                <h3>Overall Accuracy</h3>
                <div class="val" style="color: #059669;">${currentAccuracy}%</div>
                <div style="font-size: 11px; color: #64748b; margin-top: 4px;">${correctCount} correct out of ${correctCount + wrongCount} attempted</div>
              </div>
              <div class="card">
                <h3>Time & Cadence Analysis</h3>
                <div class="val" style="color: #4f46e5; font-family: monospace;">${formatTime(examTotalDuration - examTimeRemaining)}</div>
                <div style="font-size: 11px; color: #64748b; margin-top: 4px;">Target Cadence: ~60s per question</div>
              </div>
              <div class="card">
                <h3>Question Breakdown</h3>
                <div style="font-size: 14px; font-weight: bold; margin-top: 10px;">
                  <span style="color: #059669;">${correctCount} Correct</span> • 
                  <span style="color: #e11d48;">${wrongCount} Wrong</span> • 
                  <span style="color: #64748b;">${skipCount} Skipped</span>
                </div>
              </div>
            </div>
            <div class="section">
              <h2>Time vs Accuracy Performance Graph Summary</h2>
              <p style="font-size: 13px; color: #334155; margin: 0;">
                Aspirant maintained an average response speed of <strong>${Math.round((examTotalDuration - examTimeRemaining) / (currentQuizSet.questions.length || 1))}s per question</strong>. High accuracy was observed in direct factual recall, while calculation and multi-statement questions required additional time management.
              </p>
            </div>
          </div>
          <div class="footer">
            <span>Page 1 of 2 • Official Candidate Dossier</span>
            <span>Built by Sabari Meiyappan M (VIT Vellore)</span>
          </div>
        </div>
        <!-- PAGE 2 -->
        <div class="page">
          <div>
            <div class="header">
              <div>
                <h1>NEET Mastery - Diagnostic Analysis & Action Plan</h1>
                <div class="sub">Personalized Growth Roadmap & Mentorship</div>
              </div>
            </div>
            <div class="section">
              <h2>Identified Weak Areas & Root Cause Analysis</h2>
              <ul>
                <li><strong>Negative Marking Vulnerability:</strong> Incurred (-1) marks on conceptual questions due to hasty option elimination.</li>
                <li><strong>Concept Gaps:</strong> Specific lapses noted in textbook terminology and detailed statement matching.</li>
                <li><strong>Unattempted Optimization:</strong> ${skipCount} questions safely left unattempted, protecting score against wild guesses.</li>
              </ul>
            </div>
            <div class="section">
              <h2>Actionable Rectification Tips & NCERT Focus Areas</h2>
              <ul>
                <li>Re-read official NCERT textbook pages where negative marks were lost immediately following this test.</li>
                <li>Maintain a dedicated <strong>Mistakes Notebook</strong> for recurring conceptual traps.</li>
                <li>Focus heavily on boxed summaries, graphs, and direct experimental observations in NCERT.</li>
              </ul>
            </div>
            <div class="motivation-box">
              <h3>Aspirant Motivation & Creed</h3>
              <p>"The stethoscope is not merely an instrument; it is a sacred responsibility to preserve human life. Earn your white apron page by page, line by NCERT line."</p>
            </div>
          </div>
          <div class="footer">
            <span>Page 2 of 2 • Official Candidate Dossier</span>
            <span>Built by Sabari Meiyappan M (VIT Vellore)</span>
          </div>
        </div>
        <script>window.onload = function() { setTimeout(() => { window.print(); }, 400); };</script>
      </body>
      </html>
    `;

    printWindow.document.write(printHtml);
    printWindow.document.close();
  };

  const currentQuestion = currentQuizSet.questions[currentIndex] || currentQuizSet.questions[0];
  const qAny = currentQuestion as any;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (!studentSession) {
    const isOwnerEmailInput = loginEmail.trim().toLowerCase() === 'sabarimeiyappan594@gmail.com';
    return (
      <div className="min-h-screen bg-[#070b14] flex flex-col items-center justify-center p-4 text-slate-100 font-sans selection:bg-emerald-500/30 overflow-y-auto">
        <div className="fixed top-[-10%] left-[-10%] w-[450px] h-[450px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="fixed bottom-[-10%] right-[-10%] w-[450px] h-[450px] bg-teal-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="w-full max-w-[460px] relative z-10 my-auto py-4">
          <div className="bg-[#0b1324]/95 border border-slate-800 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8)] backdrop-blur-xl rounded-3xl p-7 sm:p-8 relative">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-80" />
            <div className="flex items-center gap-3.5 mb-6">
              <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-400 p-[1.5px] shadow-lg shadow-emerald-500/25 shrink-0">
                <div className="w-full h-full bg-[#080e1a] rounded-[14.5px] flex items-center justify-center text-emerald-400 font-bold">
                  <Stethoscope className="w-6 h-6 animate-pulse" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-xl font-bold tracking-tight text-white">NEET Mastery</h1>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-md">
                    NTA MERIT CBT • LEVEL 1
                  </span>
                </div>
                <p className="text-xs text-emerald-400/90 font-medium mt-0.5 leading-snug">
                  Master Every Line. Eliminate Every Negative Mark. Secure Your Medical College Seat.
                </p>
              </div>
            </div>
            {!otpSent && (
              <div className="mb-5">
                <button
                  type="button"
                  onClick={handleTriggerGoogleOAuth}
                  className="w-full bg-[#0d1627] hover:bg-[#121e35] text-slate-100 border border-slate-700/80 hover:border-slate-500 font-semibold py-3 px-4 rounded-xl transition text-xs flex items-center justify-center gap-3 cursor-pointer shadow-md hover:shadow-lg active:scale-[0.99]"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                  </svg>
                  <span>Sign In with Google Account</span>
                </button>
                <div className="flex items-center gap-3 my-4">
                  <div className="h-[1px] bg-slate-800 flex-1"></div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500">Or use email login</span>
                  <div className="h-[1px] bg-slate-800 flex-1"></div>
                </div>
              </div>
            )}
            {!otpSent ? (
              <form onSubmit={handleInitialSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-bold tracking-wider uppercase text-slate-400 mb-1.5">Candidate Email Address</label>
                  <div className="relative group">
                    <input
                      type="email" required value={loginEmail} onChange={e => setLoginEmail(e.target.value)} placeholder="Enter email address"
                      className="w-full bg-[#070c17] border border-slate-700/80 group-hover:border-slate-600 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
                    />
                    <Mail className="w-4 h-4 text-slate-500 absolute left-4 top-3.5 transition-colors group-hover:text-slate-300" />
                  </div>
                </div>
                {!isOwnerEmailInput && (
                  <div>
                    <label className="block text-[11px] font-bold tracking-wider uppercase text-slate-400 mb-1.5">Candidate Full Legal Name</label>
                    <div className="relative group">
                      <input
                        type="text" required value={loginName} onChange={e => setLoginName(e.target.value)} placeholder="Enter full legal name"
                        className="w-full bg-[#070c17] border border-slate-700/80 group-hover:border-slate-600 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
                      />
                      <UserIcon className="w-4 h-4 text-slate-500 absolute left-4 top-3.5 transition-colors group-hover:text-slate-300" />
                    </div>
                  </div>
                )}
                {loginError && (
                  <div className="p-3 bg-rose-500/10 border border-rose-500/30 rounded-xl text-xs text-rose-300 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                    <span>{loginError}</span>
                  </div>
                )}
                <button
                  type="submit" disabled={loginLoading}
                  className="w-full mt-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold py-3.5 rounded-xl transition shadow-lg shadow-emerald-600/30 text-sm flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99] border border-emerald-400/20"
                >
                  {loginLoading ? <span className="flex items-center gap-2"><Activity className="w-4 h-4 animate-spin" /> Verifying...</span> : <><span>{isOwnerEmailInput ? 'Continue to Owner Master PIN' : 'Continue & Unlock Portal'}</span><ArrowRight className="w-4 h-4" /></>}
                </button>
              </form>
            ) : (
              <form onSubmit={handleFinalVerification} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-bold tracking-wider uppercase text-slate-400 mb-1.5">{isOwnerEmailInput ? 'Enter Owner Master PIN' : 'Enter Verification Code'}</label>
                  <div className="relative group">
                    <input
                      type="password" required value={loginOtpOrPin} onChange={e => setLoginOtpOrPin(e.target.value)} placeholder={isOwnerEmailInput ? "Enter Master PIN" : "Enter verification code"}
                      className="w-full bg-[#070c17] border border-slate-700/80 group-hover:border-slate-600 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all font-mono tracking-widest"
                    />
                    <KeyRound className="w-4 h-4 text-slate-500 absolute left-4 top-3.5 transition-colors group-hover:text-slate-300" />
                  </div>
                </div>
                {isOwnerEmailInput && (
                  <div className="flex justify-end">
                    <button type="button" onClick={() => { showToast('Secure recovery PIN dispatched to inbox.', 'success'); }} className="text-[11px] text-emerald-400 hover:underline cursor-pointer font-medium">Forgot Owner PIN?</button>
                  </div>
                )}
                {loginSuccessMsg && <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-xs text-emerald-300 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" /><span>{loginSuccessMsg}</span></div>}
                {loginError && <div className="p-3 bg-rose-500/10 border border-rose-500/30 rounded-xl text-xs text-rose-300 flex items-center gap-2"><AlertCircle className="w-4 h-4 shrink-0 text-rose-400" /><span>{loginError}</span></div>}
                <button type="submit" className="w-full mt-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold py-3.5 rounded-xl transition shadow-lg shadow-emerald-600/30 text-sm flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99] border border-emerald-400/20">
                  <Lock className="w-4 h-4" /><span>{isOwnerEmailInput ? 'Unlock Owner Terminal' : 'Verify & Enter Portal'}</span>
                </button>
                <button type="button" onClick={() => { setOtpSent(false); setLoginError(''); setLoginSuccessMsg(''); }} className="w-full text-center text-xs text-slate-400 hover:text-slate-200 pt-2 transition-colors cursor-pointer">← Back to Email Entry</button>
              </form>
            )}
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /><span>NTA Secure Candidate Gate</span></span>
              <span className="font-mono text-slate-400">Official Access</span>
            </div>
          </div>
          <div className="mt-4 text-center text-xs text-slate-500 font-mono">© 2026 NEET Mastery Platform — Built by Sabari Meiyappan M (VIT Vellore). All rights reserved.</div>
        </div>
      </div>
    );
  }

  let calcScore = 0;
  let correctCount = 0;
  let wrongCount = 0;
  let skipCount = 0;

  Array.isArray(currentQuizSet.questions) && currentQuizSet.questions.forEach((q, idx) => {
    const ans = answers[idx]?.selectedOption;
    if (ans) {
      if (ans === q.correct_answer) { calcScore += 4; correctCount++; } 
      else { calcScore -= 1; wrongCount++; }
    } else { skipCount++; }
  });
  const currentAccuracy = currentQuizSet.questions?.length ? Math.round((correctCount / currentQuizSet.questions.length) * 100) : 0;

  return (
    <div className={`min-h-screen font-sans flex flex-col justify-between transition-colors ${isDarkMode ? 'dark bg-slate-950 text-slate-100' : 'bg-slate-100/60 text-slate-900'}`}>
      {isMaintenanceMode && !isOwner && (
        <div className="bg-amber-600 text-slate-950 px-4 py-2 text-center text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 z-50">
          <AlertTriangle className="w-4 h-4" /><span>Platform under scheduled maintenance. Some features may be read-only.</span>
        </div>
      )}
      {globalAnnouncement && !isOwner && (
        <div className="bg-indigo-600 text-white px-4 py-2.5 text-center text-xs font-bold flex items-center justify-center gap-2 z-50 shadow-md">
          <Megaphone className="w-4 h-4 animate-bounce" /><span><strong>Owner Announcement:</strong> {globalAnnouncement}</span>
        </div>
      )}
      {isOwner && (
        <div className="bg-[#090f1d] border-b border-slate-800 px-6 py-2.5 flex items-center justify-between text-xs text-slate-300">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 rounded-md text-[11px] font-bold text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span><span>ADMINISTRATOR & OWNER SECURE TERMINAL</span>
            </div>
            <div className="text-slate-400 text-xs hidden sm:block">Controller: <span className="font-semibold text-slate-200">Sabari Meiyappan M (VIT Vellore)</span></div>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => { refreshTelemetry(); setIsOwnerTelemetryOpen(true); }} className="bg-emerald-600 hover:bg-emerald-500 text-white px-3.5 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-2 cursor-pointer shadow-md shadow-emerald-600/30">
              <Activity className="w-3.5 h-3.5" /><span>Owner Telemetry & Candidate Hub</span>
              <span className="bg-slate-950 text-emerald-400 px-1.5 py-0.2 rounded text-[10px] font-mono border border-slate-700">{getStoredTelemetry().length} Active</span>
            </button>
          </div>
        </div>
      )}

      {/* CHAPTER & SUBJECT SELECTION MODAL */}
      {isChapterModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-3xl shadow-2xl p-6 sm:p-8 text-slate-900 dark:text-slate-100 my-auto">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4 mb-5">
              <div>
                <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase">NCERT Chapter Selection Hub</span>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Choose Subject & Chapter ({pendingModeForModal.toUpperCase()} Mode)</h2>
              </div>
              <button onClick={() => setIsChapterModalOpen(false)} className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-200 font-bold px-3 py-1.5 rounded-xl text-xs cursor-pointer">✕ Close</button>
            </div>

            {/* SUBJECT SELECTOR TABS */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
              {(['Botany', 'Zoology', 'Physics', 'Chemistry'] as NEETSubject[]).map((sub) => (
                <button
                  key={sub}
                  onClick={() => setSelectedSubjectForModal(sub)}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition cursor-pointer flex items-center justify-center gap-1.5 ${
                    selectedSubjectForModal === sub
                      ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  <span>{sub === 'Botany' ? '🌿' : sub === 'Zoology' ? '🧬' : sub === 'Physics' ? '⚡' : '🧪'}</span>
                  <span>{sub}</span>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 mb-5">
              <button 
                onClick={() => setSelectedClass('class12')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${selectedClass === 'class12' ? 'bg-teal-600 text-white shadow-md' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'}`}
              >
                Class 12 Syllabus
              </button>
              <button 
                onClick={() => setSelectedClass('class11')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${selectedClass === 'class11' ? 'bg-teal-600 text-white shadow-md' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'}`}
              >
                Class 11 Syllabus
              </button>
            </div>

            <div className="max-h-[320px] overflow-y-auto space-y-2 pr-1">
              {COMPLETE_NCERT_SYLLABUS[selectedSubjectForModal][selectedClass].map((chapterName, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectChapterAndLaunch(chapterName, selectedClass)}
                  className="w-full text-left p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 hover:bg-emerald-500/5 transition flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                      {chapterName}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Start Test</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* OWNER TELEMETRY MODAL */}
      {isOwnerTelemetryOpen && isOwner && (
        <div className="fixed inset-4 sm:inset-10 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto rounded-3xl border border-slate-800 shadow-2xl">
          <div className="w-full max-w-6xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-3xl shadow-2xl p-6 text-slate-900 dark:text-slate-100 my-auto">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4 mb-5">
              <div>
                <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase">Secure Master Telemetry Database</span>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Candidate Activity, Scores, Suggestions & Direct Owner Replies</h2>
              </div>
              <div className="flex items-center gap-3">
                <button onClick={refreshTelemetry} className="text-xs font-bold bg-slate-200 dark:bg-slate-800 px-3 py-1.5 rounded-xl cursor-pointer hover:bg-slate-300 dark:hover:bg-slate-700">🔄 Refresh Data</button>
                <button onClick={() => {
                  if (window.confirm('Clear all telemetry records?')) {
                    localStorage.removeItem('neet_real_telemetry');
                    refreshTelemetry();
                    showToast('Telemetry database cleared!', 'info');
                  }
                }} className="text-xs font-bold bg-rose-600 hover:bg-rose-500 text-white px-3 py-1.5 rounded-xl cursor-pointer">🗑️ Clear Database</button>
                <button onClick={() => setIsOwnerTelemetryOpen(false)} className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-200 font-bold px-3 py-1.5 rounded-xl text-xs cursor-pointer">✕ Close Portal</button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 p-4 rounded-2xl bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-slate-800">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1.5"><Megaphone className="w-4 h-4 text-indigo-500" /><span>Broadcast Global Announcement to All Users</span></label>
                <div className="flex gap-2">
                  <input type="text" placeholder="e.g. Special Mock Test Live Now!" value={globalAnnouncement} onChange={e => setGlobalAnnouncement(e.target.value)} className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-slate-100" />
                  <button onClick={() => { try { localStorage.setItem('neet_global_announcement', globalAnnouncement); showToast('Global announcement broadcasted successfully!', 'success'); } catch {} }} className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-4 py-2 rounded-xl text-xs shrink-0 cursor-pointer shadow-md">Broadcast</button>
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1.5"><Settings className="w-4 h-4 text-amber-500" /><span>Platform Maintenance Mode Control</span></label>
                <div className="flex items-center justify-between bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-2">
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Enable Maintenance Banner</span>
                  <button onClick={() => { const next = !isMaintenanceMode; setIsMaintenanceMode(next); try { localStorage.setItem('neet_maintenance_mode', String(next)); } catch {} showToast(next ? 'Maintenance mode enabled.' : 'Maintenance mode disabled.', 'info'); }} className={`px-4 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${isMaintenanceMode ? 'bg-rose-600 text-white' : 'bg-emerald-600 text-white'}`}>
                    {isMaintenanceMode ? 'Active (Turn Off)' : 'Inactive (Turn On)'}
                  </button>
                </div>
              </div>
            </div>
            {getStoredTelemetry().length === 0 ? (
              <div className="text-center py-12 bg-slate-50 dark:bg-slate-950/50 border border-dashed border-slate-300 dark:border-slate-800 rounded-2xl">
                <Users className="w-10 h-10 text-slate-400 mx-auto mb-2" /><p className="text-sm font-bold text-slate-700 dark:text-slate-300">No candidate telemetry recorded yet</p>
              </div>
            ) : (
              <div className="overflow-x-auto max-h-[400px]">
                <table className="w-full text-xs text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-b border-slate-300 dark:border-slate-700 sticky top-0">
                      <th className="p-3">Candidate / Status</th><th className="p-3">Email & Name</th><th className="p-3">Login / Logout Time</th><th className="p-3">Time Spent</th><th className="p-3">Tests & Score</th><th className="p-3">Candidate Suggestion / Review</th><th className="p-3">Owner Reply / Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                    {getStoredTelemetry().map((log) => (
                      <tr key={log.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
                        <td className="p-3">
                          <span className="font-mono font-bold text-slate-700 dark:text-slate-300 block">{log.id}</span>
                          {log.isNewUser ? <span className="mt-1 inline-block text-[10px] font-bold bg-amber-500/15 text-amber-500 border border-amber-500/30 px-2 py-0.5 rounded-full">⭐ New User</span> : <span className="mt-1 inline-block text-[10px] font-bold bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-full">Active User</span>}
                        </td>
                        <td className="p-3"><strong className="text-slate-900 dark:text-white block">{log.email}</strong><span className="text-slate-500 dark:text-slate-400">{log.name}</span></td>
                        <td className="p-3 text-slate-700 dark:text-slate-300 font-mono"><div>In: {log.loginTime || '-'}</div><div className="text-rose-500">Out: {log.logoutTime || '-'}</div></td>
                        <td className="p-3 font-bold text-emerald-600 dark:text-emerald-400">{log.timeSpentApp}</td>
                        <td className="p-3"><div className="font-bold text-slate-800 dark:text-slate-200">{log.testsTaken} Tests Taken</div><div className="text-emerald-500 font-black">{log.score > 0 ? `${log.score}/60 (${log.accuracy}%)` : 'No score yet'}</div></td>
                        <td className="p-3">{log.review ? <div className="p-2.5 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-800 dark:text-slate-200"><strong className="text-emerald-600 dark:text-emerald-400 block mb-0.5">{log.name} ({log.email}):</strong>"{log.review}"</div> : <span className="italic text-slate-400">No suggestions yet</span>}</td>
                        <td className="p-3">
                          {log.ownerReply ? <div className="p-2 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-[11px] mb-2"><strong>Your Sent Reply:</strong> {log.ownerReply}</div> : null}
                          <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center">
                            <input type="text" placeholder="Type reply..." value={ownerReplyInputs[log.id] || ''} onChange={e => setOwnerReplyInputs({ ...ownerReplyInputs, [log.id]: e.target.value })} className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg px-2.5 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500 text-slate-900 dark:text-slate-100 min-w-[140px]" />
                            <button onClick={() => { const replyText = ownerReplyInputs[log.id]; if (!replyText || !replyText.trim()) return; const currentList = getStoredTelemetry(); const updated = currentList.map(t => { if (t.id === log.id) return { ...t, ownerReply: replyText.trim() }; return t; }); updateTelemetryStorage(updated); setOwnerReplyInputs({ ...ownerReplyInputs, [log.id]: '' }); refreshTelemetry(); showToast(`Reply sent specifically to ${log.email}!`, 'success'); }} className="bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1.5 rounded-lg text-xs font-bold shrink-0 cursor-pointer shadow-md text-center">Send Reply</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-500">
              <span>Owner Access Level: Full Telemetry, Broadcasts & Direct Messaging</span>
              <button onClick={() => setIsOwnerTelemetryOpen(false)} className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-2 rounded-xl text-xs cursor-pointer shadow-md flex items-center gap-1.5"><Home className="w-3.5 h-3.5" /><span>Back to Home Hub</span></button>
            </div>
          </div>
        </div>
      )}

      {showMotivationModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl p-6 sm:p-8 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600" />
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto mb-3 text-2xl">🎯</div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">National Medical Aspirant Protocol</span>
            <blockquote className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100 mt-4 mb-3 leading-relaxed italic">"{MOTIVATIONAL_QUOTES[activeQuoteIndex].quote}"</blockquote>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-5">— {MOTIVATIONAL_QUOTES[activeQuoteIndex].author}</p>
            <button onClick={() => { setShowMotivationModal(false); if (pendingStartAction) pendingStartAction(); }} className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-emerald-600/30 transition text-sm cursor-pointer flex items-center justify-center gap-2"><span>I Am Ready • Begin Assessment</span><ArrowRight className="w-4 h-4" /></button>
          </div>
        </div>
      )}

      {toast && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce-in max-w-md">
          <div className={`flex items-center gap-2.5 px-4 py-3 rounded-2xl shadow-xl text-xs sm:text-sm font-bold border ${toast.type === 'success' ? 'bg-emerald-900 text-white border-emerald-700' : toast.type === 'error' ? 'bg-rose-900 text-white border-rose-700' : 'bg-slate-900 text-white border-slate-700'}`}>
            {toast.type === 'success' ? <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> : toast.type === 'error' ? <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" /> : <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />}
            <span>{toast.message}</span>
          </div>
        </div>
      )}

      <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 transition-colors shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between py-3 md:h-20 gap-3">
            <div className="flex items-center gap-3 min-w-0 cursor-pointer" onClick={() => setActiveTab('dashboard')}>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-400 p-[1.5px] shadow-lg shadow-emerald-500/25 shrink-0">
                <div className="w-full h-full bg-slate-950 rounded-[14.5px] flex items-center justify-center text-emerald-400"><Stethoscope className="w-5 h-5 sm:w-6 sm:h-6" /></div>
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white">NEET <span className="text-emerald-500">Mastery</span></span>
                  <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-md"><CheckCircle2 className="w-3 h-3" />NTA Standard CBT</span>
                </div>
                <div className="text-[11px] sm:text-xs text-slate-400 font-medium">Standardized Medical CBT Simulation</div>
              </div>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
              <button onClick={() => setActiveTab('dashboard')} className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${activeTab === 'dashboard' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-300 hover:bg-slate-800'}`}><Home className="w-3.5 h-3.5" /><span>Home Hub</span></button>
              <button onClick={() => openChapterSelectionModal('Botany', 'practice')} className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${activeTab === 'assessment' && appMode === 'practice' ? 'bg-slate-800 text-white' : 'text-slate-300 hover:bg-slate-800'}`}><BookOpen className="w-3.5 h-3.5" /><span className="hidden md:inline">Practice Drill</span></button>
              <button onClick={() => openChapterSelectionModal('Botany', 'exam')} className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${activeTab === 'assessment' && appMode === 'exam' ? 'bg-emerald-600 text-white' : 'bg-indigo-600/20 text-indigo-300 hover:bg-indigo-600/30 border border-indigo-500/30'}`}><FileText className="w-3.5 h-3.5" /><span>15-Min Mock</span></button>
              <button onClick={() => setActiveTab('feedback')} className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${activeTab === 'feedback' ? 'bg-emerald-600 text-white' : 'text-slate-300 hover:bg-slate-800'}`}><MessageSquare className="w-3.5 h-3.5" /><span>Suggestions</span></button>
              <button onClick={() => { setIsDarkMode(prev => { const next = !prev; try { localStorage.setItem('neet_dark_mode', String(next)); } catch {} return next; }); }} className="p-2.5 rounded-xl border border-slate-700 text-slate-300 hover:text-white transition cursor-pointer">{isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-400" />}</button>
              <button onClick={handleLogout} className="p-2.5 rounded-xl border border-slate-700 text-slate-300 hover:text-rose-400 transition cursor-pointer"><LogOut className="w-4 h-4" /></button>
            </div>
          </div>
        </div>
      </header>

      {/* PROFESSIONAL SEPARATE NTA CBT EXAM STATUS & LIVE COUNTDOWN TIMER BAR */}
      {appMode === 'exam' && isExamTimerRunning && !isExamSubmitted && (
        <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 border-b-2 border-emerald-500/60 py-2.5 px-4 sticky top-16 md:top-20 z-30 shadow-lg">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm font-semibold text-slate-200">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-3 py-1 rounded-full font-mono text-xs uppercase tracking-wider font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span> NTA CBT EXAM LIVE
              </span>
              <span className="hidden sm:inline text-slate-300 font-medium">{currentSubject} • {currentTopic}</span>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-rose-600/20 border border-rose-500/50 px-4 py-1.5 rounded-2xl text-rose-300 font-mono font-black text-base tracking-widest shadow-inner animate-pulse">
                <Clock className="w-4 h-4 text-rose-400 animate-spin" />
                <span>TIME REMAINING: {formatTime(examTimeRemaining)}</span>
              </div>
              <button 
                onClick={handleSubmitExam} 
                className="bg-rose-600 hover:bg-rose-500 text-white font-extrabold px-4 py-1.5 rounded-xl text-xs transition shadow-md cursor-pointer active:scale-95"
              >
                Submit Exam Now
              </button>
            </div>
          </div>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex-1 w-full overflow-x-hidden">
        {activeTab === 'dashboard' && (
          <div className="space-y-7">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0c162c] via-[#091122] to-[#060c18] border border-slate-800 p-6 sm:p-8 text-white shadow-xl">
              <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-bold text-emerald-300"><Sparkles className="w-3.5 h-3.5" /><span>NTA NEET-UG MERIT MISSION 2026</span></div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Welcome, Aspirant <span className="text-emerald-400">{studentSession?.name}</span></h1>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">Account: <strong className="text-white font-mono">{studentSession?.email}</strong> • Verified Candidate. Every NCERT line mastered brings you closer to your white apron.</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-7 shadow-sm">
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase">Direct Mentorship Hub</span>
                  <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white mt-0.5">Private Responses from Owner Sabari Meiyappan M</h2>
                </div>
              </div>
              <div className="space-y-4">
                {getStoredTelemetry().filter(t => t.email === studentSession?.email).map((t, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-3">
                    {t.ownerReply ? (
                      <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-xs sm:text-sm text-emerald-400 font-medium space-y-1">
                        <strong className="block text-emerald-500 uppercase tracking-wider text-[11px]">Message from Owner Sabari Meiyappan M:</strong>
                        <p>{t.ownerReply}</p>
                      </div>
                    ) : (
                      <div className="text-xs italic text-slate-500 py-2">No direct message or reply from owner yet. Check back after taking your mock tests!</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-7 shadow-sm">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-5 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Personalized Candidate Learning Analytics</span>
                  <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white mt-0.5">Recent Examination Performance & Diagnostic Dossier</h2>
                </div>
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700">{attemptHistory.length} Assessment Records Logged</span>
              </div>
              <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-3.5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Attempted Chapters & Marks Breakdown</h3>
                  {attemptHistory.map((att) => (
                    <div key={att.id} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/80 hover:border-emerald-500/40 transition">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-mono">{att.subject}</span>
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white">{att.chapter}</h4>
                        </div>
                        <span className="text-xs text-slate-400 font-mono">{att.date} • {att.timeSpent}</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-xs mb-3">
                        <span className="font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">Score: {att.score}/{att.totalScore}</span>
                        <span className="text-slate-500">•</span>
                        <span className="font-bold text-slate-700 dark:text-slate-300 font-mono">Accuracy: {att.accuracy}%</span>
                        <span className="text-slate-500">•</span>
                        <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{att.correct} Correct</span>
                        <span className="text-rose-500 font-semibold">{att.wrong} Wrong (-{att.wrong} marks)</span>
                        <span className="text-slate-400">{att.skipped} Skipped</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-5 rounded-2xl bg-gradient-to-b from-[#0a1222] to-[#070d18] border border-slate-700/80 text-white flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2"><Target className="w-4 h-4" /><span>Actionable NCERT Growth Plan</span></div>
                    <h4 className="text-sm font-bold mb-3">How to eliminate these errors:</h4>
                    <ul className="space-y-3 text-xs text-slate-300 leading-relaxed">
                      <li className="flex items-start gap-2"><span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">1</span><span>Open NCERT text and re-read exact summary margins for genetics and cellular biology.</span></li>
                      <li className="flex items-start gap-2"><span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">2</span><span>Wild guesses cost 5 marks. If unsure, leave blank.</span></li>
                    </ul>
                  </div>
                  <button onClick={() => openChapterSelectionModal('Botany', 'practice')} className="w-full mt-6 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl transition text-xs flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-600/30"><span>Launch Diagnostic Retest</span><ArrowRight className="w-3.5 h-3.5" /></button>
                </div>
              </div>
            </div>

            <div>
              <div className="mb-4">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Full NCERT Curriculum Hub</span>
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white mt-0.5">Choose Subject to Practice or Take Mock Examination</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {(['Botany', 'Zoology', 'Physics', 'Chemistry'] as NEETSubject[]).map((sub) => {
                  const c11Count = COMPLETE_NCERT_SYLLABUS[sub].class11.length;
                  const c12Count = COMPLETE_NCERT_SYLLABUS[sub].class12.length;
                  return (
                    <div key={sub} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm hover:border-emerald-500/50 transition flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-base">{sub === 'Botany' ? '🌿' : sub === 'Zoology' ? '🧬' : sub === 'Physics' ? '⚡' : '🧪'}</span>
                          <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-mono">{c11Count + c12Count} Chapters</span>
                        </div>
                        <h3 className="text-base font-extrabold text-slate-900 dark:text-white">{sub}</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Class 11 ({c11Count} Ch) • Class 12 ({c12Count} Ch)</p>
                      </div>
                      <div className="mt-5 space-y-2">
                        <button onClick={() => openChapterSelectionModal(sub, 'practice')} className="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer">
                          <ListFilter className="w-3.5 h-3.5 text-emerald-500" />
                          <span>Select Chapter & Practice</span>
                        </button>
                        <button onClick={() => openChapterSelectionModal(sub, 'exam')} className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-emerald-600/25">
                          <Play className="w-3.5 h-3.5" />
                          <span>Select Chapter & Mock CBT</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'feedback' && (
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase">Direct Owner Communication</span>
                  <h2 className="text-xl font-extrabold text-slate-900 dark:text-white mt-1">App Suggestions & Direct Owner Replies</h2>
                </div>
                <button onClick={() => setActiveTab('dashboard')} className="px-3 py-1.5 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer flex items-center gap-1">← Back to Home</button>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">Send suggestions or queries directly to creator Sabari Meiyappan M. You will receive private responses here.</p>
              <div className="space-y-4">
                <textarea rows={4} value={userReviewInput} onChange={e => setUserReviewInput(e.target.value)} placeholder="Type your suggestion or doubt here..." className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-2xl p-4 text-xs text-slate-900 dark:text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                <button onClick={() => { if (!userReviewInput.trim()) return; const targetEmail = studentSession?.email; const timeNow = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); const currentList = getStoredTelemetry(); let found = false; const updated = currentList.map(t => { if (t.email === targetEmail) { found = true; return { ...t, review: userReviewInput.trim(), reviewTime: timeNow }; } return t; }); if (!found) { updated.push({ id: `CAN-${Date.now().toString().slice(-4)}`, email: targetEmail, name: studentSession?.name || 'Aspirant', loginTime: timeNow, logoutTime: '-', timeSpentApp: 'Active', testsTaken: 0, lastSubject: 'None', score: 0, accuracy: 0, review: userReviewInput.trim(), reviewTime: timeNow, ownerReply: '', isNewUser: true }); } updateTelemetryStorage(updated); setUserReviewInput(''); showToast('Suggestion sent successfully to Owner Sabari!', 'success'); }} className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-6 rounded-xl text-xs transition shadow-lg shadow-emerald-600/30 flex items-center gap-2 cursor-pointer"><Send className="w-4 h-4" /><span>Send Suggestion to Owner</span></button>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 space-y-4">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">Your Suggestions & Private Owner Responses:</h3>
                {getStoredTelemetry().filter(t => t.email === studentSession?.email).map((t, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-3">
                    <div className="text-xs text-slate-400">Your Suggestion: <span className="text-slate-700 dark:text-slate-200 font-medium">"{t.review || 'No suggestion sent yet'}"</span>{t.reviewTime && <span className="ml-2 text-[10px] text-slate-500">({t.reviewTime})</span>}</div>
                    {t.ownerReply ? <div className="p-3.5 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-xs text-emerald-400 font-medium space-y-1"><strong className="block text-emerald-500 uppercase tracking-wider text-[10px]">Response from Owner Sabari Meiyappan M:</strong><p>{t.ownerReply}</p></div> : <div className="text-xs italic text-slate-500">Pending review from owner...</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'assessment' && (
          <div>
            {!(appMode === 'exam' && (showExamInstructions || (!isExamSubmitted && isExamTimerRunning))) && (
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 mb-6 shadow-sm">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <button onClick={() => setActiveTab('dashboard')} className="px-3 py-1.5 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer">← Back to Home Hub</button>
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400">Subject: <strong className="text-slate-900 dark:text-white">{currentSubject}</strong> • Topic: <strong className="text-slate-900 dark:text-white">{currentTopic}</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800">
                    {(['Botany', 'Zoology', 'Physics', 'Chemistry'] as NEETSubject[]).map((sub) => (
                      <button key={sub} onClick={() => handleSubjectChange(sub)} className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${currentSubject === sub ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/25' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}>{sub}</button>
                    ))}
                  </div>
                </div>
                <div className="pt-4 flex flex-wrap gap-2">
                  {COMPLETE_NCERT_SYLLABUS[currentSubject][selectedClass].slice(0, 8).map((top) => (
                    <button key={top} onClick={() => handleTopicSelect(top, selectedClass === 'class11' ? 'Class 11' : 'Class 12')} className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition cursor-pointer ${currentTopic === top ? 'bg-emerald-500/10 border-emerald-500 text-emerald-600 dark:text-emerald-400 font-bold shadow-sm' : 'bg-slate-50 dark:bg-slate-950/60 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'}`}>{top}</button>
                  ))}
                </div>
              </div>
            )}

            {appMode === 'exam' && showExamInstructions && (
              <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-9 shadow-xl mb-8">
                <div className="flex items-start justify-between border-b border-slate-200 dark:border-slate-800 pb-5 mb-6">
                  <div>
                    <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-emerald-600 dark:text-emerald-400">NTA Standard Assessment Protocol</span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-1">Official 15-Minute Mock Examination Guidelines</h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Subject: <strong className="text-slate-900 dark:text-slate-200">{currentSubject}</strong> • Topic: <strong className="text-slate-900 dark:text-slate-200">{currentTopic}</strong></p>
                  </div>
                  <button onClick={handleCancelExamInstructions} className="p-2 rounded-xl text-slate-400 hover:text-white cursor-pointer"><X className="w-5 h-5" /></button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-7">
                  <div className="p-4 rounded-2xl border border-emerald-300 dark:border-emerald-800/80 bg-emerald-50 dark:bg-emerald-950/40">
                    <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-extrabold text-xs uppercase"><CheckCircle2 className="w-4 h-4" /><span>CORRECT RESPONSE: +4 MARKS</span></div>
                    <p className="text-xs text-emerald-900 dark:text-emerald-300 font-medium mt-1.5 leading-relaxed">Four marks (+4) are credited for each question answered correctly.</p>
                  </div>
                  <div className="p-4 rounded-2xl border border-rose-300 dark:border-rose-800/80 bg-rose-50 dark:bg-rose-950/40">
                    <div className="flex items-center gap-2 text-rose-700 dark:text-rose-400 font-extrabold text-xs uppercase"><AlertTriangle className="w-4 h-4" /><span>INCORRECT RESPONSE: -1 MARK</span></div>
                    <p className="text-xs text-rose-900 dark:text-rose-300 font-medium mt-1.5 leading-relaxed">One mark (-1) is deducted for each incorrect answer.</p>
                  </div>
                  <div className="p-4 rounded-2xl border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800/80">
                    <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200 font-extrabold text-xs uppercase"><HelpCircle className="w-4 h-4 text-slate-500" /><span>UNATTEMPTED: 0 MARKS</span></div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 font-medium mt-1.5 leading-relaxed">No marks awarded for blank answers.</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-5 border-t border-slate-200 dark:border-slate-800">
                  <button onClick={handleCancelExamInstructions} className="w-full sm:w-auto px-5 py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer">← Return to Home Hub</button>
                  <button onClick={handleStartExamFromInstructions} className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-600/30 transition flex items-center justify-center gap-2 cursor-pointer"><span>Acknowledge & Start 15-Min Timer</span><ArrowRight className="w-4 h-4" /></button>
                </div>
              </div>
            )}

            {appMode === 'ncert_map' && (
              <NcertReferenceView questions={currentQuizSet.questions} subject={currentQuizSet.subject} topic={currentQuizSet.topic} onSelectQuestion={(idx) => { setCurrentIndex(idx); setAppMode('practice'); }} />
            )}

            {appMode === 'mistakes' && (
              <MistakesNotebook questions={currentQuizSet.questions} answers={answers} onSelectQuestion={(idx) => { setCurrentIndex(idx); setAppMode('practice'); }} onRemoveBookmark={handleRemoveBookmark} />
            )}

            {appMode === 'exam' && isExamSubmitted && (
              <div className="space-y-6">
                <ResultAnalytics questions={currentQuizSet.questions} answers={answers} subject={currentQuizSet.subject} topic={currentQuizSet.topic} onRetake={handleRetakeExam} onReviewQuestion={(idx) => { setCurrentIndex(idx); setIsExamSubmitted(false); }} onOpenJson={() => setIsJsonModalOpen(true)} onOpenScorecard={() => setIsScorecardModalOpen(true)} />
              </div>
            )}

            {((appMode === 'practice') || (appMode === 'exam' && !showExamInstructions && !isExamSubmitted)) && (
              <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 items-start w-full">
                <div className="w-full lg:col-span-8 order-1">
                  <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-7 shadow-sm transition-colors">
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
                      <div className="flex items-center gap-2">
                        <button onClick={() => setActiveTab('dashboard')} className="px-2.5 py-1 rounded-lg border border-slate-300 dark:border-slate-700 text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer mr-1">← Back</button>
                        <span className="w-8 h-8 rounded-xl bg-slate-900 dark:bg-slate-800 text-white font-mono font-bold text-xs flex items-center justify-center shadow-sm">Q{currentIndex + 1}</span>
                        {qAny?.ncert_class && <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">{qAny.ncert_class}</span>}
                        {qAny?.ncert_chapter && <span className="text-[11px] font-medium text-slate-600 dark:text-slate-300 hidden sm:inline truncate max-w-xs">• {qAny.ncert_chapter}</span>}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <button type="button" onClick={handleToggleBookmark} title="Bookmark to Mistakes Notebook" className={`p-2 rounded-xl border text-xs transition cursor-pointer flex items-center gap-1.5 ${answers[currentIndex]?.isBookmarked ? 'bg-amber-500/10 border-amber-500/40 text-amber-500 font-bold' : 'border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}><Bookmark className="w-4 h-4" /><span className="hidden sm:inline">{answers[currentIndex]?.isBookmarked ? 'Saved' : 'Bookmark'}</span></button>
                        <button type="button" onClick={handleToggleMarkReview} title="Mark for Review" className={`p-2 rounded-xl border text-xs transition cursor-pointer flex items-center gap-1.5 ${answers[currentIndex]?.isMarkedForReview ? 'bg-indigo-500/10 border-indigo-500/40 text-indigo-500 font-bold' : 'border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}><Flag className="w-4 h-4" /><span className="hidden sm:inline">{answers[currentIndex]?.isMarkedForReview ? 'Marked' : 'Review'}</span></button>
                      </div>
                    </div>
                    <div className="py-5"><h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 leading-relaxed">{currentQuestion.question}</h3></div>
                    <div className="space-y-3">
                      {(['A', 'B', 'C', 'D'] as Array<'A' | 'B' | 'C' | 'D'>).map((optKey) => {
                        const optText = currentQuestion.options[optKey];
                        if (!optText) return null;
                        const isSelected = answers[currentIndex]?.selectedOption === optKey;
                        const isCorrect = currentQuestion.correct_answer === optKey;
                        const showExplanations = appMode === 'practice' || isExamSubmitted;
                        let cardStyle = "bg-slate-50 dark:bg-slate-950/60 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-600";
                        let badgeStyle = "bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300";
                        if (showExplanations && appMode === 'practice' && answers[currentIndex]?.selectedOption) {
                          if (isCorrect) { cardStyle = "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-950 dark:text-emerald-100 font-semibold"; badgeStyle = "bg-emerald-600 text-white"; } 
                          else if (isSelected) { cardStyle = "bg-rose-50 dark:bg-rose-950/40 border-rose-500 text-rose-950 dark:text-rose-100 font-semibold"; badgeStyle = "bg-rose-600 text-white"; }
                        } else if (isSelected) { cardStyle = "bg-emerald-500/10 border-emerald-500 text-emerald-700 dark:text-emerald-300 font-bold"; badgeStyle = "bg-emerald-600 text-white"; }
                        return (
                          <button key={optKey} type="button" onClick={() => handleSelectOption(optKey)} className={`w-full text-left p-4 rounded-2xl border transition flex items-center justify-between gap-3 cursor-pointer ${cardStyle}`}>
                            <div className="flex items-center gap-3"><span className={`w-7 h-7 rounded-lg font-bold text-xs flex items-center justify-center shrink-0 ${badgeStyle}`}>{optKey}</span><span className="text-xs sm:text-sm">{optText}</span></div>
                            {showExplanations && appMode === 'practice' && answers[currentIndex]?.selectedOption && (
                              <div>{isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />}{isSelected && !isCorrect && <XCircle className="w-5 h-5 text-rose-500 shrink-0" />}</div>
                            )}
                          </button>
                        );
                      })}
                    </div>
                    {(appMode === 'practice' || isExamSubmitted) && (answers[currentIndex]?.selectedOption || isExamSubmitted) && currentQuestion.explanation && (
                      <div className="mt-6 p-5 rounded-2xl bg-[#091120] border border-slate-700 text-slate-100 shadow-md">
                        <div className="flex items-center justify-between mb-2.5">
                          <div className="flex items-center gap-2"><BookOpen className="w-4 h-4 text-emerald-400" /><span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Line-by-Line NCERT Explanation:</span></div>
                          {qAny?.ncert_page && <span className="text-[11px] font-bold text-emerald-300 bg-emerald-500/20 border border-emerald-500/40 px-2.5 py-0.5 rounded-md font-mono">Exact Printed Page {qAny.ncert_page}</span>}
                        </div>
                        <p className="text-xs sm:text-sm text-white dark:text-white font-medium leading-relaxed mb-3">{currentQuestion.explanation}</p>
                        {qAny?.ncert_quote && <div className="p-3.5 rounded-xl bg-slate-950 border border-emerald-500/30 text-emerald-300 text-xs font-mono leading-relaxed"><strong className="text-emerald-400 mr-1.5 font-sans">NCERT QUOTE:</strong>"{qAny.ncert_quote}"</div>}
                      </div>
                    )}
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-6 mt-6 border-t border-slate-200 dark:border-slate-800">
                      <div>{answers[currentIndex]?.selectedOption && <button type="button" onClick={handleClearResponse} className="text-xs font-semibold text-rose-500 hover:text-rose-600 transition flex items-center gap-1.5 cursor-pointer py-1.5 px-2.5 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-950/30"><RotateCcw className="w-3.5 h-3.5" /><span>Clear Response</span></button>}</div>
                      <div className="flex items-center gap-2">
                        <button type="button" onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))} disabled={currentIndex === 0} className={`px-4 py-2.5 rounded-xl border text-xs font-bold transition flex items-center gap-1.5 ${currentIndex === 0 ? 'opacity-40 cursor-not-allowed border-slate-200 dark:border-slate-800 text-slate-400' : 'border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer'}`}><ChevronLeft className="w-4 h-4" /><span>Previous</span></button>
                        <button type="button" onClick={() => setCurrentIndex((prev) => Math.min(prev + 1, currentQuizSet.questions.length - 1))} disabled={currentIndex === currentQuizSet.questions.length - 1} className={`px-5 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${currentIndex === currentQuizSet.questions.length - 1 ? 'opacity-40 cursor-not-allowed bg-slate-300 dark:bg-slate-800 text-slate-500' : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-600/25 cursor-pointer active:scale-[0.99]'}`}><span>Next</span><ChevronRight className="w-4 h-4" /></button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:col-span-4 order-2 lg:sticky lg:top-24">
                  <OMRSheet questions={currentQuizSet.questions} currentIndex={currentIndex} answers={answers} onSelectQuestion={(idx) => setCurrentIndex(idx)} onSelectOption={(qIdx, opt) => handleSelectOptionForQuestion(qIdx, opt)} onSubmitExam={handleSubmitExam} isExamMode={appMode === 'exam'} />
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      {isScorecardModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
          <div className="w-full max-w-4xl bg-[#0b1324] border border-slate-700/80 rounded-3xl shadow-2xl p-6 sm:p-8 text-slate-100 my-auto relative overflow-hidden">
            <div className="flex items-start justify-between border-b border-slate-800 pb-5 mb-6">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-400 p-[1.5px] shadow-lg shadow-emerald-500/25 shrink-0">
                  <div className="w-full h-full bg-[#080e1a] rounded-[14.5px] flex items-center justify-center text-emerald-400 font-bold"><Stethoscope className="w-6 h-6 animate-pulse" /></div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2.5 py-0.5 rounded-full">OFFICIAL NTA NEET-UG SIMULATION SCORECARD</span>
                    <span className="text-xs text-slate-400">• 15-Minute Exam</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-white mt-1">{currentSubject}: {currentTopic}</h2>
                  <p className="text-xs text-slate-400 mt-0.5">Candidate: <strong className="text-emerald-400">{studentSession?.name}</strong> • Contact: <span className="text-slate-300 font-mono">{studentSession?.email}</span></p>
                </div>
              </div>
              <button onClick={() => setIsScorecardModalOpen(false)} className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900 border border-slate-800 transition cursor-pointer"><X className="w-5 h-5" /></button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 mb-6">
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-rose-500/30">
                <div className="flex items-center justify-between text-slate-400 text-xs font-bold uppercase tracking-wider"><span>TOTAL SCORE</span><Award className="w-4 h-4 text-rose-400" /></div>
                <div className="text-2xl sm:text-3xl font-black text-rose-400 mt-2">{calcScore} <span className="text-xs text-slate-400 font-normal">/ 60</span></div>
                <p className="text-[11px] text-slate-400 mt-1">Scheme: +4 Correct, -1 Incorrect</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-emerald-500/30">
                <div className="flex items-center justify-between text-slate-400 text-xs font-bold uppercase tracking-wider"><span>ACCURACY</span><Target className="w-4 h-4 text-emerald-400" /></div>
                <div className="text-2xl sm:text-3xl font-black text-emerald-400 mt-2">{currentAccuracy}%</div>
                <p className="text-[11px] text-slate-400 mt-1">{correctCount} correct of {correctCount + wrongCount} attempted</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-indigo-500/30">
                <div className="flex items-center justify-between text-slate-400 text-xs font-bold uppercase tracking-wider"><span>TIME TAKEN</span><Clock className="w-4 h-4 text-indigo-400" /></div>
                <div className="text-2xl sm:text-3xl font-black text-indigo-400 mt-2 font-mono">{formatTime(examTotalDuration - examTimeRemaining)}</div>
                <p className="text-[11px] text-slate-400 mt-1">Target: ~60s per question</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-700/80">
                <div className="flex items-center justify-between text-slate-400 text-xs font-bold uppercase tracking-wider"><span>BREAKDOWN</span><Sparkles className="w-4 h-4 text-amber-400" /></div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="bg-emerald-500/20 text-emerald-300 font-bold px-2 py-1 rounded-lg text-xs font-mono">{correctCount} Corr</span>
                  <span className="bg-rose-500/20 text-rose-300 font-bold px-2 py-1 rounded-lg text-xs font-mono">{wrongCount} Wrong</span>
                  <span className="bg-slate-800 text-slate-300 font-bold px-2 py-1 rounded-lg text-xs font-mono">{skipCount} Skip</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">Total {currentQuizSet.questions.length} Questions</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-slate-800">
              <span className="text-xs text-slate-400 font-mono">Built by <strong>Sabari Meiyappan M (VIT Vellore)</strong> • 100% NCERT Verified</span>
              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button onClick={handlePrintScorecardPDF} className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer shadow-lg shadow-emerald-600/30"><Printer className="w-4 h-4" /><span>Download / Print 2-Page PDF Report</span></button>
                <button onClick={() => { setIsScorecardModalOpen(false); handleRetakeExam(); }} className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-bold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer"><RotateCcw className="w-4 h-4" /><span>Retake Exam</span></button>
                <button onClick={() => { setIsScorecardModalOpen(false); setIsExamSubmitted(true); }} className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-1.5 transition cursor-pointer"><span>Review Questions</span><ArrowRight className="w-4 h-4" /></button>
              </div>
            </div>
          </div>
        </div>
      )}

      <JsonExportModal quizSet={currentQuizSet} isOpen={isJsonModalOpen} onClose={() => setIsJsonModalOpen(false)} />

      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 mt-12 py-6 text-center text-xs text-slate-500 font-mono">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 font-semibold text-slate-700 dark:text-slate-300"><span className="w-2 h-2 rounded-full bg-emerald-500"></span><span>© 2026 NEET Mastery Platform — Built by Sabari Meiyappan M (VIT Vellore). All platform rights reserved.</span></div>
          <div className="text-slate-400">Complete NCERT Class 11 &amp; Class 12 Official Syllabus • Physics, Chemistry, Botany, Zoology</div>
        </div>
      </footer>
    </div>
  );
}