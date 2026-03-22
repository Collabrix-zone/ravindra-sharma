import { defineType, defineField } from 'sanity'

export const pageContent = defineType({
  name: 'pageContent',
  title: 'Page Content',
  type: 'document',
  fields: [
    defineField({
      name: 'page',
      title: 'Page',
      type: 'string',
      options: {
        list: [
          { title: 'Homepage', value: 'home' },
          { title: 'About', value: 'about' },
          { title: 'Services', value: 'services' },
          { title: 'Contact', value: 'contact' },
          { title: 'Appointment', value: 'appointment' },
          { title: 'Reviews', value: 'reviews' },
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'heroTagline',
      title: 'Hero Tagline',
      type: 'string',
      description: 'Small text above the heading (e.g. "Director, CTVS — Eternal Hospital")',
    }),
    defineField({
      name: 'heroHeading',
      title: 'Hero Heading',
      type: 'string',
    }),
    defineField({
      name: 'heroSubheading',
      title: 'Hero Subheading',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'sectionHeading',
      title: 'Section Heading',
      type: 'string',
      description: 'Main section heading (if applicable)',
    }),
    defineField({
      name: 'sectionDescription',
      title: 'Section Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'metaTitle',
      title: 'Meta Title (SEO)',
      type: 'string',
      description: 'Page title for search engines',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description (SEO)',
      type: 'text',
      rows: 2,
      description: 'Page description for search engines',
    }),
  ],
  preview: {
    select: { title: 'page', subtitle: 'heroHeading' },
    prepare({ title, subtitle }) {
      const labels: Record<string, string> = { home: 'Homepage', about: 'About', services: 'Services', contact: 'Contact', appointment: 'Appointment', reviews: 'Reviews' }
      return { title: labels[title] ?? title, subtitle }
    },
  },
})
