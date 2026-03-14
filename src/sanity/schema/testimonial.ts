import { defineType, defineField } from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Patient Name', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'location', title: 'Location (City)', type: 'string' }),
    defineField({ name: 'rating', title: 'Rating (1-5)', type: 'number', validation: Rule => Rule.min(1).max(5).required() }),
    defineField({ name: 'review', title: 'Review Text', type: 'text', rows: 5, validation: Rule => Rule.required() }),
    defineField({ name: 'approved', title: 'Approved (show publicly)', type: 'boolean', initialValue: false }),
  ],
  preview: { select: { title: 'name', subtitle: 'location' } },
})
