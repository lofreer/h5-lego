<template>
  <div class="home" :style="getPageStyle">
    <template v-for="(comp, idx) in compList">
      <component
        :is="comps[comp.type]"
        :component="comp"
        :key="idx"
      ></component>
    </template>
  </div>
</template>

<script>
import comps from "@/components";
import { pageOne } from "@/api/page"

export default {
  name: "page",
  data() {
    return {
      comps: { ...comps },
      menuConfig: {},
      pageConfig: {},
      compList: []
    };
  },
  computed: {
    getPageStyle() {
      const ret = [];
      this.pageConfig.style && this.pageConfig.style.forEach((item) => {
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
  created() {
    this.fetchPageConfig()
  },
  methods: {
    fetchPageConfig() {
      if (this.$route.params.pageId) {
        pageOne({id: this.$route.params.pageId}).then(res => {
          const data = JSON.parse(res.config)
          this.menuConfig = data.menu || {}
          this.pageConfig = data.page || {}
          this.compList = data.component.filter(v => v.type !== 'placeholder')
        })
      }
    }
  }
};
</script>

<style lang="less" scoped>

</style>
