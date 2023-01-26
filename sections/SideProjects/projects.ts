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
    title: 'Polyglotify',
    imageUrl: '',
    description: 'Localization as a Service',
    url: 'https://polyglotify.online',
  },
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
    title: 'World-analog-clock',
    imageUrl: '/projects/world-analog-clock.screenshot.png',
    description: 'World Analog clock in neumorphism',
    url: 'https://world-analog-clock.atsuhiro.site',
  },
  {
    id: i++,
    title: 'Pass-Vali',
    imageUrl: '/projects/pass-vali.screenshot.png',
    description: 'A simple password validator form',
    url: 'https://pass-vali.atsuhiro.site',
  },
];
