<script>
export default {
    data() {
        return {
            count: 0,
            title: "Counter Component",
            visible: false
        }
    },
    methods: {
        increment() {
            this.count += 1;

            if (this.count > 10) {
                this.title += " - DANGER";
                this.visible = true;
            }
        },
        decrement() {
            this.count -= 1;
        },
        reset() {
            this.count = 0;
            this.visible = false;
            this.title = "Counter Component"
        }
    },
    mounted() {
        console.log("*** mounted ***");
        // setInterval(() => {
        //     //this.count += 1;
        //     this.increment();
        // }, 2000)
    }
}


</script>

<template>
    <div>
        <h3>{{ title }}</h3>
        <button @click="increment">Increment</button>
        <span>{{ count }}</span>
        <button @click="decrement">Decrement</button>
        <button @click="reset">Reset</button>
        <p v-text="count"></p>
        <p v-if="visible">DANGER</p>
        <span>{{ count > 10 ? 'count > 0' : 'count <= 10' }}</span>
    </div>
</template>

