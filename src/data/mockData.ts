export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  benefits: string[];
  image: string;
  iconName: string;
  badge?: string;
}

export interface MixGrade {
  code: string;
  name: string;
  strength: string;
  recommendedFor: string[];
  bestUse: string;
}

export interface Testimonial {
  name: string;
  role: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
  projectType: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'volumetric',
    title: 'Volumetric On-Site Concrete',
    shortDesc: 'Mixed fresh right at your kerbside or site. You only pay for what comes out of the chute.',
    longDesc: 'Our mobile batching units carry raw aggregates, cement, and water separately. Concrete is mixed fresh on-site to your exact slump and strength specification. Zero waste, zero risk of under or over-ordering.',
    benefits: [
      'Pay only for what you pour — zero waste disposal fees',
      'Change slump or mix strength on-site mid-pour',
      'Continuous fresh mix prevents premature curing',
      'Ideal for difficult access & precise foundations'
    ],
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=800&q=80',
    iconName: 'Truck',
    badge: 'Most Popular'
  },
  {
    id: 'ready-mix',
    title: 'Ready Mix Drum Concrete',
    shortDesc: 'High-volume batch plant concrete delivered in modern drum mixers up to 8m³ per load.',
    longDesc: 'Engineered for large-scale continuous pours including commercial slabs, housing developments, warehouse yards, and civil highway infrastructure with full British Standard compliance.',
    benefits: [
      'High-capacity drum delivery up to 8m³ per load',
      'Computerised batching precision & slump testing',
      'Scheduled sequential deliveries for large sites',
      'Full BSI certification and batch test certificates'
    ],
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=800&q=80',
    iconName: 'Factory',
    badge: 'Heavy Duty'
  },
  {
    id: 'pumping',
    title: 'Concrete Pump Hire (Ground & Boom)',
    shortDesc: 'Eliminate wheelbarrows. Pump up to 80m through alleys, gardens, or over roofs.',
    longDesc: 'Struggling with access? Our fleet includes agile Ground Line pumps (flexible hoses snaked through doorways, side alleys, and gardens) and hydraulic Boom pumps to reach over multi-storey structures.',
    benefits: [
      'Pours up to 1m³ per minute — saves hours of manual labour',
      'Pipes can navigate tight hallways, alleys and fences',
      'Prevents turf & driveway damage from heavy barrows',
      'Fully trained CPCS certified pump operator included'
    ],
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80',
    iconName: 'Activity',
    badge: 'Access Solved'
  },
  {
    id: 'domestic',
    title: 'Domestic Concrete Projects',
    shortDesc: 'Tailored mixes for driveways, shed bases, garden extensions, patios, and garage pads.',
    longDesc: 'Whether you are a homeowner tackling a DIY garden patio or a builder laying foundations for a kitchen extension, our team provides friendly advice on the correct mix grade and volume needed.',
    benefits: [
      'Expert advice for homeowners & self-builders',
      'Small batch deliveries starting from 0.5m³',
      'Free barrow time included on volumetric deliveries',
      'Clean, polite drivers who respect your property'
    ],
    image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80',
    iconName: 'Home',
  },
  {
    id: 'commercial',
    title: 'Commercial & Civil Concrete',
    shortDesc: 'High-strength structural concrete for civil engineers, groundworkers, and industrial units.',
    longDesc: 'From heavy-duty external aprons and forklift-rated floors to reinforced bridge footings and retention walls, we supply mixes designed for maximum durability and chemical resistance.',
    benefits: [
      'Account facilities & dedicated trade rep',
      'Cube test certificates provided on request',
      'Fiber-reinforced & waterproofing admixtures available',
      'Strict adherence to BS 8500 and BS EN 206 standards'
    ],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    iconName: 'Building2',
  },
  {
    id: 'screed',
    title: 'Floor Screed & Flowing Screed',
    shortDesc: 'Smooth sand-and-cement traditional screed & liquid screed ready for underfloor heating.',
    longDesc: 'We supply high-performance floor screeds tailored for commercial developments and domestic renovations. Rapid drying, fiber reinforced, and self-compacting options for laser-flat floor finishes.',
    benefits: [
      'Superb thermal conductivity for underfloor heating',
      'Semi-dry sand & cement screed with retarders',
      'Liquid flowing screed for fast laser installation',
      'Minimal shrinkage cracking with synthetic fibers'
    ],
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=800&q=80',
    iconName: 'Layers',
  }
];

