<template>
  <div class="home">
    <van-button @click="jump">跳转(canvas)</van-button>
    <van-button @click="jumpA">跳转页面A（keepAlive）</van-button>
    <van-button @click="jumpTensor">tensorflow.js</van-button>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from "vue-property-decorator";
import { Button as VanButton } from "vant";

@Component({
  components: {
    VanButton
  }
})
export default class Home extends Vue {
  private msg = "";
  private jump() {
    this.$router.push({
      name: "RedPocket"
    });
  }
  private jumpA() {
    this.$router.push({
      name: "A"
    });
  }
  private jumpTensor() {
    this.$router.push({
      name: "tensorflowIndex"
    });
  }
  beforeRouteLeave(to: any, from: any, next: any) {
    console.log(to.meta.keepAlive);
    to.meta.keepAlive = false;
    next();
  }
}
</script>
