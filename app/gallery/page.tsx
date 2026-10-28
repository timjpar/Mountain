import type { Metadata } from "next";
import { Container, Button } from "../components/ui";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Real mobile home moves and setups by Mountain Movers LLC across Tennessee, North Carolina, Virginia, Georgia, and South Carolina.",
};

// Our own photos only — no stock images in the gallery.
const photos: { src: string; alt: string }[] = [
  { src: "/photos/hero-volvo-porch.jpg", alt: "Mountain Movers truck delivering a new home with porch under oversize-load permit" },
  { src: "/photos/move-cabin-paved.jpg", alt: "Oversize load with amber beacons and width flags on a paved road" },
  { src: "/photos/equip-tug-lot.jpg", alt: "House tug staged on a level gravel lot, crew member in hi-vis" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Real homes, real moves"
        subtitle="A look at the homes we've moved, graded, and set — permitted, escorted, and finished right."
        image="/photos/move-cabin-paved.jpg"
      />

      <section className="py-16">
        <Container>
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
            {photos.map((photo) => (
              <figure
                key={photo.src}
                className="overflow-hidden rounded-xl border border-stone-200 bg-stone-100 shadow-sm break-inside-avoid"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-forest-900 py-16 text-white">
        <Container className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Your home could be next
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-forest-100">
            Tell us about your move and we&apos;ll tell you what it takes.
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
