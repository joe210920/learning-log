import type { Language } from '@/components/LanguageContext'

const dictionary = {
  'nav.home': { zh: '首頁', en: 'Home' },
  'nav.blog': { zh: '部落格', en: 'Blog' },
  'nav.tags': { zh: '標籤', en: 'Tags' },
  'nav.projects': { zh: '專案', en: 'Projects' },
  'nav.about': { zh: '關於', en: 'About' },

  'aria.toggleMenu': { zh: '切換選單', en: 'Toggle Menu' },
  'aria.switchLanguage': { zh: '切換語言', en: 'Switch language' },

  'pagination.previous': { zh: '上一頁', en: 'Previous' },
  'pagination.next': { zh: '下一頁', en: 'Next' },
  'pagination.of': { zh: '之', en: 'of' },

  'search.label': { zh: '搜尋文章', en: 'Search articles' },

  'blog.noPostsFound': { zh: '沒有找到文章。', en: 'No posts found.' },
  'blog.publishedOn': { zh: '發布於', en: 'Published on' },
  'blog.allPosts': { zh: '所有文章', en: 'All Posts' },
  'blog.tags': { zh: '標籤', en: 'Tags' },
  'blog.authors': { zh: '作者', en: 'Authors' },
  'blog.previousArticle': { zh: '上一篇', en: 'Previous Article' },
  'blog.nextArticle': { zh: '下一篇', en: 'Next Article' },
  'blog.backToBlog': { zh: '返回部落格', en: 'Back to the blog' },
  'blog.discussOnTwitter': { zh: '在 Twitter 上討論', en: 'Discuss on Twitter' },
  'blog.viewOnGithub': { zh: '在 GitHub 上查看', en: 'View on GitHub' },
  'blog.readMore': { zh: '閱讀更多', en: 'Read more' },

  'home.latest': { zh: '最新文章', en: 'Latest' },

  'about.heading': { zh: '關於', en: 'About' },

  'projects.heading': { zh: '專案', en: 'Projects' },
  'projects.subtitle': {
    zh: '展示你的專案,搭配一張 16 x 9 的主視覺圖',
    en: 'Showcase your projects with a hero image (16 x 9)',
  },

  'notFound.message': { zh: '抱歉,找不到這個頁面。', en: "Sorry we couldn't find this page." },
  'notFound.hint': {
    zh: '別擔心,首頁還有很多其他內容。',
    en: 'But dont worry, you can find plenty of other things on our homepage.',
  },
  'notFound.backHome': { zh: '回到首頁', en: 'Back to homepage' },
} as const

export type DictionaryKey = keyof typeof dictionary

export function t(language: Language, key: DictionaryKey): string {
  const entry = dictionary[key]
  if (!entry) return key
  return entry[language] ?? entry.zh
}

export default dictionary
