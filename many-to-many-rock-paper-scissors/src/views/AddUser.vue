<template>
  <div class="add_user">
      <add-user-input></add-user-input>
      <user-list></user-list>
      <transition name="fade">
        <button class="next_btn" v-if="$store.state.user.length >= 2" @click="nextStage">></button>
      </transition>
  </div>
</template>

<script>
import addUserInput from '../components/addUserInput.vue';
import userList from '../components/userList.vue';

export default {
    components: {
        addUserInput,
        userList
    },
    methods: {
        nextStage() {
            this.$router.push(`stage${this.$store.state.stageCount}`);
        }
    },
}
</script>

<style scoped>
.add_user {
    width: 25%;
    min-width: 250px;
    height: 70vh;
    margin: 0 auto;
    margin-top: 7vh;
    padding: 50px;
    border-radius: 25px;
    box-shadow: 0 5px 10px gray;
    text-align: center;
    position: relative;
    background-color: white;
}
.next_btn {
    width: 50px;
    height: 50px;
    border: 0;
    border-radius: 8px;
    box-shadow: 0 0 10px #9c9200;
    font-size: 20px;
    font-weight: 600;
    position: absolute;
    bottom: 0;
    left: 105%;
    transition: 0.5s;
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