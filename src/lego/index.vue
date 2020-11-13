<template>
  <div class="lego-wrapper">
    <lego-header></lego-header>
    <lego-body></lego-body>
  </div>
</template>

<script>
import legoHeader from "./layout/header.vue";
import legoBody from "./layout/main.vue";

export default {
  name: "lego",
  components: {
    legoHeader,
    legoBody,
  },
};
</script>

<style lang="less">
.lego-wrapper {
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
  height: 100%;
  min-width: 1000px;

  .lego-body {
    display: flex;
    position: absolute;
    top: 60px;
    bottom: 0;
    width: 100%;
  }
}
</style>
