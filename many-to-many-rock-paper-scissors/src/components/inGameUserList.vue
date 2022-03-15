<template>
  <ul class="user_list">
    <h2>살아남은 인원: {{ userList.length }}</h2>
    <h3>아웃된 인원: {{ deadList.length }}</h3>
    <li v-for="user in userList" :key="user">
        {{ user }}
    </li>
    <li v-for="dead in deadList" :key="dead" class="dead_user">
        {{ dead }} 
    </li>
  </ul>
</template>

<script>
export default {
    data() {
        return {
            userList: this.$store.state.playUser,
            deadList: this.$store.state.deadUser,
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
    overflow-y: scroll;
    background-color: white;
}
.user_list h3 {
    color: darkred;
    margin-bottom: 30px;
}
.user_list li {
    width: 90%;
    padding: 5px;
    margin-bottom: 15px;
    border-radius: 10px;
    box-shadow: 0 3px 8px gray;
    border: 2px solid #ffee00;
}
.dead_user {
    text-decoration: line-through;
    color: #b1b1b1;
}
</style>