<script>
// cf prop validation (compile time)
export default {
    props: {
        team: Object,
        demo: String
    }
}
</script>

<template>
    <div>
        <h3>{{ team.name }}</h3>
        <p>Nombre de titres: {{ team.scudetti }}</p>
        <input type="hidden" :value="demo" />
        <button @click="$emit('like', team)">Like</button>
    </div>
</template>