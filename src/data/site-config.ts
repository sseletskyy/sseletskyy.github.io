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

export type SiteConfig = {
  description: string;
  dictionaries: {
    title: Dictionary;
    href: Dictionary;
    portfolioHref: Dictionary;
    pricesHref: Dictionary;
  }
  footerNavLinks?: Link[];
  headerNavLinks?: Link[];
  hero?: Hero;
  image?: Image;
  logo?: Image;
  portfolio: Portfolio;
  prices: Portfolio;
  postsPerPage?: number;
  projectsPerPage?: number;
  socialLinks?: Link[];
  subscribe?: Subscribe;
  subtitle?: string;
  title: string;
};

export type ImageLink = {
  image: Image;
  link: Link;
};

export type Portfolio = {
  title: string;
  list: ImageLink[];
};

export type Dictionary = Record<string, string>;

const titleDict: Dictionary = {
  portfolio: 'Портфоліо',
  prices: 'Вартість',
  pregnancy: 'Вагітність',
  newborn: 'Новонароджений малюк',
  family: 'Сімейна фотосесія',
  woman: 'Жіночий портрет',
}

const hrefDict: Dictionary = {
  home: '/',
  contact: '/contact',
  portfolio: '/portfolio',
  prices: '/prices',
  qa: '/qa',
  testimonials: '/testimonials',
}
const portfolioHrefDict: Dictionary = {
  pregnancy: '/portfolio/pregnancy',
  newborn: '/portfolio/newborn',
  family: '/portfolio/family',
  woman: '/portfolio/woman',
}

const pricesHrefDict: Dictionary = {
  pregnancy: '/prices/pregnancy',
  newborn: '/prices/newborn',
  family: '/prices/family',
  woman: '/prices/woman',
}

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
      text: 'Головна',
      href: hrefDict.home,
    },
    {
      text: 'Вартість',
      href: hrefDict.prices,
    },
    {
      text: 'Портфоліо',
      href: hrefDict.portfolio,
    },
    {
      text: 'Запитання та відповіді',
      href: hrefDict.qa,
    },
    {
      text: 'Відгуки',
      href: hrefDict.testimonials,
    },
    {
      text: 'Контакти',
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
      text: 'Головна',
      href: hrefDict.home,
    },
    {
      text: 'Вартість',
      href: hrefDict.prices,
    },
    {
      text: 'Портфоліо',
      href: hrefDict.portfolio,
    },
    {
      text: 'Запитання та відповіді',
      href: hrefDict.qa,
    },
    {
      text: 'Відгуки',
      href: hrefDict.testimonials,
    },
    {
      text: 'Контакти',
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
