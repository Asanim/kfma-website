import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  // Blog Posts
  BlogPost: a
    .model({
      title: a.string().required(),
      content: a.string().required(), // Markdown content
      description: a.string().required(),
      category: a.enum(['competitions', 'grading', 'news', 'events']),
      status: a.enum(['draft', 'published']),
      author: a.string().required(),
      competitionType: a.string(), // For competition posts
      imageUrls: a.string().array(), // Array of image URLs
      publishedAt: a.datetime(),
      createdAt: a.datetime(),
      updatedAt: a.datetime(),
    })
    .authorization((allow) => [
      allow.authenticated().to(['read']),
      allow.group('admin').to(['create', 'read', 'update', 'delete'])
    ]),

  // Gallery Images
  GalleryImage: a
    .model({
      title: a.string().required(),
      description: a.string(),
      imageUrl: a.string().required(),
      category: a.string(),
      isVisible: a.boolean().default(true),
      sortOrder: a.integer().default(0),
      createdAt: a.datetime(),
    })
    .authorization((allow) => [
      allow.guest().to(['read']),
      allow.group('admin').to(['create', 'read', 'update', 'delete'])
    ]),

  // Pricing Information
  PricingInfo: a
    .model({
      type: a.enum(['membership', 'class', 'private', 'uniform', 'other']),
      title: a.string().required(),
      description: a.string(),
      price: a.float().required(),
      currency: a.string().default('AUD'),
      isActive: a.boolean().default(true),
      features: a.string().array(),
      sortOrder: a.integer().default(0),
    })
    .authorization((allow) => [
      allow.guest().to(['read']),
      allow.group('admin').to(['create', 'read', 'update', 'delete'])
    ]),

  // Gear/Uniforms
  GearItem: a
    .model({
      name: a.string().required(),
      description: a.string(),
      price: a.float(),
      currency: a.string().default('AUD'),
      imageUrl: a.string(),
      category: a.enum(['uniform', 'equipment', 'accessories']),
      sizes: a.string().array(),
      isAvailable: a.boolean().default(true),
      sortOrder: a.integer().default(0),
    })
    .authorization((allow) => [
      allow.guest().to(['read']),
      allow.group('admin').to(['create', 'read', 'update', 'delete'])
    ]),

  // Student Testimonials
  Testimonial: a
    .model({
      studentName: a.string().required(),
      content: a.string().required(),
      rating: a.integer().default(5),
      imageUrl: a.string(),
      isVisible: a.boolean().default(true),
      sortOrder: a.integer().default(0),
      createdAt: a.datetime(),
    })
    .authorization((allow) => [
      allow.guest().to(['read']),
      allow.group('admin').to(['create', 'read', 'update', 'delete'])
    ]),

  // Training Schedule
  TrainingSchedule: a
    .model({
      dayOfWeek: a.enum(['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']),
      startTime: a.string().required(),
      endTime: a.string().required(),
      className: a.string().required(),
      instructor: a.string(),
      location: a.string(),
      ageGroup: a.string(),
      skillLevel: a.string(),
      isActive: a.boolean().default(true),
    })
    .authorization((allow) => [
      allow.guest().to(['read']),
      allow.group('admin').to(['create', 'read', 'update', 'delete'])
    ]),

  // Contact Inquiries
  ContactInquiry: a
    .model({
      name: a.string().required(),
      email: a.string().required(),
      phone: a.string(),
      message: a.string().required(),
      inquiryType: a.enum(['general', 'trial', 'membership', 'competition', 'other']),
      status: a.enum(['new', 'contacted', 'resolved']).default('new'),
      createdAt: a.datetime(),
      notes: a.string(),
    })
    .authorization((allow) => [
      allow.guest().to(['create']),
      allow.group('admin').to(['create', 'read', 'update', 'delete'])
    ]),

  // Website Settings
  WebsiteSettings: a
    .model({
      key: a.string().required(),
      value: a.string().required(),
      category: a.enum(['social', 'contact', 'about', 'general']),
      description: a.string(),
    })
    .authorization((allow) => [
      allow.guest().to(['read']),
      allow.group('admin').to(['create', 'read', 'update', 'delete'])
    ]),

  // Location Information
  LocationInfo: a
    .model({
      name: a.string().required(),
      address: a.string().required(),
      phone: a.string(),
      email: a.string(),
      coordinates: a.string(), // "lat,lng" format
      operatingHours: a.string(),
      isPrimary: a.boolean().default(false),
      isActive: a.boolean().default(true),
    })
    .authorization((allow) => [
      allow.guest().to(['read']),
      allow.group('admin').to(['create', 'read', 'update', 'delete'])
    ]),

  // Master/Instructor Information
  InstructorInfo: a
    .model({
      name: a.string().required(),
      title: a.string().required(), // Master Mark Buxton
      bio: a.string().required(),
      imageUrl: a.string(),
      qualifications: a.string().array(), // ["Taekwondo 5th Dan", "Hapkido 4th Dan", etc.]
      isPrimary: a.boolean().default(false),
      isActive: a.boolean().default(true),
      sortOrder: a.integer().default(0),
    })
    .authorization((allow) => [
      allow.guest().to(['read']),
      allow.group('admin').to(['create', 'read', 'update', 'delete'])
    ]),

  // Home Page Carousel Images
  CarouselImage: a
    .model({
      imageUrl: a.string().required(),
      title: a.string(),
      description: a.string(),
      isActive: a.boolean().default(true),
      sortOrder: a.integer().default(0),
    })
    .authorization((allow) => [
      allow.guest().to(['read']),
      allow.group('admin').to(['create', 'read', 'update', 'delete'])
    ]),

  // Page Content (for About page and other static content)
  PageContent: a
    .model({
      page: a.enum(['about', 'home', 'other']),
      section: a.string().required(), // e.g., "hero", "history", "mission"
      title: a.string(),
      content: a.string().required(), // Markdown content
      imageUrl: a.string(),
      isActive: a.boolean().default(true),
      sortOrder: a.integer().default(0),
    })
    .authorization((allow) => [
      allow.guest().to(['read']),
      allow.group('admin').to(['create', 'read', 'update', 'delete'])
    ]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
