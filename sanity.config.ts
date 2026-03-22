import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './src/sanity/schema'
import { deskStructure } from './src/sanity/deskStructure'

export default defineConfig({
  name: 'dr-rk-sharma',
  title: 'Dr. R.K. Sharma — Website CMS',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  basePath: '/studio',
  plugins: [
    structureTool({ structure: deskStructure }),
    visionTool(),
  ],
  schema: { types: schemaTypes },
})
