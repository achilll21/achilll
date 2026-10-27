export type CharacterId = 'ahmad' | 'fatimah' | 'salman' | 'aisyah';

export interface Character {
  id: CharacterId;
  name: string;
  title: string;
  avatar: string;
  bio: string;
  trait: string;
  favoriteValue: string;
  motto: string;
}

export interface VocabularyItem {
  arabic: string;
  transliteration: string;
  meaning: string;
}

export interface DetailedExplanation {
  overview: string;
  background: string;
  tafsirAndMeaning: string[];
  vocabulary: VocabularyItem[];
  coreLessons: string[];
  cintaApplication: string[];
  faqOrFunFact: { question: string; answer: string }[];
}

export interface ChapterSummary {
  learningGoals: string[];
  keyConcept: string;
  dailyHabits: string[];
}

export interface MaterialCard {
  id: string;
  title: string;
  theme: string;
  arabicText?: string;
  transliteration?: string;
  translation: string;
  explanation: string[];
  cintaValue: string;
  dailyAction: string;
  detailedExplanation?: DetailedExplanation;
}

export interface AyatTile {
  id: string;
  arabic: string;
  order: number;
}

export interface SusunAyatGame {
  surahName: string;
  ayatNumber: number;
  fullArabic: string;
  translation: string;
  tiles: AyatTile[];
  hint: string;
}

export interface MatchPair {
  id: string;
  left: string;
  right: string;
  category: string;
}

export interface SikapScenario {
  id: string;
  scenario: string;
  context: string;
  options: {
    text: string;
    isCorrect: boolean;
    feedback: string;
    cintaValue: string;
    stars: number;
  }[];
}

export interface MemoryCardItem {
  id: string;
  pairId: string;
  label: string;
  iconName: string;
  detail: string;
}

export interface TrueFalseQuestion {
  id: string;
  statement: string;
  isTrue: boolean;
  explanation: string;
  cintaValue: string;
}

export interface MisiKebaikanScenario {
  id: string;
  title: string;
  location: string;
  situation: string;
  task: string;
  choices: {
    text: string;
    isBest: boolean;
    rewardStars: number;
    explanation: string;
    impact: string;
  }[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  arabicSnippet?: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  topic: string;
}

export interface World {
  id: number;
  slug: string;
  title: string;
  shortTitle: string;
  theme: string;
  description: string;
  icon: string;
  accentColor: string;
  badgeName: string;
  badgeDescription: string;
  badgeIcon: string;
  image: string;
  chapterSummary?: ChapterSummary;
  materials: MaterialCard[];
  susunAyatGame: SusunAyatGame;
  matchPairs: MatchPair[];
  sikapScenarios: SikapScenario[];
  memoryCards: MemoryCardItem[];
  trueFalseQuestions: TrueFalseQuestion[];
  misiKebaikan: MisiKebaikanScenario[];
  quiz: QuizQuestion[];
  reflectionQuestion: string;
  reflectionPrompt: string;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  worldId?: number;
  unlockedAt?: string;
}

export interface ReflectionLog {
  worldId: number;
  worldTitle: string;
  question: string;
  answer: string;
  date: string;
}

export interface TestResult {
  type: 'pre-test' | 'post-test' | 'quiz';
  worldId?: number;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  masteredTopics: string[];
  reviewTopics: string[];
  timestamp: string;
}

export interface Achievement {
  id: string;
  worldId?: number; // 1 to 6 or undefined for master
  title: string;
  description: string;
  icon: string;
  category: 'quran' | 'hadis' | 'akhlak' | 'sahabat' | 'lingkungan' | 'cinta' | 'master';
  rewardStars: number;
  rewardXp: number;
  conditionDescription: string;
}

export interface StudentRecord {
  id: string;
  name: string;
  nisn: string;
  characterName: string;
  preTestScore: number | null;
  worldQuizScores: { [worldId: number]: number | null };
  postTestScore: number | null;
  stars: number;
  xp: number;
  completedWorldsCount: number;
  cintaRating: {
    cintaAllahRasul: 'Sangat Baik' | 'Baik' | 'Cukup';
    cintaQuran: 'Sangat Baik' | 'Baik' | 'Cukup';
    cintaDiri: 'Sangat Baik' | 'Baik' | 'Cukup';
    cintaSesama: 'Sangat Baik' | 'Baik' | 'Cukup';
    cintaLingkungan: 'Sangat Baik' | 'Baik' | 'Cukup';
    cintaBangsa: 'Sangat Baik' | 'Baik' | 'Cukup';
  };
  notes: string;
}

export interface PlayerProfile {
  name: string;
  characterId: CharacterId;
  stars: number;
  xp: number;
  unlockedWorld: number; // 1 to 6
  completedWorlds: number[];
  badges: string[]; // Badge IDs
  achievements: string[]; // Achievement IDs
  reflections: ReflectionLog[];
  preTestDone: boolean;
  postTestDone: boolean;
  testResults: TestResult[];
  soundEnabled: boolean;
  musicEnabled: boolean;
  musicVolume?: number;
}
