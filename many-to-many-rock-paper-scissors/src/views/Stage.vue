<template>
  <div class="stage">
      <button @click="test">테스트</button>
      <p v-if="testNum">테스트</p>
      <button @click="nextStage">Go</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            stageNum: this.$store.state.stageCount,
            testNum: true
        }
    },
    methods: {
        nextStage() {
            this.stageNum ++;
            this.$router.push(`stage${this.stageNum}`);
            this.testNum = true;
        },
        test() {
            if(this.testNum == true) {
                this.testNum = false;
            }
        }
    }
}
</script>

<style>

</style>