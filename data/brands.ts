// data/brands.ts

export type Brand = {
  name: string;
  slug: string;
  region: string;
  focus: string;
  description: string;
};

export const brands: Brand[] = [
  {
    name: "Grainger",
    slug: "grainger",
    region: "USA",
    focus: "MRO, tools, safety, facility supplies",
    description:
      "SCM Supply FZCO consolidates and ships Grainger catalog items from USA into UAE & GCC, supporting tools, MRO, HVAC, electrical, plumbing and facility products.",
  },
  {
    name: "McMaster-Carr",
    slug: "mcmaster-carr",
    region: "USA",
    focus: "Hardware, fasteners, motion components & tools",
    description:
      "Engineering teams rely on McMaster-Carr for hardware, fasteners, linear motion, tools and more. SCM Supply FZCO sources, consolidates and exports to UAE, Middle East & Africa.",
  },
  {
    name: "Uline",
    slug: "uline",
    region: "USA",
    focus: "Packaging, shipping, warehouse & material handling",
    description:
      "For packaging, warehouse and shipping supplies, SCM Supply FZCO brings Uline products into UAE & GCC, ideal for logistics, warehousing and distribution operations.",
  },
];

export const industrialBrandNames: string[] = [
  "3M",
  "ABB",
  "Aeroquip",
  "Apollo Valves",
  "Ashcroft",
  "Barksdale",
  "Brady",
  "Cameron",
  "CoxReels",
  "DeWalt",
  "DuPont",
  "Eaton",
  "Weatherhead",
  "Fluke",
  "Gates",
  "GE Current",
  "Graco",
  "Honeywell",
  "Hubbell",
  "Hydac",
  "Irwin Tools",
  "Klein Tools",
  "Little Giant",
  "Loctite",
  "Makita",
  "Sun Hydraulics",
  "Master Lock",
  "McMaster-Carr",
  "MCR Safety",
  "Meco",
  "Midwest",
  "Milwaukee",
  "Noshok",
  "Parker",
  "Post-It",
  "Proto",
  "Ridgid",
  "Rosemount",
  "Rubbermaid",
  "Schneider Electric",
  "SKF",
  "Square D",
  "Stanley",
  "Swagelok",
  "Tekton",
  "Tital Flow Controls",
  "WD-40",
  "WIKA",
  "WPI Wellkin",
  "Wright Tools",
];
