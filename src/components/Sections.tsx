import { Bell, Eye, Camera, Search, Users, Shield, Map, Clock, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function HowItWorks() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How Community Alert Works
          </h2>
          <p className="text-lg text-muted-foreground">
            A simple, powerful system designed to mobilize communities and bring missing persons home faster.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <StepCard
            step={1}
            icon={Bell}
            title="Receive Alerts"
            description="Get instant, location-based notifications when someone goes missing in your area. Alerts include photos, descriptions, and last known location."
          />
          <StepCard
            step={2}
            icon={Eye}
            title="Report Sightings"
            description="See someone who matches the description? Submit a quick, anonymous sighting report with location and photos. Every tip helps."
          />
          <StepCard
            step={3}
            icon={Users}
            title="Coordinate Search"
            description="Join organized search efforts in your community. Real-time coordination tools help volunteers cover more ground efficiently."
          />
        </div>
      </div>
    </section>
  );
}

function StepCard({ step, icon: Icon, title, description }: {
  step: number;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}) {
  return (
    <Card variant="elevated" className="relative overflow-hidden group">
      <CardContent className="p-6">
        <div className="absolute -top-4 -right-4 text-8xl font-black text-primary/5 group-hover:text-primary/10 transition-colors">
          {step}
        </div>
        <div className="relative">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
            <Icon className="w-7 h-7 text-primary" />
          </div>
          <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export function Features() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Built for Critical Moments
          </h2>
          <p className="text-lg text-muted-foreground">
            Every feature is designed with one goal: reducing the time between a person going missing and their safe recovery.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={Map}
            title="Location-Based Alerts"
            description="Receive alerts only when entering affected areas. Smart geofencing ensures relevant notifications without fatigue."
          />
          <FeatureCard
            icon={Camera}
            title="Quick Reporting"
            description="Submit sighting reports in under 30 seconds. Anonymous options available. Photos auto-compressed for fast upload."
          />
          <FeatureCard
            icon={Clock}
            title="Real-Time Updates"
            description="Get instant updates as new information becomes available. Status changes, sighting confirmations, and case resolutions."
          />
          <FeatureCard
            icon={Shield}
            title="Privacy Protected"
            description="Your location is processed ephemerally. No account required to receive alerts. Full control over your data."
          />
          <FeatureCard
            icon={Search}
            title="Search Coordination"
            description="Heat maps show coverage, volunteer check-ins track progress, and resource boards connect needs with helpers."
          />
          <FeatureCard
            icon={Heart}
            title="Community Powered"
            description="Join thousands of community members working together. Every set of eyes matters in bringing someone home."
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, description }: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}) {
  return (
    <Card variant="interactive" className="h-full">
      <CardContent className="p-6">
        <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-accent-foreground" />
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
    </Card>
  );
}

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="container">
        <Card variant="elevated" className="overflow-hidden">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Ready to Make a Difference?
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Join thousands of community members who are helping bring missing persons home. 
                  Enable alerts in your area and become part of the solution.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="hero" size="lg">
                    <Bell className="w-5 h-5" />
                    Enable Alerts
                  </Button>
                  <Button variant="outline" size="lg">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <StatCard value="75%" label="Faster awareness" />
                <StatCard value="<2 hrs" label="To coordinate" />
                <StatCard value="99.9%" label="Delivery rate" />
                <StatCard value="24/7" label="Monitoring" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="p-4 rounded-xl bg-background border border-border text-center">
      <p className="text-2xl md:text-3xl font-bold text-primary">{value}</p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
