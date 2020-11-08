module.exports = {
  title: '段落模块',
  domId: '',
  domName: '',
  base: [
    {
      type: 'select',
      label: '标题风格',
      attr: 'theme',
      val: 'theme-1',
      options: [
        {
          name: '风格一',
          val: 'theme-1'
        }, {
          name: '风格二',
          val: 'theme-2'
        }
      ]
    }, {
      type: 'text',
      label: '标题文案',
      val: '标题',
      isNecessary: true
    }
  ],
  style: [
    {
      type: 'color-picker',
      label: '背景颜色',
      attr: 'background-color',
      val: '',
      isNecessary: false
    }, {
      type: 'input-number',
      label: '内边距-上',
      attr: 'padding-top',
      val: 10,
      unit: 'px',
      min: 0,
      max: 50,
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
      label: '内边距-下',
      attr: 'padding-bottom',
      val: 0,
      unit: 'px',
      min: 10,
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
    type: 'page-paragraph-list',
    title: '段落项',
    config: [{
      label: '1、',
      content: 'H5制作工厂是一个移动端页面设计和制作平台，无需任何开发经营也可以制作自己的移动端站点和页面，从灵感到实现，您只需要10分钟。'
    }]
  }
}