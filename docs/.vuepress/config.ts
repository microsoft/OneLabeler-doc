import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

// const base = '';
const base = '/OneLabeler.github.io/';

export default defineUserConfig<DefaultThemeOptions>({
  base,
  lang: 'en-US',
  title: 'OneLabeler',
  description: 'Just playing around',

  themeConfig: {
    // logo: 'https://vuejs.org/images/logo.png',
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
    contributors: false,
    lastUpdated: false,
  },
})
