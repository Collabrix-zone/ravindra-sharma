import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url'

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

const builder = imageUrlBuilder(sanityClient)
export const urlFor = (source: SanityImageSource) => builder.image(source)

// GROQ queries
export const queries = {
  // Blog
  blogPosts: `*[_type == "post"] | order(publishedAt desc) {
    _id, title, slug, excerpt, category, publishedAt, "readTime": readTime
  }`,
  blogPostBySlug: `*[_type == "post" && slug.current == $slug][0] {
    _id, title, slug, excerpt, category, publishedAt, body, readTime
  }`,

  // Services
  services: `*[_type == "service"] | order(order asc) {
    _id, title, subtitle, description, highlights, color
  }`,

  // Testimonials
  testimonials: `*[_type == "testimonial" && approved == true] | order(_createdAt desc) {
    _id, name, location, rating, review, "date": _createdAt
  }`,

  // FAQs
  faqs: `*[_type == "faq" && published == true] | order(order asc) {
    _id, question, answer, order
  }`,

  // Doctor Profile
  doctorProfile: `*[_type == "doctorProfile"][0] {
    _id, name, title, hospital, photo, bio, bioExtended,
    qualifications, highlights, stats, internationalExposure
  }`,

  // Team Members
  teamMembers: `*[_type == "teamMember" && published == true] | order(order asc) {
    _id, name, role, department, photo, bio, qualifications
  }`,

  // Gallery
  gallery: `*[_type == "gallery" && published == true] | order(order asc) {
    _id, title, category, image, caption
  }`,
  galleryByCategory: `*[_type == "gallery" && published == true && category == $category] | order(order asc) {
    _id, title, category, image, caption
  }`,

  // Announcements (active and within date range)
  activeAnnouncements: `*[_type == "announcement" && active == true && (
    !defined(startsAt) || startsAt <= now()
  ) && (
    !defined(endsAt) || endsAt >= now()
  )] | order(_createdAt desc) {
    _id, message, type, linkText, linkUrl
  }`,

  // Page Content
  pageContent: `*[_type == "pageContent" && page == $page][0] {
    _id, page, heroTagline, heroHeading, heroSubheading,
    sectionHeading, sectionDescription, metaTitle, metaDescription
  }`,

  // Contact Submissions (for internal use / Studio)
  contactSubmissions: `*[_type == "contactSubmission"] | order(submittedAt desc) {
    _id, name, email, message, submittedAt, status, notes
  }`,

  // Appointment Requests (for internal use / Studio)
  appointmentRequests: `*[_type == "appointmentRequest"] | order(submittedAt desc) {
    _id, name, phone, email, condition, submittedAt, status, appointmentDate, notes
  }`,

  // Videos
  videos: `*[_type == "video" && published == true] | order(order asc) {
    _id, title, platform, url, description, thumbnail, featured
  }`,
  featuredVideos: `*[_type == "video" && published == true && featured == true] | order(order asc) {
    _id, title, platform, url, description, thumbnail
  }`,

  // Site Settings
  siteSettings: `*[_type == "siteSettings"][0] {
    opdSchedule, phone, address, doctorPhoto
  }`,
}
