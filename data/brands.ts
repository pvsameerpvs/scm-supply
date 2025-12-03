// data/brands.ts

export type Brand = {
  name: string;
  slug: string;
  region: string;
  focus: string;
  description: string;
};

export type IndustrialBrand = {
  name: string;
  slug: string;
  /**
   * Optional logo path from /public
   * e.g. "/logos/3m.png"
   */
  logo?: string;
};

// export const brands: Brand[] = [
//   {
//     name: "Grainger",
//     slug: "grainger",
//     region: "USA",
//     focus: "MRO, tools, safety, facility supplies",
//     description:
//       "SCM Supply FZCO consolidates and ships Grainger catalog items from USA into UAE & GCC, supporting tools, MRO, HVAC, electrical, plumbing and facility products.",
//   },
//   {
//     name: "McMaster-Carr",
//     slug: "mcmaster-carr",
//     region: "USA",
//     focus: "Hardware, fasteners, motion components & tools",
//     description:
//       "Engineering teams rely on McMaster-Carr for hardware, fasteners, linear motion, tools and more. SCM Supply FZCO sources, consolidates and exports to UAE, Middle East & Africa.",
//   },
//   {
//     name: "Uline",
//     slug: "uline",
//     region: "USA",
//     focus: "Packaging, shipping, warehouse & material handling",
//     description:
//       "For packaging, warehouse and shipping supplies, SCM Supply FZCO brings Uline products into UAE & GCC, ideal for logistics, warehousing and distribution operations.",
//   },
// ];

export const industrialBrands: IndustrialBrand[] = [

  
  
  { name: "3M", slug: "3m", logo: "/3M-Logo.png" },
  { name: "ABB", slug: "abb", logo: "/ABB-logo.png" },
  { name: "Aeroquip", slug: "aeroquip", logo: "/Aeroquip-Danfoss Logo.png" },
  { name: "Apollo Valves", slug: "apollo-valves", logo: "/apollo-valves.png" },
  { name: "Ashcroft", slug: "ashcroft", logo: "/Ashcroft-Pressure-Gauges Logo.png" },
  { name: "Barksdale", slug: "barksdale", logo: "/barksdale-Logo.png" },
  { name: "Brady", slug: "brady", logo: "/brady.png" },
  { name: "Cameron", slug: "cameron", logo: "/Cameron-Logo.png" },
  { name: "CoxReels", slug: "coxreels", logo: "/CoxReels - Logo.png" },
  { name: "DeWalt", slug: "dewalt", logo: "/DeWalt-Logo.png" },
   { name: "Danfoss", slug: "danfoss", logo: "/Danfoss.jpeg" },
  { name: "DuPont", slug: "dupont", logo: "/DuPont_logo.png" },
  { name: "Eaton", slug: "eaton", logo: "/Eaton-Logo.png" },
   { name: "Grainger", slug: "grainger", logo: "/grainger.png" },
  { name: "Weatherhead", slug: "weatherhead", logo: "/weatherhead.png" },
  { name: "Fluke", slug: "fluke", logo: "/Fluke_Corporation_logo.png" },
  { name: "Gates", slug: "gates", logo: "/Gates-Logo.png" },
  { name: "GE Current", slug: "ge-current", logo: "/current-ge.png" },
  { name: "Graco", slug: "graco", logo: "/Graco_logo.png" },
  { name: "Honeywell", slug: "honeywell", logo: "/Honeywell-Logo.png" },
  { name: "Hubbell", slug: "hubbell", logo: "/Hubbell.png" },
  { name: "Hydac", slug: "hydac", logo: "/HYDAC_Logo_NOVO_(1).png" },
  { name: "Irwin Tools", slug: "irwin-tools", logo: "/irwin Logo.jpg" },
  { name: "Klein Tools", slug: "klein-tools", logo: "/kleintool.png" },
  { name: "Little Giant", slug: "little-giant", logo: "/little.png" },
  { name: "Loctite", slug: "loctite", logo: "/Loctite-Logo.png" },
  { name: "Makita", slug: "makita", logo: "/Makita-logo.png" },
  { name: "Sun Hydraulics", slug: "sun-hydraulics", logo: "/Sun-Hydraulics-Logo-800x492.png" },
  { name: "Master Lock", slug: "master-lock", logo: "/Master-Lock-logo.png" },
  { name: "McMaster-Carr", slug: "mcmaster-carr", logo: "/McMaster-Carr.png" },
  { name: "MCR Safety", slug: "mcr-safety", logo: "/MCR Safety Logo.png" },
  { name: "McMaster-Carr", slug: "mcmaster-carr", logo: "/McMaster-Carr.png" },
  { name: "Meco", slug: "meco", logo: "/meco.png" },
  { name: "Midwest", slug: "midwest", logo: "/midwest.png" },
  { name: "Milwaukee", slug: "milwaukee", logo: "/Milwaukee_Logo.png" },
  { name: "Noshok", slug: "noshok", logo: "/noshok.png" },
  { name: "Parker", slug: "parker", logo: "/Parker_Hannifin.png" },
  { name: "Post-It", slug: "post-it", logo: "/post-it.png" },
  { name: "Proto", slug: "proto", logo: "/Proto_Tools_logo.png" },
  { name: "Ridgid", slug: "ridgid", logo: "/RIDGID_logo.png" },
  { name: "Rosemount", slug: "rosemount", logo: "/rosemount.png" },
  { name: "Rubbermaid", slug: "rubbermaid", logo: "/Rubbermaid.png" },
  {
    name: "Schneider Electric",
    slug: "schneider-electric",
    logo: "/Schneider_Electric Logo.png",
  },
  { name: "SKF", slug: "skf", logo: "/SKF Logo.png" },
  { name: "Square D", slug: "square-d", logo: "/square-d-logo.png" },
  { name: "Stanley", slug: "stanley", logo: "/Stanley_Hand_Tools_logo.png" },
  { name: "Swagelok", slug: "swagelok", logo: "/swagelok-logo.png" },
  { name: "Tekton", slug: "tekton", logo: "/Tekton Logo.png" },
   { name: "Uline", slug: "uline", logo: "/uline.png" },
  {
    name: "Tital Flow Controls",
    slug: "tital-flow-controls",
    logo: "/titan.png",
  },
  { name: "WD-40", slug: "wd-40", logo: "/WD40 Logo.png" },
  { name: "WIKA", slug: "wika", logo: "/WIKA-Logo.png" },
  { name: "WPI Wellkin", slug: "wpi-wellkin", logo: "/wpi-wellkin.png" },
  { name: "Wright Tools", slug: "wright-tools", logo: "/Wright Tools.png" },
];
