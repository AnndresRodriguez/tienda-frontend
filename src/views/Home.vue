<template>
  <div class="home">
    <div class="site-wrap">
    <header class="site-navbar" role="banner">
      <Header></Header>
      <!-- <Navbar></Navbar> -->
    </header>
    <!-- <Banner></Banner> -->
    <!-- <Services></Services> -->
    <Shop></Shop>
    <!-- <Sections></Sections>
    <BigSale></BigSale> -->
    <Footer></Footer>
  </div>

  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Header";
// import Navbar from "../components/Navbar";
// import Banner from "../components/Banner";
import Shop from "../components/Shop";
// import Services from "../components/Services";
// import Sections from "../components/Sections";
// import BigSale from "../components/BigSale";
import Footer from "../components/Footer";



export default {
  name: "home",
  components: {
    Header,
    // Navbar,
    // Banner,
    // Services,
    // Sections,
    // BigSale,
    Footer,
    Shop 
  }
};
</script>
