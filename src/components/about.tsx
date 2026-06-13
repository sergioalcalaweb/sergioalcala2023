"use client"

import { useTranslation } from "@/i18n/LanguageProvider"

const About = () => {
  const { t } = useTranslation()

  return (
    <section
      data-section
      id="about"
      aria-label={t.about.title}
      className="text-slate-300 text-lg flex flex-col gap-3 mb-24 scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-gradient-to-r from-slate-800 to-gray-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="lg:sr-only">{t.about.title}</h2>
      </div>
      {t.about.paragraphs.map((paragraph, index) => (
        <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
      ))}
    </section>
  )
}

export default About
