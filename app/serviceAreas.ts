// Per-state service-area content for the /service-area/[state] pages.
// Order mirrors site.states so the home-page pills map cleanly.

export type ServiceArea = {
  slug: string;
  name: string;
  tagline: string;
  intro: string;
  cities: string[];
  image: string;
};

export const stateSlug = (name: string) =>
  name.toLowerCase().replace(/\s+/g, "-");

export const serviceAreas: ServiceArea[] = [
  {
    slug: "tennessee",
    name: "Tennessee",
    tagline:
      "Our home state — licensed, bonded, and insured moving, grading, and setup across East Tennessee and beyond.",
    intro:
      "Mountain Movers is based in Newport, Tennessee, right in the heart of the state we know best. From the Smokies to the Cumberland Plateau, we move single-wides, double-wides, and modular sections — then grade the pad and set the home level, anchored, and ready for inspection.",
    cities: [
      "Knoxville",
      "Chattanooga",
      "Sevierville",
      "Newport",
      "Morristown",
      "Gatlinburg",
    ],
    image: "/photos/stock-smokies-valley.jpg",
  },
  {
    slug: "north-carolina",
    name: "North Carolina",
    tagline:
      "A second home base for our crew — moving and setting homes across Western North Carolina.",
    intro:
      "Just over the mountains from Newport, Western North Carolina is one of our busiest service areas. We handle the permits, route planning, grade work, and the set — every move surveyed in advance and escorted on the road.",
    cities: [
      "Asheville",
      "Hendersonville",
      "Boone",
      "Waynesville",
      "Marion",
      "Sylva",
    ],
    image: "/photos/stock-blue-ridge-dusk.jpg",
  },
  {
    slug: "virginia",
    name: "Virginia",
    tagline:
      "Reaching into Southwest Virginia with full-service moving, grading, and setup.",
    intro:
      "We regularly travel into Southwest Virginia to move mobile and modular homes. Every county has its own rules — we know how to prep the site, pull the moving permits, and set the home so it passes inspection.",
    cities: ["Bristol", "Abingdon", "Wytheville", "Marion", "Galax"],
    image: "/photos/stock-va-farmland.jpg",
  },
  {
    slug: "georgia",
    name: "Georgia",
    tagline:
      "Serving North Georgia's mountains with safe, code-compliant home moves.",
    intro:
      "From Blue Ridge to Dalton, we move homes across North Georgia and build the base they sit on — clearing, grading, drainage, and a compacted pad that won't settle later.",
    cities: ["Blue Ridge", "Blairsville", "Dalton", "Dahlonega", "Ellijay"],
    image: "/photos/stock-green-valley.jpg",
  },
  {
    slug: "south-carolina",
    name: "South Carolina",
    tagline:
      "Full-service mobile home moving and site prep across Upstate South Carolina.",
    intro:
      "We serve the Upstate — Greenville, Spartanburg, and the surrounding counties — with transport, grading, driveways, and setup managed from beginning to end by our experienced, safety-trained team.",
    cities: ["Greenville", "Spartanburg", "Greer", "Seneca", "Gaffney"],
    image: "/photos/stock-ridges-dusk.jpg",
  },
];

// Approximate coordinates for the service-area map on the home page.
// TODO: swap for a real list of towns where homes have been placed, once
// the owners provide it — then relabel the map "Homes we've placed".
export const cityCoords: Record<string, [lat: number, lng: number]> = {
  "Tennessee/Knoxville": [35.96, -83.92],
  "Tennessee/Chattanooga": [35.05, -85.31],
  "Tennessee/Sevierville": [35.87, -83.56],
  "Tennessee/Newport": [35.97, -83.19],
  "Tennessee/Morristown": [36.21, -83.29],
  "Tennessee/Gatlinburg": [35.71, -83.51],
  "North Carolina/Asheville": [35.6, -82.55],
  "North Carolina/Hendersonville": [35.32, -82.46],
  "North Carolina/Boone": [36.22, -81.67],
  "North Carolina/Waynesville": [35.49, -82.99],
  "North Carolina/Marion": [35.68, -82.01],
  "North Carolina/Sylva": [35.37, -83.23],
  "Virginia/Bristol": [36.6, -82.19],
  "Virginia/Abingdon": [36.71, -81.98],
  "Virginia/Wytheville": [36.95, -81.08],
  "Virginia/Marion": [36.83, -81.51],
  "Virginia/Galax": [36.66, -80.92],
  "Georgia/Blue Ridge": [34.86, -84.32],
  "Georgia/Blairsville": [34.88, -83.96],
  "Georgia/Dalton": [34.77, -84.97],
  "Georgia/Dahlonega": [34.53, -83.98],
  "Georgia/Ellijay": [34.69, -84.48],
  "South Carolina/Greenville": [34.85, -82.4],
  "South Carolina/Spartanburg": [34.95, -81.93],
  "South Carolina/Greer": [34.94, -82.23],
  "South Carolina/Seneca": [34.69, -82.95],
  "South Carolina/Gaffney": [35.07, -81.65],
};

export const serviceAreaBySlug = (slug: string) =>
  serviceAreas.find((a) => a.slug === slug);
