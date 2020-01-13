import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        marca: "Levi's",
        description: "Franela",
        precio: 25000,
        imagen:
          "https://res.cloudinary.com/sigtam/image/upload/v1572661677/cloth_1_qbrnhc.jpg"
      },
      {
        id: 2,
        marca: "Lacoste",
        description: "Zapatos Casuales",
        precio: 135000,
        imagen:
          "https://res.cloudinary.com/sigtam/image/upload/v1572661677/shoe_1_u2spqn.jpg"
      },
      {
        id: 3,
        marca: "Tommy Hilfiger",
        description: "Camisa Polo",
        precio: 65000,
        imagen:
          "https://res.cloudinary.com/sigtam/image/upload/v1572661677/cloth_2_bcb3p5.jpg"
      },
      {
        id: 4,
        marca: "ELA",
        description: "Camisa Dama",
        precio: 50000,
        imagen:
          "https://res.cloudinary.com/sigtam/image/upload/v1572661677/cloth_3_kr6qsv.jpg"
      }
    ],
    cantidadProductos: 0
  },
  getters:{
    getProducts: state => {
      return state.products;
    },
    getCantidadCarrito: state => {
      return state.cantidadProductos;
    }
  },
  mutations: {
    ANIADIR_CANTIDAD_CARRITO: state => {
      state.products++;
    }
  },
  actions: {
    aniadirCantidadCarrito: ({commit}) => {
      commit("ANIADIR_CANTIDAD_CARRITO");
    }
  },
  modules: {}
});
