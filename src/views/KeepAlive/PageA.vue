<template>
  <div class="page-a">
    <span>{{ message }}</span>
    <van-button @click="jumpB">跳转B</van-button>
    <van-button @click="backHome">返回</van-button>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Button as VanButton, Toast } from "vant";
@Component({
  components: {
    VanButton
  }
})
export default class PageA extends Vue {
  private message = "no value";
  private setMessage() {
    Toast.loading();
    setTimeout(() => {
      Toast.clear();
      this.message = "get value";
    }, 2000);
  }
  private jumpB() {
    this.$store.commit("setRefreshA", false);
    console.log(this.$store.state.refreshA);
    this.$router.push({
      name: "B"
    });
  }
  private backHome() {
    this.$store.commit("setRefreshA", true);
    console.log(this.$store.state.refreshA);
    this.$router.go(-1);
  }
  created() {
    this.setMessage();
  }
  activated() {
    if (this.$store.state.refreshA) {
      this.setMessage();
    } else {
      this.$store.commit("setRefreshA", true);
    }
    console.log(this.$store.state.refreshA);
  }
}
</script>
