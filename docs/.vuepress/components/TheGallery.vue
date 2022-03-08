<template>
  <div class="gallery">
    <div
      v-for="(d, i) in projects"
      :key="i"
      class="gallery-item"
    >
      <div
        class="project-img"
        :style="{ 'background-image': `url(${d.image})` }"
      />
      <div class="project-details">
        <p style="font-weight: 600; margin: 0;">
          {{ d.title }}
        </p>
        <p style="margin: 0; flex: 1 1 auto;">
          {{ d.abstract }}
        </p>
        <p style="margin: 0; gap: 8px; display: flex; flex-wrap: wrap;">
          <template v-for="(btn, i) in buttons">
            <a
              v-if="btn.field in d"
              :key="i"
              :href="d[btn.field]"
              :title="btn.title"
              class="text-none"
              style="font-size: 0.9em; letter-spacing: 0; padding: 0px;"
            >
              {{ btn.icon }} {{ btn.title }}
            </a>
          </template>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import projects from './projects.json';

type Button = {
  title: string;
  field: 'video' | 'installer' | 'workflow';
  icon: string;
}

export default defineComponent({
  name: 'TheGallery',
  data() {
    return {
      projects,
      buttons: [
        {
          title: 'Demo',
          field: 'video',
          icon: '📺',
        },
        {
          title: 'EXE',
          field: 'installer',
          icon: '📦',
        },
        {
          title: 'Workflow',
          field: 'workflow',
          icon: '💼',
        },
      ] as Button[],
    };
  },
});
</script>

<style lang="scss" scoped>
.gallery {
  display: grid;
  gap: 16px;
}

@media (min-width: 960px) {
  .gallery {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media (max-width: 960px) and (min-width: 600px) {
  .gallery {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 600px) {
  .gallery {
    grid-template-columns: 1fr;
  }
}

.gallery-item {
  display: flex;
  flex-direction: column;
  border: solid 1px #ccc;
  border-radius: 4px;
  box-shadow: 0 0 5px rgb(0 0 0 / 10%);
  transition: box-shadow 0.1s linear;
  overflow: hidden;
}

.gallery-item:hover {
  box-shadow: 0 5px 5px rgb(0 0 0 / 20%);
}

.project-img {
  height: 170px;
  background-size: cover;
  z-index: 1 !important;
  background-position: top left !important;
  transition: background 1s;
}

.project-img:hover {
  background-position: bottom right !important;
}

.project-details {
  flex: 1 1 auto;
  display: flex;
  padding: 8px;
  flex-direction: column;
}
</style>
