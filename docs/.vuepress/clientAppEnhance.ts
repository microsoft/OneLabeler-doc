import { defineClientAppEnhance } from '@vuepress/client';
import TheGallery from './components/TheGallery.vue';

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component('TheGallery', TheGallery)
})
