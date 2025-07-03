import { type Schema } from '../../amplify/data/resource';

export type BlogPost = Schema['BlogPost']['type'];
export type GalleryImage = Schema['GalleryImage']['type'];
export type PricingInfo = Schema['PricingInfo']['type'];
export type GearItem = Schema['GearItem']['type'];
export type Testimonial = Schema['Testimonial']['type'];
export type TrainingSchedule = Schema['TrainingSchedule']['type'];
export type ContactInquiry = Schema['ContactInquiry']['type'];
export type WebsiteSettings = Schema['WebsiteSettings']['type'];
export type LocationInfo = Schema['LocationInfo']['type'];

export interface AdminFormData {
  blogPost: {
    title: string;
    content: string;
    description: string;
    category: 'competitions' | 'grading' | 'news' | 'events';
    status: 'draft' | 'published';
    competitionType?: string;
    imageUrls: string[];
  };
  galleryImage: {
    title: string;
    description: string;
    imageUrl: string;
    category: string;
    isVisible: boolean;
  };
  pricingInfo: {
    type: 'membership' | 'class' | 'private' | 'uniform' | 'other';
    title: string;
    description: string;
    price: number;
    features: string[];
    isActive: boolean;
  };
  gearItem: {
    name: string;
    description: string;
    price: number;
    category: 'uniform' | 'equipment' | 'accessories';
    sizes: string[];
    isAvailable: boolean;
  };
  testimonial: {
    studentName: string;
    content: string;
    rating: number;
    isVisible: boolean;
  };
  trainingSchedule: {
    dayOfWeek: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
    startTime: string;
    endTime: string;
    className: string;
    instructor: string;
    location: string;
    ageGroup: string;
    skillLevel: string;
    isActive: boolean;
  };
  websiteSettings: {
    key: string;
    value: string;
    category: 'social' | 'contact' | 'about' | 'general';
    description: string;
  };
  locationInfo: {
    name: string;
    address: string;
    phone: string;
    email: string;
    coordinates: string;
    operatingHours: string;
    isPrimary: boolean;
    isActive: boolean;
  };
}
