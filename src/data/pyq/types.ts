import { NEETQuestion, NEETSubject } from '../../types/neet';

export interface PYQQuestion extends NEETQuestion {
  phase?: 'Phase 1' | 'Phase 2';
  section?: 'Section A' | 'Section B';
  raw_year?: number;
  chapter?: string;
}

export interface PYQPaper {
  id: string;
  yearLabel: string; // e.g. "NEET 2026 (Phase 1)"
  yearNumber: number; // e.g. 2026
  phase?: 'Phase 1' | 'Phase 2';
  subject: NEETSubject;
  totalQuestions: number;
  durationMinutes: number; // 45 or 50 mins
  questions: PYQQuestion[];
}

export type PYQViewMode = 'full_paper' | 'chapter_wise';
