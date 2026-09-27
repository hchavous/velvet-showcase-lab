import { Download } from "lucide-react";

const palette = [
  { name: "Deep Wine", hex: "#4A0F1C" },
  { name: "Emerald Black", hex: "#063D32" },
  { name: "Platinum", hex: "#E6E8EB" },
  { name: "Graphite Silver", hex: "#9AA0A6" },
  { name: "Pure White", hex: "#FFFFFF" },
];

const changes = [
  "Monogram: the B K monogram recolored to the D palette. Deep Wine stem, Emerald Black arms, Graphite Silver swoosh.",
  "Wordmark: the stacked K above Kativate is removed. The monogram K now replaces the first letter of Kativate, matched to the letter height and baseline, with spacing tightened so it reads as one word.",
  "Masters: the logo now ships as transparent color, black and white masters for both the monogram and the wordmark, tested on a range of neutral grounds.",
];

type Asset = { label: string; note: string; file: string };
type MasterAsset = Asset & { wide?: boolean; dark?: boolean };

const base = "/kativate/final/";
const neutralBase = "/kativate/final-neutral/";

const primaryMonogram: Asset = {
  label: "Monogram, color",
  note: "White ground; stem Deep Wine, arms Emerald Black, swoosh Graphite Silver.",
  file: "mono-light",
};

const primaryWordmark: Asset = {
  label: "Wordmark, color",
  note: "White ground; letters Deep Wine, K in the monogram colors.",
  file: "wordmark-light",
};

const masters: MasterAsset[] = [
  { label: "Monogram, color", note: "Transparent. Deep Wine, Emerald Black and Graphite Silver.", file: "mono-color" },
  { label: "Monogram, black", note: "Transparent. Single color black.", file: "mono-black" },
  { label: "Monogram, white", note: "Transparent. Single color white, shown here on a dark card.", file: "mono-white", dark: true },
  { label: "Wordmark, color", note: "Transparent. Deep Wine letters with the color monogram K.", file: "wordmark-color", wide: true },
  { label: "Wordmark, black", note: "Transparent. Single color black.", file: "wordmark-black", wide: true },
  { label: "Wordmark, white", note: "Transparent. Single color white, shown here on a dark card.", file: "wordmark-white", wide: true, dark: true },
];

const sheets = [
  { file: "contact-sheet-a-mono-bw.png", caption: "Monogram, black and white on 18 neutral grounds." },
  { file: "contact-sheet-b-wordmark-bw.png", caption: "Wordmark, black and white on 18 neutral grounds." },
  { file: "contact-sheet-c-color-light-grounds.png", caption: "Color logo on light and neutral grounds." },
  { file: "contact-sheet-d-masters-overview.png", caption: "Transparent masters overview." },
];

const usageNotes = [
  "Use the white logo on slate and darker, and the black logo on mid greys and lighter.",
  "The color logo reads best on cream, off-white, ivory and white. The silver swoosh gets faint on silver, sand and greige.",
  "The masters are transparent and work on any background.",
];

const DlLink = ({ href, label }: { href: string; label: string }) => (
  <a href={href} download className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline">
    <Download className="h-4 w-4" />
    {label}
  </a>
);

const AssetCard = ({ asset, wide }: { asset: Asset; wide?: boolean }) => (
  <figure className="overflow-hidden rounded-lg border border-border bg-card shadow-sm">
    <div className={`flex items-center justify-center border-b border-border bg-muted/40 p-3 ${wide ? "aspect-[8/3]" : "aspect-square"}`}>
      <img src={`${base}${asset.file}.png`} alt={`Kativate ${wide ? "wordmark" : "monogram"} ${asset.label}`} loading="lazy" className="h-full w-full object-contain" />
    </div>
    <figcaption className="space-y-2 p-4">
      <p className="font-semibold text-card-foreground">{asset.label}</p>
      <p className="text-sm leading-relaxed text-muted-foreground">{asset.note}</p>
      <div className="flex flex-wrap gap-4 pt-1">
        <DlLink href={`${base}${asset.file}.png`} label="Download PNG" />
        <DlLink href={`${base}${asset.file}.svg`} label="Download SVG" />
      </div>
    </figcaption>
  </figure>
);

const MasterCard = ({ asset }: { asset: MasterAsset }) => (
  <figure className="overflow-hidden rounded-lg border border-border bg-card shadow-sm">
    <div
      className={`flex items-center justify-center border-b border-border p-4 ${asset.wide ? "aspect-[8/3]" : "aspect-square"}`}
      style={{ backgroundColor: asset.dark ? "#222222" : "#FFFFFF" }}
    >
      <img src={`${neutralBase}${asset.file}.png`} alt={`Kativate ${asset.label} master`} loading="lazy" className="h-full w-full object-contain" />
    </div>
    <figcaption className="space-y-2 p-4">
      <p className="font-semibold text-card-foreground">{asset.label}</p>
      <p className="text-sm leading-relaxed text-muted-foreground">{asset.note}</p>
      <div className="flex flex-wrap gap-4 pt-1">
        <DlLink href={`${neutralBase}${asset.file}.png`} label="Download PNG" />
        <DlLink href={`${neutralBase}${asset.file}.svg`} label="Download SVG" />
      </div>
    </figcaption>
  </figure>
);