export const MIX_GRADES: MixGrade[] = [
  {
    code: 'C10 / GEN 1',
    name: 'Blinding & Mass Concrete',
    strength: '10 N/mm²',
    recommendedFor: ['Blinding layers', 'Drainage trenches', 'Non-structural mass fill', 'Post securing'],
    bestUse: 'Non-structural unreinforced filling'
  },
  {
    code: 'C15 / GEN 2',
    name: 'Kerbing & Small Bases',
    strength: '15 N/mm²',
    recommendedFor: ['Kerb bedding', 'Shed slabs', 'Greenhouse bases', 'Steps & small footpaths'],
    bestUse: 'Light domestic foundations'
  },
  {
    code: 'C20 / GEN 3',
    name: 'Domestic Slabs & Footings',
    strength: '20 N/mm²',
    recommendedFor: ['Single-storey extension footings', 'Garage base slabs', 'Paving beds', 'Internal unreinforced floors'],
    bestUse: 'Most popular domestic foundation mix'
  },
  {
    code: 'C25 / RC25',
    name: 'General Reinforced Foundations',
    strength: '25 N/mm²',
    recommendedFor: ['Multi-storey house footings', 'Trench fill', 'Reinforced ground beams', 'Structural slabs'],
    bestUse: 'Standard builder foundation grade'
  },
  {
    code: 'C30 / PAV 1',
    name: 'Driveways & External Paving',
    strength: '30 N/mm²',
    recommendedFor: ['Driveways subjected to light vehicles', 'Patios', 'External ramps', 'Garage aprons'],
    bestUse: 'Freeze-thaw resistant outdoor slabs'
  },
  {
    code: 'C35 / PAV 2',
    name: 'Heavy Duty Commercial Paving',
    strength: '35 N/mm²',
    recommendedFor: ['Commercial vehicle parking', 'Agricultural yards', 'Industrial access roads', 'Storage aprons'],
    bestUse: 'Heavy vehicle & chemical resistance'
  },
  {
    code: 'C40 / RC40',
    name: 'High-Strength Structural',
    strength: '40 N/mm²',
    recommendedFor: ['Structural columns', 'Heavy warehouse floors', 'Precast panels', 'High abrasion surfaces'],
    bestUse: 'Severe industrial and structural loads'
  }
];

export const AREAS_COVERED = [
  { name: 'Wolverhampton', time: 'Fast Local Delivery', popular: true },
  { name: 'Birmingham', time: 'Same Day / Next Day', popular: true },
  { name: 'Dudley', time: 'Fast Local Delivery', popular: true },
  { name: 'Walsall', time: 'Fast Local Delivery', popular: true },
  { name: 'West Bromwich', time: 'Same Day / Next Day', popular: true },
  { name: 'Stourbridge', time: 'Same Day / Next Day', popular: false },
  { name: 'Sutton Coldfield', time: 'Same Day / Next Day', popular: true },
  { name: 'Cannock', time: 'Daily Scheduled Runs', popular: false },
  { name: 'Telford', time: 'Daily Scheduled Runs', popular: false },
  { name: 'Oldbury & Smethwick', time: 'Fast Local Delivery', popular: false },
  { name: 'Solihull', time: 'Same Day / Next Day', popular: true },
  { name: 'Coventry', time: 'Scheduled Daily', popular: false }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Dave Morrison',
    role: 'Director, Morrison Groundworks Ltd',
    location: 'Wolverhampton',
    rating: 5,
    date: '2 weeks ago',
    comment: 'Used Khalsa Ready Mix Concrete for a 24m³ slab pour on a commercial unit. Volumetric trucks turned up exactly on schedule, mix consistency was spot on, and the ground line pump operator was exceptional. Saved us easily £400 compared to batch plant drum quotes because we paid only for what we poured.',
    verified: true,
    projectType: 'Commercial Foundation & Pumping'
  },
  {
    name: 'Jaspreet Singh',
    role: 'Property Developer',
    location: 'Birmingham',
    rating: 5,
    date: '1 month ago',
    comment: 'Khalsa Ready Mix Concrete is our go-to supplier across all our West Midlands residential projects. Their out-of-hours service helped us complete a highway tie-in at 5 AM without disruption. Clean trucks, courteous drivers, and top-tier customer service.',
    verified: true,
    projectType: 'Residential Development'
  },
  {
    name: 'Mark Henderson',
    role: 'Homeowner',
    location: 'Dudley',
    rating: 5,
    date: '3 weeks ago',
    comment: 'First time ordering concrete for a garden room and patio slab. I used their website calculator which was super accurate. The driver was incredibly helpful, explained how to level the mix, and gave us plenty of barrow time. Outstanding company!',
    verified: true,
    projectType: 'Garden Patio & Shed Base'
  },
  {
    name: 'Anita Patel',
    role: 'Architect & Project Lead',
    location: 'Solihull',
    rating: 5,
    date: 'Last month',
    comment: 'Cube test results came back surpassing our structural engineer specifications. BSI certified paperwork provided promptly. The communication from dispatch was second to none.',
    verified: true,
    projectType: 'Structural Footings (C30)'
  }
];

