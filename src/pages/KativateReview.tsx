import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Download } from "lucide-react";
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
  themeClass: string;
  eyebrow: string;
  headline: string;
  subhead: string;
  story: string;
  method: string;
  palette: string;
  wordmarks: { src: string; label: string; ground?: "light" | "dark" }[];
  monograms: { src: string; label: string; ground?: "light" | "dark" }[];
  video: string;
  services: { title: string; copy: string }[];
  work: { kicker: string; title: string; copy: string }[];
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
    themeClass: "kativate-site-a",
    eyebrow: "Gather beautifully",
    headline: "Hospitality with a sense of occasion.",
    subhead: "Kativate shapes gracious, memorable events where every guest feels considered and every detail lands with ease.",
    story: "Rooted in the rituals of great hospitality, Kativate brings a composed point of view to celebrations, executive gatherings, and destination moments.",
    method: "We listen closely, set a clear creative direction, and orchestrate every partner against one thoughtful run of show.",
    palette: "/kativate/palette-a.png",
    wordmarks: [{ src: "/kativate/logo-a-wordmark.png", label: "A wordmark" }],
    monograms: [{ src: "/kativate/logo-a-mono.png", label: "A K monogram" }],
    video: "/kativate/kativate-a-classic-hospitality-intro.mp4",
    services: [
      { title: "Corporate & executive", copy: "Polished gatherings with discreet, guest-first production." },
      { title: "Celebrations & weddings", copy: "Personal milestones shaped with warmth and timeless restraint." },
      { title: "Remote orchestration", copy: "Calm, precise direction across venues, vendors, and time zones." },
      { title: "Guest experience", copy: "Invitations, arrivals, tablescapes, and thoughtful final touches." },
    ],
    work: [
      { kicker: "Private celebration", title: "The Garden Supper", copy: "An intimate evening layered in ivory, sage, and candlelight." },
      { kicker: "Executive retreat", title: "A Considered Welcome", copy: "Two days of conversation, hospitality, and quiet precision." },
      { kicker: "Wedding weekend", title: "A Classic Beginning", copy: "A seamless guest journey from first toast to final farewell." },
    ],
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
    themeClass: "kativate-site-b",
    eyebrow: "Ideas, impeccably delivered",
    headline: "Make the room move differently.",
    subhead: "Strategy-led experiences for ambitious teams, premium launches, and modern hosts who expect every moment to perform.",
    story: "Kativate turns clear objectives into high-impact gatherings, balancing an editorial eye with rigorous operational control.",
    method: "One decisive concept. One accountable plan. One connected team moving from briefing to final cue without noise.",
    palette: "/kativate/palette-b.png",
    wordmarks: [{ src: "/kativate/logo-b-wordmark.png", label: "B wordmark" }],
    monograms: [{ src: "/kativate/logo-b-mono.png", label: "B K monogram" }],
    video: "/kativate/kativate-b-modern-luxe-intro.mp4",
    services: [
      { title: "Executive experiences", copy: "Focused forums and leadership moments built for influence." },
      { title: "Launches & activations", copy: "Crisp brand experiences designed to earn attention." },
      { title: "Remote show calling", copy: "Live orchestration with exact cues and zero ambiguity." },
      { title: "Creative direction", copy: "A coherent visual and guest journey across every touchpoint." },
    ],
    work: [
      { kicker: "Product launch", title: "Future, Introduced", copy: "A sharp reveal engineered around one defining moment." },
      { kicker: "Leadership summit", title: "The Decision Room", copy: "Focused programming for the people shaping what comes next." },
      { kicker: "Brand dinner", title: "After Hours", copy: "An emerald-and-wine evening with an editorial pulse." },
    ],
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
    themeClass: "kativate-site-c",
    eyebrow: "Made to feel like you",
    headline: "Beautiful gatherings, grown with intention.",
    subhead: "Expressive celebrations and lifestyle events that feel natural, personal, and completely at home in their setting.",
    story: "Kativate finds the emotional thread in every gathering, then builds an experience with texture, rhythm, and room to breathe.",
    method: "We begin with feeling, translate it into a living creative system, and tend every detail through the final guest departure.",
    palette: "/kativate/palette-c.png",
    wordmarks: [{ src: "/kativate/logo-c-wordmark.png", label: "C wordmark" }],
    monograms: [{ src: "/kativate/logo-c-mono.png", label: "C K monogram" }],
    video: "/kativate/kativate-c-soft-garden-intro.mp4",
    services: [
      { title: "Social celebrations", copy: "Joyful gatherings with personality in every layer." },
      { title: "Weddings & weekends", copy: "A natural, connected story across every setting." },
      { title: "Lifestyle moments", copy: "Brand and community events with an easy sense of belonging." },
      { title: "Design & details", copy: "Botanical, tactile, and expressive touches that feel collected." },
    ],
    work: [
      { kicker: "Spring wedding", title: "Wildly Devoted", copy: "A garden celebration in mulberry, olive, and champagne." },
      { kicker: "Community table", title: "Come As You Are", copy: "An abundant meal built around connection and ease." },
      { kicker: "Lifestyle gathering", title: "In Full Bloom", copy: "A soft launch with texture, movement, and generous spirit." },
    ],
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
    themeClass: "kativate-site-d",
    eyebrow: "Presence, without excess",
    headline: "The art of a flawless entrance.",
    subhead: "Five-star event direction for rarefied rooms, discerning brands, and hosts who know restraint makes the strongest statement.",
    story: "Kativate creates atmospheric, highly controlled experiences where every element earns its place and nothing breaks the spell.",
    method: "We edit to the essential, choreograph with precision, and direct the room with the calm discretion of a luxury house.",
    palette: "/kativate/palette-d.png",
    wordmarks: [
      { src: "/kativate/logo-d-wordmark-dark.png", label: "D wordmark on dark ground", ground: "dark" },
      { src: "/kativate/logo-d-wordmark-light.png", label: "D wordmark on light ground", ground: "light" },
    ],
    monograms: [
      { src: "/kativate/logo-d-mono-dark.png", label: "D K monogram on dark ground", ground: "dark" },
      { src: "/kativate/logo-d-mono-light.png", label: "D K monogram on light ground", ground: "light" },
    ],
    video: "/kativate/kativate-d-ultra-modern-luxe-intro.mp4",
    services: [
      { title: "Private occasions", copy: "Confidential, high-touch planning for singular moments." },
      { title: "Luxury brand events", copy: "Immersive environments with exacting creative control." },
      { title: "Global orchestration", copy: "Remote direction that keeps complex productions immaculate." },
      { title: "Guest choreography", copy: "Arrival, reveal, service, and departure composed as one arc." },
    ],
    work: [
      { kicker: "Private dinner", title: "Nocturne No. 01", copy: "Deep wine, polished silver, and a perfectly measured reveal." },
      { kicker: "Fashion presentation", title: "The Edit", copy: "A disciplined environment where silhouette takes focus." },
      { kicker: "Five-star weekend", title: "After Dark", copy: "Three settings, one seamless world, no visible seams." },
    ],
  },
];

