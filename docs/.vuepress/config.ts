import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

// const base = '';
const base = '/OneLabeler.github.io/';

export default defineUserConfig<DefaultThemeOptions>({
  base,
  lang: 'en-US',
  title: 'OneLabeler',
  description: 'OneLabeler documentation website',

  themeConfig: {
    logo: 'favicon.ico',
    sidebar: [
      '/',
      '/installation',
      '/builtins',
      '/linting',
      '/gallery',
      '/customization',
      '/api',
      '/background',
    ],
    head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
    contributors: false,
    lastUpdated: false,
  },
})
