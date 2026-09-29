import { Building2, Calendar, CheckCircle2, ExternalLink, Layers } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import Layout from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  descriptor?: string;
  summary?: string;
  highlights: { label: string; text: string }[];
}

const fullTimeExperiences: ExperienceItem[] = [
  {
    company: "Capital4Trade Network",
    role: "Credit Underwriting Model Consultant (Contract)",
    period: "May 2026 – Present",
    location: "Miami, FL (Remote)",
    descriptor: "Non-bank trade finance network providing receivables, payables, and supply chain financing to SME shippers",
    highlights: [
      { label: "Credit Methodology Design", text: "Designed the lender's cash-flow credit underwriting methodology on Plaid bank data, replacing a static working-capital-gap approach with a model that sizes credit from demonstrated repayment capacity" },
      { label: "Scoring Model Architecture", text: "Designed a 19-metric scoring model across six signal groups with seven eligibility gates, data-depth confidence tiers, and score-to-limit logic with liquidity, capacity, and program caps, delivered as an interpretation framework, a calibrated model framework, and a developer-ready specification" },
      { label: "Reference Implementation", text: "Built a formula-only Excel reference model (34,000+ formulas, zero errors, no macros) that independently reproduced the framework's worked calibration exactly, establishing two-way verification as the engagement's acceptance standard" },
      { label: "Implementation Advisory", text: "Authored written rulings on 30+ developer implementation questions covering transaction classification, edge cases, refresh and exposure policy, MVP manual-review strategy, and Plaid-only decision thresholds, each with a production rule and flowcharts" },
      { label: "Repeat Engagement", text: "Expanded into a second phase recalibrating the platform's financial-statement scoring model (MyCreditApp) for 6-to-11-month data coverage and missing-field handling: ratio annualization rules, confidence tiers, grade caps, and a wrong-score risk analysis on historical applicant data" },
    ],
  },
  {
    company: "Hearthfire Holdings",
    role: "Senior Business Intelligence Architect",
    period: "March 2025 – November 2025",
    location: "Wilmington, DE",
    highlights: [
      { label: "Growth Leadership", text: "Joined a self-storage investment firm at ~10 facilities and built the analytics and capital-raising infrastructure behind ~100% portfolio growth in under a year, including 10+ acquisitions valued at ~$15M+ each" },
      { label: "Capital Formation Technology", text: "Raised $20M+ by designing and building a secure web-based investor portal with backend database infrastructure, dynamic dashboards, and real-time portfolio visualizations, replacing an Excel-only capital raise process" },
      { label: "Underwriting Speed & Accuracy", text: "Cut underwriting model build time by 50% and improved valuation accuracy by rebuilding the models end-to-end, expanding the capital stack from 2 to 5 layers to show lenders the full cash flow waterfall, and training analysts on the new system" },
      { label: "AI-Driven Automation", text: "Shortened financial analysis cycles by building an AI-integrated document management platform that scanned every loan document and generated a summary and key facts for each" },
      { label: "Scenario & Waterfall Modeling", text: "Expanded scenario models from 2 to 6, integrated all into the portal, enabling the CFO to isolate any layer of debt, and automated waterfall calculations across preferred equity, common equity, and debt" },
      { label: "CAPEX & Market Analytics", text: "Automated CAPEX mechanics with S-curves, built sensitivity analysis around rent, interest rates, and project costs, and guided acquisitions with multi-state rent comp analysis; contributed a featured expert article to the California Business Journal on AI integration" },
    ],
  },
  {
    company: "Top Hat CRE",
    role: "Director, Investment Analytics",
    period: "January 2022 – December 2024",
    location: "Wilmington, DE",
    highlights: [
      { label: "Founding Finance Leadership", text: "Hired as the firm's first finance professional at 10 self-storage properties and led junior and senior analysts as the company grew more than 5x in three years, adding 50 properties and its first 5 apartment complexes" },
      { label: "Reporting Automation", text: "Reduced institutional investor report generation time by 90% while improving accuracy and consistency by automating reporting workflows, producing the first cash flow, income, and consolidated statements" },
      { label: "Analytics Platform Development", text: "Built a proprietary Python- and HTML-based analytics platform for deal pipeline management, investment metrics tracking, and portfolio analysis; built the rent comp database by scraping market rents with Python" },
      { label: "Capital Stack & New Asset Modeling", text: "Expanded the capital stack from 1 to 3 layers, established S-curves for construction and occupancy, and created the company's first multifamily model" },
    ],
  },
  {
    company: "Source Renewables, LLC",
    role: "Senior Quantitative Analyst",
    period: "June 2020 – December 2021",
    location: "Greenwich, CT (Remote)",
    highlights: [
      { label: "Project Finance Model Architecture", text: "Built the firm's renewable energy (solar) project finance model from scratch at the project level, establishing the cash flow, capital structure, and sensitivity framework used to evaluate and value its projects" },
      { label: "Portfolio Roll-Up", text: "Designed a model-within-model structure that aggregated project-level models into a portfolio-level valuation, giving leadership one consolidated view of returns and exposure" },
      { label: "Valuation & Securitization Support", text: "Developed the firm's portfolio valuation models and supported securitization analysis, providing the quantitative basis for capital markets discussions" },
    ],
  },
  {
    company: "OneMain Financial",
    role: "Quantitative Analytics Lead",
    period: "January 2017 – May 2020",
    location: "Wilmington, DE",
    highlights: [
      { label: "Quantitative Foundation", text: "Brought financial discipline, standards, and methodology to a startup environment, providing statistical modeling, machine learning, and credit risk analytics for ~$100M in acquired loans" },
      { label: "Machine Learning & Credit Risk", text: "Improved loan delinquency forecasting accuracy from 60% to 90% by building more fine-grained classification models across payment histories, credit scores, and delinquency patterns" },
      { label: "Profitability & Modeling Standards", text: "Developed the company's first profitability frameworks and scalable enterprise modeling standards, incorporating risk-adjusted returns, portfolio optimization, and acquisition economics" },
      { label: "Digital Platform Analytics", text: "Built the first analytics for the digital unsecured lending platform, including forecasting, probability, and user behavior modeling; implemented Looker as one of its first use cases" },
    ],
  },
  {
    company: "Pro Capital, LLC",
    role: "Senior Quantitative and Modeling Analyst",
    period: "January 2015 – January 2017",
    location: "Philadelphia, PA",
    highlights: [
      { label: "Portfolio Growth", text: "Joined a private equity real estate firm as the first person in the role, created all of its financial models, and managed 6 funds as the portfolio grew from $100M to $200M at 10% to 15% IRR" },
      { label: "Portfolio Modeling Architecture", text: "Developed the firm's first tiered modeling system, quantifying performance at the asset, fund, and aggregated portfolio levels" },
      { label: "Pro Forma Reporting & Automation", text: "Implemented the firm's first pro forma reporting approach, generating fund-level income statements per investor and 5-year pro formas with multivariable sensitivities, and automated leverage forecasting, fund sunset and redemption triggers, and Board presentation generation" },
    ],
  },
  {
    company: "Ashland, Inc.",
    role: "Financial Analyst, Oil and Gas Technologies",
    period: "June 2012 – December 2014",
    location: "Wilmington, DE",
    highlights: [
      { label: "FP&A Ownership", text: "Managed FP&A, budgeting, and forecasting for the company's largest business unit at the time, generating $500M+ in annual revenue, with end-to-end cost and price transparency" },
      { label: "Capital, Product & Modeling", text: "Conducted capital project investment analyses using NPV, IRR, payback, and sensitivity analysis; built full-process manufacturing models for the guar and CMC product lines with sensitivity on price, cost, unit mix, and volume; built the business unit's financial reporting system and oversaw annual budgets and forecasts" },
    ],
  },
  {
    company: "DuPont Corporation",
    role: "Financial Analyst, Research and Development",
    period: "January 2011 – January 2012",
    location: "Des Moines, IA",
    highlights: [
      { label: "Budget Accountability & Forecasting", text: "Established accountability for a $700M R&D budget, helping save approximately $50M by building a detailed cost tracking system with R&D leadership; created the forecasting model for seed trait research projects and identified cost trends and outlier expenses" },
    ],
  },
];

