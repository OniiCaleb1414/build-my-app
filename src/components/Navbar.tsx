import { Bell, Search, Menu, X, MapPin, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-critical flex items-center justify-center">
              <Bell className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-foreground">Community</span>
              <span className="font-bold text-primary">Alert</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <NavLink href="/" active>Home</NavLink>
            <NavLink href="/alerts">Active Alerts</NavLink>
            <NavLink href="/map">Alert Map</NavLink>
            <NavLink href="/about">About</NavLink>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="icon">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="sm">
              <MapPin className="w-4 h-4" />
              Set Location
            </Button>
            <Button size="sm">
              <Plus className="w-4 h-4" />
              Report
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border animate-slide-up">
          <div className="container py-4 space-y-4">
            <div className="flex flex-col gap-2">
              <MobileNavLink href="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
              <MobileNavLink href="/alerts" onClick={() => setIsOpen(false)}>Active Alerts</MobileNavLink>
              <MobileNavLink href="/map" onClick={() => setIsOpen(false)}>Alert Map</MobileNavLink>
              <MobileNavLink href="/about" onClick={() => setIsOpen(false)}>About</MobileNavLink>
            </div>
            <div className="flex gap-2 pt-2 border-t border-border">
              <Button variant="outline" className="flex-1" size="sm">
                <MapPin className="w-4 h-4" />
                Set Location
              </Button>
              <Button className="flex-1" size="sm">
                <Plus className="w-4 h-4" />
                Report
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, active, children }: { href: string; active?: boolean; children: React.ReactNode }) {
  return (
    <Link
      to={href}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
        active 
          ? 'text-primary bg-primary/10' 
          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
      }`}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link
      to={href}
      onClick={onClick}
      className="px-4 py-3 rounded-lg text-foreground font-medium hover:bg-muted transition-colors"
    >
      {children}
    </Link>
  );
}
