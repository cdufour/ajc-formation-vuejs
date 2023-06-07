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
        <slot />
        <img v-for="n in stars" :key="n" width="16" src="images/star-icon.png" alt="start" />
    </div>
</template>