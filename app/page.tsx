import Link from "next/link";
import { site, telHref } from "./site";
import { stateSlug } from "./serviceAreas";
import { Container, SectionHeading, Button } from "./components/ui";
import { GoogleReviews } from "./components/GoogleReviews";
import { ServiceMap } from "./components/ServiceMap";
import {
  PhoneIcon,
  ShieldIcon,
  MapPinIcon,
  TruckIcon,
  CheckIcon,
  ArrowIcon,
} from "./components/icons";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <WhyUs />
      <ServiceArea />
      <ProcessTeaser />
      <Testimonials />
      <GoogleReviews />
      <CallToAction />
    </>
  );
}

/* ----------------------------------------------------------------- Hero */

const numberWords = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight"];

function Hero() {
  const primary = site.phones[0];
  return (
    <section className="relative isolate flex min-h-[88vh] items-end overflow-hidden bg-forest-950 text-white sm:items-center">
      {/* Phones get a tighter crop centered on the truck and its banner. */}
      <picture>
        <source media="(max-width: 639px)" srcSet="/photos/hero-volvo-porch-mobile.jpg" />
        <img
          src="/photos/hero-volvo-porch.jpg"
          alt="Mountain Movers truck delivering a new home under oversize-load permit"
          className="absolute inset-0 h-full w-full object-cover object-[30%_50%] sm:object-[60%_50%]"
        />
      </picture>
      {/* Bottom-anchored scrim keeps the top of the video clear — important on mobile. */}
      <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-forest-950 via-forest-950/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-950/55 via-transparent to-transparent" />
      <div className="pointer-events-none absolute -left-24 bottom-1/3 h-80 w-80 rounded-full bg-action/20 blur-[120px]" />

      <Container className="relative w-full pb-10 pt-24 sm:py-24">
        <p className="eyebrow-tab mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/25 px-3 py-1.5 text-xs text-forest-50 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-action" />
          Family-owned · Based in {site.base}
        </p>

        <h1 className="font-display max-w-2xl text-3xl font-bold uppercase leading-[0.95] tracking-tight text-shadow-hero sm:text-4xl lg:text-5xl">
          We move your home,
          <span className="text-action"> the safe way.</span>
        </h1>

        <p className="mt-4 max-w-md text-sm leading-relaxed text-forest-50 text-shadow-hero sm:text-base">
          {site.tagline} Licensed, bonded, and insured transport, grading, and
          setup across {numberWords[site.states.length] ?? site.states.length} states.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button href="/contact" withArrow>
            Request a Quote
          </Button>
          <Button href={telHref(primary.number)} variant="outline">
            <PhoneIcon className="h-4 w-4" />
            {primary.number}
          </Button>
        </div>

        <dl className="mt-12 hidden max-w-xl grid-cols-3 gap-6 border-t border-white/15 pt-8 sm:grid">
          {[
            { stat: String(site.states.length), label: "States Served" },
            { stat: "100%", label: "Permitted Moves" },
            { stat: "Safety", label: "First, Every Move" },
          ].map((item) => (
            <div key={item.label}>
              <dt className="font-display text-4xl font-bold text-action">{item.stat}</dt>
              <dd className="mt-1 text-sm text-forest-100">{item.label}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------- Trust bar */

function TrustBar() {
  return (
    <section className="border-b border-stone-200/70 bg-cream">
      <Container className="flex flex-col items-center gap-4 py-6 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-6 sm:gap-y-3">
        <span className="text-sm font-semibold uppercase tracking-wider text-stone-500">
          Fully credentialed
        </span>
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {site.credentials.map((c) => (
            <span
              key={c}
              className="inline-flex items-center gap-2 rounded-full border border-forest-100 bg-white px-4 py-2 text-sm font-bold text-forest-800 shadow-sm"
            >
              <ShieldIcon className="h-5 w-5 text-action" />
              {c}
            </span>
          ))}
          <Link
            href="/safety"
            className="inline-flex items-center gap-2 rounded-full border border-forest-700 bg-forest-700 px-4 py-2 text-sm font-bold text-white shadow-sm transition-colors hover:bg-forest-800"
          >
            <CheckIcon className="h-5 w-5 text-action" />
            Safety First
          </Link>
          <span className="inline-flex items-center gap-2 rounded-full border border-forest-100 bg-white px-4 py-2 text-sm font-bold text-forest-800 shadow-sm">
            <MapPinIcon className="h-5 w-5 text-action" />
            {site.base}
          </span>
        </div>
      </Container>
    </section>
  );
}

/* -------------------------------------------------------------- Services */

function Services() {
  const services = [
    {
      icon: TruckIcon,
      title: "Mobile Home Moving",
      href: "/process#moving",
      body: "Single-wides, double-wides, and modular sections — disconnected, permitted, escorted, and delivered safely to your site.",
    },
    {
      icon: ShieldIcon,
      title: "Site Prep & Grading",
      href: "/grading",
      body: "Code-required grading, footers, drainage, and french drains so your home passes inspection and power can be installed.",
    },
    {
      icon: CheckIcon,
      title: "Setup & Inspection",
      href: "/process#setup",
      body: "Blocking, leveling, anchoring, and tie-downs — set up to your state's code and ready for the inspector.",
    },
  ];

  return (
    <section className="bg-cream bg-topo py-20">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title="We manage the entire process"
          subtitle="From grading the pad to setting the home level and anchored, we're by your side every step of the way — no juggling three contractors."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map(({ icon: Icon, title, href, body }) => (
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
              <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">{body}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-forest-700">
                Learn more
                <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------------------------------------------------------- Why us */

function WhyUs() {
  const points = [
    "Every route surveyed and permitted before move day.",
    "Escort vehicles, oversize signage, and flags marking the full load width.",
    "Crews in hi-vis vests, hard hats, gloves, and eye protection.",
    "Equipment inspected and maintained before every job.",
    "Licensed, bonded, and insured — and family-owned, so you deal with the owners.",
  ];
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/photos/move-cabin-paved.jpg"
                alt="Oversize-load truck with amber beacons and width flags hauling a cabin on a paved road"
                className="aspect-[4/3] h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-xl border border-stone-200 bg-white px-4 py-3 shadow-lg">
              <ShieldIcon className="h-8 w-8 text-action" />
              <span className="text-sm font-bold leading-tight text-forest-800">
                Licensed, Bonded
                <br />& Insured
              </span>
            </div>
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Why Mountain Movers"
              title="Safety first, every move"
              subtitle="Safety is our first priority on every job. We plan each move, follow every permit, and bring the right equipment and a trained crew to do it right."
            />
            <ul className="mt-6 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex gap-3 text-stone-700">
                  <CheckIcon className="mt-0.5 h-5 w-5 flex-none text-forest-600" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/safety" variant="secondary" withArrow>
                Our safety practices
              </Button>
              <Button href="/about" variant="secondary">
                Meet the team
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ----------------------------------------------------------- Service area */

function ServiceArea() {
  return (
    <section className="bg-cream bg-topo py-20">
      <Container>
        <SectionHeading
          eyebrow="Service area"
          title="Where we work"
          subtitle="Based in Newport, Tennessee, serving communities across five states within about 200 miles."
        />
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {site.states.map((state) => (
            <Link
              key={state}
              href={`/service-area/${stateSlug(state)}`}
              className="group inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-5 py-2.5 text-sm font-semibold text-forest-800 shadow-sm transition-all hover:-translate-y-0.5 hover:border-forest-600/40 hover:text-forest-700 hover:shadow-md"
            >
              <MapPinIcon className="h-4 w-4 text-action" />
              {state}
              <ArrowIcon className="-ml-0.5 h-3.5 w-0 opacity-0 transition-all duration-300 group-hover:w-3.5 group-hover:opacity-100" />
            </Link>
          ))}
        </div>
        <ServiceMap className="mt-10" />
      </Container>
    </section>
  );
}

/* ---------------------------------------------------------- Testimonials */

// Hidden until real customer quotes are added to site.testimonials.
function Testimonials() {
  if (site.testimonials.length === 0) return null;
  return (
    <section className="bg-white py-20">
      <Container>
        <SectionHeading eyebrow="Testimonials" title="What our customers say" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {site.testimonials.map((t) => (
            <figure
              key={t.name + t.town}
              className="flex flex-col rounded-2xl border border-stone-200/80 bg-cream p-7 shadow-sm"
            >
              <blockquote className="flex-1 text-stone-700">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-5 text-sm font-bold text-forest-800">
                {t.name} · <span className="font-semibold text-stone-500">{t.town}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* -------------------------------------------------------- Process teaser */

function ProcessTeaser() {
  const steps = [
    { n: "A", t: "Site Prep & Grading", d: "Drainage, footers, and a level pad that passes code." },
    { n: "B", t: "Permits", d: "We handle moving permits and setup inspections." },
    { n: "C", t: "Inspection & Prep", d: "We make sure the home is safe to transport." },
    { n: "D", t: "Moving the Home", d: "Permitted, escorted, and flagged for the full load width." },
    { n: "E", t: "Setup & Tie-Down", d: "Set on block, leveled, anchored, and ready for inspection." },
  ];
  return (
    <section className="bg-forest-900 bg-topo-dark py-20 text-white">
      <Container>
        <SectionHeading
          dark
          eyebrow="How it works"
          title="Moving a home is not like moving a truck"
          subtitle="It takes the right equipment, the right permits, and experienced, safety-trained crews. Here's the full process."
        />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s) => (
            <li key={s.n} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <span className="text-3xl font-extrabold text-action">{s.n}</span>
              <h3 className="mt-2 font-bold">{s.t}</h3>
              <p className="mt-1 text-sm text-forest-100">{s.d}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 text-center">
          <Button href="/process" withArrow>
            See the full moving & setup process
          </Button>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------- CTA */

function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-forest-800">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/photos/stock-smokies-valley.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-20"
        loading="lazy"
      />
      <Container className="relative py-20 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Ready to move your home?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-forest-100">
          Get a quote, or call the line for your state. We&apos;ll walk the
          route and tell you exactly what it takes.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/contact" withArrow>
            Request a Quote
          </Button>
          {site.phones.map((phone) => (
            <Button key={phone.label} href={telHref(phone.number)} variant="outline">
              <PhoneIcon className="h-4 w-4" />
              {phone.label}: {phone.number}
            </Button>
          ))}
        </div>
      </Container>
    </section>
  );
}
