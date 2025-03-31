import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import quasarConfig from './quasar'

const app = createApp(App)
app.use(Quasar, quasarConfig)
app.mount('#app')
