import { MouseEvent, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Download, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/excel-models", label: "Excel Models" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleResumeDownload = async (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    event.stopPropagation();

    try {
      const response = await fetch("/Haven_Chavous_Resume.pdf", {
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch resume");
      }

      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = blobUrl;
      link.download = "Haven_Chavous_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(blobUrl);
    } catch {
      window.open("/Haven_Chavous_Resume.pdf", "_blank", "noopener,noreferrer");
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div
          className={cn(
            "flex h-16 items-center",
            location.pathname === "/" ? "justify-center" : "justify-between"
          )}
        >
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
              href="/Haven_Chavous_Resume.pdf"
              download="Haven_Chavous_Resume.pdf"
              onClick={(event) => {
                void handleResumeDownload(event);
              }}
              className="ml-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 text-muted-foreground hover:text-foreground hover:bg-secondary inline-flex items-center gap-1.5"
            >
              <Download className="h-3.5 w-3.5" />
              Resume
            </a>
            <a
              href="https://linkedin.com/in/havenchavous"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 p-2 rounded-lg transition-all duration-200 text-muted-foreground hover:text-primary hover:bg-primary/10"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <ThemeToggle />
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
                href="/Haven_Chavous_Resume.pdf"
                download="Haven_Chavous_Resume.pdf"
                onClick={(event) => {
                  setIsMenuOpen(false);
                  void handleResumeDownload(event);
                }}
                className="px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 text-muted-foreground hover:text-foreground hover:bg-secondary inline-flex items-center gap-1.5"
              >
                <Download className="h-3.5 w-3.5" />
                Resume
              </a>
              <a
                href="https://linkedin.com/in/havenchavous"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 text-muted-foreground hover:text-primary hover:bg-primary/10 inline-flex items-center gap-1.5"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <div className="px-4 py-3">
                <ThemeToggle />
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
