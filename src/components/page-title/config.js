module.exports = {
  title: '页面标题',
  domId: '',
  domName: '',
  base: [
    {
      type: 'text',
      label: '主标题',
      val: '主标题文案',
      isNecessary: true
    }, {
      type: 'text',
      label: '副标题',
      val: '副标题文案 - 作者 - 2019.09.09',
      isNecessary: false
    }
  ],
  style: [
    {
      type: 'color-picker',
      label: '背景颜色',
      attr: 'background-color',
      val: '#ffffff',
      isNecessary: false
    }, {
      type: 'upload',
      label: '背景图片',
      attr: 'background-image',
      val: '',
      isNecessary: true
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
    }, {
      type: 'input-number',
      label: '内边距-上',
      attr: 'padding-top',
      val: 20,
      unit: 'px',
      min: 0,
      max: 100,
      step: 1,
      isNecessary: true
    }, {
      type: 'input-number',
      label: '内边距-右',
      attr: 'padding-right',
      val: 20,
      unit: 'px',
      min: 0,
      max: 50,
      step: 1,
      isNecessary: true
    }, {
      type: 'input-number',
      label: '内边距-下',
      attr: 'padding-bottom',
      val: 20,
      unit: 'px',
      min: 0,
      max: 100,
      step: 1,
      isNecessary: true
    }, {
      type: 'input-number',
      label: '内边距-左',
      attr: 'padding-left',
      val: 20,
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
  others: {
    type: 'page-title-style',
    title: '标题样式',
    config: [
      {
        type: 'font',
        label: '主标字体',
        attr: ['font-weight', 'text-decoration', 'font-style', 'text-align'],
        val: ['600', 'none', 'inherit', 'left'],
        isNecessary: false
      }, {
        type: 'input-number',
        label: '主标大小',
        attr: 'font-size',
        val: 16,
        unit: 'px',
        step: 1,
        max: 100,
        min: 10,
        isNecessary: false
      }, {
        type: 'color-picker',
        label: '主标颜色',
        attr: 'color',
        val: '#333333',
        isNecessary: true
      }, {
        type: 'input-number',
        label: '主标字距',
        attr: 'letter-spacing',
        val: 0,
        step: 1,
        max: 20,
        min: 0,
        unit: 'px',
        isNecessary: false
      }, {
        type: 'font',
        label: '副标字体',
        attr: ['font-weight', 'text-decoration', 'font-style', 'text-align'],
        val: ['400', 'none', 'inherit', 'left'],
        isNecessary: false
      }, {
        type: 'input-number',
        label: '副标大小',
        attr: 'font-size',
        val: 12,
        unit: 'px',
        step: 1,
        max: 100,
        min: 10,
        isNecessary: false
      }, {
        type: 'color-picker',
        label: '副标颜色',
        attr: 'color',
        val: '#666666',
        isNecessary: true
      }, {
        type: 'input-number',
        label: '副标字距',
        attr: 'letter-spacing',
        val: 0,
        step: 1,
        max: 10,
        min: 0,
        unit: 'px',
        isNecessary: false
      }, {
        type: 'input-number',
        label: '副标上距',
        attr: 'margin-top',
        val: 10,
        step: 1,
        max: 100,
        min: 0,
        unit: 'px',
        isNecessary: false
      }
    ]
  }
}
