import { useEffect, useState } from "react";
import { Download, ExternalLink, Monitor, Mail, Printer, PlayCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ReviewPasswordGate, { REVIEW_ACCESS_KEY } from "@/components/review/ReviewPasswordGate";
import { Button } from "@/components/ui/button";
import { usePageMeta } from "@/hooks/usePageMeta";
import handoffAsset from "@/assets/food-truck/handoff-complete.zip.asset.json";
import backgroundVariantsAsset from "@/assets/food-truck/background-variants.zip.asset.json";

type Family = "sunburst" | "autumn" | "neutral";

const sunburstOptions = [
  { id: "original", navLabel: "Original", title: "Original Captivate graphic", src: "/food-truck/GreenwayStreetEats_Captivate_original.png" },
  { id: "fix-v1", navLabel: "V1", title: "Fix V1", version: "V1", clip: "/food-truck/truck-roll-v1.mp4", src: "/food-truck/GreenwayStreetEats_Captivate_1024x680_V1.png" },
  { id: "fix-v2", navLabel: "V2", title: "Fix V2", version: "V2", clip: "/food-truck/truck-roll-v2.mp4", src: "/food-truck/GreenwayStreetEats_Captivate_1024x680_V2.png" },
  { id: "fix-v3", navLabel: "V3", title: "Fix V3", version: "V3", clip: "/food-truck/truck-roll-v3.mp4", src: "/food-truck/GreenwayStreetEats_Captivate_1024x680_V3.png" },
];

const alternativeOptions = {
  autumn: [1, 2, 3].map((version) => ({
    id: `autumn-v${version}`,
    navLabel: `V${version}`,
    title: `Autumn V${version}`,
    src: `/food-truck/autumn/GreenwayStreetEats_Captivate_1024x680_V${version}.png`,
  })),
  neutral: [1, 2, 3].map((version) => ({
    id: `neutral-v${version}`,
    navLabel: `V${version}`,
    title: `Neutral V${version}`,
    src: `/food-truck/neutral/GreenwayStreetEats_Captivate_1024x680_V${version}.png`,
  })),
};

const families: { id: Family; label: string }[] = [
  { id: "sunburst", label: "Sunburst" },
  { id: "autumn", label: "Autumn" },
  { id: "neutral", label: "Neutral" },
];

const handoffItems = [
  { icon: Monitor, label: "Captivate PNG", detail: "Elevator screens" },
  { icon: Mail, label: "Email PDF 8.5×11", detail: "Tenant email" },
  { icon: Printer, label: "Poster PDF", detail: "Print shop: trim 18×24; 0.375\" bleed (18.75×24.75 sheet) with crop marks" },
  { icon: PlayCircle, label: "Rolling MP4", detail: "Web and review only; never print" },
];

const FoodTruckReview = () => {
  usePageMeta(
    "Greenway Street Eats Review | Haven Chavous",
    "Private review of Greenway Street Eats food truck graphic corrections for Kateri Foley.",
  );
  const [unlocked, setUnlocked] = useState(() => sessionStorage.getItem(REVIEW_ACCESS_KEY) === "true");
  const [activeFamily, setActiveFamily] = useState<Family>("sunburst");

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
          title="Greenway Street Eats review"
          buttonLabel="View food truck options"
          inputId="food-truck-review-password"
          onUnlock={() => setUnlocked(true)}
        />
      ) : (
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <header className="mb-12 max-w-4xl">
              <p className="mb-3 text-xs font-semibold uppercase text-primary">Early review for Kateri</p>
              <h1 className="mb-5 text-4xl font-semibold md:text-5xl">Greenway Street Eats food truck corrections</h1>
              <p className="text-lg leading-relaxed text-muted-foreground">
                The goal is fixing the warped or distorted truck and awning while keeping the whimsical cream, teal, and red aesthetic. Nothing is locked.
              </p>
            </header>

            <div className="mb-8" role="tablist" aria-label="Background family">
              <div className="grid grid-cols-3 rounded-lg border border-border/70 bg-card p-1 shadow-sm">
                {families.map((family) => (
                  <Button
                    key={family.id}
                    type="button"
                    role="tab"
                    aria-selected={activeFamily === family.id}
                    variant={activeFamily === family.id ? "default" : "ghost"}
                    onClick={() => setActiveFamily(family.id)}
                    className="w-full"
                  >
                    {family.label}
                  </Button>
                ))}
              </div>
            </div>

            <aside className="mb-10 rounded-lg border border-border/70 bg-card p-6 shadow-sm md:p-8" aria-labelledby="handoff-title">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-3xl">
                  <p className="mb-2 text-xs font-semibold uppercase text-primary">Asset handoff</p>
                  <h2 id="handoff-title" className="text-2xl font-semibold">How to use these files</h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    Choose one version, V1, V2, or V3, and use its matching Captivate, email, and poster files throughout.
                  </p>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    Autumn and neutral background alternatives are included because the sunburst treatment felt overused.
                  </p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row lg:flex-col xl:flex-row">
                  <Button asChild>
                    <a href={handoffAsset.url} download>
                      <Download /> Download complete handoff
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href="/food-truck/INSTRUCTIONS.md" target="_blank" rel="noreferrer">
                      <ExternalLink /> Instructions
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href={backgroundVariantsAsset.url} download>
                      <Download /> Background variants
                    </a>
                  </Button>
                </div>
              </div>
              <div className="mt-7 grid gap-4 border-t border-border/60 pt-6 sm:grid-cols-2">
                {handoffItems.map(({ icon: Icon, label, detail }) => (
                  <div key={label} className="flex gap-3">
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <p className="text-sm leading-relaxed"><strong className="font-semibold">{label}</strong><span className="text-muted-foreground"> → {detail}</span></p>
                  </div>
                ))}
              </div>
            </aside>

            {activeFamily === "sunburst" ? (
              <>
                <nav aria-label="Sunburst graphic options" className="sticky top-16 z-40 -mx-4 border-y border-border/60 bg-background/90 px-4 py-3 backdrop-blur-lg">
                  <div className="grid grid-cols-4 gap-2">
                    {sunburstOptions.map((option) => (
                      <a
                        key={option.id}
                        href={`#${option.id}`}
                        className="rounded-md border border-border/60 bg-card px-2 py-2 text-center text-xs font-semibold transition-colors hover:border-primary/50 hover:text-primary sm:px-3 sm:text-sm"
                      >
                        {option.navLabel}
                      </a>
                    ))}
                  </div>
                </nav>

                <div role="tabpanel" aria-label="Sunburst">
                  {sunburstOptions.map((option, index) => (
                    <section key={option.id} id={option.id} className="scroll-mt-36 border-t border-border/60 py-12 first:border-t-0 md:py-16">
                      <div className="mb-5 flex items-baseline gap-3">
                        <span className="text-xs font-semibold uppercase text-primary">{index === 0 ? "Reference" : `Option ${index}`}</span>
                        <h2 className="text-2xl font-semibold md:text-3xl">{option.title}</h2>
                      </div>
                      <figure className="overflow-hidden rounded-lg border border-border/60 bg-card p-2 shadow-sm sm:p-3">
                        <img
                          src={option.src}
                          alt={`${option.title} for Greenway Street Eats`}
                          className="aspect-[128/86] h-auto w-full rounded-md object-contain"
                          loading={index === 0 ? "eager" : "lazy"}
                        />
                      </figure>
                      {option.version && (
                        <>
                          <div className="mt-8">
                            <p className="mb-3 text-sm font-semibold">Rolling clip — web/review only, not for print</p>
                            <div className="overflow-hidden rounded-lg border border-border/60 bg-card p-2 shadow-sm sm:p-3">
                              <video
                                src={option.clip}
                                className="aspect-[128/86] h-auto w-full rounded-md bg-muted object-contain"
                                controls
                                muted
                                playsInline
                                preload="metadata"
                                aria-label={`${option.title} rolling clip`}
                              />
                            </div>
                          </div>
                          <div className="mt-4 flex flex-wrap gap-2">
                            <Button asChild variant="outline" size="sm">
                              <a href={`/food-truck/GreenwayStreetEats_Captivate_1024x680_${option.version}.png`} download><Download /> Captivate PNG</a>
                            </Button>
                            <Button asChild variant="outline" size="sm">
                              <a href={`/food-truck/GreenwayStreetEats_Email_8.5x11_${option.version}.pdf`} download><Download /> Email PDF</a>
                            </Button>
                            <Button asChild variant="outline" size="sm">
                              <a href={`/food-truck/GreenwayStreetEats_Poster_18x24_BLEED_${option.version}.pdf`} download><Download /> Poster BLEED PDF</a>
                            </Button>
                            <Button asChild variant="outline" size="sm">
                              <a href={option.clip} download><Download /> Rolling MP4</a>
                            </Button>
                          </div>
                        </>
                      )}
                    </section>
                  ))}
                </div>
              </>
            ) : (
              <>
                <nav aria-label={`${activeFamily} graphic options`} className="sticky top-16 z-40 -mx-4 border-y border-border/60 bg-background/90 px-4 py-3 backdrop-blur-lg">
                  <div className="grid grid-cols-3 gap-2">
                    {alternativeOptions[activeFamily].map((option) => (
                      <a
                        key={option.id}
                        href={`#${option.id}`}
                        className="rounded-md border border-border/60 bg-card px-2 py-2 text-center text-xs font-semibold transition-colors hover:border-primary/50 hover:text-primary sm:px-3 sm:text-sm"
                      >
                        {option.navLabel}
                      </a>
                    ))}
                  </div>
                </nav>
                <div role="tabpanel" aria-label={activeFamily === "autumn" ? "Autumn" : "Neutral"}>
                  <div className="border-b border-border/60 py-8">
                    <p className="leading-relaxed text-muted-foreground">
                      Matching email and poster PDFs for all three versions are included in the Background variants download above.
                    </p>
                  </div>
                  {alternativeOptions[activeFamily].map((option, index) => (
                    <section key={option.id} id={option.id} className="scroll-mt-36 border-t border-border/60 py-12 first:border-t-0 md:py-16">
                      <div className="mb-5 flex items-baseline gap-3">
                        <span className="text-xs font-semibold uppercase text-primary">Option {index + 1}</span>
                        <h2 className="text-2xl font-semibold md:text-3xl">{option.title}</h2>
                      </div>
                      <figure className="overflow-hidden rounded-lg border border-border/60 bg-card p-2 shadow-sm sm:p-3">
                        <img
                          src={option.src}
                          alt={`${option.title} Captivate graphic for Greenway Street Eats`}
                          className="aspect-[128/86] h-auto w-full rounded-md object-contain"
                          loading={index === 0 ? "eager" : "lazy"}
                        />
                      </figure>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <Button asChild variant="outline" size="sm">
                          <a href={option.src} download={`GreenwayStreetEats_Captivate_1024x680_V${index + 1}.png`}><Download /> Captivate PNG</a>
                        </Button>
                        <Button asChild variant="outline" size="sm">
                          <a href={backgroundVariantsAsset.url} download><Download /> Email + poster pack</a>
                        </Button>
                      </div>
                    </section>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default FoodTruckReview;