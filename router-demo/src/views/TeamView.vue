<script>

const API = "http://localhost:3000/teams";

export default {
    data() {
        return {
            team: null
        }
    },
    created() {

        let id = this.$route.params.id;

        fetch(API + '/' + id)
            .then(res => res.json())
            .then(team => this.team = team)
    }
}
</script>

<template>
    <div>
        <h2>Team View</h2>
        <p>Paramètre url: {{ $route.params.id }}</p>
        <h3>{{ team?.name }}</h3>
        
    </div>
</template>