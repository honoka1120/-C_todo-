<template>
  <div class="addtodo">
    <div>作成日：{{ getDate() }}</div>
    <div>タイトル：<input type="text" v-model="$store.state.todo.title"></div>
    <div>内容：<input type="text" v-model="$store.state.todo.content"></div>
    <div>期日：<input type="date" v-model="$store.state.todo.limit"></div>
    <div>
      進捗率：<input type="range" min="0" max="100" step="10" v-model="$store.state.todo.progress" >
      {{ $store.state.todo.progress }} %
    </div>
    <div>メモ</div>
    <textarea v-model="$store.state.todo.memo"></textarea>
    <div><button @click="addTodo">連続追加</button></div>
    <div><router-link to="/todolist"><button @click="addTodo">追加して一覧へ</button></router-link></div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Addtodo",
  methods: {
    getDate() {
      const date1 = new Date();
      const date2 =
        date1.getFullYear() +
        "年" +
        (date1.getMonth() + 1) +
        "月" +
        date1.getDate() +
        "日";
      return date2;
    },
    ...mapActions(["addTodo"]),
  },
};
</script>