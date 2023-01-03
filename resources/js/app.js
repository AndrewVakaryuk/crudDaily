import './bootstrap';

// import {createApp} from 'vue'
import { createApp, onMounted } from 'vue/dist/vue.esm-bundler'
import { TailwindPagination } from 'laravel-vue-pagination'
import router from './routes/index'
import VueSweetalert2 from "vue-sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';
import useAuth from "./composables/auth";


const app = createApp({
    setup() {
        const { getUser } = useAuth()
        onMounted(getUser)
    }
})
app.use(router)
app.use(VueSweetalert2)
app.component('Pagination', TailwindPagination)
app.mount("#app")
