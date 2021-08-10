// miniprogram/pages/dictionary/dictionary.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    category:1,
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    hidden: true

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.queryWords()

  },
  onReady() {
    let that = this;
    wx.createSelectorQuery().select('.indexBar-box').boundingClientRect(function(res) {
      that.setData({
        boxTop: res.top
      })
    }).exec();
    wx.createSelectorQuery().select('.indexes').boundingClientRect(function(res) {
      that.setData({
        barTop: res.top
      })
    }).exec()
  },
  //获取文字信息
  getCur(e) {
    this.setData({
      hidden: false,
      listCur: this.data.list[e.target.id].alpha,
    })
  },

  setCur(e) {
    this.setData({
      hidden: true,
      listCur: this.data.listCur
    })
  },
  //滑动选择Item
  tMove(e) {
    let y = e.touches[0].clientY,
      offsettop = this.data.boxTop,
      that = this;
    //判断选择区域,只有在选择区才会生效
    if (y > offsettop) {
      let num = parseInt((y - offsettop) / 20);
      this.setData({
        listCur: that.data.list[num]
      })
    };
  },

  //触发全部开始选择
  tStart() {
    this.setData({
      hidden: false
    })
  },

  //触发结束选择
  tEnd() {
    this.setData({
      hidden: true,
      listCurID: this.data.listCur
    })
  },
  indexSelect(e) {
    let that = this;
    let barHeight = this.data.barHeight;
    let list = this.data.list;
    let scrollY = Math.ceil(list.length * e.detail.y / barHeight);
    for (let i = 0; i < list.length; i++) {
      if (scrollY < i + 1) {
        that.setData({
          listCur: list[i],
          movableY: i * 20
        })
        return false
      }
    }
  },

  onChoose(e) {
    wx.showModal({
      title: this.data.wordName,
      content: e.currentTarget.id,
      showCancel:false,
      success (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } 
      }
    })
  },
  setWordName:function(e){
    this.setData({
      wordName:e.currentTarget.id
    })

  },

  queryWords: function(){
    const db = wx.cloud.database()
  
    if(this.data.category==1){
      var total=34
      const batchTimes = Math.ceil(total / 20)
      var arraypro=[]          // 定义空数据 用来存储之后的数据
      var x=0
      for (let i = 0; i < batchTimes; i++) {
      db.collection('wordsShape').skip(i*20).get({
        success: res => {
          x++
          for (let j = 0; j < res.data.length; j++) {
            arraypro.push(res.data[j])
          }
          if(x==batchTimes){
            this.getWords(arraypro)
          }
         console.log('[数据库] [查询记录] 成功: ', arraypro)
       },
        fail: err => {
          wx.showToast({
            icon: 'none',
            title: '查询记录失败'
          })
          console.error('[数据库] [查询记录] 失败：', err)
        }
      })
    }
    }
  
    if(this.data.category==2){
      var total=28
      const batchTimes = Math.ceil(total / 20)
      var arraypro=[]          // 定义空数据 用来存储之后的数据
      var x=0
      for (let i = 0; i < batchTimes; i++) {
      db.collection('wordsEcologyBehavior').skip(i*20).get({
        success: res => {
          x++
          for (let j = 0; j < res.data.length; j++) {
            arraypro.push(res.data[j])
          }
          if(x==batchTimes){
            this.getWords(arraypro)
          }
         console.log('[数据库] [查询记录] 成功: ', arraypro)
       },
        fail: err => {
          wx.showToast({
            icon: 'none',
            title: '查询记录失败'
          })
          console.error('[数据库] [查询记录] 失败：', err)
        }
      })
    }
    }
    if(this.data.category==3){
      db.collection('wordsBirdWatching').get({
        success: res => {
          this.getWords(res.data)
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
    }

  },

  getWords(res) {
    const _this = this
    const words = res
    console.log(words)
        // 按拼音排序
        words.sort((c1, c2) => {
          let pinyin1 = c1.pinyin.join('')
          let pinyin2 = c2.pinyin.join('')
          return pinyin1.localeCompare(pinyin2)
        })
        // 添加首字母
        const map = new Map()
        for (const word of words) {
          const alpha = word.pinyin[0].charAt(0).toUpperCase()
          if (!map.has(alpha)) map.set(alpha, [])
          map.get(alpha).push({ name: word.fullName,detail:word.detail})
        }
    
        const keys = []
        for (const key of map.keys()) {
          keys.push(key)
        }
        keys.sort()
    
        const list = []
        for (const key of keys) {
          list.push({
            alpha: key,
            subItems: map.get(key)
          })
        }

        _this.setData({list})
  },

  category1() {
    this.setData({
      category:1
    })
    this.onLoad()
    console.log(this.data.category)
  },
  category2() {
    this.setData({
      category:2
    })
    this.onLoad()
    console.log(this.data.category)
  },
  category3() {
    this.setData({
      category:3
    })
    this.onLoad()
    console.log(this.data.category)
  },

  
})