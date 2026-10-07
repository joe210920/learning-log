'use client'

import { useLanguage } from './LanguageContext'
import { t } from '@/data/locales'

const LanguageSwitch = () => {
  const { language, setLanguage, mounted } = useLanguage()

  const toggle = () => setLanguage(language === 'zh' ? 'en' : 'zh')

  return (
    <button
      aria-label={t(language, 'aria.switchLanguage')}
      onClick={toggle}
      className="hover:text-primary-500 dark:hover:text-primary-400 flex h-6 w-6 items-center justify-center text-sm font-semibold text-gray-900 dark:text-gray-100"
    >
      {mounted ? (language === 'zh' ? 'EN' : '中') : ''}
    </button>
  )
}

export default LanguageSwitch
