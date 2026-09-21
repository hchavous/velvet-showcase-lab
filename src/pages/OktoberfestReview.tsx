import { useEffect, useState, type ReactNode } from "react";
import { AlertTriangle, CheckCircle2, Download, FileText, MapPin } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ReviewPasswordGate, { REVIEW_ACCESS_KEY } from "@/components/review/ReviewPasswordGate";
import { Button } from "@/components/ui/button";
import { usePageMeta } from "@/hooks/usePageMeta";
import handoffAsset from "@/assets/oktoberfest/handoff-review.zip.asset.json";

const pdfPaths = {
  emailSept30: "/oktoberfest/Oktoberfest_Email_8.5x11_Sept30_TheHub.pdf",
  emailOct1: "/oktoberfest/Oktoberfest_Email_8.5x11_Oct1_Courtyard.pdf",
  posterSept30: "/oktoberfest/Oktoberfest_Poster_18x24_BLEED_Sept30_TheHub.pdf",
  posterOct1: "/oktoberfest/Oktoberfest_Poster_18x24_BLEED_Oct1_Courtyard.pdf",
  internalRos: "/oktoberfest/RunOfShow_INTERNAL_PropertyMgmt.pdf",
  vendorRos: "/oktoberfest/RunOfShow_VENDOR_FusionEats.pdf",
};

const strengths = [
  "Full dual-day set: Captivate 1024×680, email 8.5×11, poster 18×24 trim + 0.375\" bleed (18.75×24.75)",
  "Consistent design system: cream, Bavarian check, navy logistics box, Interra lockup, Fusion Eats credit on every piece",
  "Menu copy identical across all formats",
  "Oct 1 rain plan on public graphics AND both ROS docs",
  "Internal + vendor ROS cover contacts, load-in, parking validation, Hub Options A/B, AC, weather, breakdown",
];

const fixes = [
  { title: "Unify Oct 1 venue name", detail: "Courtyard vs Pergola — pick one public name, mirror everywhere." },
  { title: "Reconsider “GIVEAWAY”", detail: "If there is no prize, use Lunch or Celebration." },
  { title: "Add allergen / dietary footer", detail: "The menu implies dairy, gluten, and alcohol." },
  { title: "Confirm poster crop marks", detail: "Add them for print if missing; the bleed is already correct." },
  { title: "Name the weather-call owner", detail: "Set the decision owner and clock time on the Oct 1 ROS, for example Vanessa by 8:30 a.m." },
];

interface PreviewCardProps {
  title: string;
  src: string;
  alt: string;
  children?: ReactNode;
  portrait?: boolean;
}

const PreviewCard = ({ title, src, alt, children, portrait = false }: PreviewCardProps) => (
  <article>
    <h3 className="mb-3 text-lg font-semibold">{title}</h3>
    <figure className="overflow-hidden rounded-lg border border-border/70 bg-card p-2 shadow-sm sm:p-3">
      <img
        src={src}
        alt={alt}
        className={portrait ? "mx-auto h-auto max-h-[840px] w-auto max-w-full object-contain" : "h-auto w-full object-contain"}
        loading="lazy"
      />
    </figure>
    {children && <div className="mt-3 flex flex-wrap gap-2">{children}</div>}
  </article>
);

const DownloadButton = ({ href, children }: { href: string; children: ReactNode }) => (
  <Button asChild variant="outline" size="sm">
    <a href={href} download><Download aria-hidden="true" />{children}</a>
  </Button>
);

