//index.js
var app = getApp()
Page({
  data: {},
  onLoad: function(e) {
    wx.request({
      url: 'http://localhost:8888/pages/items/' + e.id + '.json',
      success: function(res){
        if(res.data.name){
          console.log(res.data)
          this.setData(res.data)
        } else {
          console.log('failed')
          wx.navigateBack(1)
        }
      }
    })
  }
})
