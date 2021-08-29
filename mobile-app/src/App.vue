<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transitionName">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  position: relative;
}
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
body {
  box-sizing: border-box;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}
.page {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all 0.75s ease;
}

.slide-left-enter,
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.slide-left-leave-to,
.slide-right-enter {
  opacity: 0;
  transform: translateX(-100%);
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: 1.5s;
}
// .slide-left-enter,
// .slide-right-enter {
//   transition-delay: 0.2s;
// }
// .slide-left-enter,
// .slide-right-leave-active {
//   opacity: 0;
// }
// .slide-left-leave-active,
// .slide-right-enter {
//   opacity: 0;
// }
// .slide-left-enter,
// .slide-right-leave-active {
//   transform: translate(-100%, 0);
// }
// .slide-left-leave-active,
// .slide-right-enter {
//   transform: translate(100%, 0);
// }
</style>
