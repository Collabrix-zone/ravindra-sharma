// ─── Sanity Document Types ───────────────────────────────────────────────────

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
}

export interface Service {
  _id: string;
  _type: "service";
  title: string;
  slug: { current: string };
  description: string;
  icon?: string;
  image?: SanityImage;
  shortDescription: string;
  featured: boolean;
  order: number;
}

export interface Testimonial {
  _id: string;
  _type: "testimonial";
  patientName: string;
  rating: number;
  review: string;
  treatment: string;
  date: string;
  verified: boolean;
  image?: SanityImage;
}

export interface BlogPost {
  _id: string;
  _type: "post";
  title: string;
  slug: { current: string };
  excerpt: string;
  publishedAt: string;
  author: {
    name: string;
    image?: SanityImage;
  };
  mainImage?: SanityImage;
  categories: string[];
  body: PortableTextBlock[];
}

export interface PortableTextBlock {
  _key: string;
  _type: string;
  children?: Array<{
    _key: string;
    _type: string;
    marks: string[];
    text: string;
  }>;
  markDefs?: Array<{ _key: string; _type: string }>;
  style?: string;
}

// ─── UI / Component Props ────────────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image?: string;
  bio: string;
}
