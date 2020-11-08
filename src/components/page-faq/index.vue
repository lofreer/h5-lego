<template>
  <div :class="['comp-content', component.active ? 'active' : '']"
       :style="getStyle"
       :comp-id="component.domId">
    <div class="page-faq">
      <div class="faq-item" v-for="(item, idx) in component.action.config" :key="idx">
        {{ item.text }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'comp-page-faq',
    props: {
      component: {
        type: Object
      }
    },
    computed: {
      getStyle() {
        const ret = []
        this.component.style.forEach((item) => {
          const unit = item.unit || ''
          if (item.val) {
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
      }
    }
  }
</script>

<style lang="less" scoped>
  .page-faq {
    display: flex;

    .faq-item {

    }
  }
</style>
