<template>
  <div class="computer_box">
      <h1>컴퓨터</h1>
      <img class="computer" src="../assets/image/question.png" alt="컴퓨터">
      <div class="computer_btn">
        <button @click="computerBtn">결과 보기</button>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      computer: '' 
    }
  },
  created () {
    const randomNum = Math.floor(Math.random() * 3);

    this.computer = this.$store.state.question[randomNum];
    this.$store.state.computer = this.computer;
  },
  methods: {
    computerBtn() {
      const computerData = this.computer;
      const computerImg = document.querySelector('.computer');

      if(computerData == 'paper') {
        computerImg.setAttribute('src', '/img/paper.783650f6.png');
      } else if (computerData == 'rock') {
        computerImg.setAttribute('src', '/img/rock.04c21188.png');
      } else {
        computerImg.setAttribute('src', '/img/scissors.d55df7f9.png');
      }
        this.$store.dispatch('resultBtn');
    }
  }
}
</script>

<style scoped>
.computer {
  margin: 50px 0;
}
</style>