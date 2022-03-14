<template>
  <div id="app">
    <router-view></router-view>
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
body {
  background-color: #f2f2f2;
}
#app {
  width: 100%;
  height: 100vh;
}
</style>
