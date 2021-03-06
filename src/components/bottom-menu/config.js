module.exports = {
  title: '底部导航',
  domId: '',
  domName: '',
  style: [
    {
      type: 'input-number',
      label: '容器高度',
      attr: 'height',
      val: 40,
      unit: 'px',
      min: 0,
      max: 100,
      step: 1,
      isNecessary: false
    }, {
      type: 'color-picker',
      label: '背景颜色',
      attr: 'background-color',
      val: '#ffffff',
      isNecessary: false
    }
  ],
  action: {
    type: 'bottom-menu-click',
    title: '点击项配置',
    config: [{
      val: '',
      text: '菜单',
      click: null
    }]
  }
}
