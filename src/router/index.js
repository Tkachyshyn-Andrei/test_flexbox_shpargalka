import Vue from "vue";
import VueRouter from "vue-router";
import VFlexExample from "@/views/VFlexExample";
import GridGenerator from "@/views/GridGenerator";
import FlexBox from "@/views/FlexBox";
import FlexBoxGenerator from "@/views/FlexBoxGenerator";
import Hint from "@/views/Grid";

Vue.use(VueRouter)
const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/grid-hint',
            name: 'home'
        },
        {
            path: '/grid-hint',
            component: Hint,
            name: 'grid-hint',
        },
        {
            path: '/grid-generator',
            component: GridGenerator,
            name: 'grid-generator'
        },
        {
            path: '/flex-generator',
            component: FlexBoxGenerator,
            name: 'flex-generator'
        },
        {
            path: '/flex-box',
            component: FlexBox,
            name: 'flex-box'
        },
        {
            path: '/VFlexExample',
            component: VFlexExample,
            name: 'VFlexExample'
        }]

})

export default router
