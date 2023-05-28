export type Project = {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  url: string;
};

let i = 1;

export const projects: Project[] = [
  {
    id: i++,
    title: 'Japan Tour Guide Agency',
    imageUrl: 'https://store.japantourguideagency.com/wp-content/uploads/2023/05/IMG_20200414_070109-300x225.jpg',
    description: 'Travel booking site',
    url: 'https://japantourguideagency.com',
  },
  // {
  //   id: i++,
  //   title: 'Polyglotify',
  //   imageUrl: '',
  //   description: 'Localization as a Service',
  //   url: 'https://polyglotify.online',
  // },
  {
    id: i++,
    title: 'Polyglotify API',
    imageUrl: '/projects/poliglotify-api.online.screenshot.png',
    description: 'Localization OpenAPI',
    url: 'https://poliglotify.online/api/docs/',
  },
  {
    id: i++,
    title: 'Card-Das',
    imageUrl: '/projects/card-das.screenshot.png',
    description: 'A NFT-Card battle arena',
    url: 'https://card-das.atsuhiro.site',
  },
  {
    id: i++,
    title: 'Swordle',
    imageUrl: '/projects/swordle.screenshot.png',
    description: 'Another wordle game',
    url: 'https://swordle.atsuhiro.site',
  },
  {
    id: i++,
    title: 'Jikan',
    imageUrl: '/projects/world-analog-clock.screenshot.png',
    description: 'World Analog clock in neumorphism',
    url: 'https://jikan.atsuhiro.site',
  },
  {
    id: i++,
    title: 'Pass-Vali',
    imageUrl: '/projects/pass-vali.screenshot.png',
    description: 'A simple password validator form',
    url: 'https://pass-vali.atsuhiro.site',
  },
];
