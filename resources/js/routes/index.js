import PostsIndex from "../components/Posts/Index.vue";
import PostsCreate from "../components/Posts/Create.vue";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        name: 'posts.index',
        component: PostsIndex
    },
    {
        path: '/posts/create',
        name: 'posts.create',
        component: PostsCreate
    },
]

export default createRouter({
    history: createWebHistory(),
    routes
})
