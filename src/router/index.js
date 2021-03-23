import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    component: () => import('../views/frontend/Frontend.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/frontend/Home.vue')
      },
      {
        path: 'products',
        name: 'Products',
        component: () => import('../views/frontend/Products.vue')
      },
      // 動態路由
      {
        path: 'product/:id',
        name: 'Product',
        component: () => import('../views/frontend/Product.vue')
      },
      {
        path: 'cart',
        name: 'Cart',
        component: () => import('../views/frontend/Cart.vue')
      },
      {
        path: 'customer_order',
        name: 'Customer Order',
        component: () => import('../views/frontend/CustomerOrder.vue')
      },
      {
        path: 'finished_customer_order',
        name: 'Finished Customer Order',
        component: () => import('../views/frontend/FinishedCustomerOrder.vue')
      },
      {
        path: 'epidemic_discount',
        name: 'Epidemic Discount',
        component: () => import('../views/frontend/EpidemicDiscount.vue')
      },
      {
        path: 'customer_service',
        name: 'Customer Service',
        component: () => import('../views/frontend/CustomerService.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/backend/Login.vue')
  },
  {
    path: '/admin',
    component: () => import('../views/backend/Admin.vue'),
    children: [
      {
        path: '',
        name: 'Admin Products',
        component: () => import('../views/backend/Products.vue')
      },
      {
        path: 'customer_order',
        name: 'Admin Customer Order',
        component: () => import('../views/backend/CustomerOrders.vue')
      },
      {
        path: 'storage',
        name: 'Admin Storage',
        component: () => import('../views/backend/Storage.vue')
      },
      {
        path: 'cupon',
        name: 'Admin Cupon',
        component: () => import('../views/backend/Cupon.vue')
      }
    ]
  }
]

const router = new VueRouter({
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes
})

export default router
