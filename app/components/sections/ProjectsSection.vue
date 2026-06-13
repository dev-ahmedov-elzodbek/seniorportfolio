<script setup lang="ts">
import { projects } from '~/data/projects'
</script>

<template>
  <section id="projects" class="mx-auto max-w-6xl px-6 py-20">
    <div
      v-motion
      :initial="{ opacity: 0, y: 24 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      class="text-center"
    >
      <p class="text-sm font-semibold uppercase tracking-wider text-accent">Projects</p>
      <h2 class="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        Things I've built
      </h2>
    </div>

    <div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="(project, index) in projects"
        :key="project.title"
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: index * 100 } }"
      >
        <ProjectCard :project="project" />
      </div>
    </div>
  </section>
</template>
