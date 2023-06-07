import './assets/main.css'

import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'

// Create a new store instance.
const store = createStore({
    state () {
      return {
        count: 0,
      }
    },
    mutations: {
      increment (state) {
        state.count++
      },
      incrementBy(state, n) {
        state.count += n
      }
    }
  })

const app = createApp(App)

app.use(router)  // middleware pour inclusion du router

app.use(store)

app.mount('#app')
