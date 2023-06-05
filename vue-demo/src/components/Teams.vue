<script>
export default {
    data() {
        return {
            teams: [
                { id: 0, name: "Juventus" },
                { id: 1, name: "Napoli" },
                { id: 2, name: "Atalanta Bergamo" },
            ]
        };
    },
    computed: {
        nbTeams() {
            return this.teams.length;
        },
        message() {
            return this.teams.length > 4 ? 'Full' : 'Not full';
        }
    },
    methods: {
        demo() {
            this.teams.push({ id: 3, name: "Inter Milan" });
        }
    }
}
</script>

<template>
    <div>
        <h3>Teams ({{ nbTeams }}) - ({{ teams.length }})</h3>
        <p>{{ message }}</p>
        <button v-on:click="demo">Demo</button>
    </div>
</template>