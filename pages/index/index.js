//index.js
var app = getApp()
Page({
  data: {
    items: [
      {id: 10000, x: 0, s: 1, o: 1, url: '/img/item_01.jpg'},
      {id: 10001, x: -20, s: .85, o: .5, url: '/img/item_02.jpg'},
      {id: 10002, x: 0, s: .85, o: .5, url: '/img/item_03.jpg'}
    ]
  },
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  listenSwiper: function(e) {
    let upData = {}
    if (e.detail.current-1 != -1) {
      upData['items['+(e.detail.current-1)+'].x'] = 20
      upData['items['+(e.detail.current-1)+'].s'] = .85
      upData['items['+(e.detail.current-1)+'].o'] = .5
    }
    if (e.detail.current+1 != this.data.items.length) {
      upData['items['+(e.detail.current+1)+'].x'] = -20
      upData['items['+(e.detail.current+1)+'].s'] = .85
      upData['items['+(e.detail.current+1)+'].o'] = .5
    }
    upData['items['+(e.detail.current)+'].x'] = 0
    upData['items['+(e.detail.current)+'].s'] = 1
    upData['items['+(e.detail.current)+'].o'] = 1
    this.setData(upData)
    // if (e.detail.current == 0) {
    //   this.setData({
    //     'items[0].x':0,
    //     'items[1].x':-20,
    //     'items[2].x':0,
    //     'items[0].s':1,
    //     'items[1].s':.85,
    //     'items[2].s':.85,
    //     'items[0].o':1,
    //     'items[1].o':.5,
    //     'items[2].o':.5,
    //   })
    // }
    // if (e.detail.current == 1) {
    //   this.setData({
    //     'items[0].x':20,
    //     'items[1].x':0,
    //     'items[2].x':-20,
    //     'items[0].s':.85,
    //     'items[1].s':1,
    //     'items[2].s':.85,
    //     'items[0].o':.5,
    //     'items[1].o':1,
    //     'items[2].o':.5,
    //   })
    // }
    // if (e.detail.current == 2) {
    //   this.setData({
    //     'items[0].x':0,
    //     'items[1].x':20,
    //     'items[2].x':0,
    //     'items[0].s':.85,
    //     'items[1].s':.85,
    //     'items[2].s':1,
    //     'items[0].o':.5,
    //     'items[1].o':.5,
    //     'items[2].o':1,
    //   })
    // }
  },
  tapItem: function(e){
    console.log(e.currentTarget.dataset.id);
    wx.navigateTo({
      url: '../items/item?id='+e.currentTarget.dataset.id
    });
  }
  // onLoad: function () {
  //   var appdata = this
  //   app.getUserInfo(function(userInfo){
  //     appdata.setData({
  //       userInfo:userInfo
  //     })
  //   })
  // }
})
