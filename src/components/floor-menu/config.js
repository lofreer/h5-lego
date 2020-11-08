module.exports = {
  title: '楼层导航',
  domId: '',
  domName: '',
  assert: {
    script: ['./js/libs/iscroll.min.js', './js/body/floor-menu.js']
  },
  style: [
    {
      type: 'color-picker',
      label: '默认背景',
      attr: 'background-color',
      val: '#ffffff',
      isNecessary: true
    }, {
      type: 'color-picker',
      label: '选中背景',
      attr: 'background-color:hover',
      val: '#ffffff',
      isNecessary: true
    }, {
      type: 'color-picker',
      label: '默认字体',
      attr: 'color',
      val: '#4a4a4a',
      isNecessary: true
    }, {
      type: 'color-picker',
      label: '选中字体',
      attr: 'color:hover',
      val: '#D0021B',
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
    type: 'floor-menu-click',
    title: '导航项配置',
    config: [{
      text: '默认项1',
      click: null
    }]
  }
}
