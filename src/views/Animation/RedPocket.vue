<template>
  <div class="red-pocket">
    <canvas ref="redPocket" width="600" height="600"
      >当前浏览器不支持canvas</canvas
    >
  </div>
</template>

<script lang="ts">
import { Component, Ref, Vue } from "vue-property-decorator";

@Component({})
export default class Home extends Vue {
  @Ref() redPocket!: HTMLCanvasElement;
  private initCanvas() {
    const cxt = this.redPocket.getContext("2d") as CanvasRenderingContext2D;
    return cxt;
  }
  private drawChat(cxt: CanvasRenderingContext2D) {
    cxt.fillStyle = "red";
    cxt.beginPath();
    cxt.moveTo(120, 90);
    cxt.quadraticCurveTo(130, 80, 130, 70);
    cxt.quadraticCurveTo(115, 70, 115, 50);
    cxt.quadraticCurveTo(115, 30, 155, 30);
    cxt.quadraticCurveTo(195, 30, 195, 50);
    cxt.quadraticCurveTo(195, 70, 155, 70);
    cxt.quadraticCurveTo(135, 90, 120, 90);
    cxt.fillStyle = "#da45ed";
    cxt.fill();
    cxt.stroke();
  }
  private drawPentagram(cxt: CanvasRenderingContext2D, rotateAngle: number) {
    //设置角的数量
    const angleNum = 5;
    //设置每个角大小
    const angle = 360 / angleNum;
    //设置内外圆半径
    const outCircleR = 200;
    const innerCircleR = 80;
    //设置中心点
    const x = 200;
    const y = 200;
    //计算每个坐标点并开始绘制
    cxt.beginPath();
    for (let i = 0; i < angleNum; i++) {
      cxt.lineTo(
        Math.cos(((18 - rotateAngle + i * angle) / 180) * Math.PI) *
          outCircleR +
          x,
        -Math.sin(((18 - rotateAngle + i * angle) / 180) * Math.PI) *
          outCircleR +
          y
      );
      cxt.lineTo(
        Math.cos(((54 - rotateAngle + i * angle) / 180) * Math.PI) *
          innerCircleR +
          x,
        -Math.sin(((54 - rotateAngle + i * angle) / 180) * Math.PI) *
          innerCircleR +
          y
      );
    }
    cxt.closePath();
    cxt.strokeStyle = "#ff0000";
    cxt.fillStyle = "#0000ff";
    cxt.fill();
    cxt.stroke();
  }
  private animatePentagram(cxt: CanvasRenderingContext2D, rotateAngle: number) {
    cxt.clearRect(0, 0, this.redPocket.width, this.redPocket.height);
    this.drawPentagram(cxt, rotateAngle);
  }
  mounted() {
    // const cxt = this.initCanvas();
    // let rotateAngle = 20;
    // setInterval(() => {
    //   rotateAngle += 1;
    //   this.animatePentagram(cxt, rotateAngle);
    // }, 17);
    // console.log(this.redPocket.width);
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
