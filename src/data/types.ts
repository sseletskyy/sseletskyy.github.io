export type Dictionary = Record<string, string>;

export type Image = {
  src: string;
  alt?: string;
  caption?: string;
};

export type Link = {
  text: string;
  href: string;
};

export type Hero = {
  title?: string;
  text?: string;
  image?: Image;
  actions?: Link[];
};

export type Subscribe = {
  title?: string;
  text?: string;
  formUrl: string;
};

export const PhotosessionType = {
  pregnancy: 'pregnancy',
  newborn: 'newborn',
  family: 'family',
  woman: 'woman',
} as const;

export type PhotosessionType = (typeof PhotosessionType)[keyof typeof PhotosessionType];

export type PhotosessionDictionary<T> = Record<PhotosessionType, T>;

export type PriceDescription = {
  title: string;
  oldPrice?: string;
  price: string;
  image: Image;
  list: string[];
};

export type PriceDescriptions = PhotosessionDictionary<PriceDescription[]>;

export type ImageLink = {
  image: Image;
  link: Link;
};

export type PortfolioPage = {
  title: string;
  list: ImageLink[];
};

export type PricesPage = {
  title: string;
  list: ImageLink[];
  titles: Dictionary;
  priceDescriptions: PriceDescriptions;
};

export type QuestionAndAnswer = {
  question: string;
  answer: string;
};

export type QaPage = {
  title: string;
  list: QuestionAndAnswer[];
};

export type SiteConfig = {
  description: string;
  dictionaries: {
    title: Dictionary;
    href: Dictionary;
    portfolioHref: Dictionary;
    pricesHref: Dictionary;
  };
  footerNavLinks?: Link[];
  headerNavLinks?: Link[];
  hero?: Hero;
  image?: Image;
  logo?: Image;
  portfolio: PortfolioPage;
  prices: PricesPage;
  qa: QaPage;
  postsPerPage?: number;
  projectsPerPage?: number;
  socialLinks?: Link[];
  subscribe?: Subscribe;
  subtitle?: string;
  title: string;
};
