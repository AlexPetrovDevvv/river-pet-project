import { createApp } from 'vue'
import './style.sass'
import App from './App.vue'
import router from './router/router';
import { createPinia } from 'pinia'

createApp(App)
    .use(createPinia())
    .use(router)
    .mount('#app')
