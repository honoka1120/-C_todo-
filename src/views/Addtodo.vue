<template>
  <div class="addtodo">
    <div>タイトル：<input type="text" v-model="todo.title"></div>
    <div>内容：<input type="text" v-model="todo.contents"></div>
    <div>期日：<input type="date" v-model="todo.deadline"></div>
    <div>進捗率：<input type="range" min="0" max="100" v-model="todo.progress"> {{todo.progress}} %</div>
    <div>メモ</div>
    <textarea v-model="todo.memo"></textarea>
    <div><button @click="addtodo">追加</button></div>
    <router-link to="/todolist">一覧に戻る</router-link>
    <div>{{todos}}</div>
  </div>
</template>

<script>

export default {
  name: 'Addtodo',
  data(){
    return{
      todos:[],
      todo:{
        title:'',
        contents:'',
        deadline:'',
        progress:'',
        memo:'',
      }
    }
  },
  methods:{
    addtodo(){
      this.todos.push(this.todo)
      this.todo={}
      // this.$router.push({name:'TodoList'})
    }
  }

}
</script>