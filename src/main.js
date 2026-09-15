import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "../src/assets/css/style.css"
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

// Initialize AOS when the app mounts
app.mixin({
  mounted() {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 50
    })
  }
})

app.use(store).use(router).mount('#app')
