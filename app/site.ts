// Central business details — defined once, used across every page.

export const site = {
  name: "Mountain Movers LLC",
  shortName: "Mountain Movers",
  tagline:
    "Moving your home safely through traffic, mountains, valleys, and creeks.",
  base: "Newport, Tennessee",
  blurb:
    "A family-owned mobile home moving company based in Newport, Tennessee — often traveling as far as 200 miles. We know our business and everything it takes to get the job done safely.",
  states: [
    "Tennessee",
    "North Carolina",
    "Virginia",
    "Georgia",
    "Kentucky",
    "South Carolina",
  ],
  credentials: ["Licensed", "Bonded", "Insured"],
  phones: [
    { label: "Tennessee", number: "423-616-2111" },
    { label: "North Carolina", number: "828-708-0812" },
  ],
  email: "mikejpar@gmail.com",
  // NOTE: confirm which photo is Mike vs Luke and update if swapped.
  team: [
    { name: "Mike", role: "Owner & Operator", photo: "/photos/team-1.jpg" },
    { name: "Luke", role: "Owner & Operator", photo: "/photos/team-2.jpg" },
  ],
  inspectionFee: 750,
  social: {
    facebook: "#",
    instagram: "#",
    youtube: "#",
    google: "#",
  },
} as const;

export const telHref = (number: string) => `tel:+1${number.replace(/-/g, "")}`;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Moving & Setup", href: "/process" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];
