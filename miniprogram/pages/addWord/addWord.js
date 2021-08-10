// miniprogram/pages/addWord/addWord.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wordContent:'',
    fullName:'',
    pinyin:[],
    wordCategory:1,
    items: [
      {value: '1', name: '鸟类形态和结构', checked: 'true'},
      {value: '2', name: '鸟类生态和行为'},
      {value: '3', name: '观鸟活动'}
     
    ],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(app.globalData.openid=='oYHs_5Di4BQG8xu19YXeFXk_EmPQ'||app.globalData.openid=='oYHs_5FKmr3xEJdoGokVlTr43qCc'){
     
    }else{
      wx.showToast({
        icon: 'none',
        title: '无权操作',
      })
      setTimeout( 
        this.redirectToMe
       ,1000);
    }
  },
  redirectToMe:function(){
    wx.switchTab({
      url: '../me/me',
    })
  },
  radioChange(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)

    const items = this.data.items
    for (let i = 0, len = items.length; i < len; ++i) {
      items[i].checked = items[i].value === e.detail.value
    }

    this.setData({
      items,
      wordCategory:e.detail.value
    })
  },
  onAdd: function () {
    var date= new Date();
     const db = wx.cloud.database()
     if(this.data.wordCategory==1){
      db.collection('wordsShape').add({
        data: {
           fullName: this.data.fullName,
           detail: this.data.wordContent,
           pinyin:this.data.pinyin
       },
         success: res => {
           wx.showToast({
             title: '新增记录成功',
           })
           this.onLoad()
           console.log('[数据库] [新增记录] 成功，记录 _id: ', res._id)
         },
         fail: err => {
           wx.showToast({
           icon: 'none',
             title: '新增记录失败'
           })
           console.error('[数据库] [新增记录] 失败：', err)
         }
      })
     }
     if(this.data.wordCategory==2){
      db.collection('wordsEcologyBehavior').add({
        data: {
           fullName: this.data.fullName,
           detail: this.data.wordContent,
           pinyin:this.data.pinyin
       },
         success: res => {
           wx.showToast({
             title: '新增记录成功',
           })
           this.onLoad()
           console.log('[数据库] [新增记录] 成功，记录 _id: ', res._id)
         },
         fail: err => {
           wx.showToast({
           icon: 'none',
             title: '新增记录失败'
           })
           console.error('[数据库] [新增记录] 失败：', err)
         }
      })
     }
     if(this.data.wordCategory==3){
      db.collection('wordsBirdWatching').add({
        data: {
           fullName: this.data.fullName,
           detail: this.data.wordContent,
           pinyin:this.data.pinyin
       },
         success: res => {
           wx.showToast({
             title: '新增记录成功',
           })
           this.onLoad()
           console.log('[数据库] [新增记录] 成功，记录 _id: ', res._id)
         },
         fail: err => {
           wx.showToast({
           icon: 'none',
             title: '新增记录失败'
           })
           console.error('[数据库] [新增记录] 失败：', err)
         }
      })
     }
     
  },
  bindWordContent(e) {
    this.setData({
      wordContent:e.detail.value
    })
    console.log(e.detail.value)
  },
  bindFullName(e) {
    this.setData({
      fullName:e.detail.value
    })
    console.log(e.detail.value)
  },
  pinyin1(e) {
    this.data.pinyin[0]=e.detail.value
    console.log(e.detail.value)
  },
  pinyin2(e) {
    this.data.pinyin[1]=e.detail.value
    console.log(e.detail.value)
  },
  pinyin3(e) {
    this.data.pinyin[2]=e.detail.value
    console.log(e.detail.value)
  },
  pinyin4(e) {
    this.data.pinyin[3]=e.detail.value
    console.log(e.detail.value)
  },
  pinyin5(e) {
    this.data.pinyin[4]=e.detail.value
    console.log(e.detail.value)
  },
  pinyin6(e) {
    this.data.pinyin[5]=e.detail.value
    console.log(e.detail.value)
  },

  
})