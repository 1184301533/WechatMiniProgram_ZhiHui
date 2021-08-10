// miniprogram/pages/myrecord/myrecord.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openid: '',
    queryResult: '',
    _id:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     
    this.onPullDownRefresh()
    
  },
 
  
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading();
    const db = wx.cloud.database()
      //查询当前用户所有的 counters
      console.log(app.globalData.openid)
      
     db.collection('record').orderBy('time', 'desc').where({_openid:app.globalData.openid}).get({
       success: res => {
        for(var i=0;i<res.data.length;i++){
          var date = new Date(res.data[i].time)
          var mm = date.getMinutes(); 
          if (mm < 10) mm = '0'+mm;
          res.data[i].time=date.getFullYear() +'-' +(date.getMonth() + 1) +'-' + date.getDate()+' '+date.getHours()+':'+mm
        }
         this.setData({
          //  queryResult: JSON.stringify(res.data, null, 2)
          queryResult:res.data,     
         })

        console.log('[数据库] [查询记录] 成功: ', res)
        
      },
       fail: err => {
         wx.showToast({
           icon: 'none',
           title: '查询记录失败'
         })
         console.error('[数据库] [查询记录] 失败：', err)
       }
     })
        // 隐藏导航栏加载框
        wx.hideNavigationBarLoading();
        // 停止下拉动作
        wx.stopPullDownRefresh();
  },
  onRemoveRecord: function(id){
    const db = wx.cloud.database()
    db.collection('record').doc(id).remove({
      success: res => {
        wx.showToast({
          title: '删除成功',
        })
        this.setData({
         id: '',
        })
        this.onLoad()
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '删除失败',
        })
        console.error('[数据库] [删除记录] 失败：', err)
      }
    })

  },

  OnRemovePic: function(picid){
    const db = wx.cloud.database()
    return new Promise((resolve,rejcet)=>{
    db.collection('record').where({_id:picid}).get({
      success: res => {
        this.setData({
         //  queryResult: JSON.stringify(res.data, null, 2)
         thisPicPath:res.data[0].PicPath,     
        })
       console.log('[数据库] [查询记录] 成功: ', res.data[0].PicPath)
       
       wx.cloud.deleteFile({
        fileList: [res.data[0].PicPath],
        success: function (res) {
          console.log("删除照片成功");
          resolve(res)
        },
        fail: function (res) {
          console.log("删除照片失败");
        }
      })
       
     },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '查询记录失败'
        })
        console.error('[数据库] [查询记录] 失败：', err)
      }
    })
  })
  },
  async onRemoveReserveRec(Rid){
    const db = wx.cloud.database()
    const _ = db.command
    return new Promise((resolve,rejcet)=>{
    db.collection('record').where({_id:Rid}).get({
      success: res => {
  
          if(res.data[0].reserve=='beidaihe'){
            db.collection('reserve').where({_openid:app.globalData.openid}).update({
              data: {
                'reserve.beidaihe' : _.inc(-1)
              },
              success: function(res) {
                console.log(res)
                resolve(res)
              }
            })
          }
          if(res.data[0].reserve=='B'){
            db.collection('reserve').where({_openid:app.globalData.openid}).update({
              data: {
                'reserve.B' : _.inc(-1)
              },
              success: function(res) {
                console.log(res)
                resolve(res)
              }
            })
          }
          if(res.data[0].reserve=='C'){
            db.collection('reserve').where({_openid:app.globalData.openid}).update({
              data: {
                'reserve.C' : _.inc(-1)
              },
              success: function(res) {
                console.log(res)
                resolve(res)
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
  })
  
  },
  async onRemoveRaP(Rid){
    const DO1=await this.onRemoveReserveRec(Rid);
    const DO2=await this.OnRemovePic(Rid);
    const DO3=await this.onRemoveRecord(Rid);

  },

  onRemove: function(e) {
    
    var id = e.currentTarget.dataset._id;
    this.setData({
      _id:id
    })

     if (this.data._id) {
       const db = wx.cloud.database()
       this.onRemoveRaP(this.data._id)
     } else {
       wx.showToast({
         title: '无记录可删，请先创建记录',
       })
     }
  },

  
})