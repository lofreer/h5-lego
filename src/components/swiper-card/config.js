module.exports = {
  title: '轮播图',
  domId: '',
  domName: '',
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
    },
    {
      type: 'radio',
      label: '循环轮播',
      attr: 'loop',
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
      label: '容器高度',
      attr: 'height',
      val: 110,
      unit: 'px',
      min: 80,
      max: 375,
      step: 1,
      isNecessary: false
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
    }
  ],
  cardStyle: {
    type: 'item-style',
    title: '卡片项样式',
    config: [
      {
        type: 'input-number',
        label: '圆角-上左',
        attr: 'border-top-left-radius',
        val: 0,
        unit: 'px',
        min: 0,
        max: 50,
        step: 1,
        isNecessary: true
      }, {
        type: 'input-number',
        label: '圆角-上右',
        attr: 'border-top-right-radius',
        val: 0,
        unit: 'px',
        min: 0,
        max: 50,
        step: 1,
        isNecessary: true
      }, {
        type: 'input-number',
        label: '圆角-下右',
        attr: 'border-bottom-right-radius',
        val: 0,
        unit: 'px',
        min: 0,
        max: 50,
        step: 1,
        isNecessary: true
      }, {
        type: 'input-number',
        label: '圆角-下左',
        attr: 'border-bottom-left-radius',
        val: 0,
        unit: 'px',
        min: 0,
        max: 50,
        step: 1,
        isNecessary: true
      }
    ]
  },
  action: {
    type: 'swiper-click',
    title: '图片项配置',
    config: [{
      val: '',
      click: null
    }]
  }
}
