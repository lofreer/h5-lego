module.exports = {
  title: '倒计时',
  domId: '',
  domName: '',
  style: [
    {
      type: 'datetime',
      label: '截止时间',
      attr: 'end-time',
      val: '',
      isNecessary: true
    }, {
      type: 'upload',
      label: '背景图片',
      attr: 'background-image',
      val: '',
      isNecessary: true
    }
  ],
  action: {
    type: 'timeout-click',
    title: '倒计时配置',
    config: [
      {
        show: true,
        x: 0,
        y: 0,
        w: 40,
        h: 40,
        font: 16,
        weight: 400,
        color: '#333'
      }, {
        show: true,
        x: 50,
        y: 0,
        w: 40,
        h: 40,
        font: 16,
        weight: 400,
        color: '#333'
      }, {
        show: true,
        x: 100,
        y: 0,
        w: 40,
        h: 40,
        font: 16,
        weight: 400,
        color: '#333'
      }, {
        show: true,
        x: 150,
        y: 0,
        w: 40,
        h: 40,
        font: 16,
        weight: 400,
        color: '#333'
      }
    ]
  }
}
