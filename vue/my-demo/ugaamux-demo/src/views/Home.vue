<template>
  <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
  <div>
    <Header/>
    <Body/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Header from '../components/Header.vue';
import Body from '../components/Body.vue';
import Footer from '../components/Footer.vue';


export default {
  name: 'Home',
  components: {
    // HelloWorld,
    Header,
    Body,
    Footer,
  },
};
</script>
