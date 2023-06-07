<script>
export default {
    props: {
        limit: Number
    },
    data() {
        return {
            input: ''
        }
    },
    methods: {
        oninput(event) {
            let value = event.target.value;

            if (value.length < this.limit) {
                this.input = value;
            } else {
                // console.log(value);
                // console.log(value.substr(0, 10));
                this.input = value.substr(0, this.limit - 10);
            }
            
        
        }
    },
    computed: {
        warning() {
            let test = this.input.length >= (this.limit * 75) / 100 
            return test;
        }
    }

}
</script>

<template>
    <div>
        <!-- <textarea v-model="input" /> -->
        <textarea @input="oninput" :value="input" />
        <span :class="{ warning }">{{ input.length }}</span>/
        <span>{{ limit }}</span>
    </div>
</template>

<style scoped>
.warning {
    color: red;
    font-weight: bold;
}
</style>
