<script setup lang="ts">
import { profile } from '~/data/profile'

const facts = [
  { label: 'Location', value: profile.location, icon: 'lucide:map-pin' },
  { label: 'Email', value: profile.email, icon: 'lucide:mail' },
  { label: 'Focus', value: profile.role, icon: 'lucide:code-2' },
]
</script>

<template>
  <section id="about" class="mx-auto max-w-6xl px-6 py-20">
    <div class="grid gap-12 md:grid-cols-2">
      <div
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      >
        <p class="text-sm font-semibold uppercase tracking-wider text-accent">About Me</p>
        <h2 class="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          A bit about my work
        </h2>
        <p class="mt-6 text-lg leading-relaxed text-muted">
          {{ profile.bio }}
        </p>
      </div>

      <div
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 150 } }"
        class="rounded-2xl border border-border bg-surface p-8 shadow-sm"
      >
        <ul class="space-y-6">
          <li v-for="fact in facts" :key="fact.label" class="flex items-start gap-4">
            <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-light text-accent">
              <Icon :name="fact.icon" class="h-5 w-5" />
            </span>
            <div>
              <p class="text-sm text-muted">{{ fact.label }}</p>
              <p class="font-medium text-ink">{{ fact.value }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
