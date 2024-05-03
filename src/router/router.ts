import { createMemoryHistory, createRouter, type Router } from 'vue-router'


const routes: any = [


]

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})