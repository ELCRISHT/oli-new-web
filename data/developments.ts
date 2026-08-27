import { Development, ModelData } from '../types';

export const MODEL_DATA_MAP: Record<string, ModelData> = {
  // Santevi
  Estate: {
    label: 'ESTATE',
    description: 'The Santevi Estate is a single attached unit. This offers an incredibly spacious area, designed to give your family a place to create your most unforgettable moments.',
    specs: { lotArea: '85', floorArea: '73.55', bedroom: '3', toiletBath: '2', carport: '1' },
  },
  Mansion: {
    label: 'MANSION',
    description: 'The Santevi Mansion is a duplex with the signature Ovialand back-to-back arrangement design. This exceptional design strives to give the Filipino family both comfort and value.',
    specs: { lotArea: '80', floorArea: '65.69', bedroom: '3', toiletBath: '2', carport: '1' },
  },
  'Manor Luxe': {
    label: 'MANOR LUXE',
    description: 'The Santevi Manor Luxe is a townhouse end unit that is designed for a modern Filipino home. The optimal space of the Manor Luxe is perfect for premier family living.',
    specs: { lotArea: '60', floorArea: '55.98', bedroom: '3', toiletBath: '2', carport: '1' },
  },
  'Manor Classic': {
    label: 'MANOR CLASSIC',
    description: 'The Santevi Manor Classic is a townhouse inner unit that provides comfort and security designed for the practical and sensible Filipino start-up family.',
    specs: { lotArea: '50', floorArea: '54.7', bedroom: '3', toiletBath: '2', carport: '1' },
  },
  // Savana South
  Mansion1: {
    label: 'MANSION',
    description: 'The Savana Mansion is a duplex with the signature Ovialand back-to-back arrangement design. This exceptional design strives to give the Filipino family the best living space in a beautiful community.',
    specs: { lotArea: '68', floorArea: '67', bedroom: '3', toiletBath: '2', carport: '1' },
  },
  M1: {
    label: 'MANOR LUXE',
    description: 'The Savana Manor Luxe is a townhouse end unit that is designed for modern Filipino home. The optimal space of the Manor Luxe is perfect for premier family living.',
    specs: { lotArea: '52', floorArea: '68', bedroom: '3', toiletBath: '2', carport: '1' },
  },
  ML2: {
    label: 'MANOR CLASSIC',
    description: 'The Savana Manor Classic is a townhouse inner unit that provides comfort and security designed for the practical and sensible Filipino start up family.',
    specs: { lotArea: '48', floorArea: '48', bedroom: '3', toiletBath: '2', carport: '1' },
  },
  // Savana
  Mansion11: {
    label: 'MANSION',
    description: 'The Savana Mansion is a duplex with the signature Ovialand back-to-back arrangement design. This exceptional design strives to give the Filipino family the best living space in a beautiful community.',
    specs: { lotArea: '68', floorArea: '67', bedroom: '3', toiletBath: '2', carport: '1' },
  },
  M11: {
    label: 'MANOR LUXE',
    description: 'The Savana Manor Luxe is a townhouse end unit that is designed for modern Filipino home. The optimal space of the Manor Luxe is perfect for premier family living.',
    specs: { lotArea: '52', floorArea: '68', bedroom: '3', toiletBath: '2', carport: '1' },
  },
  ML12: {
    label: 'MANOR CLASSIC',
    description: 'The Savana Manor Classic is a townhouse inner unit that provides comfort and security designed for the practical and sensible Filipino start up family.',
    specs: { lotArea: '48', floorArea: '48', bedroom: '3', toiletBath: '2', carport: '1' },
  },
  // Sentro
  EST: {
    label: 'Estate',
    description: 'The Sentro South Estate is a single attached unit. This offers an incredibly spacious area, designed to give your family a place to create your most unforgettable moments.',
    specs: { lotArea: '60', floorArea: '80', bedroom: '3', toiletBath: '2', carport: '1' },
  },
  ML3: {
    label: 'Manor Luxe',
    description: 'The Sentro Manor Luxe is a townhouse end unit that is designed for a modern Filipino home. The optimal space of the Manor Luxe is perfect for premier family living.',
    specs: { lotArea: '60', floorArea: '50', bedroom: '3', toiletBath: '2', carport: '1' },
  },
  MC1: {
    label: 'Manor Classic',
    description: 'The Sentro Manor Classic is a townhouse inner unit that provides comfort and security designed for the practical and sensible Filipino start-up family.',
    specs: { lotArea: '50', floorArea: '50.6', bedroom: '3', toiletBath: '2', carport: '1' },
  },
  MD1: {
    label: 'Mansion',
    description: 'The Sentro South Mansion is a duplex featuring Ovialand’s signature back-to-back arrangement design. This design aims to provide the best living space within a beautiful community.',
    specs: { lotArea: '56.56', floorArea: '80', bedroom: '3', toiletBath: '2', carport: '1' },
  },
  // Caliya
  Coral: {
    label: 'Estate',
    description: 'The Caliya Estate is a single attached unit. This offers an incredibly spacious area, designed to give your family a place to create your most unforgettable moments.',
    specs: { lotArea: '60', floorArea: '45', bedroom: '2', toiletBath: '2', carport: '1' },
  },
  Dune: {
    label: 'Mansion',
    description: 'The Caliya Mansion is a duplex unit. This offers enough living space in a beautiful community.',
    specs: { lotArea: '80', floorArea: '65', bedroom: '3', toiletBath: '2', carport: '1' },
  },
  ClManorLuxe: {
    label: 'MANOR LUXE',
    description: 'The Caliya Manor Luxe is a townhouse end unit that is designed for a modern Filipino home. The optimal space of the Manor Luxe is perfect for premier family living.',
    specs: { lotArea: '60', floorArea: '55.98', bedroom: '3', toiletBath: '2', carport: '1' },
  },
  ClManorClassic: {
    label: 'MANOR CLASSIC',
    description: 'The Caliya Manor Classic is a townhouse inner unit that provides comfort and security designed for the practical and sensible Filipino start-up family.',
    specs: { lotArea: '50', floorArea: '54.7', bedroom: '3', toiletBath: '2', carport: '1' },
  },
  // Sannera
  Glen: {
    label: 'Manor Luxe',
    description: 'The Sannera Manor Luxe is a 2-bedroom unit in this move-in ready community, thoughtfully designed for practical and comfortable everyday family living.',
    specs: { lotArea: '60', floorArea: '45', bedroom: '2', toiletBath: '2', carport: '1' },
  },
  Haven: {
    label: 'Manor Classic',
    description: 'The Sannera Manor Classic is a 3-bedroom home offering generous space and modern comforts, perfect for families who value both style and practicality.',
    specs: { lotArea: '80', floorArea: '65', bedroom: '3', toiletBath: '2', carport: '1' },
  },
  // Terazza De Sto. Tomas
  Iris: {
    label: 'Model One',
    description: 'The Terraza model is a 2-bedroom townhome designed to maximize space efficiency while providing all the comforts of modern living in Sto. Tomas, Batangas.',
    specs: { lotArea: '50', floorArea: '50', bedroom: '2', toiletBath: '2', carport: '–' },
  },
  Juniper: {
    label: 'Model Two',
    description: 'The Terraza model is a 3-bedroom townhome featuring generous living areas and contemporary finishes, ideal for families in Sto. Tomas, Batangas.',
    specs: { lotArea: '50', floorArea: '70', bedroom: '3', toiletBath: '2', carport: '–' },
  },
  // Seriya
  Kestrel: {
    label: 'Mansion',
    description: "The Seriya Mansion is a 2-bedroom unit representing Ovialand's expansion into Central Luzon, offering modern living with the charm of Baliwag's cultural heritage.",
    specs: { lotArea: '60', floorArea: '45', bedroom: '2', toiletBath: '2', carport: '1' },
  },
  Luma: {
    label: 'Manor Luxe',
    description: 'The Seriya Manor Luxe is a 3-bedroom home inspired by the historic city of Baliwag, designed to give families both comfort and a connection to local culture.',
    specs: { lotArea: '80', floorArea: '65', bedroom: '3', toiletBath: '2', carport: '1' },
  },
  SrManorClassic: {
    label: 'MANOR CLASSIC',
    description: 'The Seriya Manor Classic is a townhouse inner unit that provides comfort and security designed for the practical and sensible Filipino start-up family.',
    specs: { lotArea: '50', floorArea: '54.7', bedroom: '3', toiletBath: '2', carport: '1' },
  },
  // Anara
  AnaraEstate: {
    label: 'Estate',
    description: 'The Anara Estate is a single attached unit. This offers an incredibly spacious area, designed to give your family a place to create your most unforgettable moments.',
    specs: { lotArea: '80', floorArea: '60.16', bedroom: '3', toiletBath: '2', carport: '1' },
  },
  Quad: {
    label: 'Quad',
    description: 'The Quad Unit features a smart and efficient layout ideal for modern family living. With limited units in one structure, it provides a comfortable, private, and easy-to-maintain home for growing families.',
    specs: { lotArea: '60', floorArea: '50.70', bedroom: '2', toiletBath: '2', carport: '1' },
  },
  // Amirra
  AmirraEstate: {
    label: 'Estate',
    description: 'The Amirra Estate is a single-attached unit thoughtfully crafted for family milestones and unforgettable moments.',
    specs: { lotArea: '80', floorArea: '60', bedroom: '3', toiletBath: '2', carport: '1' },
  },
  AmirraMansion: {
    label: 'Mansion',
    description: "The Amirra Mansion offers a distinct duplex layout featuring Ovialand's signature back-to-back concept, designed to bring exceptional value and comfort to every Filipino household.",
    specs: { lotArea: '80', floorArea: '55.30', bedroom: '3', toiletBath: '2', carport: '1' },
  },
  AmirraEnclave: {
    label: 'Enclave',
    description: 'The Amirra Enclave is a quad unit that combines a clever, space-efficient layout with a low-density building design, giving growing families a private, easy-to-maintain, and comfortable living environment.',
    specs: { lotArea: '60', floorArea: '56.40', bedroom: '3', toiletBath: '2', carport: '1' },
  },
};

