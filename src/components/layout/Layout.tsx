import { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Animated gradient background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-radial from-primary/20 via-transparent to-transparent opacity-30 animate-pulse-glow" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-radial from-accent/20 via-transparent to-transparent opacity-20 animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      </div>
      
      <Header />
      <main className="pt-16">
        {children}
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border/50 py-8 mt-20">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Haven Chavous. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
