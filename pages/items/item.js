//index.js
var app = getApp()
Page({
  data: {
    discount_bar:'',
    creditbuy_bar:''
  },
  onLoad: function(e) {
    var app = this;
    wx.request({
      url: 'http://localhost:8888/smallstore/detail?=' + e.id,
      success: function(res){
        if(res.data.name){
          app.setData(res.data)
        } else {
          console.log('failed')
          wx.navigateBack(1)
        }
        if(res.data.discount){
          app.setData({
            discount_bar: '满减'
          })
        }
        // wx.setNavigationBarTitle({
        //   title: res.data.name
        // })
      }
    })
  }
})
