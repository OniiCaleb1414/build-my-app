import { MapPin, Clock, Phone, Share2, Flag, ArrowLeft, ChevronRight, Eye, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, getTimeAgo, getCategoryLabel } from "@/lib/alerts";

interface AlertDetailProps {
  alert: Alert;
  onBack: () => void;
}

export function AlertDetail({ alert, onBack }: AlertDetailProps) {
  const badgeVariant = 
    alert.status === 'RESOLVED' ? 'resolved' :
    alert.category === 'ENDANGERED' || alert.category === 'ABDUCTION' ? 'critical' :
    'active';

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Back Button */}
      <Button variant="ghost" onClick={onBack} className="gap-2">
        <ArrowLeft className="w-4 h-4" />
        Back to Alerts
      </Button>

      {/* Main Content */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Column - Photo & Quick Info */}
        <div className="lg:col-span-1 space-y-4">
          {/* Photo */}
          <div className="relative">
            <img
              src={alert.person.photos[0]}
              alt={alert.person.name}
              className="w-full aspect-square object-cover rounded-2xl shadow-lg"
            />
            <Badge 
              variant={badgeVariant} 
              className="absolute top-4 left-4 text-sm px-4 py-1.5"
            >
              {alert.status === 'RESOLVED' ? 'Found Safe' : getCategoryLabel(alert.category)}
            </Badge>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-3">
            <Button variant="secondary" className="w-full">
              <Phone className="w-4 h-4" />
              Call Tips Line
            </Button>
            <Button variant="outline" className="w-full">
              <Share2 className="w-4 h-4" />
              Share
            </Button>
          </div>

          {alert.status === 'ACTIVE' && (
            <Button variant="hero" size="lg" className="w-full">
              <Eye className="w-5 h-5" />
              Report Sighting
            </Button>
          )}
        </div>

        {/* Right Column - Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              {alert.person.name}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <span>{alert.person.age} years old</span>
              <span>•</span>
              <span>{alert.person.gender}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                Reported {getTimeAgo(alert.metadata.createdAt)}
              </span>
            </div>
          </div>

          {/* Alert Banner */}
          {alert.status === 'ACTIVE' && (alert.category === 'ENDANGERED' || alert.category === 'ABDUCTION') && (
            <div className="flex items-center gap-3 p-4 rounded-xl bg-critical/10 border border-critical/30">
              <AlertTriangle className="w-6 h-6 text-critical shrink-0" />
              <div>
                <p className="font-semibold text-critical">
                  {alert.category === 'ABDUCTION' ? 'Possible Abduction' : 'Endangered Person'}
                </p>
                <p className="text-sm text-foreground/80">
                  {alert.category === 'ABDUCTION' 
                    ? 'If you see this person, do not approach. Call 911 immediately.'
                    : 'This person may be in danger. Please report any sightings immediately.'}
                </p>
              </div>
            </div>
          )}

          {/* Description */}
          <Card variant="default">
            <CardContent className="p-5">
              <h3 className="font-semibold text-foreground mb-2">Description</h3>
              <p className="text-foreground/80">{alert.person.description}</p>
            </CardContent>
          </Card>

          {/* Physical Description */}
          <Card variant="default">
            <CardContent className="p-5">
              <h3 className="font-semibold text-foreground mb-4">Physical Description</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <DescriptionItem label="Height" value={alert.person.height} />
                <DescriptionItem label="Weight" value={alert.person.weight} />
                <DescriptionItem label="Hair" value={alert.person.hairColor} />
                <DescriptionItem label="Eyes" value={alert.person.eyeColor} />
              </div>
            </CardContent>
          </Card>

          {/* Last Seen */}
          <Card variant="default">
            <CardContent className="p-5">
              <h3 className="font-semibold text-foreground mb-4">Last Known Location</h3>
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">{alert.location.lastSeen}</p>
                  <p className="text-muted-foreground">{alert.location.city}, {alert.location.state}</p>
                </div>
              </div>
              <div className="bg-muted rounded-xl h-48 flex items-center justify-center">
                <span className="text-muted-foreground">Map View</span>
              </div>
            </CardContent>
          </Card>

          {/* Clothing */}
          <Card variant="default">
            <CardContent className="p-5">
              <h3 className="font-semibold text-foreground mb-2">Last Seen Wearing</h3>
              <p className="text-foreground/80">{alert.person.lastSeenWearing}</p>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card variant="default">
            <CardContent className="p-5">
              <h3 className="font-semibold text-foreground mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-lg bg-muted">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span className="font-medium">{alert.metadata.contactInfo}</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </div>
                {alert.metadata.caseNumber && (
                  <p className="text-sm text-muted-foreground">
                    Case Number: {alert.metadata.caseNumber}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Sightings */}
          {alert.sightingsCount > 0 && (
            <Card variant="default">
              <CardContent className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {alert.sightingsCount} Reported Sighting{alert.sightingsCount !== 1 ? 's' : ''}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Community members have reported seeing this person
                    </p>
                  </div>
                  <Button variant="ghost">
                    View Map
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

function DescriptionItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-muted-foreground uppercase tracking-wide">{label}</p>
      <p className="font-medium text-foreground">{value}</p>
    </div>
  );
}
