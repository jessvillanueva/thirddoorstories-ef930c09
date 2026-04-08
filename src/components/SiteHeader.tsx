import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import micLogo from "@/assets/mic-logo.png";

const SiteHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/episodes", label: "Episodes" },
    { to: "/map", label: "Map" },
    { to: "/about", label: "About" },
    { to: "/support", label: "Support" },
  ];

  return (
    <header className="w-full relative z-50">
      <div className="container-content flex items-center justify-between py-5">
        <Link to="/" className="flex items-center gap-3 group no-underline">
          <img src={micLogo} alt="Third Door Stories" className="w-7 h-7 object-contain" />
          <span className="overline text-foreground tracking-[0.2em] no-underline">THIRD DOOR STORIES</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className="body-small text-foreground/[0.65] hover:text-foreground transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href="https://thirddoorstories.substack.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FF6719] text-white text-xs font-medium hover:bg-[#FF6719]/90 transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
            <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
          </svg>
          Subscribe
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground/[0.65] hover:text-foreground transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-border/[0.12] bg-background">
          <div className="container-content py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="body-small text-foreground/[0.65] hover:text-foreground transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default SiteHeader;
