import type { Metadata } from "next";
import { site, telHref } from "../site";
import { Container, SectionHeading, Button } from "../components/ui";
import {
  CheckIcon,
  PhoneIcon,
  TreeIcon,
  LayersIcon,
  RollerIcon,
  LevelIcon,
  RoadIcon,
  SlabIcon,
  PlusCircleIcon,
} from "../components/icons";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = {
  title: "Grading & Site Prep",
  description:
    "Land clearing, dirt import and fill, compacting, precision grading, driveways, and concrete work — everything it takes to get your property ready for construction or improvement.",
};

const services = [
  {
    icon: TreeIcon,
    title: "Land Clearing",
    body: "Remove trees, brush, rocks, and debris so you start with a clean slate.",
  },
  {
    icon: LayersIcon,
    title: "Dirt Import & Fill",
    body: "Bring in quality material to raise low spots and create proper drainage.",
  },
  {
    icon: RollerIcon,
    title: "Compacting & Soil Stabilization",
    body: "Ensure a rock-solid base that won't settle or shift later.",
  },
  {
    icon: LevelIcon,
    title: "Precision Leveling & Grading",
    body: "Achieve perfectly flat, properly sloped pads for foundations, slabs, or yards.",
  },
  {
    icon: RoadIcon,
    title: "Driveway Construction",
    body: "Cut in new driveways, add gravel, or prepare surfaces for asphalt or concrete.",
  },
  {
    icon: SlabIcon,
    title: "Concrete Work",
    body: "Professional pouring for slabs, footings, patios, sidewalks, and more.",
  },
  {
    icon: PlusCircleIcon,
    title: "And virtually anything else",
    body: "If it involves moving dirt, shaping land, or building the base layer, we've got you covered.",
  },
];

export default function GradingPage() {
  const primary = site.phones[0];
  return (
    <>
      <PageHero
        eyebrow="Grading & Site Prep"
        title="We've got you covered"
        subtitle="We handle every aspect of getting your property ready for construction or improvement — from raw land to a solid, build-ready base."
        image="/photos/g-dozer.jpg"
      />

      {/* Services grid */}
      <section className="bg-cream bg-topo py-20">
        <Container>
          <SectionHeading
            eyebrow="What we do"
            title="Every aspect of site prep"
            subtitle="If it involves moving dirt, shaping land, or building the base layer, it's the kind of work we do every day."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="flex flex-col rounded-2xl border border-stone-200/80 bg-white p-7 shadow-sm ring-1 ring-black/[0.03]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-forest-600 to-forest-800 text-white shadow-md shadow-forest-900/20">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-stone-900">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Experienced crew & modern equipment */}
      <section className="bg-white py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/photos/g-skidsteer-set.jpg"
                alt="Mountain Movers crew grading a site with heavy equipment"
                className="aspect-[4/3] h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <SectionHeading
                align="left"
                eyebrow="Why Mountain Movers"
                title="Experienced crew, modern equipment"
                subtitle="Our team has years of hands-on experience with the right machines to get the job done efficiently and precisely — minimizing disruption to your property."
              />
              <ul className="mt-6 space-y-3">
                {[
                  "One crew for clearing, grading, and concrete — no juggling contractors.",
                  "Proper drainage and compaction so your base won't settle or shift.",
                  "The right machine for the job, from land clearing to finish grade.",
                ].map((p) => (
                  <li key={p} className="flex gap-3 text-stone-700">
                    <CheckIcon className="mt-0.5 h-5 w-5 flex-none text-forest-600" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <p className="text-sm font-bold uppercase tracking-wider text-stone-500">
                  Some of our equipment
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {["Excavator", "Skidsteer", "Compactor", "Dozer"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-forest-100 bg-forest-50 px-3 py-1 text-sm font-semibold text-forest-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-forest-900 py-16 text-white">
        <Container className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Ready to break ground?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-forest-100">
            Tell us about your site and we&apos;ll come out, walk it, and give you
            a real number for the work.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/contact" withArrow>
              Request a Quote
            </Button>
            <Button href={telHref(primary.number)} variant="outline">
              <PhoneIcon className="h-4 w-4" />
              {primary.number}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
