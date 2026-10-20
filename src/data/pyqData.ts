import { NEETQuestion, NEETSubject } from '../types/neet';
import { getAllPYQQuestions, AVAILABLE_PYQ_YEARS, ALL_PYQ_PAPERS, getPYQPaper, getChapterWisePYQs } from './pyq';

export * from './pyq';

export const NEET_PYQS_DATABASE: NEETQuestion[] = getAllPYQQuestions();
export const PYQ_YEARS: string[] = ['All Years (2015-2026)', ...AVAILABLE_PYQ_YEARS];