const LogoPanel = ({ src, label, ground }: { src: string; label: string; ground?: "light" | "dark" }) => (
  <figure className="space-y-3">
    <div className={cn("aspect-square overflow-hidden rounded-lg border border-border/60", ground === "dark" ? "bg-kativate-d-wine" : "bg-kativate-a-ivory")}>
      <img src={src} alt={label} className="h-full w-full object-contain" loading="lazy" />
    </div>
    <figcaption className="text-center text-sm text-muted-foreground">{label}</figcaption>
  </figure>
);

const DirectionSection = ({ direction, openDraft }: { direction: Direction; openDraft: (letter: string) => void }) => (
  <section id={direction.id} className="scroll-mt-48 border-t border-border/60 py-16 md:py-24">
    <div className="mb-10 grid gap-5 md:grid-cols-[auto_1fr] md:items-start">
      <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary text-xl font-bold text-primary-foreground">{direction.letter}</div>
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
            <div className="p-3"><p className="text-sm font-semibold">{color.name}</p><p className="font-mono text-xs text-muted-foreground">{color.hex}</p></div>
          </div>
        ))}
      </div>
    </div>

    <div className="mb-12">
      <h3 className="mb-5 text-lg font-semibold">Palette board</h3>
      <div className="overflow-hidden rounded-lg border border-border/60 bg-card"><img src={direction.palette} alt={`${direction.title} palette board`} className="aspect-video h-auto w-full object-cover" loading="lazy" /></div>
    </div>

    <div className="mb-12 grid gap-8 lg:grid-cols-2">
      <div><h3 className="mb-5 text-lg font-semibold">Wordmark + mark</h3><div className={cn("grid gap-4", direction.wordmarks.length > 1 && "sm:grid-cols-2")}>{direction.wordmarks.map((asset) => <LogoPanel key={asset.src} {...asset} />)}</div></div>
      <div><h3 className="mb-5 text-lg font-semibold">K monogram</h3><div className={cn("grid gap-4", direction.monograms.length > 1 && "sm:grid-cols-2")}>{direction.monograms.map((asset) => <LogoPanel key={asset.src} {...asset} />)}</div></div>
    </div>

    <div className="mb-8">
      <h3 className="mb-5 text-lg font-semibold">Dramatic intro</h3>
      <div className="overflow-hidden rounded-lg border border-border/60 bg-card"><video className="aspect-video w-full object-cover" src={direction.video} aria-label={`${direction.title} dramatic brand intro`} autoPlay muted loop playsInline controls preload="metadata">Your browser does not support video playback.</video></div>
    </div>

    <Button type="button" onClick={() => openDraft(direction.letter)} className="gap-2">Open draft website {direction.letter}<ArrowRight className="h-4 w-4" /></Button>
  </section>
);

