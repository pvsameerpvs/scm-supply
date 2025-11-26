export type ProductCategory = {
  slug: string;
  name: string;
  shortTagline: string;
  seoTitle: string;
  seoDescription: string;
  heroNote?: string;
  images: string[];
  coverProductImage?:string;
  bullets: string[];
};

export const productCategories: ProductCategory[] = [
  {
    slug: "abrasives-grinding-surface-preparation",
    name: "Abrasives, Grinding & Surface Preparation",
    shortTagline:
      "Cutting wheels, grinding discs, sanding, polishing & finishing systems for metal, steel, aluminum, concrete & more.",
    seoTitle:
      "Abrasives, Grinding & Surface Preparation Supplier in UAE | Cutting Wheels, Grinding Discs, Sanding & Polishing Tools",
    seoDescription:
      "SCM Supply FZCO supplies cutting wheels, grinding discs, sanding belts, flap discs, polishing tools & surface prep equipment for metal fabrication, welding, construction & MRO across UAE & GCC.",
    heroNote:
      "High-performance abrasives for workshops, fabrication shops, construction, shipyards and maintenance teams – delivered across UAE & GCC.",
    images: [
      "/images/products/11.jpeg",
      "/images/products/12.jpeg",
      "/images/products/13.jpeg"
    ],
    coverProductImage:"/images/products/11.jpeg",
    bullets: [
      "Cutting wheels & cut-off discs for metal, stainless steel, aluminum and concrete.",
      "Grinding wheels, depressed-center discs, bench-grinder wheels and stone/concrete cups.",
      "Sanding discs, belts, sheets, flap wheels, fiber discs and non-woven surface conditioning pads.",
      "Polishing, buffing & finishing tools, compounds, wheels and multi-step finishing kits.",
      "Deburring wheels, carbide burrs, mounted points, wire brushes and edge-prep tools.",
      "Diamond blades, diamond grinding cups & specialty abrasives for high-pressure applications.",
      "Blasting media, blasting nozzles and portable/cabinet blasting accessories for rust & coating removal."
    ]
  },
  {
    slug: "adhesives-sealants-bonding-solutions",
    name: "Adhesives, Sealants & Bonding Solutions",
    shortTagline:
      "Structural adhesives, epoxies, sealants, tapes & surface prep products for industrial bonding & repair.",
    seoTitle:
      "Adhesives, Sealants & Bonding Solutions Supplier in UAE | Epoxies, Industrial Adhesives, Sealants & Tapes",
    seoDescription:
      "Industrial adhesives, epoxies, silicones, sealants, construction chemicals and tapes for metal, concrete, glass, composites and general maintenance applications across UAE & GCC.",
    images: [
      "/images/products/adhesives-1.jpg",
      "/images/products/adhesives-2.jpg",
      "/images/products/adhesives-3.jpg"
    ],
    bullets: [
      "Epoxy adhesives, structural bonding systems and metal repair compounds.",
      "Silicone, polyurethane and hybrid sealants for construction, HVAC, glazing and automotive.",
      "Threadlockers, retaining compounds, gasketing sealants and pipe sealants.",
      "Double-sided tapes, VHB tapes, duct tapes, masking tapes and specialty bonding tapes.",
      "Surface cleaners, primers and surface-activation products for optimal adhesion.",
      "Foam sealants, gap fillers and weatherproofing sealant systems."
    ]
  },
  {
    slug: "cleaning-janitorial-maintenance-chemicals",
    name: "Cleaning, Janitorial & Maintenance Chemicals",
    shortTagline:
      "Industrial cleaning chemicals, janitorial supplies & maintenance products for facilities and workshops.",
    seoTitle:
      "Cleaning, Janitorial & Maintenance Chemicals Supplier in UAE | Industrial Degreasers, Cleaners & Sanitation",
    seoDescription:
      "Degreasers, detergents, floor cleaners, disinfectants and janitorial supplies for factories, workshops, commercial buildings and food service facilities in UAE & GCC.",
    images: [
      "/images/products/cleaning-1.jpg",
      "/images/products/cleaning-2.jpg",
      "/images/products/cleaning-3.jpg"
    ],
    bullets: [
      "Heavy-duty degreasers, solvent cleaners and parts-washing chemicals.",
      "Multi-surface cleaners, glass cleaners and restroom hygiene products.",
      "Floor cleaners, floor finishes and industrial floor-care solutions.",
      "Disinfectants, sanitizers and food-safe cleaning chemicals.",
      "Janitorial tools including mops, buckets, carts, bins and dispensers.",
      "Aerosol maintenance sprays, lubricants, penetrants and corrosion inhibitors."
    ]
  },
  {
    slug: "compressed-air-pneumatics-vacuum-systems",
    name: "Compressed Air, Pneumatics & Vacuum Systems",
    shortTagline:
      "Compressors, dryers, air treatment, pneumatic tools & vacuum solutions for industrial applications.",
    seoTitle:
      "Compressed Air, Pneumatics & Vacuum Systems Supplier in UAE | Compressors, Dryers & Air-Line Components",
    seoDescription:
      "Supply of air compressors, dryers, FRLs, pneumatic valves, fittings, hoses and vacuum components for factories, workshops and process plants across UAE & GCC.",
    images: [
      "/images/products/compressed-air-1.jpg",
      "/images/products/compressed-air-2.jpg",
      "/images/products/compressed-air-3.jpg"
    ],
    bullets: [
      "Rotary screw, piston and portable air compressors.",
      "Air dryers, filters, receivers and condensate management components.",
      "FRL units, regulators, lubricators and air preparation systems.",
      "Pneumatic cylinders, valves, manifolds and fittings.",
      "Air hoses, quick couplers, blow guns and hose reels.",
      "Vacuum pumps, ejectors, cups and vacuum handling components."
    ]
  },
  {
    slug: "electrical-wiring-industrial-automation",
    name: "Electrical, Wiring & Industrial Automation",
    shortTagline:
      "Low-voltage electrical components, wiring accessories, control gear & automation hardware.",
    seoTitle:
      "Electrical, Wiring & Industrial Automation Supplier in UAE | Control Panels, Cables & Components",
    seoDescription:
      "Switchgear, breakers, contactors, sensors, cables, terminals and automation components for panels, machinery and building services in UAE & GCC.",
    images: [
      "/images/products/electrical-1.jpg",
      "/images/products/electrical-2.jpg",
      "/images/products/electrical-3.jpg"
    ],
    bullets: [
      "MCBs, MCCBs, contactors, overload relays and motor protection devices.",
      "Control relays, timers, power supplies and interface modules.",
      "Pushbuttons, selector switches, pilot lights and HMI devices.",
      "Industrial cables, wires, glands, lugs, terminals and trunking.",
      "Sensors, proximity switches, encoders and photoelectric devices.",
      "DIN-rail accessories, terminal blocks and panel-building consumables."
    ]
  },
  {
    slug: "food-service-prep-hospitality-products",
    name: "Food Service, Prep & Hospitality Products",
    shortTagline:
      "Back-of-house food prep tools, smallwares, storage and light equipment for kitchens & catering.",
    seoTitle:
      "Food Service, Prep & Hospitality Products Supplier in UAE | Kitchen Smallwares, Storage & Equipment",
    seoDescription:
      "Commercial kitchen utensils, prep tools, cookware, storage containers and light food-service equipment for hotels, restaurants and catering operations in UAE & GCC.",
    images: [
      "/images/products/food-service-1.jpg",
      "/images/products/food-service-2.jpg",
      "/images/products/food-service-3.jpg"
    ],
    bullets: [
      "Food prep tools, knives, cutting boards and utensil sets.",
      "Cookware, pans, GN containers and baking trays.",
      "Food storage containers, shelving and ingredient bins.",
      "Serving trays, buffet-ware and front-of-house accessories.",
      "Cleaning and sanitation items for food-contact areas.",
      "Light equipment support including mixers, slicers and blenders (on request)."
    ]
  },
  {
    slug: "grainger-product-sourcing",
    name: "Grainger Products",
    shortTagline:
      "Direct sourcing of Grainger MRO, safety, tools & facility products into UAE & GCC.",
    seoTitle:
      "Grainger Product Supplier in UAE | Grainger MRO, Tools, Safety & Facility Products",
    seoDescription:
      "SCM Supply FZCO sources and consolidates Grainger products from USA for customers in UAE, Middle East, Africa and Asia, covering tools, MRO, safety, HVAC, plumbing and electrical items.",
    images: [
      "/images/products/grainger-1.jpg",
      "/images/products/grainger-2.jpg",
      "/images/products/grainger-3.jpg"
    ],
    bullets: [
      "End-to-end sourcing of Grainger catalog items from USA.",
      "Consolidation, export packing and international freight to UAE & GCC.",
      "Support for urgent, critical and hard-to-find MRO items.",
      "Cross-reference assistance for equivalent brands and alternates.",
      "Single-source procurement for multi-line Grainger RFQs."
    ]
  },
  {
    slug: "hvac-air-movement-temperature-control",
    name: "HVAC, Air Movement & Temperature Control",
    shortTagline:
      "HVAC components, air movement equipment and temperature-control products for projects and MRO.",
    seoTitle:
      "HVAC, Air Movement & Temperature Control Supplier in UAE | Fans, Motors, Coils & Controls",
    seoDescription:
      "Fans, blowers, HVAC motors, coils, thermostats, dampers and ventilation accessories for MEP contractors, facility managers and OEMs in UAE & GCC.",
    images: [
      "/images/products/hvac-1.jpg",
      "/images/products/hvac-2.jpg",
      "/images/products/hvac-3.jpg"
    ],
    bullets: [
      "Axial and centrifugal fans, blowers and inline duct fans.",
      "HVAC motors, belts, pulleys and drives for air-handling units.",
      "Thermostats, pressure switches, sensors and HVAC controls.",
      "Dampers, grilles, diffusers and air distribution hardware.",
      "Refrigeration components, copper tubing and fittings.",
      "Filters, air cleaners and IAQ-related accessories."
    ]
  },
  {
    slug: "industrial-hoses-reels-accessories",
    name: "Industrial Hoses, Hose Reels & Accessories",
    shortTagline:
      "Industrial hoses, hose assemblies, reels and fittings for air, water, chemicals & petroleum.",
    seoTitle:
      "Industrial Hoses, Hose Reels & Accessories Supplier in UAE | Air, Water, Chemical & Oil Hoses",
    seoDescription:
      "Supply of industrial hoses, hose reels, couplings and fittings for air, water, steam, chemical, fuel and material-transfer applications across UAE & GCC.",
    images: [
      "/images/products/hose-1.jpg",
      "/images/products/hose-2.jpg",
      "/images/products/hose-3.jpg"
    ],
    bullets: [
      "Air and water hoses for workshops, construction and industrial plants.",
      "Fuel, oil and petroleum transfer hoses and assemblies.",
      "Chemical hoses, composite hoses and PTFE-lined hose solutions.",
      "Steam hoses, hot-water hoses and high-temperature service hoses.",
      "Spring-retractable and manual hose reels for air, water, welding and power.",
      "Hose fittings, clamps, quick couplers and camlock couplings."
    ]
  },
  {
    slug: "industrial-lighting-electrical-fixtures",
    name: "Industrial Lighting & Electrical Fixtures",
    shortTagline:
      "LED lighting, task lights and industrial fixtures for workshops, warehouses & outdoor areas.",
    seoTitle:
      "Industrial Lighting & Electrical Fixtures Supplier in UAE | LED High-Bays, Floodlights & Task Lights",
    seoDescription:
      "LED high-bays, floodlights, bulkheads, emergency lights and task lighting for industrial, commercial and outdoor environments across UAE & GCC.",
    images: [
      "/images/products/lighting-1.jpg",
      "/images/products/lighting-2.jpg",
      "/images/products/lighting-3.jpg"
    ],
    bullets: [
      "LED high-bay and low-bay fixtures for warehouses and factories.",
      "Floodlights, area lights and pole-mounted lighting for yards and sites.",
      "Explosion-proof and hazardous-area lighting (on request).",
      "Portable work lights, inspection lamps and task lighting.",
      "Emergency and exit lighting fixtures and accessories.",
      "Weatherproof junction boxes, cable glands and mounting hardware."
    ]
  },
  {
    slug: "inserts-fittings",
    name: "Inserts & Fittings",
    shortTagline:
      "Threaded inserts, fittings and hardware for metal, plastic, wood and composite assemblies.",
    seoTitle:
      "Inserts & Fittings Supplier in UAE | Threaded Inserts, Tube Fittings & Hardware",
    seoDescription:
      "Threaded inserts, tube fittings, compression fittings and specialty hardware for equipment builders, fabricators and maintenance teams in UAE & GCC.",
    images: [
      "/images/products/inserts-1.jpg",
      "/images/products/inserts-2.jpg",
      "/images/products/inserts-3.jpg"
    ],
    bullets: [
      "Threaded inserts for metal, plastic and wood applications.",
      "Rivet nuts, nutserts and blind fastening inserts.",
      "Push-to-connect, compression and flare fittings for tubing.",
      "Brass, stainless and nylon fittings for air, water and chemical service.",
      "Plugs, caps, grommets and protection fittings for shipping and assembly."
    ]
  },
  {
    slug: "locks-security-hardware",
    name: "Locks, Security Hardware",
    shortTagline:
      "Padlocks, door hardware and security fittings for industrial and commercial facilities.",
    seoTitle:
      "Locks & Security Hardware Supplier in UAE | Padlocks, Door Hardware & Accessory Fittings",
    seoDescription:
      "Industrial-grade padlocks, hasps, cylinders, door hardware and security accessories for warehouses, workshops, cabinets and equipment enclosures across UAE & GCC.",
    images: [
      "/images/products/locks-1.jpg",
      "/images/products/locks-2.jpg",
      "/images/products/locks-3.jpg"
    ],
    bullets: [
      "Padlocks, safety locks and lockout/tagout hardware.",
      "Door locks, cylinders, deadbolts and panic hardware.",
      "Hasps, latches and security staples for gates and enclosures.",
      "Cabinet locks, cam locks and drawer locking systems.",
      "Keyed-alike, master-key and restricted-key systems (on request)."
    ]
  },
  {
    slug: "mcmaster-carr-product-sourcing",
    name: "McMaster-Carr",
    shortTagline:
      "McMaster-Carr catalog sourcing for hardware, fasteners, tools, motion components & more.",
    seoTitle:
      "McMaster-Carr Product Supplier in UAE | Sourcing McMaster Hardware, Tools & Components",
    seoDescription:
      "SCM Supply FZCO sources McMaster-Carr products from USA, consolidates and ships to UAE, Middle East and Africa for engineering, maintenance and project buyers.",
    images: [
      "/images/products/mcmaster-1.jpg",
      "/images/products/mcmaster-2.jpg",
      "/images/products/mcmaster-3.jpg"
    ],
    bullets: [
      "Sourcing of McMaster-Carr part numbers across all categories.",
      "Consolidated export packing and international freight from USA.",
      "Support for engineering teams to match equivalents and alternates.",
      "Ideal for small-quantity, high-mix and urgent requirements."
    ]
  },
  {
    slug: "motors-drives-motion-components",
    name: "Motors, Drives & Motion Components",
    shortTagline:
      "Electric motors, VFDs, gearboxes, bearings & power-transmission components.",
    seoTitle:
      "Motors, Drives & Motion Components Supplier in UAE | Electric Motors, VFDs & Power Transmission",
    seoDescription:
      "Electric motors, variable-frequency drives, gearboxes, couplings, bearings and power-transmission hardware for industrial machinery and OEMs across UAE & GCC.",
    images: [
      "/images/products/motors-1.jpg",
      "/images/products/motors-2.jpg",
      "/images/products/motors-3.jpg"
    ],
    bullets: [
      "AC motors, brake motors and special-duty motors.",
      "VFDs, soft starters and motor-control accessories.",
      "Gearboxes, gearmotors and speed-reduction units.",
      "Roller bearings, pillow blocks and linear-motion components.",
      "Couplings, belts, pulleys, chains and sprockets."
    ]
  },
  {
    slug: "office-packaging-warehouse-supplies",
    name: "Office, Packaging & Warehouse Supplies",
    shortTagline:
      "Office essentials, packaging materials and warehouse supplies for day-to-day operations.",
    seoTitle:
      "Office, Packaging & Warehouse Supplies in UAE | Cartons, Labels, Stretch Film & Stationery",
    seoDescription:
      "Cartons, tapes, stretch film, labels, packing materials and office stationery for warehouses, logistics operations and corporate offices in UAE & GCC.",
    images: [
      "/images/products/office-1.jpg",
      "/images/products/office-2.jpg",
      "/images/products/office-3.jpg"
    ],
    bullets: [
      "Corrugated cartons, boxes and packaging materials.",
      "Stretch film, shrink film, strapping and edge protectors.",
      "Packing tapes, labels, tags and identification supplies.",
      "Office stationery, printer supplies and basic office equipment.",
      "Warehouse handling items such as bins, totes and shelf accessories."
    ]
  },
  {
    slug: "outdoor-garden-field-tools",
    name: "Outdoor, Garden & Field Tools",
    shortTagline:
      "Outdoor tools and field equipment for landscaping, agriculture and site maintenance.",
    seoTitle:
      "Outdoor, Garden & Field Tools Supplier in UAE | Landscaping & Site Maintenance Equipment",
    seoDescription:
      "Shovels, rakes, pruners, sprayers and outdoor maintenance tools for landscaping contractors, facilities and agricultural users across UAE & GCC.",
    images: [
      "/images/products/outdoor-1.jpg",
      "/images/products/outdoor-2.jpg",
      "/images/products/outdoor-3.jpg"
    ],
    bullets: [
      "Hand tools for digging, grading and soil work.",
      "Pruners, shears, saws and trimming tools.",
      "Sprayers, hose-end equipment and basic irrigation tools.",
      "Outdoor carts, wheelbarrows and field transport accessories.",
      "Safety gear and PPE tailored to outdoor and landscaping work."
    ]
  },
  {
    slug: "plumbing-piping-tubing-fluid-fittings",
    name: "Plumbing, Piping, Tubing & Fluid Fittings",
    shortTagline:
      "Pipes, valves, fittings and tubing solutions for water, air and general fluid service.",
    seoTitle:
      "Plumbing, Piping, Tubing & Fluid Fittings Supplier in UAE | Pipes, Valves & Fittings",
    seoDescription:
      "Supply of pipes, pipe fittings, valves and tubing accessories for plumbing, HVAC, industrial and process-fluid applications in UAE & GCC.",
    images: [
      "/images/products/plumbing-1.jpg",
      "/images/products/plumbing-2.jpg",
      "/images/products/plumbing-3.jpg"
    ],
    bullets: [
      "Carbon steel, stainless steel, copper and plastic piping.",
      "Threaded, welded and flanged fittings for diverse pressure classes.",
      "Flexible hoses, tubing and quick-connect fittings.",
      "Drainage, sanitary and plumbing fixture connections.",
      "Sealants, gaskets, tapes and installation accessories."
    ]
  },
  {
    slug: "ppe-safety-equipment",
    name: "PPE & Safety Equipment",
    shortTagline:
      "Personal protective equipment and safety products for industrial and construction sites.",
    seoTitle:
      "PPE & Safety Equipment Supplier in UAE | Helmets, Gloves, Footwear & Fall Protection",
    seoDescription:
      "Head, eye, hand, hearing, respiratory and fall-protection PPE plus safety signage and spill-control products for industrial, construction and maintenance teams across UAE & GCC.",
    images: [
      "/images/products/ppe-1.jpg",
      "/images/products/ppe-2.jpg",
      "/images/products/ppe-3.jpg"
    ],
    bullets: [
      "Safety helmets, eye protection, face shields and hearing protection.",
      "Work gloves for cut, impact, chemical and general handling tasks.",
      "Safety footwear, coveralls, hi-visibility clothing and rainwear.",
      "Respiratory protection including masks, filters and cartridges.",
      "Fall protection, harnesses, lanyards and anchor points.",
      "Safety signage, barricades, spill kits and emergency response items."
    ]
  },
  {
    slug: "pumps",
    name: "Pumps",
    shortTagline:
      "Industrial pumps for water, chemicals, fuels and process fluids with full accessory support.",
    seoTitle:
      "Pumps Supplier in UAE | Centrifugal, Transfer, Dosing & Utility Pumps",
    seoDescription:
      "Centrifugal, transfer, dosing and utility pumps with hoses, controls and accessories for industrial, building-services and process applications across UAE & GCC.",
    images: [
      "/images/products/pumps-1.jpg",
      "/images/products/pumps-2.jpg",
      "/images/products/pumps-3.jpg"
    ],
    bullets: [
      "End-suction, inline and multistage centrifugal pumps.",
      "Chemical dosing pumps and metering systems.",
      "Drum pumps, utility pumps and transfer pumps for fuels and chemicals.",
      "Submersible pumps for drainage, sewage and dewatering.",
      "Pump accessories including hoses, gauges, bases and controls."
    ]
  },
  {
    slug: "testing-inspection-diagnostics",
    name: "Testing, Inspection & Diagnostics",
    shortTagline:
      "Test instruments and inspection tools for electrical, mechanical and facility diagnostics.",
    seoTitle:
      "Testing, Inspection & Diagnostics Supplier in UAE | Meters, Gauges & Instruments",
    seoDescription:
      "Multimeters, clamp meters, temperature instruments, pressure gauges and inspection tools for technicians and maintenance teams across UAE & GCC.",
    images: [
      "/images/products/testing-1.jpg",
      "/images/products/testing-2.jpg",
      "/images/products/testing-3.jpg"
    ],
    bullets: [
      "Electrical test instruments: multimeters, clamp meters and insulation testers.",
      "Temperature measurement: thermometers, IR guns and probes.",
      "Pressure gauges, manometers and vacuum gauges.",
      "Inspection cameras, borescopes and visual inspection tools.",
      "Calibration accessories and reference instruments (on request)."
    ]
  },
  {
    slug: "tools-machining-workshop-equipment",
    name: "Tools, Machining & Workshop Equipment",
    shortTagline:
      "Hand tools, power tools, machining and workshop equipment for industrial users.",
    seoTitle:
      "Tools, Machining & Workshop Equipment Supplier in UAE | Hand Tools, Power Tools & Shop Equipment",
    seoDescription:
      "Full range of industrial-grade hand tools, power tools, machining accessories and workshop equipment for fabrication, maintenance and construction teams in UAE & GCC.",
    images: [
      "/images/products/tools-1.jpg",
      "/images/products/tools-2.jpg",
      "/images/products/tools-3.jpg"
    ],
    bullets: [
      "Hand tools including wrenches, sockets, screwdrivers, pliers and hammers.",
      "Corded and cordless power tools for drilling, cutting and fastening.",
      "Machining tools including cutting tools, inserts, holders and workholding.",
      "Benchtop machines, vises, presses and shop support equipment.",
      "Tool storage, workbenches and mobile tool carts."
    ]
  },
  {
    slug: "uline-product-sourcing",
    name: "Uline",
    shortTagline:
      "Uline catalog sourcing for packaging, warehouse and shipping supplies from USA.",
    seoTitle:
      "Uline Product Supplier in UAE | Sourcing Uline Packaging & Warehouse Supplies",
    seoDescription:
      "SCM Supply FZCO sources Uline products from USA for customers in UAE, Middle East and Africa, covering packaging, shipping and warehouse supplies.",
    images: [
      "/images/products/uline-1.jpg",
      "/images/products/uline-2.jpg",
      "/images/products/uline-3.jpg"
    ],
    bullets: [
      "Access to the full Uline catalog for boxes, packaging and warehouse items.",
      "Consolidation of multiple Uline orders into export shipments.",
      "Ideal for logistics, e-commerce and distribution-center operations.",
      "Option to mix Uline with other USA brands in a single shipment."
    ]
  },
  {
    slug: "valves",
    name: "Valves",
    shortTagline:
      "Industrial valves for water, steam, air, gas and process fluids in different materials & ratings.",
    seoTitle:
      "Valves Supplier in UAE | Ball, Gate, Check & Control Valves",
    seoDescription:
      "Ball, gate, globe, check and butterfly valves plus controls and accessories for industrial, HVAC and utility-service applications across UAE & GCC.",
    images: [
      "/images/products/valves-1.jpg",
      "/images/products/valves-2.jpg",
      "/images/products/valves-3.jpg"
    ],
    bullets: [
      "Ball valves, gate valves, globe valves and check valves.",
      "Butterfly valves and lug/wafer designs for HVAC and process service.",
      "Control valves, actuators and positioners (on request).",
      "Brass, carbon steel, stainless steel and PVC valve constructions.",
      "Strainers, gauges and associated piping accessories."
    ]
  },
  {
    slug: "welding-brazing-heat-joining",
    name: "Welding, Brazing & Heat Joining",
    shortTagline:
      "Welding machines, consumables and accessories for fabrication, repair and maintenance.",
    seoTitle:
      "Welding, Brazing & Heat Joining Supplier in UAE | Welders, Electrodes & Consumables",
    seoDescription:
      "Welding machines, electrodes, wires, gases-related accessories and brazing products for fabrication shops, workshops and construction projects in UAE & GCC.",
    images: [
      "/images/products/welding-1.jpg",
      "/images/products/welding-2.jpg",
      "/images/products/welding-3.jpg"
    ],
    bullets: [
      "MMA, MIG/MAG, TIG and multi-process welding machines.",
      "Welding electrodes, wires, rods and filler metals.",
      "Brazing alloys, fluxes and heat-joining consumables.",
      "Welding cables, clamps, torches and accessories.",
      "Welding PPE including helmets, gloves, jackets and curtains."
    ]
  }
];

export function getProductBySlug(slug: string): ProductCategory | undefined {
  return productCategories.find((p) => p.slug === slug);
}
