<script>
export default {
    data(){
        return {
            lista: [
                { id: 1, nombre: 'Manzana' },
                { id: 2, nombre: 'Pera' },
                { id: 3, nombre: 'Zanahoria' },
                { id: 4, nombre: 'Tomate' },
            ]
        }
    }
}
</script>

<template>
    <li v-for="item in lista" :key="item.id">
        {{ item.nombre }}
    </li>
</template>