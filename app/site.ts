// Central business details — defined once, used across every page.

export const site = {
  name: "Mountain Movers LLC",
  shortName: "Mountain Movers",
  tagline:
    "Permitted, escorted, and safety-first home moves — managed from start to finish.",
  base: "Newport, Tennessee",
  blurb:
    "A family-owned mobile home moving company based in Newport, Tennessee — often traveling as far as 200 miles. We know our business and everything it takes to get the job done safely.",
  states: [
    "Tennessee",
    "North Carolina",
    "Virginia",
    "Georgia",
    "South Carolina",
  ],
  credentials: ["Licensed", "Bonded", "Insured"],
  // Real customer quotes only — first name + town. The home-page
  // testimonials section stays hidden while this list is empty.
  testimonials: [] as { quote: string; name: string; town: string }[],
  phones: [
    { label: "Tennessee", number: "423-616-2111" },
    { label: "North Carolina", number: "828-708-0812" },
  ],
  email: "mountainmoversmobile@gmail.com",
  team: [
    { name: "Mike", role: "Owner & Operator", photo: "/photos/team-1.jpg" },
    { name: "Luke", role: "Owner & Operator", photo: "/photos/team-2.jpg" },
  ],
  inspectionFee: 500,
  // Google reviews. Paste the Featurable widget id below once created
  // (https://featurable.com → free signup → add this business → create widget).
  // While it's empty, the site shows real review excerpts + Google buttons.
  googleReviewsWidgetId: "",
  googleReviewUrl:
    "https://www.google.com/maps/place/Mountain+Movers+Mobile+Homes/@35.7942184,-84.5824526,8z/data=!3m1!4b1!4m5!3m4!1s0x885bc37a4a0b140b:0x3a450507dbcbb210!8m2!3d35.7994229!4d-83.4612765",
  social: {
    facebook: "https://www.facebook.com/tnmobilehomemovers/",
    instagram: "#",
    youtube: "#",
    google:
      "https://www.google.com/maps/place/Mountain+Movers+Mobile+Homes/@35.7942184,-84.5824526,8z/data=!3m1!4b1!4m5!3m4!1s0x885bc37a4a0b140b:0x3a450507dbcbb210!8m2!3d35.7994229!4d-83.4612765",
  },
} as const;

export const telHref = (number: string) => `tel:+1${number.replace(/-/g, "")}`;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Moving & Setup", href: "/process" },
  { label: "Grading", href: "/grading" },
  { label: "Safety", href: "/safety" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];
