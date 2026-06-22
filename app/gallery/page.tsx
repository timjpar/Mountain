import type { Metadata } from "next";
import { Container, Button } from "../components/ui";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Real mobile home moves and setups by Mountain Movers LLC across the mountains of Tennessee, North Carolina, and beyond.",
};

const photos: { src: string; alt: string }[] = [
  { src: "/photos/move-mountain-road.jpg", alt: "Moving a home along a mountain road at sunset" },
  { src: "/photos/move-blue-sky.jpg", alt: "Single-wide on the road under a clear blue sky" },
  { src: "/photos/move-road-mountains.jpg", alt: "Home rounding a bend with mountains behind" },
  { src: "/photos/move-oversize-highway.jpg", alt: "Oversize-load toter hauling a double-wide on the highway" },
  { src: "/photos/move-toter-woods.jpg", alt: "Red toter pulling a home through a wooded road" },
  { src: "/photos/move-through-trees.jpg", alt: "Maneuvering a home between trees" },
  { src: "/photos/move-creek.jpg", alt: "Crossing a creek with a home on the trailer" },
  { src: "/photos/move-bridge.jpg", alt: "Toter truck guiding a home across a small bridge" },
  { src: "/photos/ridge-set-dusk.jpg", alt: "Setting a home on a mountain ridge at dusk" },
  { src: "/photos/ridge-pad-dusk.jpg", alt: "Home on a ridge-top pad with mountain views" },
  { src: "/photos/setup-piers.jpg", alt: "Home set on tall block piers" },
  { src: "/photos/setup-doublewide.jpg", alt: "Double-wide set on blocks in a field" },
  { src: "/photos/setup-footers.jpg", alt: "Concrete footers laid out under a home" },
  { src: "/photos/setup-join.jpg", alt: "Double-wide sections being joined" },
  { src: "/photos/setup-flowers.jpg", alt: "Finished set in a field of wildflowers" },
  { src: "/photos/setup-field-dusk.jpg", alt: "Home set in an open field at dusk" },
  { src: "/photos/grade-gravel-pad.jpg", alt: "Graded gravel pad ready for a home" },
  { src: "/photos/used-home.jpg", alt: "Used single-wide staged for transport" },
  { src: "/photos/equip-house-tug.jpg", alt: "Tracked house tug used to move homes" },
  { src: "/photos/g-truck-lot.jpg", alt: "Toter truck hitched to a home in a lot" },
  { src: "/photos/g-row-homes.jpg", alt: "Row of homes set on blocks" },
  { src: "/photos/g-wrapped-move.jpg", alt: "Plastic-wrapped home being moved" },
  { src: "/photos/g-road-blue.jpg", alt: "Home on a road under blue skies" },
  { src: "/photos/g-hillside.jpg", alt: "Home set on a wooded hillside lot" },
  { src: "/photos/g-highway.jpg", alt: "Home traveling down a mountain highway" },
  { src: "/photos/g-park-delivery.jpg", alt: "Delivering a home into a mobile home park" },
  { src: "/photos/g-skidsteer-set.jpg", alt: "Skidsteer assisting with a home set" },
  { src: "/photos/winter-view.jpg", alt: "Mountain view in winter from a work site" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Real homes, real moves"
        subtitle="A look at the homes we've moved, graded, and set across the mountains."
        image="/photos/move-blue-sky.jpg"
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
