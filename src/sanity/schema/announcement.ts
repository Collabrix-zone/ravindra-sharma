import { defineType, defineField } from 'sanity'

export const announcement = defineType({
  name: 'announcement',
  title: 'Announcement',
  type: 'document',
  fields: [
    defineField({
      name: 'message',
      title: 'Message',
      type: 'string',
      validation: Rule => Rule.required(),
      description: 'e.g. "OPD closed on 26th Jan for Republic Day"',
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Info', value: 'info' },
          { title: 'Warning', value: 'warning' },
          { title: 'Holiday', value: 'holiday' },
          { title: 'Urgent', value: 'urgent' },
        ],
      },
      initialValue: 'info',
    }),
    defineField({
      name: 'linkText',
      title: 'Link Text',
      type: 'string',
      description: 'Optional button/link text (e.g. "Learn More")',
    }),
    defineField({
      name: 'linkUrl',
      title: 'Link URL',
      type: 'url',
      description: 'Optional URL for the link',
    }),
    defineField({
      name: 'startsAt',
      title: 'Starts At',
      type: 'datetime',
      description: 'When to start showing this announcement',
    }),
    defineField({
      name: 'endsAt',
      title: 'Ends At',
      type: 'datetime',
      description: 'When to stop showing this announcement',
    }),
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: { title: 'message', type: 'type', active: 'active' },
    prepare({ title, type, active }) {
      return { title, subtitle: `${type} · ${active ? 'Active' : 'Inactive'}` }
    },
  },
})
