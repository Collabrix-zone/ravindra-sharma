import { post } from './post'
import { testimonial } from './testimonial'
import { service } from './service'
import { siteSettings } from './siteSettings'
import { contactSubmission } from './contactSubmission'
import { appointmentRequest } from './appointmentRequest'
import { faq } from './faq'
import { announcement } from './announcement'
import { doctorProfile } from './doctorProfile'
import { teamMember } from './teamMember'
import { gallery } from './gallery'
import { pageContent } from './pageContent'

export const schemaTypes = [
  // Content
  post,
  service,
  testimonial,
  faq,
  doctorProfile,
  teamMember,
  gallery,
  pageContent,
  announcement,
  // Forms / Leads
  contactSubmission,
  appointmentRequest,
  // Settings
  siteSettings,
]
