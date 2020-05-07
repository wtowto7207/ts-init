<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <van-button color="#ff0000" size="small" round disabled
      >vant 按钮</van-button
    >
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { Component, Vue } from "vue-property-decorator";
import { Button as VanButton } from "vant";

@Component({
  components: {
    HelloWorld,
    VanButton
  }
})
export default class Home extends Vue {
  private msg = "";
}
</script>
