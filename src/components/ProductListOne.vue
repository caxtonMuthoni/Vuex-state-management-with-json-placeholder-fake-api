<template>
  <div id="product-list-one">
   <h3>Product list one</h3>
   <li v-for="(product, index) in saleProducts" :key="index">
       <span class="name">{{product.name}}</span>
       <span class="price">KSH {{product.price}}</span>
   </li>
  </div>   
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products
    },
    saleProducts() {
      return this.$store.getters.saleProducts
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#product-list-one{
    background: #FFF8B1;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#product-list-one ul{
    padding: 0;
}
#product-list-one li{
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    margin-left: 8px;
    font-weight: bold;
    color: #E8800C;
}
</style>
