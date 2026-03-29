import type { StructureBuilder } from 'sanity/structure'

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title('Dr. R.K. Sharma — CMS')
    .items([
      // ── Content ──
      S.listItem()
        .title('Content')
        .child(
          S.list()
            .title('Content')
            .items([
              S.listItem()
                .title('Blog Posts')
                .schemaType('post')
                .child(S.documentTypeList('post').title('Blog Posts')),
              S.listItem()
                .title('Services')
                .schemaType('service')
                .child(S.documentTypeList('service').title('Services')),
              S.listItem()
                .title('FAQs')
                .schemaType('faq')
                .child(S.documentTypeList('faq').title('FAQs')),
              S.listItem()
                .title('Testimonials')
                .schemaType('testimonial')
                .child(S.documentTypeList('testimonial').title('Testimonials')),
              S.listItem()
                .title('Gallery')
                .schemaType('gallery')
                .child(S.documentTypeList('gallery').title('Gallery')),
              S.listItem()
                .title('Videos')
                .schemaType('video')
                .child(S.documentTypeList('video').title('Videos')),
              S.listItem()
                .title('Announcements')
                .schemaType('announcement')
                .child(S.documentTypeList('announcement').title('Announcements')),
            ]),
        ),

      S.divider(),

      // ── People ──
      S.listItem()
        .title('People')
        .child(
          S.list()
            .title('People')
            .items([
              S.listItem()
                .title('Doctor Profile')
                .schemaType('doctorProfile')
                .child(S.documentTypeList('doctorProfile').title('Doctor Profile')),
              S.listItem()
                .title('Team Members')
                .schemaType('teamMember')
                .child(S.documentTypeList('teamMember').title('Team Members')),
            ]),
        ),

      S.divider(),

      // ── Forms / Leads ──
      S.listItem()
        .title('Leads & Inquiries')
        .child(
          S.list()
            .title('Leads & Inquiries')
            .items([
              S.listItem()
                .title('Contact Submissions')
                .schemaType('contactSubmission')
                .child(
                  S.documentTypeList('contactSubmission')
                    .title('Contact Submissions')
                    .defaultOrdering([{ field: 'submittedAt', direction: 'desc' }]),
                ),
              S.listItem()
                .title('Appointment Requests')
                .schemaType('appointmentRequest')
                .child(
                  S.documentTypeList('appointmentRequest')
                    .title('Appointment Requests')
                    .defaultOrdering([{ field: 'submittedAt', direction: 'desc' }]),
                ),
            ]),
        ),

      S.divider(),

      // ── Settings ──
      S.listItem()
        .title('Settings')
        .child(
          S.list()
            .title('Settings')
            .items([
              S.listItem()
                .title('Site Settings')
                .schemaType('siteSettings')
                .child(S.documentTypeList('siteSettings').title('Site Settings')),
              S.listItem()
                .title('Page Content')
                .schemaType('pageContent')
                .child(S.documentTypeList('pageContent').title('Page Content')),
            ]),
        ),
    ])
