import mitt from 'mitt'
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'


const emitter = mitt()
const app = createApp(App)
app.config.globalProperties.emitter = emitter
app.use(router)
app.mount('#app')
