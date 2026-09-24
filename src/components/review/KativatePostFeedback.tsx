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
  "Dark grounds: two options on Deep Wine. Emerald arms stay strictly on palette with softer contrast. Platinum arms give the strongest contrast. A monogram on Emerald Black is also included.",
];

type Asset = { label: string; note: string; file: string };

const monograms: Asset[] = [
  { label: "Light", note: "White ground; stem Deep Wine, arms Emerald Black, swoosh Graphite Silver.", file: "mono-light" },
  { label: "Dark Wine, emerald arms", note: "Deep Wine ground; stem Pure White, arms Emerald Black, swoosh Graphite Silver.", file: "mono-dark-wine" },
  { label: "Dark Wine, platinum arms", note: "Deep Wine ground; stem Pure White, arms Platinum, swoosh Graphite Silver.", file: "mono-dark-wine-platinum" },
  { label: "Dark Emerald", note: "Emerald Black ground; stem Deep Wine, arms Platinum, swoosh Graphite Silver.", file: "mono-dark-emerald" },
];

const wordmarks: Asset[] = [
  { label: "Light", note: "White ground; letters Deep Wine, K in light monogram colors.", file: "wordmark-light" },
  { label: "Dark, emerald arms", note: "Deep Wine ground; letters Pure White.", file: "wordmark-dark" },
  { label: "Dark, platinum arms", note: "Deep Wine ground; letters Pure White, platinum arms.", file: "wordmark-dark-platinum" },
];

const base = "/kativate/final/";

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

      <section aria-labelledby="pf-mono">
        <h2 id="pf-mono" className="mb-4 text-2xl font-semibold">Monogram</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {monograms.map((a) => <AssetCard key={a.file} asset={a} />)}
        </div>
      </section>

      <section aria-labelledby="pf-word">
        <h2 id="pf-word" className="mb-4 text-2xl font-semibold">Wordmark</h2>
        <div className="grid gap-5 lg:grid-cols-3">
          {wordmarks.map((a) => <AssetCard key={a.file} asset={a} wide />)}
        </div>
      </section>

      <section aria-labelledby="pf-board">
        <h2 id="pf-board" className="mb-4 text-2xl font-semibold">Full review board</h2>
        <div className="overflow-hidden rounded-lg border border-border bg-card p-3">
          <img src={`${base}presentation-board.png`} alt="Kativate final direction review board" loading="lazy" className="h-auto w-full object-contain" />
        </div>
        <div className="mt-3"><DlLink href={`${base}presentation-board.png`} label="Download PNG" /></div>
      </section>

      <p className="border-t border-border pt-6 text-sm text-muted-foreground">Internal review only. Not for publication.</p>
    </div>
  </div>
);

export default KativatePostFeedback;
