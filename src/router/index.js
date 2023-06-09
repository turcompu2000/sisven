import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import EditarCategories from '../components/categories/EditarCategories';
import NewCategories from '../components/categories/NewCategories';
import Categories from '../views/categories';
import EditarCustomers from '../components/customers/EditarCustomers';
import NewCustomers from '../components/customers/NewCustomers'; 
import Customers from '../views/customers';
import EditarPay_mode from '../components/pay_mode/EditarPay_mode';
import NewPay_mode from '../components/pay_mode/NewPay_mode';
import Pay_mode from '../views/pay_mode';
import EditarProducts from '../components/products/EditarProducts';
import NewProducts from '../components/products/NewProducts';
import Products from '../views/products';


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories
  },
  {
    path: '/editar-categories/:id',
    name: 'EditarCategories',
    component: EditarCategories
  },
  {
    path: '/add-Categories/',
    name: 'NewCategories',
    component: NewCategories
  },
  {
    path: '/customers',
    name: 'Customers',
    component: Customers
  },
  {
    path: '/editar-customers/:id',
    name: 'EditarCustomers',
    component: EditarCustomers
  },
  {
    path: '/add-Customers/',
    name: 'NewCustomers',
    component: NewCustomers
  },

  {
    path: '/pay_mode',
    name: 'Pay_mode',
    component: Pay_mode
  },
  {
    path: '/editar-pay_mode/:id',
    name: 'EditarPay_mode',
    component: EditarPay_mode
  },
  {
    path: '/add-Pay_mode/',
    name: 'NewPay_mode',
    component: NewPay_mode
  },

  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/editar-products/:id',
    name: 'EditarProducts',
    component: EditarProducts
  },
  {
    path: '/add-Products/',
    name: 'NewProducts',
    component: NewProducts
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
