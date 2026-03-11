import { Brain, GraduationCap, Target, Zap } from "lucide-react";
import Layout from "@/components/layout/Layout";
import headshot from "@/assets/headshot.jpg";

const About = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Haven A. Chavous</h1>
              <p className="text-xl text-muted-foreground">Bridging traditional finance with modern AI solutions</p>
            </div>

            {/* Professional Summary with Photo */}
            <div className="mb-16 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="p-8 rounded-2xl bg-card/50 border border-border/50">
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                  {/* Photo */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden ring-4 ring-primary/30 glow-sm">
                        <img src={headshot} alt="Haven Chavous headshot" className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>

                  {/* Summary Text */}
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-2xl font-semibold mb-4 flex items-center justify-center md:justify-start gap-3">
                      <Target className="h-6 w-6 text-primary" />
                      Professional Summary
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      With over 15 years of experience in financial modeling and quantitative analysis, I've dedicated
                      my career to transforming how organizations leverage data and technology to make better decisions.
                      My journey has taken me from traditional investment analysis to building cutting-edge AI-powered
                      platforms.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      I specialize in bridging the gap between complex financial concepts and practical,
                      technology-driven solutions. Whether it's automating 90% of reporting workflows, developing
                      investment modeling platforms, or integrating AI into document management, I thrive at the
                      intersection of finance and innovation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Philosophy */}
            <div className="mb-16 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="p-8 rounded-2xl bg-card/50 border border-border/50">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                  <Brain className="h-6 w-6 text-primary" />
                  My Philosophy
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2 text-foreground">Data-Driven Decisions</h3>
                    <p className="text-muted-foreground text-sm">
                      Every business decision should be grounded in solid data and rigorous analysis. I build systems
                      that surface insights clearly and actionably.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-foreground">Automation First</h3>
                    <p className="text-muted-foreground text-sm">
                      Repetitive tasks drain organizational energy. I identify and automate these processes so teams can
                      focus on strategic, high-value work.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-foreground">Bridge Builder</h3>
                    <p className="text-muted-foreground text-sm">
                      I translate between technical and business teams, ensuring technology solutions truly serve
                      organizational goals.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-foreground">Continuous Learning</h3>
                    <p className="text-muted-foreground text-sm">
                      The intersection of finance and AI evolves rapidly. I stay current with emerging tools and
                      methodologies to deliver cutting-edge solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* What Drives Me */}
            <div className="mb-16 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="p-8 rounded-2xl bg-card/50 border border-border/50">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                  <Zap className="h-6 w-6 text-primary" />
                  What Drives Me
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  I'm passionate about the transformative potential of combining quantitative finance expertise with
                  modern AI capabilities. The ability to turn complex data into clear insights, automate tedious
                  processes, and build tools that genuinely improve how people work — that's what gets me excited every
                  day. I believe we're at an inflection point where finance professionals who embrace technology can
                  deliver exponentially more value to their organizations.
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="p-8 rounded-2xl bg-card/50 border border-border/50">
                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  Education
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground">
                        Master of Business Administration (MBA) in Finance
                      </h3>
                      <p className="text-primary">University of Delaware</p>
                      <p className="text-sm text-muted-foreground">
                        Advanced coursework in corporate finance, investment analysis, and quantitative methods
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground">
                        Bachelor of Business Administration (BBA) in Finance
                      </h3>
                      <p className="text-primary">Augusta State University</p>
                      <p className="text-sm text-muted-foreground">
                        Foundation in financial principles, accounting, and business strategy
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            {/* Availability */}
            <div className="mt-12 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <div className="p-6 rounded-xl bg-primary/10 border border-primary/20">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                  <span className="font-semibold text-primary">Available for Opportunities</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  I'm currently open to consulting projects, full-time roles, and interesting collaborations
                  in finance, data analytics, and AI.
                </p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
