<template>
    <transition-group name="fade" tag="ul" class="user_list">
        <li class="user" v-for="(users, index) in $store.state.user" :key="users">
            <span>{{ users }}</span>
            <button class="remove_user" @click="$store.state.user.splice(index, 1);">X</button>
        </li>
    </transition-group>
</template>

<script>
export default {

}
</script>

<style scoped>
.user_list {
    width: 100%;
    height: 90%;
    overflow-y: scroll;
    margin: 0 auto;
    box-shadow: 0 5px 5px gray;
    background-color: #f2f2f2;;
}
.user {
    width: 70%;
    height: 35px;
    margin: 0 auto;
    margin-top: 20px;
    padding: 0 15px;
    border-radius: 10px;
    line-height: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
}
.remove_user {
    width: 20px;
    height: 20px;
    border: 0;
    border-radius: 5px;
    line-height: 20px;
    cursor: pointer;
    background-color: #ffee00;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>