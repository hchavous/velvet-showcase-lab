import { ReactNode } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {children}
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border/50 py-8 mt-20">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Haven Chavous. All rights reserved.</p>
          <Link
            to="/kativate-review"
            className="mt-2 inline-block text-xs text-muted-foreground/60 transition-colors hover:text-muted-foreground"
          >
            Kativate
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
