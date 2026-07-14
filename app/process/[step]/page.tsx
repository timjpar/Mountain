import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site, telHref } from "../../site";
import {
  processSteps,
  processStepBySlug,
  type ContentBlock,
} from "../../processSteps";
import { Container, Button } from "../../components/ui";
import { PageHero } from "../../components/PageHero";
import { CheckIcon, PhoneIcon } from "../../components/icons";

// Static export: prerender one page per step, nothing on demand.
export const dynamicParams = false;

export function generateStaticParams() {
  return processSteps.map((s) => ({ step: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ step: string }>;
}): Promise<Metadata> {
  const { step } = await params;
  const s = processStepBySlug(step);
  if (!s) return {};
  return {
    title: `${s.title} — Moving & Setup`,
    description: s.tagline,
  };
}

function Block({ block }: { block: ContentBlock }) {
  switch (block.kind) {
    case "p":
      return <p>{block.text}</p>;
    case "callout":
      return (
        <p className="rounded-lg border-l-4 border-action bg-action/10 p-4 text-stone-800">
          {block.text}
        </p>
      );
    case "checklist":
      return (
        <ul className="space-y-2.5">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3">
              <CheckIcon className="mt-0.5 h-5 w-5 flex-none text-forest-600" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "numbered":
      return (
        <ol className="grid gap-4 lg:grid-cols-2">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="flex gap-3 rounded-xl border border-stone-200 bg-white p-4 shadow-sm"
            >
              <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-forest-700 text-sm font-bold text-white">
                {i + 1}
              </span>
              <span className="text-sm leading-relaxed text-stone-700">
                {item}
              </span>
            </li>
          ))}
        </ol>
      );
    case "equipment":
      return (
        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-stone-500">
            Some of our equipment
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {block.items.map((item) => (
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
}

export default async function ProcessStepPage({
  params,
}: {
  params: Promise<{ step: string }>;
}) {
  const { step } = await params;
  const s = processStepBySlug(step);
  if (!s) notFound();

  const others = processSteps.filter((o) => o.slug !== s.slug);

  return (
    <>
      <PageHero
        eyebrow="Moving & Setup"
        title={s.title}
        subtitle={s.tagline}
        image={s.image}
      />

      {/* Detail */}
      <section className="bg-white py-20">
        <Container>
          <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-stone-700">
            <p className="text-xl font-semibold text-stone-900">{s.intro}</p>
            {s.content.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>
        </Container>
      </section>

      {/* Other steps */}
      <section className="bg-cream bg-topo py-16">
        <Container>
          <h2 className="text-center text-sm font-bold uppercase tracking-wider text-stone-500">
            The rest of the process
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/process/${o.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-5 py-2.5 text-sm font-semibold text-forest-800 shadow-sm transition-colors hover:border-forest-600/40 hover:text-forest-700"
              >
                <span className="text-forest-600">{o.letter}.</span>
                {o.name}
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button href="/process" variant="secondary" withArrow>
              Back to the full process
            </Button>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-forest-900 py-16 text-white">
        <Container className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Want an exact price for your move?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-forest-100">
            We&apos;ll come out, assess both sites, and give you a real number.
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
