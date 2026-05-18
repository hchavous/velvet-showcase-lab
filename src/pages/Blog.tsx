import { Link } from "react-router-dom";
import { usePageMeta } from "@/hooks/usePageMeta";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";

const posts = [
  {
    slug: "ai-agents-and-automation",
    title: "AI Agents and Automation: Let's Unpack the Mystery",
    date: "May 2026",
    excerpt:
      "An honest walkthrough of one of my own builds. What AI tools actually did, what they didn't, and where deterministic code still wins.",
  },
];

const Blog = () => {
  usePageMeta(
    "Blog | Haven Chavous",
    "Field notes on building real systems, real tools, and where AI actually earns its place."
  );

  return (
    <Layout>
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 opacity-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-[1.1]">Blog</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
              Field notes on building real systems, real tools, and where AI actually earns its place.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="block opacity-0 animate-fade-in-up group"
                style={{ animationDelay: `${0.15 + index * 0.1}s` }}
              >
                <Card className="bg-card/50 border-border/50 rounded-2xl overflow-hidden h-full transition-colors group-hover:border-primary/40">
                  <CardContent className="p-6 flex flex-col h-full">
                    <h2 className="text-lg font-semibold mb-2 leading-snug group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-xs text-muted-foreground mb-4">{post.date}</p>
                    <p className="text-sm text-muted-foreground mb-6 flex-1 text-pretty">
                      {post.excerpt}
                    </p>
                    <span className="text-sm font-medium text-primary">Read post →</span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
