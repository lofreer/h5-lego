<template>
  <div class="app-wrapper">
    <app-header></app-header>
    <app-body></app-body>
  </div>
</template>

<script>
import appHeader from "@/views/app/header.vue";
import appBody from "@/views/app/main.vue";

export default {
  name: "app",
  components: {
    appHeader,
    appBody,
  },
};
</script>

<style lang="less">
.app-wrapper {
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
  height: 100%;
  min-width: 1000px;

  .app-body {
    display: flex;
    position: absolute;
    top: 60px;
    bottom: 0;
    width: 100%;
  }
}
</style>
