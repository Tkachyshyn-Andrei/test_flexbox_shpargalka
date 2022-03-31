import Vue from "vue";
import VueRouter from "vue-router";
// import Item from "@/components/Item";
import Home from "@/components/Home";
import Generator from "@/components/Generator";

Vue.use(VueRouter)
const router = new VueRouter({
    routes:[
        {
            path:'/',
            component:Home
        },
        {
            path:'/generator',
            component: Generator
        }
    ]

})

export default router