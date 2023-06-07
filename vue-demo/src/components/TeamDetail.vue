<script>
import TeamStars from './exos/TeamStars.vue';
// cf prop validation (compile time)
export default {
    props: {
        team: Object,
        demo: String
    },
    components: {
        TeamStars
    }
}
</script>

<template>
    <div>
        <h3>{{ team.name }}</h3>

        <TeamStars :scudetti="team.scudetti">
            <p>Nombre de titres: {{ team.scudetti }}</p>
        </TeamStars>
        
        <input type="hidden" :value="demo" />
        <button @click="$emit('like', team)">Like</button>
    </div>
</template>