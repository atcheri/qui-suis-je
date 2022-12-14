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
    title: 'Analog-clock',
    imageUrl: '/projects/analog-clock.screenshot.png',
    description: 'An Wall embeded analog clock in neumorphism',
    url: 'https://analog-clock.atsuhiro.site',
  },
];
