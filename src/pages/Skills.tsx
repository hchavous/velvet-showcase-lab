import { Code, Database, LineChart, Brain, FileSpreadsheet, BarChart3, Cog, Users } from "lucide-react";
import Layout from "@/components/layout/Layout";

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: { name: string; level: number }[];
}

const technicalSkills: SkillCategory[] = [
  {
    title: "Programming & Development",
    icon: Code,
    skills: [
      { name: "Python", level: 90 },
      { name: "SQL", level: 95 },
      { name: "JavaScript/HTML", level: 75 },
      { name: "VBA", level: 90 },
      { name: "REST APIs", level: 85 },
    ],
  },
  {
    title: "Data & Analytics",
    icon: Database,
    skills: [
      { name: "Data Analysis", level: 95 },
      { name: "ETL Pipelines", level: 85 },
      { name: "Data Visualization", level: 90 },
      { name: "Statistical Modeling", level: 85 },
      { name: "Power BI / Tableau", level: 80 },
    ],
  },
  {
    title: "Spreadsheet Mastery",
    icon: FileSpreadsheet,
    skills: [
      { name: "Excel (Expert)", level: 100 },
      { name: "Financial Modeling", level: 95 },
      { name: "Pivot Tables & Charts", level: 100 },
      { name: "Macros & Automation", level: 95 },
      { name: "Complex Formulas", level: 100 },
    ],
  },
  {
    title: "AI & Automation",
    icon: Brain,
    skills: [
      { name: "AI Integration", level: 80 },
      { name: "Process Automation", level: 90 },
      { name: "NLP Applications", level: 75 },
      { name: "Document AI", level: 80 },
      { name: "Workflow Optimization", level: 90 },
    ],
  },
];

const coreCompetencies = [
  {
    title: "Financial Modeling",
    icon: LineChart,
    description: "Building sophisticated financial models for investment analysis, forecasting, and decision support.",
  },
  {
    title: "Investment Analysis",
    icon: BarChart3,
    description: "Deep expertise in portfolio analysis, due diligence, and investment performance measurement.",
  },
  {
    title: "Process Engineering",
    icon: Cog,
    description: "Identifying inefficiencies and designing automated solutions that save time and reduce errors.",
  },
  {
    title: "Cross-Functional Leadership",
    icon: Users,
    description: "Bridging technical and business teams to deliver solutions that meet real organizational needs.",
  },
];

const Skills = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Skills & <span className="gradient-text">Expertise</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Technical proficiency and core competencies developed over 15+ years
            </p>
          </div>

          {/* Technical Skills */}
          <div className="max-w-6xl mx-auto mb-20">
            <h2 className="text-2xl font-semibold mb-8 text-center">Technical Skills</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {technicalSkills.map((category, index) => (
                <div
                  key={category.title}
                  className="p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <category.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-foreground">{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="h-2 rounded-full bg-secondary overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Competencies */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold mb-8 text-center">Core Competencies</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreCompetencies.map((competency, index) => (
                <div
                  key={competency.title}
                  className="p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:glow-sm text-center animate-fade-in-up"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4">
                    <competency.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{competency.title}</h3>
                  <p className="text-sm text-muted-foreground">{competency.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="max-w-4xl mx-auto mt-20">
            <h2 className="text-2xl font-semibold mb-8 text-center">Tools & Technologies</h2>
            <div className="flex flex-wrap justify-center gap-3 animate-fade-in">
              {[
                "Python", "SQL", "JavaScript", "HTML/CSS", "Excel", "VBA",
                "Power BI", "Tableau", "SharePoint", "Git", "REST APIs",
                "Pandas", "NumPy", "React", "Node.js", "PostgreSQL",
                "Azure", "AWS", "Docker", "Power Query", "DAX"
              ].map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Skills;
