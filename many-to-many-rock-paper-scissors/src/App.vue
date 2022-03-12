<template>
  <div id="app">
    <img src="./assets/logo.png" alt="로고">
    <h1>다대다 가위바위보</h1>
  </div>
</template>

<script>
export default {
  name: 'App',
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
#app {
  text-align: center;
  margin-top: 100px;
}
</style>
