<template>
    <div>
        <h1>todo一覧</h1>
        <table>
            <tr>
                <td>制作日時</td>
                <td>タイトル</td>
                <td>内容</td>
                <td>期日</td>
                <td>進捗</td>
                <td>メモ</td>
                <td>削除</td>
                <td>編集</td>
            </tr>
            <tr v-for="(list,index) in $store.state.todolist" :key="index">
                <td>{{list.date}}</td>
                <td>{{list.title}}</td>
                <td>{{list.content}}</td>
                <td>{{list.limit}}</td>
                <td>{{list.progress}}</td>
                <td>{{list.memo}}</td>
                <td><button @click="deleteConfirm(index)">削除</button></td>
                <td><button>編集</button></td>
            </tr>
        </table>
    </div>
</template>

<script>
import {mapActions} from "vuex"
export default {
    methods:{
        deleteConfirm(index){
            if(confirm("削除してもよろしいですか？")){
                this.deleteTodo(index)
            }
        },
        ...mapActions(["deleteTodo"])
    }
}
  </script>
