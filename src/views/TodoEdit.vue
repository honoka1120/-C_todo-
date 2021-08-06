<template>
  <div>
      <h1>Todo編集</h1>
    <div>タイトル：<input type="text" v-model="todo.title" disabled></div>
    <div>内容：<input type="text" v-model="todo.content"></div>
    <div>期日：<input type="date" v-model="todo.limit"></div>
    <div>進捗率：<input type="range" min="0" max="100" step="10" v-model="todo.progress">{{ todo.progress }} %</div>
    <div>メモ:
    <textarea v-model="todo.memo"></textarea>
    </div>
    <button @click="submit()">編集</button>
  </div>
</template>

<script>
import {mapActions} from "vuex"
export default {
    data(){
        return{
            todo:{}
        }
    },
    created(){
        const todo = this.$route.params.todo_item
        this.todo = todo
    },
    methods:{
        submit(){
            this.editTodo(this.todo)
            this.$router.push({name:"TodoList"})
        },
        ...mapActions(["editTodo"])
    },
}
  </script>