const SiteNav = ({ direction }: { direction: Direction }) => (
  <nav className="border-b border-border bg-background/95" aria-label={`${direction.title} draft site navigation`}>
    <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-5 px-5 md:px-8">
      <img src={direction.wordmarks[0].src} alt="Kativate" className="h-12 w-36 object-contain object-left md:w-44" />
      <div className="hidden items-center gap-7 text-sm font-medium lg:flex">
        <a href="#services" className="transition-colors hover:text-primary">Services</a>
        <a href="#approach" className="transition-colors hover:text-primary">Approach</a>
        <a href="#work" className="transition-colors hover:text-primary">Work</a>
        <a href="#contact" className="transition-colors hover:text-primary">Contact</a>
      </div>
      <Button asChild size="sm"><a href="#contact">Plan an event</a></Button>
    </div>
  </nav>
);

const DraftSite = ({ direction, showOverview }: { direction: Direction; showOverview: () => void }) => (
  <article className={`${direction.themeClass} bg-background text-foreground`} role="tabpanel" id={`panel-${direction.letter}`} aria-labelledby={`tab-${direction.letter}`}>
    <SiteNav direction={direction} />

    <section className="relative isolate min-h-[680px] overflow-hidden border-b border-border">
      <video className="absolute inset-0 h-full w-full object-cover" src={direction.video} aria-label={`${direction.title} dramatic brand intro`} autoPlay muted loop playsInline controls preload="metadata">
        Your browser does not support video playback.
      </video>
      <div className="absolute inset-0 bg-background/80" aria-hidden="true" />
      <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-end px-5 py-16 md:px-8 md:py-24">
        <div className="max-w-4xl">
          <img src={direction.wordmarks[0].src} alt={`${direction.title} Kativate wordmark`} className="mb-10 h-20 w-56 object-contain object-left md:h-28 md:w-80" />
          <p className="mb-4 text-xs font-semibold uppercase text-accent md:text-sm">{direction.eyebrow}</p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] md:text-7xl">{direction.headline}</h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">{direction.subhead}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg"><a href="#contact">Request a consultation <ArrowRight className="h-4 w-4" /></a></Button>
            <Button asChild size="lg" variant="outline"><a href="#work">Explore our work</a></Button>
          </div>
        </div>
      </div>
    </section>

    <section id="services" className="mx-auto max-w-7xl scroll-mt-40 px-5 py-20 md:px-8 md:py-28">
      <div className="mb-12 max-w-2xl">
        <p className="mb-3 text-xs font-semibold uppercase text-accent">What we create</p>
        <h2 className="text-4xl font-semibold md:text-5xl">Experiences with intention.</h2>
      </div>
      <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
        {direction.services.map((service, index) => (
          <div key={service.title} className="min-h-64 bg-card p-7 md:p-8">
            <span className="text-sm font-semibold text-accent">0{index + 1}</span>
            <h3 className="mt-16 text-2xl font-semibold">{service.title}</h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">{service.copy}</p>
          </div>
        ))}
      </div>
    </section>

    <section id="approach" className="scroll-mt-40 bg-secondary text-secondary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[1fr_0.72fr] lg:items-center">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase">Our approach</p>
          <h2 className="max-w-2xl text-4xl font-semibold md:text-6xl">The feeling comes first. The plan makes it real.</h2>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed">{direction.story}</p>
          <p className="mt-5 max-w-2xl leading-relaxed opacity-80">{direction.method}</p>
        </div>
        <div className="flex aspect-square items-center justify-center border border-current/20 bg-background/20 p-12">
          <img src={direction.monograms[0].src} alt={`${direction.title} Kativate monogram`} className="h-full w-full object-contain" loading="lazy" />
        </div>
      </div>
    </section>

    <section id="work" className="mx-auto max-w-7xl scroll-mt-40 px-5 py-20 md:px-8 md:py-28">
      <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div><p className="mb-3 text-xs font-semibold uppercase text-accent">Selected worlds</p><h2 className="text-4xl font-semibold md:text-5xl">Designed to be remembered.</h2></div>
        <p className="max-w-md text-muted-foreground">A glimpse at how this direction moves from identity into invitations, spaces, and guest moments.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <figure className="relative min-h-[420px] overflow-hidden bg-card md:row-span-2">
          <img src={direction.palette} alt={`${direction.title} visual mood`} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
          <figcaption className="absolute inset-x-0 bottom-0 bg-background/90 p-7"><span className="text-xs font-semibold uppercase text-accent">Identity in motion</span><h3 className="mt-2 text-3xl font-semibold">A complete visual world</h3></figcaption>
        </figure>
        {direction.work.map((item, index) => (
          <div key={item.title} className={`${index === 1 ? "bg-accent text-accent-foreground" : index === 2 ? "bg-primary text-primary-foreground" : "bg-card text-card-foreground"} flex min-h-64 flex-col justify-between p-7 md:p-9`}>
            <span className="text-xs font-semibold uppercase opacity-70">{item.kicker}</span>
            <div><h3 className="text-3xl font-semibold md:text-4xl">{item.title}</h3><p className="mt-3 max-w-md leading-relaxed opacity-80">{item.copy}</p></div>
          </div>
        ))}
      </div>
      {direction.wordmarks.length > 1 && (
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {direction.wordmarks.map((asset, index) => <div key={asset.src} className={`${index === 0 ? "bg-card" : "bg-secondary"} flex min-h-56 items-center justify-center border border-border p-10`}><img src={asset.src} alt={asset.label} className="h-24 w-full object-contain" loading="lazy" /></div>)}
        </div>
      )}
    </section>

    <section id="contact" className="scroll-mt-40 bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 px-5 py-20 md:px-8 md:py-24 lg:flex-row lg:items-end">
        <div><p className="mb-4 text-xs font-semibold uppercase opacity-70">Begin a conversation</p><h2 className="max-w-3xl text-4xl font-semibold md:text-6xl">Let’s make the next gathering unmistakably yours.</h2><a href="mailto:hello@kativate.com" className="mt-7 inline-block text-lg underline underline-offset-4">hello@kativate.com</a></div>
        <Button asChild size="lg" variant="secondary"><a href="mailto:hello@kativate.com">Request a consultation <ArrowRight className="h-4 w-4" /></a></Button>
      </div>
    </section>

    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-5 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:px-8">
        <div className="flex items-center gap-4"><img src={direction.monograms[0].src} alt="Kativate" className="h-10 w-10 object-contain" /><span>Draft brand site · for review only</span></div>
        <div className="flex flex-wrap items-center gap-5"><span>Private draft review for Kateri Foley</span><button type="button" onClick={showOverview} className="transition-colors hover:text-foreground">Brand overview</button><a href="/kativate/Kativate_Brand_Options_Review.pdf" download className="inline-flex items-center gap-2 hover:text-foreground"><Download className="h-4 w-4" /> Review PDF</a></div>
      </div>
    </footer>
  </article>
);

