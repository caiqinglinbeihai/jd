import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let router = new VueRouter({
    routes: [
        {path: '/', component: r => require(['./pages/index.vue'], r)},
    ]
})

export default router;