const OktoberfestReview = () => {
  usePageMeta(
    "Oktoberfest Review | Haven Chavous",
    "Private second-opinion review of the Interra Properties Oktoberfest event pack.",
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
          title="Oktoberfest review"
          buttonLabel="View Oktoberfest second opinion"
          inputId="oktoberfest-review-password"
          onUnlock={() => setUnlocked(true)}
        />
      ) : (
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <header className="mb-10 max-w-5xl">
              <p className="mb-3 text-xs font-semibold uppercase text-primary">Early review for Kateri · Kativate second opinion</p>
              <h1 className="mb-5 text-4xl font-semibold md:text-5xl">Oktoberfest at Greenway Plaza</h1>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Interra Properties complimentary lunch with Fusion Eats · Wed Sept 30 (The Hub, 3 GWP) and Thu Oct 1 (Courtyard / Pergola, 9 GWP) · 11:30 a.m.–1:30 p.m.
              </p>
              <p className="mt-4 text-lg font-medium leading-relaxed">
                This page shows the current pack, what is already strong, and the five fixes that make it client-cleaner. Do not redesign the look.
              </p>
            </header>

            <section id="overview" className="scroll-mt-36" aria-labelledby="second-opinion-title">
              <div className="mb-8 overflow-hidden rounded-lg border border-border/70 bg-card shadow-sm">
                <div className="p-6 md:p-8">
                  <p className="mb-2 text-xs font-semibold uppercase text-primary">Second opinion</p>
                  <h2 id="second-opinion-title" className="text-2xl font-semibold md:text-3xl">Keep the system. Tighten the handoff.</h2>
                </div>
                <div className="grid border-t border-border/70 lg:grid-cols-2">
                  <div className="border-b border-border/70 p-6 lg:border-b-0 lg:border-r md:p-8">
                    <div className="mb-5 flex items-center gap-3 text-[hsl(var(--review-success))]">
                      <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                      <h3 className="text-sm font-semibold uppercase">What was done / already strong</h3>
                    </div>
                    <ul className="space-y-4">
                      {strengths.map((strength) => <li key={strength} className="text-sm leading-relaxed text-muted-foreground">{strength}</li>)}
                    </ul>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="mb-5 flex items-center gap-3 text-destructive">
                      <AlertTriangle className="h-5 w-5" aria-hidden="true" />
                      <h3 className="text-sm font-semibold uppercase">How it gets better</h3>
                    </div>
                    <ol className="space-y-4">
                      {fixes.map((fix, index) => (
                        <li key={fix.title} className="grid grid-cols-[1.5rem_1fr] gap-2 text-sm leading-relaxed">
                          <span className="font-semibold text-destructive">{index + 1}.</span>
                          <span><strong className="font-semibold text-foreground">{fix.title}</strong><span className="text-muted-foreground"> — {fix.detail}</span></span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
                <div className="bg-[hsl(var(--review-navy))] p-6 text-[hsl(var(--review-navy-foreground))] md:p-8">
                  <p className="mb-2 text-xs font-semibold uppercase text-[hsl(var(--review-gold))]">Verdict</p>
                  <p className="text-lg font-semibold md:text-xl">Do not redesign. Fix the five items above, then this pack is a clean client send.</p>
                </div>
              </div>

              <figure className="mb-8 overflow-hidden rounded-lg border border-border/70 bg-card p-2 shadow-sm sm:p-3">
                <img src="/oktoberfest/Oktoberfest_SecondOpinion_Summary.png" alt="Oktoberfest event pack second opinion summary" className="h-auto w-full" loading="eager" />
              </figure>

              <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button asChild>
                  <a href={handoffAsset.url} download><Download aria-hidden="true" />Download complete handoff</a>
                </Button>
                <DownloadButton href={pdfPaths.internalRos}>Internal ROS PDF</DownloadButton>
                <DownloadButton href={pdfPaths.vendorRos}>Vendor ROS PDF</DownloadButton>
              </div>
            </section>

            <nav aria-label="Oktoberfest review sections" className="sticky top-16 z-40 -mx-4 border-y border-border/60 bg-background/90 px-4 py-3 backdrop-blur-lg">
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {[
                  ["overview", "Overview"],
                  ["sept-30", "Sept 30 Hub"],
                  ["oct-1", "Oct 1 Courtyard"],
                  ["run-of-show", "Run of Show"],
                ].map(([id, label]) => (
                  <a key={id} href={`#${id}`} className="rounded-md border border-border/60 bg-card px-2 py-2 text-center text-xs font-semibold transition-colors hover:border-primary/50 hover:text-primary sm:px-3 sm:text-sm">{label}</a>
                ))}
              </div>
            </nav>

            <section id="sept-30" className="scroll-mt-36 border-b border-border/60 py-12 md:py-16" aria-labelledby="sept-30-title">
              <div className="mb-8">
                <p className="mb-2 text-xs font-semibold uppercase text-primary">Wednesday, September 30</p>
                <h2 id="sept-30-title" className="text-3xl font-semibold">Sept 30 · The Hub</h2>
                <p className="mt-3 flex items-start gap-2 leading-relaxed text-muted-foreground"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />Indoor Hub, no rain plan. Station Options A/B are covered on the run of show.</p>
              </div>
              <div className="space-y-10">
                <PreviewCard title="Captivate PNG" src="/oktoberfest/Oktoberfest_Captivate_1024x680_Sept30_TheHub.png" alt="September 30 Oktoberfest Captivate graphic for The Hub">
                  <DownloadButton href="/oktoberfest/Oktoberfest_Captivate_1024x680_Sept30_TheHub.png">Captivate PNG</DownloadButton>
                </PreviewCard>
                <div className="grid gap-8 lg:grid-cols-2">
                  <PreviewCard title="Email preview" src="/oktoberfest/email_sept30_preview.png" alt="September 30 Oktoberfest tenant email preview" portrait>
                    <DownloadButton href={pdfPaths.emailSept30}>Email PDF</DownloadButton>
                  </PreviewCard>
                  <PreviewCard title="Poster preview" src="/oktoberfest/poster_sept30_preview.png" alt="September 30 Oktoberfest print poster preview" portrait>
                    <DownloadButton href={pdfPaths.posterSept30}>Poster BLEED PDF</DownloadButton>
                  </PreviewCard>
                </div>
              </div>
            </section>

            <section id="oct-1" className="scroll-mt-36 border-b border-border/60 py-12 md:py-16" aria-labelledby="oct-1-title">
              <div className="mb-8">
                <p className="mb-2 text-xs font-semibold uppercase text-primary">Thursday, October 1</p>
                <h2 id="oct-1-title" className="text-3xl font-semibold">Oct 1 · Courtyard / Pergola</h2>
                <div className="mt-5 rounded-lg border border-destructive/30 bg-destructive/5 p-5">
                  <p className="font-semibold text-destructive">Venue naming mismatch lives here.</p>
                  <p className="mt-1 leading-relaxed text-muted-foreground">Choose Courtyard or Pergola and use it everywhere. The rain plan is already on the public graphics.</p>
                </div>
              </div>
              <div className="space-y-10">
                <PreviewCard title="Captivate PNG" src="/oktoberfest/Oktoberfest_Captivate_1024x680_Oct1_Courtyard.png" alt="October 1 Oktoberfest Captivate graphic for the Courtyard">
                  <DownloadButton href="/oktoberfest/Oktoberfest_Captivate_1024x680_Oct1_Courtyard.png">Captivate PNG</DownloadButton>
                </PreviewCard>
                <div className="grid gap-8 lg:grid-cols-2">
                  <PreviewCard title="Email preview" src="/oktoberfest/email_oct1_preview.png" alt="October 1 Oktoberfest tenant email preview" portrait>
                    <DownloadButton href={pdfPaths.emailOct1}>Email PDF</DownloadButton>
                  </PreviewCard>
                  <PreviewCard title="Poster preview" src="/oktoberfest/poster_oct1_preview.png" alt="October 1 Oktoberfest print poster preview" portrait>
                    <DownloadButton href={pdfPaths.posterOct1}>Poster BLEED PDF</DownloadButton>
                  </PreviewCard>
                </div>
              </div>
            </section>

            <section id="run-of-show" className="scroll-mt-36 py-12 md:py-16" aria-labelledby="run-of-show-title">
              <div className="mb-8">
                <p className="mb-2 text-xs font-semibold uppercase text-primary">Operations</p>
                <h2 id="run-of-show-title" className="text-3xl font-semibold">Run of Show</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">Both documents are thorough. Name the Oct 1 weather-call owner and decision time so the vendor is not waiting.</p>
              </div>
              <div className="grid gap-8 lg:grid-cols-2">
                <PreviewCard title="Internal · Property Management" src="/oktoberfest/ros_internal_preview.png" alt="Internal property management Oktoberfest run of show preview" portrait>
                  <DownloadButton href={pdfPaths.internalRos}>Internal ROS PDF</DownloadButton>
                </PreviewCard>
                <PreviewCard title="Vendor · Fusion Eats" src="/oktoberfest/ros_vendor_preview.png" alt="Fusion Eats vendor Oktoberfest run of show preview" portrait>
                  <DownloadButton href={pdfPaths.vendorRos}>Vendor ROS PDF</DownloadButton>
                </PreviewCard>
              </div>
            </section>

            <aside className="border-t border-border/60 py-8 text-sm text-muted-foreground" aria-label="Optional considerations">
              <div className="flex items-start gap-3">
                <FileText className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                <p><strong className="font-semibold text-foreground">Optional:</strong> consider wayfinding, a day-of Captivate “Live now” swap, and standardizing the Oktoberfest folder spelling.</p>
              </div>
            </aside>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default OktoberfestReview;