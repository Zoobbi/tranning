import type { CURRENCY_CODES } from "@shared/lib/currencyCodes";

type CurrencyCode = keyof typeof CURRENCY_CODES;

interface Discount {
  percent: number;
  value: number;
}

interface PriceValue {
  value: number;
  discount: Discount;
}

interface Price {
  currency: {
    [key in CurrencyCode]?: PriceValue;
  };
}

interface VideoName {
  ru: string;
  eng: string;
}

interface VideoLang {
  id: string;
  p: string;
}

export interface Video {
  name: VideoName;
  ru: VideoLang;
  world: VideoLang;
  time?: number;
}

export interface Program {
  id: string;
  title: string;
  descriptionShort: string;
  descriptionLong: string;
  image: string;
  level: string; // Можно уточнить тип, если известны значения DIFFICULT_LEVELS
  prerequisites: string[];
  nextPrograms: string[];
  category: string; // Можно уточнить тип, если известны значения COURSE_CATEGORY
  subcategory: string; // Можно уточнить тип
  badges: string[];
  price: Price;
  tags: string[];
  equipments: string[]; // Можно уточнить тип, если известны значения EQUIPMENTS
  improvements: string[];
  courseTime: number;
  videos: Video[];
  programVideo: Video;
}

export type Programs = Array<Program>;
