<template lang="pug">
  #q-app
    router-view
    //-input(type="text" v-model="newTodo.title" placeholder="Todo Title")
      input(type="text" v-model="newTodo.description" placeholder="Todo Description")
      button(@click="createTodo") Add Todo
      ul
        li(v-for="(todo,index) of todos", :key="index" @click="selectTodo(todo)")
          h3 {{todo.title}}
          p {{todo.description}}
          button(@click.stop="removeTodo(todo.id)") X
</template>

<script>
  export default {
    name: "App"
    /* data() {
        return {
          todos: [],
          newTodo: {
            title: "",
            description: ""
          },
          selectedTodo: null
        };
      },
      methods: {
        selectTodo(todo) {
          this.selectedTodo = todo;
        },
        createTodo() {
          console.log(this);
          this.todos.push(this.newTodo);
          this.newTodo = {
            title: "",
            description: ""
          };
        },
        updateTodo() {
          // this.selectedTodo =
        },
        deleteTodo(id) {
          this.todos = this.todos.filter(todo => todo.id === id);
        }
      } */
  };
</script>

<style>

</style>
