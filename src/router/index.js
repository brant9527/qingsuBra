import Vue from 'vue'
import Router from 'vue-router'
let indexViews = resolve => require(['@/views/index'], resolve)
let about = resolve => require(['@/views/about'], resolve)
let business = resolve => require(['@/views/about/business'], resolve)
let experience = resolve => require(['@/views/about/experience'], resolve)
let future = resolve => require(['@/views/about/future'], resolve)
let news = resolve => require(['@/views/about/news'], resolve)

let product = resolve => require(['@/views/product'], resolve)
let classics = resolve => require(['@/views/product/classics'], resolve)
// let secret = resolve => require(['@/views/product/classics/secret'], resolve)
let light = resolve => require(['@/views/product/classics/secret/light/index'], resolve)
let elegance = resolve => require(['@/views/product/classics/secret/elegance'], resolve)
let grace = resolve => require(['@/views/product/classics/secret/grace'], resolve)
let tenderness = resolve => require(['@/views/product/classics/tenderness'], resolve)
let healthCare = resolve => require(['@/views/product/healthCare'], resolve)

let protect = resolve => require(['@/views/product/healthCare/protect'], resolve)
let career = resolve => require(['@/views/career'], resolve)
let contact = resolve => require(['@/views/career/contact/index.vue'], resolve)
Vue.use(Router)

export default new Router({
  mode: 'history',
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
      component: product,
      redirect: '/product/classics',
      meta: {
        title: 'product'
      },
      children: [{
        path: '/product/classics',
        name: 'classics',
        component: classics,
        redirect: '/product/classics/secret/light',
        meta: {
          title: ''
        },
        children: [
          {
            path: '/product/classics/secret/light',
            name: 'light',
            component: light,
            meta: {
              title: ''
            }
          }, {
            path: '/product/classics/secret/elegance',
            name: 'elegance',
            component: elegance,
            meta: {
              title: ''
            }
          }, {
            path: '/product/classics/secret/grace',
            name: 'grace',
            component: grace,
            meta: {
              title: ''
            }
          }, {
            path: '/product/classics/tenderness',
            name: 'tenderness',
            component: tenderness,
            meta: {
              title: ''
            }
          }
        ]
      },
      {
        path: '/product/healthCare',
        name: 'healthCare',
        component: healthCare,
        redirect: '/product/healthCare/protect',
        meta: {
          title: ''
        },
        children: [{
          path: '/product/healthCare/protect',
          name: 'protect',
          component: protect
        }]
      }
      ]
    }, {
      path: '/career',
      name: 'career',
      component: career,
      redirect: '/career/contact',
      meta: {
        title: 'career'
      },
      children: [{
        path: '/career/contact',
        name: 'contact',
        component: contact,
        meta: {
          title: 'contact'
        }
      }]
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
