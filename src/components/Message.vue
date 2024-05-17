<script>
    export default {
        data() {
        return {
            mostrarMensaje: true
        }
    }
}
</script>

<template>
    <p v-if="mostrarMensaje">Hola mundo</p>
</template>