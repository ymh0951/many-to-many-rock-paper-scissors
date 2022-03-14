<template>
  <div class="add_user">
      <div class="add_user_input">
          <input type="text" v-model="addUser" @keyup.enter="addUsers">
          <button @click="addUsers">+</button>
      </div>
      <ul class="user_list">
          <li class="user" v-for="users in this.user">{{ users }}</li>
      </ul>
      <transition name="fade">
        <button class="next_btn" v-if="user.length >= 2">></button>
      </transition>
  </div>
</template>

<script>
export default {
    data() {
        return {
            addUser: '',
            user: this.$store.state.user
        }
    },
    methods: {
        addUsers() {
            if(this.addUser == '') {
                alert('유저를 입력해주세요.');
            }else {
                this.user.push(this.addUser);
                this.addUser = '';
            }
        }
    },
}
</script>

<style scoped>
.add_user {
    width: 25%;
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
.add_user_input {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}
.add_user_input input {
    width: 80%;
    padding: 5px;
    border: 1px solid #ffee00;
}
.add_user_input input:focus {
    outline: none;
    box-shadow: 0 0 5px #cec000;
}
.add_user_input button {
    width: 10%;
    padding: 5px;
    border: 0;
    font-size: 20px;
    cursor: pointer;
    background-color: #ffee00;
}
.user_list {
    width: 100%;
    height: 90%;
    overflow-y: scroll;
    margin: 0 auto;
    box-shadow: 0 5px 5px gray;
    background-color: #f2f2f2;;
}
.user {
    width: 90%;
    height: 35px;
    margin: 0 auto;
    margin-top: 20px;
    border-radius: 10px;
    line-height: 35px;
    background-color: white;
}
.next_btn {
    padding: 15px;
    border: 0;
    border-radius: 8px;
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