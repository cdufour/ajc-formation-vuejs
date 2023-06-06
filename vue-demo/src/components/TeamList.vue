<script>
import TeamDetail from './TeamDetail.vue';

export default {
    data() {
        return {
            teams: [
                { id: 1, name: "Juventus", scudetti: 36 },
                { id: 2, name: "Napoli", scudetti: 3 },
                { id: 3, name: "Atalanta Bergamo", scudetti: 0 },
            ],
        }
    }
}
</script>

<template>
    <div>
        <h2>Liste des équipes</h2>
        <!-- composant enfant ici -->
        <TeamDetail v-for="team in teams" :key="team.id" />
    </div>
</template>