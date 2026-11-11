<script setup>
import { withBase } from 'vitepress'
</script>
<template>
  <section class="welcome-audio" aria-labelledby="welcome-audio-title">
    <h2 id="welcome-audio-title">Listen to the welcome</h2>
    <p>Audio can introduce the project and summarize research. Play when you like, or open the transcript below.</p>
    <p class="audio-note">Synthetic narration · 31 seconds · no autoplay</p>
    <audio controls preload="metadata" aria-label="Welcome to the White Shirt Project">
      <source :src="withBase('/audio/welcome.mp3')" type="audio/mpeg" />
      Your browser does not support audio playback.
    </audio>
    <a :href="withBase('/audio/welcome.mp3')" download>Download audio</a>
    <details><summary>Read transcript</summary><p>Welcome to the White Shirt Project. This is our shared research hub for a future brand selling plain white T-shirts. Start with the competitor profiles, compare the evidence, and share suggestions through GitHub Issues. Our first three profiles cover Asket, True Classic, and Fresh Clean Threads. We will use what we learn to develop our customer persona, brand direction, and website plan later. This site can include audio introductions and research summaries. You control playback, and you can open the transcript whenever you prefer to read.</p></details>
  </section>
</template>
<style scoped>
.welcome-audio { padding: 24px; margin: 28px 0; border: 1px solid var(--vp-c-divider); border-radius: 12px; background: var(--vp-c-bg-soft); }
.welcome-audio h2 { margin: 0 0 8px; padding: 0; border: 0; }
audio { display: block; width: 100%; margin: 16px 0 10px; }
.audio-note { color: var(--vp-c-text-2); font-size: 13px; }
summary { cursor: pointer; font-weight: 600; padding: 12px 0; }
summary:focus-visible { outline: 2px solid var(--vp-c-brand-1); outline-offset: 4px; }
details { margin-top: 8px; }
</style>
