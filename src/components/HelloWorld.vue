<script setup>
import Contador     from './Contador.vue';
import Message      from './Message.vue';
import Items        from './Items.vue';
import ToggleButton from './ToggleButton.vue';
</script>

<template>
  <Contador />
  <Message />
  <Items />
  <ToggleButton />
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
