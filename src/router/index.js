import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
<<<<<<< HEAD
import TodoList from '../views/TodoList.vue'
=======
import Addtodo from '../views/Addtodo.vue'
>>>>>>> add

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
<<<<<<< HEAD
    path: '/todolist',
    namme: 'TodoList',
    component: TodoList
  }
=======
    path: '/addtodo',
    name: 'Addtodo',
    component: Addtodo
  },
>>>>>>> add
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
