import { site, telHref } from "./site";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <Services />
        <Process />
        <WhyUs />
        <ServiceArea />
        <Reviews />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

/* ----------------------------------------------------------------------- */
/* Header                                                                   */
/* ----------------------------------------------------------------------- */

function Header() {
  const primary = site.phones[0];
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <MountainMark className="h-8 w-8 text-forest-700" />
          <span className="text-base font-extrabold uppercase leading-none tracking-tight text-forest-800 sm:text-lg">
            Mountain Movers
            <span className="block text-[10px] font-semibold tracking-[0.2em] text-stone-500">
              MOBILE HOMES
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-stone-700 md:flex">
          <a href="#services" className="transition-colors hover:text-forest-700">
            Services
          </a>
          <a href="#process" className="transition-colors hover:text-forest-700">
            What It Takes
          </a>
          <a href="#area" className="transition-colors hover:text-forest-700">
            Service Area
          </a>
          <a href="#reviews" className="transition-colors hover:text-forest-700">
            Reviews
          </a>
        </nav>

        <a
          href={telHref(primary.number)}
          className="inline-flex items-center gap-2 rounded-md bg-action px-4 py-2 text-sm font-bold text-stone-900 shadow-sm transition-colors hover:bg-action-dark"
        >
          <PhoneIcon className="h-4 w-4" />
          <span className="hidden sm:inline">{primary.number}</span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>
    </header>
  );
}

/* ----------------------------------------------------------------------- */
/* Hero                                                                     */
/* ----------------------------------------------------------------------- */

