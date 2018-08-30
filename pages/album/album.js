// pages/album/album.js
const request = require('../../utils/request')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    albumList: {},
    time: []
  },
  getAlbumList (id) {
    request({
      url: 'https://www.missevan.com/sound/soundalllist?albumid=' + id,
      success: (res) => {
        let time = this.formatTime(res.data.info.sounds)
        this.setData({
          albumList: res.data.info,
          time: time
        })
      }
    })
  },
  formatTime (array) {
    return array.map(item => {
      let min = Math.floor(Math.ceil(item.duration/1000)/60)
      let sec = Math.ceil(item.duration/1000)%60
      sec = sec < 10 ? '0' + sec : sec
      let time = min + ':' + sec
      return time
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id
    this.getAlbumList(id)
  },
  toSound (e) {
    let id = e.currentTarget.id
    wx.navigateTo({
      url: '../sound/sound?id=' + id
    })
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  }
})