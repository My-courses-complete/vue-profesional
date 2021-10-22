import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import EventBus from '@/plugins/event-bus'
import MsToMm from '@/filters/ms-to-mm'
import routes from '@/routes'

import Root from '@/App.vue'

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(Root)
app.use(EventBus)
app.use(MsToMm)
app.use(router)
app.mount('#app')
