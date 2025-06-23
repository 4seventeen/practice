import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Register from './components/Register.vue'

const app = createApp(App)
app.use(router)
app.mount('#app')
