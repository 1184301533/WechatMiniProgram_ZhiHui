// pages/me/me.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    avatarUrl: './user-unlogin.png',
    userInfo: {},
    logged: false,
    changli:0,
    beidaihe:0,
    shanhaiguan:0,
    stage:null,
    canIUseGetUserProfile: false,
    hasUserInfo: false,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
 // 获取用户信息
 if (wx.getUserProfile) {
  this.setData({
    canIUseGetUserProfile: true
  })
}
//  wx.getSetting({
//   success: res => {
//     if (res.authSetting['scope.userInfo']) {
//       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
//       wx.getUserInfo({
//         success: res => {
//           app.globalData.userInfo=res.userInfo
//           this.setData({
//             logged: true,
//             avatarUrl: res.userInfo.avatarUrl,
//             userInfo: res.userInfo
//           })
//           wx.showToast({
//             title: '登陆成功',
//           })
//           this.onGetOpenid()
//         }
//       })
//     }
//   }
// })

  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        app.globalData.userInfo=res.userInfo
        this.setData({
          userInfo: res.userInfo,
          avatarUrl: res.userInfo.avatarUrl,
          hasUserInfo: true
        })
        this.onGetOpenid()
      }
    })
  },
  onShow(){
    this.getTabBar().setData({
      selected: 4
    })
    if(this.hasUserInfo){this.showMyRecord()}
    
  },
 
  // onGetUserInfo: function(e) {
  //   console.log(e.detail.userInfo)
  //   if (!this.data.logged && e.detail.userInfo) {
  //     app.globalData.userInfo=e.detail.userInfo
  //     this.setData({
  //       logged: true,
  //       avatarUrl: e.detail.userInfo.avatarUrl,
  //       userInfo: e.detail.userInfo
  //     })
  //     wx.showToast({
  //       title: '登陆成功',
  //     })
  //     this.onGetOpenid()
  //   }
  // },

  onGetOpenid: function() {
    // 调用云函数
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result)
        app.globalData.openid = res.result.openid
        this.showMyRecord()
        
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
       
      }
    })
  },
   
   directToRecocd: function(){
    if (app.globalData.openid) {
      wx.navigateTo({
        url: '../myrecord/myrecord',
      })
    }else{
      wx.showToast({
        icon: 'none',
        title: '请先登录',
      })
    }

   },

   directToTakePhoto: function(e){
    var id = e.currentTarget.id;
    if(id==0){
      app.globalData.reserve='beidaihe'
      wx.navigateTo({
        url: '../takephoto/takephoto',
      })
    }
    if(id==1){
      app.globalData.reserve='changli'
      wx.navigateTo({
        url: '../takephoto/takephoto',
      })
    }
    if(id==2){
      app.globalData.reserve='shanhaiguan'
      wx.navigateTo({
        url: '../takephoto/takephoto',
      })
    }
    
  },
  directToMyBirdCard: function(){
    if (app.globalData.openid) {
      wx.navigateTo({
        url: '../me/myBirdCard/myBirdCard',
      })
    }else{
      wx.showToast({
        icon: 'none',
        title: '请先登录',
      })
    }

  },
  directToDictionary: function(){
    wx.navigateTo({
      url: '../dictionary/dictionary',
    })

  },
  directToAbout: function(){
    wx.navigateTo({
      url: '../me/about/about',
    })

  },

  showMyRecord: function(){
    const db = wx.cloud.database()
      //查询当前用户所有的 counters
      console.log(app.globalData.openid)
      
     db.collection('reserve').where({_openid:app.globalData.openid}).get({
       success: res => {
         if(res.data.length!=0){
         this.setData({
          beidaihe:res.data[0].reserve.beidaihe,
          changli:res.data[0].reserve.changli,
          shanhaiguan:res.data[0].reserve.shanhaiguan,
          stage:res.data[0].stage,
          experience:100*res.data[0].reserve.beidaihe+200*res.data[0].reserve.changli+300*res.data[0].reserve.shanhaiguan
         })
         app.globalData.record_id=res.data[0]._id
         app.globalData.stage=res.data[0].stage
         app.globalData.rank=res.data[0].rank
         //app.globalData.myBirdCard=res.data[0].bird
        console.log('[数据库] [查询记录] 成功: ', res)
         }else{
          db.collection('reserve').add({
            data: {
                 reserve:{"beidaihe":0,"changli":0,"shanhaiguan":0},
                 stage:0
            },
               success: res => {
                this.showMyRecord()
                console.log('[数据库] [插入记录] 成功: ', res)               
                },
              fail: res=>{
                console.log('[数据库] [插入记录] 失败: ', res)
              }
            })
          
         }
        
      },
       fail: err => {
         wx.showToast({
           icon: 'none',
           title: '查询记录失败'
         })
         console.error('[数据库] [查询记录] 失败：', err)
       }
     })
  },
  
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  
  
})