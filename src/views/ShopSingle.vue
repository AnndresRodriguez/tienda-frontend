<template>
    <div>
     
     <div class="bg-light py-3">
      <div class="container">
        <div class="row">
          <div class="col-md-12 mb-0">
              <router-link to="/">Inicio</router-link>
              <!-- <a href="index.html">Inicio</a>  -->
              <span class="mx-2 mb-0">/</span> 
              <strong class="text-black">Todos</strong> 
              <span class="mx-2 mb-0">/</span>
              <strong class="text-black">Detalles</strong>
          </div>
        </div>
      </div>
    </div>

     <div class="site-section">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <img :src="imagen" alt="Image" class="img-fluid">
          </div>
          <div class="col-md-6">
            <h2 class="text-black">{{descripcion}} - {{marca}}</h2>
            <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, vitae, explicabo? Incidunt facere, natus soluta dolores iusto! Molestiae expedita veritatis nesciunt doloremque sint asperiores fuga voluptas, distinctio, aperiam, ratione dolore.</p>
            <p class="mb-4">Ex numquam veritatis debitis minima quo error quam eos dolorum quidem perferendis. Quos repellat dignissimos minus, eveniet nam voluptatibus molestias omnis reiciendis perspiciatis illum hic magni iste, velit aperiam quis.</p> -->
            <p><strong class="text-primary h4">${{precio}}</strong></p>
            <h5>Tallas disponibles</h5>
            <div class="mb-1 d-flex">
              <label for="option-sm" class="d-flex mr-3 mb-3">
                <span class="d-inline-block mr-2" style="top:-2px; position: relative;"><input type="radio" id="option-sm" name="shop-sizes"></span> <span class="d-inline-block text-black">S</span>
              </label>
              <label for="option-md" class="d-flex mr-3 mb-3">
                <span class="d-inline-block mr-2" style="top:-2px; position: relative;"><input type="radio" id="option-md" name="shop-sizes"></span> <span class="d-inline-block text-black">M</span>
              </label>
              <label for="option-lg" class="d-flex mr-3 mb-3">
                <span class="d-inline-block mr-2" style="top:-2px; position: relative;"><input type="radio" id="option-lg" name="shop-sizes"></span> <span class="d-inline-block text-black">L</span>
              </label>
              <label for="option-xl" class="d-flex mr-3 mb-3">
                <span class="d-inline-block mr-2" style="top:-2px; position: relative;"><input type="radio" id="option-xl" name="shop-sizes"></span> <span class="d-inline-block text-black"> XL</span>
              </label>
            </div>
            <div class="mb-4">
              <h5>Indique la cantidad</h5>
              <div class="input-group mb-3" style="max-width: 120px;">
              <div class="input-group-prepend">
                <button class="btn btn-outline-primary js-btn-minus" type="button" @click="restarCantidad">&minus;</button>
              </div>
              <input type="text" class="form-control text-center" id="inputCantidad" value="1" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">
              <div class="input-group-append">
                <button class="btn btn-outline-primary js-btn-plus" type="button" @click="aniadirCantidad">&plus;</button>
              </div>
            </div>

            </div>
            <div class="d-flex">
                <p><button class="buy-now btn btn-sm btn-primary">Añadir al Carrito</button></p>
                <p class="ml-3"><router-link to="/" class="buy-now btn btn-sm btn-primary">Atrás</router-link></p>
                
            </div>

            <router-link :to="{name: 'featured'}" class="btn btn-sm btn-primary">detalles</router-link>
            <router-link :to="{name: 'bigsale'}" class="btn btn-sm btn-primary">Descuentos</router-link>

          </div>
        </div>

        <router-view></router-view>

      </div>
    </div>

    <!-- <pre>{{$data}}</pre> -->

    </div>
</template>


<script>

//import Vuex from 'vuex';

export default {
  mounted(){
     this.establecerCantidad();
  },
  data(){
     return {
       id: this.$route.params.id,
       marca: this.$route.params.marca,
       descripcion: this.$route.params.descripcion,
       precio: this.$route.params.precio,
       imagen: this.$route.params.imagen,
       talla: "",
       cantidad: 1
     }
  },
  methods: {

    establecerCantidad(){
      const input = document.getElementById("inputCantidad");
      input.setAttribute("value", 1); 
    },

    aniadirCantidad(){
      this.cantidad++;
      const input = document.getElementById("inputCantidad");
      input.setAttribute("value", this.cantidad);   
    },
    restarCantidad(){
      if(this.cantidad>1){
        this.cantidad--;
        const input = document.getElementById("inputCantidad");
        input.setAttribute("value", this.cantidad);
      }
    }     
  }
}
</script>