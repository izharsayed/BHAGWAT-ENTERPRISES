export interface CompanyImage {
  id: string;
  url: string;
  alt: string;
  category: string;
  source: "company" | "stock";
  status: "temporary" | "replaceable" | "authentic";
}

export interface ProjectItem {
  id: string;
  number: string;
  client: string;
  location: string;
  category: string;
  image: CompanyImage;
}

export interface IndustryItem {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  description: string;
  image: CompanyImage;
  capabilities?: string[];
  clients?: string;
}

export const COMPANY_INFO = {
  name: "BHAGWAT ENTERPRISES",
  shortMark: "BE",
  tagline: "ENGINEERING. FABRICATION. EXECUTION.",
  business: "Industrial engineering, fabrication, equipment erection, process plant projects, and turnkey project execution.",
  location: "Dondaicha, Maharashtra, India",
  pin: "425408",
  website: "bhagwatenterprises.com",
  contactPerson: "Gopal Bhagwat",
  phone: "09325815600",
  primaryEmail: "gbhagwat1608@gmail.com",
  secondaryEmail: "gbhagwat1408@gmail.com",
  experienceYears: "20+",
  experienceNote: "Over twenty years in business providing quality fabrication and erection engineering.",
  positioning: "Leading fabrication and erection engineering for process plants, starch manufacturing & food industries.",
  description: "Bhagwat Enterprises is a leading fabrication and erection engineering company with over twenty years of industry reputation, delivering quality execution for starch manufacturing, food industries, and turnkey capital projects.",
  disclaimer: "AUTHENTIC PROJECT EXECUTION · BHAGWAT ENTERPRISES",
};

