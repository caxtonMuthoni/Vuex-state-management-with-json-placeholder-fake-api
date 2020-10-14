<template>
  <div class="home">
  <loader-component v-show="loading" class="centered"/>
    <product-list-one v-show="!loading" />
      <product-list-two v-show="!loading"/>
  </div>
</template>

<script>
// @ is an alias to /src
// const rand = Math.floor(Math.random()* 10)
import ProductListOne from '@/components/ProductListOne.vue'
import ProductListTwo from '@/components/ProductListTwo.vue'
import {Circle8} from 'vue-loading-spinner'

export default {
  name: 'Home',
  data() {
    return {
      loading: true
    }
  },
  components: {
    'product-list-one': ProductListOne,
    'product-list-two': ProductListTwo,
    'loader-component': Circle8,
  },
  created(){
    setTimeout(()=>{
      this.loading = false;
    }, 3000)
  }
}
</script>
<style scoped>
.centered {
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -50px;
  margin-left: -100px;
}
</style>
