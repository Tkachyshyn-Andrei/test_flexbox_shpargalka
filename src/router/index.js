import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/Home";
import GridGenerator from "@/views/GridGenerator";
import FlexBox from "@/views/FlexBox";
import FlexBoxGenerator from "@/views/FlexBoxGenerator";
import Hint from "@/views/Grid";

Vue.use(VueRouter)
const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/grid-generator',
            component: GridGenerator
        },
        {
            path: '/hint',
            component: Hint
        },
        {
            path: '/flex-generator',
            component: FlexBoxGenerator
        },
        {
            path: '/flex-box',
            component: FlexBox
        }
    ]

})

export default router
