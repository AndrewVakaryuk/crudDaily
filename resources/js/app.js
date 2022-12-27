import './bootstrap';

// import {createApp} from 'vue'
import { createApp } from 'vue/dist/vue.esm-bundler'
import { TailwindPagination } from 'laravel-vue-pagination'
import router from './routes/index'
import VueSweetalert2 from "vue-sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';


const app = createApp({})
app.use(router)
app.use(VueSweetalert2)
app.component('Pagination', TailwindPagination)
app.mount("#app")
