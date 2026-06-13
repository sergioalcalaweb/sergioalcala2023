"use client"

import { useTranslation } from "@/i18n/LanguageProvider"
import { locales } from "@/i18n/config"

const LanguageSwitcher = () => {
  const { locale, setLocale, t } = useTranslation()

  return (
    <div
      className="flex items-center gap-2 justify-center lg:justify-start"
      role="group"
      aria-label={t.language.label}
    >
      {locales.map((code) => {
        const isActive = code === locale
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            aria-pressed={isActive}
            className={`text-sm uppercase tracking-wide px-2 py-1 rounded transition-all ${
              isActive
                ? "text-yellow-500 font-semibold"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            {code}
          </button>
        )
      })}
    </div>
  )
}

export default LanguageSwitcher
