"use client"

import Link from "next/link"
import { useTranslation } from "@/i18n/LanguageProvider"

const SadLuffy = () => (
  <svg
    viewBox="0 0 240 260"
    className="w-48 md:w-56 drop-shadow-xl"
    role="img"
    aria-label="A sad chibi pirate with a straw hat"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* head */}
    <circle cx="120" cy="152" r="56" fill="#F7C9A0" stroke="#E0A878" strokeWidth="3" />

    {/* straw hat brim */}
    <ellipse cx="120" cy="104" rx="100" ry="24" fill="#E6B85C" stroke="#C99A3E" strokeWidth="3" />
    {/* straw hat crown */}
    <path d="M 82 104 Q 120 30 158 104 Z" fill="#E6B85C" stroke="#C99A3E" strokeWidth="3" />
    {/* red band */}
    <path d="M 83 101 Q 120 116 157 101 L 157 92 Q 120 107 83 92 Z" fill="#D64545" />

    {/* sad eyebrows (inner raised) */}
    <path d="M 88 136 L 110 130" stroke="#1f2937" strokeWidth="4" strokeLinecap="round" fill="none" />
    <path d="M 152 136 L 130 130" stroke="#1f2937" strokeWidth="4" strokeLinecap="round" fill="none" />

    {/* eyes */}
    <ellipse cx="102" cy="152" rx="7" ry="10" fill="#1f2937" />
    <ellipse cx="138" cy="152" rx="7" ry="10" fill="#1f2937" />
    <circle cx="104" cy="149" r="2.4" fill="#ffffff" />
    <circle cx="140" cy="149" r="2.4" fill="#ffffff" />

    {/* signature scar under the eye */}
    <path d="M 133 168 H 147" stroke="#B5654A" strokeWidth="3" strokeLinecap="round" />
    <path d="M 136 165 L 138 171 M 142 165 L 144 171" stroke="#B5654A" strokeWidth="2" strokeLinecap="round" />

    {/* tear */}
    <path d="M 100 166 q 7 9 0 15 q -7 -6 0 -15 Z" fill="#60A5FA" />

    {/* sad frown */}
    <path d="M 104 184 Q 120 172 136 184" stroke="#1f2937" strokeWidth="4" strokeLinecap="round" fill="none" />
  </svg>
)

const NotFound = () => {
  const { t } = useTranslation()

  return (
    <main className="mx-auto flex min-h-screen max-w-screen-xl flex-col items-center justify-center gap-6 px-6 py-12 text-center md:px-12">
      <SadLuffy />
      <p className="text-7xl md:text-8xl font-bold text-yellow-500 tracking-widest">
        404
      </p>
      <h1 className="text-2xl md:text-3xl text-slate-200">{t.notFound.title}</h1>
      <p className="max-w-md text-lg text-slate-400">{t.notFound.message}</p>
      <Link
        href="/"
        className="group mt-2 inline-flex items-center gap-2 text-slate-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6 transition-all group-hover:-ml-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
        <span className="border-b border-transparent pb-px group-hover:border-yellow-500">
          {t.notFound.back}
        </span>
      </Link>
    </main>
  )
}

export default NotFound
