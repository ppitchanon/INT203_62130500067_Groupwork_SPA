import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import Login from './components/Login.vue'
import Info from './components/Information.vue'




const app = createApp(App)
app.use(router)
app.mount('#app')
app.component('login',Login)
app.component('info',Info)