export const FAQS = [
  {
    q: 'How does Volumetric Concrete save me money compared to drum mixers?',
    a: 'With traditional drum trucks, you must order an exact estimated amount beforehand. If you order too much, you pay for disposal; if you order too little, you must pay an expensive "short load" penalty for a second truck. With Khalsa Ready Mix Concrete\'s volumetric batching trucks, we mix fresh on-site and stop the moment your forms are full. You pay strictly for the cubic metres you use, with zero waste.'
  },
  {
    q: 'How much notice do I need to book a concrete delivery?',
    a: 'We offer same-day and next-day deliveries across our service areas. However, to guarantee your preferred morning or afternoon time slot, booking 24 to 48 hours in advance is recommended. We also provide out-of-hours, night, and weekend pours upon request.'
  },
  {
    q: 'What is the reach of your concrete pumps?',
    a: 'Our Ground Line pump units can carry flexible steel and rubber pipelines exceeding 80 metres, passing effortlessly through standard house doors, side gates, or over garden walls. Our hydraulic Boom pumps can reach up to 36 metres vertically and over rooftops where ground access is obstructed.'
  },
  {
    q: 'What is the minimum order quantity?',
    a: 'Our volumetric trucks can deliver quantities as small as 0.5m³, making us ideal for small domestic DIY jobs like shed bases and post footings, as well as massive commercial pours spanning dozens of cubic metres.'
  },
  {
    q: 'How much wheelbarrow time is included in the delivery?',
    a: 'We provide generous standard discharge time included in your delivery rate (typically 8-10 minutes per m³). If you require extended time or have difficult wheelbarrow access, we recommend hiring our ground line concrete pump to pour up to 1m³ per minute cleanly.'
  },
  {
    q: 'Can you adjust the slump or concrete strength on site?',
    a: 'Yes! Because raw cement, aggregate, and water are stored separately in individual hoppers on our volumetric mixers, our calibrated operator can change the slump (wetness) or mix strength (from C15 up to C40) instantly at the push of a button during your pour.'
  }
];

export const PROJECTS_GALLERY = [
  {
    title: 'Commercial Warehouse Slab',
    category: 'Commercial',
    volume: '42 m³ C35',
    location: 'Wolverhampton',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=700&q=80'
  },
  {
    title: 'Rear Extension Ground Line Pump',
    category: 'Pumping',
    volume: '11 m³ C25',
    location: 'Birmingham',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=700&q=80'
  },
  {
    title: 'Imprinted Concrete Driveway',
    category: 'Domestic',
    volume: '8.5 m³ C30',
    location: 'Sutton Coldfield',
    image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=700&q=80'
  },
  {
    title: 'Precision Flowing Floor Screed',
    category: 'Screed',
    volume: '18 m³ FlowScreed',
    location: 'Dudley',
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=700&q=80'
  },
  {
    title: 'Civil Groundwork Footings',
    category: 'Commercial',
    volume: '65 m³ RC35',
    location: 'Walsall',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=700&q=80'
  },
  {
    title: 'Garden Studio Slab & Trench',
    category: 'Domestic',
    volume: '5.2 m³ C20',
    location: 'Solihull',
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=700&q=80'
  }
];
