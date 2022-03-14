<template>
  <div class="stage">
      <div class="stage_tit">
        <h2>{{ stageNum }} Stage</h2>
      </div>
      <div class="stage_in_box">
        <in-game-user-list></in-game-user-list>
        <in-game-play-user></in-game-play-user>
        <div class="stage_computer_box">
            <in-game-computer></in-game-computer>
        </div>
      </div>
  </div>
</template>

<script>
import inGameUserList from '../components/inGameUserList.vue';
import inGamePlayUser from '../components/inGamePlayUser.vue';
import inGameComputer from '../components/inGameComputer.vue';

export default {
    components: {
        inGameUserList,
        inGamePlayUser,
        inGameComputer
    },
    data() {
        return {
            stageNum: this.$store.state.stageCount,
        }
    },
    methods: {
        nextStage() {
            this.stageNum ++;
            this.$router.push(`stage${this.stageNum}`);
        },
    }
}
</script>

<style scoped>
.stage_in_box {
    display: flex;
}
.stage_computer_box {
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