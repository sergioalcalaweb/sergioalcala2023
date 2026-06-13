import type { Dictionary, Locale } from "./types"
import en from "./en.json"
import es from "./es.json"

export const locales: Locale[] = ["en", "es"]

export const defaultLocale: Locale = "en"

export const dictionaries: Record<Locale, Dictionary> = {
  en: en as Dictionary,
  es: es as Dictionary,
}

export const isLocale = (value: string): value is Locale =>
  (locales as string[]).includes(value)
