import { Mail, Phone, MapPin } from "lucide-react";
import Layout from "@/components/layout/Layout";

const Contact = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Interested in working together? Let's connect.
            </p>
          </div>

          <div className="max-w-xl mx-auto space-y-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            {/* Availability */}
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

            {/* Direct Contact */}
            <div className="p-8 rounded-2xl bg-card/50 border border-border/50">
              <h2 className="text-2xl font-semibold mb-6">Direct Contact</h2>
              <div className="space-y-4">
                <a
                  href="mailto:havenachavous@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <div className="font-medium group-hover:text-primary transition-colors">
                      havenachavous@gmail.com
                    </div>
                  </div>
                </a>
                <a
                  href="tel:+13025025567"
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Phone</div>
                    <div className="font-medium group-hover:text-primary transition-colors">
                      302-502-5567
                    </div>
                  </div>
                </a>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Location</div>
                    <div className="font-medium">Wilmington, DE</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