export const DEVELOPMENTS: Development[] = [
  {
    id: '1',
    name: 'Santevi',
    location: 'Bgry. San Vicente, San Pablo City, Laguna',
    imageUrl: '/Santevi-1.png',
    estateImageUrl: '/Santevi/S1.jpg',
    mansionImageUrl: '/Mansion.jpg',
    manorLuxeImageUrl: '/Santevi/S3.jpg',
    manorClassicImageUrl: '/Santevi/S4.jpg',
    mapUrl: 'https://maps.app.goo.gl/FfzsG4GASGqaTiDL9',
    status: 'Ongoing Project',
    description: 'Santevi is the latest premier development of Ovialand in San Pablo, Laguna. Inspired by the modern Filipino family, Santevi is conveniently located along the highway, providing our clients easy access to all their needs while keeping the feeling of exclusivity and privacy. Inspired by modern French architecture, Santevi aspires to deliver to its homeowners the best lifestyle community in San Pablo. Santevi is located at Brgy. San Vicente, San Pablo City, Laguna.',
    houseModels: ['Estate', 'Mansion', 'Manor Luxe', 'Manor Classic'],
    houseModelImages: ['/Santevi/S1.jpg', '/Mansion.jpg', '/Santevi/S3.jpg', '/Santevi/S4.jpg'],
    nearbyEstablishments: ['San Pablo City Public Market', 'SM City San Pablo', 'San Pablo General Hospital']
  },
  {
    id: '2',
    name: 'Savana South',
    location: 'Brgy. Soledad, San Pablo City, Laguna',
    imageUrl: '/Sav-South.png',
    mapUrl: 'https://maps.app.goo.gl/Fbrbh72Hj8ivmoh97',
    status: 'Ongoing Project',
    description: 'The City of San Pablo is modern and developed, but it has not forgotten its deep roots of culture and tradition. The city has blended new buildings and updated infrastructure, but has not forgotten its old world charm. Savana South pays tribute to the old world beauty, blended seamlessly with style and class. Savana is Located at Brgy. Soledad, San Pablo City, Laguna.',
    houseModels: ['Mansion1', 'M1', 'ML2'],
    houseModelImages: ['/Savana/SV1.jpg', '/Savana/SV2.jpg', '/Savana/SV3.jpg'],
    nearbyEstablishments: ['Soledad Elementary School', 'Local Wet Market', 'Fuel Station']
  },
  {
    id: '3',
    name: 'Sentro',
    location: 'Brgy. San Crispin, San Pablo City, Laguna',
    imageUrl: '/Sentro.png',
    mapUrl: 'https://maps.app.goo.gl/b1zAoyVMq9JQa2R96',
    status: 'Ongoing Project',
    description: 'Sentro is designed as a friendly neighborhood with landscaped walkways and communal spaces.',
    houseModels: ['Elm', 'Fiora'],
    houseModelImages: ['/Sentro/SR-1.JPG', '/Sentro/SR-2.JPG'],
    nearbyEstablishments: ['San Crispin Park', 'Community Health Center', 'Neighborhood Grocery']
  },
  {
    id: '4',
    name: 'Savana',
    location: 'Brgy. Soledad, San Pablo City, Laguna',
    imageUrl: '/Savana-1.png',
    mapUrl: 'https://maps.app.goo.gl/NCHFYCc57z9ovh3B8',
    status: 'Completed Project',
    description: 'The City of San Pablo is modern and developed, but it has not forgotten its deep roots of culture and tradition. The city has blended new buildings and updated infrastructure, but has not forgotten its old world charm. Savana pays tribute to the old world beauty, blended seamlessly with style and class. Savana is Located at Brgy. Soledad, San Pablo City, Laguna.',
    houseModels: ['Mansion11', 'M11', 'ML12'],
    houseModelImages: ['/Savana/SV1.jpg', '/Savana/SV2.jpg', '/Savana/SV3.jpg'],
    nearbyEstablishments: ['Soledad Elementary School', 'Local Wet Market', 'Fuel Station']
  },
  {
    id: '5',
    name: 'Caliya',
    location: 'Brgy. Masin Sur, Candelaria, Quezon',
    imageUrl: '/Caliya-2.png',
    mapUrl: 'https://maps.app.goo.gl/PccgX1be5H8kWCd2A',
    status: 'Ongoing Project',
    description: 'Caliya, nestled at the heart of Candelaria, is a sprawling 9.7 hectares of gently rolling landscape. Caliya is carefully planned and meticulously designed to provide the comforts and convenience of a modern-day neighborhood you will be proud to belong to and glad to call your home.',
    houseModels: ['Coral', 'Dune', 'ClManorLuxe', 'ClManorClassic'],
    houseModelImages: ['/Caliya/CA1.jpg', '/Caliya/CA2.jpg', '/Caliya/CA3.jpg', '/Caliya/CA4.jpg'],
    nearbyEstablishments: ['Candelaria Municipal Hall', 'Town Market', 'Candelaria Bay']
  },
  {
    id: '6',
    name: 'Sannera',
    location: 'Brgy. San Antonio 2, San Pablo City, Laguna',
    imageUrl: '/Sannera-1.png',
    mapUrl: 'https://maps.app.goo.gl/SXzTX6WyiQnWe5MG6',
    status: 'Completed Project',
    description: 'Sannera is a completed township offering move-in ready homes and a tight-knit community feel.',
    houseModels: ['Glen', 'Haven'],
    houseModelImages: ['/Sannera-1.png', '/Sannera-1.png'],
    nearbyEstablishments: ['Sannera Community Center', 'St. Anthony Church', 'Local Retail Strip']
  },
  {
    id: '7',
    name: 'Terazza De Sto. Tomas',
    location: 'Brgy. San Roque, Sto. Tomas, Batangas',
    imageUrl: '/Terraza-1.png',
    mapUrl: 'https://maps.app.goo.gl/D8TJW2p81BThZ3x97',
    status: 'Completed Project',
    description: 'Terazza De Sto. Tomas features townhomes and communal gardens within easy reach of Sto. Tomas town proper.',
    houseModels: ['Iris', 'Juniper'],
    houseModelImages: ['/Terraza-1.png', '/Terraza-1.png'],
    nearbyEstablishments: ['Sto. Tomas Market', 'Primary School', 'Bus Terminal']
  },
  {
    id: '8',
    name: 'Seriya',
    location: 'Brgy. Hinukay, Baliwag City, Bulacan',
    imageUrl: '/Seriya-1.png',
    mapUrl: 'https://maps.app.goo.gl/DMJBUTYYMHfbQEgy8',
    status: 'Ongoing Project',
    description: 'It is a milestone for Ovialand. This will be the first development of the company in Central Luzon. Its name is from "cabecerria" which was what the Spaniards referred to Baliwag when it had no name yet. It is located along Baliwag-Candaba Road, Baliwag, Bulacan. Soon to Open',
    houseModels: ['Kestrel', 'Luma', 'SrManorClassic'],
    houseModelImages: ['/Seriya/SRY1.png', '/Seriya/SRY2.png', '/Seriya/SRY3.png'],
    nearbyEstablishments: ['Baliwag Town Center', 'Public Hospital', 'Shopping Arcade']
  },
  {
    id: '9',
    name: 'Anara',
    location: 'Brgy. San Roque, Baliwag City, Bulacan',
    imageUrl: 'Anara.jpg',
    mapUrl: 'https://maps.app.goo.gl/TJtXWQvv8zzwPync8',
    status: 'Opening Soon',
    description: 'Anara is a 4.2-hectare residential community in Baliuag, Bulacan designed for modern tropical living. It brings Ovialand signature Premier Family Living experience, featuring premium finishes, efficient precast construction, and the reliable HousEasy service commitment for a smooth and reassuring homeownership journey.',
    houseModels: ['AnaraEstate', 'Quad'],
    houseModelImages: ['/Anara/Estate.png', '/Anara/Quad.png'],
    nearbyEstablishments: ['Plaza de Baliwag', 'High School', 'Community Church']
  },
  {
    id: '10',
    name: 'Amirra',
    location: 'Sta. Maria, Bulacan',
    imageUrl: '/Amirra/AMIRRA OLI PROFILE.jpg',
    mapUrl: 'https://maps.app.goo.gl/CCwBdLApw4CfRFbM9',
    status: 'Opening Soon',
    description: "Amirra is Ovialand's latest community, soon to rise in Sta. Maria, Bulacan — just 30 minutes away from Metro Manila. For families who have long wanted a real house and lot close to the city, this is the moment that feels different. Ovialand brings its signature approach to community planning: well-planned homes, thriving open spaces where neighbors are not strangers. Here, suburban living goes beyond location: it is a thoughtfully designed environment where children can play, neighbors become friends, and everyday life unfolds comfortably. Backed by Ovialand's HousEasy promise, your home is delivered with clarity, quality, and care, making the journey to homeownership as smooth and reassuring as the life that awaits you here.",
    houseModels: ['AmirraEstate', 'AmirraMansion', 'AmirraEnclave'],
    houseModelImages: ['/Amirra/AMIRRA ESTATE.jpg', '/Amirra/AMIRRA MANSION.jpg', '/Amirra/AMIRRA ENCLAVE.jpg'],
    nearbyEstablishments: ['Polytechnic University of the Philippines', 'ACE - Santa Maria Medical Center Inc.', 'Sta. Maria Town Center', 'Nuestra Señora del Carmel Parish Church - Pulong Buhangin']
  }
];

export const southLuzon = DEVELOPMENTS.filter(d =>
  ['Laguna', 'Batangas', 'Quezon'].some(loc => d.location.includes(loc))
);

export const centralLuzon = DEVELOPMENTS.filter(d =>
  ['Bulacan', 'Pampanga', 'Nueva Ecija', 'Tarlac', 'Zambales', 'Bataan'].some(loc => d.location.includes(loc))
);
