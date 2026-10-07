'use client'

import { useLanguage } from './LanguageContext'
import { t, type DictionaryKey } from '@/data/locales'

export default function T({ k }: { k: DictionaryKey }) {
  const { language } = useLanguage()
  return <>{t(language, k)}</>
}
