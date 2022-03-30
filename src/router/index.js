import Vue from "vue";
import VueRouter from "vue-router";
// import Item from "@/components/Item";
import Home from "@/components/Home";

Vue.use(VueRouter)
const router = new VueRouter({
    routes:[
        {
            path:'/',
            component:Home
        },
        // {
        //     path:'/item',
        //     component: Item
        // }
    ]

})

export default router