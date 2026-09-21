import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import ReviewPasswordGate, { REVIEW_ACCESS_KEY } from "@/components/review/ReviewPasswordGate";
import { usePageMeta } from "@/hooks/usePageMeta";
import { cn } from "@/lib/utils";

type Color = { name: string; hex: string; swatch: string };
type Direction = {
  id: string;
  letter: string;
  title: string;
  mood: string;
  colors: Color[];
  palette: string;
  wordmarks: { src: string; label: string; ground?: "light" | "dark" }[];
  monograms: { src: string; label: string; ground?: "light" | "dark" }[];
  video: string;
};

type ReviewTab = "first" | "post";

type PostReviewAsset = {
  src: string;
  label: string;
  detail: string;
  horizontal?: boolean;
};

const v2Path = (filename: string) => `/kativate/v2/${filename}`;

const postReviewSections: { id: string; title: string; intro: string; assets: PostReviewAsset[] }[] = [
  {
    id: "lead-lockups",
    title: "Lead lockups",
    intro: "The primary thin-line direction across the retained A and D palettes, shown in stacked and horizontal formats.",
    assets: [
      { src: v2Path("v2-01-thin-stack-palette-a.png"), label: "Thin stack · Palette A", detail: "Stacked thin sans lockup on the light A ground." },
      { src: v2Path("v2-02-thin-stack-palette-d.png"), label: "Thin stack · Palette D", detail: "Stacked thin sans lockup on the dark D ground." },
      { src: v2Path("v2-03-thin-horizontal-a.png"), label: "Thin horizontal · Palette A", detail: "Horizontal thin sans lockup on the light A ground.", horizontal: true },
      { src: v2Path("v2-07-thin-horizontal-d.png"), label: "Thin horizontal · Palette D", detail: "Horizontal thin sans lockup on the dark D ground.", horizontal: true },
    ],
  },
  {
    id: "serif-unique",
    title: "Serif unique",
    intro: "The distinctive serif treatment Kateri called out, paired with the dual-tone K.",
    assets: [
      { src: v2Path("v2-04-serif-unique-a.png"), label: "Serif unique · Palette A", detail: "Serif wordmark lockup with the dual-tone K." },
    ],
  },
  {
    id: "optional-tests",
    title: "Optional tests",
    intro: "Exploratory options kept separate so they do not dilute the thin modern lead direction.",
    assets: [
      { src: v2Path("v2-05-script-test-a.png"), label: "Script test · Palette A", detail: "Restrained professional script test." },
      { src: v2Path("v2-06-vision-motif-a.png"), label: "Vision motif · Palette A", detail: "Optional vision and aperture motif tied to the green." },
    ],
  },
  {
    id: "monograms",
    title: "Monograms",
    intro: "The dual-tone K and silver swoosh isolated for flexible small-format use.",
    assets: [
      { src: v2Path("v2-08-mono-a.png"), label: "K monogram · Palette A", detail: "Dual-tone monogram on the light A ground." },
      { src: v2Path("v2-09-mono-d.png"), label: "K monogram · Palette D", detail: "Dual-tone monogram on the dark D ground." },
    ],
  },
];

const feedbackSummary = [
  "Palettes A + D only",
  "Thin clean modern lead",
  "Dual-tone K + silver swoosh",
  "Thin sans stack and horizontal on A and D",
  "Serif unique lockup",
  "Script test (optional)",
  "Vision motif (optional)",
];

