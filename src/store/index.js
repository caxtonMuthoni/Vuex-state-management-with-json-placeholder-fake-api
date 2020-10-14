import Vue from 'vue'
import Vuex from 'vuex'
import todos from './modules/todos'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {
        name: 'Bananas' , price: 20, id: 1,
      },
      {
        name: 'Oranges' , price: 10, id: 2,
      },
      {
        name: 'Pineapples' , price: 15, id: 3,
      },
      {
        name: 'Water Melons' , price: 25, id: 4,
      },
      {
        name: 'Apples' , price: 30, id: 5,
      }
    ]
  },
  getters: {
    saleProducts: state => {
      let saleProducts =  state.products.map(product => {
        return {
          name: `*** ${product.name} ***`,
          price: product.price,
          id: product.id
        }
      })

      return  saleProducts;
    }
  },
  mutations: {

    updatePrice: (state, id) => {
      state.products.forEach(product => {
        if(product.id === id){
          product.price -= 1
        }
      })
    }
  },
  actions: {
    updatePrice: (context, id) => {
      Vue.prototype.$Progress.start()
      setTimeout(()=>{
        context.commit('updatePrice', id);
         Vue.prototype.$swal('Success', 'Price Updated successfully', 'success');
         Vue.prototype.$Progress.finish();
      }, 3000)
    }
  },
  modules: {
    todos
  }
})
