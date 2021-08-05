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
            <tr>
                <!-- これをv-forで回していく -->
                <td>dataメソッド</td>
                <td>todoリストさくせい</td>
                <td>ああああああああああ</td>
                <td>明日</td>
                <td>5％</td>
                <td>頑張る</td>
                <td><button @click="deleteConfirm">削除</button></td>
                <td><button>編集</button></td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    methods:{
        deleteConfirm(){
            if(confirm("削除してもよろしいですか？")){
                //削除のactionを呼び出す
            }
        }
    }
}
</script>
