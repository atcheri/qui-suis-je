import { TimelineItem } from '../../../components/Timeliner';

export const studies: TimelineItem[] = [
  {
    name: 'statistics-finance',
    title: 'IT and Statistics in Finance',
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
      { content: 'Modelling Simulation of financial data' },
      { content: 'Quantitative analyse of random risk' },
      {
        content:
          'https://www.educaedu.fr/master-de-sciences-et-technologies-mention--sciences-et-management-specialite--statistique-et-finance-master-15163.html',
      },
    ],
  },
  {
    name: 'aerodynamics-aeroacoustic',
    title: 'Mechanical Engineering - Aérodynamique et Aéroacoustique',
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
      { content: 'Hydrodynamic Modelling and Simulation' },
      { content: 'Aerodynamics and Aero-acoustics' },
      { content: 'Fluid Mechanics' },
      {
        content:
          'https://sciences.sorbonne-universite.fr/formation-sciences/masters/master-de-mecanique/parcours-mecanique-des-fluides-fondements-et',
      },
    ],
  },
];

export const works: string[] = ['affinidi', 'realt', 'sestrel', 'actineo', 'investbook', 'tsa', 'cfm', 'cfm-intern'];
