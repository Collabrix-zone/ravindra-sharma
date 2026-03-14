import { defineType, defineField } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'phone', title: 'Phone Numbers', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'address', title: 'Hospital Address', type: 'text' }),
    defineField({ name: 'doctorPhoto', title: 'Doctor Photo', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'opdSchedule',
      title: 'OPD Schedule',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'day', title: 'Day', type: 'string' },
          { name: 'time', title: 'Time', type: 'string' },
          { name: 'available', title: 'Available', type: 'boolean' },
        ]
      }]
    }),
  ],
})
