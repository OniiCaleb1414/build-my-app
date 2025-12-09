import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AlertList } from "@/components/AlertCard";
import { AlertDetail } from "@/components/AlertDetail";
import { HowItWorks, Features, CTASection } from "@/components/Sections";
import { Footer } from "@/components/Footer";
import { mockAlerts, Alert } from "@/lib/alerts";

const Index = () => {
  const [selectedAlert, setSelectedAlert] = useState<Alert | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {selectedAlert ? (
          <section className="pt-24 pb-12">
            <div className="container">
              <AlertDetail 
                alert={selectedAlert} 
                onBack={() => setSelectedAlert(null)} 
              />
            </div>
          </section>
        ) : (
          <>
            {/* Hero */}
            <HeroSection />

            {/* Active Alerts Section */}
            <section className="py-16" id="alerts">
              <div className="container">
                <div className="text-center max-w-2xl mx-auto mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Active Alerts Near You
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    These missing persons have been reported in your area. 
                    Every set of eyes helps bring someone home.
                  </p>
                </div>

                <AlertList 
                  alerts={mockAlerts} 
                  onAlertClick={setSelectedAlert}
                />
              </div>
            </section>

            {/* How It Works */}
            <HowItWorks />

            {/* Features */}
            <Features />

            {/* CTA */}
            <CTASection />
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Index;
