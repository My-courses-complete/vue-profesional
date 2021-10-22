import { createApp } from 'vue'
import Root from '@/App.vue'
import EventBus from '@/plugins/event-bus'

const app = createApp(Root)
app.use(EventBus)
app.mount('#app')
