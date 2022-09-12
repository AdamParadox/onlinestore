import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/saga-blue/theme.css'       
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import "primeflex/primeflex.css"
import VueAgile from 'vue-agile'
import Button from 'primevue/button'



const app = createApp(App); 

app.use(store).use(router).use(VueAgile).use(PrimeVue).mount('#app')

app.component('PrimeButton', Button);
