<template>
  <div class="main">
      <img src="../assets/logo.png" alt="로고" class="logo_img">
      <h1 class="main_tit">다대다 가위바위보</h1>
      <button class="main_btn">시작하기</button>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.main {
    width: 20%;
    height: 50vh;
    margin: 0 auto;
    padding: 50px;
    border-radius: 25px;
    box-shadow: 0 5px 10px gray;
    background-color: white;
}
.main_tit {
    margin-top: 35px;
}
.main_btn {
    width: 80%;
    height: 50px;
    margin-top: 100px;
    border: 2px solid #ffee00;;
    border-radius: 20px;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    transition-duration: 0.5s;
    background-color: white;
}
.main_btn:hover {
    font-size: 20px;
    box-shadow: 0 0 20px #cec000;
    background-color: #ffee00;
}
</style>