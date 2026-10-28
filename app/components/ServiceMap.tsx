import { serviceAreas, cityCoords } from "../serviceAreas";

// Stylized inline-SVG map of the service area — no map library or tiles.
// Equirectangular projection, longitude scaled by cos(36°) so distances read
// roughly true at this latitude. Borders are simplified, not survey-accurate.

const BOUNDS = { west: -86.2, east: -79.8, south: 34.1, north: 37.3 };
const SCALE = 160; // px per degree of latitude
const LNG_SCALE = SCALE * Math.cos((36 * Math.PI) / 180);
const WIDTH = (BOUNDS.east - BOUNDS.west) * LNG_SCALE;
const HEIGHT = (BOUNDS.north - BOUNDS.south) * SCALE;

const project = (lat: number, lng: number) => ({
  x: (lng - BOUNDS.west) * LNG_SCALE,
  y: (BOUNDS.north - lat) * SCALE,
});

const line = (points: [number, number][]) =>
  points
    .map(([lat, lng], i) => {
      const { x, y } = project(lat, lng);
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");

// [lat, lng] polylines for the state lines inside the frame.
const borders: [number, number][][] = [
  // TN / KY–VA north line, continuing as the NC / VA line
  [[36.68, -86.2], [36.6, -83.68], [36.6, -81.68], [36.55, -79.8]],
  // TN / NC along the Blue Ridge
  [
    [36.59, -81.68], [36.29, -81.93], [36.12, -82.03], [36.07, -82.42],
    [35.97, -82.61], [35.79, -82.97], [35.72, -83.27], [35.56, -83.5],
    [35.51, -83.88], [35.29, -84.04], [35.22, -84.29], [34.99, -84.32],
  ],
  // TN south line (AL / GA), then NC / GA
  [[34.99, -86.2], [34.99, -83.11]],
  // NC / SC
  [[34.99, -83.11], [35.21, -82.3], [35.19, -81.04], [35.1, -80.93], [34.94, -80.78], [34.8, -79.8]],
  // GA / SC (Chattooga / Savannah rivers)
  [[34.99, -83.11], [34.73, -83.34], [34.47, -82.87], [34.1, -82.55]],
  // GA / AL
  [[34.99, -85.61], [34.1, -85.48]],
  // VA / KY–WV
  [[36.6, -83.68], [36.77, -83.13], [37.3, -82.4]],
];

const stateLabels: { name: string; lat: number; lng: number }[] = [
  { name: "Tennessee", lat: 35.6, lng: -85.2 },
  { name: "North Carolina", lat: 35.55, lng: -80.85 },
  { name: "Virginia", lat: 37.05, lng: -80.9 },
  { name: "Georgia", lat: 34.3, lng: -84.4 },
  { name: "South Carolina", lat: 34.35, lng: -81.4 },
];

const BASE = { lat: 35.97, lng: -83.19 }; // Newport, TN

export function ServiceMap({ className = "" }: { className?: string }) {
  const pins = serviceAreas.flatMap((area) =>
    area.cities
      .map((city) => ({ city, coords: cityCoords[`${area.name}/${city}`] }))
      .filter((p) => p.coords && p.city !== "Newport")
      .map((p) => ({ city: p.city, ...project(p.coords[0], p.coords[1]) })),
  );
  const base = project(BASE.lat, BASE.lng);

  return (
    <figure className={`mx-auto max-w-4xl ${className}`}>
      <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
        <svg
          viewBox={`0 0 ${WIDTH.toFixed(0)} ${HEIGHT.toFixed(0)}`}
          role="img"
          aria-label="Map of the communities Mountain Movers serves across Tennessee, North Carolina, Virginia, Georgia, and South Carolina"
          className="block h-auto w-full"
        >
          <rect width="100%" height="100%" className="fill-forest-50" />
          {borders.map((b, i) => (
            <path
              key={i}
              d={line(b)}
              fill="none"
              className="stroke-forest-700/35"
              strokeWidth={2}
              strokeLinejoin="round"
              strokeDasharray="6 5"
            />
          ))}
          {stateLabels.map((s) => {
            const { x, y } = project(s.lat, s.lng);
            return (
              <text
                key={s.name}
                x={x}
                y={y}
                textAnchor="middle"
                className="fill-forest-800/60 font-display text-[22px] font-semibold uppercase tracking-widest"
              >
                {s.name}
              </text>
            );
          })}
          {pins.map((p) => (
            <g key={p.city + p.x}>
              <circle cx={p.x} cy={p.y} r={7} className="fill-action stroke-forest-900" strokeWidth={2} />
              <title>{p.city}</title>
            </g>
          ))}
          <g>
            <circle cx={base.x} cy={base.y} r={14} className="fill-forest-700 stroke-white" strokeWidth={3} />
            <text
              x={base.x + 20}
              y={base.y - 14}
              className="fill-forest-900 text-[18px] font-bold"
            >
              Newport, TN — home base
            </text>
          </g>
        </svg>
      </div>
      <figcaption className="mt-3 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-sm text-stone-600">
        <span className="inline-flex items-center gap-2">
          <span className="h-3 w-3 rounded-full border-2 border-forest-900 bg-action" />
          Communities we serve
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-forest-700" />
          Home base
        </span>
      </figcaption>
    </figure>
  );
}
