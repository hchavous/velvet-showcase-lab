import { ReactNode } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

const Layout = ({ children, className }: LayoutProps) => {
  return (
    <div className={cn("min-h-screen bg-background text-foreground", className)}>
      <Header />
      <main className="pt-16">
        {children}
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border/50 py-8 mt-20">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Haven Chavous. All rights reserved.</p>
          <div className="mt-2 flex items-center justify-center gap-3 text-xs text-muted-foreground/60">
            <Link to="/kativate-review" className="transition-colors hover:text-muted-foreground">
              Kativate
            </Link>
            <span aria-hidden="true">·</span>
            <Link to="/food-truck-review" className="transition-colors hover:text-muted-foreground">
              Food Trucks
            </Link>
            <span aria-hidden="true">·</span>
            <Link to="/oktoberfest-review" className="transition-colors hover:text-muted-foreground">
              Oktoberfest
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
