<script>
    export default {
        props: {
            scudetti: Number
        },
        computed: {
            stars() {
                let n = parseInt(this.scudetti / 10);
                return n;
            }
        }
    }
</script>

<template>
    <div>
        <img v-for="n in stars" :key="n" width="16" src="star-icon.png" alt="start" />
    </div>
</template>