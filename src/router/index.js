import Vue from "vue";
import VueRouter from "vue-router";
//import Home from "../views/Home.vue";
import Shop from "../components/Shop.vue";
import About from "../views/About.vue";
import ShopSingle from "../views/ShopSingle.vue";
import Checkout from "../views/Checkout.vue";
import Cart from "../views/Cart.vue";
import Featured from "../components/FeaturedProducts.vue";
import BigSale from "../components/BigSale.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Shop",
    component: Shop
  },
  {
    path: "/about",
    name: "about",
    component: About
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/shopsingle/:id",
    name: "shopsingle",
    component: ShopSingle,
    children: [
      {
        path: "/shopsingle/:id/featured",
        name: "featured",
        component: Featured
      },
      {
        path: "/shopsingle/:id/bigsale",
        name: "bigsale",
        component: BigSale
      }
    ]  
  },
  {
    path: "/checkout",
    name: "checkout",
    component: Checkout
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart
  }
];

const router = new VueRouter({
  routes
});

export default router;
