<template>
  <div
    :class="['comp-content', component.active ? 'active' : '']"
    :style="getStyle"
    :comp-id="component.domId"
  >
    <ul class="grid-menu">
      <li
        class="grid-menu-item"
        :style="getItemStyle"
        v-for="(item, idx) in items"
        :key="idx"
        @click="handleClick(item)"
      >
        <img v-if="item.val" :src="item.val" />
        <div v-else class="image-placeholder"><i class="fa fa-image"></i></div>
        <span v-if="item.text">{{ item.text }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "comp-grid-menu",
  props: {
    component: {
      type: Object,
    },
  },
  data() {
    return {
      items: this.component.action.config,
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
    getItemStyle() {
      const column = parseInt(this.component.base[0].val);
      const num =
        this.items.length > column ? 100 / column : 100 / this.items.length;
      return "width:" + num + "%;";
    },
  },
  watch: {
    component: {
      handler() {
        this.items = this.component.action.config;
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
    },
  },
};
</script>

<style lang="less" scoped>
.grid-menu {
  position: relative;
  margin: 0;
  list-style: none;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;

  .grid-menu-item {
    display: inline-block;
    margin-top: 15px;
    vertical-align: top;
    text-align: center;
    font-size: 0;
    text-decoration: none;
    list-style-type: none;

    > .image-placeholder {
      margin: 0 auto;
      width: 40px;
      height: 40px;
      line-height: 40px;
      border: 1px solid #e8e8e8;
      text-align: center;

      > .fa {
        color: #83c0ff;
        font-size: 20px;
        vertical-align: middle;
      }
    }

    > img {
      display: block;
      margin: 0 auto;
      width: 40px;
      height: 40px;
    }
    > span {
      display: block;
      margin: 5px auto 0 auto;
      font-size: 12px;
      color: #0a1b2b;
    }
  }
}
</style>
