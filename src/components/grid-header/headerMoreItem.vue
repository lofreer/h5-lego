<template>
  <div>
    <template v-if="items && items.length">
      <div class="form-list-panel" v-for="(item, idx) in items" :key="idx">
        <template v-if="item.click">
          <el-form-item class="small" label="跳转到：">
            <span style="word-break: break-all;">{{item.click.href}}</span>
          </el-form-item>
        </template>
        <el-form-item class="small" label="点击配置：">
          <el-button icon="el-icon-edit" round @click="showClick(item, idx)">配置跳转</el-button>
        </el-form-item>
      </div>
    </template>
  </div>
</template>

<script>
import defaultConf from './config.js'

export default {
  data() {
    return {
      items: this.mores
    }
  },
  props: {
    mores: {
      type: Array
    }
  },
  watch: {
    mores: {
      handler(val) {
        this.items = val
      },
      deep: true
    }
  },
  methods: {
    showClick(banner, idx) {
      this.$bus.$emit('click:show', idx, ['outside'])
    },
  }
}
</script>

<style lang="less">

</style>
