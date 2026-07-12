// Self-hosted background video — native <video>, so there are no player
// controls, spinner, or third-party branding of any kind.
export function HeroVideo() {
  return (
    <video
      className="absolute inset-0 h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      poster="/photos/hero-cliff-sunset.jpg"
      aria-hidden="true"
    >
      <source src="/hero.mp4" type="video/mp4" />
    </video>
  );
}
