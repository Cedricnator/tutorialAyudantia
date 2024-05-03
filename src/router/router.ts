import HelloWorld from '@/components/HelloWorld.vue'
import { createMemoryHistory, createRouter } from 'vue-router'


const routes: any = [
    { path: '/', component: HelloWorld }

]

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})