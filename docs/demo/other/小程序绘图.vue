<template>
  <view class="page">
    <canvas id="posterCanvas" canvas-id="posterCanvas" class="myCanvas"></canvas>
  </view>
</template>

<script>
  export default {
    mounted() {
      const ctx = wx.createCanvasContext('posterCanvas');
      ctx.clearRect(0, 0, 294, 248); //清空画板
      ctx.setFillStyle('#ffffff');
      ctx.fillRect(0, 0, 294, 248);
      ctx.drawImage('../static/images/complaint/complaint_bg@2x.png', 0, 0, 294, 164);
      ctx.drawImage('../static/images/components/comment/default_user.png', 231, 174, 48, 48);

      ctx.setTextAlign('left');
      ctx.setFillStyle('#000000'); //文字颜色：默认黑色
      ctx.font = `normal bold 15px sans-serif`;
      ctx.fillText('这是一场惊天动地的直播秀，敬请期待它的到来', 15, 187, 200); //绘制文本
      ctx.font = `normal bold 11px sans-serif`;
      ctx.setFillStyle('#999999'); //文字颜色：默认黑色
      ctx.fillText('扫码了解', 233, 235, 48); //绘制文本
      ctx.draw();
    },
  };
</script>

<style lang="scss" scoped>
  .page {
    background: #999;
    width: 100vw;
    height: 100vh;
  }
  .myCanvas {
    width: 294px;
    height: 248px;
    position: fixed;
    top: 50vh;
    left: 50vw;
    margin-top: -124px;
    margin-left: -147px;
  }
</style>
