import { defineType, defineField } from 'sanity'

export const contactSubmission = defineType({
  name: 'contactSubmission',
  title: 'Contact Submission',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required(),
      readOnly: true,
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: Rule => Rule.required(),
      readOnly: true,
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'text',
      rows: 5,
      readOnly: true,
    }),
    defineField({
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
      readOnly: true,
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'New', value: 'new' },
          { title: 'Contacted', value: 'contacted' },
          { title: 'Appointment Booked', value: 'appointmentBooked' },
          { title: 'Closed', value: 'closed' },
        ],
        layout: 'radio',
      },
      initialValue: 'new',
    }),
    defineField({
      name: 'notes',
      title: 'Internal Notes',
      type: 'text',
      rows: 3,
      description: 'Private notes about this inquiry (not shown on website)',
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'email', status: 'status' },
    prepare({ title, subtitle, status }) {
      const emoji = { new: '🔴', contacted: '🟡', appointmentBooked: '🟢', closed: '⚪' }
      return { title: `${emoji[status as keyof typeof emoji] ?? ''} ${title}`, subtitle }
    },
  },
  orderings: [
    { title: 'Newest First', name: 'submittedDesc', by: [{ field: 'submittedAt', direction: 'desc' }] },
    { title: 'Status', name: 'statusAsc', by: [{ field: 'status', direction: 'asc' }] },
  ],
})
