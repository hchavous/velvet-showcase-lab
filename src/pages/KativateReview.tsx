import { FormEvent, useEffect, useState } from "react";
import { Download, Eye, LockKeyhole } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePageMeta } from "@/hooks/usePageMeta";
import { cn } from "@/lib/utils";

const ACCESS_KEY = "kativate-review-unlocked";
const REVIEW_PASSWORD = "Kabearie";

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

const PasswordGate = ({ onUnlock }: { onUnlock: () => void }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password === REVIEW_PASSWORD) {
      sessionStorage.setItem(ACCESS_KEY, "true");
      onUnlock();
      return;
    }
    setError("That password did not work. Please try again.");
  };

  return (
    <section className="container mx-auto flex min-h-[70vh] items-center justify-center px-4 py-20">
      <div className="w-full max-w-md rounded-lg border border-border/60 bg-card/60 p-7 shadow-sm md:p-9">
        <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <LockKeyhole className="h-5 w-5" />
        </div>
        <p className="mb-2 text-xs font-semibold uppercase text-primary">Private review</p>
        <h1 className="mb-3 text-3xl font-semibold">Kativate brand review</h1>
        <p className="mb-7 text-muted-foreground">Enter the review password to continue.</p>
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label htmlFor="kativate-password" className="mb-2 block text-sm font-medium">Password</label>
            <Input
              id="kativate-password"
              type="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                if (error) setError("");
              }}
              aria-describedby={error ? "kativate-password-error" : undefined}
              aria-invalid={Boolean(error)}
              autoComplete="current-password"
              autoFocus
            />
          </div>
          {error && <p id="kativate-password-error" className="text-sm text-destructive" role="alert">{error}</p>}
          <Button type="submit" className="w-full gap-2">
            <Eye className="h-4 w-4" />
            View brand directions
          </Button>
        </form>
      </div>
    </section>
  );
};

const KativateReview = () => {
  usePageMeta(
    "Kativate Brand Review | Haven Chavous",
    "Private review of four early Kativate brand directions for Kateri Foley.",
  );
  const [unlocked, setUnlocked] = useState(() => sessionStorage.getItem(ACCESS_KEY) === "true");

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
    <Layout>
      {!unlocked ? <PasswordGate onUnlock={() => setUnlocked(true)} /> : (
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
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
        </div>
      )}
    </Layout>
  );
};

export default KativateReview;