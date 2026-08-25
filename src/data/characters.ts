export type Rank = 'Верховный Страж' | 'Страж Вердикта' | 'Следователь' | 'Разведчик' | 'Новобранец';

export interface Character {
  id: number;
  name: string;
  rank: Rank;
  age: number;
  race: string;
  origin: string;
  specialization: string;
  image: string;
  bio: string;
  skills: string[];
  motto: string;
  status: 'active' | 'inactive' | 'missing';
  joinedYear: number;
  achievements: string[];
}

export const rankColors: Record<Rank, string> = {
  'Верховный Страж': 'from-yellow-600 to-amber-400',
  'Страж Вердикта': 'from-purple-600 to-violet-400',
  'Следователь': 'from-blue-700 to-cyan-500',
  'Разведчик': 'from-emerald-700 to-green-500',
  'Новобранец': 'from-slate-600 to-slate-400',
};

export const rankBorder: Record<Rank, string> = {
  'Верховный Страж': 'border-amber-500',
  'Страж Вердикта': 'border-violet-500',
  'Следователь': 'border-cyan-500',
  'Разведчик': 'border-emerald-500',
  'Новобранец': 'border-slate-500',
};

export const rankGlow: Record<Rank, string> = {
  'Верховный Страж': 'shadow-amber-500/30',
  'Страж Вердикта': 'shadow-violet-500/30',
  'Следователь': 'shadow-cyan-500/30',
  'Разведчик': 'shadow-emerald-500/30',
  'Новобранец': 'shadow-slate-500/30',
};

export const characters: Character[] = [
  {
    id: 1,
    name: 'Каэль Куроцуки',
    rank: 'Верховный Страж',
    age: 27,
    race: 'Человек',
    origin: 'Вердаль, Северные Земли',
    specialization: 'Тактика и командование',
    image: './public/images/kael.jpg',
    bio: 'Каэль возглавляет Стражу Вердикта — организацию, которую одинаково не любят фанатики с обеих сторон войны именно потому, что она не встаёт ни на одну из них. Он лично ведёт самые деликатные дела: военные преступления, саботаж перемирий, шпионаж под личиной беженца. Среди офицеров о нём говорят с уважением и лёгким страхом — не как о командире, а как о живом воплощении устава.',
    skills: ['Тактическое командование', 'Боевое фехтование', 'Дипломатия', 'Допрос'],
    motto: '«Вердикт не ждёт — справедливость не терпит промедления.»',
    status: 'active',
    joinedYear: 947,
    achievements: [
      'Подавление Восстания Семи Башен',
      'Раскрытие заговора «Алой Нити»',
      'Орден Незыблемого Щита',
      '7 лет безупречной службы',
    ],
  },
  {
    id: 2,
    name: 'Элиана Вейр',
    rank: 'Страж Вердикта',
    age: 19,
    race: 'Человек',
    origin: 'Серебряный Лес, Запад',
    specialization: '',
    image: '/images/krip.jpg',
    bio: 'К девятнадцати годам её навыки достигли такого уровня, что она стала единственной личной горничной главы организации. Для посторонних она всё ещё выглядит как тихая, вежливая девушка в классической форме, которая занимается исключительно бытовыми делами. Но те, кто знает её настоящие способности, прекрасно понимают: если Элиана действительно решила остаться незамеченной, обнаружить её практически невозможно.',
    skills: ['Бесшумная ходьба', 'Абсолютная скрытность', 'Скрытое присутствие', 'Бытовые навыки', 'Наблюдательность'],
    motto: '«Ложь оставляет следы там, где правда не оставляет ничего.»',
    status: 'active',
    joinedYear: 955,
    achievements: [
    ],
  },
  {
    id: 3,
    name: 'Пусто',
    rank: 'нету',
    age: 0,
    race: '',
    origin: '',
    specialization: '',
    image: '',
    bio: '',
    skills: [],
    motto: '',
    status: 'inactive',
    joinedYear: 1304,
    achievements: [
      '',
      '',
      '',
    ],
  },
  {
    id: 4,
    name: 'Пусто',
    rank: 'нету',
    age: 0,
    race: '',
    origin: '',
    specialization: '',
    image: '',
    bio: '',
    skills: [],
    motto: '',
    status: 'inactive',
    joinedYear: 1304,
    achievements: [
      '',
      '',
      '',
    ],
  },
  {
    id: 5,
    name: 'Пусто',
    rank: 'нету',
    age: 0,
    race: '',
    origin: '',
    specialization: '',
    image: '',
    bio: '',
    skills: [],
    motto: '',
    status: 'inactive',
    joinedYear: 1304,
    achievements: [
      '',
      '',
      '',
    ],
  },
];
