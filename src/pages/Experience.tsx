import { Building2, Calendar, CheckCircle2, ExternalLink, Layers, Users } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

interface ClientEntry {
  client: string;
  industry: string;
  period: string;
  highlights: string[];
}

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  clients?: ClientEntry[];
}

const quanthaven: ExperienceItem = {
  company: "Quanthaven Labs, LLC",
  role: "Founder & Principal Consultant",
  period: "01/2022 – Present",
  location: "Wilmington, DE",
  highlights: [],
  clients: [
    {
      client: "Evalla Advisors",
      industry: "Private Equity",
      period: "01/2026 – Present",
      highlights: [
        "Delivering fund-level and deal-level financial modeling, including fully integrated 3-statement pro formas and reporting structures aligned with institutional PE standards",
        "Providing M&A due diligence analytics including churn analysis, client segmentation, and revenue quality assessment for active buyer processes",
        "Architecting scalable Excel frameworks that translate complex financial inputs into structured, presentation-ready analytical outputs",
      ],
    },
    {
      client: "Voltage Venture Capital",
      industry: "Healthcare Venture Capital",
      period: "10/2025 – Present",
      highlights: [
        "Constructed institutional-grade Excel financial models encompassing fund-level IRR analysis, multi-investor support with tiered fee structures, European waterfall mechanics, and multi-scenario cash flow projections",
        "Developed interactive web-based financial modeling application to support investor presentations and deal analysis workflows",
      ],
    },
    {
      client: "Hearthfire Holdings",
      industry: "Private Equity Real Estate",
      period: "03/2025 – 12/2025",
      highlights: [
        "Designed and built secure web-based analytics portal with backend database infrastructure, delivering dynamic dashboards with interactive charts and real-time portfolio visualization",
        "Developed AI-integrated document management platform featuring automated document summarization, intelligent search, and dynamic lending statistics visualizations",
        "Transformed enterprise underwriting model from Excel to full-stack web application, maintaining complex financial logic while enhancing user experience",
        "Engineered capital stack financing tools enabling multi-tier investment analysis, automated waterfall calculations, and scenario modeling",
        "Developed Python-based data transformation pipelines to extract, process, and summarize complex datasets from multiple PDF and Excel sources",
        "Rebuilt existing Excel-based underwriting model to a more sophisticated, accurate, and user-friendly tool",
      ],
    },
    {
      client: "GlassPoint",
      industry: "Financial Advisory",
      period: "10/2023 – Present",
      highlights: [
        "Rebuilt overall business forecast model and capital expenditure model for executive decision-making",
        "Reconstructed balance sheet and integrated cash flow statement to create a fully linked 3-statement financial model",
        "Developed web-based financial model demo to support client acquisition and investor engagement",
      ],
    },
    {
      client: "Harvard Business School",
      industry: "Financial Modeling Curriculum",
      period: "01/2023 – 12/2023",
      highlights: [
        "Created advanced financial modeling curriculum materials for graduate-level coursework",
      ],
    },
    {
      client: "Top Hat CRE",
      industry: "Commercial Real Estate Investments",
      period: "01/2022 – 12/2024",
      highlights: [
        "Engineered comprehensive real estate investment models in Excel for institutional-grade underwriting, resulting in successful evaluation of 100+ commercial assets",
        "Developed proprietary Python/HTML analytics platform for deal pipeline management, investment metrics tracking, and portfolio performance analysis",
        "Automated institutional investor reporting workflows through Python scripting, reducing report generation time by 90%",
        "Managed complex fund modeling including IRR calculations, waterfall distributions, and investment performance metrics",
      ],
    },
    {
      client: "VisualDx",
      industry: "SaaS Analytics",
      period: "01/2022 – 12/2023",
      highlights: [
        "Implemented SaaS revenue forecasting and analytics platform to support growth planning and investor reporting",
      ],
    },
    {
      client: "CDW",
      industry: "FP&A Optimization",
      period: "07/2022 – 12/2022",
      highlights: [
        "Automated FP&A workflows and enhanced performance analytics for enterprise technology services",
      ],
    },
    {
      client: "Source Renewables",
      industry: "Renewable Energy",
      period: "01/2022 – 12/2022",
      highlights: [
        "Developed renewable energy portfolio valuation models for investment analysis and project financing",
      ],
    },
  ],
};

const standaloneExperiences: ExperienceItem[] = [
  {
    company: "OneMain Financial",
    role: "Quantitative Analytics Lead",
    period: "01/2017 – 12/2021",
    location: "Wilmington, DE",
    highlights: [
      "Led quantitative analysis for $1B+ in portfolio acquisitions using statistical modeling and machine learning techniques",
      "Implemented automated credit risk models in Excel achieving 90% accuracy in delinquency forecasting",
      "Developed comprehensive profitability analysis framework incorporating risk-adjusted returns and portfolio optimization",
      "Created predictive analytics models via Excel/Python to evaluate credit risk factors and borrower behavior patterns",
      "Established enterprise-wide modeling standards for portfolio valuation and risk assessment",
    ],
  },
  {
    company: "Pro Capital, LLC",
    role: "Senior Quantitative/Modeling Analyst",
    period: "01/2015 – 01/2017",
    location: "Philadelphia, PA",
    highlights: [
      "Sole source of financial modeling and financial analysis for Private Equity Real Estate Investment firm",
      "Created complex, innovative financial models for 6 unique investment funds",
      "Created five-year Pro-Forma financials and multi-variable sensitivity analysis for each fund",
      "Created modeling mechanics breakthrough to accurately forecast leverage based on targeted cash balance",
      "Presented Fund Performance to Board and Investors on an ongoing basis",
    ],
  },
];

