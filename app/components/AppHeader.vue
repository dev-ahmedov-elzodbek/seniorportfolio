<script setup lang="ts">
import { profile } from '~/data/profile'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
]

const isOpen = ref(false)

function closeMenu() {
  isOpen.value = false
}
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-border bg-surface/80 backdrop-blur-sm">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <a href="#" class="text-lg font-semibold text-ink">
        {{ profile.name }}
      </a>

      <nav class="hidden items-center gap-8 md:flex">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="text-sm font-medium text-muted transition-colors hover:text-accent"
        >
          {{ link.label }}
        </a>
        <a
          :href="`mailto:${profile.email}`"
          class="rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-dark"
        >
          Contact
        </a>
      </nav>

      <button
        class="flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink md:hidden"
        aria-label="Toggle menu"
        @click="isOpen = !isOpen"
      >
        <Icon :name="isOpen ? 'lucide:x' : 'lucide:menu'" class="h-5 w-5" />
      </button>
    </div>

    <nav
      v-if="isOpen"
      class="flex flex-col gap-1 border-t border-border bg-surface px-6 py-4 md:hidden"
    >
      <a
        v-for="link in links"
        :key="link.href"
        :href="link.href"
        class="rounded-lg px-3 py-2 text-sm font-medium text-muted hover:bg-accent-light hover:text-accent"
        @click="closeMenu"
      >
        {{ link.label }}
      </a>
      <a
        :href="`mailto:${profile.email}`"
        class="mt-2 rounded-full bg-accent px-4 py-2 text-center text-sm font-medium text-white"
        @click="closeMenu"
      >
        Contact
      </a>
    </nav>
  </header>
</template>
