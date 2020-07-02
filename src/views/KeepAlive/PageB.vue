<template>
  <div class="page-b">
    <span>页面B</span>
    <button @click="backA">返回</button>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class PageA extends Vue {
  private backA() {
    this.$router.go(-1);
  }
  beforeRouteLeave(to: any, from: any, next: any) {
    console.log("leave B");
    to.meta.keepAlive = true;
    next();
  }
}
</script>
