import { usePageMeta } from "@/hooks/usePageMeta";
import Layout from "@/components/layout/Layout";

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="text-foreground leading-relaxed mb-4">{children}</p>
);

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl font-semibold mt-12 mb-4">{children}</h2>
);

const PipelineGraphic = () => (
  <figure className="my-10">
    <svg
      role="img"
      viewBox="0 0 800 260"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Monthly pipeline from CubeSmart sitemap to selfstoragerentalrates.com</title>
      <desc>
        Horizontal five-stage pipeline. Python scrapers and React web app (Claude-assisted) shown in
        primary color; sitemap, CSV, and Supabase shown in neutral card color.
      </desc>
      <defs>
        <marker id="arrow-pipeline" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="hsl(var(--muted-foreground))" />
        </marker>
      </defs>

      <text x="400" y="28" textAnchor="middle" fontSize="13" fill="hsl(var(--muted-foreground))" fontStyle="italic">
        Windows scheduled task triggers once a month
      </text>

      {/* Stages */}
      {[
        { x: 20, label: "CubeSmart", sub: "sitemap", primary: false },
        { x: 180, label: "Python", sub: "scrapers", primary: true },
        { x: 340, label: "CSV", sub: "output", primary: false },
        { x: 500, label: "Supabase", sub: "", primary: false },
        { x: 660, label: "React", sub: "web app", primary: true },
      ].map((s, i) => (
        <g key={i}>
          <rect
            x={s.x}
            y={80}
            width={120}
            height={80}
            rx={10}
            fill={s.primary ? "hsl(var(--primary) / 0.15)" : "hsl(var(--card))"}
            stroke={s.primary ? "hsl(var(--primary))" : "hsl(var(--border))"}
            strokeWidth={1.5}
          />
          <text
            x={s.x + 60}
            y={s.sub ? 115 : 125}
            textAnchor="middle"
            fontSize="15"
            fontWeight="600"
            fill="hsl(var(--foreground))"
          >
            {s.label}
          </text>
          {s.sub && (
            <text x={s.x + 60} y={135} textAnchor="middle" fontSize="13" fill="hsl(var(--foreground))">
              {s.sub}
            </text>
          )}
        </g>
      ))}

      {/* Arrows */}
      {[140, 300, 460, 620].map((x, i) => (
        <line
          key={i}
          x1={x}
          y1={120}
          x2={x + 40}
          y2={120}
          stroke="hsl(var(--muted-foreground))"
          strokeWidth={1.5}
          markerEnd="url(#arrow-pipeline)"
        />
      ))}

      {/* Legend */}
      <g>
        <rect x={140} y={210} width={14} height={14} rx={3} fill="hsl(var(--primary) / 0.15)" stroke="hsl(var(--primary))" />
        <text x={162} y={222} fontSize="12" fill="hsl(var(--muted-foreground))">Claude assisted during the build</text>
        <rect x={420} y={210} width={14} height={14} rx={3} fill="hsl(var(--card))" stroke="hsl(var(--border))" />
        <text x={442} y={222} fontSize="12" fill="hsl(var(--muted-foreground))">No AI involvement at any stage</text>
      </g>
    </svg>
    <figcaption className="text-sm text-muted-foreground text-center mt-3">
      The monthly production pipeline, end to end.
    </figcaption>
  </figure>
);

