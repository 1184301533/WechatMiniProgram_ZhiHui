// miniprogram/pages/stage/stage.js
const app=getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:0,
    questionNo:0,
    numList: [{
      name: '任务1'
    }, {
      name: '任务2'
    }, {
      name: '完成'
    }, ],
    swiperList: [{
      id:0,
      word:'彩鹬',
      answer:'彩鹬',
      picUrl:'http://www.cnbird.org.cn/mysite/jpg/2020-9/20209218263076.jpg',
      IUCN:'LC',
      color:'green',
      answerPic:'https://hanyu-word-gif.cdn.bcebos.com/b1343e651efbd4369a444416190c8d00b.gif',
      pinyin:'yù',
      explain:'鸟，体色暗淡，嘴细长，腿长，趾间没有蹼。常在浅水边或水田中吃小鱼、贝类、昆虫等，是候鸟。种类较多。'

    },{
      id:1,
      word:'大鸨',
      answer:'大宝',
      picUrl:'http://www.szbird.org.cn/cnbird/mysite/jpg/2017-12/201712197079060.jpg',
      IUCN:'VU',
      color:'yellow',
      answerPic:'https://hanyu-word-gif.cdn.bcebos.com/bef6379cf6b844e9c821eb47d15c3c889.gif',
      pinyin:'bǎo',
      explain:'鸟类。比雁略大，背上有褐色和黑色斑纹，常群栖草原地带，善走不善飞。是中国国家重点保护动物。'
    },{
      id:2,
      word:'黑鹳',
      answer:'黑鹳',
      picUrl:'http://www.szbird.org.cn/cnbird/mysite/jpg/2017-12/201712203146964.jpg',
      IUCN:'LC',
      color:'green',
      answerPic:'https://hanyu-word-gif.cdn.bcebos.com/be5a8ab4b4128419790f72bf78a74b830.gif',
      pinyin:'guàn',
      explain:'鸟，外形像白鹤，嘴长而直，羽毛灰色、白色或黑色。生活在水边，吃鱼、虾等。种类很多，如白鹳、黑鹳。'
    },{
      id:3,
      word:'雕鸮',
      answer:'雕枭',
      picUrl:'http://www.szbird.org.cn/cnbird/mysite/jpg/2012-8/20128297478517.jpg',
      IUCN:'LC',
      color:'green',
      answerPic:'https://hanyu-word-gif.cdn.bcebos.com/b71e7f6b382f24b3c9b348020e8b1a9af.gif',
      pinyin:'xiāo',
      explain:'鸟，头大，嘴短而弯曲。吃鼠、兔、昆虫等小动物，对农业有益。种类很多，如鸺鹠、猫头鹰等。'
    },{
      id:4,
      word:'东方鸻',
      answer:'东方恒',
      picUrl:'http://www.szbird.org.cn/cnbird/mysite/jpg/2017-12/201712225842215.jpg',
      IUCN:'LC',
      color:'green',
      answerPic:'https://hanyu-word-gif.cdn.bcebos.com/b9129cb6659484bae9dffd1a16cbe1642.gif',
      pinyin:'héng',
      explain:'鸟，体形较小，嘴短而直，前端略膨大，翅膀的羽毛长。只有前趾，没有后趾。多生活在水边、沼泽和海岸。'
    },{
      id:5,
      word:'叽咋柳莺',
      answer:'叽喳柳莺',
      picUrl:'http://www.szbird.org.cn/cnbird/mysite/jpg/2008-1/200810194821562.jpg',
      IUCN:'LC',
      color:'green',
      answerPic:'https://hanyu-word-gif.cdn.bcebos.com/b49c756f0427711e580cac8e0eb15ce01.gif',
      pinyin:'zhā',
      explain:'〔～呼〕a.吆喝；b.炫耀。均亦作“咋唬”（“呼”、“唬”均读轻声）。'
    }],
    wenhaoP:'http://m.qpic.cn/psc?/V51o6AfO138S3m3lNdc10hOSZE3K0uof/45NBuzDIW489QBoVep5mcRzNIKAG99KUpSUAv7UKNOsWwxFhEFBQBvb6YMbtRPH3mcr.IIpBxxStOzG.BTxBJk6J17npatdEpRC26luDRi8!/b&bo=OAT3BQAAAAABF*4!&rf=viewer_4&t=5',
    haiouP:'http://m.qpic.cn/psc?/V51o6AfO138S3m3lNdc10hOSZE3K0uof/45NBuzDIW489QBoVep5mcUeHJH9diegh0AmHsvY6rKSJai3hFIORvhBBu7u8kYbActyYyJeVKbGY*5pu8oBRkyJ6.3RVRZOEb7tJ.PEUe60!/b&bo=QAbXCLAJtA0BGac!&rf=viewer_4&t=5',
    zhendanyaqueP:'http://m.qpic.cn/psc?/V51o6AfO138S3m3lNdc10hOSZE3K0uof/45NBuzDIW489QBoVep5mcRXUS6oAip7UUv.hnHknQUjrwXmd*LJMdieVKl7fPiaH*2yH3tbYlPcD95szpEeOZbJZvqvYI7RQswSJrWilM.w!/b&bo=QAbXCLAJtA0BGac!&rf=viewer_4&t=5',
    xiangsiniaoP:'http://m.qpic.cn/psc?/V51o6AfO138S3m3lNdc10hOSZE3K0uof/45NBuzDIW489QBoVep5mcTEJEOxUAWvBcT*iKUHHURiqG57O*3OPgwEcSYfvHwibMQe0G76*kjkvVqTKhPxoDjJZR7bHa*e0EENN5gDNo0c!/b&bo=OAT3BQAAAAABF*4!&rf=viewer_4&t=5',
    huatianjiP:'http://m.qpic.cn/psc?/V51o6AfO138S3m3lNdc10hOSZE3K0uof/45NBuzDIW489QBoVep5mcTEJEOxUAWvBcT*iKUHHURjqUUsRUdBycg0BKBCzfE9shTXNv05HZElimfniBIMzrEGaMvdFo5wdOJqmU*qVKUs!/b&bo=OAT3BQAAAAABF*4!&rf=viewer_4&t=5',
    dandingheP:'http://m.qpic.cn/psc?/V51o6AfO138S3m3lNdc10hOSZE3K0uof/45NBuzDIW489QBoVep5mcTEJEOxUAWvBcT*iKUHHURjGVX5dnIvxhrMtr*23k5jxYAcMCrl59fxRSRN6H2A3KTwKODoY18X2Q*X9*kH09WU!/b&bo=OAT3BQAAAAABF*4!&rf=viewer_4&t=5',
    bolaoP:'http://m.qpic.cn/psc?/V51o6AfO138S3m3lNdc10hOSZE3K0uof/45NBuzDIW489QBoVep5mcTWmc8p125QCVb*6VyPEN1luHh5mwu.KOeso9sytjVit4nRgcgRujSNZC3gM3a.hn*HkAR4Y4fL0zW1MS75JCe4!/b&bo=OAT3BQAAAAABF*4!&rf=viewer_4&t=5',
    dabaoP:'http://m.qpic.cn/psc?/V51o6AfO138S3m3lNdc10hOSZE3K0uof/45NBuzDIW489QBoVep5mcUk*4.dhBukgDwW3jDW9M4Y1zA*IN2lKLpdMMsrv82j5PDerIr3QHdAtezvtB6cGaXg7lN84V9Hh4UCouCdGwGk!/b&bo=OAT3BQAAAAABF*4!&rf=viewer_4&t=5',
    caiyuP:'http://m.qpic.cn/psc?/V51o6AfO138S3m3lNdc10hOSZE3K0uof/45NBuzDIW489QBoVep5mcUeHJH9diegh0AmHsvY6rKRcOj12CAJ1AXpH1EdMtKj3cw.2CWfRgR53NsWPxXn.wBZqWECJMxZzcwmHYjqtFoo!/b&bo=QAbXCLAJtA0BGac!&rf=viewer_4&t=5',
    yiouP:'http://m.qpic.cn/psc?/V51o6AfO138S3m3lNdc10hOSZE3K0uof/45NBuzDIW489QBoVep5mcTEJEOxUAWvBcT*iKUHHURj3gFSKyiwePmX2JBBvTMSw*naixFJl6VYBTZqhWnezfS2KqdMZp5o499fkRKnmvfU!/b&bo=OAT3BQAAAAABF*4!&rf=viewer_4&t=5',
    bailuP:'http://m.qpic.cn/psc?/V51o6AfO138S3m3lNdc10hOSZE3K0uof/45NBuzDIW489QBoVep5mcUk*4.dhBukgDwW3jDW9M4bw6dByGXvcvz16gU3ahhjODQm*IfIBy6hWNRAPVAAHuei1Py72nublyC3Yo11RKsA!/b&bo=OAT3BQAAAAABF*4!&rf=viewer_4&t=5',
    liuyingP:'http://m.qpic.cn/psc?/V51o6AfO138S3m3lNdc10hOSZE3K0uof/45NBuzDIW489QBoVep5mcRXUS6oAip7UUv.hnHknQUj17UJWHbw5im0HDWwdME.bPOWbaCT*R1KuvCq49WSev29jHmjbREazyz446HnzJWQ!/b&bo=QAbXCLAJtA0BGac!&rf=viewer_4&t=5',
    heiguanP:'http://m.qpic.cn/psc?/V51o6AfO138S3m3lNdc10hOSZE3K0uof/45NBuzDIW489QBoVep5mcRXUS6oAip7UUv.hnHknQUgZxr4S4FgMklZjkixJzRtHTndOHOWumcWNOStDz8jCTtcJGcf031z0paskiGmKuOA!/b&bo=QAbXCLAJtA0BGac!&rf=viewer_4&t=5',
    shijiP:'http://m.qpic.cn/psc?/V51o6AfO138S3m3lNdc10hOSZE3K0uof/45NBuzDIW489QBoVep5mcRXUS6oAip7UUv.hnHknQUhH5*vwRmHFUcacVbsoLblt6H.H0hXXBYH7uY1Rl3yRlO0vEMvt5Nx5mK9It0Bugcw!/b&bo=QAbXCLAJtA0BGac!&rf=viewer_4&t=5',
    diaoxiaoP:'http://m.qpic.cn/psc?/V51o6AfO138S3m3lNdc10hOSZE3K0uof/45NBuzDIW489QBoVep5mcSuDSW6M2kSorAAOM2ig1DZub*jk*T4xKooYah74BseMqRHMBhbAjdFlkBVwlwKoJwmHukTPsdq0UjByvtrVHDo!/b&bo=1whABrQNsAkBGac!&rf=viewer_4&t=5',
    qianyaP:'http://m.qpic.cn/psc?/V51o6AfO138S3m3lNdc10hOSZE3K0uof/45NBuzDIW489QBoVep5mcUk*4.dhBukgDwW3jDW9M4btQVTQsTXcksjNHBA*VGQM12A3UyJYLR56aGViMPE5ogNBftVxlu06Nz9JYQuFGqI!/b&bo=OAT3BQAAAAABF*4!&rf=viewer_4&t=5',
    baiheP:'http://m.qpic.cn/psc?/V51o6AfO138S3m3lNdc10hOSZE3K0uof/45NBuzDIW489QBoVep5mcUk*4.dhBukgDwW3jDW9M4ZwRSrd1fPGNkdIqvM8f4T.xPmXfpuj4Zh*kepYzOsRaBOpMzSPcU6Mm7P0iE9Ke.A!/b&bo=WgJTAwAAAAABFzg!&rf=viewer_4&t=5',
    haiou:0,
    zhendanyaque:0,
    xiangsiniao:0,
    huatianji:0,
    dandinghe:0,
    bolao:0,
    dabao:0,
    caiyu:0,
    yiou:0,
    bailu:0,
    liuying:0,
    heiguan:0,
    shiji:0,
    diaoxiao:0,
    qianya:0,
    baihe:0,
    notCollected:16,
    Collected:0,
    cardNum:0

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadModal()
      this.setData({
        num:app.globalData.stage,
        userInfo:app.globalData.userInfo
      })
      wx.showShareMenu({
        withShareTicket: true,
        menus: ['shareAppMessage', 'shareTimeline']
      })
  },
  onShareAppMessage: function () {
    return {
      title: '快来和我一起观鸟吧！',
    }
  },
  onShareTimeline: function () {
    return {
      title: '快来和我一起观鸟吧！',
    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow(){
    console.log('app.globalData.rank',app.globalData.rank)
    this.setData({
      num:app.globalData.stage,
      userInfo:app.globalData.userInfo
    })
    if(app.globalData.stage==1){
      this.queryMyBirdCard()
    }if(app.globalData.stage==2){
      this.setData({
        rank:app.globalData.rank
      })
      this.queryRecordCount()
    }
    this.getTabBar().setData({
      selected: 3
    })
  },
  loadModal () {
    this.setData({
      loadModal: true
    })
    setTimeout(()=> {
      this.setData({
        loadModal: false
      })
    }, 2000)
  },
  showLoadModal () {
    this.setData({
      loadRecordModal: true
    })
  },
  hideLoadModal () {
      this.setData({
        loadRecordModal: false
      })
  },
  showAnalyzeModal () {
    this.setData({
      loadAnalyzeModal: true
    })
  },
  hideAnalyzeModal () {
      this.setData({
        loadAnalyzeModal: false
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
  queryRecordCount:function(){
    const db = wx.cloud.database()
    var that=this
    // db.collection('reserve').where({_openid:app.globalData.openid}).get({
    //   success: function(res) {
    //     that.setData({
    //       rank:res.data[0].rank
    //     })
    //   },
    //   fail: console.error
    // })
    db.collection('reserve').count({
      success: function(res) {
        that.setData({
          userNumber:res.total
        })
      },
      fail: console.error
    })
    db.collection('reserve').where({stage:2}).count({
      success: function(res) {
        that.setData({
          finishedUserNumber:res.total
        })
      },
      fail: console.error
    })

  },
  startRecord:function(){
    this.showLoadModal()
    const recorderManager = wx.getRecorderManager()
    const options = {
      duration: 10000,
      sampleRate: 44100,
      numberOfChannels: 1,
      encodeBitRate: 192000,
      format: 'mp3',
      frameSize: 50
    }
    recorderManager.start(options)
    recorderManager.onStart(() => {
      console.log('recorder start')
    })
   
  },
  endRecord:function(e){
    this.showAnalyzeModal()
    this.hideLoadModal()
    const db = wx.cloud.database()
    var that=this
    console.log(e.currentTarget.id)
    const recorderManager = wx.getRecorderManager()
    recorderManager.stop()
    recorderManager.onStop((res) => {
      console.log('recorder stop', res)
      wx.getFileSystemManager().readFile({
        filePath: res.tempFilePath, //选择录音返回的相对路径
        encoding: 'base64', //编码格式
        success: res => { //成功的回调
          
          console.log(res.data)

                  wx.cloud.callFunction({
                    name: 'recordAnalyse',
                    data: { 
                      "recordBase64":res.data
                    },
                    success: res => {
                      that.hideAnalyzeModal()
                      console.log('[云函数] [recordAnalyse] 调用成功 : ', res.result)
                      if(res.result.Result==e.currentTarget.id){
                        if(that.data.questionNo<5){
                          that.setData({
                            questionNo:that.data.questionNo+1,
                          })
                          wx.showModal({
                            title: '回答正确',
                            content: '请继续下一题',
                            showCancel:false,
                            success (res) {
                              if (res.confirm) {
                                console.log('用户点击确定')
                              } 
                            }
                          })
                        }else{
                          console.log('任务一完成')
                          
                          db.collection('reserve').where({_openid:app.globalData.openid}).update({
                            data: {
                              stage:1,
                            },
                            success: function(res) {
                              console.log(res)
                              wx.showModal({
                                title: '任务一完成',
                                content: '请进行任务二',
                                showCancel:false,
                                success (res) {
                                  that.setData({
                                    num: 1
                                  })
                                  app.globalData.stage=1
                                  if (res.confirm) {
                                    console.log('用户点击确定')
                                  } 
                                }
                              })
                            }
                          })                        
                        }
                        
                      }else{
                        wx.showModal({
                          title: '回答错误，请重新作答',
                          content: '识别结果：'+res.result.Result,
                          showCancel:false,
                          success (res) {
                            if (res.confirm) {
                              console.log('用户点击确定')
                            }
                          }
                        })
                      }
                     
                    },
                    fail: err => {
                      console.error('[云函数] [recordAnalyse] 调用失败', err)
                    }
                  })
        }
      })
    })
  },
  redirectToMe:function(){
    wx.switchTab({
      url: '../me/me',
    })
  },
  addRank:function(){
    const db = wx.cloud.database()
    var that=this
    console.log('addrank函数触发')
    db.collection('reserve').where({stage:2}).count({
      success: function(res) {
        console.log(res.total)
        that.setData({
          rank:res.total
        })
        db.collection('reserve').where({_openid:app.globalData.openid}).update({
          data: {
            rank:res.total
          },
          success: function(res) {
            console.log('rank更新成功')
            console.log(res)
            that.queryRecordCount()
          }
        })
      },
      fail: console.error
    })
    
  },
  setBirdCardData: function(){
    const db = wx.cloud.database()
    var that=this
    console.log(app.globalData.notCollected)
    if(app.globalData.notCollected==0){
      console.log('全部收集函数触发')
      db.collection('reserve').where({_openid:app.globalData.openid}).update({
        data: {
          stage:2
        },
        success: function(res) {
          console.log(res)
          that.addRank()
          wx.showModal({
            title: '任务二完成',
            content: '恭喜，您已完成全部任务',
            showCancel:false,
            success (res) {
              that.setData({
                num: 2
              })
              app.globalData.stage=2
              if (res.confirm) {
                console.log('用户点击确定')

              } 
            }
          })
        }
      })
    }
    this.setData({
      haiou:app.globalData.myBirdCard.haiou,
      zhendanyaque:app.globalData.myBirdCard.zhendanyaque,
      xiangsiniao:app.globalData.myBirdCard.xiangsiniao,
      huatianji:app.globalData.myBirdCard.huatianji,
      dandinghe:app.globalData.myBirdCard.dandinghe,
      bolao:app.globalData.myBirdCard.bolao,
      dabao:app.globalData.myBirdCard.dabao,
      caiyu:app.globalData.myBirdCard.caiyu,
      yiou:app.globalData.myBirdCard.yiou,
      bailu:app.globalData.myBirdCard.bailu,
      liuying:app.globalData.myBirdCard.liuying,
      heiguan:app.globalData.myBirdCard.heiguan,
      shiji:app.globalData.myBirdCard.shiji,
      diaoxiao:app.globalData.myBirdCard.diaoxiao,
      qianya:app.globalData.myBirdCard.qianya,
      baihe:app.globalData.myBirdCard.baihe,
      notCollected:app.globalData.notCollected,
      Collected:16-app.globalData.notCollected,
      cardNum:app.globalData.cardNum
    })
  },
  queryMyBirdCard: function(){
    const db = wx.cloud.database()
     db.collection('reserve').where({_openid:app.globalData.openid}).get({
       success: res => {
         app.globalData.myBirdCard=res.data[0].bird
         console.log('app.globalData.myBirdCard',app.globalData.myBirdCard)
         app.globalData.notCollected=16
         app.globalData.cardNum=0
         console.log('app.globalData.notCollected',app.globalData.notCollected)
         if(res.data[0].bird){
          if(res.data[0].bird.haiou){
            app.globalData.notCollected-=1
            app.globalData.cardNum+=res.data[0].bird.haiou
           }if(res.data[0].bird.zhendanyaque){
            app.globalData.notCollected-=1
            app.globalData.cardNum+=res.data[0].bird.zhendanyaque
           }if(res.data[0].bird.xiangsiniao){
            app.globalData.notCollected-=1
            app.globalData.cardNum+=res.data[0].bird.xiangsiniao
           }if(res.data[0].bird.huatianji){
            app.globalData.notCollected-=1
            app.globalData.cardNum+=res.data[0].bird.huatianji
           }if(res.data[0].bird.dandinghe){
            app.globalData.notCollected-=1
            app.globalData.cardNum+=res.data[0].bird.dandinghe
           }if(res.data[0].bird.bolao){
            app.globalData.notCollected-=1
            app.globalData.cardNum+=res.data[0].bird.bolao
           }if(res.data[0].bird.dabao){
            app.globalData.notCollected-=1
            app.globalData.cardNum+=res.data[0].bird.dabao
           }if(res.data[0].bird.caiyu){
            app.globalData.notCollected-=1
            app.globalData.cardNum+=res.data[0].bird.caiyu
           }if(res.data[0].bird.yiou){
            app.globalData.notCollected-=1
            app.globalData.cardNum+=res.data[0].bird.yiou
           }if(res.data[0].bird.bailu){
            app.globalData.notCollected-=1
            app.globalData.cardNum+=res.data[0].bird.bailu
           }if(res.data[0].bird.liuying){
            app.globalData.notCollected-=1
            app.globalData.cardNum+=res.data[0].bird.liuying
           }if(res.data[0].bird.heiguan){
            app.globalData.notCollected-=1
            app.globalData.cardNum+=res.data[0].bird.heiguan
           }if(res.data[0].bird.shiji){
            app.globalData.notCollected-=1
            app.globalData.cardNum+=res.data[0].bird.shiji
           }if(res.data[0].bird.diaoxiao){
            app.globalData.notCollected-=1
            app.globalData.cardNum+=res.data[0].bird.diaoxiao
           }if(res.data[0].bird.qianya){
            app.globalData.notCollected-=1
            app.globalData.cardNum+=res.data[0].bird.qianya
           }if(res.data[0].bird.baihe){
            app.globalData.notCollected-=1
            app.globalData.cardNum+=res.data[0].bird.baihe
           }
         }
         console.log('app.globalData.notCollected',app.globalData.notCollected)
         this.setBirdCardData()
         console.log('[数据库] [查询记录] 成功：', res)
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
 
})