import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.mount('#app')

document.getElementById('app2')!.innerHTML = '__UNPLUGIN__'
