<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    if(this.$store.state.user.length <= 1) {
      this.$router.push('/');
    }
  },
}
</script>

<style>
/* 기본값 초기화 */
* {
  margin: 0;
  padding: 0;
}
ul, li {
  list-style: none;
}
a {
  text-decoration: none;
  color: black;
}
img {
  border: 0;
}
body {
  background-color: #f2f2f2;
}
#app {
  width: 100%;
  min-width: 1450px;
  height: 100vh;
}
</style>
