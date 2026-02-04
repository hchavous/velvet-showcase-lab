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
    role: "Investment Operations Analyst",
    period: "2018 – Present",
    location: "Wilmington, DE",
    isCurrent: true,
    highlights: [
      "Led $1B+ due diligence acquisitions using advanced analytics",
      "Developed full-stack Analytics Portal with role-based access",
      "Built AI-powered document management platform with SharePoint integration",
      "Created Python data transformation pipelines serving cross-functional teams",
      "Engineered investment returns modeling platform with 90% reporting automation",
    ],
  },
  {
    company: "Quanthaven Labs",
    role: "Financial Consultant",
    period: "2022 – Present",
    location: "Remote",
    isCurrent: true,
    highlights: [
      "Built investment performance app with Excel integration for Source Renewables",
      "Created Monte Carlo simulation tools for CDW",
      "Developed automated analytics prototypes for Harvard Business School",
      "Optimized AI chatbot interactions for VisualDx",
    ],
  },
  {
    company: "JLL (Jones Lang LaSalle)",
    role: "Financial Analyst, Associate Manager",
    period: "2017 – 2018",
    location: "Wilmington, DE",
    highlights: [
      "Managed $1B+ real estate portfolio reporting",
      "Automated workflow processes improving team efficiency",
      "Developed financial models for property valuations",
    ],
  },
  {
    company: "Capital One",
    role: "Sr. Associate – Finance",
    period: "2016 – 2017",
    location: "Richmond, VA",
    highlights: [
      "Conducted financial analysis for strategic initiatives",
      "Built Excel-based reporting tools for executive dashboards",
      "Collaborated with cross-functional teams on process optimization",
    ],
  },
  {
    company: "DuPont",
    role: "Financial Analyst, Sr. Financial Analyst",
    period: "2010 – 2016",
    location: "Wilmington, DE",
    highlights: [
      "Delivered quantitative analysis for corporate decision-making",
      "Developed financial forecasting models",
      "Supported M&A due diligence processes",
      "Created automated reporting solutions using VBA and Excel",
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
