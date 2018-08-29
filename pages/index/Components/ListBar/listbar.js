const dataconfig = require('../../../../utils/dataconfig')
Component({
  data: {
    type_info: {}
  },
  /**
   * 组件的属性列表
   */
  properties: {
    data: { 
      type: Array,
      value: []
    },
    title: String,
    type: String
  },
  /**
   * 组件的方法列表
   */
  methods: {
  },
  attached () {
    this.setData({
      type_info: dataconfig[this.data.type]
    })
  }
})
