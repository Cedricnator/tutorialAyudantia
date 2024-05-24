<script>
    export default {
        data(){
            return {
                numero: 1
            }
        }
    }
</script>
<template>
    <div>
        <h5>Multiplicador</h5>
        <p>{{ numero }}</p>
        <button v-on:click="numero = numero * 2">Multiplicar por 2</button>
    </div>
</template>