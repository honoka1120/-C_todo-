import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TodoList from '../views/TodoList.vue'
import Addtodo from '../views/Addtodo.vue'
import TodoEdit from '../views/TodoEdit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Top',
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
    path: '/todolist',
    name: 'TodoList',
    component: TodoList
  },
  {
    path: '/addtodo',
    name: 'Addtodo',
    component: Addtodo
  },
  {
    path: '/todolist/:todo_item?/edit',
    name: 'TodoEdit',
    component: TodoEdit
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
