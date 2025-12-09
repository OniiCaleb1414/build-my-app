import { MapPin, Clock, Eye, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Alert, getTimeAgo, getCategoryLabel } from "@/lib/alerts";

interface AlertCardProps {
  alert: Alert;
  onClick?: () => void;
}

export function AlertCard({ alert, onClick }: AlertCardProps) {
  const cardVariant = 
    alert.status === 'RESOLVED' ? 'alertResolved' :
    alert.category === 'ENDANGERED' || alert.category === 'ABDUCTION' ? 'alertCritical' :
    'alertActive';

  const badgeVariant = 
    alert.status === 'RESOLVED' ? 'resolved' :
    alert.category === 'ENDANGERED' || alert.category === 'ABDUCTION' ? 'critical' :
    'active';

  return (
    <Card 
      variant={cardVariant}
      className="cursor-pointer group"
      onClick={onClick}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start gap-4">
          {/* Photo */}
          <div className="relative shrink-0">
            <img
              src={alert.person.photos[0]}
              alt={alert.person.name}
              className="w-20 h-20 rounded-xl object-cover shadow-md"
            />
            {alert.status === 'ACTIVE' && (
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full border-2 border-card animate-pulse" />
            )}
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <Badge variant={badgeVariant}>
                {alert.status === 'RESOLVED' ? 'Found Safe' : getCategoryLabel(alert.category)}
              </Badge>
            </div>
            
            <h3 className="text-lg font-bold text-foreground truncate">
              {alert.person.name}
            </h3>
            
            <p className="text-muted-foreground text-sm">
              {alert.person.age} years old • {alert.person.gender}
            </p>
          </div>

          {/* Arrow */}
          <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        {/* Description */}
        <p className="text-sm text-foreground/80 line-clamp-2">
          {alert.person.description}
        </p>

        {/* Meta info */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-primary" />
            <span>{alert.location.city}, {alert.location.state}</span>
          </div>
          
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-primary" />
            <span>{getTimeAgo(alert.metadata.createdAt)}</span>
          </div>

          {alert.sightingsCount > 0 && (
            <div className="flex items-center gap-1.5">
              <Eye className="w-4 h-4 text-primary" />
              <span>{alert.sightingsCount} sighting{alert.sightingsCount !== 1 ? 's' : ''}</span>
            </div>
          )}
        </div>

        {/* Last seen wearing */}
        {alert.status === 'ACTIVE' && (
          <div className="pt-2 border-t border-border">
            <p className="text-xs text-muted-foreground">
              <span className="font-medium">Last seen wearing:</span>{" "}
              {alert.person.lastSeenWearing}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

interface AlertListProps {
  alerts: Alert[];
  onAlertClick?: (alert: Alert) => void;
}

export function AlertList({ alerts, onAlertClick }: AlertListProps) {
  const activeAlerts = alerts.filter(a => a.status === 'ACTIVE');
  const resolvedAlerts = alerts.filter(a => a.status === 'RESOLVED');

  return (
    <div className="space-y-8">
      {/* Active Alerts */}
      {activeAlerts.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-foreground">
              Active Alerts
              <span className="ml-2 text-sm font-normal text-muted-foreground">
                ({activeAlerts.length})
              </span>
            </h2>
            <Button variant="ghost" size="sm">
              View all
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {activeAlerts.map((alert) => (
              <AlertCard 
                key={alert.id} 
                alert={alert} 
                onClick={() => onAlertClick?.(alert)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Resolved Alerts */}
      {resolvedAlerts.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-foreground">
              Recently Resolved
              <span className="ml-2 text-sm font-normal text-muted-foreground">
                ({resolvedAlerts.length})
              </span>
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {resolvedAlerts.map((alert) => (
              <AlertCard 
                key={alert.id} 
                alert={alert}
                onClick={() => onAlertClick?.(alert)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
