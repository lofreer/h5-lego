<template>
  <div
    :class="['comp-content', component.active ? 'active' : '']"
    :style="getStyle"
    :comp-id="component.domId"
  >
    <div
      class="swiper-container"
      :id="component.domId"
      :style="{ width: width, height: height }"
    >
      <div class="swiper-wrapper">
        <div v-for="(banner, idx) in banners" :key="idx" class="swiper-slide" @click="handleClick(banner)">
          <img v-if="banner.val" :src="banner.val" />
          <div v-else class="image-placeholder">
            <i class="fa fa-caret-square-o-right"></i>
          </div>
        </div>
      </div>
      <div v-show="pagination" class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";

export default {
  name: "comp-swiper-banner",
  props: {
    component: {
      type: Object,
    },
  },
  data() {
    return {
      swiper: null,
      banners: this.component.action.config,
      pagination: this.component.base.find((v) => v.attr === "pagination").val,
      height: this.getHeight(),
      width: this.getWidth(),
    };
  },
  computed: {
    getStyle() {
      const ret = [];
      this.component.style.forEach((item) => {
        const unit = item.unit || "";
        if (item.attr !== 'height') {
          item.val && ret.push(item.attr + ":" + item.val + unit);
        }
      });
      return ret.join(";");
    },
  },
  watch: {
    component: {
      handler() {
        this.banners = this.component.action.config;
        this.pagination = this.component.base.find(
          (v) => v.attr === "pagination"
        ).val;
        this.height = this.getHeight();
        this.width = this.getWidth();
        setTimeout(() => {
          this.swiper.update();
        }, 0);
      },
      deep: true,
    },
  },
  methods: {
    getMaxHeight() {
      let h = 0;
      if (this.component.action.config && this.component.action.config.length) {
        this.component.action.config.forEach((item) => {
          if (item.height && item.height > h) {
            h = item.height;
          }
        });
      }
      return h > 0 ? h / 2 + "px" : "112px";
    },
    getHeight() {
      const height = this.component.style.filter(v => v.attr === 'height')[0].val
      const offsetWidth = document.body.offsetWidth
      return (this.$editor ? height : height / 375 * offsetWidth) + 'px'
    },
    getWidth() {
      return '100%'
      // return (
      //   (750 - this.component.style[2].val - this.component.style[4].val) / 2 +
      //   "px"
      // );
    },
    handleClick(item) {
      if (this.$editor) { return }
      if (item.click) {
        const { type, href } = item.click

        if (type === 'outside') {
          location.href = href
        } else if (type === 'code') {
          Function(href)()
        } else if (type === 'tel') {

        } else if (type === 'inside') {

        } else if (type === 'mail') {

        }
      }
    }
  },
  mounted() {
    const autoplay = this.component.base.find((v) => v.attr === "autoplay").val;
    this.swiper = new Swiper("#" + this.component.domId, {
      autoplay: autoplay || false,
      pagination: {
        el: `#${this.component.domId} .swiper-pagination`,
      },
    });
  },
};
</script>

<style lang="less" scoped>
.comp-content {
  overflow: hidden;
}
.swiper-container {
  width: 100%;

  .swiper-slide {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

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
</style>
