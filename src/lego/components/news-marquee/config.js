module.exports = {
  title: '滚动新闻',
  domId: '',
  domName: '',
  assert: {
    script: ['./js/body/new-marquee.js']
  },
  style: [
    {
      type: 'radio',
      label: '是否连续',
      attr: 'goon',
      val: false,
      options: [
        {
          name: '连续',
          val: true
        }, {
          name: '不连续',
          val: false
        }
      ]
    }, {
      type: 'upload',
      label: '背景图片',
      attr: 'background-image',
      val: '',
      isNecessary: true
    }, {
      type: 'input-number',
      label: '容器高度',
      attr: 'height',
      val: 40,
      unit: 'px',
      min: 0,
      max: 100,
      step: 1,
      isNecessary: true
    }, {
      type: 'input-number',
      label: '内边距-右',
      attr: 'padding-right',
      val: 10,
      unit: 'px',
      min: 0,
      max: 50,
      step: 1,
      isNecessary: true
    }, {
      type: 'input-number',
      label: '内边距-左',
      attr: 'padding-left',
      val: 10,
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
      label: '字体大小',
      attr: 'font-size',
      val: 12,
      unit: 'px',
      min: 0,
      max: 60,
      step: 1,
      isNecessary: true
    }, {
      type: 'font',
      label: '字体',
      attr: ['font-weight', 'text-decoration', 'font-style', 'text-align'],
      val: ['400', 'none', 'inherit', 'left'],
      isNecessary: false
    }, {
      type: 'color-picker',
      label: '字体颜色',
      attr: 'color',
      val: '#333333',
      isNecessary: true
    },
    {
      type: 'color-picker',
      label: '背景颜色',
      attr: 'background-color',
      val: '#ffffff',
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
    type: 'marquee-click',
    title: '滚动项配置',
    config: [{
      text: '滚动新闻默认文本',
      click: null
    }]
  }
}