function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-forest-800 text-white"
    >
      {/* layered mountain silhouettes */}
      <RidgeBackdrop />

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:py-32">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-forest-100">
          <span className="h-1.5 w-1.5 rounded-full bg-action" />
          Serving {site.serviceArea}
        </p>

        <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
          We move your home,
          <span className="text-action"> the safe way.</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-forest-100">
          {site.tagline} Licensed, bonded, and insured transport for mobile and
          manufactured homes across the mountains of {site.serviceArea}.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href="#quote"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-action px-6 py-3.5 text-base font-bold text-stone-900 shadow-lg transition-colors hover:bg-action-dark"
          >
            Get a Free Quote
            <ArrowIcon className="h-4 w-4" />
          </a>
          <a
            href="#process"
            className="inline-flex items-center justify-center rounded-md border border-white/25 bg-white/5 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
          >
            See What It Takes
          </a>
        </div>

        <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8">
          {[
            { stat: "2", label: "States Covered" },
            { stat: "100%", label: "Licensed & Insured" },
            { stat: "Any", label: "Terrain Handled" },
          ].map((item) => (
            <div key={item.label}>
              <dt className="text-3xl font-extrabold text-action">
                {item.stat}
              </dt>
              <dd className="mt-1 text-sm text-forest-100">{item.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------- */
/* Trust bar                                                                */
/* ----------------------------------------------------------------------- */

function TrustBar() {
  return (
    <section className="border-b border-stone-200 bg-stone-50">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-4 py-5 sm:px-6">
        <span className="text-sm font-semibold uppercase tracking-wider text-stone-500">
          Fully credentialed
        </span>
        {site.credentials.map((c) => (
          <span
            key={c}
            className="inline-flex items-center gap-2 text-base font-bold text-forest-800"
          >
            <ShieldIcon className="h-5 w-5 text-forest-600" />
            {c}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------- */
/* Services                                                                 */
/* ----------------------------------------------------------------------- */

function Services() {
  const services = [
    {
      icon: TruckIcon,
      title: "Single & Double-Wide Transport",
      body: "Full transport of single-wides, double-wides, and modular sections — disconnect, haul, and set on your new site.",
    },
    {
      icon: RouteIcon,
      title: "Mountain & Backroad Routing",
      body: "We plan every route through grades, switchbacks, narrow bridges, and creek crossings so your home arrives intact.",
    },
    {
      icon: WrenchIcon,
      title: "Setup & Tie-Down",
      body: "Leveling, blocking, and anchoring on the new lot so your home is secure and ready the day it lands.",
    },
    {
      icon: PermitIcon,
      title: "Permits & Escorts",
      body: "We handle the oversize-load permits and pilot-car escorts required to move legally in NC and TN.",
    },
  ];

  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading
        eyebrow="What we do"
        title="Heavy-haul moving, start to finish"
        subtitle="One crew, one call — from disconnect at the old lot to a level set-up at the new one."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(({ icon: Icon, title, body }) => (
          <div
            key={title}
            className="group rounded-xl border border-stone-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-forest-600/40 hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-forest-50 text-forest-700 transition-colors group-hover:bg-forest-700 group-hover:text-white">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-lg font-bold text-stone-900">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-stone-600">
              {body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------- */
/* Process — "What It Takes"                                                */
/* ----------------------------------------------------------------------- */

function Process() {
  const steps = [
    {
      n: "01",
      title: "Walk the Site",
      body: "We assess both lots, measure clearances, and map the safest route before a single wheel turns.",
    },
    {
      n: "02",
      title: "Permit & Prep",
      body: "Oversize permits, escorts, and disconnect of utilities, skirting, and tie-downs are handled by our crew.",
    },
    {
      n: "03",
      title: "Haul the Home",
      body: "Experienced drivers move your home through mountain grades and tight turns with the right equipment.",
    },
    {
      n: "04",
      title: "Set & Secure",
      body: "We level, block, and anchor on the new site so your home is safe and ready to live in.",
    },
  ];

  return (
    <section id="process" className="bg-forest-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          dark
          eyebrow="What it takes"
          title="Moving a home is not like moving a truck"
          subtitle="It takes the right equipment, the right permits, and crews who know these mountains. Here's how every job runs."
        />

        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li key={step.n} className="relative">
              <span className="text-4xl font-extrabold text-action">
                {step.n}
              </span>
              <h3 className="mt-3 text-lg font-bold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-forest-100">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------- */
/* Why us                                                                   */
/* ----------------------------------------------------------------------- */

function WhyUs() {
  const points = [
    {
      icon: MountainMark,
      title: "Built for the terrain",
      body: "Traffic, mountains, valleys, and creeks — we move through the environments that stop other haulers.",
    },
    {
      icon: ShieldIcon,
      title: "Licensed, bonded & insured",
      body: "Your home and property are protected from the first disconnect to the final tie-down.",
    },
    {
      icon: ClockIcon,
      title: "Straight answers, on time",
      body: "Clear quotes, real scheduling, and a crew that shows up when we say we will.",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Why Mountain Movers"
            title="The tools to get the job done"
            subtitle="Moving a home through this country is dangerous work. We have the equipment and the experience to do it right — and the credentials to back it up."
          />
          <a
            href="#quote"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-forest-700 px-6 py-3.5 text-base font-bold text-white shadow-sm transition-colors hover:bg-forest-800"
          >
            Request a Quote
            <ArrowIcon className="h-4 w-4" />
          </a>
        </div>

        <ul className="space-y-6">
          {points.map(({ icon: Icon, title, body }) => (
            <li
              key={title}
              className="flex gap-4 rounded-xl border border-stone-200 bg-white p-5 shadow-sm"
            >
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-forest-50 text-forest-700">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-stone-900">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-stone-600">
                  {body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------- */
/* Service area                                                             */
/* ----------------------------------------------------------------------- */

function ServiceArea() {
  return (
    <section id="area" className="bg-stone-50">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="Service area"
          title="Two states. One crew that knows them."
          subtitle="Call the line for your state and we'll get you a quote. No job too far back in the hills."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {site.phones.map((phone) => (
            <a
              key={phone.label}
              href={telHref(phone.number)}
              className="group flex items-center justify-between rounded-xl border border-stone-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-forest-600/40 hover:shadow-md"
            >
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-stone-500">
                  {phone.label}
                </p>
                <p className="mt-1 text-2xl font-extrabold text-forest-800">
                  {phone.number}
                </p>
              </div>
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest-50 text-forest-700 transition-colors group-hover:bg-action group-hover:text-stone-900">
                <PhoneIcon className="h-5 w-5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------- */
/* Reviews                                                                  */
/* ----------------------------------------------------------------------- */

function Reviews() {
  const reviews = [
    {
      quote:
        "They moved our double-wide up a mountain road I didn't think a truck could fit on. Professional the whole way.",
      name: "Placeholder Customer",
      where: "Asheville, NC",
    },
    {
      quote:
        "Licensed, insured, and they handled every permit. Showed up on time and set the home level on the first try.",
      name: "Placeholder Customer",
      where: "Johnson City, TN",
    },
    {
      quote:
        "Fair price and no surprises. They walked the site first and told me exactly what it would take.",
      name: "Placeholder Customer",
      where: "Boone, NC",
    },
  ];

  return (
    <section id="reviews" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading
        eyebrow="Reviews"
        title="Trusted with homes across the mountains"
        subtitle="Replace these with real Google and Facebook reviews before launch."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {reviews.map((review, i) => (
          <figure
            key={i}
            className="flex flex-col rounded-xl border border-stone-200 bg-white p-6 shadow-sm"
          >
            <Stars className="text-action" />
            <blockquote className="mt-4 flex-1 text-stone-700">
              “{review.quote}”
            </blockquote>
            <figcaption className="mt-5 border-t border-stone-100 pt-4">
              <span className="block text-sm font-bold text-stone-900">
                {review.name}
              </span>
              <span className="block text-sm text-stone-500">
                {review.where}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------- */
/* CTA                                                                      */
/* ----------------------------------------------------------------------- */

function CallToAction() {
  return (
    <section id="quote" className="relative overflow-hidden bg-forest-800">
      <RidgeBackdrop />
      <div className="relative mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Ready to move your home?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-forest-100">
          Call the line for your state for a free, no-pressure quote. We&apos;ll
          walk the route and tell you exactly what it takes.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          {site.phones.map((phone) => (
            <a
              key={phone.label}
              href={telHref(phone.number)}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-action px-6 py-3.5 text-base font-bold text-stone-900 shadow-lg transition-colors hover:bg-action-dark"
            >
              <PhoneIcon className="h-4 w-4" />
              {phone.label}: {phone.number}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------- */
/* Footer                                                                   */
/* ----------------------------------------------------------------------- */

function Footer() {
  return (
    <footer className="bg-forest-900 text-forest-100">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <MountainMark className="h-8 w-8 text-action" />
              <span className="text-lg font-extrabold uppercase tracking-tight text-white">
                {site.name}
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              {site.tagline}
            </p>
            <div className="mt-5 flex gap-3">
              <SocialLink label="Facebook" href={site.social.facebook}>
                <FacebookIcon className="h-5 w-5" />
              </SocialLink>
              <SocialLink label="Instagram" href={site.social.instagram}>
                <InstagramIcon className="h-5 w-5" />
              </SocialLink>
              <SocialLink label="YouTube" href={site.social.youtube}>
                <YouTubeIcon className="h-5 w-5" />
              </SocialLink>
              <SocialLink label="Google" href={site.social.google}>
                <GoogleIcon className="h-5 w-5" />
              </SocialLink>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#services" className="hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white">
                  What It Takes
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#quote" className="hover:text-white">
                  Apply for a Job
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Call Us
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {site.phones.map((phone) => (
                <li key={phone.label}>
                  <span className="block text-xs uppercase tracking-wider text-forest-100/70">
                    {phone.label}
                  </span>
                  <a
                    href={telHref(phone.number)}
                    className="font-semibold text-white hover:text-action"
                  >
                    {phone.number}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-forest-100/70 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. {site.serviceArea}.
          </p>
          <p>{site.credentials.join(" · ")}</p>
        </div>
      </div>
    </footer>
  );
}

/* ----------------------------------------------------------------------- */
/* Shared building blocks                                                   */
/* ----------------------------------------------------------------------- */

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  dark = false,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  dark?: boolean;
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : ""}>
      <p
        className={`text-sm font-bold uppercase tracking-wider ${
          dark ? "text-action" : "text-forest-600"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl ${
          dark ? "text-white" : "text-stone-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            dark ? "text-forest-100" : "text-stone-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-action hover:text-stone-900"
    >
      {children}
    </a>
  );
}

/** Layered ridge silhouettes used behind dark sections. */
function RidgeBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <svg
        className="absolute bottom-0 left-0 h-full w-full opacity-[0.15]"
        viewBox="0 0 1200 400"
        preserveAspectRatio="xMidYMax slice"
        fill="none"
      >
        <path
          d="M0 400 L0 220 L180 110 L320 200 L470 90 L640 230 L780 130 L960 240 L1100 150 L1200 220 L1200 400 Z"
          fill="white"
        />
        <path
          d="M0 400 L0 300 L160 230 L340 320 L520 240 L700 330 L880 260 L1060 340 L1200 280 L1200 400 Z"
          fill="white"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}

/* ----------------------------------------------------------------------- */
/* Icons (inline SVG, no dependencies)                                       */
/* ----------------------------------------------------------------------- */

type IconProps = { className?: string };

function MountainMark({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 3.5l7 13a1 1 0 0 1-.87 1.5H4.37a1 1 0 0 1-.87-1.5l3.6-6.7 2.1 3.1 4.3-9.4zM8.4 11.4L5.2 17.3h6.4l-3.2-5.9z" />
    </svg>
  );
}

function PhoneIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .57 3.6 1 1 0 0 1-.25 1l-2.2 2.2z" />
    </svg>
  );
}

function ArrowIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function ShieldIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function TruckIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 6h11v9H3zM14 9h4l3 3v3h-7z" />
      <circle cx="7.5" cy="17.5" r="1.6" />
      <circle cx="17.5" cy="17.5" r="1.6" />
    </svg>
  );
}

function RouteIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="6" cy="19" r="2" />
      <circle cx="18" cy="5" r="2" />
      <path d="M8 19h7a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h7" />
    </svg>
  );
}

function WrenchIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14.7 6.3a4 4 0 0 1-5.4 5.4l-5.6 5.6a1.8 1.8 0 0 0 2.5 2.5l5.6-5.6a4 4 0 0 1 5.4-5.4l-2.6 2.6-1.4-1.4 2.6-2.6z" />
    </svg>
  );
}

function PermitIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M9 8h6M9 12h6M9 16h4" />
    </svg>
  );
}

function ClockIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function Stars({ className }: IconProps) {
  return (
    <div className={`flex gap-0.5 ${className ?? ""}`} aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2l2.9 6 6.6.6-5 4.3 1.5 6.5L12 16.9 5.9 19.4 7.4 12.9l-5-4.3 6.6-.6L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function FacebookIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14 9h2.5V6H14c-2 0-3.5 1.5-3.5 3.5V11H8v3h2.5v7h3v-7H16l.5-3h-3V9.5c0-.3.2-.5.5-.5z" />
    </svg>
  );
}

function InstagramIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YouTubeIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.5 8.2a2.5 2.5 0 0 0-1.7-1.8C18 6 12 6 12 6s-6 0-7.8.4A2.5 2.5 0 0 0 2.5 8.2 26 26 0 0 0 2.2 12a26 26 0 0 0 .3 3.8 2.5 2.5 0 0 0 1.7 1.8C6 18 12 18 12 18s6 0 7.8-.4a2.5 2.5 0 0 0 1.7-1.8 26 26 0 0 0 .3-3.8 26 26 0 0 0-.3-3.8zM10 15V9l5 3-5 3z" />
    </svg>
  );
}

function GoogleIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.5 12.2c0-.6-.05-1.2-.16-1.8H12v3.4h5.3a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.7 3-4.3 3-7.1zM12 22c2.7 0 5-.9 6.6-2.4l-3.2-2.5c-.9.6-2 1-3.4 1a6 6 0 0 1-5.6-4.1H3.1v2.6A10 10 0 0 0 12 22zM6.4 14a6 6 0 0 1 0-3.8V7.6H3.1a10 10 0 0 0 0 9zM12 6.1c1.5 0 2.8.5 3.8 1.5l2.8-2.8A10 10 0 0 0 3.1 7.6l3.3 2.6A6 6 0 0 1 12 6.1z" />
    </svg>
  );
}
