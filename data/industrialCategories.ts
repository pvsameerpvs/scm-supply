// data/industrialCategories.ts

export type ItemGroup = {
  label: string;
  items: string[];
};

export type Category = {
  id: string;
  number: string;
  title: string;
  shortTag?: string;
  description: string;
  image: string;
  groups: ItemGroup[];
};

export const industrialCategories: Category[] = [
  {
    id: "motion-transfer",
    number: "1",
    title: "Motion Transfer, Power Transmission & Drive Components",
    shortTag: "Power Transmission",
    image: "/motion transfer, power transmission & drive components.jpg",
    description:
      "Pulleys, chains, sprockets, gearboxes and gearmotors for reliable motion transfer and drive control.",
    groups: [
      {
        label: "Drive Components & Pulleys",
        items: [
          "Industrial Pulleys (V-Belt, Timing, Flat, Round Belt)",
          "Idler Pulleys & Tensioning Pulleys",
          "Sprockets & Chain Wheels",
          "Drive Shafts, Key Stock & Shaft Hardware",
        ],
      },
      {
        label: "Chains & Conveyor Systems",
        items: [
          "Industrial Roller Chains (Standard, Heavy-Duty, Dry-Running, Low-Maintenance)",
          "Leaf Chains & Hollow-Pin Chains",
          "Quick-Connect Chains & Attachment Chains",
          "Clog-Resistant & Flexible Conveyor Chains",
          "Chain Alignment Tools & Chain Wear Gauges",
          "Chain Breakers, Chain Pullers & Spring Clip Tools",
        ],
      },
      {
        label: "Gearboxes, Gear Drives & Limiters",
        items: [
          "Gearboxes & Speed Reducers",
          "Worm Gears & Gear Drives",
          "Electric Gearmotors / Stepper Gearmotors / Air-Powered Gearmotors",
          "Speed Limiters & Torque Limiters",
        ],
      },
    ],
  },
  {
    id: "bearings-linear-motion",
    number: "2",
    title: "Bearings, Shafts & Linear Motion Systems",
    shortTag: "Bearings & Linear Motion",
    image: "/Bearings, Shafts & Linear Motion Systems.JPG",
    description:
      "Precision bearings, shafts and linear systems for smooth, accurate machine movement and positioning.",
    groups: [
      {
        label: "Rotary Bearings & Housings",
        items: [
          "Ball Bearings, Roller Bearings, Mounted Bearings",
          "Sleeve Bearings & Flanged Bushings",
          "Pivot Bearings & Thrust Bearings",
          "Bearing Adapter Sleeves & Locking Collars",
          "Bearing Housings & Pillow Blocks",
        ],
      },
      {
        label: "Linear Motion Components",
        items: [
          "Linear Bearings & Linear Guides",
          "Ball Splines & Linear Slides",
          "Precision Linear Shafts / Connecting Rods",
          "Machinable Shaft Ends & Bore Reducers",
          "Lead Screw Collars & Rod End Bearings",
        ],
      },
      {
        label: "Shaft Hardware & Cylinders",
        items: [
          "Shaft Collars, Shaft Nuts & Shaft Adapters",
          "Hydraulic Cylinders & Cylinder Mounts",
        ],
      },
    ],
  },
  {
    id: "pipe-tubing-framing",
    number: "3",
    title: "Pipe, Tubing, Framing & Structural Mounting Hardware",
    shortTag: "Pipe & Structural",
    image: "/Pipe, Tubing, Framing & Structural Mounting Hardware.jpg",
    description:
      "Pipe supports, clamps, framing connectors and tooling for structural and routing installations.",
    groups: [
      {
        label: "Pipe Supports & Clamps",
        items: [
          "Pipe Hangers, Pipe Supports & Pipe Clamps",
          "Routing Clamps & Strut-Mount Clamps",
          "U-Bolts (Square, Cushioned, Non-Conductive, Vibration-Damping)",
          "U-Bolt Plates & Pipe Brackets",
          "Riser Clamps, Beam Clamps & Seismic Bracing",
          "Threaded Rod Mounts & Hanger Brackets",
          "Loop Clamps, Pipe Cradles, Standoff Clamps",
        ],
      },
      {
        label: "Framing & Structural Fittings",
        items: [
          "Scaffold Clamps & Structural Tube Joints",
          "Slip-On Framing Connectors & Structural Fittings",
        ],
      },
      {
        label: "Tube Forming & Finishing",
        items: [
          "Tube Benders, Pipe Benders, Conduit Benders",
          "Tube Straighteners & Tube Guides",
          "Weather-Stripping & Joint Covers",
        ],
      },
    ],
  },
  {
    id: "industrial-fasteners",
    number: "4",
    title: "Industrial Fasteners, Anchors & Hardware",
    shortTag: "Fasteners & Anchors",
    image: "/Industrial Fasteners, Anchors & Hardware.jpg",
    description:
      "Complete fastening, anchoring and adjustment hardware for industrial fabrication and field use.",
    groups: [
      {
        label: "4A. Nuts & Specialty Fasteners",
        items: [
          "Hex Nuts",
          "Lock Nuts",
          "Flange Nuts",
          "Cap / Acorn Nuts",
          "Square Nuts",
          "Panel Nuts",
          "Socket Nuts",
          "Sealing Nuts",
          "Slotted Round Nuts",
          "Split Nuts",
          "Push-Button Nuts",
          "Lug Nuts",
          "Weld Nuts",
          "Rivet Nuts",
          "Press-Fit Nuts",
          "Push Nuts",
          "Tamper-Resistant Nuts",
          "Adhesive-Mount Nuts",
          "Snap-In Nuts",
          "Rivet-Mount Nuts",
          "Dowel Nuts",
          "Tube-Connecting Nuts",
          "Binding Barrels",
        ],
      },
      {
        label: "4B. Thread Inserts & Repair Hardware",
        items: [
          "Threaded Inserts (Helical, Slotted, Key-Locking)",
          "Press-Fit Inserts & Heat-Set Inserts",
          "Insert Installation Tools",
          "Insert Removal Tools",
        ],
      },
      {
        label: "4C. Washers, Shims & Spacers",
        items: [
          "Flat Washers",
          "Lock Washers",
          "Sealing Washers",
          "Cushioning Washers",
          "Leveling Washers",
          "Insulating Washers",
          "Finishing Washers",
          "Cross-Bracing Washers",
          "Spacers",
          "Standoffs",
          "Shim Stock",
        ],
      },
      {
        label: "4D. Concrete, Drywall & Masonry Anchors",
        items: [
          "Wedge Anchors",
          "Concrete Anchors",
          "Vibration-Resistant Anchors",
          "High-Strength Adhesive Anchors",
          "Removable Bolt Anchors",
          "Hook Anchors",
          "Drive Rivet Anchors",
          "Light-Duty Rivet Anchors",
          "Quick-Twist Anchors",
          "Drywall Anchors (Standard, Toggle, Hammer-In, Reusable)",
          "Stud-Style Drilling Anchors",
          "Toggle Bolt Assortments",
          "Anchor Installation Tools",
        ],
      },
    ],
  },
  {
    id: "fluid-air-hydraulic",
    number: "5",
    title: "Industrial Fluid, Air & Hydraulic Components",
    shortTag: "Fluid & Air Systems",
    image: "/Industrial Hardware & Miscellaneous Components.jpg",
    description:
      "Hydraulic, pneumatic and process fluid components for transfer, control and measurement.",
    groups: [
      {
        label: "Fluid & Air Transfer",
        items: [
          "Hydraulic Hoses & Fittings",
          "Pneumatic Hoses",
          "Quick-Connect Couplers",
          "Tube Fittings (Compression, Push-To-Connect, Flare)",
          "Pipe & Tube Repair Clamps",
          "Hose Ferrules",
          "Hose Nuts",
          "Hose Nozzles",
          "Duct Hoses & Flexible Ducting",
        ],
      },
      {
        label: "Flow Control & Distribution",
        items: [
          "Ball Valves",
          "On-Off Valves",
          "Control Valves",
          "Diverting Valves",
          "Manifolds",
          "Air Nozzles",
          "Air Chucks",
          "Impact Absorbers",
          "Hose Kink Absorbers",
        ],
      },
      {
        label: "Pressure & Temperature Control",
        items: [
          "Pressure Gauges",
          "Vacuum Gauges",
          "Flowmeters",
          "Sight Glasses",
          "Thermometers",
          "Thermocouples",
          "RTDs",
          "Regulators",
          "Transducers",
          "Controllers",
        ],
      },
    ],
  },
  {
    id: "cable-wire-routing",
    number: "6",
    title: "Cable, Wire & Routing Accessories",
    shortTag: "Cable Management",
    image: "/Cable, Wire & Routing Accessories.jpg",
    description:
      "Cable ties, holders, straps and tensioning hardware for clean, secure routing and bundling.",
    groups: [
      {
        label: "Cable Ties & Mounts",
        items: [
          "Cable Ties (Standard & Heavy-Duty)",
          "Releasable Cable Ties",
          "Cable Tie Mounts",
          "Cable Tie Cushions",
          "Stainless Steel Cable Ties",
          "Temperature Control Cable Ties",
        ],
      },
      {
        label: "Cable & Strap Management",
        items: [
          "Cable Holders",
          "Hook & Loop Straps",
          "Cinching Straps",
          "Twist Ties",
          "Cable Tensioners",
          "Cable Bundling Tools",
        ],
      },
      {
        label: "Elastic & Bungee Accessories",
        items: [
          "Bungee Cords",
          "Bungee Cord Locks",
          "Bungee Cord Hooks",
          "Rubber Bands",
        ],
      },
    ],
  },
  {
    id: "pullers-separators-tools",
    number: "7",
    title: "Pullers, Separators & Mechanical Service Tools",
    shortTag: "Service Tools",
    image: "/Pullers, Separators & Mechanical Service Tools.jpg",
    description:
      "Professional pullers, separators and service tools for safe disassembly and maintenance.",
    groups: [
      {
        label: "Pullers & Puller Kits",
        items: [
          "External-Grip Pullers",
          "Internal-Grip Pullers",
          "Reversible-Jaw Pullers",
          "Hydraulic Pullers",
          "Face-Grip Pullers",
          "Adjustable Puller Sets",
          "Expanding-Collar Pullers",
          "Puller Kits with Storage Cases",
          "Pitman Arm Pullers",
        ],
      },
      {
        label: "Separators, Protectors & Accessories",
        items: [
          "Bearing Separators",
          "Shaft Protector Sleeves",
          "V-Belt Pulley Separators",
          "Hub & Fan Blade Pullers",
          "Forcing Screws",
          "Thread Adapters",
        ],
      },
    ],
  },
  {
    id: "socket-drive-assembly",
    number: "8",
    title: "Socket, Drive & Assembly Tools",
    shortTag: "Assembly Tools",
    image: "/Socket, Drive & Assembly Tools.jpg",
    description:
      "Sockets, wrenches and assembly tools for torque-controlled fastening and service work.",
    groups: [
      {
        label: "Sockets & Drive Accessories",
        items: [
          "Sockets",
          "Bit Sockets",
          "Socket Adapters",
          "Socket Extensions",
        ],
      },
      {
        label: "Wrenches & Extraction",
        items: [
          "Ratchet Wrenches",
          "Torque Wrenches",
          "Screw Extractors",
          "Joint Covers",
        ],
      },
    ],
  },
  {
    id: "conveyor-roller-material",
    number: "9",
    title: "Conveyor, Roller & Material Movement Components",
    shortTag: "Conveyor Components",
    image: "/Conveyor, Roller & Material Movement Components.jpg",
    description:
      "Rollers, belts and drive components for conveyor and material movement systems.",
    groups: [
      {
        label: "Conveyor Rollers & Belts",
        items: [
          "Conveyor Rollers",
          "Conveyor Belts",
          "Belt Pulleys",
          "Idler Rollers",
          "Conveyor Brakes",
        ],
      },
      {
        label: "Roller Hardware & Guards",
        items: [
          "Pulley Coatings / Lagging",
          "Roller Bearings",
          "Chain Tensioners",
          "Belt & Chain Guards",
          "Track Rollers",
          "Drive Rollers",
          "Turntables",
        ],
      },
    ],
  },
  {
    id: "threaded-rods-studs",
    number: "10",
    title: "Threaded Rods, Studs, Bolts & Linear Hardware",
    shortTag: "Threaded Hardware",
    image: "/Threaded Rods, Studs, Bolts & Linear Hardware.jpg",
    description:
      "Threaded rods, studs and linear fastening hardware for structural and equipment builds.",
    groups: [
      {
        label: "Threaded Rods & Mounts",
        items: [
          "Threaded Rods (Standard, Left-Hand, Clean-Thread)",
          "Threaded Rod Sets & Assortments",
          "Threaded Rod Mounts",
        ],
      },
      {
        label: "Studs, Bolts & Linear Parts",
        items: [
          "Studs (Setup Studs, Single-End Studs)",
          "T-Bolts",
          "Hanger Bolts",
          "Linear Shafts",
          "Pins & Connecting Rods",
          "Coupling Nuts",
        ],
      },
    ],
  },
  {
    id: "industrial-misc",
    number: "11",
    title: "Industrial Hardware & Miscellaneous Components",
    shortTag: "Industrial Hardware",
    image: "/Industrial Hardware & Miscellaneous Components.jpg",
    description:
      "Specialty hardware, lifting points and routing accessories for equipment and transport.",
    groups: [
      {
        label: "Bushings, Joints & Clamping",
        items: [
          "Drill Bushings",
          "Pipe Bushings",
          "Swivel Joints",
          "Clamping Screws",
          "Lamp Pipe & Lamp Hardware",
          "Routing Rings",
        ],
      },
      {
        label: "Rope, Webbing & Tie-Down Hardware",
        items: [
          "Rope Cleats",
          "Tie-Down Rings",
          "Webbing Guides",
          "Rod End Inserts",
          "Eyebolts (Lifting / Non-Lifting)",
          "Eye Nuts",
          "Carabiners",
          "Rope Guides",
          "E-Track D-Rings",
        ],
      },
      {
        label: "Brackets & Mounting",
        items: ["Brackets"],
      },
    ],
  },
];
