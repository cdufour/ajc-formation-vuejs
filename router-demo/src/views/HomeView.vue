<script>
export default {
  created() {
    console.log(this.$store.state.count)
  },
  computed: {
    count() {
      return this.$store.state.count;
    }
  }
}

</script>

<template>
  <main>
    <p>HomeView</p>
    <p>Count value from global state: {{ count }}</p>
  </main>
</template>
