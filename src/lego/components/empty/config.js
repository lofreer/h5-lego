module.exports = {
  title: '空白',
  domId: '',
  domName: '',
  style: [
    {
      type: 'input-number',
      label: '容器高度',
      attr: 'height',
      val: '10',
      unit: 'px',
      isNecessary: false
    }, {
      type: 'upload',
      label: '背景图',
      attr: 'background-image',
      val: '',
      isNecessary: false
    }, {
      type: 'color-picker',
      label: '背景颜色',
      attr: 'background-color',
      val: '',
      isNecessary: false
    }, {
      type: 'select',
      label: '背景尺寸',
      attr: 'background-size',
      val: 'contain',
      options: [
        {
          name: '无',
          val: 'inherit'
        }, {
          name: '宽高裁剪',
          val: 'cover'
        }, {
          name: '宽高自适应',
          val: 'contain'
        }
      ]
    }
  ]
}
