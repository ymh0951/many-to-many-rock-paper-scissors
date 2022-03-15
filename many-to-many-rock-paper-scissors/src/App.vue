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
@font-face {
    font-family: 'Cafe24Ssurround';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/Cafe24Ssurround.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
/* 기본값 초기화 */
* {
  margin: 0;
  padding: 0;
  font-family: 'Cafe24Ssurround';
  font-weight: normal;
  font-style: normal;
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
