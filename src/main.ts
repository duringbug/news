/*
 * @Description: 
 * @Author: 唐健峰
 * @Date: 2023-10-08 14:36:56
 * @LastEditors: ${author}
 * @LastEditTime: 2023-10-08 16:46:56
 */

// css
import './main.css'
import './assets/css/tailwind.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '../node_modules/element-plus/dist/index.css'
import 'vfonts/FiraSans.css'
import 'animate.css';

//js
import '@popperjs/core/dist/umd/popper.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/js/all.js'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

app.use(store)

app.use(router)

app.mount('#app')
