import type { Metadata } from "next";
import Link from "next/link";
import { site, telHref } from "../site";
import { Container, SectionHeading, Button } from "../components/ui";
import { CheckIcon, PhoneIcon, RoadIcon, ShieldIcon, TruckIcon } from "../components/icons";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = {
  title: "Safety",
  description:
    "Safety is our first priority. How Mountain Movers plans, permits, escorts, and staffs every mobile home move — route surveys, pilot vehicles, PPE, traffic control, and equipment maintenance.",
};

const practices = [
  {
    icon: RoadIcon,
    title: "Route survey & permits",
    points: [
      "Every route is driven and surveyed before move day",
      "State oversize permits pulled for the exact route and travel times",
      "Tree limbs, overhead lines, and obstacles identified and cleared in advance",
    ],
  },
  {
    icon: TruckIcon,
    title: "Escort vehicles & marking",
    points: [
      "Pilot / escort vehicles with OVERSIZE LOAD signs and lights",
      "Red and orange flags marking the full width of the home",
      "Amber beacons and oversize banners on every tow vehicle",
    ],
  },
  {
    icon: ShieldIcon,
    title: "Personal protective equipment",
    points: [
      "Hi-vis vests on every crew member, on every job",
      "Hard hats, gloves, and eye protection during setup and rigging",
      "Steel-toe boots required on site",
    ],
  },
  {
    icon: CheckIcon,
    title: "Traffic control",
    points: [
      "Trained flaggers with STOP / SLOW paddles",
      "Cones and warning signs placed before traffic is stopped or directed",
      "Moves scheduled around peak traffic where permits allow",
    ],
  },
  {
    icon: TruckIcon,
    title: "Equipment maintenance",
    points: [
      "Trucks, toters, and house tugs inspected before every job",
      "Tires, hitches, lights, and brakes checked on the pre-trip walk-around",
      "Equipment kept clean and serviced on a regular schedule",
    ],
  },
  {
    icon: CheckIcon,
    title: "Home inspection before transport",
    points: [
      "Frame and I-beam checked for damage before we hitch up",
      "Utilities disconnected, skirting removed, and loose items secured",
      "Homes that aren't safe to move don't leave the lot",
    ],
    href: "/process/inspection",
  },
];

// Our own job-site photos — every crew member shown is in a hard hat and vest.
const crewPhotos = [
  {
    src: "/photos/crew-setup-piers.jpg",
    alt: "Crew in hard hats and hi-vis vests carrying block to set a home on piers",
    caption: "Carrying block to set a home on piers",
  },
  {
    src: "/photos/crew-ground-check.jpg",
    alt: "Two crew members in hard hats and hi-vis vests checking the ground along a home",
    caption: "Checking the ground along the home",
  },
  {
    src: "/photos/crew-door-ppe.jpg",
    alt: "Crew member in a hard hat, glasses, work gloves, and hi-vis vest working on a home's storm door",
    caption: "Hard hat, gloves, and vest for door work",
  },
  {
    src: "/photos/crew-blocks-truck.jpg",
    alt: "Crew member in a hard hat, hi-vis vest, and work gloves carrying wood blocking past a service truck",
    caption: "Carrying blocking from the service truck",
  },
];

export default function SafetyPage() {
  const primary = site.phones[0];
  return (
    <>
      <PageHero
        eyebrow="Safety"
        title="Safety is our first priority"
        subtitle="Every move is planned, permitted, escorted, and staffed by a crew in proper protective equipment, so your home, our team, and everyone on the road gets where they're going safely."
        image="/photos/crew-door-ppe-wide.jpg"
      />

      <section className="bg-cream bg-topo py-20">
        <Container>
          <SectionHeading
            eyebrow="How we work"
            title="Safety-first, standard practice"
            subtitle="These aren't extras. They're how every Mountain Movers job runs, from the first site visit to the final tie-down."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {practices.map(({ icon: Icon, title, points, href }) => (
              <div
                key={title}
                className="flex flex-col rounded-2xl border border-stone-200/80 bg-white p-7 shadow-sm ring-1 ring-black/[0.03]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-forest-600 to-forest-800 text-white shadow-md shadow-forest-900/20">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-stone-900">{title}</h3>
                <ul className="mt-3 flex-1 space-y-2">
                  {points.map((p) => (
                    <li key={p} className="flex gap-2.5 text-sm leading-relaxed text-stone-600">
                      <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-forest-600" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                {href && (
                  <Link href={href} className="mt-4 text-sm font-bold text-forest-700 hover:underline">
                    Our used-home inspection checklist →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <SectionHeading
            eyebrow="On the job"
            title="Hard hats and hi-vis on every crew"
            subtitle="Photos from our own job sites, not stock images."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {crewPhotos.map((photo) => (
              <figure
                key={photo.src}
                className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="aspect-[3/4] w-full object-cover"
                  loading="lazy"
                />
                <figcaption className="p-4 text-sm font-semibold text-forest-800">
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
              {/* Real flag footage; the still frame shows for reduced-motion visitors. */}
              <video
                src="/video/flag-wave.mp4"
                poster="/photos/flag-wave-poster.jpg"
                autoPlay
                muted
                loop
                playsInline
                aria-label="American flag flying against a cloudy sky"
                className="aspect-[4/5] w-full object-cover object-[50%_30%] motion-reduce:hidden"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/photos/flag-wave-poster.jpg"
                alt="American flag flying against a cloudy sky"
                className="hidden aspect-[4/5] w-full object-cover object-[50%_30%] motion-reduce:block"
                loading="lazy"
              />
            </div>
            <div>
              <SectionHeading
                align="left"
                eyebrow="Credentials"
                title="Licensed, bonded & insured"
                subtitle="We hold the registrations and state installer licenses required for the work we do in every state we serve."
              />
              <p className="mt-6 text-sm text-stone-600">
                A copy of our written safety program and certificates of insurance are
                available to customers, permitting offices, and insurance underwriters
                on request.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-forest-900 py-16 text-white">
        <Container className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight">
              Questions about how we&apos;ll move your home?
            </h2>
            <p className="mt-2 text-forest-100">
              We&apos;ll walk the route with you and explain every step.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
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
