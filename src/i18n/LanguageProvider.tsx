"use client"

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react"
import type { Dictionary, Locale } from "./types"
import { defaultLocale, dictionaries, isLocale } from "./config"

const STORAGE_KEY = "locale"

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Dictionary
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale)

  // Restore the preferred locale on the client, falling back to the browser
  // language and finally the default locale. This must run after mount (not in
  // a lazy initializer) so the server and first client render stay in sync and
  // hydration does not mismatch.
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    const browser = window.navigator.language.slice(0, 2)
    const preferred = stored && isLocale(stored)
      ? stored
      : isLocale(browser)
        ? browser
        : null

    if (preferred && preferred !== defaultLocale) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing a client-only persisted preference on mount is intentional and hydration-safe
      setLocaleState(preferred)
    }
  }, [])

  // Keep the preference persisted and the <html lang> attribute in sync.
  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, locale)
    document.documentElement.lang = locale
  }, [locale])

  const value: LanguageContextValue = {
    locale,
    setLocale: setLocaleState,
    t: dictionaries[locale],
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useTranslation = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useTranslation must be used within a LanguageProvider")
  }
  return context
}
