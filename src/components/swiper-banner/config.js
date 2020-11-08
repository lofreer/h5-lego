module.exports = {
  title: '轮播图',
  domId: '',
  domName: '',
  assert: {
    script: ['./js/swiper/swiper.min.js'],
    style: ['./js/swiper/swiper.min.css']
  },
  base: [
    {
      type: 'radio',
      label: '自动播放',
      attr: 'autoplay',
      val: true,
      options: [{
        name: '是',
        val: true
      }, {
        name: '否',
        val: false
      }],
      isNecessary: false
    }, {
      type: 'radio',
      label: '显示分页',
      attr: 'pagination',
      val: true,
      options: [{
        name: '是',
        val: true
      }, {
        name: '否',
        val: false
      }],
      isNecessary: false
    }
  ],
  style: [
    {
      type: 'color-picker',
      label: '背景颜色',
      attr: 'background-color',
      val: 'rgba(255, 255, 255, 0)',
      isNecessary: true
    }, {
      type: 'input-number',
      label: '内边距-上',
      attr: 'padding-top',
      val: 0,
      unit: 'px',
      min: 0,
      max: 50,
      step: 1,
      isNecessary: true
    }, {
      type: 'input-number',
      label: '内边距-右',
      attr: 'padding-right',
      val: 0,
      unit: 'px',
      min: 0,
      max: 50,
      step: 1,
      isNecessary: true
    }, {
      type: 'input-number',
      label: '内边距-下',
      attr: 'padding-bottom',
      val: 0,
      unit: 'px',
      min: 0,
      max: 50,
      step: 1,
      isNecessary: true
    }, {
      type: 'input-number',
      label: '内边距-左',
      attr: 'padding-left',
      val: 0,
      unit: 'px',
      min: 0,
      max: 50,
      step: 1,
      isNecessary: true
    }, {
      type: 'input-number',
      label: '外边距-左',
      attr: 'margin-left',
      val: 0,
      unit: 'px',
      min: 0,
      max: 50,
      step: 1,
      isNecessary: true
    }, {
      type: 'input-number',
      label: '外边距-右',
      attr: 'margin-right',
      val: 0,
      unit: 'px',
      min: 0,
      max: 50,
      step: 1,
      isNecessary: true
    }, {
      type: 'input-number',
      label: '圆角',
      attr: 'border-radius',
      val: 0,
      unit: 'px',
      min: 0,
      max: 20,
      step: 1,
      isNecessary: true
    }
  ],
  action: {
    type: 'swiper-click',
    title: '图片项配置',
    config: [{
      val: '',
      click: null
    }]
  }
}
