// Central place for business details so they're defined once and easy to update.

export const site = {
  name: "Mountain Movers Mobile Homes",
  tagline:
    "Moving your home safely through the dangerous terrain of traffic, mountains, valleys, and creeks.",
  serviceArea: "North Carolina & Tennessee",
  phones: [
    { label: "North Carolina", number: "828-708-0812" },
    { label: "Tennessee", number: "423-616-2111" },
  ],
  credentials: ["Licensed", "Bonded", "Insured"],
  social: {
    google: "#",
    facebook: "#",
    youtube: "#",
    instagram: "#",
  },
} as const;

export const telHref = (number: string) => `tel:+1${number.replace(/-/g, "")}`;
