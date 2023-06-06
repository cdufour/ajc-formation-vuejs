<script>
export default {
    data() {
        return  {
            message: '',
            statusCode: 0,
            input: 'Tony',
            checked: true,
            option: 1,
            comment: 'Votre commentaire ici...',
            fruit: 1
        }
    },
    methods: {
        onsubmit(event) {
            //event.preventDefault(); // équivalent à @submit.prevent
            console.log('submit...');
            const data = {
                username: this.input,
                isTeacher: this.checked,
                selectedOpt: this.option
            };
            console.log(data);
        },
        onclick() {
            // exemple: requête ajax vers api jsonplaceholder
            const api = "https://jsonplaceholder.typicode.com/users";
            fetch(api)
                .then(response => {
                    if (response.status === 200) {
                        this.message = "L'api a répondu avec succès"
                        this.statusCode = 200;
                    }
                })
        },
        onkeyup(event) {
            this.input = event.target.value;
        },
        onchange(event) {
            this.checked = event.target.checked;
        },
        onselect(event) {
            this.option = event.target.value;
        }
    }
}

</script>


<template>
    <div>
        <a href="" @click.prevent="onclick">Lien quelconque...</a>
        <p>{{ message }}</p>
        <p v-if="statusCode !== 0">API OK</p>
        <form @submit.prevent="onsubmit">
            <input type="text" @keyup="onkeyup" :value="input" />
            <p>{{ input }}</p>
            
            <input type="checkbox" :checked="checked" @change="onchange" /><span>On</span>
            <p>Case {{ checked ? 'cochée' : 'décochée' }}</p>

            <select @change="onselect">
                <option value="1">option 1</option>
                <option value="2">option 2</option>
                <option value="3">option 3</option>
            </select>
            <p>Option sélectionnée: {{ option }}</p>

            <textarea v-model="comment" />
            <p>{{ comment }}</p>

            <select v-model="fruit">
                <option value="0">Choisis un fruit</option>
                <option value="1">Pêche</option>
                <option value="2">Pomme</option>
                <option value="3">Poire</option>
            </select>
            <p>{{ fruit }}</p>
            
            <br />
            <button>OK</button>
        </form>
    </div>
</template>