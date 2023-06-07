<script>
import TeamDetail from './TeamDetail.vue';

const API = "http://localhost:3000/teams";

export default {
    data() {
        return {
            teams: [],
            likedTeams: []
        }
    },
    components: {
        TeamDetail
    },
    methods: {
        onlike(team) {
            let teams = this.likedTeams.filter(t => t.id === team.id);
            if (teams.length === 0) {
                this.likedTeams.push(team);
            }
        }
    },
    created() {
        console.log("*** component created ***");

        fetch(API)
            .then(res => res.json())
            .then(teams => this.teams = teams)
    },
    mounted() {
        console.log("*** component mounted ***");
    },
}
</script>

<template>
    <div>
        <h2>Liste des équipes</h2>
        <p>Equipes "liked": 
            <span v-for="team in likedTeams" :key="team.id">{{ team.name }}</span>
        </p>
        
        <!-- composant enfant ici -->
        <TeamDetail 
            v-for="team in teams" 
            :key="team.id" 
            :team="team"
            demo="Simple chaîne"
            @like="onlike"
        />
    </div>
</template>