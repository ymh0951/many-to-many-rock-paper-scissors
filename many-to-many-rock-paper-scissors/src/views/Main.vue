<template>
  <div class="main">
      <img src="../assets/logo.png" alt="로고" class="logo_img">
      <h1 class="main_tit">다대다 가위바위보</h1>
      <button class="main_btn" @click="mainBtn">시작하기</button>
  </div>
</template>

<script>
export default {
    methods: {
        mainBtn() {
            this.$router.push('adduser');
        }
    }
}
</script>

<style scoped>
.main {
    width: 20%;
    height: 70vh;
    margin: 0 auto;
    margin-top: 7vh;
    padding: 50px;
    border-radius: 25px;
    box-shadow: 0 5px 10px gray;
    text-align: center;
    background-color: white;
}
.main_tit {
    font-size: 1.8em;
    margin-top: 35px;
}
.main_btn {
    width: 80%;
    height: 50px;
    margin-top: 50px;
    border: 2px solid #ffee00;
    border-radius: 20px;
    font-size: 1.2rem;
    font-weight: 600;
    cursor: pointer;
    transition-duration: 0.5s;
    background-color: white;
}
.main_btn:hover {
    font-size: 1.4rem;
    box-shadow: 0 0 20px #cec000;
    background-color: #ffee00;
}
</style>