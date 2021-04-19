import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import Login from './components/Login.vue'
import Info from './components/Information.vue'
import Navbar from './components/Navbar.vue'




const app = createApp(App)
app.use(router)
app.component('login',Login)
app.component('info',Info)
app.component('nav-bar',Navbar)
app.mount('#app')


