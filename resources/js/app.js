import './bootstrap';

// import {createApp} from 'vue'
import { createApp } from 'vue/dist/vue.esm-bundler';
import PostIndex from './components/Posts/Index.vue';
import { TailwindPagination } from 'laravel-vue-pagination';

const app = createApp({})
app.component('post-index', PostIndex)
app.component('Pagination', TailwindPagination)
app.mount("#app")
