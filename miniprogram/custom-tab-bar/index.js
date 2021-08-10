const app=getApp()
Component({
  data: {
    selected:0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
      "pagePath": "/pages/reserve/reserve",
      "text": "",
      "iconPath": "/images/tabbar/map.png",
      "selectedIconPath": "/images/tabbar/map_light.png"
    },
    {
      "pagePath": "/pages/bird/bird",
      "text": "",
      "iconPath": "/images/tabbar/bird.png",
      "selectedIconPath": "/images/tabbar/bird_light.png"
    },
    {
      "text": "",
      "iconPath": "/images/tabbar/watch.png",
      "selectedIconPath": "/images/tabbar/watch_light.png"
    },
    {
      "pagePath": "/pages/stage/stage",
      "text": "",
      "iconPath": "/images/tabbar/stage.png",
      "selectedIconPath": "/images/tabbar/stage_light.png"
    },
    {
      "pagePath": "/pages/me/me",
      "text": "",
      "iconPath": "/images/tabbar/me.png",
      "selectedIconPath": "/images/tabbar/me_light.png"
    }]
  },
  attached() {
  },
  
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
    
      if(data.index==2){
        if(app.globalData.stage==null){
          wx.showToast({
            icon: 'none',
            title: '请先登录',
          })
          setTimeout( 
            this.redirectToMe
           ,1000);
        }else if(app.globalData.stage==0)
        {
          wx.showToast({
            icon: 'none',
            title: '请先完成任务一',
          })
          setTimeout( 
            this.redirectToStage
           ,1000);
        }else{
          this.setData({
            modalName: "Image",
            selected:2
          })
        }
      }else if(data.index==3){
        if(app.globalData.stage==null){
          wx.showToast({
            icon: 'none',
            title: '请先登录',
          })
          setTimeout( 
            this.redirectToMe
           ,1000);
        }else{wx.switchTab({url})}
      }else{
        wx.switchTab({url})
      }
    },
    hideModal(e) {
      this.setData({
        modalName: null
      })
    },
    redirectToMe:function(){
      wx.switchTab({
        url: '../me/me',
      })
    },
    redirectToStage:function(){
      wx.switchTab({
        url: '../stage/stage',
      })
    },
    directToTakePhoto: function(e){
      var id = e.currentTarget.id;
      this.setData({
        modalName: null
      })
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
  }
})