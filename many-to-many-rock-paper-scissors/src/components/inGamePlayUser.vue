<template>
  <ul class="user_list">
    <li v-for="user in playUser" :key="user">
        <span>{{ user }}</span>
    </li>
  </ul>
</template>

<script>
export default {
    data() {
        return {
            playUser: this.$store.state.playUser,
            deadUser: this.$store.state.deadUser
        }
    },
    created () {
        if(this.$store.state.stageCount == 1) {
            for(let i = 0; this.$store.state.user.length > i; i++){
                this.playUser.push(this.$store.state.user[i]);
            }
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