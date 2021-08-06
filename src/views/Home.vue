<template>
  <div class="top">
    <h1>📚 ToDoList 📚</h1>

    <div v-if="!$store.state.loginUser">
    <button @click="login">Googleアカウントでログイン</button>
    </div>
    <div>{{userName}}</div>
    <div><img v-if="photoURL" :src="photoURL"/></div>
    <!-- ログインしてない時は表示されない -->
    <div v-if="$store.state.loginUser">
    <button @click="logout">ログアウト</button>
    </div>
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
import {mapActions, mapGetters} from 'vuex'
export default {
    data:() => ({
      //
    }),
    methods:{
      ...mapActions(["login","logout"])
    },
    computed:{
      ...mapGetters(["userName","photoURL"])
    }
  }
</script>
