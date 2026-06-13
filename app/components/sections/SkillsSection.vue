<script setup lang="ts">
import { skillCategories } from '~/data/skills'
</script>

<template>
  <section id="skills" class="mx-auto max-w-6xl px-6 py-20">
    <div
      v-motion
      :initial="{ opacity: 0, y: 24 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      class="text-center"
    >
      <p class="text-sm font-semibold uppercase tracking-wider text-accent">Skills</p>
      <h2 class="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        Technologies I work with
      </h2>
    </div>

    <div class="mt-12 space-y-10">
      <div
        v-for="(category, index) in skillCategories"
        :key="category.name"
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: index * 100 } }"
      >
        <h3 class="mb-4 text-sm font-semibold uppercase tracking-wider text-muted">
          {{ category.name }}
        </h3>
        <div class="flex flex-wrap gap-3">
          <div
            v-for="skill in category.skills"
            :key="skill.name"
            class="flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-ink shadow-sm transition-transform hover:-translate-y-0.5 hover:border-accent"
          >
            <Icon :name="skill.icon" class="h-5 w-5" />
            {{ skill.name }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