const directions: Direction[] = [
  {
    id: "classic-hospitality",
    letter: "A",
    title: "Classic Hospitality",
    mood: "Warm hotel / wedding energy. Safe for corporate and social events.",
    colors: [
      { name: "Burgundy", hex: "#6B1E2E", swatch: "bg-kativate-a-burgundy" },
      { name: "Deep Forest", hex: "#1F4D3A", swatch: "bg-kativate-a-forest" },
      { name: "Soft Sage", hex: "#A8B5A0", swatch: "bg-kativate-a-sage" },
      { name: "Warm Silver", hex: "#C5C8CC", swatch: "bg-kativate-a-silver" },
      { name: "Ivory", hex: "#F7F5F2", swatch: "bg-kativate-a-ivory" },
    ],
    palette: "/kativate/palette-a.png",
    wordmarks: [{ src: "/kativate/logo-a-wordmark.png", label: "A wordmark" }],
    monograms: [{ src: "/kativate/logo-a-mono.png", label: "A K monogram" }],
    video: "/kativate/kativate-a-classic-hospitality-intro.mp4",
  },
  {
    id: "modern-luxe",
    letter: "B",
    title: "Modern Luxe",
    mood: "Sharper and more contemporary. Strong for premium corporate and product covers.",
    colors: [
      { name: "Wine", hex: "#7A1F2B", swatch: "bg-kativate-b-wine" },
      { name: "Emerald", hex: "#0E5C4A", swatch: "bg-kativate-b-emerald" },
      { name: "Mist Green", hex: "#D5DFD6", swatch: "bg-kativate-b-mist" },
      { name: "Cool Silver", hex: "#B8BCC2", swatch: "bg-kativate-b-silver" },
      { name: "Pure White", hex: "#FFFFFF", swatch: "bg-kativate-white" },
    ],
    palette: "/kativate/palette-b.png",
    wordmarks: [{ src: "/kativate/logo-b-wordmark.png", label: "B wordmark" }],
    monograms: [{ src: "/kativate/logo-b-mono.png", label: "B K monogram" }],
    video: "/kativate/kativate-b-modern-luxe-intro.mp4",
  },
  {
    id: "soft-garden",
    letter: "C",
    title: "Soft Garden",
    mood: "Softer and more botanical. Best if the brand leans social / lifestyle events.",
    colors: [
      { name: "Mulberry", hex: "#5C1A2A", swatch: "bg-kativate-c-mulberry" },
      { name: "Olive Grove", hex: "#556B2F", swatch: "bg-kativate-c-olive" },
      { name: "Champagne", hex: "#E8E0D5", swatch: "bg-kativate-c-champagne" },
      { name: "Soft Silver", hex: "#D0D3D6", swatch: "bg-kativate-c-silver" },
      { name: "Cream", hex: "#FAF8F5", swatch: "bg-kativate-c-cream" },
    ],
    palette: "/kativate/palette-c.png",
    wordmarks: [{ src: "/kativate/logo-c-wordmark.png", label: "C wordmark" }],
    monograms: [{ src: "/kativate/logo-c-mono.png", label: "C K monogram" }],
    video: "/kativate/kativate-c-soft-garden-intro.mp4",
  },
  {
    id: "ultra-modern-luxe",
    letter: "D",
    title: "Ultra Modern Luxe",
    mood: "Darker, cleaner high-fashion / five-star minimalism.",
    colors: [
      { name: "Deep Wine", hex: "#4A0F1C", swatch: "bg-kativate-d-wine" },
      { name: "Emerald Black", hex: "#063D32", swatch: "bg-kativate-d-emerald" },
      { name: "Platinum", hex: "#E6E8EB", swatch: "bg-kativate-d-platinum" },
      { name: "Graphite Silver", hex: "#9AA0A6", swatch: "bg-kativate-d-graphite" },
      { name: "Pure White", hex: "#FFFFFF", swatch: "bg-kativate-white" },
    ],
    palette: "/kativate/palette-d.png",
    wordmarks: [
      { src: "/kativate/logo-d-wordmark-light.png", label: "D wordmark on light ground", ground: "light" },
      { src: "/kativate/logo-d-wordmark-dark.png", label: "D wordmark on dark ground", ground: "dark" },
    ],
    monograms: [
      { src: "/kativate/logo-d-mono-light.png", label: "D K monogram on light ground", ground: "light" },
      { src: "/kativate/logo-d-mono-dark.png", label: "D K monogram on dark ground", ground: "dark" },
    ],
    video: "/kativate/kativate-d-ultra-modern-luxe-intro.mp4",
  },
];

const LogoPanel = ({ src, label, ground }: { src: string; label: string; ground?: "light" | "dark" }) => (
  <figure className="space-y-3">
    <div
      className={cn(
        "aspect-square overflow-hidden rounded-lg border border-border/60",
        ground === "dark" ? "bg-kativate-d-wine" : "bg-kativate-a-ivory",
      )}
    >
      <img src={src} alt={label} className="h-full w-full object-contain" loading="lazy" />
    </div>
    <figcaption className="text-center text-sm text-muted-foreground">{label}</figcaption>
  </figure>
);

