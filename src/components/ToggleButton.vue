<script>
    export default {
        data(){
            return{
                isToggleDisabled: true
            }
        }
    }
</script>

<template>
    <button v-bind:disabled="isToggleDisabled">Haz click en mí</button>

</template>
¿