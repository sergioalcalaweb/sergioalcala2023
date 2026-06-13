"use client"

import { useTranslation } from "@/i18n/LanguageProvider"
import Technologies from "./technologies"

const Experience = () => {
  const { t } = useTranslation()

  return (
    <section
      data-section
      id="experience"
      aria-label={t.experience.title}
      className="text-slate-300 text-lg flex flex-col gap-3 mb-24 scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-gradient-to-r from-slate-800 to-gray-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="lg:sr-only">{t.experience.title}</h2>
      </div>
      <div>
        <ol className="group/list">
          {t.experience.jobs.map((job, index) => (
            <li key={index} className="mb-12">
              <div className="group flex flex-col gap-3 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 relative transition-all">
                <div className="flex flex-col lg:flex-row justify-between items-baseline gap-3 group-hover:text-yellow-500">
                  <h3>
                    <div className="text-xl font-semibold">
                      {job.role} - {job.company}
                    </div>
                  </h3>
                  <div className="text-xl font-thin">{job.period}</div>
                </div>
                <p>{job.description}</p>
                <Technologies data={job.tech} />
              </div>
            </li>
          ))}
        </ol>
      </div>
      <div>
        <a
          href="/resume.pdf"
          target="_blank"
          className="group inline-flex gap-2 items-center"
          aria-label={t.experience.viewResume}
        >
          <span className="border-b border-transparent group-hover:border-yellow-500 pb-px">
            {t.experience.viewResume}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 group-hover:ml-2 transition-all"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
            />
          </svg>
        </a>
      </div>
    </section>
  )
}

export default Experience
