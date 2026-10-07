'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type Language = 'zh' | 'en'

const STORAGE_KEY = 'language'
const DEFAULT_LANGUAGE: Language = 'zh'

interface LanguageContextValue {
  language: Language
  setLanguage: (lang: Language) => void
  mounted: boolean
}

const LanguageContext = createContext<LanguageContextValue>({
  language: DEFAULT_LANGUAGE,
  setLanguage: () => {},
  mounted: false,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      if (stored === 'zh' || stored === 'en') {
        setLanguageState(stored)
      }
    } catch {
      // localStorage unavailable; keep default
    }
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      document.documentElement.lang = language === 'zh' ? 'zh-TW' : 'en-US'
    }
  }, [language, mounted])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // ignore
    }
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, mounted }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
