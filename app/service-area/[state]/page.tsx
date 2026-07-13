import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site, telHref } from "../../site";
import { serviceAreas, serviceAreaBySlug } from "../../serviceAreas";
import { Container, SectionHeading, Button } from "../../components/ui";
import { PageHero } from "../../components/PageHero";
import {
  MapPinIcon,
  PhoneIcon,
  ArrowIcon,
  TruckIcon,
  LevelIcon,
  CheckIcon,
} from "../../components/icons";

// Static export: prerender one page per state, nothing on demand.
export const dynamicParams = false;

export function generateStaticParams() {
  return serviceAreas.map((area) => ({ state: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string }>;
}): Promise<Metadata> {
  const { state } = await params;
  const area = serviceAreaBySlug(state);
  if (!area) return {};
  return {
    title: `Mobile Home Moving & Grading in ${area.name}`,
    description: `${site.shortName} moves, grades, and sets mobile and modular homes across ${area.name}. Licensed, bonded, and insured, based in ${site.base}.`,
  };
}

const offerings = [
  {
    icon: TruckIcon,
    title: "Mobile Home Moving",
    href: "/process#moving",
    body: "Single-wides, double-wides, and modular sections — disconnected, hauled, and delivered safely.",
  },
  {
    icon: LevelIcon,
    title: "Grading & Site Prep",
    href: "/grading",
    body: "Clearing, drainage, footers, and a compacted, level pad that passes code.",
  },
  {
    icon: CheckIcon,
    title: "Setup & Inspection",
    href: "/process#setup",
    body: "Blocking, leveling, anchoring, and tie-downs — set up to code and ready for the inspector.",
  },
];

export default async function ServiceAreaPage({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state } = await params;
  const area = serviceAreaBySlug(state);
  if (!area) notFound();

  const others = serviceAreas.filter((a) => a.slug !== area.slug);

  return (
    <>
      <PageHero
        eyebrow="Service Area"
        title={area.name}
        subtitle={area.tagline}
        image={area.image}
      />

      {/* Intro + cities */}
      <section className="bg-white py-20">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <SectionHeading
              align="left"
              eyebrow={`Serving ${area.name}`}
              title={`One crew for the whole move in ${area.name}`}
              subtitle={area.intro}
            />
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-stone-500">
                Areas we cover in {area.name}
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {area.cities.map((city) => (
                  <span
                    key={city}
                    className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-semibold text-forest-800 shadow-sm"
                  >
                    <MapPinIcon className="h-4 w-4 text-action" />
                    {city}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-sm text-stone-500">
                Based in {site.base}{" "}and often traveling as far as 200
                miles — if you don&apos;t see your town, call and ask.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* What we handle */}
      <section className="bg-cream bg-topo py-20">
        <Container>
          <SectionHeading
            eyebrow="What we do"
            title={`Full-service in ${area.name}`}
            subtitle="From grading the pad to setting the home level and anchored, you don't have to juggle three contractors and hope they get it right."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {offerings.map(({ icon: Icon, title, href, body }) => (
              <Link
                key={title}
                href={href}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-stone-200/80 bg-white p-7 shadow-sm ring-1 ring-black/[0.03] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:ring-forest-600/20"
              >
                <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-forest-600 to-action opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-forest-600 to-forest-800 text-white shadow-md shadow-forest-900/20">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-stone-900">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">
                  {body}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-forest-700">
                  Learn more
                  <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Other service areas */}
      <section className="bg-white py-16">
        <Container>
          <h2 className="text-center text-sm font-bold uppercase tracking-wider text-stone-500">
            We also serve
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {others.map((a) => (
              <Link
                key={a.slug}
                href={`/service-area/${a.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-5 py-2.5 text-sm font-semibold text-forest-800 shadow-sm transition-colors hover:border-forest-600/40 hover:text-forest-700"
              >
                <MapPinIcon className="h-4 w-4 text-action" />
                {a.name}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-forest-900 py-16 text-white">
        <Container className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Moving a home in {area.name}?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-forest-100">
            Tell us about both sites and we&apos;ll walk the route and give you a
            real number.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/contact" withArrow>
              Request a Quote
            </Button>
            {site.phones.map((phone) => (
              <Button
                key={phone.label}
                href={telHref(phone.number)}
                variant="outline"
              >
                <PhoneIcon className="h-4 w-4" />
                {phone.label}: {phone.number}
              </Button>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
