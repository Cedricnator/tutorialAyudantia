<script>
    export default {
        data() {
            return {
                mostrarHolaMundo: true,
                mostrarHolaVue: false
            }
        }
    }
</script>

<template>
    <p v-if="mostrarMensaje">Hola mundo</p>
    <button @click="mostrarHolaVue =! mostrarHolaVue">Mostrar/Ocultar Mensaje de Hola vue</button>
    <p v-show="mostrarHolaVue">Hola vue</p>
</template>