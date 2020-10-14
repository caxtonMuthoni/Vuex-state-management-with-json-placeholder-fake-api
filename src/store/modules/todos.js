import axios from 'axios'
import Vue from 'vue'
const state = {
  todos: []
}

const getters =  {
  allTodos : (state) => state.todos
}

const mutations = {
  fetchTodos: (state, todos)=>{
    state.todos = todos
  },

  addTodo: (state, todo) => {
      state.todos.unshift(todo)
  },

  deleteTodo: (state, id) => {
      state.todos = state.todos.filter(todo => todo.id !== id)
  },

  updateTodo: (state, todo) => {
      const index = state.todos.findIndex(td => td.id === todo.id)

     if(index != -1){
        state.todos.splice(index,1,todo)
     }
  }
}

const actions = {

    fetchTodos: async(context) => {
      Vue.prototype.$Progress.start()
      const response =  await axios.get('https://jsonplaceholder.typicode.com/todos')
      context.commit('fetchTodos',response.data)
      Vue.prototype.$Progress.finish()
    },

    addTodo: async (context, title) => {
        Vue.prototype.$Progress.start()
        const response =  await axios.post('https://jsonplaceholder.typicode.com/todos', {title, completed: false})
        console.log(response.data)
        context.commit('addTodo', response.data)
        Vue.prototype.$Progress.finish()

    },

    destroyTodo: async (context, id) => {
        Vue.prototype.$Progress.start()
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        context.commit('deleteTodo', id)
        Vue.prototype.$swal('Success', 'Todo deleted successfully', 'success');
        Vue.prototype.$Progress.finish()
    },

    filterTodos: async (context, event) => {
        Vue.prototype.$Progress.start()
        const limit =  parseInt(event.target.options[event.target.selectedIndex].value)
        const response =  await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
        context.commit('fetchTodos',response.data)
        Vue.prototype.$Progress.finish()


    },

    updateTodo : async (context, todo)=>{
        Vue.prototype.$Progress.start()
        const response =  await axios.put(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, todo)
        context.commit('updateTodo',response.data)
        Vue.prototype.$Progress.finish()
    }


}


export default {
    state,
    getters,
    mutations,
    actions
}
