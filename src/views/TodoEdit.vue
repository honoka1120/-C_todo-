<template>
  <div>
      <h1>Todo編集</h1>
    <div>タイトル：<input type="text"></div>
    <div>内容：<input type="text"></div>
    <div>期日：<input type="date"></div>
    <div>進捗率：<input type="range" min="0" max="100"></div>
    <div>メモ:
    <textarea></textarea>
    </div>
    <button @click="submit">編集</button>
  </div>
</template>

<script>

export default {
    data(){
        return{
            todo:{}
        }
    },
    methods:{
        submit(){
            this.$router.push({name:"TodoList"})
        }
    },
}
  </script>