const PitchGraphic = () => (
  <figure className="my-10">
    <svg role="img" viewBox="0 0 800 380" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <title>The pitch versus the actual build</title>
      <desc>
        Left side shows one large box labeled "AI Agent" representing the marketing pitch. Right
        side shows a four-stage vertical stack of the real architecture.
      </desc>

      <text x={200} y={30} textAnchor="middle" fontSize="14" fontWeight="600" fill="hsl(var(--muted-foreground))">
        The pitch
      </text>
      <text x={600} y={30} textAnchor="middle" fontSize="14" fontWeight="600" fill="hsl(var(--muted-foreground))">
        The actual build
      </text>

      {/* Pitch: one big terra-cotta box */}
      <rect
        x={60}
        y={60}
        width={280}
        height={280}
        rx={14}
        fill="hsl(var(--primary) / 0.15)"
        stroke="hsl(var(--primary))"
        strokeWidth={2}
      />
      <text x={200} y={180} textAnchor="middle" fontSize="24" fontWeight="700" fill="hsl(var(--foreground))">
        AI Agent
      </text>
      <text x={200} y={210} textAnchor="middle" fontSize="14" fill="hsl(var(--foreground))">
        Scrapes, analyzes, alerts
      </text>
      <text x={200} y={232} textAnchor="middle" fontSize="13" fill="hsl(var(--muted-foreground))" fontStyle="italic">
        End to end. Autonomously.
      </text>

      {/* Real build: stacked components */}
      {[
        { y: 60, label: "CubeSmart sitemap", primary: false },
        { y: 130, label: "Python scrapers", primary: true },
        { y: 200, label: "CSV + Supabase", primary: false },
        { y: 270, label: "React web app", primary: true },
      ].map((s, i) => (
        <g key={i}>
          <rect
            x={460}
            y={s.y}
            width={280}
            height={56}
            rx={10}
            fill={s.primary ? "hsl(var(--primary) / 0.15)" : "hsl(var(--card))"}
            stroke={s.primary ? "hsl(var(--primary))" : "hsl(var(--border))"}
            strokeWidth={1.5}
          />
          <text x={600} y={s.y + 34} textAnchor="middle" fontSize="15" fontWeight="600" fill="hsl(var(--foreground))">
            {s.label}
          </text>
        </g>
      ))}
    </svg>
    <figcaption className="text-sm text-muted-foreground text-center mt-3">
      The pitch is one autonomous agent. The reality is a stack with AI only where it earns its keep.
    </figcaption>
  </figure>
);

const SpectrumGraphic = () => (
  <figure className="my-10">
    <svg role="img" viewBox="0 0 800 340" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <title>Tool-fit spectrum: deterministic code versus AI judgment</title>
      <desc>
        A two-pole spectrum. Left pole favors deterministic code for structured, repetitive,
        high-volume work. Right pole favors AI for unstructured, judgment-heavy, context-rich work.
      </desc>
      <defs>
        <marker id="arrow-spectrum-l" viewBox="0 0 10 10" refX="1" refY="5" markerWidth="8" markerHeight="8" orient="auto">
          <path d="M 10 0 L 0 5 L 10 10 z" fill="hsl(var(--muted-foreground))" />
        </marker>
        <marker id="arrow-spectrum-r" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="hsl(var(--muted-foreground))" />
        </marker>
      </defs>

      {/* Pole headings */}
      <text x={150} y={40} textAnchor="middle" fontSize="16" fontWeight="700" fill="hsl(var(--foreground))">
        Deterministic code wins
      </text>
      <text x={650} y={40} textAnchor="middle" fontSize="16" fontWeight="700" fill="hsl(var(--foreground))">
        AI earns its place
      </text>

      {/* Double-headed arrow */}
      <line
        x1={120}
        y1={80}
        x2={680}
        y2={80}
        stroke="hsl(var(--muted-foreground))"
        strokeWidth={2}
        markerStart="url(#arrow-spectrum-l)"
        markerEnd="url(#arrow-spectrum-r)"
      />

      <text x={150} y={108} textAnchor="middle" fontSize="12" fill="hsl(var(--muted-foreground))">
        Structured · Repetitive · High-volume
      </text>
      <text x={650} y={108} textAnchor="middle" fontSize="12" fill="hsl(var(--muted-foreground))">
        Unstructured · Judgment · Context-rich
      </text>

      {/* Left examples */}
      {["Fetch a URL", "Write a row to a database", "Render the same page", "Run on a fixed schedule"].map((t, i) => (
        <g key={i}>
          <rect x={30} y={150 + i * 42} width={240} height={32} rx={6} fill="hsl(var(--card))" stroke="hsl(var(--border))" />
          <text x={150} y={171 + i * 42} textAnchor="middle" fontSize="13" fill="hsl(var(--foreground))">{t}</text>
        </g>
      ))}

      {/* Right examples */}
      {[
        "Choose the right library",
        "Debug an HTML markup change",
        "Adapt to a new operator's site",
        "Structure messy client data",
      ].map((t, i) => (
        <g key={i}>
          <rect x={530} y={150 + i * 42} width={240} height={32} rx={6} fill="hsl(var(--primary) / 0.12)" stroke="hsl(var(--primary))" />
          <text x={650} y={171 + i * 42} textAnchor="middle" fontSize="13" fill="hsl(var(--foreground))">{t}</text>
        </g>
      ))}
    </svg>
    <figcaption className="text-sm text-muted-foreground text-center mt-3">
      Each tool earns its place at the junction it was built for.
    </figcaption>
  </figure>
);

