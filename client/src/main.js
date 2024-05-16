import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'


// main.js
// import { dotenv } from 'dotenv'
// require('dotenv').config()

// console.log(process.env.HOST)



const app = createApp(App)
app.use(router)


app.mount('#app')
