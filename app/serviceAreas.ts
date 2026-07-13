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
    image: "/photos/move-mountain-road.jpg",
  },
  {
    slug: "north-carolina",
    name: "North Carolina",
    tagline:
      "A second home base for our crew — moving and setting homes across Western North Carolina.",
    intro:
      "Just over the mountains from Newport, Western North Carolina is one of our busiest service areas. We handle the permits, the grade work, and the set — through the tight, winding roads the region is known for.",
    cities: [
      "Asheville",
      "Hendersonville",
      "Boone",
      "Waynesville",
      "Marion",
      "Sylva",
    ],
    image: "/photos/g-hillside.jpg",
  },
  {
    slug: "virginia",
    name: "Virginia",
    tagline:
      "Reaching into Southwest Virginia with full-service moving, grading, and setup.",
    intro:
      "We regularly travel into Southwest Virginia to move mobile and modular homes. Every county has its own rules — we know how to prep the site, pull the moving permits, and set the home so it passes inspection.",
    cities: ["Bristol", "Abingdon", "Wytheville", "Marion", "Galax"],
    image: "/photos/winter-view.jpg",
  },
  {
    slug: "georgia",
    name: "Georgia",
    tagline:
      "Serving North Georgia's mountains with safe, code-compliant home moves.",
    intro:
      "From Blue Ridge to Dalton, we move homes across North Georgia and build the base they sit on — clearing, grading, drainage, and a compacted pad that won't settle later.",
    cities: ["Blue Ridge", "Blairsville", "Dalton", "Dahlonega", "Ellijay"],
    image: "/photos/move-blue-sky.jpg",
  },
  {
    slug: "kentucky",
    name: "Kentucky",
    tagline: "Moving and setting mobile homes across Southeastern Kentucky.",
    intro:
      "We reach into Southeastern Kentucky for moves and setups, bringing the right equipment for narrow roads and steep hollows — plus the grade work needed to pass inspection and get power turned on.",
    cities: ["Middlesboro", "Corbin", "London", "Williamsburg", "Barbourville"],
    image: "/photos/move-road-mountains.jpg",
  },
  {
    slug: "south-carolina",
    name: "South Carolina",
    tagline:
      "Full-service mobile home moving and site prep across Upstate South Carolina.",
    intro:
      "We serve the Upstate — Greenville, Spartanburg, and the surrounding counties — with transport, grading, driveways, and setup handled by one experienced crew.",
    cities: ["Greenville", "Spartanburg", "Greer", "Seneca", "Gaffney"],
    image: "/photos/g-highway.jpg",
  },
];

export const serviceAreaBySlug = (slug: string) =>
  serviceAreas.find((a) => a.slug === slug);
