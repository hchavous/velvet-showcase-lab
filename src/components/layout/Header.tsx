import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className={cn(
          "flex h-16 items-center",
          location.pathname === "/" ? "justify-center" : "justify-between"
        )}>
          {/* Logo - hidden on home page */}
          {location.pathname !== "/" && (
            <Link 
              to="/" 
              className="text-xl font-bold tracking-tight transition-colors hover:text-primary"
            >
              <span className="gradient-text">HC</span>
            </Link>
          )}

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                  location.pathname === link.href
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                )}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/Haven_Chavous_Resume.docx"
              download="Haven_Chavous_Resume.docx"
              target="_self"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.stopPropagation();
                window.location.href = "/Haven_Chavous_Resume.docx";
              }}
              className="ml-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 text-muted-foreground hover:text-foreground hover:bg-secondary inline-flex items-center gap-1.5"
            >
              <Download className="h-3.5 w-3.5" />
              Resume
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200",
                    location.pathname === link.href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="/Haven_Chavous_Resume.docx"
                download
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 text-muted-foreground hover:text-foreground hover:bg-secondary inline-flex items-center gap-1.5"
              >
                <Download className="h-3.5 w-3.5" />
                Resume
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
