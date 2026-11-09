import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import Feedback from './Feedback.vue'
import './custom.css'
export default {
  extends: DefaultTheme,
  Layout: () => h(DefaultTheme.Layout, null, {
    'doc-after': () => h(Feedback),
    'home-hero-after': () => h('div', { class: 'home-feedback' }, [h(Feedback)])
  })
}