const AIAgentsAndAutomation = () => {
  usePageMeta(
    "AI Agents and Automation: Let's Unpack the Mystery | Haven Chavous",
    "An honest walkthrough of one of my own builds. What AI tools actually did, what they didn't, and where deterministic code still wins."
  );

  return (
    <Layout>
      <article className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <header className="mb-10 opacity-0 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3">
              AI Agents and Automation: Let's Unpack the Mystery
            </h1>
            <p className="text-sm text-muted-foreground">May 2026 · 12 min read</p>
          </header>

          <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <P>
              If you spend any time on LinkedIn in 2026, you have probably seen a version of this post: an AI agent built in a weekend that scrapes a market, analyzes the data, generates a report, posts to Slack, and emails the team a summary, all without human intervention. The accompanying caption explains that this is the future of work, that knowledge labor is being eaten, and that anyone not building agents today will be obsolete by the end of the year.
            </P>
            <P>
              I build automated systems for a living, and I think a meaningful share of this discourse is wrong. Not because AI is unimportant. It is genuinely transformative for the kind of work I do. The problem is that the framing has become so wide that the word "agent" now signals almost nothing about what is actually being built or where it might fit in a real production stack.
            </P>
            <P>
              The interesting question is not whether AI agents are real or fake. The interesting question is where they earn their place in a system you actually have to maintain, and where the right tool is still something older and more boring. I have spent the past year building exactly this kind of system across consulting engagements and my own products, and the patterns I have observed are sharp enough to be useful.
            </P>
            <P>
              I want to show you what I mean by walking through one of my own builds, a self-storage rate intelligence platform I run under Quanthaven Labs. It is small enough to explain end-to-end in one essay, and it touches enough of the relevant tradeoffs that the lessons generalize.
            </P>

            <H2>The product</H2>
            <P>
              The product is selfstoragerentalrates.com. The premise is straightforward. Self-storage operators and acquisitions teams need pricing data on the facilities they compete with, but the major public operators do not publish their unit-level rates in any structured way. CubeSmart, Extra Space, and Public Storage all post rates on their public-facing facility pages, but they update those rates dynamically, by unit size, and by demand. The data is observable. It is also tedious to gather at scale, which is why nobody outside of expensive enterprise data products has historically done it cleanly.
            </P>
            <P>
              The buyer for this kind of data is an acquisitions analyst at a self-storage REIT or operator, or a broker pricing a deal in a secondary market. They want to know what a 10x10 climate-controlled unit rents for at the three nearest CubeSmart facilities to a target acquisition. Today they get this the slow way. A junior analyst opens each facility's public page in a browser, locates the pricing table, reads off the rate for each unit size, and copies the values into a spreadsheet by hand. They do it one facility, one unit size, one quote at a time. For a single deal evaluation that means hours of manual data entry across a handful of nearby facilities. For ongoing market coverage across hundreds of competing locations, the math stops working entirely. I wanted to build something that did this work for them at meaningfully lower cost and meaningfully better coverage.
            </P>
            <P>
              I started with CubeSmart because they are the second-largest publicly traded operator and their site structure is consistent enough to scrape reliably. The phase-one goal was straightforward: stand up the data pipeline, get monthly rate snapshots into a queryable database, and put a usable front end on top. The phase-two ambition is to expand to Extra Space, Public Storage, and a handful of large private operators, then sell access to the combined dataset.
            </P>
            <P>
              That is the business case. The interesting part for our purposes is how the system actually works, and where AI tools earned their keep along the way. Because the temptation in late-2025 and 2026 is to build something like this as "an agent," and I want to be specific about why I did not.
            </P>

            <H2>The marketing version</H2>
            <P>
              If I were writing a LinkedIn post about selfstoragerentalrates.com instead of an honest essay, the pitch would go something like this: "I built an AI agent that scrapes self-storage rates across thousands of facilities every month, identifies pricing anomalies, and surfaces acquisition opportunities to the team." The accompanying screenshot would show a chat interface or a dashboard with a prominent "AI" badge somewhere in the upper right.
            </P>
            <P>
              The framing implies a single autonomous system reasoning its way through the workflow end to end. It is also wrong, both about how the system was built and about how it actually runs.
            </P>
            <P>
              The first problem is economic. CubeSmart alone has 1,554 facility URLs in their public sitemap as of this month. An agent that visits each URL through a language model, parses the page with that model, and extracts unit pricing would burn tokens at every step. At even modest per-call rates and a monthly cadence, the agent version of this scraper would cost dollars per run on token consumption alone, before you account for slower wall-clock time and brittle, model-dependent parsing. The same job done with a few hundred lines of Python and the right HTML parser costs essentially nothing in compute and finishes in roughly the time it takes the network requests to return.
            </P>
            <P>
              The second problem is reliability. Deterministic code fails in deterministic ways. When CubeSmart changes their markup, the parser breaks at a specific selector and I fix it. An LLM-driven extractor fails in subtler ways: it returns confident-looking output that is silently wrong, drops fields, or hallucinates a price tier that does not exist on the page. For a dataset that is supposed to be authoritative enough to sell, that failure mode is unacceptable.
            </P>
            <P>
              So when I say the demo version of this is wrong, I do not mean it is impossible. I mean it is the wrong tool. The temptation to use the new shiny thing because it is the new shiny thing is one of the more expensive failure modes in software, and the agent framing makes it easier to commit.
            </P>

            <PitchGraphic />

            <H2>What the system actually does</H2>
            <P>
              Here is what the system actually does, in the order it does it.
            </P>
            <P>
              Once a month, a Windows scheduled task fires a batch file. The batch file activates a Python virtual environment and runs two scripts in sequence. The first script fetches CubeSmart's facility sitemap (a publicly available XML file that lists every facility URL on their site) and parses it into an Excel workbook of facility IDs, states, cities, regions, and URLs. The second script reads that workbook and, for each facility URL, fetches the public page, parses the unit-level pricing data, and writes the results to a timestamped CSV. The whole run takes under an hour for all 1,554 facilities. The CSV gets uploaded through an admin interface to a Supabase backend, which serves the data to a React front end at selfstoragerentalrates.com.
            </P>

            <PipelineGraphic />

            <P>
              That is the entire production loop. Three components: a Python scraper, a scheduled task, and a database that feeds a web app. Nothing in that sentence requires the word "agent," and yet AI tools were essential to building roughly half of it.
            </P>
            <P>
              Here is where Claude actually sat in this stack, and where it did not.
            </P>
            <P>
              The initial scraper was almost entirely co-authored with Claude. I knew what I wanted: fetch the sitemap, identify the URL pattern, extract structured data from the facility pages. But the work of figuring out which Python libraries to use, how to handle CubeSmart's specific HTML quirks, how to parse the unit type names cleanly, and how to make the output schema match what my front end expected was a long, iterative conversation. I was driving the architecture decisions. Claude was making the dozens of small tactical calls that would have taken me days of Stack Overflow and trial-and-error to make alone. Net effect: a scraper that would have taken me roughly two weeks of intermittent evenings to write took me a long weekend.
            </P>
            <P>
              The state-to-region mapping inside the facility update script is another small but representative example. I needed every state slug mapped to a proper state name and every state mapped to a Census-style region. That is a hundred-plus lines of dictionary code that nobody enjoys writing, where every entry is rote but the omission of any one entry is a silent bug. Claude generated the maps, I verified them. Ten minutes instead of an hour.
            </P>
            <P>
              When CubeSmart pushed a markup change in late summer that broke my unit-tile parsing, the debugging session was maybe twenty minutes of Claude reading the page source with me and proposing a corrected selector. Without AI, that same fix would have taken me a few hours, mostly spent on the part of the work I find most tedious: visually scanning HTML for what changed.
            </P>
            <P>
              The front end of selfstoragerentalrates.com was built almost entirely on Lovable, with Claude doing the prompt authoring and verification work in parallel. The same was true for the admin upload interface. I am increasingly comfortable letting AI tools handle the kind of UI scaffolding that historically ate the most time on side projects, because the cost of getting it wrong is low and the iteration loop is fast.
            </P>
            <P>Now, the parts where Claude is intentionally absent.</P>
            <P>
              The scheduled task itself is a Windows batch file. It runs deterministically once a month, no AI involvement, no decisions to make. The right primitive for "run this exact thing at this exact time" is a scheduler, not a model. The Supabase write is a deterministic upload through an admin form I built. Again, no judgment required, no AI in the loop. The actual scraping, the part that visits 1,554 URLs and pulls structured data, is straight Python using requests and a parsing library. Claude wrote much of that code, but Claude is not in the runtime. Every monthly run executes the same compiled logic, returns the same data shape, and either succeeds or fails in a way I can debug from a log file.
            </P>
            <P>
              If you map the workflow to where AI contributed versus where it does not appear at all, a clean pattern emerges. AI was indispensable in the parts of the work that required judgment under unfamiliar conditions: figuring out which library, which selector, which schema, which UI pattern. AI is absent from the parts that are pure execution: running on a schedule, fetching a URL, writing a row to a database. The work that benefits from an LLM is the work where a senior engineer's experience would have shortcut me to the right answer. The work that does not benefit from an LLM is the work where the answer is already known and the only question is whether the runner is reliable.
            </P>
            <P>
              The cost structure follows the same pattern. The AI-assisted portions of this build (the scraper authoring, the front-end scaffolding, the debugging sessions) cost me roughly twenty dollars in API and subscription credits over the course of two months. The deterministic portions of this build (the monthly run, the database, the hosting) cost me essentially nothing in operating expense and a few dollars a month in cloud fees. If I had instead built the scraping itself as an agent, that same workload would cost me hundreds of dollars per monthly run, and I would be one model update away from a silent regression in my data. The tradeoff is not close.
            </P>
            <P>
              The hand-off between AI assistance during the build and deterministic execution during the run is the part of this that I think gets lost in most of the discourse. When people talk about "AI agents in production," they often conflate two very different things: AI as a collaborator during development, and AI as a component inside the running system. The first I would now consider table stakes for any solo builder. The second has a much narrower band where it actually makes sense.
            </P>
            <P>
              Phase two of this product expands the same architecture to Extra Space and Public Storage. The work to add each operator is overwhelmingly the same shape: figure out the sitemap structure, write a parser tuned to that operator's specific markup, slot the new data into the same Supabase tables, and update the front end to filter across operators. Claude will absolutely accelerate the work of writing each new parser. Claude will also not be running them. The scheduled task gets two more entries, the database table gets an operator column, and the architecture stays exactly as boring as it is today. That is the goal.
            </P>

            <H2>The underlying pattern</H2>
            <P>
              Step back from the case study and the principle becomes easier to state cleanly. AI tools, in the form they exist in 2026, earn their place at points of unstructured input, novel judgment, or context-heavy decision-making. Deterministic code earns its place at points of structured, repeatable, high-volume execution. A well-designed system uses each at the appropriate junction and does not try to stretch either past its zone.
            </P>

            <SpectrumGraphic />

            <P>
              The selfstoragerentalrates.com architecture is a clean instance of this. The build phase is dense with unstructured judgment: which library, which markup pattern, which schema, which UI component. AI assistance compresses weeks of work into days. The run phase is pure execution at scale: fetch this URL, parse this tile, write this row. Deterministic code at the speed of HTTP requests beats any model-driven alternative on every dimension that matters: cost, speed, reliability, predictability of failure.
            </P>
            <P>
              The same principle applies to the rest of my work. When I am building a financial model for a client during a due diligence engagement, the AI-assisted portions are the ones requiring judgment under unfamiliar conditions: how to structure a churn analysis when the data is messy, how to translate a verbal description from the client into a formula. The deterministic portions are the actual model calculations themselves, the cell formulas, the consolidation logic. The model runs in Excel without AI in the loop. The model was built faster because AI was in the loop during the build.
            </P>
            <P>
              This framing also clarifies where I think the agent discourse goes wrong most often. The pitch is usually some variant of "AI agents will autonomously execute the entire workflow." The version of that pitch that actually ships, today, in production, almost always turns out to be: AI handles the unstructured judgment calls inside the workflow, and deterministic code handles everything else. The autonomy is real but the scope is narrower than the marketing implies. The system is partially agentic, not wholly agentic, and the partial scope is exactly what makes it reliable enough to depend on.
            </P>
            <P>
              There is nothing wrong with this version. It is, in fact, the right version. The problem is that "I built a system where AI assists at the judgment-heavy steps and traditional code does everything else" is a less viral LinkedIn post than "I built an AI agent that does the whole workflow autonomously." The marketing pressure pushes builders to describe their systems in maximalist terms even when the underlying engineering is appropriately modest. Over time, that gap between description and reality is what is going to disappoint a lot of buyers, and it is going to make sober operators harder to distinguish from the noise.
            </P>

            <H2>How to evaluate the next pitch</H2>
            <P>
              If you are evaluating an "AI agent" pitch as a buyer, a few diagnostic questions cut through the framing quickly.
            </P>
            <P>
              The first is: at what frequency does this system run, and what does each run cost? If the answer is "it runs continuously and we are not sure of the unit economics," that is a red flag. If the answer is "it runs on a schedule and each run costs X dollars on infrastructure plus Y dollars on model calls," you are talking to someone who has actually deployed the thing.
            </P>
            <P>
              The second is: when this system fails, what does the failure look like? An honest answer involves specific failure modes: the parser breaks on markup changes, the model occasionally returns malformed JSON, the upstream API throttles us at peak hours. Each comes with a corresponding handling strategy. An evasive answer involves words like "self-healing" and "resilient by design." Real systems fail in specific, namable ways.
            </P>
            <P>
              The third is: which parts of the system would still work if you replaced the AI components with deterministic code? If the answer is "all of them, but slower or more expensively," you are looking at a tool fit decision that was made well. If the answer is "none of them, the AI is what holds it together," you are looking at either an extraordinary system or a fragile one, and the burden of proof is on the seller.
            </P>
            <P>
              If you are building rather than buying, the equivalent question to ask yourself early in the design is: where in this workflow does judgment actually live? The judgment-heavy points are where AI earns its place. Everything else is plumbing. Plumbing should be built out of plumbing primitives like schedulers, databases, and deterministic parsers, not out of plumbing-shaped AI. The temptation to use the new tool everywhere is what produces fragile, expensive, hard-to-maintain systems that look impressive in a demo and embarrass their builders in production.
            </P>

            <H2>Why the calibration matters</H2>
            <P>
              The reason any of this matters beyond one self-storage data product is that the gap between agent rhetoric and agent reality is starting to compound. Buyers are making procurement decisions based on the rhetoric. Builders are designing systems to match the rhetoric instead of the reality. Investors are funding companies whose pitch decks assume the rhetoric is operative today. Based on my own work and the work I see other operators shipping, I am confident the disappointment will land. When it does, the people who get hurt are mostly the ones who took the maximalist framing at face value.
            </P>
            <P>
              Calibration is not skepticism. I use AI tools in nearly every project I touch, and the leverage they provide is real. The selfstoragerentalrates.com build would have taken me three times as long without Claude in the loop during development. But the leverage is specific to the work where unstructured judgment is the bottleneck. Pretending the leverage extends everywhere is what produces snake oil. The interesting builds happening today are the ones that take the technology seriously enough to deploy it precisely. That is the version of the conversation I think the field needs.
            </P>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default AIAgentsAndAutomation;
