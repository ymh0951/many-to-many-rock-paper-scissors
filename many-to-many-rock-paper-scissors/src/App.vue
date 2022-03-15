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
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}
/* 기본값 초기화 */
* {
  margin: 0;
  padding: 0;
  font-family: 'Pretendard-Regular';
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
  min-width: 1520px;
  height: 100vh;
}
</style>