export const IMAGES: Record<string, CompanyImage> = {
  hero: {
    id: "hero-plant",
    url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80",
    alt: "Industrial process plant with piping and pressure vessels",
    category: "Hero process plant",
    source: "stock",
    status: "replaceable",
  },
  aboutMain: {
    id: "about-fab",
    url: "/images/tank-making.jpg",
    alt: "Industrial storage tank plate fabrication and internal welding in progress",
    category: "Tank fabrication",
    source: "company",
    status: "replaceable",
  },
  logoDark: {
    id: "logo-dark",
    url: "/images/bhagwat-logo.png",
    alt: "Bhagwat Enterprises Official Logo",
    category: "Branding",
    source: "company",
    status: "replaceable",
  },
  logoWhite: {
    id: "logo-white",
    url: "/images/bhagwat-logo-white.png",
    alt: "Bhagwat Enterprises White Logo",
    category: "Branding",
    source: "company",
    status: "replaceable",
  },
  aboutDetail: {
    id: "about-detail-weld",
    url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    alt: "Precision pipe fitting and structural welding",
    category: "Welding detail",
    source: "stock",
    status: "replaceable",
  },
  technical: {
    id: "tech-precision",
    url: "/images/projects/proj_09_chalisgaon.jpeg",
    alt: "Precision stainless steel process piping manifolds, flanges, and structural pipe rack execution",
    category: "Precision Engineering",
    source: "company",
    status: "authentic",
  },
  indStarch: {
    id: "ind-starch",
    url: "/images/industries/ind_01_starch.jpeg",
    alt: "Industrial starch manufacturing silos, centrifuges and process plant execution",
    category: "Starch Plant",
    source: "company",
    status: "authentic",
  },
  indFood: {
    id: "ind-food",
    url: "/images/industries/ind_02_food.jpeg",
    alt: "Sanitary stainless steel food processing lines, jacketed vessels and piping",
    category: "Food Industry",
    source: "company",
    status: "authentic",
  },
  indProcess: {
    id: "ind-process",
    url: "/images/industries/ind_03_process.jpeg",
    alt: "Turnkey storage tank batteries, process manifolds and chemical facilities",
    category: "Process Plant",
    source: "company",
    status: "authentic",
  },
  indEquip: {
    id: "ind-equip",
    url: "/images/industries/ind_04_equipment.jpeg",
    alt: "Heavy rotary kiln, pressure vessel erection and high-altitude crane rigging",
    category: "Heavy Rigging",
    source: "company",
    status: "authentic",
  },
  indEngineering: {
    id: "ind-eng",
    url: "/images/projects/proj_09_chalisgaon.jpeg",
    alt: "Multi-stage turnkey industrial project site and stainless pipe rack",
    category: "Turnkey Site",
    source: "company",
    status: "authentic",
  },
};
export const PROJECTS_LIST: ProjectItem[] = [
  {
    id: "proj-01",
    number: "01",
    client: "M/S. Riddhi Siddhi Gluco Biols Ltd.",
    location: "Gokak, Karnataka",
    category: "Process Plant Execution",
    image: {
      id: "p1",
      url: "/images/projects/proj_01_gokak.jpeg",
      alt: "Storage silos and process plant execution at Gokak",
      category: "Storage tanks",
      source: "company",
      status: "replaceable",
    },
  },
  {
    id: "proj-02",
    number: "02",
    client: "M/S. Riddhi Siddhi Gluco Biols Ltd.",
    location: "Pantnagar, Uttarakhand",
    category: "Equipment Fabrication & Erection",
    image: {
      id: "p2",
      url: "/images/projects/proj_02_pantnagar.jpeg",
      alt: "Plant structural fabrication and equipment erection at Pantnagar",
      category: "Fabrication workshop",
      source: "company",
      status: "replaceable",
    },
  },
  {
    id: "proj-03",
    number: "03",
    client: "M/S. Ashapura Volclay Ltd.",
    location: "Bhuj, Gujarat",
    category: "Industrial Processing",
    image: {
      id: "p3",
      url: "/images/projects/proj_03_bhuj.jpeg",
      alt: "Heavy rotary drum calciner installation at Bhuj",
      category: "Industrial machinery",
      source: "company",
      status: "replaceable",
    },
  },
  {
    id: "proj-04",
    number: "04",
    client: "M/S. Siddhi Vinayak Agro Industries Pvt. Ltd.",
    location: "Chhindwara, Madhya Pradesh",
    category: "Agro & Starch Facility",
    image: {
      id: "p4",
      url: "/images/projects/proj_04_chhindwara.jpeg",
      alt: "Crane erection of conical vessel bottom at Chhindwara",
      category: "Vessel erection",
      source: "company",
      status: "replaceable",
    },
  },
  {
    id: "proj-05",
    number: "05",
    client: "M/S. Sharda Starch & Chemicals Pvt. Ltd.",
    location: "Malda, West Bengal",
    category: "Chemical & Starch Unit",
    image: {
      id: "p5",
      url: "/images/projects/proj_05_malda.jpeg",
      alt: "Stainless steel U-trough agitator and vessel fabrication at Malda",
      category: "Chemical equipment",
      source: "company",
      status: "replaceable",
    },
  },
  {
    id: "proj-06",
    number: "06",
    client: "M/S. Paramesu Biotech Pvt. Ltd.",
    location: "Rajahmundry, Andhra Pradesh",
    category: "Biotech & Processing Plant",
    image: {
      id: "p6",
      url: "/images/projects/proj_06_rajahmundry.jpeg",
      alt: "Horizontal pressure vessel skid and processing lines at Rajahmundry",
      category: "Pressure vessels",
      source: "company",
      status: "replaceable",
    },
  },
  {
    id: "proj-07",
    number: "07",
    client: "M/S. Gujarat Ambuja Exports Ltd.",
    location: "Shiggaon, Karnataka",
    category: "Maize & Starch Processing",
    image: {
      id: "p7",
      url: "/images/projects/proj_07_shiggaon.jpeg",
      alt: "Storage tank battery erection under blue sky at Shiggaon",
      category: "Storage tanks",
      source: "company",
      status: "replaceable",
    },
  },
  {
    id: "proj-08",
    number: "08",
    client: "M/S. Reegal Resources Ltd.",
    location: "Galgalia, Bihar",
    category: "Agro Processing Infrastructure",
    image: {
      id: "p8",
      url: "/images/projects/proj_08_galgalia.jpeg",
      alt: "Industrial pipe rack and horizontal vessel installation at Galgalia",
      category: "Pipe rack & vessels",
      source: "company",
      status: "replaceable",
    },
  },
  {
    id: "proj-09",
    number: "09",
    client: "M/S. Gujarat Ambuja Exports Ltd.",
    location: "Chalisgaon, Maharashtra",
    category: "Starch & Derivative Plant",
    image: {
      id: "p9",
      url: "/images/projects/proj_09_chalisgaon.jpeg",
      alt: "Precision stainless steel pipe rack and manifold installation at Chalisgaon",
      category: "Stainless piping",
      source: "company",
      status: "replaceable",
    },
  },
  {
    id: "proj-10",
    number: "10",
    client: "M/S. Millenium Starch India Pvt Ltd.",
    location: "Athani, Karnataka",
    category: "Starch Processing Facility",
    image: {
      id: "p10",
      url: "/images/projects/proj_10_athani.jpeg",
      alt: "Large industrial starch storage silos at Athani",
      category: "Grain silos",
      source: "company",
      status: "replaceable",
    },
  },
  {
    id: "proj-11",
    number: "11",
    client: "M/S. Everest Starch India Pvt. Ltd.",
    location: "Chotila, Gujarat",
    category: "Industrial Starch Execution",
    image: {
      id: "p11",
      url: "/images/projects/proj_11_chotila.jpeg",
      alt: "Centrifuge battery and stainless pump manifold at Chotila",
      category: "Process equipment",
      source: "company",
      status: "replaceable",
    },
  },
  {
    id: "proj-12",
    number: "12",
    client: "M/S. Himalayan Foods & Derivatives Pvt. Ltd.",
    location: "Chhindwara, Madhya Pradesh",
    category: "Food & Starch Processing",
    image: {
      id: "p12",
      url: "/images/projects/proj_12_himalayan.jpeg",
      alt: "Industrial agitated mixing vessels at Chhindwara",
      category: "Process tanks",
      source: "company",
      status: "replaceable",
    },
  },
  {
    id: "proj-13",
    number: "13",
    client: "M/S. Sanstar Ltd.",
    location: "Shirpur, Maharashtra",
    category: "Starch & Derivative Plant",
    image: {
      id: "p13",
      url: "/images/projects/proj_13_sanstar.jpeg",
      alt: "Stainless steel cooling coil fabrication and vessel assembly at Shirpur",
      category: "Stainless coil fabrication",
      source: "company",
      status: "replaceable",
    },
  },
];