const DirectionSection = ({ direction }: { direction: Direction }) => (
  <section id={direction.id} className="scroll-mt-36 border-t border-border/60 py-16 md:py-24">
    <div className="mb-10 grid gap-5 md:grid-cols-[auto_1fr] md:items-start">
      <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary text-xl font-bold text-primary-foreground">
        {direction.letter}
      </div>
      <div>
        <p className="mb-2 text-xs font-semibold uppercase text-primary">Direction {direction.letter}</p>
        <h2 className="mb-3 text-3xl font-semibold md:text-4xl">{direction.title}</h2>
        <p className="max-w-2xl text-lg text-muted-foreground">{direction.mood}</p>
      </div>
    </div>

    <div className="mb-12">
      <h3 className="mb-5 text-lg font-semibold">Color system</h3>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {direction.colors.map((color) => (
          <div key={color.hex} className="overflow-hidden rounded-lg border border-border/60 bg-card">
            <div className={cn("h-24 border-b border-border/40", color.swatch)} aria-hidden="true" />
            <div className="p-3">
              <p className="text-sm font-semibold">{color.name}</p>
              <p className="font-mono text-xs text-muted-foreground">{color.hex}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="mb-12">
      <h3 className="mb-5 text-lg font-semibold">Palette board</h3>
      <div className="overflow-hidden rounded-lg border border-border/60 bg-card">
        <img
          src={direction.palette}
          alt={`${direction.title} palette board`}
          className="aspect-video h-auto w-full object-cover"
          loading="lazy"
        />
      </div>
    </div>

    <div className="mb-12 grid gap-8 lg:grid-cols-2">
      <div>
        <h3 className="mb-5 text-lg font-semibold">Wordmark + mark</h3>
        <div className={cn("grid gap-4", direction.wordmarks.length > 1 && "sm:grid-cols-2")}>
          {direction.wordmarks.map((asset) => <LogoPanel key={asset.src} {...asset} />)}
        </div>
      </div>
      <div>
        <h3 className="mb-5 text-lg font-semibold">K monogram</h3>
        <div className={cn("grid gap-4", direction.monograms.length > 1 && "sm:grid-cols-2")}>
          {direction.monograms.map((asset) => <LogoPanel key={asset.src} {...asset} />)}
        </div>
      </div>
    </div>

    <div>
      <h3 className="mb-5 text-lg font-semibold">Dramatic intro</h3>
      <div className="overflow-hidden rounded-lg border border-border/60 bg-card">
        <video
          className="aspect-video w-full object-cover"
          src={direction.video}
          aria-label={`${direction.title} dramatic brand intro`}
          autoPlay
          muted
          loop
          playsInline
          controls
          preload="metadata"
        >
          Your browser does not support video playback.
        </video>
      </div>
    </div>
  </section>
);

const PostReviewGallery = () => (
  <div role="tabpanel" id="post-review-panel" aria-labelledby="post-review-tab">
    <header className="mb-10 max-w-4xl">
      <p className="mb-3 text-xs font-semibold uppercase text-primary">Round 2 · after Kateri’s notes</p>
      <h1 className="mb-5 text-4xl font-semibold md:text-5xl">Post review / feedback</h1>
      <p className="text-lg leading-relaxed text-muted-foreground">
        Built from her written feedback: keep A + D, lead with thin modern lines, pull favorites into finished lockups (dual-tone K with silver, thin sans, serif unique). Script and vision motif are optional tests.
      </p>
    </header>

    <figure className="mb-10 overflow-hidden rounded-lg border border-border/60 bg-card p-2 shadow-sm sm:p-3">
      <img
        src={v2Path("v2-00-what-changed-summary.png")}
        alt="Summary of what changed after Kateri's notes"
        className="h-auto w-full rounded-md object-contain"
        loading="eager"
      />
    </figure>

    <aside className="mb-10 border-l-4 border-primary bg-card p-6 shadow-sm md:p-8" aria-labelledby="feedback-built-title">
      <p className="mb-2 text-xs font-semibold uppercase text-primary">Feedback translated</p>
      <h2 id="feedback-built-title" className="text-2xl font-semibold">What she asked for → what we built</h2>
      <p className="mt-3 max-w-4xl leading-relaxed text-muted-foreground">
        Round 2 narrows the first review into a focused system: only the A and D palettes remain, with the thin clean modern direction leading. The dual-tone K and silver swoosh now anchor thin sans stack and horizontal lockups on both grounds, plus the serif unique lockup. Script and vision motif versions remain clearly optional tests.
      </p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {feedbackSummary.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </aside>

    <nav aria-label="Post review sections" className="sticky top-16 z-40 -mx-4 border-y border-border/60 bg-background/90 px-4 py-3 backdrop-blur-lg">
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
        {postReviewSections.map((section) => (
          <a key={section.id} href={`#${section.id}`} className="rounded-md border border-border/60 bg-card px-2 py-2 text-center text-xs font-semibold transition-colors hover:border-primary/50 hover:text-primary sm:px-3 sm:text-sm">
            {section.title}
          </a>
        ))}
      </div>
    </nav>

    {postReviewSections.map((section) => (
      <section key={section.id} id={section.id} className="scroll-mt-36 border-t border-border/60 py-12 first:border-t-0 md:py-16">
        <div className="mb-7 max-w-3xl">
          <h2 className="text-3xl font-semibold md:text-4xl">{section.title}</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">{section.intro}</p>
        </div>
        <div className={cn("grid gap-8", section.assets.length > 1 && "lg:grid-cols-2")}>
          {section.assets.map((asset) => (
            <article key={asset.src} className={cn(section.assets.length === 1 && "max-w-3xl")}>
              <figure className="overflow-hidden rounded-lg border border-border/60 bg-card p-2 shadow-sm sm:p-3">
                <img src={asset.src} alt={asset.label} className={cn("h-auto w-full rounded-md object-contain", asset.horizontal ? "aspect-[2/1]" : "aspect-square")} loading="lazy" />
              </figure>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-semibold">{asset.label}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{asset.detail}</p>
                </div>
                <Button asChild variant="outline" size="sm" className="shrink-0 gap-2">
                  <a href={asset.src} download><Download className="h-4 w-4" /> Download PNG</a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>
    ))}
  </div>
);

const KativateReview = () => {
  usePageMeta(
    "Kativate Brand Review | Haven Chavous",
    "Private review of four early Kativate brand directions for Kateri Foley.",
  );
  const [unlocked, setUnlocked] = useState(() => sessionStorage.getItem(REVIEW_ACCESS_KEY) === "true");
  const [activeTab, setActiveTab] = useState<ReviewTab>("post");

  useEffect(() => {
    let robots = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    const created = !robots;
    if (!robots) {
      robots = document.createElement("meta");
      robots.name = "robots";
      document.head.appendChild(robots);
    }
    const previous = robots.content;
    robots.content = "noindex, nofollow";
    return () => {
      if (created) robots?.remove();
      else if (robots) robots.content = previous;
    };
  }, []);

  return (
    <Layout className="kativate-review-theme">
      {!unlocked ? (
        <ReviewPasswordGate
          title="Kativate brand review"
          buttonLabel="View brand directions"
          inputId="kativate-password"
          onUnlock={() => setUnlocked(true)}
        />
      ) : (
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10" role="tablist" aria-label="Kativate review round">
              <div className="grid grid-cols-2 rounded-lg border border-border/70 bg-card p-1 shadow-sm">
                <Button type="button" role="tab" id="first-review-tab" aria-controls="first-review-panel" aria-selected={activeTab === "first"} variant={activeTab === "first" ? "default" : "ghost"} onClick={() => setActiveTab("first")} className="h-auto min-h-10 w-full whitespace-normal px-3 py-2">
                  First review (A–D)
                </Button>
                <Button type="button" role="tab" id="post-review-tab" aria-controls="post-review-panel" aria-selected={activeTab === "post"} variant={activeTab === "post" ? "default" : "ghost"} onClick={() => setActiveTab("post")} className="h-auto min-h-10 w-full whitespace-normal px-3 py-2">
                  Post review / feedback
                </Button>
              </div>
            </div>

            {activeTab === "first" ? (
              <div role="tabpanel" id="first-review-panel" aria-labelledby="first-review-tab">
                <header className="mb-12 max-w-3xl">
                  <p className="mb-3 text-xs font-semibold uppercase text-primary">Private brand review</p>
                  <h1 className="mb-5 text-4xl font-semibold md:text-5xl">Kativate</h1>
                  <p className="mb-7 text-lg leading-relaxed text-muted-foreground">
                    Early brainstorm for Kateri Foley review. Nothing locked. Feedback welcome on palette mood, wordmark vibe, and monogram vibe.
                  </p>
                  <Button asChild variant="outline" className="gap-2">
                    <a href="/kativate/Kativate_Brand_Options_Review.pdf" download>
                      <Download className="h-4 w-4" />
                      Download full review PDF
                    </a>
                  </Button>
                </header>

                <nav aria-label="Kativate brand directions" className="sticky top-16 z-40 -mx-4 border-y border-border/60 bg-background/90 px-4 py-3 backdrop-blur-lg">
                  <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
                    {directions.map((direction) => (
                      <a
                        key={direction.id}
                        href={`#${direction.id}`}
                        className="rounded-md border border-border/60 bg-card/70 px-3 py-2 text-center text-xs font-medium transition-colors hover:border-primary/50 hover:text-primary sm:text-sm"
                      >
                        <span className="font-bold">{direction.letter}</span> {direction.title}
                      </a>
                    ))}
                  </div>
                </nav>

                {directions.map((direction) => <DirectionSection key={direction.id} direction={direction} />)}
              </div>
            ) : <PostReviewGallery />}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default KativateReview;