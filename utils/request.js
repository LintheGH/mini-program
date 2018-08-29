const request = ({url, data, method, success, fail, complete}) => {
  wx.showLoading({
    title: '加载中...',
    mask: true
  })
  wx.request({
    url,
    data,
    method: method || 'GET',
    success: function (res) {
      if (success) {
        success(res)
      }
    },
    fail:function (err) {
      if (fail) {
        fail(err)
      }
      wx.showToast({
        title: '加载失败',
        mask: true,
        icon: 'none'
      })
    },
    complete: function () {
      if (complete) {
        complete()
      }
      wx.hideLoading()
    }
  })
}
module.exports = request