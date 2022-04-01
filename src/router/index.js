import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/Home";
import GridGenerator from "@/views/GridGenerator";
import FlexBox from "@/views/FlexBox";
import FlexBoxGenerator from "@/views/FlexBoxGenerator";
import Hint from "@/components/Hint";

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
            path: '/FlexBoxGenerator',
            component: FlexBoxGenerator
        },
        {
            path: '/FlexBox',
            component: FlexBox
        }
    ]

})

export default router
