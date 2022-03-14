<template>
  <ul class="user_list">
    <li v-for="(user, index) in playUser" :key="user">
        <div class="img_opt_box">
            <span class="img_opt"><img src="../assets/image/question.png" alt="정답"></span>
            <span>{{ user }}</span>
        </div>
        <div class="img_box">
            <span class="scissors_box" @click="scirrorsClick(index)"><img  class="scissors" src="../assets/image/scissors.png" alt="가위"></span>
            <span class="rock_box" @click="rockClick(index)"><img src="../assets/image/rock.png" alt="바위"></span>
            <span class="paper_box" @click="paperClick(index)"><img src="../assets/image/paper.png" alt="보"></span>
        </div>
    </li>
  </ul>
</template>

<script>
export default {
    data() {
        return {
            playUser: this.$store.state.playUser,
            deadUser: this.$store.state.deadUser,
            userQuestion: this.$store.state.userQuestion,
        }
    },
    created () {
        if(this.$store.state.stageCount == 1) {
            for(let i = 0; this.$store.state.user.length > i; i++){
                this.playUser.push(this.$store.state.user[i]);
                this.userQuestion.push(this.$store.state.user[i]);
            }
        }
    },
    methods: {
        scirrorsClick(index) {
            this.$store.state.userQuestion[index] = 'scirrors';
            document.querySelectorAll('.img_opt img')[index].className = 'opt_scissors';
            document.querySelectorAll('.img_opt img')[index].setAttribute('src', '/img/scissors.d55df7f9.png');
        },
        rockClick(index) {
            this.$store.state.userQuestion[index] = 'rock';
            document.querySelectorAll('.img_opt img')[index].className = 'opt_rock';
            document.querySelectorAll('.img_opt img')[index].setAttribute('src', '/img/rock.04c21188.png');
        },
        paperClick(index) {
            this.$store.state.userQuestion[index] = 'paper';
            document.querySelectorAll('.img_opt img')[index].className = 'opt_paper';
            document.querySelectorAll('.img_opt img')[index].setAttribute('src', '/img/paper.783650f6.png');
        }
    }
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
.user_list li {
    margin-bottom: 15px;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    justify-items: center;
    border-radius: 5px;
    box-shadow: 0 5px 8px gray;
    color: white;
    background-color: #000ba5;;
}
.user_list div {
    width: 45%;
    display: flex;
    justify-content: space-between;
}
.img_in_box img{
    width: 30px;
    cursor: pointer;
}
.img_opt img {
    width: 30px;
}
.scissors_box img {
    width: 30px;
    cursor: pointer;
}
.rock_box img {
    width: 30px;
    cursor: pointer;
}
.paper_box img {
    width: 30px;
    cursor: pointer;
}
</style>