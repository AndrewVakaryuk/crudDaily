import './bootstrap';

// import {createApp} from 'vue'
import { createApp } from 'vue/dist/vue.esm-bundler';
import PostIndex from './components/Posts/Index.vue'

const app = createApp({})
app.component('post-index', PostIndex)
app.mount("#app")
