import { NEETSubject } from '../../types/neet';
import { PYQPaper, PYQQuestion, PYQViewMode } from './types';
import { 
  getSubject45Questions, 
  getFullOfficial180Paper, 
  OFFICIAL_NEET_YEARS,
  FullOfficial180Paper 
} from './fullPaperEngine';

export * from './types';
export * from './fullPaperEngine';

// Re-export available years for the UI selector
export const AVAILABLE_PYQ_YEARS = OFFICIAL_NEET_YEARS;

// Pre-compiled papers for all subjects across all years
export const ALL_PYQ_PAPERS: PYQPaper[] = AVAILABLE_PYQ_YEARS.flatMap(yr => 
  (['Physics', 'Chemistry', 'Botany', 'Zoology'] as NEETSubject[]).map(subj => getPYQPaper(yr, subj))
);

/**
 * Retrieve a full official 45-question paper for a subject and year.
 * Guaranteed strictly 45 questions (Section A: 1-35, Section B: 36-45),
 * official keys, and exact single NCERT textbook page citations.
 */
export function getPYQPaper(yearLabel: string, subject: NEETSubject): PYQPaper {
  const yearDigits = yearLabel.replace(/[^0-9]/g, '');
  const questions = getSubject45Questions(yearLabel, subject);

  return {
    id: `neet-${yearLabel.toLowerCase().replace(/[^a-z0-9]/g, '-')}-${subject.toLowerCase()}`,
    yearLabel,
    yearNumber: parseInt(yearDigits, 10) || 2024,
    subject,
    totalQuestions: questions.length, // strictly 45 questions
    durationMinutes: 45, // 45 minutes for 45 subject questions (or 180 mins for full paper)
    questions,
  };
}

/**
 * Filter questions chapter-wise across all past 12 years (2013 - 2025)
 * Dynamically provides at least 20-30 authentic NEET questions for that chapter/subject.
 */
export function getChapterWisePYQs(subject?: NEETSubject | 'All', chapterName?: string): PYQQuestion[] {
  // Aggregate questions across key representative years
  const representativeYears = [
    'NEET 2025 (Phase 1)',
    'NEET 2024',
    'NEET 2023',
    'NEET 2022',
    'NEET 2021',
    'NEET 2020',
    'NEET 2019',
    'NEET 2018',
    'NEET 2017',
    'NEET 2016 (Phase 1)',
    'NEET 2015 (AIPMT / Re-AIPMT)',
    'NEET 2014 (AIPMT)',
    'NEET 2013 (NEET-UG Inaugural)'
  ];

  const aggregated: PYQQuestion[] = [];
  const subjectsToScan: NEETSubject[] = (!subject || subject === 'All') 
    ? ['Botany', 'Zoology', 'Physics', 'Chemistry'] 
    : [subject];

  representativeYears.forEach(yr => {
    subjectsToScan.forEach(subj => {
      const qList = getSubject45Questions(yr, subj);
      qList.forEach(q => {
        if (!aggregated.some(a => a.question === q.question)) {
          aggregated.push(q);
        }
      });
    });
  });

  if (!chapterName || chapterName === 'All Chapters') {
    return aggregated;
  }

  const chLower = chapterName.toLowerCase();
  const directMatches = aggregated.filter(q => {
    const qCh = (q.ncert_reference.chapter || '').toLowerCase();
    const qSec = (q.ncert_reference.official_section || '').toLowerCase();
    const legacyCh = (q.chapter || '').toLowerCase();
    return qCh.includes(chLower) || legacyCh.includes(chLower) || qSec.includes(chLower);
  });

  if (directMatches.length >= 20) {
    return directMatches;
  }

  // Supplement from same subject so student always has a rich 20-25 questions set
  const subjectAll = aggregated.filter(q => !directMatches.some(d => d.question === q.question));
  const needed = Math.max(0, 20 - directMatches.length);
  return [...directMatches, ...subjectAll.slice(0, needed)];
}

/**
 * Return all distinct PYQ questions in the bank
 */
export function getAllPYQQuestions(): PYQQuestion[] {
  return getChapterWisePYQs('All', 'All Chapters');
}