export const CURRENT_PROJECTS = [
  {
    id: "curr-01",
    number: "01",
    client: "M/S. Gujrat Ambuja Exports Ltd.",
    location: "Chalisgaon, Maharashtra",
    category: "Starch & Derivative Plant Erection",
    image: "/images/projects/proj_09_chalisgaon.jpeg",
  },
  {
    id: "curr-02",
    number: "02",
    client: "M/S. Reegal Resources Ltd.",
    location: "Galgalia, Bihar",
    category: "Agro & Starch Infrastructure",
    image: "/images/projects/proj_08_galgalia.jpeg",
  },
  {
    id: "curr-03",
    number: "03",
    client: "M/S. Sanstar Ltd.",
    location: "Shirpur, Maharashtra",
    category: "Industrial Plant Fabrication & Erection",
    image: "/images/projects/proj_13_sanstar.jpeg",
  },
  {
    id: "curr-04",
    number: "04",
    client: "M/S. Himalayan Foods & Derivatives Pvt. Ltd.",
    location: "Chhindwara, Madhya Pradesh",
    category: "Food & Starch Facility Erection",
    image: "/images/projects/proj_12_himalayan.jpeg",
  },
];

export const INDUSTRIES_LIST: IndustryItem[] = [
  {
    id: "starch-manufacturing",
    number: "01",
    title: "STARCH MANUFACTURING",
    subtitle: "Turnkey Starch & Derivative Plants",
    description: "Specialized engineering, fabrication, and turnkey erection for maize/corn starch, wheat starch, and modified starch derivative process plants.",
    image: IMAGES.indStarch,
    capabilities: ["Starch & Grain Silo Batteries", "Industrial Centrifuges", "Cyclone Separators", "High-Pressure Process Piping"],
    clients: "M/S. Gujrat Ambuja Exports, Everest Starch, Millenium Starch, Sanstar Ltd.",
  },
  {
    id: "food-industries",
    number: "02",
    title: "FOOD & AGRO PROCESSING",
    subtitle: "Sanitary Stainless Steel Facilities",
    description: "Precision SS304/SS316 sanitary fabrication for food-grade processing lines, liquid glucose, mixing vessels, and agro-commodity refining facilities.",
    image: IMAGES.indFood,
    capabilities: ["SS Jacketed & Limpet Vessels", "U-Trough Mixers & Cookers", "Sanitary Valving Manifolds", "Fluid Bed & Spray Dryers"],
    clients: "M/S. Himalayan Foods, Sharda Starch, Reegal Resources, Tirupati Starch",
  },
  {
    id: "process-plants",
    number: "03",
    title: "PROCESS & CHEMICAL PLANTS",
    subtitle: "Heavy Chemical & Mineral Refining",
    description: "Integrated mechanical engineering for bulk liquid storage batteries, mineral processing units, distillation columns, and multi-tier structural pipe racks.",
    image: IMAGES.indProcess,
    capabilities: ["Bulk Storage Tank Batteries", "Process Piping Manifolds", "Reaction Receivers & Columns", "Multi-Tier Pipe Bridges"],
    clients: "M/S. Ashapura Volclay Ltd., Riddhi Siddhi Gluco Biols, Sanstar Ltd.",
  },
  {
    id: "industrial-equipment",
    number: "04",
    title: "HEAVY EQUIPMENT & ERECTION",
    subtitle: "Heavy Mechanical & Crane Rigging",
    description: "Precision installation, dynamic balancing, and structural rigging for heavy rotary calciners, rotary drums, conical vessel bottoms, and plant structures.",
    image: IMAGES.indEquip,
    capabilities: ["Heavy Rotary Kilns & Calciners", "Conical Vessel Bottom Erection", "Precision Heavy Crane Rigging", "Overhead Structural Galleries"],
    clients: "M/S. Ashapura Volclay, Riddhi Siddhi Gokak, Riddhi Siddhi Pantnagar",
  },
];

