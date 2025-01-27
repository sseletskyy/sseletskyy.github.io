import type { Dictionary, PhotosessionDictionary, SiteConfig } from './types';
import { priceDescriptions } from './priceDescriptions';
import { qaList } from './qa.ts';

const titleDict: Dictionary = {
  contact: 'Контакти',
  family: 'Сімейна фотосесія',
  home: 'Головна',
  newborn: 'Новонароджений малюк',
  portfolio: 'Портфоліо',
  pregnancy: 'Вагітність',
  prices: 'Вартість',
  qa: 'Запитання та відповіді',
  testimonials: 'Відгуки',
  woman: 'Жіночий портрет',
};

const hrefDict: Dictionary = {
  home: '/',
  contact: '/contact',
  portfolio: '/portfolio',
  prices: '/prices',
  qa: '/qa',
  testimonials: '/testimonials',
};
const portfolioHrefDict: PhotosessionDictionary<string> = {
  pregnancy: '/portfolio/pregnancy',
  newborn: '/portfolio/newborn',
  family: '/portfolio/family',
  woman: '/portfolio/woman',
};

const pricesHrefDict: PhotosessionDictionary<string> = {
  pregnancy: '/prices/pregnancy',
  newborn: '/prices/newborn',
  family: '/prices/family',
  woman: '/prices/woman',
};

const siteConfig: SiteConfig = {
  dictionaries: {
    title: titleDict,
    href: hrefDict,
    portfolioHref: portfolioHrefDict,
    pricesHref: pricesHrefDict,
  },
  portfolio: {
    title: titleDict.portfolio,
    list: [
      {
        link: {
          text: titleDict.pregnancy,
          href: portfolioHrefDict.pregnancy,
        },
        image: {
          src: '/images/portfolio/pregnancy.jpg',
          alt: titleDict.pregnancy,
        },
      },
      {
        link: {
          text: titleDict.newborn,
          href: portfolioHrefDict.newborn,
        },
        image: {
          src: '/images/portfolio/newborn.jpg',
          alt: titleDict.newborn,
        },
      },
      {
        link: {
          text: titleDict.family,
          href: portfolioHrefDict.family,
        },
        image: {
          src: '/images/portfolio/family.jpg',
          alt: titleDict.family,
        },
      },
      {
        link: {
          text: titleDict.woman,
          href: portfolioHrefDict.woman,
        },
        image: {
          src: '/images/portfolio/woman-portrait.jpg',
          alt: titleDict.woman,
        },
      },
    ],
  },
  prices: {
    title: titleDict.prices,
    list: [
      {
        link: {
          text: titleDict.pregnancy,
          href: pricesHrefDict.pregnancy,
        },
        image: {
          src: '/images/portfolio/pregnancy.jpg',
          alt: titleDict.pregnancy,
        },
      },
      {
        link: {
          text: titleDict.newborn,
          href: pricesHrefDict.newborn,
        },
        image: {
          src: '/images/portfolio/newborn.jpg',
          alt: titleDict.newborn,
        },
      },
      {
        link: {
          text: titleDict.family,
          href: pricesHrefDict.family,
        },
        image: {
          src: '/images/portfolio/family.jpg',
          alt: titleDict.family,
        },
      },
      {
        link: {
          text: titleDict.woman,
          href: pricesHrefDict.woman,
        },
        image: {
          src: '/images/portfolio/woman-portrait.jpg',
          alt: titleDict.woman,
        },
      },
    ],
    titles: {
      pregnancy: 'Фотосесія Вагітності',
      newborn: 'Фотосесія Новонародженного Малюка',
      family: 'Сімейна Фотосесія',
      woman: 'Жіночий портет',
    },
    priceDescriptions: priceDescriptions,
  },
  qa: {
    title: titleDict.qa,
    list: qaList,
  },
  testimonials: {
    title: titleDict.testimonials,
  },
  title: 'Юлія Селецька',
  subtitle: 'Одеський фотограф',
  description: 'Фотозйомка вагітності, новонародженного малюка, семейна фотосесія, жіночий портрет',
  logo: {
    src: '/images/home/julia-logo@2x.png',
    alt: 'Юлія Селецька - одеський фотограф',
  },
  headerNavLinks: [
    {
      text: titleDict.home,
      href: hrefDict.home,
    },
    {
      text: titleDict.prices,
      href: hrefDict.prices,
    },
    {
      text: titleDict.portfolio,
      href: hrefDict.portfolio,
    },
    {
      text: titleDict.qa,
      href: hrefDict.qa,
    },
    {
      text: titleDict.testimonials,
      href: hrefDict.testimonials,
    },
    {
      text: titleDict.contact,
      href: hrefDict.contact,
    },
    // {
    //     text: 'Блог',
    //     href: '/blog'
    // },
    // {
    //     text: 'Tags',
    //     href: '/tags'
    // }
  ],
  footerNavLinks: [
    {
      text: titleDict.home,
      href: hrefDict.home,
    },
    {
      text: titleDict.prices,
      href: hrefDict.prices,
    },
    {
      text: titleDict.portfolio,
      href: hrefDict.portfolio,
    },
    {
      text: titleDict.qa,
      href: hrefDict.qa,
    },
    {
      text: titleDict.testimonials,
      href: hrefDict.testimonials,
    },
    {
      text: titleDict.contact,
      href: hrefDict.contact,
    },
  ],
  socialLinks: [
    {
      text: 'Instagram',
      href: 'https://www.instagram.com/seletska_photography/',
    },
  ],
  hero: {
    title: 'Сімейна фотографія з любовʼю',
    text: "Мене звати Юлія і я рада вітати Вас на моєму сайті.</br>Головне в моїй роботі – наповнити кожний кадр Вашими почуттями, емоціями та любов'ю.</br>Я вкладаюся в кожну деталь процесу та роблю це щиро, адже моя творчість – один з основних джерел мого щастя!",
    image: {
      src: '/images/home/first-picture.jpg',
      alt: 'A father is holding his newborn baby',
    },
    actions: [
      // {
      //     text: 'Звʼязатися зі мною',
      //     href: '/contact'
      // }
    ],
  },
  // subscribe: {
  //     title: 'Subscribe to Dante Newsletter',
  //     text: 'One update per week. All the latest posts directly in your inbox.',
  //     formUrl: '#'
  // },
  postsPerPage: 8,
  projectsPerPage: 8,
};

export default siteConfig;
