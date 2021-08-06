<template>
  <div class="top">
    <h1>📚 ToDoList 📚</h1>

    <button @click="login">Googleアカウントでログイン</button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

// export default {
//   name: 'Home',
//   components: {
//     HelloWorld
//   }
// }
import {mapActions} from 'vuex'
export default {
  methods:{
    ...mapActions(['login']),
  }
}
</script>
