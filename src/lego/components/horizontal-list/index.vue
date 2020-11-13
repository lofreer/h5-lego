<template>
  <div :class="['comp-content', component.active ? 'active' : '']"
       :style="getStyle"
       :comp-id="component.domId">
    <div class="page-list">
      <div v-for="(item, idx) in list" class="page-list-item" :key="idx" :style="getItemStyle('horizontal-list-item')" @click="handleClick(item)">
        <div class="page-list-item__hd" :style="getItemStyle('horizontal-list-logo_')">
          <div class="page-list-item__img" :style="{backgroundImage: 'url(' + item.val + ')'}"></div>
        </div>
        <div class="page-list-item__bd">
          <div class="page-list-item__title" :style="getItemStyle('horizontal-list-title_')">{{ item.title }}</div>
          <p class="page-list-item__desc" :style="getItemStyle('horizontal-list-desc_')">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'comp-horizontal-list',
  props: {
    component: {
      type: Object,
    }
  },
  data() {
    return {
      list: this.component.action.config
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
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    getItemStyle(key) {
      const ret = []
      this.component.others.config.forEach((item) => {
        const isItem = item.attr.indexOf(key)
        const idx = item.attr.indexOf('_')
        if (isItem === 0) {
          const unit = item.unit || ''
          item.val && ret.push(item.attr.substring(idx + 1, item.attr.length) + ':' + item.val + unit)
        }
      })
      return ret.join(';')
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
            const imageKey = image.match(regex) && RegExp.$1
            const titleKey = title.match(regex) && RegExp.$1
            const descriptionKey = description.match(regex) && RegExp.$1
            const linkKey = link ? link.match(regex) && RegExp.$1 : ''

            data.forEach(item => {
              const value = {
                val: imageKey ? image.replace(regex, item[imageKey]) : image,
                title: titleKey ? title.replace(regex, item[titleKey]) : title,
                desc: descriptionKey ? description.replace(regex, item[descriptionKey]) : description,
              }
              if (link) {
                value.click = {
                  href: linkKey ? link.replace(regex, item[linkKey]) : link,
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
  }
}
</script>

<style lang="less" scoped>
  .comp-content {
    background-repeat: no-repeat;
  }
  .page-list {
    background-color: #fff;

    .page-list-item {
      position: relative;
      display: flex;
      align-items: center;

      &:after {
        content: " ";
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        height: 1px;
        background-color: #E5E5E5;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
      }

      &:last-child {
        &:after {
          display: none;
        }
      }

      .page-list-item__hd {
        margin-right: .8em;
        text-align: center;

        .page-list-item__img {
          margin: 0 auto;
          height: 100%;
          background-color: #e9e9eb;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
      }

      .page-list-item__bd {
        flex: 1;
        min-width: 60px;

        .page-list-item__title {
          margin-bottom: .3em;
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
