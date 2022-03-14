<template>
  <ul class="user_list">
    <h2>현재 생존자: {{ userList.length }}</h2>
    <li v-for="user in userList" :key="user">
        {{ user }}
    </li>
  </ul>
</template>

<script>
export default {
    data() {
        return {
            userList: this.$store.state.playUser,
        }
    },
}
</script>

<style scoped>
.user_list {
    width: 20%;
    height: 60vh;
    margin: 0 auto;
    margin-top: 7vh;
    padding: 30px;
    border-radius: 25px;
    box-shadow: 0 5px 10px gray;
    text-align: center;
    background-color: white;
}
</style>