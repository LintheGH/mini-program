//index.js
//获取应用实例
const request = require('../../utils/request')

Page({
  data: {
    music: []
  },
  onLoad: function () {
    this.getMusic()
  },
  getMusic () {
    request({
      url: 'https://www.missevan.com/sound/newhomepagedata',
      success: (res) => {
        this.setData({
          music: res.data.music
        })
      }
    })
  },
  getUserInfo: function(e) {

  }
})
