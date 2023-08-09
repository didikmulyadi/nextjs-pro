import { Metadata } from 'next'

import { AboutPage } from './page.client'

import { TranslationProvider } from '@/i18n'
import { getTranslation } from '@/i18n/dictionaries'
import { INextPage } from '@/types/common'

const metadata: Metadata = {
  title: 'About Page',
  description: 'A production boilerplate for Next.JS',
}

const About = async ({ params }: INextPage) => {
  const t = await getTranslation(params.lang)

  return (
    <TranslationProvider translation={t}>
      <AboutPage />
    </TranslationProvider>
  )
}

export { metadata }
export default About
