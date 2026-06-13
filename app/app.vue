<script setup lang="ts">
import { profile } from '~/data/profile'

useHead({
  title: `${profile.name} — ${profile.role}`,
  meta: [
    { name: 'description', content: profile.tagline },
  ],
})
</script>

<template>
  <div class="min-h-screen bg-bg text-ink">
    <NuxtRouteAnnouncer />
    <AppHeader />
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
    </main>
    <AppFooter />
  </div>
</template>
