/**
 * Khalsa Ready Mix Concrete - Central Business Configuration
 * Populated directly from client intake questionnaire responses.
 */

export interface BusinessConfig {
  company: {
    name: string;
    legalName: string;
    tagline: string;
    badgeText: string;
    experienceYears: number;
  };
  contact: {
    primaryPhone: string;
    primaryPhoneDisplay: string;
    secondaryPhone: string;
    secondaryPhoneDisplay: string;
    email: string;
    depotAddress: {
      full: string;
      line1: string;
      town: string;
      postcode: string;
      googleMapsUrl: string;
    };
  };
  whatsapp: {
    enabled: boolean;
    number: string;
    displayNumber: string;
    defaultMessage: string;
  };
  hours: {
    schedule: string;
    days: string;
    time: string;
    outOfHoursNote: string;
  };
  operations: {
    truckType: 'Volumetric Mixers (Mix on site)';
    payOnlyWhatYouUse: boolean;
    minimumVolume: string;
    freeDischargeNote: string;
    deliverySpeedScore: number;
    speedTagline: string;
  };
  pumps: {
    offerGroundLine: boolean;
    groundLineMaxDistanceMeters: number;
    offerBoom: boolean;
    cpcsQualified: boolean;
  };
  services: string[];
  mixStrengths: {
    standard: string[];
    rapidSet: boolean;
    fibreReinforced: boolean;
  };
  paymentMethods: string[];
  socials: {
    facebook: string;
    instagram: string;
    linkedin: string;
  };
  coverage: {
    towns: Array<{ name: string; time: string; popular: boolean }>;
    postcodePrefixes: string[];
  };
}

export const businessConfig: BusinessConfig = {
  company: {
    name: 'Khalsa Ready Mix Concrete',
    legalName: 'Khalsa Ready Mix Concrete Ltd',
    tagline: 'Speedy volumetric concrete mixed fresh on site',
    badgeText: 'Pay Only For What You Use • Zero Waste Guarantee',
    experienceYears: 15,
  },

  contact: {
    primaryPhone: '07983682727',
    primaryPhoneDisplay: '07983 682 727',
    secondaryPhone: '07504258408',
    secondaryPhoneDisplay: '07504 258 408',
    email: 'khalsareadymixconcreteltd@gmail.com',
    depotAddress: {
      full: '15 Monmore Rd, Wolverhampton, WV1 2TZ',
      line1: '15 Monmore Rd',
      town: 'Wolverhampton',
      postcode: 'WV1 2TZ',
      googleMapsUrl: 'https://maps.google.com/?q=15+Monmore+Rd,+Wolverhampton+WV1+2TZ',
    },
  },

  whatsapp: {
    enabled: true,
    number: '447983682727',
    displayNumber: '07983 682 727',
    defaultMessage: 'Hi Khalsa Ready Mix Concrete, I would like to get a fast quote for concrete delivery.',
  },

  hours: {
    schedule: 'Mon - Sat: 6:00 AM to 6:00 PM',
    days: 'Monday to Saturday',
    time: '6:00 AM – 6:00 PM',
    outOfHoursNote: '24/7 Out-of-Hours & Emergency Sunday Pours Available by Arrangement',
  },

  operations: {
    truckType: 'Volumetric Mixers (Mix on site)',
    payOnlyWhatYouUse: true,
    minimumVolume: 'Flexible orders from 0.5m³ to full commercial pours',
    freeDischargeNote: 'Generous free barrow & chute discharge time allocated with every delivery',
    deliverySpeedScore: 5,
    speedTagline: 'Guaranteed Same-Day & Next-Day Rapid Dispatch Across the West Midlands',
  },

  pumps: {
    offerGroundLine: true,
    groundLineMaxDistanceMeters: 80,
    offerBoom: false,
    cpcsQualified: true,
  },

  services: [
    'Domestic Concrete (Patios, Sheds, Driveways)',
    'Commercial & Civil Groundworks',
    'Floor Screed & Flowing Screed',
    'Ground Line Concrete Pump Hire (Up to 80m+)',
    'Volumetric Mix-On-Site Concrete',
    'Same-Day Delivery & Rapid Dispatch'
  ],

  mixStrengths: {
    standard: ['C20 / GEN 3', 'C25 / RC25', 'C30 / PAV 1', 'C35 / PAV 2', 'C40 / RC40'],
    rapidSet: true,
    fibreReinforced: true,
  },

  paymentMethods: [
    'Credit & Debit Cards',
    'BACS / Bank Transfer',
    'Cash on Delivery',
  ],

  socials: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
  },

  coverage: {
    towns: [
      { name: 'Wolverhampton', time: 'Depot Yard • Priority Dispatch', popular: true },
      { name: 'Birmingham', time: 'Same-Day / Next-Day', popular: true },
      { name: 'Dudley', time: 'Fast Local Delivery', popular: true },
      { name: 'Walsall', time: 'Fast Local Delivery', popular: true },
      { name: 'West Bromwich', time: 'Same-Day / Next-Day', popular: true },
      { name: 'Stourbridge', time: 'Same-Day / Next-Day', popular: true },
      { name: 'Cannock', time: 'Daily Scheduled Runs', popular: true },
      { name: 'Stafford', time: 'Scheduled Daily', popular: true },
      { name: 'Telford', time: 'Scheduled Daily', popular: true },
      { name: 'Sutton Coldfield', time: 'Same-Day / Next-Day', popular: true },
      { name: 'Solihull', time: 'Same-Day / Next-Day', popular: true },
      { name: 'Oldbury & Smethwick', time: 'Fast Local Delivery', popular: false },
    ],
    postcodePrefixes: ['WV', 'WS', 'DY', 'B', 'ST', 'TF'],
  },
};
