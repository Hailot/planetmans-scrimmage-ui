import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Matches from "@/views/Matches";
import Match from "@/views/Match";
import Players from "../views/Players";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/matches',
    name: 'Matches',
    component: Matches
  },
  {
    path: '/match/:matchId',
    name: 'Match',
    component: Match,
    props: true
  },
  {
    path: '/players',
    name: 'Players',
    component: Players
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