const featuredProjects = [
  {
    title: "Quanthaven Labs",
    description: "Professional financial modeling platform with free and premium calculators for investment analysis, valuation, and capital structuring.",
    tags: ["React", "TypeScript", "Financial Modeling", "SaaS"],
    url: "https://quanthaven.ai",
    thumbnail: "/projects/quanthaven.png",
  },
  {
    title: "Self Storage Rental Rates",
    description: "Comprehensive self storage data platform tracking 1,500+ CubeSmart facilities and 23K+ rate records across 48 states, updated daily.",
    tags: ["React", "Data Platform", "Web Scraping", "Real Estate"],
    url: "https://selfstoragerentalrates.com",
    thumbnail: "/projects/selfstoragerentalrates.png",
  },
  {
    title: "XL Shortcuts",
    description: "Interactive Excel keyboard shortcuts cheat sheet with visual keyboard layout, category filtering, and downloadable PDF.",
    tags: ["React", "Excel", "Developer Tools", "UI/UX"],
    url: "https://xlshortcuts.com",
    thumbnail: "/projects/xlshortcuts.png",
  },
];

const ClientCard = ({ client, index }: { client: ClientEntry; index: number }) => (
  <div
    className="animate-fade-in-up"
    style={{ animationDelay: `${0.05 * index}s` }}
  >
    <div className="p-4 rounded-lg bg-secondary/30 border border-border/30 hover:border-primary/30 transition-all duration-300">
      <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
        <div>
          <h4 className="font-semibold text-foreground">{client.client}</h4>
          <span className="text-xs text-primary font-medium">{client.industry}</span>
        </div>
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="text-[10px] px-1.5 py-0 text-muted-foreground border-primary/20">
            Consulting Client
          </Badge>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Calendar className="h-3 w-3" />
            <span>{client.period}</span>
          </div>
        </div>
      </div>
      <ul className="space-y-1 mt-2">
        {client.highlights.map((h, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
            <CheckCircle2 className="h-3.5 w-3.5 text-primary flex-shrink-0 mt-0.5" />
            <span>{h}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const ExperienceCard = ({ exp, index, isUmbrella }: { exp: ExperienceItem; index: number; isUmbrella?: boolean }) => (
  <div className="animate-fade-in-up" style={{ animationDelay: `${0.1 * index}s` }}>
    <div className={`rounded-xl transition-all duration-300 hover:glow-sm ${isUmbrella ? 'p-8 bg-card/70 border-2 border-primary/40 hover:border-primary/60' : 'p-6 bg-card/50 border border-border/50 hover:border-primary/50'}`}>
      <div className="mb-4">
        <div className="flex items-center gap-2 text-primary mb-1">
          <Building2 className="h-4 w-4" />
          <span className="font-semibold">{exp.company}</span>
        </div>
        <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1 flex-wrap">
          <Calendar className="h-3 w-3" />
          <span>{exp.period}</span>
          <span>•</span>
          <span>{exp.location}</span>
        </div>
      </div>
      {exp.highlights.length > 0 && (
        <ul className="grid md:grid-cols-2 gap-2">
          {exp.highlights.map((highlight, hIndex) => (
            <li key={hIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

const Experience = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Professional <span className="gradient-text">Experience</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                15+ years of finance, analytics, and technology innovation
              </p>
            </div>

            {/* Quanthaven umbrella */}
            <div className="space-y-4 mb-8">
              <ExperienceCard exp={quanthaven} index={0} />
              {quanthaven.clients?.map((client, i) => (
                <ClientCard key={client.client} client={client} index={i + 1} />
              ))}
            </div>

            {/* Standalone roles */}
            <div className="space-y-8 mb-16">
              {standaloneExperiences.map((exp, index) => (
                <ExperienceCard key={exp.company} exp={exp} index={index + 10} />
              ))}
            </div>

            {/* Featured Projects */}
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <Layers className="h-6 w-6 text-primary" />
                Featured <span className="gradient-text">Projects</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {featuredProjects.map((project, index) => (
                  <a
                    key={project.title}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block no-underline"
                  >
                    <Card
                      className="bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300 hover:glow-sm animate-fade-in-up group h-full"
                      style={{ animationDelay: `${0.05 * index}s` }}
                    >
                      <div className="p-4 pb-0">
                        <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg border border-border/30">
                          <img
                            src={project.thumbnail}
                            alt={`${project.title} preview`}
                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                          />
                        </AspectRatio>
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-xs">
                          {project.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-[10px] px-1.5 py-0">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="pt-0">
                        <Button variant="ghost" size="sm" className="gap-1.5 text-primary hover:text-primary text-xs p-0 h-auto">
                          Visit Site <ExternalLink className="h-3 w-3" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Experience;
