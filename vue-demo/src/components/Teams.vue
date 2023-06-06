<script>
export default {
    data() {
        return {
            teams: [
                { id: 1, name: "Juventus", scudetti: 36 },
                { id: 2, name: "Napoli", scudetti: 3 },
                { id: 3, name: "Atalanta Bergamo", scudetti: 0 },
            ],
            visible: true,
            classes1: {
                demo: true,
                underline: true
            },
            class1: 'demo',
            class2: 'space',
            favoriteColor: 'pink',
            deco: 'underline'
        };
    },
    computed: {
        nbTeams() {
            return this.teams.length;
        },
        message() {
            return this.teams.length > 4 ? 'Full' : 'Not full';
        },
        getBestTeamName() {
            return 'Juventus';
        },
        now() {
            return Date.now()
        }

    },
    methods: {
        demo() {
            this.teams.push({ id: 3, name: "Inter Milan" });
            this.favoriteColor = 'red';
            this.deco = 'none';
        },
        getBestTeamName() {
            return 'Juventus';
        },
        add(a, b) {
            let s = a + b;
            console.log(s);
            return s;
        }
    }
}
</script>

<template>
    <div>
        <h3 :class="classes1" :style="{ color: favoriteColor, 'text-decoration': deco }">
            Teams ({{ nbTeams }}) - ({{ teams.length }})
        </h3>
        <h2 :class="{ underline: visible, demo: nbTeams > 4 }">Meilleure équipe: {{ getBestTeamName }}</h2>

        <ul :class="[class1]">
            <li v-for="team in teams" :key="team.id">
                <span :class="{ 'winner-team': team.scudetti >= 10 }">{{ team.name }} ({{ team.scudetti }})</span>
                <span v-if="team.scudetti >= 10">Etoilée</span>
                <span v-else>sans étoile</span>
            </li>
        </ul>

        <select>
            <option value="0">--- Choisir une équipe ---</option>
            <option :key="team.id" v-for="(team, index) in teams" :value="index+1">{{ team.name }}</option>
        </select>

        <div v-show="visible">
            <p v-if="teams[0].scudetti === 0">Aucun titre</p>
            <p v-else-if="teams[0].scudetti > 5 && teams[0].scudetti < 10">Faiblement titrée</p>
            <p v-else-if="teams[0].scudetti >= 10">Au moins une étoile</p>
            <p v-else>...</p>
        
            <p>{{ message }}</p>
            <button v-on:click="demo">Demo</button>
        </div>
        
        
        <footer :class="{ space: false }">
            <button @click="add(4,2)">Add</button>
            <button @click="(event) => { visible = !visible; classes1.underline = !classes1.underline; console.log(event.target.tagName) }">
                {{ visible ? 'Masquer' : 'Afficher' }} le contenu
            </button>
            <template v-if="visible">
                <p>La plus titrée: {{ getBestTeamName }}</p>
                <p> {{ now }}</p>
                <p> {{ now }}</p>
                <span v-for="i in 5" :key=i>span n° {{ i }}</span>
            </template>
        </footer>
    </div>
</template>

<style scoped>
h3 {
    color: orange
}

.underline {
    text-decoration: underline;
}

.winner-team {
    color: green;
    font-size: 1.2rem
}
</style>