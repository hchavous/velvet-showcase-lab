import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, Code, LineChart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const highlights = [
  { icon: Briefcase, label: "15+ Years", sublabel: "Finance Experience" },
  { icon: LineChart, label: "$1B+", sublabel: "Portfolio Acquisitions" },
  { icon: Code, label: "Full-Stack", sublabel: "Technical Solutions" },
  { icon: Sparkles, label: "AI-Powered", sublabel: "Innovation" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary mb-8 animate-fade-in">
              <Sparkles className="h-4 w-4" />
              <span>Financial Modeling Meets AI Innovation</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Hi, I'm{" "}
              <span className="gradient-text">Haven Chavous</span>
            </h1>

            {/* Tagline */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Financial Modeling Innovator • AI-Enhanced Analytics • Excel Guru
            </p>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              I bridge the gap between traditional quantitative finance and cutting-edge AI solutions, 
              delivering platforms and insights that transform how organizations leverage their data.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button asChild size="lg" className="glow">
                <Link to="/projects">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {highlights.map((item, index) => (
              <div
                key={item.label}
                className="text-center p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:glow-sm animate-fade-in-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <item.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                <div className="text-2xl font-bold text-foreground">{item.label}</div>
                <div className="text-sm text-muted-foreground">{item.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore My Portfolio</h2>
            <p className="text-muted-foreground">
              Discover my journey, projects, and expertise across finance and technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Link
              to="/experience"
              className="group p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:glow-sm"
            >
              <Briefcase className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Experience</h3>
              <p className="text-muted-foreground text-sm">
                From DuPont to Hearthfire Holdings — my career progression in finance and tech.
              </p>
            </Link>

            <Link
              to="/projects"
              className="group p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:glow-sm"
            >
              <Code className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Projects</h3>
              <p className="text-muted-foreground text-sm">
                Analytics platforms, AI integrations, and data transformation solutions.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
