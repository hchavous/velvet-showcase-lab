import { usePageMeta } from "@/hooks/usePageMeta";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Quanthaven Labs",
    description:
      "Professional financial modeling platform with free and premium calculators for investment analysis.",
    tags: ["React", "TypeScript", "Financial Modeling", "SaaS"],
    url: "https://quanthaven.ai",
    thumbnail: "/projects/quanthaven.png",
  },
  {
    title: "Self Storage Rental Rates",
    description:
      "Self storage data platform tracking 1,500+ CubeSmart facilities and 23K+ rate records across 48 states.",
    tags: ["React", "Data Platform", "Web Scraping", "Real Estate"],
    url: "https://selfstoragerentalrates.com",
    thumbnail: "/projects/selfstoragerentalrates.png",
  },
  {
    title: "XL Shortcuts",
    description:
      "Interactive Excel keyboard shortcuts cheat sheet with visual keyboard layout and downloadable PDF.",
    tags: ["React", "Excel", "Developer Tools", "UI/UX"],
    url: "https://xlshortcuts.com",
    thumbnail: "/projects/xlshortcuts.png",
  },
];

const WebApps = () => {
  usePageMeta(
    "Web Apps | Haven Chavous",
    "Production financial tools and platforms built with modern web technologies."
  );

  return (
    <Layout>
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 opacity-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-[1.1]">
              Web Apps
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
              Production financial tools and platforms built with modern web technologies.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="bg-card/50 border-border/50 rounded-2xl overflow-hidden opacity-0 animate-fade-in-up flex flex-col"
                style={{ animationDelay: `${0.15 + index * 0.1}s` }}
              >
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aspect-[5/4] overflow-hidden border-b border-border/30 block group"
                >
                  <img
                    src={project.thumbnail}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </a>

                <CardContent className="p-6 flex flex-col flex-1">
                  <h2 className="text-lg font-semibold mb-3 leading-snug">
                    {project.title}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4 flex-1 text-pretty">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs font-medium">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button asChild variant="outline" className="w-full gap-2">
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Visit Site
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WebApps;
