import type { PriceDescription, PriceDescriptions } from './types';

const BASIC_TITLE = 'БАЗОВИЙ';
const OPTIMAL_TITLE = 'ВИГІДНИЙ';
const PREMIUM_TITLE = 'ПРЕМІУМ';
const BASIC_ALT = 'Базовий пакет';
const OPTIMAL_ALT = 'Вигідний пакет';
const PREMIUM_ALT = 'Преміум пакет';

const basicList: PriceDescription['list'] = [
  'тривалість фотосесії <strong>1 година</strong>',
  'не менше <strong>30 фотографій</strong>',
  'всі фотографії с детальною обробкою',
  'фотографії віддаються через інтернет  (файлообмінник)',
  'всі фотографії в двох розмірах (оригінал та міні-копії для мережі Інтернет)',
  'термін готовності фотографій - 5 тижнів',
];

const optimalList: PriceDescription['list'] = [
  'тривалість фотосесії <strong>2 години</strong>',
  'не менше <strong>50 фотографій</strong>',
  'всі фотографії с детальною обробкою',
  'фотографії віддаються через інтернет  (файлообмінник)',
  'всі фотографії в <strong>чотирьох розмірах</strong> (оригінал, 13х18, 10х15 та міні-копії для мережі Інтернет)',
  '<strong>20 роздрукованих</strong> фотографій',
  'термін готовності фотографій - 5 тижнів',
];
const premiumList: PriceDescription['list'] = [
  'тривалість фотосесії <strong>3 години</strong>',
  'не менше <strong>70 фотографій</strong>',
  'всі фотографії с детальною обробкою',
  'фотографії віддаються через інтернет  (файлообмінник)',
  'всі фотографії в <strong>чотирьох розмірах</strong> (оригінал, 13х18, 10х15 та міні-копії для мережі Інтернет)',
  '<strong>знижка</strong> 20% на наступну фотосесію',
  '<strong>фотокнига</strong> (20х20 см, 10 розворотів)',
  'термін готовності фотографій - 5 тижнів',
];

const pregnancyBasic: PriceDescription = {
  title: BASIC_TITLE,
  oldPrice: '$230',
  price: '4000 грн',
  image: {
    src: '/images/prices/prices-pregnancy-basic.jpg',
    alt: BASIC_ALT,
  },
  list: basicList,
};

const pregnancyOptimal: PriceDescription = {
  title: OPTIMAL_TITLE,
  price: '$250',
  image: {
    src: '/images/prices/prices-pregnancy-optimal.jpg',
    alt: OPTIMAL_ALT,
  },
  list: optimalList,
};

const pregnancyPremium: PriceDescription = {
  title: PREMIUM_TITLE,
  price: '$350',
  image: {
    src: '/images/prices/prices-pregnancy-premium.jpg',
    alt: PREMIUM_ALT,
  },
  list: premiumList,
};

const newbornBasic: PriceDescription = {
  title: BASIC_TITLE,
  oldPrice: '$230',
  price: '4000 грн',
  image: {
    src: '/images/prices/prices-newborn-basic.jpg',
    alt: BASIC_ALT,
  },
  list: basicList,
};

const newbornOptimal: PriceDescription = {
  title: OPTIMAL_TITLE,
  price: '$250',
  image: {
    src: '/images/prices/prices-newborn-optimal.jpg',
    alt: OPTIMAL_ALT,
  },
  list: optimalList,
};

const newbornPremium: PriceDescription = {
  title: PREMIUM_TITLE,
  price: '$350',
  image: {
    src: '/images/prices/prices-newborn-premium.jpg',
    alt: PREMIUM_ALT,
  },
  list: premiumList,
};

const familyBasic: PriceDescription = {
  title: BASIC_TITLE,
  oldPrice: '$230',
  price: '4000 грн',
  image: {
    src: '/images/prices/prices-family-basic.jpg',
    alt: BASIC_ALT,
  },
  list: basicList,
};

const familyOptimal: PriceDescription = {
  title: OPTIMAL_TITLE,
  price: '$250',
  image: {
    src: '/images/prices/prices-family-optimal.jpg',
    alt: OPTIMAL_ALT,
  },
  list: optimalList,
};

const familyPremium: PriceDescription = {
  title: PREMIUM_TITLE,
  price: '$350',
  image: {
    src: '/images/prices/prices-family-premium.jpg',
    alt: PREMIUM_ALT,
  },
  list: premiumList,
};

const womanBasic: PriceDescription = {
  title: BASIC_TITLE,
  oldPrice: '$230',
  price: '4000 грн',
  image: {
    src: '/images/prices/prices-woman-basic.jpg',
    alt: BASIC_ALT,
  },
  list: basicList,
};

const womanOptimal: PriceDescription = {
  title: OPTIMAL_TITLE,
  price: '$250',
  image: {
    src: '/images/prices/prices-woman-optimal.jpg',
    alt: OPTIMAL_ALT,
  },
  list: optimalList,
};

const womanPremium: PriceDescription = {
  title: PREMIUM_TITLE,
  price: '$350',
  image: {
    src: '/images/prices/prices-woman-premium.jpg',
    alt: PREMIUM_ALT,
  },
  list: premiumList,
};

export const priceDescriptions: PriceDescriptions = {
  pregnancy: [pregnancyBasic, pregnancyOptimal, pregnancyPremium],
  newborn: [newbornBasic, newbornOptimal, newbornPremium],
  family: [familyBasic, familyOptimal, familyPremium],
  woman: [womanBasic, womanOptimal, womanPremium],
};