const quanthaven: ExperienceItem = {
  company: "Quanthaven Labs LLC",
  role: "Founder & Principal Consultant (part-time)",
  period: "January 2019 – December 2025",
  location: "",
  highlights: [],
  summary: "Financial modeling, investment analytics, and FP&A consulting for institutional and corporate clients, including Glasspoint, Inc. (CAPEX forecasting and manufacturing models, 2023 – 2025), Harvard Business School (financial modeling curriculum materials, 2023), VisualDx (SaaS revenue forecasting platform, 2022), and CDW (FP&A workflow automation, 2022).",
};

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
          {exp.location && <><span>•</span><span>{exp.location}</span></>}
        </div>
        {exp.descriptor && <p className="text-sm italic text-muted-foreground mt-2">{exp.descriptor}</p>}
      </div>
      {exp.summary && <p className="text-sm text-muted-foreground">{exp.summary}</p>}
      {exp.highlights.length > 0 && (
        <ul className="grid md:grid-cols-2 gap-2">
          {exp.highlights.map((highlight, hIndex) => (
            <li key={hIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
              <span><strong className="text-foreground font-semibold">{highlight.label}:</strong> {highlight.text}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

const Experience = () => {
  usePageMeta("Experience | Haven Chavous", "Professional experience in financial modeling, business intelligence, and AI-enhanced analytics.");
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

            <h2 className="sr-only">Roles and Engagements</h2>
            <Tabs defaultValue="full-time" className="mb-16">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
                <TabsTrigger value="full-time">Professional Experience</TabsTrigger>
                <TabsTrigger value="consulting">Earlier Consulting</TabsTrigger>
              </TabsList>

              <TabsContent value="full-time">
                <div className="space-y-8">
                  {fullTimeExperiences.map((exp, index) => (
                    <ExperienceCard key={exp.company} exp={exp} index={index} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="consulting">
                <div className="mb-8">
                  <ExperienceCard exp={quanthaven} index={0} isUmbrella />
                </div>
              </TabsContent>
            </Tabs>

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
