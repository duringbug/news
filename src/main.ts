/*
 * @Description: 
 * @Author: 唐健峰
 * @Date: 2023-10-08 14:36:56
 * @LastEditors: ${author}
 * @LastEditTime: 2023-10-08 15:46:09
 */
// css
import './assets/css/main.css'
import './assets/css/tailwind.css'
import './assets/css/soft-ui-dashboard.min.css'
import './assets/css/soft-ui-dashboard-dark.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '../node_modules/element-plus/dist/index.css'
import 'vfonts/FiraSans.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

app.use(store)

app.use(router)

app.mount('#app')
