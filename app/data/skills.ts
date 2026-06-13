export interface SkillCategory {
  name: string
  skills: { name: string; icon: string }[]
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: [
      { name: 'HTML5', icon: 'logos:html-5' },
      { name: 'CSS3', icon: 'logos:css-3' },
      { name: 'JavaScript', icon: 'logos:javascript' },
      { name: 'TypeScript', icon: 'logos:typescript-icon' },
      { name: 'Vue.js', icon: 'logos:vue' },
      { name: 'Nuxt', icon: 'logos:nuxt-icon' },
      { name: 'React', icon: 'logos:react' },
      { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', icon: 'logos:nodejs-icon' },
      { name: 'Express', icon: 'logos:express' },
      { name: 'MongoDB', icon: 'logos:mongodb-icon' },
      { name: 'REST API', icon: 'mdi:api' },
    ],
  },
  {
    name: 'Tools',
    skills: [
      { name: 'Git', icon: 'logos:git-icon' },
      { name: 'GitHub', icon: 'logos:github-icon' },
      { name: 'Figma', icon: 'logos:figma' },
      { name: 'Postman', icon: 'logos:postman-icon' },
      { name: 'Vite', icon: 'logos:vitejs' },
    ],
  },
]
