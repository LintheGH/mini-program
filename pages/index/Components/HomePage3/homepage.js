// pages/index/Components/HomePage3/homepage.js
const request = require('../../../../utils/request')
Component({
  /**
   * 组件的初始数据
   */
  data: {
    bannerList: [],
    sound: [],
    channel: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getHomePage3 () {
      request({
        url: 'https://www.missevan.com/mobileWeb/newHomepage3',
        success: (res) => {
          this.setData({
            bannerList: res.data.info.banner,
            sound: res.data.info.sound,
            channel: res.data.info.channel
          })
        }
      })
      
    }
  },
  attached () {
    this.getHomePage3()
  }
})
