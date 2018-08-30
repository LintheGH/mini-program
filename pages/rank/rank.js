// pages/rank/rank.js
const request = require('../../utils/request')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    albumList: []
  },
  getAlbumList () {
    request({
      url: 'https://www.missevan.com/mobileWeb/albumList',
      success: (res) => {
        this.setData({
          albumList: res.data.info
        })
      }
    })
  },
  toAlbumList (e) {
    wx.navigateTo({
      url: '../album/album?id=' + e.currentTarget.id
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getAlbumList()
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