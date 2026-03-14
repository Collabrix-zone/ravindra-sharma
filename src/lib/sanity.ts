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
  testimonials: `*[_type == "testimonial" && approved == true] | order(_createdAt desc) {
    _id, name, location, rating, review, "date": _createdAt
  }`,
  blogPosts: `*[_type == "post"] | order(publishedAt desc) {
    _id, title, slug, excerpt, category, publishedAt, "readTime": readTime
  }`,
  blogPostBySlug: `*[_type == "post" && slug.current == $slug][0] {
    _id, title, slug, excerpt, category, publishedAt, body, readTime
  }`,
  services: `*[_type == "service"] | order(order asc) {
    _id, title, subtitle, description, highlights, color
  }`,
  siteSettings: `*[_type == "siteSettings"][0] {
    opdSchedule, phone, address, doctorPhoto
  }`,
}
