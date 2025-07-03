// Configuration for initial data seeding
export const initialData = {
  instructors: [
    {
      name: "Master Mark Buxton",
      title: "Master Mark Buxton",
      bio: "Master Mark Buxton began his journey with Martial Arts in 1985 at the age of 14 in Karate and achieved his Black Belt at age 18. In 2002, Master Mark decided to give Taekwondo a try and excelled- achieving his Black Belt in June 2005. Korean Martial Arts were clearly a good fit with Master Mark, and he achieved his Black Belts in Hapkido in September 2010 and Kumdo in June 2018.",
      imageUrl: "/kfma/12f29b_4778be0c95bd4bf0af26d185a79d989c~mv2.avif",
      qualifications: ["Taekwondo 5th Dan", "Hapkido 4th Dan", "Kumdo 1st Dan"],
      isPrimary: true,
      isActive: true,
      sortOrder: 0
    }
  ],

  testimonials: [
    {
      studentName: "Dani, Blue Belt, Age 8",
      content: "I like to do my patterns and I like my KFMA friends. I learn self defence and it even gets me healthy",
      rating: 5,
      imageUrl: null,
      isVisible: true,
      sortOrder: 0
    }
  ],

  pricing: [
    // Membership fees - these will need to be extracted from the pricing page
    {
      type: "membership",
      title: "2 Week Free Trial",
      description: "Complete beginners welcome! Includes discounted uniform and complimentary gradings.",
      price: 0,
      currency: "AUD",
      isActive: true,
      features: ["Discounted Uniform", "Complimentary TAEKWONDO Grading", "Complimentary HAPKIDO Grading"],
      sortOrder: 0
    }
  ],

  trainingSchedule: [
    // These will need to be extracted from the schedule shown on pages
    {
      dayOfWeek: "monday",
      startTime: "19:00",
      endTime: "20:00", 
      className: "Adults Taekwondo",
      instructor: "Master Mark",
      location: "KFMA Dojo",
      ageGroup: "Adults",
      skillLevel: "All levels",
      isActive: true
    }
  ],

  websiteSettings: [
    {
      key: "youtube_url",
      value: "https://youtube.com/@KFMA",
      category: "social",
      description: "YouTube channel URL"
    },
    {
      key: "facebook_url", 
      value: "https://facebook.com/KFMA",
      category: "social",
      description: "Facebook page URL"
    },
    {
      key: "instagram_url",
      value: "https://instagram.com/KFMA",
      category: "social", 
      description: "Instagram profile URL"
    },
    {
      key: "primary_phone",
      value: "+61 XXX XXX XXX",
      category: "contact",
      description: "Primary contact phone number"
    },
    {
      key: "primary_email",
      value: "info@kfma.com.au",
      category: "contact", 
      description: "Primary contact email"
    }
  ],

  locations: [
    {
      name: "KFMA Dojo",
      address: "123 Main Street, Brisbane, QLD 4000",
      phone: "+61 XXX XXX XXX",
      email: "info@kfma.com.au",
      coordinates: "-27.4698,153.0251", // Brisbane coordinates
      operatingHours: "Mon-Fri: 6:00 PM - 9:00 PM, Sat: 9:00 AM - 12:00 PM",
      isPrimary: true,
      isActive: true
    }
  ],

  carouselImages: [
    {
      imageUrl: "/kfma/12f29b_031041a90ff34c618133bce229fddbd5~mv2.avif",
      title: "KFMA Training",
      description: "",
      isActive: true,
      sortOrder: 0
    },
    {
      imageUrl: "/kfma/12f29b_05614dcb336e46888a42d5612ef59298~mv2.avif", 
      title: "KFMA Training",
      description: "",
      isActive: true,
      sortOrder: 1
    },
    {
      imageUrl: "/kfma/12f29b_16d3aa9f3e5546de91424e3920b5c2d4~mv2.avif",
      title: "KFMA Training", 
      description: "",
      isActive: true,
      sortOrder: 2
    },
    {
      imageUrl: "/kfma/12f29b_2c05c65d13484f8f8cb6e8194836e779~mv2.avif",
      title: "KFMA Training",
      description: "",
      isActive: true,
      sortOrder: 3
    },
    {
      imageUrl: "/kfma/12f29b_37573bec74014ad89680c38ab0b8d838~mv2.avif",
      title: "KFMA Training",
      description: "",
      isActive: true,
      sortOrder: 4
    },
    {
      imageUrl: "/kfma/12f29b_4778be0c95bd4bf0af26d185a79d989c~mv2.avif",
      title: "KFMA Training",
      description: "",
      isActive: true,
      sortOrder: 5
    },
    {
      imageUrl: "/kfma/12f29b_51cf3577adb9435cbdf7329959ae7e38~mv2.avif",
      title: "KFMA Training",
      description: "",
      isActive: true,
      sortOrder: 6
    },
    {
      imageUrl: "/kfma/12f29b_8e2e21531b4c44159623c85341779884~mv2.avif",
      title: "KFMA Training",
      description: "",
      isActive: true,
      sortOrder: 7
    }
  ],

  galleryImages: [
    // All the gallery images from the Gallery component
    "11e7871d-9180-4b37-b484-9946f57b7190_edited.avif",
    "12f29b_031041a90ff34c618133bce229fddbd5~mv2.avif",
    "12f29b_05614dcb336e46888a42d5612ef59298~mv2.avif",
    "12f29b_05a22f50d696496dad013b5c26ee59d8~mv2.avif",
    "12f29b_0ae119209c524c188824e7a7440af2b5~mv2.avif",
    "12f29b_16d3aa9f3e5546de91424e3920b5c2d4~mv2.avif",
    "12f29b_2c05c65d13484f8f8cb6e8194836e779~mv2.avif",
    "12f29b_37573bec74014ad89680c38ab0b8d838~mv2.avif",
    "12f29b_40b66c43fa2542da9b6fc0abbce15657~mv2.avif",
    "12f29b_4778be0c95bd4bf0af26d185a79d989c~mv2.avif",
    "12f29b_51cf3577adb9435cbdf7329959ae7e38~mv2.avif",
    "12f29b_5b77fbb11f7d420a97007da13ba7d90a~mv2.avif",
    "12f29b_6f72835db92e439b9b849d584bd380d6~mv2.avif",
    "12f29b_7fc702abf8ae4e12903ac674a4e5a778~mv2.avif",
    "12f29b_8e2e21531b4c44159623c85341779884~mv2.avif",
    "12f29b_96ca7e71d40644f58d16c9239bc70bae~mv2.avif",
    "12f29b_994c5178e07449e19c3122602e3b849f~mv2.avif",
    "12f29b_a1fac0f393314995b291402cabf32c12~mv2.avif",
    "12f29b_a9366e1d53f647cab8b8bacbadd3a6c4~mv2.avif",
    "12f29b_c493b99f40294a13b0223e12d0e278af~mv2.avif",
    "12f29b_cd42df2add8944e2938301850ed7adfb~mv2.avif",
    "12f29b_dbf8f1400e6744b1add9012414e7bf4e~mv2.avif",
    "12f29b_e560defa4262472e94de8e33452c0ad2f000.avif",
    "12f29b_e65c9f87c16e4e41be98a142e36885e6~mv2.avif",
    "12f29b_eeb87105eca44f7995a3d532bd2623f4~mv2.avif",
    "12f29b_f4bb3baa172f403b99351c06806fd3f2~mv2.avif",
    "12f29b_fc43056862ca4f23963c9fe46364a268~mv2.avif"
  ].map((filename, index) => ({
    title: `KFMA Gallery ${index + 1}`,
    description: "",
    imageUrl: `/kfma/${filename}`,
    category: "training",
    isVisible: true,
    sortOrder: index
  })),

  blogPosts: [
    {
      title: "Gold Coast Open 2025",
      content: `# Gold Coast Open 2025

On the 4th May 2025, KFMA headed to the Cararra Indoor Stadium for the Annual Gold Coast Open. This is the first time KFMA have competed as a team, and we had 5 players enter- 2 in sparring and 5 in poomsae events. We trained hard for this over the last couple of months including extra Saturday training.

## Results

**KFMA had 5 gold medals from 5 players bringing home 100% Gold!**

### Poomsae Results (Individual)

| Player | Score | Medal |
|--------|-------|-------|
| Brooke | 6.13  | 🥇 Gold |
| Alexanda | 6.00 | 🥇 Gold |
| Zara | 5.89 | 🥇 Gold |
| Sam | 5.40 | 🥇 Gold |
| Dani | 4.98 | 🥇 Gold |

We are incredibly proud of all our competitors and their dedication to training.`,
      description: "KFMA's first competition as a team resulted in 100% gold medals!",
      category: "competitions",
      status: "published",
      author: "Master Mark",
      competitionType: "Gold Coast Open",
      imageUrls: [],
      publishedAt: "2025-05-04T00:00:00.000Z",
      createdAt: "2025-05-04T00:00:00.000Z",
      updatedAt: "2025-05-04T00:00:00.000Z"
    }
  ]
};
