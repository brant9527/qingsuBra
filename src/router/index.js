import Vue from 'vue'
import Router from 'vue-router'
let indexViews = resolve => require(['@/views/index'], resolve)
let about = resolve => require(['@/views/about'], resolve)
let business = resolve => require(['@/views/about/business'], resolve)
let experience = resolve => require(['@/views/about/experience'], resolve)
let future = resolve => require(['@/views/about/future'], resolve)
let news = resolve => require(['@/views/about/news'], resolve)
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'indexViews',
    component: indexViews,
    redirect: '/about',
    children: [{
      path: '/about',
      name: 'about',
      component: about,
      redirect: '/about/business',
      meta: {
        title: 'about us'
      },
      children: [{
        path: '/about/experience',
        name: 'experience',
        component: experience,
        meta: {
          preIndex: 2
        }
      }, {
        path: '/about/future',
        name: 'future',
        component: future,
        meta: {
          preIndex: 1
        }
      }, {
        path: '/about/business',
        name: 'business',
        component: business,
        meta: {
          preIndex: 0
        }
      }, {
        path: '/about/news',
        name: 'news',
        component: news,
        meta: {
          preIndex: 3
        }
      }]
    }, {
      path: '/product',
      name: 'product',
      component: about,
      redirect: '/product',
      meta: {
        title: 'product'
      }
    }, {
      path: '/career',
      name: 'career',
      component: about,
      redirect: '/career',
      meta: {
        title: 'career'
      }
    }, {
      path: '/commerce',
      name: 'commerce',
      component: about,
      redirect: '/commerce',
      meta: {
        title: 'E-Commerce'
      }
    }]
  }]
})