const KativatePostFeedback = () => (
  <div className="container mx-auto px-4 py-12 md:py-16" role="tabpanel">
    <div className="mx-auto max-w-6xl space-y-14">
      <header className="max-w-3xl">
        <p className="mb-3 text-xs font-semibold uppercase text-primary">Post feedback</p>
        <h1 className="mb-5 text-4xl font-semibold md:text-5xl">Kativate final direction</h1>
        <p className="text-lg leading-relaxed text-muted-foreground">
          Based on Kateri's feedback, the direction pairs the Modern Luxe (B) artwork and type with the Ultra Modern Luxe (D) color palette. All artwork is the original vector, recolored and refined, not redrawn.
        </p>
      </header>

      <section aria-labelledby="pf-palette">
        <h2 id="pf-palette" className="mb-4 text-2xl font-semibold">Palette</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {palette.map((c) => (
            <div key={c.hex} className="overflow-hidden rounded-lg border border-border bg-card">
              <div className="h-20 border-b border-border" style={{ backgroundColor: c.hex }} />
              <div className="p-3">
                <p className="text-sm font-semibold">{c.name}</p>
                <p className="font-mono text-xs text-muted-foreground">{c.hex}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="pf-changes">
        <h2 id="pf-changes" className="mb-4 text-2xl font-semibold">What changed</h2>
        <ul className="max-w-3xl list-disc space-y-3 pl-5 leading-relaxed text-muted-foreground">
          {changes.map((c) => <li key={c}>{c}</li>)}
        </ul>
      </section>

      <section aria-labelledby="pf-primary">
        <h2 id="pf-primary" className="mb-4 text-2xl font-semibold">Primary color logos</h2>
        <div className="grid gap-5 md:grid-cols-3">
          <AssetCard asset={primaryMonogram} />
          <div className="md:col-span-2">
            <AssetCard asset={primaryWordmark} wide />
          </div>
        </div>
      </section>

      <section aria-labelledby="pf-masters">
        <h2 id="pf-masters" className="mb-2 text-2xl font-semibold">Master files</h2>
        <p className="mb-4 max-w-3xl leading-relaxed text-muted-foreground">
          Transparent PNG and SVG masters in color, black and white. The white masters are shown on a dark card so they stay visible.
        </p>
        <div className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {masters.filter((m) => !m.wide).map((m) => <MasterCard key={m.file} asset={m} />)}
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {masters.filter((m) => m.wide).map((m) => <MasterCard key={m.file} asset={m} />)}
          </div>
        </div>
      </section>

      <section aria-labelledby="pf-grounds">
        <h2 id="pf-grounds" className="mb-4 text-2xl font-semibold">Neutral grounds</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {sheets.map((s) => (
            <figure key={s.file} className="overflow-hidden rounded-lg border border-border bg-card shadow-sm">
              <div className="border-b border-border bg-muted/40 p-3">
                <img src={`${neutralBase}${s.file}`} alt={s.caption} loading="lazy" className="h-auto w-full object-contain" />
              </div>
              <figcaption className="space-y-2 p-4">
                <p className="text-sm leading-relaxed text-card-foreground">{s.caption}</p>
                <DlLink href={`${neutralBase}${s.file}`} label="Download PNG" />
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section aria-labelledby="pf-usage">
        <h2 id="pf-usage" className="mb-4 text-2xl font-semibold">Usage notes</h2>
        <ul className="max-w-3xl list-disc space-y-3 pl-5 leading-relaxed text-muted-foreground">
          {usageNotes.map((n) => <li key={n}>{n}</li>)}
        </ul>
      </section>

      <section aria-labelledby="pf-pack" className="rounded-lg border border-border bg-card p-6 shadow-sm">
        <h2 id="pf-pack" className="mb-2 text-2xl font-semibold">Full logo pack</h2>
        <p className="mb-4 max-w-3xl leading-relaxed text-muted-foreground">
          Every master, contact sheet and sample in one download.
        </p>
        <DlLink href={`${neutralBase}Kativate_Neutral_Logo_Pack.zip`} label="Download full pack (ZIP, 4 MB)" />
      </section>

      <p className="border-t border-border pt-6 text-sm text-muted-foreground">Internal review only. Not for publication.</p>
    </div>
  </div>
);

export default KativatePostFeedback;
