module.exports = {
  title: '网格单元',
  domId: '',
  domName: '',
  base: [
    {
      type: 'input-number',
      label: '最大列数',
      attr: 'grid-column',
      val: 3,
      unit: '',
      min: 2,
      max: 4,
      step: 1,
      isNecessary: true
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
      type: 'input-number',
      label: '内边距-上',
      attr: 'padding-top',
      val: 15,
      unit: 'px',
      min: 0,
      max: 50,
      step: 1,
      isNecessary: true
    }, {
      type: 'input-number',
      label: '内边距-右',
      attr: 'padding-right',
      val: 5,
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
      val: 5,
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
  ],
  others: {
    type: 'item-style',
    title: '列表项-基础样式',
    config: [
      {
        type: 'color-picker',
        label: '背景颜色',
        attr: 'grid-list-card_background-color',
        val: '#ffffff',
        isNecessary: false
      }, {
        type: 'input-number',
        label: '卡片圆角',
        attr: 'grid-list-card_border-radius',
        val: 0,
        unit: 'px',
        min: 0,
        max: 50,
        step: 1,
        isNecessary: true
      }, {
        type: 'input-number',
        label: '内边距-上',
        attr: 'grid-list-item_padding-top',
        val: 0,
        unit: 'px',
        min: 0,
        max: 50,
        step: 1,
        isNecessary: true
      }, {
        type: 'input-number',
        label: '内边距-右',
        attr: 'grid-list-item_padding-right',
        val: 5,
        unit: 'px',
        min: 0,
        max: 50,
        step: 1,
        isNecessary: true
      }, {
        type: 'input-number',
        label: '内边距-下',
        attr: 'grid-list-item_padding-bottom',
        val: 15,
        unit: 'px',
        min: 0,
        max: 50,
        step: 1,
        isNecessary: true
      }, {
        type: 'input-number',
        label: '内边距-左',
        attr: 'grid-list-item_padding-left',
        val: 5,
        unit: 'px',
        min: 0,
        max: 50,
        step: 1,
        isNecessary: true
      }, {
        type: 'input-number',
        label: '图片高度',
        attr: 'grid-list-image_height',
        val: 100,
        unit: 'px',
        step: 1,
        max: 300,
        min: 10,
        isNecessary: false
      }, {
        type: 'input-number',
        label: '图片圆角',
        attr: 'grid-list-image_border-radius',
        val: 0,
        unit: 'px',
        min: 0,
        max: 50,
        step: 1,
        isNecessary: true
      }
    ]
  },
  textStyle: {
    type: 'item-text-style',
    title: '列表项-文本区样式',
    config: [
      {
        type: 'input-number',
        label: '标题大小',
        attr: 'grid-list-title_font-size',
        val: 14,
        unit: 'px',
        step: 1,
        max: 100,
        min: 10,
        isNecessary: false
      }, {
        type: 'color-picker',
        label: '标题颜色',
        attr: 'grid-list-title_color',
        val: '#333333',
        isNecessary: false
      }, {
        type: 'input-number',
        label: '标题粗细',
        attr: 'grid-list-title_font-weight',
        val: 500,
        unit: '',
        min: 300,
        max: 900,
        step: 100,
        isNecessary: true
      }, {
        type: 'input-number',
        label: '描述大小',
        attr: 'grid-list-desc_font-size',
        val: 12,
        unit: 'px',
        step: 1,
        max: 100,
        min: 10,
        isNecessary: false
      }, {
        type: 'color-picker',
        label: '描述颜色',
        attr: 'grid-list-desc_color',
        val: '#999999',
        isNecessary: false
      }, {
        type: 'input-number',
        label: '内边距-上',
        attr: 'grid-list-text_padding-top',
        val: 10,
        unit: 'px',
        min: 0,
        max: 50,
        step: 1,
        isNecessary: true
      }, {
        type: 'input-number',
        label: '内边距-右',
        attr: 'grid-list-text_padding-right',
        val: 0,
        unit: 'px',
        min: 0,
        max: 50,
        step: 1,
        isNecessary: true
      }, {
        type: 'input-number',
        label: '内边距-下',
        attr: 'grid-list-text_padding-bottom',
        val: 0,
        unit: 'px',
        min: 0,
        max: 50,
        step: 1,
        isNecessary: true
      }, {
        type: 'input-number',
        label: '内边距-左',
        attr: 'grid-list-text_padding-left',
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
    type: 'vertical-item-click',
    title: '列表项配置',
    config: [{
      val: 'https://yangyuji.github.io/h5-factory/static/img/logo.png',
      title: '默认标题',
      desc: '默认文案描述，默认文案描述，默认文案描述默认文案描述',
      price: '',
      count: '',
      click: null
    }, {
      val: 'https://yangyuji.github.io/h5-factory/static/img/logo.png',
      title: '默认标题',
      desc: '默认文案描述，默认文案描述，默认文案描述默认文案描述',
      price: '',
      count: '',
      click: null
    }, {
      val: 'https://yangyuji.github.io/h5-factory/static/img/logo.png',
      title: '默认标题',
      desc: '默认文案描述，默认文案描述，默认文案描述默认文案描述',
      price: '',
      count: '',
      click: null
    }]
  },
  data: [
    {
      type: 'text',
      label: '请求地址',
      attr: 'url',
      val: '',
      placeholder: 'API请求地址：https://api.xxx.com/xxx',
      isNecessary: true
    }, {
      type: 'radio',
      label: '提交方式',
      attr: 'method',
      val: 'GET',
      options: [{
        name: 'GET',
        val: 'GET'
      }, {
        name: 'POST',
        val: 'POST'
      }],
      isNecessary: true
    }, {
      type: 'text',
      label: 'params',
      attr: 'params',
      val: '',
      placeholder: '非必填：{"key1":"val1","key2":"val2"}',
      isNecessary: true
    }, {
      type: 'text',
      label: 'headers',
      attr: 'headers',
      val: '',
      placeholder: '非必填：{"key1":"val1","key2":"val2"}',
      isNecessary: true
    }, {
      type: 'text',
      label: '数据路径',
      attr: 'path',
      val: '',
      placeholder: '必填：data.list',
      isNecessary: true
    },
    {
      type: 'text',
      label: '图片模板',
      attr: 'image',
      val: '',
      placeholder: '必填：https://baidu.com/image/{{image}}}',
      isNecessary: true
    },
    {
      type: 'text',
      label: '标题模板',
      attr: 'title',
      val: '',
      placeholder: '必填：{{title}}',
      isNecessary: true
    },
    {
      type: 'text',
      label: '描述模板',
      attr: 'description',
      val: '',
      placeholder: '非必填：{{description}}',
      isNecessary: true
    },
    {
      type: 'text',
      label: '价格模板',
      attr: 'price',
      val: '',
      placeholder: '非必填：{{price}}',
      isNecessary: true
    },
    {
      type: 'text',
      label: '销量模板',
      attr: 'count',
      val: '',
      placeholder: '非必填：{{count}}',
      isNecessary: true
    },
    {
      type: 'text',
      label: '配置跳转',
      attr: 'link',
      val: '',
      placeholder: '非必填：https://xxx.com/xxx/{{id}}',
      isNecessary: true
    },
  ]
}
