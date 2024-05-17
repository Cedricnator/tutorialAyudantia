import HelloWorld from '@/components/HelloWorld.vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import Padre from '@/components/Padre.vue';



const routes: any = [
    { path: '/', component: HelloWorld },
    { path: '/listaTareas', component: Padre }
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})