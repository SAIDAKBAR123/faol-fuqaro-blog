import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import goTo from 'vuetify/es5/services/goto'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      name: 'mainBtn',
      disable: false
    }
  },
  {
    path: '/article/:id',
    name: 'About',
    props: true,
    component: () => import('../components/Article.vue'),
    meta: {
      name: 'article',
      disable: true
    }
  },
  {
    path: '/announcement/:id',
    name: 'Announcement',
    props: true,
    component: () => import('../components/Announcement.vue'),
    meta: {
      name: 'announce',
      disable: true
    }
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0

    if (to.hash) {
      scrollTo = to.hash
    } else if (savedPosition) {
      scrollTo = savedPosition.y
    }

    return goTo(scrollTo)
  }
})

export default router
