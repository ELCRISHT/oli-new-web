
export const CONTACT_TOPICS = [
  'Sales Inquiry',
  'Broker Accreditation',
  'Career Opportunities',
  'Investor Relations',
  'Supplier Accreditation',
  'Community/Unit Concern',
  'Offer a Property',
  'Others'
];

export const TOPIC_RECIPIENTS: Record<string, string> = {
  'Sales Inquiry': 'sales@ovialand.com',
  'Broker Accreditation': 'sales@ovialand.com',
  'Career Opportunities': 'careers@ovialand.com',
  'Investor Relations': 'investorrelations@ovialand.com',
  'Supplier Accreditation': 'purchasing@ovialand.com',
  'Community/Unit Concern': 'customercare@ovialand.com',
  'Offer a Property': 'bdd@ovialand.cor',
  'Others': 'info@ovialand.com', 
};

export const OFFICE_INFO = {
  address: '2701 Parkway Corporate Center, Filinvest City, Alabang, Muntinlupa City, Metro Manila',
  phone: '02 8403 6864',
  phoneRaw: '0284036864',
  hours: '08:00 AM to 05:00 PM',
  emails: [
    { label: 'General Inquiry', email: 'info@ovialand.com' },
    { label: 'Investor Relations', email: 'investorrelations@ovialand.com' },
    { label: 'Sales Inquiry', email: 'sales@ovialand.com' },
    { label: 'Career Opportunities', email: 'careers@ovialand.com' },
  ]
};
