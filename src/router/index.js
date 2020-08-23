import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'frontend',
    component: () => import('../views/frontend/Frontend.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/frontend/Home.vue'),
      },
      {
        path: 'products',
        name: 'Products',
        component: () => import('../views/frontend/Products.vue'),
      },
      // 動態路由
      {
        path: 'product/:id',
        name: 'Product',
        component: () => import('../views/frontend/Product.vue'),
      },
      {
        path: 'cart',
        name: 'Cart',
        component: () => import('../views/frontend/Cart.vue'),
      },
      {
        path: 'customer',
        name: 'Customer',
        component: () => import('../views/frontend/CustomerInfo.vue'),
      },
    ],
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/backend/Admin.vue'),
    children: [
      {
        path: '',
        name: 'Admin Product',
        component: () => import('../views/backend/Product.vue'),
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('../views/backend/Login.vue'),
      },
      {
        path: 'customer',
        name: 'Admin Customer',
        component: () => import('../views/backend/CustomerInofo.vue'),
      },
      {
        path: 'cupon',
        name: 'Admin Cupon',
        component: () => import('../views/backend/Cupon.vue'),
      },
    ],
  },
]

const router = new VueRouter({
  routes
})

export default router
