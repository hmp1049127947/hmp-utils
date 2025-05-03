import { createApp } from 'vue'
import App from './demo.web.vue'
import {directive} from '../src'

const app = createApp(App)
app.use(directive).mount('#app')
