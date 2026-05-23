import type { PriceDescription, PriceDescriptions } from './types';

const standardList: PriceDescription['list'] = [
  'тривалість фотосесії <strong>2 години</strong>',
  'не менше <strong>50 фотографій</strong>',
  'всі фотографії з детальною обробкою',
  'фотографії віддаються через інтернет (файлообмінник)',
  'всі фотографії в <strong>двох розмірах</strong> (оригінал та міні-копії для мережі Інтернет)',
  '<strong>20 роздрукованих</strong> фотографій',
  'термін готовності фотографій — 5 тижнів',
];

const newbornList: PriceDescription['list'] = [
  'тривалість фотосесії <strong>2–4 години</strong> (залежить від малюка)',
  'не менше <strong>50 фотографій</strong>',
  'всі фотографії з детальною обробкою',
  'фотографії віддаються через інтернет (файлообмінник)',
  'всі фотографії в <strong>двох розмірах</strong> (оригінал та міні-копії для мережі Інтернет)',
  '<strong>20 роздрукованих</strong> фотографій',
  'термін готовності фотографій — 5 тижнів',
];

export const priceDescriptions: PriceDescriptions = {
  pregnancy: [
    {
      title: '',
      price: '7 500 грн',
      image: { src: '/images/prices/prices-pregnancy-optimal.jpg', alt: 'Фотосесія вагітності' },
      list: standardList,
    },
  ],
  newborn: [
    {
      title: '',
      price: '10 000 грн',
      image: { src: '/images/prices/prices-newborn-optimal.jpg', alt: 'Фотосесія новонародженого' },
      list: newbornList,
    },
  ],
  family: [
    {
      title: '',
      price: '7 500 грн',
      image: { src: '/images/prices/prices-family-optimal.jpg', alt: 'Сімейна фотосесія' },
      list: standardList,
    },
  ],
  woman: [
    {
      title: '',
      price: '7 500 грн',
      image: { src: '/images/prices/prices-woman-optimal.jpg', alt: 'Жіночий портрет' },
      list: standardList,
    },
  ],
};
