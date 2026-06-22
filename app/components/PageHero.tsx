import { Container } from "./ui";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
}) {
  return (
    <section className="relative overflow-hidden bg-forest-900 text-white">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/85 to-forest-900/60" />
      <Container className="relative py-16 sm:py-20">
        {eyebrow && (
          <p className="text-sm font-bold uppercase tracking-wider text-action">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-2 max-w-3xl text-3xl font-extrabold tracking-tight drop-shadow sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg text-forest-100 drop-shadow">
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  );
}