const KativateReview = () => {
  usePageMeta(
    "Kativate Brand Review | Haven Chavous",
    "Private review of four early Kativate brand directions for Kateri Foley.",
  );
  const [unlocked, setUnlocked] = useState(() => sessionStorage.getItem(REVIEW_ACCESS_KEY) === "true");
  const [mode, setMode] = useState<"overview" | "drafts">("overview");
  const [activeDirection, setActiveDirection] = useState("A");

  const showOverview = () => {
    setMode("overview");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const showDraft = (letter = "A") => {
    setActiveDirection(letter);
    setMode("drafts");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
        <div>
          <nav aria-label="Kativate review mode" className="sticky top-16 z-[60] border-y border-border/60 bg-background/95 px-3 py-3 backdrop-blur-lg" role="tablist">
            <div className="mx-auto grid max-w-2xl grid-cols-2 gap-2">
              <Button type="button" role="tab" aria-selected={mode === "overview"} variant={mode === "overview" ? "default" : "outline"} onClick={showOverview}>Brand overview</Button>
              <Button type="button" role="tab" aria-selected={mode === "drafts"} variant={mode === "drafts" ? "default" : "outline"} onClick={() => showDraft(activeDirection)}>Draft websites</Button>
            </div>
          </nav>

          {mode === "overview" ? (
            <div className="container mx-auto px-4 py-12 md:py-16" role="tabpanel">
              <div className="mx-auto max-w-6xl">
                <header className="mb-12 max-w-3xl">
                  <p className="mb-3 text-xs font-semibold uppercase text-primary">Private brand review</p>
                  <h1 className="mb-5 text-4xl font-semibold md:text-5xl">Kativate</h1>
                  <p className="mb-7 text-lg leading-relaxed text-muted-foreground">Early brainstorm for Kateri Foley review. Nothing locked. Feedback welcome on palette mood, wordmark vibe, and monogram vibe.</p>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild variant="outline" className="gap-2"><a href="/kativate/Kativate_Brand_Options_Review.pdf" download><Download className="h-4 w-4" />Download full review PDF</a></Button>
                    <Button type="button" onClick={() => showDraft("A")} className="gap-2">View draft websites<ArrowRight className="h-4 w-4" /></Button>
                  </div>
                </header>

                <nav aria-label="Kativate brand directions" className="sticky top-36 z-40 -mx-4 border-y border-border/60 bg-background/90 px-4 py-3 backdrop-blur-lg">
                  <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
                    {directions.map((direction) => <a key={direction.id} href={`#${direction.id}`} className="rounded-md border border-border/60 bg-card/70 px-3 py-2 text-center text-xs font-medium transition-colors hover:border-primary/50 hover:text-primary sm:text-sm"><span className="font-bold">{direction.letter}</span> {direction.title}</a>)}
                  </div>
                </nav>

                {directions.map((direction) => <DirectionSection key={direction.id} direction={direction} openDraft={showDraft} />)}
              </div>
            </div>
          ) : (
            <div role="tabpanel">
              <div className="border-b border-border/60 bg-background px-3 py-3">
                <div className="mx-auto max-w-7xl"><Button type="button" variant="ghost" onClick={showOverview} className="gap-2"><ArrowLeft className="h-4 w-4" />Back to brand overview</Button></div>
              </div>
              <nav aria-label="Kativate draft websites" className="sticky top-36 z-50 border-b border-border/60 bg-background/95 px-3 py-3 backdrop-blur-lg" role="tablist">
              <div className="mx-auto grid max-w-7xl grid-cols-2 gap-2 md:grid-cols-4">
                {directions.map((direction) => (
                  <Button
                    key={direction.id}
                    id={`tab-${direction.letter}`}
                    type="button"
                    role="tab"
                    aria-selected={activeDirection === direction.letter}
                    aria-controls={`panel-${direction.letter}`}
                    variant={activeDirection === direction.letter ? "default" : "outline"}
                    onClick={() => {
                      setActiveDirection(direction.letter);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="h-auto min-h-11 whitespace-normal px-3 py-2 text-xs sm:text-sm"
                  >
                    {direction.letter} {direction.title}
                  </Button>
                ))}
              </div>
              </nav>
              {directions.filter((direction) => direction.letter === activeDirection).map((direction) => <DraftSite key={direction.id} direction={direction} showOverview={showOverview} />)}
            </div>
          )}
        </div>
      )}
    </Layout>
  );
};

export default KativateReview;