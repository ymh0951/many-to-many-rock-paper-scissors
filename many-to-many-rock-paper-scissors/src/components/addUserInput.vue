<template>
    <div class="add_user_input">
        <input type="text" v-model="addUser" @keyup.enter="addUsers" placeholder="게임에 참가할 유저를 입력해주세요.">
        <button @click="addUsers">+</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            addUser: '',
        }
    },
    methods: {
        addUsers() {
            if(this.addUser == '') {
                alert('유저를 입력해주세요.');
            }else {
                this.$store.state.user.push(this.addUser);
                this.addUser = '';
            }
        },
    }
}
</script>

<style scoped>
.add_user_input {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}
.add_user_input input {
    width: 80%;
    padding: 5px;
    transition-duration: 0.5s;
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
</style>