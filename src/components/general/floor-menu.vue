<template>
  <div
    :class="['comp-content', component.active ? 'active' : '']"
    :comp-id="`wrap-${component.domId}`"
  >
    <div class="floor-menu" :comp-id="component.domId" :style="{ backgroundColor: backgroundColor }">
      <div class="floor-menu-list">
        <div class="floor-menu-inner">
          <a
            class="floor-item"
            href="javascript:;"
            :style="getItemStyle(idx)"
            v-for="(item, idx) in items"
            :key="idx"
            @click="handleGo(item)"
            >{{ item.text }}</a
          >
        </div>
      </div>
      <div class="floor-menu-down">
        <svg
          width="40px"
          height="40px"
          viewBox="0 0 40 40"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <polygon
              :fill="fillColor"
              fill-rule="nonzero"
              points="28 15.1144797 28.7045635 15.8241207 20.4099341 24.0594021 12 15.709641 12.7045635 15 20.4099341 22.6502388"
            ></polygon>
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "comp-floor-menu",
  props: {
    component: {
      type: Object,
    },
  },
  data() {
    return {
      scroll: '',
      tabKey: 0,
      items: this.component.action.config,
      backgroundColor: this.component.style[0].val,
      fillColor: this.component.style[2].val,
    };
  },
  watch: {
    component: {
      handler() {
        this.items = this.component.action.config;
        this.backgroundColor = this.component.style[0].val;
        this.fillColor = this.component.style[2].val;
      },
      deep: true,
    },
    scroll: {
      handler() {
        this.loadSroll()
      }
    }
  },
  mounted() {
   window.addEventListener('scroll', this.dataScroll);
  },
  methods: {
    getItemStyle(idx) {
      const ret = [];
      if (idx === this.tabKey || (this.items[idx].click && this.items[idx].click.href === this.tabKey) ) {
      // if (idx === 0) {
        ret.push("background-color:" + this.component.style[1].val);
        ret.push("color:" + this.component.style[3].val);
      } else {
        ret.push("background-color:" + this.component.style[0].val);
        ret.push("color:" + this.component.style[2].val);
      }
      return ret.join(";");
    },
    // 导航跳转
    handleGo(config) {
      if (config.click && config.click.href) {
        this.tabKey = config.click.href
        const dom = document.querySelector(`[comp-id="${config.click.href}"]`);
        if (dom) {
          // Chrome
          document.body.scrollTop = dom.offsetTop;
          // // Firefox
          document.documentElement.scrollTop = dom.offsetTop;
          // // Safari
          window.pageYOffset = dom.offsetTop;
        }
      }
    },
    dataScroll() {
      this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
    },
    loadSroll() {
      const ids = this.items.filter(v => v.click).map(v => v.click.href)
      const wrap = document.querySelector(`[comp-id="wrap-${this.component.domId}"]`)
      const node = document.querySelector(`[comp-id="${this.component.domId}"]`)
      const sections = [...document.querySelectorAll(ids.map(v => `[comp-id="${v}"]`).join(','))].reverse()
      sections.some((item, index) => {
        if (this.scroll >= item.offsetTop - 100) {
          this.tabKey = item.getAttribute('comp-id')
          return true
        }
      })
      if (this.scroll >= wrap.offsetTop) {
        node.classList.add('top')
      } else {
        node.classList.remove('top')
      }
    }
  },
};
</script>

<style lang="less" scoped>
.comp-content {
  height: 40px;
}
.floor-menu {
  position: relative;
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;

  &.top {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 10;
    margin-top: 0;
  }

  .floor-menu-list {
    width: 335px;
    height: 40px;
    overflow-y: hidden;
    overflow-x: auto;

    .floor-menu-inner {
      position: relative;
      display: flex;
      padding: 0 8px;
      height: 40px;
      white-space: nowrap;

      .floor-item {
        display: block;
        line-height: 40px;
        padding: 0 16px;
        font-size: 14px;
        text-decoration: none;
      }
    }
  }

  .floor-menu-down {
    width: 40px;
    height: 40px;
    text-align: center;
    box-shadow: -5px 0 5px -5px #333;
  }
}
</style>
