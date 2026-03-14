import { defineType, defineField } from 'sanity'

export const service = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Service Title', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'subtitle', title: 'Subtitle', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 5 }),
    defineField({ name: 'highlights', title: 'Highlights', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
    defineField({ name: 'color', title: 'Accent Color (hex)', type: 'string' }),
  ],
  preview: { select: { title: 'title', subtitle: 'subtitle' } },
})
