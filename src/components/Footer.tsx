import { Bell, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-critical flex items-center justify-center">
                <Bell className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <span className="font-bold">Community</span>
                <span className="font-bold text-primary">Alert</span>
              </div>
            </Link>
            <p className="text-primary-foreground/60 text-sm mb-4">
              Bringing missing persons home through real-time community coordination.
            </p>
            <div className="flex gap-3">
              <SocialLink icon={Facebook} href="#" />
              <SocialLink icon={Twitter} href="#" />
              <SocialLink icon={Instagram} href="#" />
              <SocialLink icon={Linkedin} href="#" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/alerts">Active Alerts</FooterLink>
              <FooterLink href="/map">Alert Map</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <FooterLink href="/help">Help Center</FooterLink>
              <FooterLink href="/safety">Safety Tips</FooterLink>
              <FooterLink href="/volunteer">Volunteer</FooterLink>
              <FooterLink href="/partners">Partners</FooterLink>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-primary-foreground/60">
                <Phone className="w-4 h-4" />
                <span>1-800-MISSING</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/60">
                <Mail className="w-4 h-4" />
                <span>help@communityalert.org</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/60">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>National Center for Missing & Exploited Children Partner</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <div className="flex items-center gap-1">
              <span>© 2024 Community Alert. Made with</span>
              <Heart className="w-4 h-4 text-critical fill-critical" />
              <span>for communities everywhere.</span>
            </div>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary-foreground transition-colors">
                Terms of Service
              </Link>
              <Link to="/accessibility" className="hover:text-primary-foreground transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link 
        to={href} 
        className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
      >
        {children}
      </Link>
    </li>
  );
}

function SocialLink({ icon: Icon, href }: { icon: React.ComponentType<{ className?: string }>; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
    >
      <Icon className="w-4 h-4" />
    </a>
  );
}
