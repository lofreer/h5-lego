<template>
  <div
    :class="['comp-content', component.active ? 'active' : '']"
    :comp-id="`wrap-${component.domId}`"
  >
    <div :style="getStyle('margin')">
      <div class="floor-menu" :comp-id="component.domId" :style="{backgroundColor: backgroundColor, borderRadius: borderRadius}">
        <div class="floor-menu-list" :style="{borderRadius: borderRadius}">
          <div class="floor-menu-inner">
            <a
              class="floor-item"
              href="javascript:;"
              :style="getItemStyle(idx)"
              v-for="(item, idx) in items"
              :key="idx"
              @click="handleClick(item, idx)"
              >{{ item.text }}</a
            >
          </div>
        </div>
        <div class="floor-menu-down">
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 40 40"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            @click="menuShow = !menuShow"
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
        <div class="menu-wrap" v-show="menuShow" :style="{borderRadius: borderRadius}">
          <div class="wrap-bg" :style="{backgroundColor: backgroundColor}"></div>
          <div class="menu-item" :style="{color: idx === tabIndex ? fillHoverColor : fillColor}" v-for="(item, idx) in items" :key="idx" @click="handleClick(item, idx)">{{item.text}}</div>
        </div>
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
      scroll: "",
      tabIndex: 0,
      menuShow: false,
      items: this.component.action.config
    };
  },
  computed: {
    backgroundColor() {
      const value = this.component.style.filter(v => v.attr === 'background-color')[0]
      if (value) {
        return value.val
      }
      return ''
    },
    borderRadius() {
      const value = this.component.style.filter(v => v.attr === 'border-radius')[0]
      if (value) {
        return value.val + (value.unit || '')
      }
      return ''
    },
    fillColor() {
      const value = this.component.style.filter(v => v.attr === 'color')[0]
      if (value) {
        return value.val
      }
      return ''
    },
    fillHoverColor() {
      const value = this.component.style.filter(v => v.attr === 'color:hover')[0]
      if (value) {
        return value.val
      }
      return ''
    }
  },
  watch: {
    component: {
      handler() {
        this.items = this.component.action.config;
      },
      deep: true,
    },
    scroll: {
      handler() {
        this.loadSroll();
      },
    },
  },
  mounted() {
    window.addEventListener("scroll", this.dataScroll);
  },
  methods: {
    getStyle(attr) {
      const ret = [];
      this.component.style.forEach((item) => {
        const unit = item.unit || "";
        if (
          item.attr.includes(attr)
        ) {
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
        }
      });
      return ret.join(";");
    },
    getItemStyle(idx) {
      const ret = [];
      if (idx === this.tabIndex) {
        ret.push("background-color:" + this.component.style.filter(v => v.attr === 'background-color:hover')[0].val);
        ret.push("color:" + this.component.style.filter(v => v.attr === 'color:hover')[0].val);
      } else {
        ret.push("background-color:" + this.component.style.filter(v => v.attr === 'background-color')[0].val);
        ret.push("color:" + this.component.style.filter(v => v.attr === 'color')[0].val);
      }
      return ret.join(";");
    },
    // 导航跳转
    handleClick(config, idx) {
      if (this.$editor) { return }
      this.tabIndex = idx;
      this.menuShow = false;
      if (config.click && config.click.href && config.click.type === 'page') {
        const dom = document.querySelector(`[comp-id="${config.click.href}"]`);
        const wrap = document.querySelector(
          `[comp-id="wrap-${this.component.domId}"]`
        );
        if (dom) {
          // Chrome
          document.body.scrollTop = dom.offsetTop - wrap.offsetHeight;
          // // Firefox
          document.documentElement.scrollTop =
            dom.offsetTop - wrap.offsetHeight;
          // // Safari
          window.pageYOffset = dom.offsetTop - wrap.offsetHeight;
        }
      }
      this.wrapScroll()
    },
    dataScroll() {
      this.scroll =
        document.documentElement.scrollTop || document.body.scrollTop;
    },
    loadSroll() {
      const doms = this.items.map((item, i) => {
        return {
          index: i,
          dom: item.click ? document.querySelector(`[comp-id="${item.click.href}"]`) : ''
        }
      }).reverse();
      const ids = this.items.filter((v) => v.click).map((v) => v.click.href);
      const wrap = document.querySelector(
        `[comp-id="wrap-${this.component.domId}"]`
      );
      const node = document.querySelector(
        `[comp-id="${this.component.domId}"]`
      );
      doms.filter(v => v.dom).some((item, index) => {
        if (this.scroll >= item.dom.offsetTop - 100) {
          this.tabIndex = item.index;
          return true;
        }
      });
      if (this.scroll >= wrap.offsetTop) {
        node.classList.add("top");
      } else {
        node.classList.remove("top");
      }
      this.wrapScroll()
    },
    wrapScroll() {
      const wrap = document.querySelector(`[comp-id="wrap-${this.component.domId}"] .floor-menu-list`);
      const wrapInner = document.querySelector(`[comp-id="wrap-${this.component.domId}"] .floor-menu-inner`);
      const scrollWidth = wrap.scrollWidth
      const wrapWidth = wrap.offsetWidth
      const itemWidth = scrollWidth / this.items.length
      wrap.scrollLeft = (this.tabIndex + 1) * itemWidth - wrapWidth / 2 - itemWidth / 2 - 8
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
    border-radius: 0 !important;
    margin-top: 0;

    .menu-wrap {
      border-radius: 0 !important;
    }
  }

  .floor-menu-list {
    flex: 1;
    height: 40px;
    margin-right: 10px;
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
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    text-align: center;
    box-shadow: -5px 0 5px -5px #333;
  }

  .menu-wrap {
    position: absolute;
    z-index: 9;
    left: 0;
    right: 0;
    top: 100%;
    display: flex;
    flex-wrap: wrap;
    color: #fff;
    padding: 0 10px;
    overflow: hidden;

    .menu-item {
      width: 25%;
      text-align: center;
      font-size: 12px;
    }

    .wrap-bg {
      position: absolute;
      z-index: -1;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      opacity: 0.95;
    }
  }
}
</style>
