import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImage } from "@/types";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "your_project_id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-01-01",
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_API_READ_TOKEN,
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: SanityImage) {
  return builder.image(source);
}

// ─── Queries ─────────────────────────────────────────────────────────────────

export async function getServices() {
  return sanityClient.fetch(
    `*[_type == "service"] | order(order asc) {
      _id, title, slug, shortDescription, description, icon, image, featured, order
    }`
  );
}

export async function getTestimonials() {
  return sanityClient.fetch(
    `*[_type == "testimonial"] | order(_createdAt desc) {
      _id, patientName, rating, review, treatment, date, verified, image
    }`
  );
}

export async function getBlogPosts() {
  return sanityClient.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      _id, title, slug, excerpt, publishedAt, mainImage, categories, "author": author->{ name, image }
    }`
  );
}

export async function getBlogPost(slug: string) {
  return sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id, title, slug, excerpt, publishedAt, mainImage, categories, body,
      "author": author->{ name, image }
    }`,
    { slug }
  );
}
