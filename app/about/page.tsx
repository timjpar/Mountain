import type { Metadata } from "next";
import { site, telHref } from "../site";
import { Container, SectionHeading, Button } from "../components/ui";
import { ShieldIcon, MapPinIcon, CheckIcon, PhoneIcon } from "../components/icons";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Mountain Movers LLC is a family-owned mobile home moving company based in Newport, Tennessee, licensed, bonded, and insured across several states.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A family-owned name you can trust with your home"
        image="/photos/setup-flowers.jpg"
      />

      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-lg leading-relaxed text-stone-700">
            <p>
              We are a family-owned business based in{" "}
              <strong className="text-stone-900">Newport, Tennessee</strong>, but
              often traveling as far as <strong className="text-stone-900">200
              miles</strong>. We know our business and everything it takes to get
              the job done safely.
            </p>
            <p className="mt-5">
              We are <strong className="text-stone-900">licensed, bonded, and
              insured</strong> in several states — not just Tennessee — so your
              home and property are protected from the first disconnect to the
              final tie-down.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
            {[
              { icon: MapPinIcon, label: "Based in Newport, TN" },
              { icon: ShieldIcon, label: "Licensed · Bonded · Insured" },
              { icon: CheckIcon, label: "Family-owned & operated" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-xl border border-stone-200 bg-stone-50 p-4 text-sm font-semibold text-forest-800"
              >
                <Icon className="h-6 w-6 flex-none text-forest-600" />
                {label}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-stone-50 py-20">
        <Container>
          <SectionHeading
            eyebrow="Meet the team"
            title="The people moving your home"
            subtitle="When you call Mountain Movers, you talk to the owners — the same people running the job site."
          />
          <div className="mx-auto mt-12 grid max-w-2xl gap-8 sm:grid-cols-2">
            {site.team.map((member) => (
              <figure
                key={member.name}
                className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={member.photo}
                  alt={member.name}
                  className="aspect-[4/5] w-full object-cover"
                  loading="lazy"
                />
                <figcaption className="p-5 text-center">
                  <span className="block text-lg font-bold text-stone-900">
                    {member.name}
                  </span>
                  <span className="block text-sm text-forest-600">
                    {member.role}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-forest-900 py-16 text-white">
        <Container className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight">
              Have a home that needs moving?
            </h2>
            <p className="mt-2 text-forest-100">
              Tell us about your move and we&apos;ll tell you what it takes.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" withArrow>
              Request a Quote
            </Button>
            <Button href={telHref(site.phones[0].number)} variant="outline">
              <PhoneIcon className="h-4 w-4" />
              {site.phones[0].number}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
