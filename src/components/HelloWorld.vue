<script setup>
import Contador        from './Contador.vue';
import Message         from './Message.vue';
import Items           from './Items.vue';
import ToggleButton    from './ToggleButton.vue';
import Multiplicador   from './Multiplicador.vue';
import Etiqueta        from './Etiqueta.vue';
import ComponentePadre from './ComponentePadre.vue';
import Navbar          from './Navbar.vue';
</script>

<template>
  <div class="container">
    <Navbar />
    <div class="row">
        <div class="col">
          <Contador />
          <Message />
          <Items />
          <ToggleButton />
        </div>
        
        <div class="col">
          <Multiplicador />
          <Etiqueta />
          <ComponentePadre /> 
        </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
