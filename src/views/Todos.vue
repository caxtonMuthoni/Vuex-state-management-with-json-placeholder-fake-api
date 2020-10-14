<template>
  <div class="container">
    <add-todo />
    <filter-todos />
    <h3>Todos</h3>
     <div class="legend">
      <span>Double click to mark as complete</span>
      <span>
        <span class="incomplete-box"></span> = Incomplete
      </span>
      <span>
        <span class="complete-box"></span> = Complete
      </span>
    </div>
    <div class="todos">
        <div v-for="(todo , index) in allTodos" :key="index" @dblclick="updateThisTodo(todo)" class="todo" :class="{'is-complete' : todo.completed}">
            <p>{{todo.title}}</p>
            <i @click="destroyTodo(todo.id)" class="fa fa-trash" aria-hidden="true"></i>
          </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import AddTodo from '@/components/AddTodo.vue'
import FilterTodos from '@/components/FilterTodos.vue'
export default {
  components:{
     'add-todo': AddTodo,
     'filter-todos' : FilterTodos
  },
  computed: mapGetters([
    'allTodos'
  ]),
  methods: {
    ...mapActions([
      'fetchTodos',
      'destroyTodo',
      'updateTodo'
    ]),

    updateThisTodo(todo){
      const updatedTodo  = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed
      }

      this.updateTodo(updatedTodo)
    }
  },
  created() {
    this.fetchTodos()
  }
}
</script>
<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}
.is-complete {
  background: #35495e;
  color: #fff;
}
@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>
