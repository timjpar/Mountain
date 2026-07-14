// Per-step content for the /process/[step] pages.
// Order and copy mirror the inline sections on the /process page.

export type ContentBlock =
  | { kind: "p"; text: string }
  | { kind: "checklist"; items: string[] }
  | { kind: "numbered"; items: string[] }
  | { kind: "equipment"; items: string[] }
  | { kind: "callout"; text: string };

export type ProcessStep = {
  slug: string;
  letter: string;
  name: string;
  title: string;
  tagline: string;
  image: string;
  intro: string;
  content: ContentBlock[];
};

export const processSteps: ProcessStep[] = [
  {
    slug: "site-prep",
    letter: "A",
    name: "Site Prep",
    title: "Site Prep & Grade Work",
    tagline:
      "Grading and site prep required by code to pass inspection and get power to your home.",
    image: "/photos/grade-gravel-pad.jpg",
    intro:
      "We offer grading services, which are required by code in order to pass inspection. This is absolutely required to be able to get power installed to your home.",
    content: [
      {
        kind: "p",
        text: "Every state has different rules, but they all require positive drainage — water must run away from the home and not sit under it. You also want your site reasonably level, usually no more than a 2-foot slope from any end of the home to another.",
      },
      {
        kind: "p",
        text: "We have a knowledgeable, experienced team, so you don't have to hire another contractor and hope they don't mess it up. Most sites require a french drain and possibly extra fill dirt — and fill dirt must always be compacted.",
      },
      {
        kind: "p",
        text: "All homes require either dirt or concrete footers. Basic footers can be dug to frostline and set without concrete if allowed; concrete is sometimes required or requested but costs extra. Tennessee also requires that all tree limbs over the top of the home be removed.",
      },
      { kind: "equipment", items: ["Excavator", "Skidsteer", "Compactor"] },
    ],
  },
  {
    slug: "permits",
    letter: "B",
    name: "Permits",
    title: "Permits",
    tagline:
      "We handle the moving permits and setup inspections — here's what's on you as the homeowner.",
    image: "/photos/lot-wooded.jpg",
    intro:
      "We take care of the moving permits and setup inspections, but you, the homeowner, are required to get a building permit and check with the county about where you're allowed to place the home and whether there are special rules for your lot.",
    content: [
      {
        kind: "p",
        text: "You may need to get the soil tested and have someone probe for septic and well. You must also make sure there are no existing buried lines — if there are, they must be traced so we don't hit them when digging. Note that 811 will only locate up to the edge of the street, not onto the property itself.",
      },
    ],
  },
  {
    slug: "inspection",
    letter: "C",
    name: "Inspection",
    title: "Used Home Inspection & Prep",
    tagline:
      "What we look for to determine whether a used home is safe and ready for transport.",
    image: "/photos/used-home.jpg",
    intro:
      "There are some things we look for to determine if a used home is safe and ready for transport:",
    content: [
      {
        kind: "checklist",
        items: [
          "No water or structural damage to the home",
          "The I-beam underneath is not bent or corrugated",
          "There is a hitch on, or located under, the home",
          "All utilities and the deck are disconnected, and skirting removed",
          "Any dirt, trees, or obstacles in the way are removed",
          "Furniture is removed before transport",
        ],
      },
    ],
  },
  {
    slug: "moving",
    letter: "D",
    name: "Moving",
    title: "Moving the Home",
    tagline:
      "The right equipment, manpower, and prep work to move your home safely.",
    image: "/photos/equip-house-tug.jpg",
    intro:
      "If the home is determined safe for transport, we figure out exactly what equipment, manpower, trucks, and prep work the move requires. Often, tree work has to be done to safely maneuver the home without damage.",
    content: [
      { kind: "p", text: "We bring the right machine for the job:" },
      {
        kind: "equipment",
        items: ["House Tug", "Platypus", "Jadde", "Toter with 6-way hitch"],
      },
    ],
  },
  {
    slug: "setup",
    letter: "E",
    name: "Setup",
    title: "Setup & Inspection Checklist",
    tagline:
      "Setting the home level, anchored, and ready for the inspector — plus the full setup checklist.",
    image: "/photos/move-mountain-road.jpg",
    intro:
      "The basic move and setup includes setting the house on block, leveling the piers, and anchoring the home. On a double-wide, it is bolted together and the roof dried in — nothing else. Any other work is not included in the basic setup.",
    content: [
      {
        kind: "callout",
        text: "Every state has different rules that must be determined individually, but generally you can follow this checklist. You may not be able to move into the home until an inspection has passed, which can take 30 days from the day we send it in.",
      },
      {
        kind: "numbered",
        items: [
          'Dirt sloped away from the home, from the edge out 10 ft with a 5" minimum slope — or a french drain installed instead on the exact edge of the home: 1 ft wide, 18" deep, drain pipe filled with gravel and no dirt on top.',
          "House crowned underneath if level, or sloped to one side smoothly and consistently if on a hill.",
          "6 mil ground vapor barrier installed, secured with landscape staples, overlapped at least 1 ft at seams, covering the entire home except a built-in porch area.",
          "Belly board plastic under the home fully intact, or repaired with proper plastic in big areas / tape in small areas.",
          "Block skirting only backfilled where waterproofed and visibly higher than the backfilled area.",
          "Waste line installed with long sweeps and clean-outs down the main line; clean-outs secured and leak-free. Schedule 40 PVC required; ABS converted with green transition glue or rubber boots.",
          "Waste line supported by metal hanger tape and bolts every 4 ft minimum, screwed to floor joist or hung on the metal frame.",
          "Water line with shut-off and water regulator installed, 100% insulated above ground.",
          "Drain lines for A/C and water heater routed to the perimeter of the home.",
          "Dryer vent and furnace vents routed to the perimeter with hood flaps; roof furnace vent installed.",
          "No exposed electrical lines — all electrical lines in electrical conduit.",
          "HVAC crossover pipe hooked up and supported above ground by proper webbing every 4 ft minimum.",
          "Porches not attached to the home — nothing built on or added onto the home.",
        ],
      },
      { kind: "p", text: "No other work is required to get the house inspected." },
    ],
  },
];

export const processStepBySlug = (slug: string) =>
  processSteps.find((s) => s.slug === slug);
