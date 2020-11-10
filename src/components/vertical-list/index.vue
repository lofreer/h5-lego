<template>
  <div
    :class="['comp-content', component.active ? 'active' : '']"
    :style="getStyle"
    :comp-id="component.domId"
  >
    <div class="page-list">
      <div
        v-for="(item, idx) in list"
        class="page-list-item"
        :key="idx"
        :style="getItemStyle('vertical-list-item')"
        @click="handleClick(item)"
      >
        <div
          class="page-list-item__hd"
          :style="getItemStyle('vertical-list-logo_')"
        >
          <div
            class="page-list-item__img"
            :style="{ backgroundImage: 'url(' + item.val + ')' }"
          ></div>
        </div>
        <div class="page-list-item__bd">
          <div
            class="page-list-item__title"
            :style="getItemStyle('vertical-list-title_')"
          >
            {{ item.title }}
          </div>
          <p
            class="page-list-item__desc"
            :style="getItemStyle('vertical-list-desc_')"
          >
            {{ item.desc }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "comp-vertical-list",
  props: {
    component: {
      type: Object,
    },
  },
  data() {
    return {
      list: this.component.action.config,
    };
  },
  computed: {
    getStyle() {
      const ret = [];
      this.component.style.forEach((item) => {
        const unit = item.unit || "";
        if (item.val) {
          if (item.attr === "background-image") {
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
    this.fetchData()
  },
  methods: {
    getItemStyle(key) {
      const ret = [];
      this.component.others.config.forEach((item) => {
        const isItem = item.attr.indexOf(key);
        const idx = item.attr.indexOf("_");
        if (isItem === 0) {
          const unit = item.unit || "";
          item.val &&
            ret.push(
              item.attr.substring(idx + 1, item.attr.length) +
                ":" +
                item.val +
                unit
            );
        }
      });
      return ret.join(";");
    },
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
    fetchData() {
      if (this.$editor) {return}
      try {
        if (this.component.data) {
          const config = {}
          this.component.data.forEach(v => {
            config[v.attr] = v.val
          })
          const { url, method, headers, params, path, image, title, description, link } = config

          if (!url || !method || !path || !image || !title || !description) { return }
          const query = { method, url }
          if (headers) {
            query.headers = JSON.parse(headers)
          }
          if (params) {
            query[method.toLowerCase() === 'post' ? 'data' : 'params'] = JSON.parse(params)
          }
          axios(query).then(response => {
            const res = response.data
            const paths = path.split('.')
            let data = null
            for (let [i, key] of paths.entries()) {
              data = data ? data[key] : res[key]
            }
            if (!data) { return }
            const list = []
            const regex = /{{(.*?)}}/
            data.forEach(item => {
              const value = {
                val: image.replace(regex, item[image.match(regex)[1]]),
                title: title.replace(regex, item[title.match(regex)[1]]) || '暂无标题',
                desc: description.replace(regex, item[description.match(regex)[1]]) || '暂无描述',
              }
              if (link) {
                value.click = {
                  href: link.replace(regex, item[link.match(regex)[1]]) || '',
                  type: 'outside'
                }
              }
              list.push(value)
            })
            this.list = list
          })
        }
      } catch (err) {
        console.log(err)
      }
    }
  },
};
</script>

<style lang="less" scoped>
.comp-content {
  background-repeat: no-repeat;
}
.page-list {
  background-color: #fff;

  .page-list-item {
    position: relative;
    display: inline-block;
    text-align: center;
    width: 50%;
    vertical-align: top;
    box-sizing: border-box;

    &:after {
      content: " ";
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      width: 1px;
      background-color: #e5e5e5;
      color: #e5e5e5;
      -webkit-transform-origin: 0 0;
      transform-origin: 0 0;
      -webkit-transform: scaleX(0.5);
      transform: scaleX(0.5);
    }

    &:nth-child(2n) {
      &:after {
        display: none;
      }
    }

    .page-list-item__hd {
      margin-bottom: 0.8em;
      text-align: center;

      .page-list-item__img {
        margin: 0 auto;
        width: 100%;
        height: 100%;
        background-color: #e9e9eb;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }
    }

    .page-list-item__bd {
      min-width: 60px;

      .page-list-item__title {
        margin-bottom: 0.3em;
        width: auto;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
        word-wrap: break-word;
        word-break: break-all;
      }

      .page-list-item__desc {
        margin: 0;
        line-height: 1.5;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
    }
  }
}
</style>
