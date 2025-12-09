import { Bell, MapPin, Users, Shield, Clock, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-community.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Community network connecting people"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/90 via-foreground/75 to-foreground/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-3xl space-y-8">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary-foreground animate-fade-in"
            style={{ animationDelay: '0.1s' }}
          >
            <Bell className="w-4 h-4" />
            <span className="text-sm font-medium">Real-time community alerts</span>
          </div>

          {/* Headline */}
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight animate-slide-up"
            style={{ animationDelay: '0.2s' }}
          >
            Bringing Missing Persons{" "}
            <span className="text-primary">Home</span>, Together
          </h1>

          {/* Subheadline */}
          <p 
            className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl animate-slide-up"
            style={{ animationDelay: '0.3s' }}
          >
            Community Alert connects law enforcement, families, and neighbors through 
            real-time, location-based alerts. When someone goes missing, every second counts.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-wrap gap-4 animate-slide-up"
            style={{ animationDelay: '0.4s' }}
          >
            <Button variant="hero" size="xl">
              <Bell className="w-5 h-5" />
              Enable Alerts
            </Button>
            <Button variant="subtle" size="xl" className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/20">
              View Active Cases
            </Button>
          </div>

          {/* Stats */}
          <div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-primary-foreground/20 animate-fade-in"
            style={{ animationDelay: '0.6s' }}
          >
            <StatItem icon={Eye} value="75%" label="Faster awareness" />
            <StatItem icon={Clock} value="<2hrs" label="To coordinate" />
            <StatItem icon={Users} value="10K+" label="Community members" />
            <StatItem icon={Shield} value="99.9%" label="Alert delivery" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}

function StatItem({ icon: Icon, value, label }: { icon: React.ComponentType<{ className?: string }>, value: string, label: string }) {
  return (
    <div className="text-center md:text-left">
      <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
        <Icon className="w-4 h-4 text-primary" />
        <span className="text-2xl font-bold text-primary-foreground">{value}</span>
      </div>
      <span className="text-sm text-primary-foreground/60">{label}</span>
    </div>
  );
}
