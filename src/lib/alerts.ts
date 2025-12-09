export interface Alert {
  id: string;
  status: 'ACTIVE' | 'RESOLVED' | 'EXPIRED';
  category: 'MISSING' | 'ENDANGERED' | 'ABDUCTION';
  person: {
    name: string;
    age: number;
    gender: string;
    description: string;
    height: string;
    weight: string;
    hairColor: string;
    eyeColor: string;
    lastSeenWearing: string;
    photos: string[];
  };
  location: {
    lastSeen: string;
    city: string;
    state: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    radius: number;
  };
  metadata: {
    createdAt: Date;
    updatedAt: Date;
    expiresAt: Date;
    caseNumber?: string;
    contactInfo: string;
    reportedBy: string;
  };
  sightingsCount: number;
}

export interface Sighting {
  id: string;
  alertId: string;
  location: {
    address: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  description: string;
  timestamp: Date;
  isVerified: boolean;
  isAnonymous: boolean;
}

export const mockAlerts: Alert[] = [
  {
    id: '1',
    status: 'ACTIVE',
    category: 'ENDANGERED',
    person: {
      name: 'Emily Johnson',
      age: 14,
      gender: 'Female',
      description: 'Last seen walking home from school. May be disoriented due to medical condition.',
      height: "5'2\"",
      weight: '105 lbs',
      hairColor: 'Brown',
      eyeColor: 'Blue',
      lastSeenWearing: 'Blue hoodie, jeans, white sneakers, carrying purple backpack',
      photos: ['https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face'],
    },
    location: {
      lastSeen: 'Lincoln Elementary School',
      city: 'Springfield',
      state: 'IL',
      coordinates: { lat: 39.7817, lng: -89.6501 },
      radius: 15,
    },
    metadata: {
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
      updatedAt: new Date(Date.now() - 30 * 60 * 1000),
      expiresAt: new Date(Date.now() + 72 * 60 * 60 * 1000),
      caseNumber: 'SPD-2024-4521',
      contactInfo: 'Springfield Police: (217) 555-0123',
      reportedBy: 'Family',
    },
    sightingsCount: 3,
  },
  {
    id: '2',
    status: 'ACTIVE',
    category: 'MISSING',
    person: {
      name: 'Robert Chen',
      age: 72,
      gender: 'Male',
      description: 'Has Alzheimer\'s. May appear confused. Responds to "Bobby".',
      height: "5'8\"",
      weight: '160 lbs',
      hairColor: 'Gray',
      eyeColor: 'Brown',
      lastSeenWearing: 'Red flannel shirt, khaki pants, brown loafers',
      photos: ['https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?w=400&h=400&fit=crop&crop=face'],
    },
    location: {
      lastSeen: 'Sunrise Senior Living',
      city: 'Oak Park',
      state: 'IL',
      coordinates: { lat: 41.8850, lng: -87.7845 },
      radius: 10,
    },
    metadata: {
      createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000),
      updatedAt: new Date(Date.now() - 1 * 60 * 60 * 1000),
      expiresAt: new Date(Date.now() + 48 * 60 * 60 * 1000),
      caseNumber: 'OPD-2024-892',
      contactInfo: 'Oak Park Police: (708) 555-0456',
      reportedBy: 'Facility Staff',
    },
    sightingsCount: 1,
  },
  {
    id: '3',
    status: 'RESOLVED',
    category: 'MISSING',
    person: {
      name: 'Sarah Mitchell',
      age: 28,
      gender: 'Female',
      description: 'Found safe. Thank you to all who helped!',
      height: "5'6\"",
      weight: '135 lbs',
      hairColor: 'Blonde',
      eyeColor: 'Green',
      lastSeenWearing: 'Black dress, heels',
      photos: ['https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face'],
    },
    location: {
      lastSeen: 'Downtown Chicago',
      city: 'Chicago',
      state: 'IL',
      coordinates: { lat: 41.8781, lng: -87.6298 },
      radius: 5,
    },
    metadata: {
      createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
      updatedAt: new Date(Date.now() - 12 * 60 * 60 * 1000),
      expiresAt: new Date(Date.now() - 6 * 60 * 60 * 1000),
      caseNumber: 'CPD-2024-12453',
      contactInfo: 'Chicago Police: (312) 555-0789',
      reportedBy: 'Family',
    },
    sightingsCount: 7,
  },
];

export function getTimeAgo(date: Date): string {
  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
  
  if (seconds < 60) return 'Just now';
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
  return `${Math.floor(seconds / 86400)}d ago`;
}

export function getCategoryLabel(category: Alert['category']): string {
  const labels = {
    MISSING: 'Missing Person',
    ENDANGERED: 'Endangered Missing',
    ABDUCTION: 'Abduction Alert',
  };
  return labels[category];
}
