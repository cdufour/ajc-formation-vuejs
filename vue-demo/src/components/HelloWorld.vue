<script setup>
let n = 45;
const title = "Formation Vuejs - les bases";
const code = "<span>Je suis un span</span>";
const imgUrl = "https://static.cnews.fr/sites/default/files/styles/image_750_422/public/capture_decran_2023-02-20_a_12.28.29_63f35988620ca.png";
let test = true;

function onClick() {
  test = !test;
  n += 1;
  console.log("valeur de la variable test: " + test);
  console.log("valeur de la variable n: " + n);
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ title }}</h1>
    <h2 v-text="title"></h2>
    <p v-html="code"></p>
    <p v-bind:id="n">Paragraphe</p>
    <p>Id: {{ n }}</p>
    <img v-bind:src="imgUrl" :alt="title" width="100" />
    <button :disabled="test" @click="() => console.log('click')">Click</button>
    <button @click="onClick">Click</button>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

.greetings h1 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1 {
    text-align: left;
  }
}
</style>
