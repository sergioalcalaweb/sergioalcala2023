export type Locale = "en" | "es"

export type Job = {
  role: string
  company: string
  period: string
  description: string
  tech: string[]
}

export type Dictionary = {
  language: {
    label: string
    en: string
    es: string
  }
  nav: {
    about: string
    experience: string
    skills: string
  }
  header: {
    role: string
    tagline: string
  }
  about: {
    title: string
    /** Paragraphs may contain inline <strong> markup for emphasis. */
    paragraphs: string[]
  }
  experience: {
    title: string
    present: string
    viewResume: string
    jobs: Job[]
  }
  skills: {
    title: string
    programmingLanguages: string
    librariesFrameworks: string
    toolsPlatforms: string
  }
}
