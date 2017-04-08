//index.js
var app = getApp()
Page({
  data: {
    motto: {},
    items: [
      {x: 0, s: 1, o: 1, url: '/img/item_01.jpg'},
      {x: -20, s: .85, o: .5, url: '/img/item_02.jpg'},
      {x: 0, s: .85, o: .5, url: '/img/item_03.jpg'}
    ]
  },
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  listenSwiper: function(e) {
    if (e.detail.current == 0) {
      this.setData({
        'items[0].x':0,
        'items[1].x':-20,
        'items[2].x':0,
        'items[0].s':1,
        'items[1].s':.85,
        'items[2].s':.85,
        'items[0].o':1,
        'items[1].o':.5,
        'items[2].o':.5,
      })
    }
    if (e.detail.current == 1) {
      this.setData({
        'items[0].x':20,
        'items[1].x':0,
        'items[2].x':-20,
        'items[0].s':.85,
        'items[1].s':1,
        'items[2].s':.85,
        'items[0].o':.5,
        'items[1].o':1,
        'items[2].o':.5,
      })
    }
    if (e.detail.current == 2) {
      this.setData({
        'items[0].x':0,
        'items[1].x':20,
        'items[2].x':0,
        'items[0].s':.85,
        'items[1].s':.85,
        'items[2].s':1,
        'items[0].o':.5,
        'items[1].o':.5,
        'items[2].o':1,
      })
    }
    console.log(e.detail.current)
    // console.log(this.data.currentPage)
  },
  // onLoad: function () {
  //   var appdata = this
  //   app.getUserInfo(function(userInfo){
  //     appdata.setData({
  //       userInfo:userInfo
  //     })
  //   })
  // }
})
