<template>
  <div class="bottom-menu" :comp-id="component.domId" :style="getStyle">
    <div
      class="menu-item"
      :style="{ width: 750 / menus.length + 'px' }"
      v-for="(item, $index) in menus"
      :key="$index"
      @click="handleClick(item)"
    >
      <img v-if="item.val" :src="item.val" />
      <div v-else class="image-placeholder"><i class="fa fa-adjust"></i></div>
      <span>{{item.text}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "comp-bottom-menu",
  props: {
    component: {
      type: Object,
    },
  },
  data() {
    return {
      menus: this.component.action.config,
    };
  },
  computed: {
    getStyle() {
      const ret = [];
      this.component.style.forEach((item) => {
        if (item.val) {
          const unit = item.unit || "";
          ret.push(item.attr + ":" + item.val + unit);
        }
      });
      return ret.join(";");
    },
  },
  watch: {
    component: {
      handler() {
        this.menus = this.component.action.config;
      },
      deep: true,
    },
  },
  methods: {
    handleClick(item) {
      if (this.$editor) { return }
      if (item.click) {
        const { type, href } = item.click

        if (type === 'outside') {
          location.href = href
        } else if (type === 'tel') {

        } else if (type === 'inside') {

        } else if (type === 'mail') {

        }
      }
    }
  }
};
</script>

<style lang="less" scoped>
.bottom-menu {
  display: flex;
  -webkit-box-pack: justify;
  -webkit-box-align: center;
  justify-content: space-between;
  align-content: center;

  .menu-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    height: 100%;
    padding: 5px 0;
    box-sizing: border-box;

    > img {
      width: 20px;
      height: 20px;
      object-fit: cover;
    }
    > span {
      font-size: 12px;
      margin-top: 3px;
    }

    > .image-placeholder {
      text-align: center;
      border-left: 1px solid #e8e8e8;
      display: flex;
      flex-direction: column;
      justify-content: center;

      &:first-child {
        border-left: 0;
      }

      > .fa {
        color: #83c0ff;
        font-size: 22px;
        vertical-align: middle;
      }
    }
  }
}
</style>

