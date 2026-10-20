export type NEETSubject = 'Botany' | 'Zoology' | 'Physics' | 'Chemistry';

export interface NCERTReference {
  class: string;
  chapter: string;
  official_section?: string;
  page_number: string;
  exact_quote?: string;
}

export interface NEETQuestion {
  question_number: number;
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correct_answer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  ncert_reference: NCERTReference;
  question_type?: 'Direct Fact' | 'Assertion-Reason' | 'Statement I & II' | 'Match the Column' | 'Numerical/Conceptual' | 'Conceptual' | string;
  pyq_year?: string;
  subject?: NEETSubject;
}

export interface NEETQuizSet {
  subject: NEETSubject | string;
  topic: string;
  total_questions: number;
  questions: NEETQuestion[];
  mode?: 'practice' | 'exam' | 'pyq' | string;
  batch?: 'initial' | 'remaining' | 'full' | string;
  exam_year?: string;
}

export type AppMode = 'practice' | 'exam' | 'pyq' | 'ncert_map' | 'json_view' | 'mistakes' | 'all';

export interface UserAnswerRecord {
  selectedOption: 'A' | 'B' | 'C' | 'D' | null;
  isMarkedForReview: boolean;
  isBookmarked: boolean;
  timeSpentSeconds: number;
}
