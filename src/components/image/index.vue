<template>
  <div
    :class="['comp-content', component.active ? 'active' : '']"
    :style="getStyle"
    :comp-id="component.domId"
  >
    <div class="image-box">
      <img v-if="imgUrl" :src="imgUrl" :usemap="`#map-${component.domId}`" />
      <div v-else class="image-placeholder"><i class="fa fa-image"></i></div>

      <map :name="`map-${component.domId}`" v-if="component.action.config.length">
        <area shape="rect" v-for="(item, idx) in component.action.config" :key="idx" :coords="`${item.x},${item.y},${item.x+item.w},${item.x+item.h}`" @click="handleClick(item)" />
      </map>
    </div>
  </div>
</template>

<script>
export default {
  name: "comp-image",
  props: {
    component: {
      type: Object,
    },
  },
  data() {
    return {
      imgUrl: this.component.style[1].val,
      action: this.component.action.config[0]
    };
  },
  computed: {
    getStyle() {
      const ret = [];
      this.component.style.forEach((item) => {
        const unit = item.unit || "";
        item.val && ret.push(item.attr + ":" + item.val + unit);
      });
      return ret.join(";");
    },
  },
  watch: {
    component: {
      handler() {
        this.imgUrl = this.component.style[1].val
      },
      deep: true,
    },
  },
  methods: {
    handleClick(item) {
      if (this.$editor) {return}
      if (item.click) {
        const { type, href } = item.click;

        if (type === "outside") {
          location.href = href;
        } else if (type === "code") {
          Function(href)();
        } else if (type === "tel") {
        } else if (type === "inside") {
        } else if (type === "mail") {
        }
      }
    }
  }
};
</script>

<style lang="less" scoped>
.comp-content {
  overflow: hidden;
}
.image-box {
  position: relative;
  overflow: hidden;

  .image-placeholder {
    width: 100%;
    height: 100px;
    line-height: 100px;
    text-align: center;

    > .fa {
      color: #83c0ff;
      font-size: 40px;
    }
  }

  img {
    display: block;
    width: 100%;
    height: auto;
    margin: 0;
    border: 0;
    -webkit-user-drag: none;
  }
}
</style>
