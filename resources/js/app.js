import './bootstrap';

// import {createApp} from 'vue'
import { createApp } from 'vue/dist/vue.esm-bundler'
import App from './layouts/App.vue'
import { TailwindPagination } from 'laravel-vue-pagination'
import router from './routes/index'

// const routes = [
//     {
//         path: '/',
//         name: 'posts.index',
//         component: PostsIndex
//     },
//     {
//         path: '/posts/create',
//         name: 'posts.create',
//         component: PostsCreate
//     },
// ]
//
// const router = createRouter({
//     history: createWebHistory(),
//     routes
// })

const app = createApp(App)
app.use(router)
app.component('Pagination', TailwindPagination)
app.mount("#app")
