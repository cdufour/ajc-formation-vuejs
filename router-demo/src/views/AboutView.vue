<script>
export default {
  methods: {
    onclick() {
      this.$store.commit('increment');
    }
  }
}
</script>


<template>
  <div class="about">
    <h2>This is an about page</h2>
    <button @click="onclick">Increment count</button>
    <button @click="() => this.$store.commit('incrementBy', 5)">Increment By</button>
    <p>Count value: {{ $store.state.count }}</p>
  </div>
</template>
