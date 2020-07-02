<template>
  <div class="red-pocket">
    <canvas ref="redPocket" width="600" height="600">
      当前浏览器不支持canvas
    </canvas>
  </div>
</template>

<script lang="ts">
import { Component, Ref, Vue } from "vue-property-decorator";

@Component({})
export default class Home extends Vue {
  @Ref() redPocket!: HTMLCanvasElement;
  private initCanvas() {
    const cxt = this.redPocket.getContext("2d") as CanvasRenderingContext2D;
    cxt.fillStyle = "red";
    cxt.beginPath();
    cxt.moveTo(120, 90);
    cxt.quadraticCurveTo(130, 80, 130, 70);
    cxt.quadraticCurveTo(115, 70, 115, 50);
    cxt.quadraticCurveTo(115, 30, 155, 30);
    cxt.quadraticCurveTo(195, 30, 195, 50);
    cxt.quadraticCurveTo(195, 70, 155, 70);
    cxt.quadraticCurveTo(135, 90, 120, 90);
    cxt.stroke();
  }
  mounted() {
    this.initCanvas();
  }
}
</script>

<style>
.red-pocket {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: green;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
