import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'White Shirt Project',
  description: 'Competitor research for our future plain white T-shirt brand.',
  lang: 'en-US',
  base: '/white-shirt-research/',
  lastUpdated: true,
  themeConfig: {
    siteTitle: 'White Shirt Project',
    nav: [
      { text: 'Research', link: '/competitors/' },
      { text: 'Our project', link: '/project' },
      { text: 'Suggest a change', link: 'https://github.com/Jit380/white-shirt-research/issues/new?template=site-feedback.md' }
    ],
    sidebar: [
      { text: 'Workspace', items: [
        { text: 'Overview', link: '/' },
        { text: 'Competitor research', link: '/competitors/' },
        { text: 'Our project · later', link: '/project' }
      ] },
      { text: 'Competitor profiles', collapsed: false, items: [
        { text: 'ASKET', link: '/competitors/asket' },
        { text: 'True Classic', link: '/competitors/true-classic' },
        { text: 'Fresh Clean Threads', link: '/competitors/fresh-clean-threads' },
        { text: 'Buck Mason', link: '/competitors/buck-mason' },
        { text: 'UNIQLO', link: '/competitors/uniqlo' },
        { text: 'Sunspel', link: '/competitors/sunspel' }
      ] }
    ],
    search: { provider: 'local' },
    outline: false,
    docFooter: { prev: false, next: false },
    socialLinks: [{ icon: 'github', link: 'https://github.com/Jit380/white-shirt-research' }],
    footer: { message: 'Research first. Brand decisions later.' }
  }
})
