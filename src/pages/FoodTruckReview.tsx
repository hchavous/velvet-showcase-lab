import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import ReviewPasswordGate, { REVIEW_ACCESS_KEY } from "@/components/review/ReviewPasswordGate";
import { usePageMeta } from "@/hooks/usePageMeta";
import originalAsset from "@/assets/food-truck/original.png.asset.json";
import fixV1Asset from "@/assets/food-truck/fix-v1.png.asset.json";
import fixV2Asset from "@/assets/food-truck/fix-v2.png.asset.json";
import fixV3Asset from "@/assets/food-truck/fix-v3.png.asset.json";

const options = [
  { id: "original", navLabel: "Original", title: "Original Captivate graphic", src: originalAsset.url },
  { id: "fix-v1", navLabel: "V1", title: "Fix V1", src: fixV1Asset.url },
  { id: "fix-v2", navLabel: "V2", title: "Fix V2", src: fixV2Asset.url },
  { id: "fix-v3", navLabel: "V3", title: "Fix V3", src: fixV3Asset.url },
];

const FoodTruckReview = () => {
  usePageMeta(
    "Greenway Street Eats Review | Haven Chavous",
    "Private review of Greenway Street Eats food truck graphic corrections for Kateri Foley.",
  );
  const [unlocked, setUnlocked] = useState(() => sessionStorage.getItem(REVIEW_ACCESS_KEY) === "true");

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

            <nav aria-label="Food truck graphic options" className="sticky top-16 z-40 -mx-4 border-y border-border/60 bg-background/90 px-4 py-3 backdrop-blur-lg">
              <div className="grid grid-cols-4 gap-2">
                {options.map((option) => (
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

            <div>
              {options.map((option, index) => (
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
                </section>
              ))}
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default FoodTruckReview;