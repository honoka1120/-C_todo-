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
import firebase from 'firebase'
export default {
      created() {
      firebase.auth().onAuthStateChanged(user => {
        console.log(user)
        if (user) {
          this.setLoginUser(user);
          this.fetchTodoList()
        } else {
          this.deleteLoginUser();
        }
      });
    },
    data:() => ({
      //
    }),
    methods:{
      ...mapActions(["login","setLoginUser","deleteLoginUser","logout","fetchTodoList"])
    },
    computed:{
      ...mapGetters(["userName","photoURL"])
    }
  }
</script>
