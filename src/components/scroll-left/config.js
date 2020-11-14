module.exports = {
  title: '横向滚动',
  domId: '',
  domName: '',
  assert: {
    script: ['./js/libs/iscroll.min.js', './js/body/scroll-left.js']
  },
  style: [
    {
      type: 'select',
      label: '样式风格',
      attr: 'theme',
      val: 'scroll-x',
      options: [
        {
          name: '滚动条不连续',
          val: 'scroll-x'
        }, {
          name: '无滚动条连续',
          val: 'no-scroll'
        }
      ]
    }, {
      type: 'color-picker',
      label: '背景颜色',
      attr: 'background-color',
      val: '',
      isNecessary: false
    }
  ],
  action: {
    type: 'left-scroll-click',
    title: '滚动项配置',
    config: [
      {
        val: '',
        click: null
      }
    ]
  }
}
