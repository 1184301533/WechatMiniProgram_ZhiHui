// miniprogram/pages/welcome/welcome.js
Page({
  data:{
      imgs:[
          // "https://7168-qhdyouthbird-g36pv-1305024006.tcb.qcloud.la/welcomePic/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20210225125251.jpg?sign=0ea83d622fa02248220b21b3582d0cb8&t=1614229441",
          // "https://7168-qhdyouthbird-g36pv-1305024006.tcb.qcloud.la/welcomePic/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20210225125254.jpg?sign=054021656266f74f62c6d71c51b648dd&t=1614229463",
          // "https://7168-qhdyouthbird-g36pv-1305024006.tcb.qcloud.la/welcomePic/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20210225125216.jpg?sign=09d80a05bccb8c9b74f697d84645766c&t=1614229473",
          "/images/welcome1.jpg",
          "/images/welcome2.jpg",
          "/images/welcome3.jpg"
     ],
  },

  start(){
      //  wx.navigateTo({
      //    url: '../index/index'
      // })
       wx.switchTab({
         url: '../reserve/reserve',
       })
  },


})