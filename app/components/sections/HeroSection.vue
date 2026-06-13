<script setup lang="ts">
import { profile } from '~/data/profile'

const initials = computed(() =>
  profile.name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
)
</script>

<template>
  <section class="mx-auto max-w-6xl px-6 py-20 md:py-28">
    <div class="grid items-center gap-12 md:grid-cols-2">
      <div
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      >
        <p class="mb-4 inline-flex items-center gap-2 rounded-full bg-accent-light px-4 py-1.5 text-sm font-medium text-accent">
          <span class="h-2 w-2 rounded-full bg-accent" />
          Available for new opportunities
        </p>

        <h1 class="text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          Hi, I'm {{ profile.name }}
        </h1>
        <p class="mt-3 text-xl font-medium text-accent">
          {{ profile.role }}
        </p>
        <p class="mt-6 max-w-md text-lg text-muted">
          {{ profile.tagline }}
        </p>

        <div class="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            class="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
          >
            View Projects
          </a>
          <a
            :href="`mailto:${profile.email}`"
            class="rounded-full border border-border px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Contact Me
          </a>
        </div>
      </div>

      <div
        v-motion
        :initial="{ opacity: 0, scale: 0.9 }"
        :enter="{ opacity: 1, scale: 1, transition: { duration: 600, delay: 150 } }"
        class="flex justify-center md:justify-end"
      >
        <div class="relative flex h-64 w-64 items-center justify-center rounded-3xl bg-accent-light sm:h-80 sm:w-80">
          <img
            v-if="profile.avatar"
            :src="profile.avatar"
            :alt="profile.name"
            class="h-full w-full rounded-3xl object-cover"
          >
          <span v-else class="text-6xl font-bold text-accent">
            {{ initials }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
