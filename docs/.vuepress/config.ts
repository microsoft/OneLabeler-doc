import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  base: '/onelabeler.github.io/',
  lang: 'en-US',
  title: 'OneLabeler',
  description: 'Just playing around',

  themeConfig: {
    // logo: 'https://vuejs.org/images/logo.png',
    sidebar: [
      '/',
      '/installation',
      '/advanced',
      '/gallery',
      '/background',
    ],
  },
})
