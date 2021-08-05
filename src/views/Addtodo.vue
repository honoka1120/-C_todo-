<template>
  <div class="addtodo">
    <div>タイトル：<input type="text"></div>
    <div>内容：<input type="text"></div>
    <div>期日：<input type="date"></div>
    <div>進捗率：<input type="range" min="0" max="100"></div>
    <div>メモ</div>
    <textarea></textarea>
    <div><button>追加</button></div>
    <a>一覧に戻る</a>
  </div>
</template>

<script>

export default {
  name: 'Addtodo',

}
</script>