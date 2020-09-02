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
        path: 'customer_order',
        name: 'Customer Order',
        component: () => import('../views/frontend/CustomerOrder.vue'),
      },
      {
        path: 'customer',
        name: 'Customer',
        component: () => import('../views/frontend/CustomerInfo.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/backend/Login.vue'),
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/backend/Admin.vue'),
    children: [
      {
        path: '',
        name: 'Admin Products',
        component: () => import('../views/backend/Products.vue'),
      },
      {
        path: 'customer_order',
        name: 'Admin Customer Order',
        component: () => import('../views/backend/CustomerOrders.vue'),
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
  scrollBehavior () {
    return { x: 0, y: 0 };
  },
  routes
})

export default router
