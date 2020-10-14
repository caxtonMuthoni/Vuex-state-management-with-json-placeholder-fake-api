<template>
    <div class="add">
        <form @submit="submitTodo">
            <input v-model="title" type="text" placeholder="add todo ...">  
            <input type="submit" value="Add">
        </form>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    data() {
        return {
            title: ''
        }
    },

    methods:{
        ...mapActions([
            'addTodo'
        ]),

        submitTodo(e){
            e.preventDefault();
            this.addTodo(this.title)
        }
    }
}
</script>

<style scoped>
   form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
}
input[type="submit"] {
  flex: 2;
  background: #41b883;
  color: #fff;
  border: 1px #41b883 solid;
  cursor: pointer;
}
</style>