export const WHY_US_CARDS = [
  {
    number: "01",
    title: "ENGINEERING",
    subtitle: "Process & Mechanical Design",
    description: "Multi-discipline engineering, nozzle loading verification, GA equipment drafting, and custom layout planning tailored to complex starch and process plant constraints.",
    highlights: ["2D/3D CAD & Equipment GA", "Process Flow Integration", "Structural Stress Verification"],
    metric: "20+ Years Know-How",
  },
  {
    number: "02",
    title: "FABRICATION",
    subtitle: "Certified Shop & Field Work",
    description: "Heavy plate rolling, dished head forming, precision machining, and ASME IX compliant TIG/MIG welding across food-grade SS304/SS316 and carbon steel.",
    highlights: ["Plate Rolling up to 35mm", "Sanitary SS Mirror Finish", "100% Radiography & DPT"],
    metric: "Zero-Defect Quality",
  },
  {
    number: "03",
    title: "EXECUTION",
    subtitle: "Rigging & Laser Alignment",
    description: "Deployment of heavy-lift hydraulic cranes, skilled rigging crews, and laser alignment systems to safely erect massive rotary drums, towers, and pipe bridges.",
    highlights: ["High-Altitude Heavy Rigging", "Precision Dial Alignment", "Comprehensive Site Safety"],
    metric: "Accident-Free Sites",
  },
  {
    number: "04",
    title: "TURNKEY APPROACH",
    subtitle: "Single-Point Accountability",
    description: "End-to-end execution from raw plate procurement through shop fabrication, site assembly, interconnecting piping, hydrostatic testing, and plant commissioning.",
    highlights: ["Design to Commissioning", "Strict Milestone Tracking", "Full Project Handover"],
    metric: "On-Time Completion",
  },
];
