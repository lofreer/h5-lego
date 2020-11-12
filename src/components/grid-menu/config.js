module.exports = {
  title: '金刚位',
  domId: '',
  domName: '',
  base: [
    {
      type: 'input-number',
      label: '最大列数',
      attr: 'grid-column',
      val: 4,
      unit: '',
      min: 2,
      max: 5,
      step: 1,
      isNecessary: true
    }
  ],
  style: [
    {
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
      label: '圆角',
      attr: 'border-radius',
      val: 0,
      unit: 'px',
      min: 0,
      max: 20,
      step: 1,
      isNecessary: true
    }, {
      type: 'color-picker',
      label: '字体颜色',
      attr: 'color',
      val: '#ffffff',
      isNecessary: true
    }, {
      type: 'color-picker',
      label: '背景颜色',
      attr: 'background-color',
      val: '',
      isNecessary: true
    }
  ],
  action: {
    type: 'grid-menu-click',
    title: '点击项配置',
    config: [
      {
        val: '',
        text: '导航项一',
        click: null
      }, {
        val: '',
        text: '导航项二',
        click: null
      }
    ]
  }
}