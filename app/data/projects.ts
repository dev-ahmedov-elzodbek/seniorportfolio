export interface Project {
  title: string
  description: string
  image: string
  tech: string[]
  liveUrl?: string
  githubUrl?: string
}

export const projects: Project[] = [
  {
    title: 'GoalFlow',
    description:
      'A 4-month personal growth challenge app for building daily habits — track tasks, earn points, keep streaks, and monitor progress across a calendar, schedule, and nutrition log, with light/dark mode and an admin dashboard.',
    image: '/projects/goalflow.png',
    tech: ['Vue.js', 'Pinia', 'Vue Router', 'Tailwind CSS'],
    liveUrl: 'https://4-oylik-chalange-men-uchun.vercel.app',
  },
  {
    title: 'IELTS Pro',
    description:
      'An AI-powered IELTS exam preparation platform covering listening, reading, writing, and speaking, with instant AI feedback and realistic mock exams to help learners reach their target band score.',
    image: '/projects/ielts-pro.png',
    tech: ['React', 'Next.js', 'Tailwind CSS'],
    liveUrl: 'https://ielts-platform-wheat.vercel.app',
  },
  {
    title: 'Vue.js Lesson Roadmap',
    description:
      'An interactive 20-day Vue.js learning roadmap with daily lessons on data binding, directives, computed properties, watchers, and more, complete with progress tracking for each day.',
    image: '/projects/vue-lesson.png',
    tech: ['Vue.js', 'Tailwind CSS'],
    liveUrl: 'https://my-vuejs-lesson.vercel.app',
  },
]
