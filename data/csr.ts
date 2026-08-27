import { CSRSection, CSRStat } from '../types';

export const CSR_STATS: CSRStat[] = [
  {
    label: 'Trees Planted',
    target: 10000,
    suffix: '+',
    description: 'Native trees planted to promote environmental balance.',
    iconType: 'trees'
  },
  {
    label: 'Scholars',
    target: 100,
    suffix: '',
    description: 'Empowering students through our scholarship programs.',
    iconType: 'scholars'
  },
  {
    label: 'Classrooms Built',
    target: 14,
    suffix: '',
    description: 'Building safe and modern learning spaces for students.',
    iconType: 'classrooms'
  }
];

export const CSR_SECTIONS: CSRSection[] = [
  {
    id: 'tree-planting',
    title: 'Tree Planting',
    description: 'We build responsibly. In every project we develop, we plant trees to promote environmental balance, enhance green spaces, and nurture healthier communities for generations to come.',
    items: [], // Items weren't in the original text but added to the type, leaving empty to preserve exact content
    images: [
      '/TreePlanting/TreePlanting1.png',
      '/TreePlanting/TreePlanting2.png',
      '/TreePlanting/TreePlanting3.png',
      '/TreePlanting/TreePlanting4.png',
      '/TreePlanting/TreePlanting5.png',
      '/TreePlanting/TreePlanting6.png',
      '/TreePlanting/Treeplanting7.jpg',
    ]
  },
  {
    id: 'scholarships',
    title: 'Scholarship Grant',
    description: 'At Ovialand, we believe education transforms lives. Through our scholarship program, we support the children of our construction workers, helping them continue their studies and move closer to achieving their dreams.',
    items: [],
    images: [
      '/Scholars/new-photos/Scholars1.png',
      '/Scholars/new-photos/Scholars2.png',
      '/Scholars/new-photos/Scholars3.png',
    ]
  },
  {
    id: 'classroom',
    title: 'Community Building',
    description: ' Education is at the heart of strong communities. Ovialand donates classrooms in every barangay where we operate, creating better learning environments and supporting the growth of young minds.',
    items: [],
    images: [
      '/CommunityBuilding/CB1.png',
      '/CommunityBuilding/CB2.jpg',
      '/CommunityBuilding/CB3.jpg',
      '/CommunityBuilding/CB4.jpg',
      '/CommunityBuilding/CB5.jpg',
      '/CommunityBuilding/CB6.jpg',
      '/CommunityBuilding/CB7.png',
      '/CommunityBuilding/CB8.jpg',
      '/CommunityBuilding/CB9.jpg',
    ]
  },
  {
    id: 'outreach',
    title: 'Outreach Program',
    description: 'Our commitment to care extends beyond our developments. We support Manila Boys Town and Manila Girls Town by providing monthly essentials and organizing donation drives, especially during times of calamity, to help communities recover and rebuild.',
    items: [],
    images: [
      '/Outreach/Outreach1.png',
      '/Outreach/Outreach2.png',
      '/Outreach/Outreach3.png',
      '/Outreach/Outreach4.png',
      '/Outreach/Outreach5.png',
      '/Outreach/Outreach9.jpeg',
      '/Outreach/Outreach10.jpeg',
      '/Outreach/Outreach11.jpeg',
      '/Outreach/Outreach12.jpg',
      '/Outreach/Outreach13.jpg',
      '/Outreach/Outreach14.jpeg',
    ]
  }
];
