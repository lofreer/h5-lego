module.exports = {
  title: '纵向列表',
  domId: '',
  domName: '',
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
      val: 0,
      unit: 'px',
      min: 0,
      max: 50,
      step: 1,
      isNecessary: true
    }, {
      type: 'input-number',
      label: '内边距-下',
      attr: 'padding-bottom',
      val: 15,
      unit: 'px',
      min: 0,
      max: 50,
      step: 1,
      isNecessary: true
    }, {
      type: 'input-number',
      label: '内边距-左',
      attr: 'padding-left',
      val: 0,
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
    type: 'item-style',
    title: '列表项样式',
    config: [
      {
        type: 'input-number',
        label: '上内边距',
        attr: 'vertical-list-item_padding-top',
        val: 0,
        unit: 'px',
        min: 0,
        max: 50,
        step: 1,
        isNecessary: true
      }, {
        type: 'input-number',
        label: '下内边距',
        attr: 'vertical-list-item_padding-bottom',
        val: 10,
        unit: 'px',
        min: 0,
        max: 50,
        step: 1,
        isNecessary: true
      }, {
        type: 'input-number',
        label: '左内边距',
        attr: 'vertical-list-item_padding-left',
        val: 10,
        unit: 'px',
        min: 0,
        max: 50,
        step: 1,
        isNecessary: true
      }, {
        type: 'input-number',
        label: '右内边距',
        attr: 'vertical-list-item_padding-right',
        val: 10,
        unit: 'px',
        min: 0,
        max: 50,
        step: 1,
        isNecessary: true
      }, {
        type: 'input-number',
        label: '图片高度',
        attr: 'vertical-list-logo_height',
        val: 160,
        unit: 'px',
        step: 1,
        max: 300,
        min: 10,
        isNecessary: false
      }, {
        type: 'input-number',
        label: '标题大小',
        attr: 'vertical-list-title_font-size',
        val: 16,
        unit: 'px',
        step: 1,
        max: 100,
        min: 10,
        isNecessary: false
      }, {
        type: 'color-picker',
        label: '标题颜色',
        attr: 'vertical-list-title_color',
        val: '#333333',
        isNecessary: false
      }, {
        type: 'input-number',
        label: '标题粗细',
        attr: 'vertical-list-title_font-weight',
        val: 500,
        unit: '',
        min: 300,
        max: 900,
        step: 100,
        isNecessary: true
      }, {
        type: 'input-number',
        label: '描述大小',
        attr: 'vertical-list-desc_font-size',
        val: 13,
        unit: 'px',
        step: 1,
        max: 100,
        min: 10,
        isNecessary: false
      }, {
        type: 'color-picker',
        label: '描述颜色',
        attr: 'vertical-list-desc_color',
        val: '#999999',
        isNecessary: false
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
      click: null
    }, {
      val: 'https://yangyuji.github.io/h5-factory/static/img/logo.png',
      title: '默认标题',
      desc: '默认文案描述，默认文案描述，默认文案描述默认文案描述',
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
      placeholder: '必填：{{description}}',
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