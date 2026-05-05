import { usePageMeta } from "@/hooks/usePageMeta";
import { Brain, GraduationCap, Target, Zap, Layers, DollarSign, BarChart3, Sigma, Table, Code, Briefcase, Landmark, Rocket, Building2, CreditCard, Handshake, Sun } from "lucide-react";
import Layout from "@/components/layout/Layout";
import headshot from "@/assets/headshot.jpg";


const About = () => {
  usePageMeta();

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

            {/* Fintech: My Stack */}
            <div className="mb-16 animate-fade-in" style={{ animationDelay: "0.15s" }}>
              <div className="p-8 rounded-2xl bg-card/50 border border-border/50">
                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                  <Layers className="h-6 w-6 text-primary" />
                  Fintech expertise
                </h2>

                {/* Capstone */}
                <div className="w-full mb-3.5 rounded-md bg-primary text-primary-foreground h-[60px] flex items-center justify-center px-6">
                  <div className="text-2xl md:text-3xl font-bold tracking-tight">Capabilities</div>
                </div>

                {/* Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
                  {[
                    { discipline: "Finance", Icon: DollarSign, skills: ["FP&A", "M&A", "Valuation", "Underwriting"] },
                    { discipline: "Analytics", Icon: BarChart3, skills: ["KPIs", "Cohorts", "Dashboards", "Reporting"] },
                    { discipline: "Statistics", Icon: Sigma, skills: ["Regression", "Forecasting", "Risk modeling", "Segmentation"] },
                    { discipline: "Financial Modeling", Icon: Table, skills: ["DCF", "LBO", "Waterfalls", "3-statement"] },
                    { discipline: "Technical Chops", Icon: Code, skills: ["React", "Python", "AI workflows", "Automation"] },
                  ].map(({ discipline, Icon, skills }) => (
                    <div key={discipline} className="flex flex-col items-center">
                      <div className="w-full bg-foreground/[0.06] border border-border/50 rounded-md px-3 py-7 flex flex-col items-center gap-4 min-h-[210px]">
                        <Icon className="h-8 w-8 text-primary" strokeWidth={2} />
                        <div className="flex flex-col items-center gap-1.5">
                          {skills.map((s) => (
                            <span key={s} className="text-sm text-foreground/80 text-center">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="mt-3 text-sm font-medium text-foreground text-center">
                        {discipline}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Industry Experience */}
            <div className="mb-16 animate-fade-in" style={{ animationDelay: "0.18s" }}>
              <div className="p-8 rounded-2xl bg-card/50 border border-border/50">
                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                  <Briefcase className="h-6 w-6 text-primary" />
                  Industry Experience
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { title: "Private Equity", Icon: Landmark, items: ["Fund modeling", "Waterfalls", "LP reporting", "Six-fund platform"] },
                    { title: "Venture Capital", Icon: Rocket, items: ["Fund construction", "Follow-on reserves", "Scenario analysis", "Portfolio modeling"] },
                    { title: "Real Estate", Icon: Building2, items: ["Acquisition underwriting", "Development modeling", "Self-storage analytics", "Cash-flow forecasting"] },
                    { title: "Consumer Lending", Icon: CreditCard, items: ["Auto and personal loans", "Portfolio analytics", "Approval workflows", "Risk modeling"] },
                    { title: "Corporate FP&A", Icon: BarChart3, items: ["Fortune 500 budgeting", "Forecasting", "Variance analysis", "Management reporting"] },
                    { title: "M&A Advisory", Icon: Handshake, items: ["Buy-side and sell-side diligence", "Churn analysis", "Quality of earnings", "Transaction modeling"] },
                    { title: "Renewable Energy", Icon: Sun, items: ["Solar project modeling", "CFO advisory support", "Excel-to-web conversion", "Financial verification"] },
                  ].map(({ title, Icon, items }, i, arr) => (
                    <div
                      key={title}
                      className={
                        "p-5 rounded-xl bg-card border border-border/50 flex flex-col gap-3" +
                        (i === 4 ? " lg:col-start-1" : "")
                      }
                    >
                      <Icon className="h-6 w-6 text-primary" strokeWidth={2} />
                      <h3 className="font-semibold text-foreground">{title}</h3>
                      <div className="flex flex-col gap-1">
                        {items.map((it) => (
                          <span key={it} className="text-sm text-muted-foreground">{it}</span>
                        ))}
                      </div>
                    </div>
                  ))}
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
