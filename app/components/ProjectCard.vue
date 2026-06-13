<script setup lang="ts">
import type { Project } from '~/data/projects'

defineProps<{
  project: Project
}>()
</script>

<template>
  <article class="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-shadow hover:shadow-lg">
    <div class="flex aspect-video items-center justify-center bg-accent-light">
      <img
        v-if="project.image"
        :src="project.image"
        :alt="project.title"
        class="h-full w-full object-cover"
      >
      <Icon v-else name="lucide:image" class="h-10 w-10 text-accent/50" />
    </div>

    <div class="flex flex-1 flex-col p-6">
      <h3 class="text-lg font-semibold text-ink">{{ project.title }}</h3>
      <p class="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {{ project.description }}
      </p>

      <div class="mt-4 flex flex-wrap gap-2">
        <span
          v-for="tech in project.tech"
          :key="tech"
          class="rounded-full bg-accent-light px-3 py-1 text-xs font-medium text-accent"
        >
          {{ tech }}
        </span>
      </div>

      <div class="mt-6 flex gap-4">
        <a
          v-if="project.liveUrl"
          :href="project.liveUrl"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-dark"
        >
          <Icon name="lucide:external-link" class="h-4 w-4" />
          Live Demo
        </a>
        <a
          v-if="project.githubUrl"
          :href="project.githubUrl"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-accent"
        >
          <Icon name="lucide:github" class="h-4 w-4" />
          Code
        </a>
      </div>
    </div>
  </article>
</template>
