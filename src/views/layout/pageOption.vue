<template>
  <el-form ref="options-form" label-width="80px" size="mini">
    <h2>【页面配置】</h2>

    <template>
      <template v-for="(item, idx) in option.base">
        <form-item :item="item" :index="idx" :key="idx"></form-item>
      </template>
    </template>

    <template>
      <h3><i class="el-icon-setting"></i> 样式配置</h3>
      <template v-for="(item, idx) in option.style">
        <form-item :item="item" :index="idx" :key="`${idx}-conf`"></form-item>
      </template>
    </template>

    <template>
      <h3><i class="el-icon-setting"></i> 分享配置</h3>
      <template v-for="(item, idx) in option.weixin">
        <form-item :item="item" :index="idx" :key="`${idx}-share`"></form-item>
      </template>
    </template>
  </el-form>
</template>

<script>
// import formItem from '@/common/formItem.vue'

export default {
  name: "AppPageOption",
  components: {
    // formItem,
    formItem: () => import("@/common/formItem.vue"),
  },
  props: {
    option: {
      type: Object,
    },
  },
};
</script>

<style lang="less">
.el-form {
  padding-bottom: 30px;

  h2 {
    margin: 13px 0;
    font-size: 14px;
  }

  > h3 {
    background-color: #f2f3f4;
    padding: 5px 10px;
    font-size: 14px;
  }

  .el-form-item.small {
    margin-bottom: 5px;

    .font-set {
      display: inline-block;
      width: 28px;
      height: 28px;
      text-align: center;
      cursor: pointer;
      &.checked {
        color: #fff;
        background-color: #333;
      }
    }

    .el-date-editor.el-input {
      width: 186px;
      .el-input__inner {
        padding-left: 30px !important;
      }
    }

    .el-input__inner {
      padding: 0 10px;
    }

    .el-textarea__inner {
      padding: 5px 10px;
    }

    .el-form-item__label {
      padding-right: 0;
    }
  }
}
</style>
