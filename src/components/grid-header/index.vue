<template>
  <div :class="['comp-content', component.active ? 'active' : '']"
       :style="getStyle"
       :comp-id="component.domId">
    <div class="grid-header">
      <h3 class="title" :style="getH3Style">{{ component.base[0].val }}</h3>
      <div class="subtitle">
        <span v-if="component.base[1].val" :style="getPStyle" @click="handleClick">{{ component.base[1].val }}</span>
        <i v-if="component.action.config[0].click" class="fa fa-angle-right" :style="{color: getPColor}" @click="handleClick"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'comp-grid-header',
  props: {
    component: {
      type: Object,
    }
  },
  computed: {
    getStyle() {
      const ret = []
      this.component.style.forEach((item) => {
        const unit = item.unit || ''
        if (item.val) {
          if (item.attr === 'background-image') {
            ret.push(item.attr + ':url(' + item.val + ')')
          } else {
            ret.push(item.attr + ':' + item.val + unit)
          }
        }
      })
      return ret.join(';')
    },
    getH3Style() {
      const ret = []
      this.component.others.config.forEach((item, idx) => {
        const unit = item.unit || ''
        if (item.val && idx < 4) {
          if (Array.isArray(item.attr)) {
            item.attr.forEach((atr, i) => {
              ret.push(atr + ':' + item.val[i])
            })
          } else {
            ret.push(item.attr + ':' + item.val + unit)
          }
        }
      })
      return ret.join(';')
    },
    getPStyle() {
      const ret = []
      this.component.others.config.forEach((item, idx) => {
        const unit = item.unit || ''
        if (item.val && idx > 3) {
          if (Array.isArray(item.attr)) {
            item.attr.forEach((atr, i) => {
              ret.push(atr + ':' + item.val[i])
            })
          } else {
            ret.push(item.attr + ':' + item.val + unit)
          }
        }
      })
      return ret.join(';')
    },
    getPColor() {
      const color = this.component.others.config.find((v, i) => i > 3 && v.attr === 'color')
      return color.val || ''
    }
  },
  methods: {
    handleClick() {
      if (this.$editor) {return}
      const action = this.component.action.config[0]
      if (action.click) {
        const { type, href } = action.click;

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
}
</script>

<style lang="less" scoped>
  .comp-content {
    background-repeat: no-repeat;
  }
  .grid-header {
    position: relative;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;

    * {
      margin: 0;
      padding: 0;
      line-height: 1;
    }

    .title {
      display: block;
      flex: 1;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .subtitle {
      display: flex;
      align-items: center;
      margin-left: 20px;

      i {
        font-size: 18px;
        margin-left: 3px;
      }
    }
  }
</style>
