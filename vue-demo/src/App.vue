<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Counter from './components/Counter.vue'
import Teams from './components/Teams.vue'
import FormDemo from './components/FormDemo.vue'
import TeamList from './components/TeamList.vue'

</script>

<template>

    <header>
      <div class="wrapper">
        <HelloWorld />
      </div>
    </header>

    <main>
      <!-- <Counter />
      <Teams /> 
      <FormDemo />-->
      <TeamList />
    </main>

</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
