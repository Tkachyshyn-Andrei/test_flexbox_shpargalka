import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/components/Home";
import GridGenerator from "@/components/GridGenerator";
import Hint from "@/components/Hint";

Vue.use(VueRouter)
const router = new VueRouter({
    routes:[
        {
            path:'/',
            component:Home
        },
        {
            path:'/grid-generator',
            component: GridGenerator
        },
        {
            path:'/hint',
            component:Hint
        }
    ]

})

export default router