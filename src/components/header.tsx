"use client"

import Nav from "./nav"
import Image from "next/image"
import ProfileIamge from "../../public/images/profile.jpeg"
import Contact from "./contact"
import LanguageSwitcher from "./language-switcher"
import { useTranslation } from "@/i18n/LanguageProvider"

const Header = () => {
  const { t } = useTranslation()

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:w-1/2 lg:max-h-screen lg:flex-col lg:justify-between lg:py-12 text-center lg:text-left">
      <div className="flex flex-col gap-6">
        <Image
          src={ProfileIamge}
          className="rounded-full object-cover border-2 border-white mx-auto lg:mx-0"
          alt="Sergio Alcala"
          height={90}
          width={90}
          priority
        />
        <div>
          <h1 className="text-4xl mb-2">Sergio Alcala</h1>
          <h2 className="text-2xl">{t.header.role}</h2>
        </div>
        <p className="lg:max-w-xs text-slate-400">{t.header.tagline}</p>
        <Nav />
      </div>
      <div className="flex flex-col gap-4 mt-6 lg:mt-0">
        <Contact />
        <LanguageSwitcher />
      </div>
    </header>
  )
}

export default Header
