<script setup lang="ts">
import { profile } from '~/data/profile'

const year = new Date().getFullYear()

const socialLinks = [
  { label: 'GitHub', href: profile.social.github, icon: 'mdi:github' },
  { label: 'Telegram', href: profile.social.telegram, icon: 'mdi:telegram' },
  { label: 'Email', href: `mailto:${profile.email}`, icon: 'mdi:email-outline' },
]
</script>

<template>
  <footer class="border-t border-border bg-surface">
    <div class="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 text-center md:flex-row md:justify-between md:text-left">
      <div>
        <p class="font-semibold text-ink">{{ profile.name }}</p>
        <p class="text-sm text-muted">{{ profile.role }}</p>
      </div>

      <div class="flex items-center gap-4">
        <a
          v-for="link in socialLinks"
          :key="link.label"
          :href="link.href"
          target="_blank"
          rel="noopener"
          :aria-label="link.label"
          class="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
        >
          <Icon :name="link.icon" class="h-5 w-5" />
        </a>
      </div>

      <p class="text-sm text-muted">
        &copy; {{ year }} {{ profile.name }}. All rights reserved.
      </p>
    </div>
  </footer>
</template>
