<template>
  <div
    :class="['comp-content', component.active ? 'active' : '']"
    :style="getStyle"
    :comp-id="component.domId"
  >
  </div>
</template>

<script>
export default {
  name: "comp-empty",
  props: {
    component: {
      type: Object,
    },
  },
  computed: {
    getStyle() {
      const ret = [];
      this.component.style.forEach((item) => {
        const unit = item.unit || "";
        if (item.val) {
          if (Array.isArray(item.attr)) {
            item.attr.forEach((atr, i) => {
              ret.push(atr + ":" + item.val[i]);
            });
          } else if (item.attr === "background-image") {
            ret.push(item.attr + ":url(" + item.val + ")");
          } else {
            ret.push(item.attr + ":" + item.val + unit);
          }
        }
      });
      return ret.join(";");
    },
  },
};
</script>

<style lang="less" scoped>
.comp-content {
  background-repeat: no-repeat;
}
</style>
