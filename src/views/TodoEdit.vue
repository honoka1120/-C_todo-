<template>
  <div>
      <h1>Todo編集</h1>
    <div>タイトル：<input type="text" v-model="todo1.title" disabled></div>
    <div>内容：<input type="text" v-model="todo1.content"></div>
    <div>期日：<input type="date" v-model="todo1.limit"></div>
    <div>進捗率：<input type="range" min="0" max="100" step="10" v-model="todo1.progress">{{ todo1.progress }} %</div>
    <div>メモ:
    <textarea v-model="todo1.memo"></textarea>
    </div>
    <button @click="submit()">編集</button>
  </div>
</template>

<script>
import {mapActions} from "vuex"
export default {
    data(){
        return{
            todo1:{}
        }
    },
    created(){
        const todo = this.$store.getters.getTodoById(
            this.$route.params.todo_item
        )
        if(todo){
        this.todo1 = todo
        }
    },
    methods:{
        submit(){
            this.editTodo(this.todo1)
            this.$router.push({name:"TodoList"})
        },
        ...mapActions(["editTodo"])
    },
}
  </script>
