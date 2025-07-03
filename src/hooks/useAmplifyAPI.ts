import { generateClient } from 'aws-amplify/data';
import { uploadData, getUrl, remove } from 'aws-amplify/storage';
import type { Schema } from '../../amplify/data/resource';

const client = generateClient<Schema>();

export const useAmplifyAPI = () => {
  // Blog Posts
  const createBlogPost = async (blogPost: {
    title: string;
    content: string;
    description: string;
    category: 'competitions' | 'grading' | 'news' | 'events';
    status: 'draft' | 'published';
    author: string;
    competitionType?: string;
    imageUrls?: string[];
  }) => {
    return await client.models.BlogPost.create({
      ...blogPost,
      publishedAt: blogPost.status === 'published' ? new Date().toISOString() : undefined,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
  };

  const updateBlogPost = async (id: string, updates: Partial<Schema['BlogPost']['type']>) => {
    return await client.models.BlogPost.update({
      id,
      ...updates,
      updatedAt: new Date().toISOString(),
    });
  };

  const deleteBlogPost = async (id: string) => {
    return await client.models.BlogPost.delete({ id });
  };

  const listBlogPosts = async () => {
    return await client.models.BlogPost.list();
  };

  // Gallery Images
  const createGalleryImage = async (image: {
    title: string;
    description?: string;
    imageUrl: string;
    category?: string;
    isVisible?: boolean;
    sortOrder?: number;
  }) => {
    return await client.models.GalleryImage.create({
      ...image,
      createdAt: new Date().toISOString(),
    });
  };

  const updateGalleryImage = async (id: string, updates: Partial<Schema['GalleryImage']['type']>) => {
    return await client.models.GalleryImage.update({ id, ...updates });
  };

  const deleteGalleryImage = async (id: string) => {
    return await client.models.GalleryImage.delete({ id });
  };

  const listGalleryImages = async () => {
    return await client.models.GalleryImage.list();
  };

  // Testimonials
  const createTestimonial = async (testimonial: {
    studentName: string;
    content: string;
    rating?: number;
    imageUrl?: string;
    isVisible?: boolean;
    sortOrder?: number;
  }) => {
    return await client.models.Testimonial.create({
      ...testimonial,
      createdAt: new Date().toISOString(),
    });
  };

  const updateTestimonial = async (id: string, updates: Partial<Schema['Testimonial']['type']>) => {
    return await client.models.Testimonial.update({ id, ...updates });
  };

  const deleteTestimonial = async (id: string) => {
    return await client.models.Testimonial.delete({ id });
  };

  const listTestimonials = async () => {
    return await client.models.Testimonial.list();
  };

  // Pricing Info
  const createPricingInfo = async (pricing: {
    type: 'membership' | 'class' | 'private' | 'uniform' | 'other';
    title: string;
    description?: string;
    price: number;
    currency?: string;
    isActive?: boolean;
    features?: string[];
    sortOrder?: number;
  }) => {
    return await client.models.PricingInfo.create(pricing);
  };

  const updatePricingInfo = async (id: string, updates: Partial<Schema['PricingInfo']['type']>) => {
    return await client.models.PricingInfo.update({ id, ...updates });
  };

  const deletePricingInfo = async (id: string) => {
    return await client.models.PricingInfo.delete({ id });
  };

  const listPricingInfo = async () => {
    return await client.models.PricingInfo.list();
  };

  // Gear Items
  const createGearItem = async (gear: {
    name: string;
    description?: string;
    price?: number;
    currency?: string;
    imageUrl?: string;
    category: 'uniform' | 'equipment' | 'accessories';
    sizes?: string[];
    isAvailable?: boolean;
    sortOrder?: number;
  }) => {
    return await client.models.GearItem.create(gear);
  };

  const updateGearItem = async (id: string, updates: Partial<Schema['GearItem']['type']>) => {
    return await client.models.GearItem.update({ id, ...updates });
  };

  const deleteGearItem = async (id: string) => {
    return await client.models.GearItem.delete({ id });
  };

  const listGearItems = async () => {
    return await client.models.GearItem.list();
  };

  // Training Schedule
  const createTrainingSchedule = async (schedule: {
    dayOfWeek: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
    startTime: string;
    endTime: string;
    className: string;
    instructor?: string;
    location?: string;
    ageGroup?: string;
    skillLevel?: string;
    isActive?: boolean;
  }) => {
    return await client.models.TrainingSchedule.create(schedule);
  };

  const updateTrainingSchedule = async (id: string, updates: Partial<Schema['TrainingSchedule']['type']>) => {
    return await client.models.TrainingSchedule.update({ id, ...updates });
  };

  const deleteTrainingSchedule = async (id: string) => {
    return await client.models.TrainingSchedule.delete({ id });
  };

  const listTrainingSchedule = async () => {
    return await client.models.TrainingSchedule.list();
  };

  // Website Settings
  const createWebsiteSetting = async (setting: {
    key: string;
    value: string;
    category: 'social' | 'contact' | 'about' | 'general';
    description?: string;
  }) => {
    return await client.models.WebsiteSettings.create(setting);
  };

  const updateWebsiteSetting = async (id: string, updates: Partial<Schema['WebsiteSettings']['type']>) => {
    return await client.models.WebsiteSettings.update({ id, ...updates });
  };

  const deleteWebsiteSetting = async (id: string) => {
    return await client.models.WebsiteSettings.delete({ id });
  };

  const listWebsiteSettings = async () => {
    return await client.models.WebsiteSettings.list();
  };

  // Contact Inquiries
  const createContactInquiry = async (inquiry: {
    name: string;
    email: string;
    phone?: string;
    message: string;
    inquiryType: 'general' | 'trial' | 'membership' | 'competition' | 'other';
  }) => {
    return await client.models.ContactInquiry.create({
      ...inquiry,
      status: 'new',
      createdAt: new Date().toISOString(),
    });
  };

  const updateContactInquiry = async (id: string, updates: Partial<Schema['ContactInquiry']['type']>) => {
    return await client.models.ContactInquiry.update({ id, ...updates });
  };

  const listContactInquiries = async () => {
    return await client.models.ContactInquiry.list();
  };

  // Location Info
  const createLocationInfo = async (location: {
    name: string;
    address: string;
    phone?: string;
    email?: string;
    coordinates?: string;
    operatingHours?: string;
    isPrimary?: boolean;
    isActive?: boolean;
  }) => {
    return await client.models.LocationInfo.create(location);
  };

  const updateLocationInfo = async (id: string, updates: Partial<Schema['LocationInfo']['type']>) => {
    return await client.models.LocationInfo.update({ id, ...updates });
  };

  const deleteLocationInfo = async (id: string) => {
    return await client.models.LocationInfo.delete({ id });
  };

  const listLocationInfo = async () => {
    return await client.models.LocationInfo.list();
  };

  // Instructor Info
  const createInstructorInfo = async (instructor: {
    name: string;
    title: string;
    bio: string;
    imageUrl?: string;
    qualifications?: string[];
    isPrimary?: boolean;
    isActive?: boolean;
    sortOrder?: number;
  }) => {
    return await client.models.InstructorInfo.create(instructor);
  };

  const updateInstructorInfo = async (id: string, updates: Partial<Schema['InstructorInfo']['type']>) => {
    return await client.models.InstructorInfo.update({ id, ...updates });
  };

  const deleteInstructorInfo = async (id: string) => {
    return await client.models.InstructorInfo.delete({ id });
  };

  const listInstructorInfo = async () => {
    return await client.models.InstructorInfo.list();
  };

  // Carousel Images
  const createCarouselImage = async (image: {
    imageUrl: string;
    title?: string;
    description?: string;
    isActive?: boolean;
    sortOrder?: number;
  }) => {
    return await client.models.CarouselImage.create(image);
  };

  const updateCarouselImage = async (id: string, updates: Partial<Schema['CarouselImage']['type']>) => {
    return await client.models.CarouselImage.update({ id, ...updates });
  };

  const deleteCarouselImage = async (id: string) => {
    return await client.models.CarouselImage.delete({ id });
  };

  const listCarouselImages = async () => {
    return await client.models.CarouselImage.list();
  };

  // Page Content
  const createPageContent = async (content: {
    page: 'about' | 'home' | 'other';
    section: string;
    title?: string;
    content: string;
    imageUrl?: string;
    isActive?: boolean;
    sortOrder?: number;
  }) => {
    return await client.models.PageContent.create(content);
  };

  const updatePageContent = async (id: string, updates: Partial<Schema['PageContent']['type']>) => {
    return await client.models.PageContent.update({ id, ...updates });
  };

  const deletePageContent = async (id: string) => {
    return await client.models.PageContent.delete({ id });
  };

  const listPageContent = async (page?: 'about' | 'home' | 'other') => {
    if (page) {
      return await client.models.PageContent.list({
        filter: { page: { eq: page } }
      });
    }
    return await client.models.PageContent.list();
  };

  // File Upload Functions
  const uploadImage = async (file: File, path: string) => {
    try {
      const result = await uploadData({
        path: `admin/${path}/${file.name}`,
        data: file,
        options: {
          contentType: file.type,
        }
      }).result;
      
      return result.path;
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    }
  };

  const getImageUrl = async (path: string) => {
    try {
      const result = await getUrl({ path });
      return result.url.toString();
    } catch (error) {
      console.error('Error getting image URL:', error);
      throw error;
    }
  };

  const deleteImage = async (path: string) => {
    try {
      await remove({ path });
    } catch (error) {
      console.error('Error deleting image:', error);
      throw error;
    }
  };

  return {
    // Blog Posts
    createBlogPost,
    updateBlogPost,
    deleteBlogPost,
    listBlogPosts,

    // Gallery Images
    createGalleryImage,
    updateGalleryImage,
    deleteGalleryImage,
    listGalleryImages,

    // Testimonials
    createTestimonial,
    updateTestimonial,
    deleteTestimonial,
    listTestimonials,

    // Pricing
    createPricingInfo,
    updatePricingInfo,
    deletePricingInfo,
    listPricingInfo,

    // Gear
    createGearItem,
    updateGearItem,
    deleteGearItem,
    listGearItems,

    // Training Schedule
    createTrainingSchedule,
    updateTrainingSchedule,
    deleteTrainingSchedule,
    listTrainingSchedule,

    // Website Settings
    createWebsiteSetting,
    updateWebsiteSetting,
    deleteWebsiteSetting,
    listWebsiteSettings,

    // Contact Inquiries
    createContactInquiry,
    updateContactInquiry,
    listContactInquiries,

    // Location Info
    createLocationInfo,
    updateLocationInfo,
    deleteLocationInfo,
    listLocationInfo,

    // Instructor Info
    createInstructorInfo,
    updateInstructorInfo,
    deleteInstructorInfo,
    listInstructorInfo,

    // Carousel Images
    createCarouselImage,
    updateCarouselImage,
    deleteCarouselImage,
    listCarouselImages,

    // Page Content
    createPageContent,
    updatePageContent,
    deletePageContent,
    listPageContent,

    // File Operations
    uploadImage,
    getImageUrl,
    deleteImage,
  };
};
