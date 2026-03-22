import { defineType, defineField } from 'sanity'

export const doctorProfile = defineType({
  name: 'doctorProfile',
  title: 'Doctor Profile',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title / Designation',
      type: 'string',
      description: 'e.g. "Director, CTVS"',
    }),
    defineField({
      name: 'hospital',
      title: 'Hospital',
      type: 'string',
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'bio',
      title: 'Bio (Paragraph 1)',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'bioExtended',
      title: 'Bio (Paragraph 2)',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'qualifications',
      title: 'Qualifications',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'year', title: 'Year', type: 'string' },
          { name: 'degree', title: 'Degree', type: 'string' },
          { name: 'institution', title: 'Institution', type: 'string' },
        ],
      }],
    }),
    defineField({
      name: 'highlights',
      title: 'Professional Highlights',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Bullet points shown in the About section',
    }),
    defineField({
      name: 'stats',
      title: 'Key Statistics',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'value', title: 'Value', type: 'string', description: 'e.g. "7,000+"' },
          { name: 'label', title: 'Label', type: 'string', description: 'e.g. "Open Heart Surgeries"' },
        ],
      }],
    }),
    defineField({
      name: 'internationalExposure',
      title: 'International Exposure',
      type: 'string',
      description: 'e.g. "University Hospital Uppsala, Sweden"',
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'title' },
  },
})
