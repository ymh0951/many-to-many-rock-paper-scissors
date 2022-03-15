<template>
  <div class="main">
      <img src="../assets/logo.png" alt="로고" class="logo_img">
      <h1 class="main_tit">다대다 가위바위보</h1>
      <button class="main_btn" @click="mainBtn">시작하기</button>
      <h4>※ 게임 방법 ※</h4>
      <p class="how_to_play">
          게임 방법은 간단합니다.<br>
          먼저 게임에 참가할 유저를 입력하여 다음으로 넘어갑니다.<br>
          그리고 가위바위보 게임이 시작됩니다.<br>
          컴퓨터를 이기기 위해서 가위, 바위, 보 중 하나를 선택합니다.<br>
          컴퓨터와 같은 수를 내거나 이기면 살아남고<br>
          죽으면 다음 스테이지에 참가할 수 없습니다.<br>
          그렇게 남은 최종 1인이 게임에 승리하게 됩니다.
      </p>
      <h5>Devoloper: 콩팬더</h5>
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
    height: 750px;
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
    margin-bottom: 25px;
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
.how_to_play {
    text-align: left;
    line-height: 35px;
    margin-top: 25px;
    margin-bottom: 50px;
}
</style>