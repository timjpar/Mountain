import { site, telHref } from "./site";
import { Container, SectionHeading, Button } from "./components/ui";
import { GoogleReviews } from "./components/GoogleReviews";
import {
  PhoneIcon,
  ShieldIcon,
  MapPinIcon,
  TruckIcon,
  CheckIcon,
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
      <GoogleReviews />
      <CallToAction />
    </>
  );
}

/* ----------------------------------------------------------------- Hero */

function Hero() {
  const primary = site.phones[0];
  return (
    <section className="relative overflow-hidden bg-forest-900 text-white">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/photos/hero-cliff-sunset.jpg"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/80 to-forest-900/55" />

      <Container className="relative py-24 sm:py-32 lg:py-40">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-forest-100 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-action" />
          Family-owned · Based in {site.base}
        </p>

        <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight drop-shadow sm:text-5xl lg:text-6xl">
          We move your home,
          <span className="text-action"> the safe way.</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-forest-50 drop-shadow">
          {site.tagline} Licensed, bonded, and insured transport, grading, and
          setup across six states.
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

        <dl className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-white/15 pt-8">
          {[
            { stat: "6", label: "States Served" },
            { stat: "200mi", label: "Typical Reach" },
            { stat: "100%", label: "Licensed & Insured" },
          ].map((item) => (
            <div key={item.label}>
              <dt className="text-3xl font-extrabold text-action">{item.stat}</dt>
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
    <section className="border-b border-stone-200 bg-stone-50">
      <Container className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-5">
        <span className="text-sm font-semibold uppercase tracking-wider text-stone-500">
          Fully credentialed
        </span>
        {site.credentials.map((c) => (
          <span key={c} className="inline-flex items-center gap-2 text-base font-bold text-forest-800">
            <ShieldIcon className="h-5 w-5 text-forest-600" />
            {c}
          </span>
        ))}
        <span className="inline-flex items-center gap-2 text-base font-bold text-forest-800">
          <MapPinIcon className="h-5 w-5 text-forest-600" />
          {site.base}
        </span>
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
      body: "Single-wides, double-wides, and modular sections — disconnected, hauled, and delivered through mountains, valleys, and creeks.",
    },
    {
      icon: ShieldIcon,
      title: "Site Prep & Grading",
      body: "Code-required grading, footers, drainage, and french drains so your home passes inspection and power can be installed.",
    },
    {
      icon: CheckIcon,
      title: "Setup & Inspection",
      body: "Blocking, leveling, anchoring, and tie-downs — set up to your state's code and ready for the inspector.",
    },
  ];

  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title="One crew, the whole job"
          subtitle="From grading the pad to setting the home level and anchored, you don't have to juggle three contractors and hope they get it right."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group rounded-xl border border-stone-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-forest-600/40 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-forest-50 text-forest-700 transition-colors group-hover:bg-forest-700 group-hover:text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-stone-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">{body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------------------------------------------------------- Why us */

function WhyUs() {
  const points = [
    "We know the equipment, permits, and prep it takes to move safely.",
    "Licensed, bonded, and insured in several states — not just Tennessee.",
    "Family-owned: you deal with the owners, not a call center.",
    "We handle moving permits and setup inspections for you.",
  ];
  return (
    <section className="bg-stone-50 py-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/photos/hero-cliff-sunset.jpg"
              alt="Mountain Movers maneuvering a home along a mountain road at sunset"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Why Mountain Movers"
              title="The tools to get the job done"
              subtitle="Moving a home through this country is dangerous, technical work. We have the equipment and the experience to do it right."
            />
            <ul className="mt-6 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex gap-3 text-stone-700">
                  <CheckIcon className="mt-0.5 h-5 w-5 flex-none text-forest-600" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href="/about" variant="secondary" withArrow>
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
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Service area"
          title="Six states, one trusted crew"
          subtitle="Based in Newport, Tennessee and often traveling as far as 200 miles to get your home where it needs to go."
        />
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {site.states.map((state) => (
            <span
              key={state}
              className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-5 py-2.5 text-sm font-semibold text-forest-800 shadow-sm"
            >
              <MapPinIcon className="h-4 w-4 text-forest-600" />
              {state}
            </span>
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
    { n: "D", t: "Moving the Home", d: "The right trucks, equipment, and tree work to move it." },
    { n: "E", t: "Setup & Tie-Down", d: "Set on block, leveled, anchored, and ready for inspection." },
  ];
  return (
    <section className="bg-forest-900 py-20 text-white">
      <Container>
        <SectionHeading
          dark
          eyebrow="How it works"
          title="Moving a home is not like moving a truck"
          subtitle="It takes the right equipment, the right permits, and crews who know these mountains. Here's the full process."
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
        src="/photos/move-road-mountains.jpg"
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
