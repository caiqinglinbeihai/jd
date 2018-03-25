import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let router = new VueRouter({
    routes: [
        {path: '/', component: require('./pages/index.vue')},
    ]
})

export default router;