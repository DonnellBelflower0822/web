<template>
  <div class="home page">
    <img alt="Vue logo" src="../assets/logo.png" />
    <br />
    <router-link to="/about">去关于页面</router-link>
    <div class="border"></div>
    <div class="border-1"></div>

    <div class="box">
      <div class="item">item1</div>
      <div class="item">item2</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
  components: {},
})
</script>
<style lang="less" scoped>
.box {
  width: 500px;
  display: flex;
  // flex-direction: row-reverse;
  // justify-content: center;
  // justify-content: flex-start;
  // justify-content: flex-end;
  // justify-content: space-between;
  // justify-content: space-around;

  // align-items: center;
  // align-items: flex-start;
  // align-items: flex-end;
  // align-items: stretch;
  // align-items: baseline;

  // align-content:;

  .item {
    // width: 100px;
    // flex-grow: 1;
    // width: 509px;
    width: 300px;
    flex-shrink: 1;
    height: 100px;
    background: red;
    margin-right: 10px;
    margin-bottom: 10px;
    &:last-child {
      height: 200px;
      width: 300px;
      flex: 1 0 200px;
      // flex-grow: 0;
      flex-shrink: 0;
    }
  }
}
.home {
  img {
    width: 100px;
  }

  @media (-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2) {
    img {
      width: 200px;
    }
  }

  .border,
  .border-1 {
    height: 100px;
    width: 100px;
  }
  .border {
    border-bottom: 1px solid black;
  }
}

.border-1 {
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 1px;
    background: black;
    transform-origin: 50% 0;
  }
}

@media only screen and(-webkit-min-device-pixel-ratio:2) {
  .border-1 {
    &::after {
      transform: scaleY(0.5);
    }
  }
}
@media only screen and(-webkit-min-device-pixel-ratio:3) {
  .border-1 {
    &::after {
      transform: scaleY(0.333);
    }
  }
}
</style>
