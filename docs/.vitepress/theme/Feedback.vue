<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'
const { page } = useData()
const feedbackUrl = computed(() => {
  const file = page.value.relativePath || 'index.md'
  const path = file.replace(/index\.md$/, '').replace(/\.md$/, '.html')
  const title = page.value.title || 'Project overview'
  const body = `## Page\nhttps://jit380.github.io/white-shirt-research/${path}\n\n## Suggested change\n\n\n## Why / supporting source\n\n`
  return 'https://github.com/Jit380/white-shirt-research/issues/new?' + new URLSearchParams({
    template: 'site-feedback.md', title: `Feedback: ${title}`, body
  }).toString()
})
</script>

<template>
  <aside class="feedback-box" aria-label="Page feedback">
    <div><strong>Something to improve?</strong><p>Suggest a correction, share a source, or request a change.</p></div>
    <a class="feedback-link" :href="feedbackUrl" target="_blank" rel="noopener noreferrer">Suggest a change ↗</a>
    <small>Opens a public GitHub issue draft with this page attached. GitHub sign-in required.</small>
  </aside>
</template>
