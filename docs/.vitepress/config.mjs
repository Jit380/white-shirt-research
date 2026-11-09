import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'White Shirt Project',
  description: 'A research notebook for building a considered plain white T-shirt brand.',
  lang: 'en-US',
  base: '/white-shirt-research/',
  lastUpdated: true,
  themeConfig: {
    siteTitle: 'White Shirt / Research',
    nav: [
      { text: 'Start here', link: '/research/brief' },
      { text: 'Competitors', link: '/competitors/' },
      { text: 'Comparison', link: '/research/comparison' },
      { text: 'Research log', link: '/research/log' }
    ],
    sidebar: [
      { text: 'The project', items: [
        { text: 'Research brief', link: '/research/brief' },
        { text: 'Method & evidence', link: '/research/method' },
        { text: 'Research backlog', link: '/research/backlog' }
      ] },
      { text: 'Competitive landscape', items: [
        { text: 'Competitor directory', link: '/competitors/' },
        { text: 'Comparison matrix', link: '/research/comparison' },
        { text: 'Profile template', link: '/competitors/template' },
        { text: 'ASKET', link: '/competitors/asket' },
        { text: 'True Classic', link: '/competitors/true-classic' },
        { text: 'Fresh Clean Threads', link: '/competitors/fresh-clean-threads' },
        { text: 'Buck Mason', link: '/competitors/buck-mason' },
        { text: 'UNIQLO', link: '/competitors/uniqlo' },
        { text: 'Sunspel', link: '/competitors/sunspel' }
      ] },
      { text: 'Collect & synthesize', items: [
        { text: 'Source register', link: '/research/sources' },
        { text: 'Customer questions', link: '/research/customers' },
        { text: 'Insights & hypotheses', link: '/research/insights' },
        { text: 'Decision log', link: '/research/log' }
      ] }
    ],
    search: { provider: 'local' },
    outline: [2, 3],
    footer: { message: 'Research first. Brand later. Every claim needs evidence.' }
  }
})
