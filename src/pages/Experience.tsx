import { Building2, Calendar, CheckCircle2 } from "lucide-react";
import Layout from "@/components/layout/Layout";

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  isCurrent?: boolean;
}

const experiences: Experience[] = [
  {
    company: "Hearthfire Holdings",
    role: "Senior Business Intelligence Architect",
    period: "03/2025 – Present",
    location: "Berwyn, PA",
    isCurrent: true,
    highlights: [
      "Designed and built secure web-based analytics portal with backend database infrastructure",
      "Developed AI-integrated document management platform for complex legal documents",
      "Built sophisticated investment returns modeling platform with interactive visualizations",
      "Transformed enterprise underwriting model from Excel to web-based application",
      "Engineered comprehensive capital stack financing tools for multi-tier investment analysis",
    ],
  },
  {
    company: "Lockhart Capital, LLC (Top Hat CRE)",
    role: "Manager of Investment Analytics",
    period: "01/2022 – 12/2024",
    location: "Wilmington, DE (Remote)",
    highlights: [
      "Engineered comprehensive real estate investment models for institutional-grade underwriting",
      "Developed proprietary Python/HTML analytics platform for deal pipeline management",
      "Automated institutional investor reporting workflows, reducing report generation time by 90%",
      "Managed complex fund modeling including IRR calculations and waterfall distributions",
    ],
  },
  {
    company: "Self-Employed / Financial Consultant",
    role: "Financial Consultant",
    period: "06/2020 – 01/2022",
    location: "Wilmington, DE",
    highlights: [
      "Provided financial modeling and analytics consulting for clients including Source Renewables, LLC and VisualDx",
    ],
  },
  {
    company: "OneMain Financial",
    role: "Quantitative Analytics Lead",
    period: "01/2017 – 06/2020",
    location: "Wilmington, DE",
    highlights: [
      "Led quantitative analysis for $1B+ in portfolio acquisitions using statistical modeling",
      "Implemented automated credit risk models achieving 90% accuracy in delinquency forecasting",
      "Developed comprehensive profitability analysis framework with risk-adjusted returns",
      "Created predictive analytics models via Excel/Python to evaluate credit risk factors",
    ],
  },
  {
    company: "Pro Capital, LLC",
    role: "Senior Quantitative/Modeling Analyst",
    period: "01/2015 – 01/2017",
    location: "Philadelphia, PA",
    highlights: [
      "Sole source of financial modeling and analysis for Private Equity Real Estate Investment firm",
      "Created complex financial models for 6 unique investment funds",
      "Developed five-year Pro-Forma financials and multi-variable sensitivity analysis",
      "Presented Fund Performance to Board and Investors on an ongoing basis",
    ],
  },
  {
    company: "Ashland, Inc.",
    role: "Financial Analyst, Oil & Gas Technologies",
    period: "06/2012 – 12/2014",
    location: "Wilmington, DE",
    highlights: [
      "Managed financial planning and analysis for $500M+ revenue business unit",
      "Developed working capital optimization models using advanced Excel and SAP integration",
      "Conducted investment analysis for capital projects using NPV, IRR, and sensitivity analysis",
    ],
  },
  {
    company: "DuPont Corporation",
    role: "Financial Analyst, Research and Development",
    period: "01/2011 – 06/2012",
    location: "Des Moines, IA",
    highlights: [
      "Evaluated group's annual $700 million USD budget through in-depth financial analysis",
      "Created and maintained forecast models resulting in cost savings of approximately $50 million USD",
      "Performed due diligence on various acquisition targets",
    ],
  },
  {
    company: "DuPont Corporation",
    role: "Tax Analyst",
    period: "01/2010 – 01/2011",
    location: "Wilmington, DE",
    highlights: [
      "Provided tax analysis and support for corporate tax planning initiatives",
    ],
  },
  {
    company: "DuPont Corporation",
    role: "Cost Accountant",
    period: "01/2007 – 01/2010",
    location: "Wilmington, DE",
    highlights: [
      "Managed cost accounting processes and financial reporting",
    ],
  },
];

const Experience = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Professional <span className="gradient-text">Experience</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                15+ years of finance, analytics, and technology innovation
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

              {/* Experience Cards */}
              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <div
                    key={`${exp.company}-${exp.period}`}
                    className={`relative animate-fade-in-up ${
                      index % 2 === 0 ? "md:pr-[50%] md:text-right" : "md:pl-[50%]"
                    }`}
                    style={{ animationDelay: `${0.1 * index}s` }}
                  >
                    {/* Timeline dot */}
                    <div
                      className={`absolute top-0 w-4 h-4 rounded-full border-4 border-background ${
                        exp.isCurrent ? "bg-primary glow-sm" : "bg-muted-foreground"
                      } ${
                        index % 2 === 0
                          ? "left-0 md:left-1/2 md:-translate-x-1/2"
                          : "left-0 md:left-1/2 md:-translate-x-1/2"
                      }`}
                    />

                    {/* Card */}
                    <div
                      className={`ml-8 md:ml-0 ${
                        index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                      }`}
                    >
                      <div className="p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:glow-sm">
                        {/* Header */}
                        <div className={`mb-4 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                          <div className="flex items-center gap-2 text-primary mb-1 flex-wrap justify-start md:justify-start">
                            {index % 2 === 0 && <Building2 className="h-4 w-4 hidden md:block order-last md:order-first md:ml-2" />}
                            <span className="font-semibold">{exp.company}</span>
                            {index % 2 !== 0 && <Building2 className="h-4 w-4" />}
                            {exp.isCurrent && (
                              <span className="px-2 py-0.5 text-xs bg-primary/20 text-primary rounded-full">
                                Current
                              </span>
                            )}
                          </div>
                          <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1 flex-wrap justify-start md:justify-start">
                            {index % 2 === 0 && <Calendar className="h-3 w-3 hidden md:block order-last md:order-first md:ml-2" />}
                            <span>{exp.period}</span>
                            {index % 2 !== 0 && <Calendar className="h-3 w-3" />}
                            <span>•</span>
                            <span>{exp.location}</span>
                          </div>
                        </div>

                        {/* Highlights */}
                        <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                          {exp.highlights.map((highlight, hIndex) => (
                            <li
                              key={hIndex}
                              className={`flex items-start gap-2 text-sm text-muted-foreground ${
                                index % 2 === 0 ? "md:flex-row-reverse" : ""
                              }`}
                            >
                              <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
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
