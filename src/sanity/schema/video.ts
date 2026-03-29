import { defineType, defineField } from 'sanity'

export const video = defineType({
  name: 'video',
  title: 'Video',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'platform',
      title: 'Platform',
      type: 'string',
      options: {
        list: [
          { title: 'YouTube', value: 'youtube' },
          { title: 'Facebook', value: 'facebook' },
          { title: 'Instagram', value: 'instagram' },
          { title: 'Other', value: 'other' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'Video URL',
      type: 'url',
      description: 'Paste the full video URL (e.g. https://www.youtube.com/watch?v=... or https://www.facebook.com/watch/...)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'thumbnail',
      title: 'Custom Thumbnail',
      type: 'image',
      description: 'Optional — YouTube thumbnails are auto-generated. Use this for Facebook/Instagram videos.',
      options: { hotspot: true },
    }),
    defineField({
      name: 'featured',
      title: 'Featured on Homepage',
      type: 'boolean',
      initialValue: false,
      description: 'Show this video on the homepage video section',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'published',
      title: 'Published',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  orderings: [
    { title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
    { title: 'Newest First', name: 'dateDesc', by: [{ field: '_createdAt', direction: 'desc' }] },
  ],
  preview: {
    select: {
      title: 'title',
      platform: 'platform',
      media: 'thumbnail',
    },
    prepare({ title, platform, media }) {
      const icons: Record<string, string> = {
        youtube: '🔴',
        facebook: '🔵',
        instagram: '🟣',
        other: '🎬',
      }
      return {
        title,
        subtitle: `${icons[platform] || '🎬'} ${platform?.charAt(0).toUpperCase()}${platform?.slice(1) || 'Video'}`,
        media,
      }
    },
  },
})
