import { ExternalLink, Code2, Database, Brain, LineChart, FileSpreadsheet, Bot } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface Project {
  title: string;
  description: string;
  icon: React.ElementType;
  tags: string[];
  highlights: string[];
}

const projects: Project[] = [
  {
    title: "Hearthfire Analytics Portal",
    description: "Full-stack web application providing centralized access to investment analytics with role-based permissions.",
    icon: LineChart,
    tags: ["React", "Python", "SQL", "REST API"],
    highlights: [
      "Role-based access control for different user groups",
      "Interactive dashboards with real-time data",
      "Integrated with multiple data sources",
      "Automated report generation",
    ],
  },
  {
    title: "AI Document Management Platform",
    description: "Intelligent document processing system with SharePoint integration and AI-powered analysis.",
    icon: Brain,
    tags: ["AI/ML", "SharePoint", "Python", "NLP"],
    highlights: [
      "Automated document classification",
      "AI-powered content extraction",
      "Seamless SharePoint integration",
      "Natural language search capabilities",
    ],
  },
  {
    title: "Investment Returns Modeling Platform",
    description: "Comprehensive platform for modeling and analyzing investment returns with 90% automation of reporting workflows.",
    icon: Database,
    tags: ["Python", "Excel", "SQL", "Automation"],
    highlights: [
      "90% reduction in manual reporting effort",
      "Multi-asset class support",
      "Automated data validation",
      "Executive-ready report generation",
    ],
  },
  {
    title: "Python Data Transformation Pipelines",
    description: "ETL pipelines serving cross-functional teams with reliable, scalable data processing.",
    icon: Code2,
    tags: ["Python", "ETL", "Data Engineering"],
    highlights: [
      "Automated data ingestion from multiple sources",
      "Data quality monitoring and alerts",
      "Scalable architecture for growing data volumes",
      "Comprehensive logging and error handling",
    ],
  },
  {
    title: "Source Renewables Performance App",
    description: "Investment performance tracking application with deep Excel integration for financial analysis.",
    icon: FileSpreadsheet,
    tags: ["Excel", "VBA", "Financial Modeling"],
    highlights: [
      "Real-time performance tracking",
      "Custom financial metrics",
      "Automated Excel report generation",
      "Portfolio analytics dashboard",
    ],
  },
  {
    title: "Monte Carlo Simulation Tools",
    description: "Probabilistic modeling tools for CDW enabling risk analysis and scenario planning.",
    icon: LineChart,
    tags: ["Python", "Statistics", "Risk Analysis"],
    highlights: [
      "Customizable simulation parameters",
      "Visualization of probability distributions",
      "Sensitivity analysis capabilities",
      "Export to executive presentations",
    ],
  },
  {
    title: "Harvard Business School Prototypes",
    description: "Automated analytics prototypes developed for academic research and case studies.",
    icon: Database,
    tags: ["Analytics", "Automation", "Research"],
    highlights: [
      "Rapid prototyping methodology",
      "Academic research integration",
      "Data visualization frameworks",
      "Reproducible analysis workflows",
    ],
  },
  {
    title: "VisualDx AI Chatbot Optimization",
    description: "Enhanced AI chatbot interactions for improved user experience and response accuracy.",
    icon: Bot,
    tags: ["AI", "NLP", "UX Optimization"],
    highlights: [
      "Improved response accuracy",
      "Enhanced conversation flows",
      "User experience optimization",
      "Performance metrics tracking",
    ],
  },
];

const Projects = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              A selection of platforms, tools, and solutions I've built across finance and technology
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300 hover:glow-sm animate-fade-in-up group"
                style={{ animationDelay: `${0.05 * index}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                      <project.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1.5">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
