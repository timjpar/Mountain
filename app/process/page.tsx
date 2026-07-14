import type { Metadata } from "next";
import { Container, SectionHeading, Button } from "../components/ui";
import { CheckIcon } from "../components/icons";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = {
  title: "Moving & Setup Process",
  description:
    "How Mountain Movers handles a mobile home move from start to finish — site prep and grading, permits, inspection, transport, and setup — plus a basic price list.",
};

const fmt = (n: number) => `$${n.toLocaleString()}`;

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Moving & Setup"
        title="Everything it takes to move and set your home"
        subtitle="Every state has different rules, but the work is the same: prep the site, get the permits, move the home safely, and set it level, anchored, and ready for inspection."
        image="/photos/move-mountain-road.jpg"
      />

      {/* Step nav */}
      <section className="border-b border-stone-200 bg-stone-50">
        <Container className="flex flex-wrap justify-center gap-2 py-5">
          {steps.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-semibold text-forest-800 shadow-sm transition-colors hover:border-forest-600/40 hover:text-forest-700"
            >
              <span className="text-forest-600">{s.letter}.</span> {s.short}
            </a>
          ))}
          <a
            href="#pricing"
            className="rounded-full bg-action px-4 py-2 text-sm font-bold text-stone-900 shadow-sm hover:bg-action-dark"
          >
            Price List
          </a>
        </Container>
      </section>

      {/* A — Site Prep & Grade Work */}
      <Step id="siteprep" letter="A" title="Site Prep & Grade Work" image="/photos/grade-gravel-pad.jpg" imageAlt="A graded gravel pad ready for a mobile home set" moreHref="/process/site-prep" moreLabel="Read more about Site Prep">
        <p>
          We offer grading services, which are required by code in order to pass
          inspection. This is absolutely required to be able to get power
          installed to your home.
        </p>
        <p>
          Every state has different rules, but they all require{" "}
          <strong>positive drainage</strong> — water must run away from the home
          and not sit under it. You also want your site reasonably level, usually
          no more than a 2-foot slope from any end of the home to another.
        </p>
        <p>
          We have a knowledgeable, experienced team, so you don&apos;t have to
          hire another contractor and hope they don&apos;t mess it up. Most sites
          require a french drain and possibly extra fill dirt — and fill dirt must
          always be compacted.
        </p>
        <p>
          All homes require either dirt or concrete footers. Basic footers can be
          dug to frostline and set without concrete if allowed; concrete is
          sometimes required or requested but costs extra. Tennessee also requires
          that all tree limbs over the top of the home be removed.
        </p>
        <EquipmentChips items={["Excavator", "Skidsteer", "Compactor"]} />
      </Step>

      {/* B — Permits */}
      <Step id="permits" letter="B" title="Permits" image="/photos/lot-wooded.jpg" imageAlt="A wooded lot being prepared for a home" reverse moreHref="/process/permits" moreLabel="Read more about Permits">
        <p>
          We take care of the <strong>moving permits and setup inspections</strong>,
          but you, the homeowner, are required to get a building permit and check
          with the county about where you&apos;re allowed to place the home and
          whether there are special rules for your lot.
        </p>
        <p>
          You may need to get the soil tested and have someone probe for septic and
          well. You must also make sure there are no existing buried lines — if
          there are, they must be traced so we don&apos;t hit them when digging.
          Note that 811 will only locate up to the edge of the street, not onto the
          property itself.
        </p>
      </Step>

      {/* C — Used Home Inspection */}
      <Step id="inspection" letter="C" title="Used Home Inspection & Prep" image="/photos/used-home.jpg" imageAlt="A used single-wide home staged for inspection" moreHref="/process/inspection" moreLabel="Read more about Inspection">
        <p>
          There are some things we look for to determine if a used home is safe and
          ready for transport:
        </p>
        <CheckList
          items={[
            "No water or structural damage to the home",
            "The I-beam underneath is not bent or corrugated",
            "There is a hitch on, or located under, the home",
            "All utilities and the deck are disconnected, and skirting removed",
            "Any dirt, trees, or obstacles in the way are removed",
            "Furniture is removed before transport",
          ]}
        />
      </Step>

      {/* D — Moving the Home */}
      <Step id="moving" letter="D" title="Moving the Home" image="/photos/equip-house-tug.jpg" imageAlt="A tracked house tug used to move mobile homes" reverse moreHref="/process/moving" moreLabel="Read more about Moving">
        <p>
          If the home is determined safe for transport, we figure out exactly what
          equipment, manpower, trucks, and prep work the move requires. Often, tree
          work has to be done to safely maneuver the home without damage.
        </p>
        <p>We bring the right machine for the job:</p>
        <EquipmentChips items={["House Tug", "Platypus", "Jadde", "Toter with 6-way hitch"]} />
      </Step>

      {/* E — Setup & Inspection Checklist */}
      <section id="setup" className="scroll-mt-20 bg-stone-50 py-16">
        <Container>
          <div className="flex items-center gap-4">
            <Letter>E</Letter>
            <h2 className="text-2xl font-extrabold tracking-tight text-stone-900 sm:text-3xl">
              Setup & Inspection Checklist
            </h2>
          </div>
          <div className="mt-6 max-w-3xl space-y-4 text-stone-700">
            <p>
              The basic move and setup includes setting the house on block,
              leveling the piers, and anchoring the home. On a double-wide, it is
              bolted together and the roof dried in — nothing else. Any other work
              is not included in the basic setup.
            </p>
            <p className="rounded-lg border-l-4 border-action bg-action/10 p-4 text-stone-800">
              Every state has different rules that must be determined individually,
              but generally you can follow this checklist. You may not be able to
              move into the home until an inspection has passed, which can take{" "}
              <strong>30 days</strong> from the day we send it in.
            </p>
          </div>

          <ol className="mt-8 grid gap-4 lg:grid-cols-2">
            {checklist.map((item, i) => (
              <li
                key={i}
                className="flex gap-3 rounded-xl border border-stone-200 bg-white p-4 shadow-sm"
              >
                <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-forest-700 text-sm font-bold text-white">
                  {i + 1}
                </span>
                <span className="text-sm leading-relaxed text-stone-700">{item}</span>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm font-semibold text-stone-500">
            No other work is required to get the house inspected.
          </p>
          <div className="mt-6">
            <Button href="/process/setup" variant="secondary" withArrow>
              Read more about Setup
            </Button>
          </div>
        </Container>
      </section>

      {/* Pricing */}
      <section id="pricing" className="scroll-mt-20 py-20">
        <Container>
          <SectionHeading
            eyebrow="Basic price list"
            title="A good starting point"
            subtitle="It is impossible to price every move the same — there are too many variables — but here is a good starting point. Final pricing comes after an on-site assessment."
          />

          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
            <PriceCard
              title="Used Single-Wide"
              price={fmt(8500)}
              note="Basic move & setup"
              grading={[
                ["Grading & prep (no concrete)", fmt(2500)],
                ["Grading & prep (with concrete)", fmt(4500)],
              ]}
            />
            <PriceCard
              title="Used Double-Wide"
              price={fmt(18000)}
              note="Basic move & setup"
              grading={[
                ["Grading & prep (no concrete)", fmt(3500)],
                ["Grading & prep (with concrete)", fmt(6500)],
              ]}
            />
          </div>

          <p className="mx-auto mt-6 max-w-4xl text-sm text-stone-500">
            Basic packages assume there are no issues, the home is relatively easy
            to move, and the two sites are close together. They do not include prep
            or finishing work beyond what is listed.
          </p>

          <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-stone-200 bg-stone-50 p-6 sm:p-8">
            <h3 className="text-lg font-bold text-stone-900">
              Things that bring the price up
            </h3>
            <ul className="mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2">
              {priceUp.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-stone-700">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-action" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-forest-900 py-16 text-white">
        <Container className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Want an exact price for your move?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-forest-100">
            We&apos;ll come out, assess both sites, and give you a real number.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/contact" withArrow>
              Request a Quote
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

/* ---------------------------------------------------------------- pieces */

const steps = [
  { id: "siteprep", letter: "A", short: "Site Prep" },
  { id: "permits", letter: "B", short: "Permits" },
  { id: "inspection", letter: "C", short: "Inspection" },
  { id: "moving", letter: "D", short: "Moving" },
  { id: "setup", letter: "E", short: "Setup" },
];

const checklist = [
  "Dirt sloped away from the home, from the edge out 10 ft with a 5\" minimum slope — or a french drain installed instead on the exact edge of the home: 1 ft wide, 18\" deep, drain pipe filled with gravel and no dirt on top.",
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
];

const priceUp = [
  "Difficult site to get in or out of",
  "Corrugated frame or damage to the frame or home",
  "Missing tongue or hitch",
  "Difficult road to get out of",
  "Over-height, raised roof, or modular home",
  "Rocky soil",
  "Off-level site",
  "Steep hills",
  "Narrow roads",
  "Remodeled home with added weight",
];

function Letter({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-forest-700 text-2xl font-extrabold text-white">
      {children}
    </span>
  );
}

function Step({
  id,
  letter,
  title,
  image,
  imageAlt,
  reverse = false,
  moreHref,
  moreLabel,
  children,
}: {
  id: string;
  letter: string;
  title: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  moreHref?: string;
  moreLabel?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 border-b border-stone-100 py-16">
      <Container>
        <div className={`grid items-center gap-10 lg:grid-cols-2 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
          <div>
            <div className="flex items-center gap-4">
              <Letter>{letter}</Letter>
              <h2 className="text-2xl font-extrabold tracking-tight text-stone-900 sm:text-3xl">
                {title}
              </h2>
            </div>
            <div className="mt-5 space-y-4 leading-relaxed text-stone-700">
              {children}
            </div>
            {moreHref && (
              <div className="mt-6">
                <Button href={moreHref} variant="secondary" withArrow>
                  {moreLabel}
                </Button>
              </div>
            )}
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image} alt={imageAlt} className="aspect-[4/3] w-full object-cover" loading="lazy" />
          </div>
        </div>
      </Container>
    </section>
  );
}

function EquipmentChips({ items }: { items: string[] }) {
  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-wider text-stone-500">
        Some of our equipment
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-forest-100 bg-forest-50 px-3 py-1 text-sm font-semibold text-forest-700"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <CheckIcon className="mt-0.5 h-5 w-5 flex-none text-forest-600" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function PriceCard({
  title,
  price,
  note,
  grading,
}: {
  title: string;
  price: string;
  note: string;
  grading: [string, string][];
}) {
  return (
    <div className="flex flex-col rounded-2xl border border-stone-200 bg-white p-7 shadow-sm">
      <h3 className="text-lg font-bold text-stone-900">{title}</h3>
      <p className="mt-3 flex items-baseline gap-2">
        <span className="text-sm font-semibold text-stone-500">starts at</span>
        <span className="text-4xl font-extrabold text-forest-800">{price}</span>
      </p>
      <p className="mt-1 text-sm text-stone-500">{note}</p>
      <div className="mt-5 space-y-2 border-t border-stone-100 pt-5">
        {grading.map(([label, amount]) => (
          <div key={label} className="flex items-center justify-between text-sm">
            <span className="text-stone-600">{label}</span>
            <span className="font-bold text-stone-900">from {amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
