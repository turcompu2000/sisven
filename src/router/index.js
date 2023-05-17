import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import EditarCategories from '../components/categories/EditarCategories';
import NewCategories from '../components/categories/NewCategories';
import Categories from '../views/categories';
import EditarCustomers from '../components/customers/EditarCustomers';
import NewCustomers from '../components/customers/NewCustomers';
import Customers from '../views/customers';
import Products from '../views/products';
import Pay_mode from '../views/pay_mode';

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
    path: '/add-Customers/',
    name: 'NewCustomers',
    component: NewCustomers
  },
  {
    path: '/editar-customers/:id',
    name: 'EditarCustomers',
    component: EditarCustomers
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/pay_mode',
    name: 'Pay_mode',
    component: Pay_mode
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
