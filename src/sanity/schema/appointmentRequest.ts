import { defineType, defineField } from 'sanity'

export const appointmentRequest = defineType({
  name: 'appointmentRequest',
  title: 'Appointment Request',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Patient Name',
      type: 'string',
      validation: Rule => Rule.required(),
      readOnly: true,
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      validation: Rule => Rule.required(),
      readOnly: true,
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'condition',
      title: 'Condition / Issue',
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
          { title: 'Appointment Confirmed', value: 'confirmed' },
          { title: 'Completed', value: 'completed' },
          { title: 'Cancelled', value: 'cancelled' },
        ],
        layout: 'radio',
      },
      initialValue: 'new',
    }),
    defineField({
      name: 'appointmentDate',
      title: 'Appointment Date',
      type: 'datetime',
      description: 'Confirmed appointment date and time',
    }),
    defineField({
      name: 'notes',
      title: 'Internal Notes',
      type: 'text',
      rows: 3,
      description: 'Private notes about this appointment (not shown on website)',
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'phone', status: 'status' },
    prepare({ title, subtitle, status }) {
      const emoji = { new: '🔴', contacted: '🟡', confirmed: '🟢', completed: '✅', cancelled: '❌' }
      return { title: `${emoji[status as keyof typeof emoji] ?? ''} ${title}`, subtitle }
    },
  },
  orderings: [
    { title: 'Newest First', name: 'submittedDesc', by: [{ field: 'submittedAt', direction: 'desc' }] },
    { title: 'Status', name: 'statusAsc', by: [{ field: 'status', direction: 'asc' }] },
  ],
})
