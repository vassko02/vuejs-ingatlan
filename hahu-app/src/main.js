import { createApp } from 'vue'
import App from './App.vue'
const app =createApp(App);

import { createRouter,createWebHistory } from 'vue-router';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import OpenPage from "./components/OpenPage.vue";
import IngatlanKinalat from "./components/IngatlanKinalat.vue";


const router = createRouter({
    history:createWebHistory(),
    routes: [
        {path:'/',component:OpenPage},  
        {path:'/offers',component:IngatlanKinalat}
    ]
});
app.use(router);
app.mount('#app')
