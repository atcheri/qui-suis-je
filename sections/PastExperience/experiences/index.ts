import { affinidiDescription } from './affinidi';
import { TimelineItem } from '../../../components/Timeliner';

export const studies: TimelineItem[] = [
  {
    name: 'IT and Statistics in Finance',
    type: 'study',
    place: 'Université Pierre et Marie Curie',
    sector: 'Master 2',
    location: 'Paris',
    period: {
      year: '2006 ~ 2008',
      from: 'September',
      to: 'June',
    },
    content: 'Trained in building simulation and analysing financial instruments prices movements',
    description: [
      'Modelling Simulation of financial data',
      'Quantitative analyse of random risk',
      'https://www.educaedu.fr/master-de-sciences-et-technologies-mention--sciences-et-management-specialite--statistique-et-finance-master-15163.html',
    ],
  },
  {
    name: 'Mechanical Engineering - Aérodynamique et Aéroacoustique',
    type: 'study',
    place: 'Université Pierre et Marie Curie',
    sector: 'Master 2',
    location: 'Paris',
    period: {
      year: '2004 ~ 2006',
      from: 'September',
      to: 'June',
    },
    content: 'Trained in the theoretical and numerical tools necessary for the study of highly complex dynamic flows',
    description: [
      'Hydrodynamic Modelling and Simulation',
      'Aerodynamics and Aero-acoustics',
      'Fluid Mechanics',
      'https://sciences.sorbonne-universite.fr/formation-sciences/masters/master-de-mecanique/parcours-mecanique-des-fluides-fondements-et',
    ],
  },
];

export const works: TimelineItem[] = [
  {
    name: 'Full-Stack Software Engineer',
    type: 'work',
    place: 'Affinidi GMBH',
    url: 'https://affinidi.com',
    sector: 'Permanent',
    location: 'Berlin (Remote)',
    period: {
      year: '2021 ~',
      from: 'July',
      to: 'Present',
    },
    content: 'Building privacy preserving tools',
    stack: {
      langs: ['go', 'typescript'],
      tools: [
        'react',
        'jest',
        'cypress',
        'openapi',
        'docker',
        'kubernetes',
        'aws',
        'rest',
        'mongo',
        'mysql',
        'postgres',
        'gitlab',
      ],
    },
    description: affinidiDescription,
  },
  {
    name: 'Front-End Engineer',
    type: 'work',
    place: 'RealT',
    url: 'https://realt.co/',
    sector: 'Freelance',
    location: 'Remote',
    period: {
      year: '2021',
      from: 'March',
      to: 'June',
    },
    content: 'Worked on the RealT TOKEN rent calculation system',
    stack: {
      langs: ['typescript'],
      tools: ['metamask', 'react', 'jest', 'nextjs', 'heroku', 'gitlab'],
    },
    description: [
      'Improved the the daily/weekly rent TOKEN payment calculation',
      'Collecting data from side chains such as Polygon (Matic)',
    ],
  },
  {
    name: 'Front-End Engineer',
    type: 'work',
    place: 'Sestrel',
    sector: 'Freelance',
    location: 'Remote',
    period: {
      year: '2020 ~ 2021',
      from: 'October',
      to: 'April',
    },
    content: 'Contributed to the mobile version of the marketplace',
    stack: {
      langs: ['nodejs', 'typescript', 'solidity'],
      tools: ['metamask', 'docker', 'react', 'react-native', 'jest', 'netlify'],
    },
    description: [
      'Created github actions to build and deploy the reat-native based mobile application (Expo)',
      'Migrated the nodejs backend code from javascript to typescript',
    ],
  },
  {
    name: 'Full-Stack Software Engineer',
    type: 'work',
    place: 'Actineo GMBH',
    url: 'https://www.actineo.de',
    sector: 'Permanent',
    location: 'Cologne',
    period: {
      year: '2017 ~ 2020',
      from: 'October',
      to: 'September',
    },
    content: 'Designed a claim management system',
    stack: {
      langs: ['nodejs', 'typescript'],
      tools: ['apollo', 'graphql', 'react', 'jest', 'docker', 'mongo', 'rest'],
    },
    description: [
      'Designed and built a whole claim management system for insurance companies',
      'Supervised outsourced development',
    ],
  },
  {
    name: 'Full-Stack Software Engineer',
    type: 'work',
    place: 'Investbook.fr SAS',
    url: 'https://www.investbook.fr',
    sector: 'Permanent',
    location: 'Paris',
    period: {
      year: '2015 ~ 2017',
      from: 'July',
      to: 'September',
    },
    content: 'Built a crowdfunding platform for the company',
    stack: {
      langs: ['php', 'typescript', 'nodejs'],
      tools: ['symfony', 'mysql', 'rest', 'jquery'],
    },
    description: ['Built and deployed a whole crowdfunding platform for the company (Full-Stack)'],
  },
  {
    name: 'Full-Stack Software Engineer',
    type: 'work',
    place: 'TSA SAS',
    sector: 'Permanent',
    location: 'Paris',
    period: {
      year: '2012 ~ 2015',
      from: 'March',
      to: 'August',
    },
    content: 'Built a booking system for the company',
    stack: {
      langs: ['php', 'typescript', 'nodejs'],
      tools: ['symfony', 'mysql', 'rest', 'jquery'],
    },
    description: ['Built and deployed a whole booking system for the company (Full-Stack)'],
  },
  {
    name: 'Software Engineer',
    type: 'work',
    place: 'CFM SA',
    url: 'https://www.cfm.fr',
    sector: 'Permanent',
    location: 'Tokyo',
    period: {
      year: '2010 ~ 2012',
      from: 'June',
      to: 'February',
    },
    content: 'Worked on a HFT in-house application built with in c++',
    stack: {
      langs: ['c++', 'python', 'nodejs'],
      tools: ['mysql', 'rest'],
    },
    description: [
      'Contributed to develop in-house high frenquency trading application in c++',
      'Trading application Production Support on Asian and Australian capital market open hours',
      'Continued the work started during the internship',
    ],
  },
  {
    name: 'Junior Software Engineer',
    type: 'work',
    place: 'CFM SA',
    url: 'https://www.cfm.fr',
    sector: 'Permanent',
    location: 'Paris',
    period: {
      year: '2009 ~ 2010',
      from: 'January',
      to: 'May',
    },
    content: '6 month post graduate Internship',
    stack: {
      langs: ['c++', 'python', 'nodejs'],
      tools: ['mysql', 'rest'],
    },
    description: [
      'Graphical user interface that displays daily asset prices using highcharts',
      'Tools to calculate latency statistics of order messages',
    ],
  },
];
