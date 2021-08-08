<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Top</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/todolist">todolist</router-link>|
      <router-link to="/addtodo">Addtodo</router-link>
    </div>
    <router-view/>

  </div>
</template>

<script>
import firebase from 'firebase'
import {mapActions} from 'vuex'
export default {
      created() {
      firebase.auth().onAuthStateChanged(user => {
        console.log(user)
        if (user) {
          this.setLoginUser(user);
          this.fetchTodoList()
        } else {
          this.deleteLoginUser();
          this.$store.state.todoList = []
        }
      });
    },
      methods:{
      ...mapActions(["setLoginUser","deleteLoginUser","fetchTodoList"])
    },
}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
