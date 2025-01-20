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
  logo?: Image;
  title: string;
  subtitle?: string;
  description: string;
  image?: Image;
  headerNavLinks?: Link[];
  footerNavLinks?: Link[];
  socialLinks?: Link[];
  hero?: Hero;
  subscribe?: Subscribe;
  postsPerPage?: number;
  projectsPerPage?: number;
  portfolio: Portfolio;
};

export type ImageLink = {
  image: Image;
  link: Link;
};

export type Portfolio = {
  title: string;
  list: ImageLink[];
};

const siteConfig: SiteConfig = {
  portfolio: {
    title: 'Портфоліо',
    list: [
      {
        link: {
          text: 'Вагітність',
          href: '/portfolio/pregnancy',
        },
        image: {
          src: '/images/portfolio/pregnancy.jpg',
          alt: 'Вагітність',
        },
      },
      {
        link: {
          text: 'Новонароджений малюк',
          href: '/portfolio/newborn',
        },
        image: {
          src: '/images/portfolio/newborn.jpg',
          alt: 'Новонароджений малюк',
        },
      },
      {
        link: {
          text: 'Сімейна фотосесія',
          href: '/portfolio/family',
        },
        image: {
          src: '/images/portfolio/family.jpg',
          alt: 'Сімейна фотосесія',
        },
      },
      {
        link: {
          text: 'Жіночий портрет',
          href: '/portfolio/woman-portrait',
        },
        image: {
          src: '/images/portfolio/woman-portrait.jpg',
          alt: 'Жіночий портрет',
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
      href: '/',
    },
    {
      text: 'Вартість',
      href: '/prices',
    },
    {
      text: 'Портфоліо',
      href: '/portfolio',
    },
    {
      text: 'Запитання та відповіді',
      href: '/qa',
    },
    {
      text: 'Відгуки',
      href: '/testimonials',
    },
    {
      text: 'Контакти',
      href: '/contact',
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
      href: '/',
    },
    {
      text: 'Вартість',
      href: '/prices',
    },
    {
      text: 'Портфоліо',
      href: '/portfolio',
    },
    {
      text: 'Запитання та відповіді',
      href: '/qa',
    },
    {
      text: 'Відгуки',
      href: '/testimonials',
    },
    {
      text: 'Контакти',
      href: '/contact',
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
