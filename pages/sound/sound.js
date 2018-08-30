// pages/sound/sound.js
const request = require('../../utils/request')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sound: {}
  },
  getSound (id) {
    request({
      url: 'https://www.missevan.com/sound/getsound?soundid=' + id,
      success: (res) => {
        this.setData({
          sound: res.data.info.sound
        })
        let src = 'https://static.missevan.com/' + res.data.info.sound.soundurl_64
        let radio = this.creatAudio(src)
      }
    })
  },
  creatAudio (src) {
    const radio = wx.createInnerAudioContext()
    radio.src = src
    radio.autoplay = true
    return radio
  },
  controlAudio (radio) {
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id
    this.getSound(id)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  }
})