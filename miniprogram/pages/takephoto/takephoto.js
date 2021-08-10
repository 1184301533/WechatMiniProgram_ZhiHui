// miniprogram/pages/takephoto/takephoto.js
const app = getApp()
var todayStep=0
var t1=0
var t2=0

Page({
  data: {
    cardCur: 0,
    stepRequire:'',
    consumeStep:0,
    watchBirdStage:'',
    filePath:'',
    beidaihe: [{
      id: 0,
      type: 'image',
      url: 'http://m.qpic.cn/psc?/V51o6AfO138S3m3lNdc10hOSZE3K0uof/45NBuzDIW489QBoVep5mcQPaXxlX9PZS4GOBagQIiiZ0gVFoiFGuGSV6Qm17tD6Ua6l40dC1tamBX4nuOMRARaX3aG1X1FVi8PetxBfCmf4!/b&bo=gAc4BIAHOAQBGT4!&rf=viewer_4&t=5'
    }, {
      id: 1,
        type: 'image',
        url: 'http://m.qpic.cn/psc?/V51o6AfO138S3m3lNdc10hOSZE3K0uof/45NBuzDIW489QBoVep5mcQPaXxlX9PZS4GOBagQIiiZ2ir6JIL0WRpDZKrgU35ehPB8J6fbV2hHUJHiAszegMgWy.kYIqc9Z*IzmsmVZuTY!/b&bo=HQtABgoSJQoBKWk!&rf=viewer_4&t=5',
    }, {
      id: 2,
      type: 'image',
      url: 'http://m.qpic.cn/psc?/V51o6AfO138S3m3lNdc10hOSZE3K0uof/45NBuzDIW489QBoVep5mccKOdfENq0Bh50WMLvBcroz2WM4*drLIr28bdCPs1Nzpf47i6KF9r6gcBb*nM8gArvGheAultdaxW9exfYBQPok!/b&bo=RAcWBEQHFgQBGT4!&rf=viewer_4&t=5'
    }, ],
    changli: [{
      id: 0,
      type: 'image',
      url: 'http://m.qpic.cn/psc?/V51o6AfO138S3m3lNdc10hOSZE3K0uof/45NBuzDIW489QBoVep5mccKOdfENq0Bh50WMLvBcroxtx2glzbEnRmCwuMT83p.nWiDI57QIQQIBlQRL22t3tfxwo3SXYB8120I2D*keG88!/b&bo=gAc4BIAHOAQBGT4!&rf=viewer_4&t=5'
    }, {
      id: 1,
        type: 'image',
        url: 'http://m.qpic.cn/psc?/V51o6AfO138S3m3lNdc10hOSZE3K0uof/45NBuzDIW489QBoVep5mccKOdfENq0Bh50WMLvBcrozRj17Orz5pfhMRIE.ELAIIBL6KJc2axWPGLfB7UWu.DV3jWoq6fFfsW5uMVO5ZAGI!/b&bo=gAc4BIAHOAQBGT4!&rf=viewer_4&t=5',
    }, {
      id: 2,
      type: 'image',
      url: 'http://m.qpic.cn/psc?/V51o6AfO138S3m3lNdc10hOSZE3K0uof/45NBuzDIW489QBoVep5mccKOdfENq0Bh50WMLvBcrowPO9KaspwQwADQw8sB3qMKH7iOhGeBEUy2Lcg1*lwVFUAvY1s.SbtS*ptVWsZPfgQ!/b&bo=gAKiAYACogEBGT4!&rf=viewer_4&t=5'
    }, ],
    shanhaiguan: [{
      id: 0,
      type: 'image',
      url: 'http://m.qpic.cn/psc?/V51o6AfO138S3m3lNdc10hOSZE3K0uof/45NBuzDIW489QBoVep5mcaSF2nqlIZvSz90ICpYqqOX080zEtgnGNCdIDGKErnus2b9p19Q9BJtItH1Cxlq453VlIkp7awDiGKwWukJhK9M!/b&bo=uAMOArgDDgIBGT4!&rf=viewer_4&t=5'
    }, {
      id: 1,
        type: 'image',
        url: 'http://m.qpic.cn/psc?/V51o6AfO138S3m3lNdc10hOSZE3K0uof/45NBuzDIW489QBoVep5mcaSF2nqlIZvSz90ICpYqqOVWGmD4FVO8mBc2yUtulmCgkLGaL7ccDPFFFNjNvA*yd5pT0JZo7UeP0O72ll.ctb0!/b&bo=IwT*ASME*wEBGT4!&rf=viewer_4&t=5',
    }, {
      id: 2,
      type: 'image',
      url: 'http://m.qpic.cn/psc?/V51o6AfO138S3m3lNdc10hOSZE3K0uof/45NBuzDIW489QBoVep5mcaSF2nqlIZvSz90ICpYqqOVIZ3iTGZ2rqy*EyVPMb6HgE5aJXc6*M1iL8ojB*SzfJgZxvJZeZkMq4220uUJhKr4!/b&bo=LwWAAoAHngMBGYw!&rf=viewer_4&t=5'
    }, ],
  },

  onLoad: function() {
    
    var date= new Date();
    if(app.globalData.reserve=='beidaihe'){
      this.setData({
        stepRequire:1000
      })
    }
    if(app.globalData.reserve=='changli'){
      this.setData({
        stepRequire:2000
      })
    }
    if(app.globalData.reserve=='shanhaiguan'){
      this.setData({
        stepRequire:3000
      })
    }
    

    this.setData({
      today:date.getFullYear() +'-' +(date.getMonth() + 1) +'-' + date.getDate()
    })
    var that=this
    wx.getWeRunData({
      success (res) {
        that.loadModal()
        wx.cloud.callFunction({
          name: 'weRun',
          data: {
            weRunData: wx.cloud.CloudID(res.cloudID)
          },
        }).then(resData=>{    
          //console.log(resData) //注意这里
           console.log(resData.result.event.weRunData.data.stepInfoList[30])//今天的步数
           todayStep=resData.result.event.weRunData.data.stepInfoList[30].step
           that.queryConsumeStep()
           })
      }
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
  showAnalyzeModal () {
    var date= new Date();
    t1=date.getTime()
    this.setData({
      loadAnalyzeModal: true
    })
  },
  hideAnalyzeModal () {
    var date= new Date();
    t2=date.getTime()
    var deltaT=t2-t1
    console.log(deltaT)
    // wx.showToast({
    //   title: '本次耗时：'+deltaT,
    //   icon: 'success',
    //   duration: 2000
    // })
      this.setData({
        loadAnalyzeModal: false
      })
  },
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },

  startObserveBird: function(){
    this.setData({
      watchBirdStage:1
    })
  //   if(stepRequire<=stepAvailable){
  //    wx.showModal({
  //      title: '你好，鸟人',
  //      content: '观鸟需行走'+stepRequire+'步\r\n您当前可用步数为'+stepAvailable+'\r\n点击确定观鸟',
  //      success (res) {
  //        if (res.confirm) {
  //          console.log('用户点击确定')
  //          that.upLoadPic()
  //        } else if (res.cancel) {
  //          console.log('用户点击取消')
  //        }
  //      }
  //    })
  //  }else{
  //   wx.showModal({
  //     title: '你好，鸟人',
  //     content: '观鸟需行走'+stepRequire+'步\r\n您当前可用步数为'+stepAvailable+'\r\n可用步数不足',
  //     showCancel:false,
  //     success (res) {
  //       if (res.confirm) {
  //         console.log('用户点击确定')
  //       } 
  //     }
  //   })
  //  }
  },
  takePhoto() {
    this.ctx = wx.createCameraContext()
    this.ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        console.log(res)
        this.setData({
          filePath: res.tempImagePath,
          watchBirdStage:2
        })
      }
    })
  },

  queryConsumeStep: function(){
    const db = wx.cloud.database()
    db.collection('visitReserveDetail').where({_openid:app.globalData.openid,date:this.data.today}).get({
      success: res => {
        console.log('[数据库] [查询记录] 成功: ', res)
        if(res.data.length!=0){
          console.log('今日已消耗步数',res.data[0].reserve)
          this.setData({
            consumeStep:res.data[0].reserve,
            _id:res.data[0]._id,
            stepAvailable:todayStep-res.data[0].reserve
          })

        }else{
          db.collection('visitReserveDetail').add({
            data: {
              date:this.data.today,
              species:[],
              reserve:0,
            },
               success: res => {
                this.setData({
                  stepAvailable:todayStep
                })
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

  addVisitReserveDetail: function(birdname){
    const db = wx.cloud.database()
    const stepRequire=this.data.stepRequire
    const _ = db.command
    const _id=this.data._id
    console.log(stepRequire)
    if(birdname=='haiou'){
      var birdnameinchinese='海鸥'
     }
     if(birdname=='zhendanyaque'){
      var birdnameinchinese='震旦鸦雀'
     }
     if(birdname=='xiangsiniao'){
      var birdnameinchinese='红嘴相思鸟'
     }
     if(birdname=='huatianji'){
      var birdnameinchinese='花田鸡'
     }
     if(birdname=='dandinghe'){
      var birdnameinchinese='丹顶鹤'
     }
     if(birdname=='bolao'){
      var birdnameinchinese='棕背伯劳'
     }
     if(birdname=='dabao'){
      var birdnameinchinese='大鸨'
     }
     if(birdname=='caiyu'){
      var birdnameinchinese='彩鹬'
     }
     if(birdname=='yiou'){
      var birdnameinchinese='遗鸥'
     }
     if(birdname=='bailu'){
      var birdnameinchinese='白鹭'
     }
     if(birdname=='liuying'){
      var birdnameinchinese='叽咋柳莺'
     }
     if(birdname=='heiguan'){
      var birdnameinchinese='黑鹳'
     }
     if(birdname=='shiji'){
      var birdnameinchinese='石鸡'
     }
     if(birdname=='diaoxiao'){
      var birdnameinchinese='雕鸮'
     }
     if(birdname=='qianya'){
      var birdnameinchinese='白眼潜鸭'
     }
     if(birdname=='baihe'){
      var birdnameinchinese='白鹤'
     }
    var that=this
    db.collection('visitReserveDetail').doc(_id).update({
      data: {
        reserve: _.inc(stepRequire),
        species:_.push(birdnameinchinese)
      },
      success: function(res) {
        
        wx.showModal({
          title: '卡片'+birdnameinchinese,
          content: '恭喜获得卡片，点击确定至我的卡片库',
          success (res) {
            if (res.confirm) {
              console.log('app.globalData.stage',app.globalData.stage)
              if(app.globalData.stage==1){
                console.log('转到阶段页面')
                wx.switchTab({
                  url: '../stage/stage',
                })
              }if(app.globalData.stage==2){
                console.log('转到我的卡片页面')
                wx.redirectTo({
                  url: '../me/myBirdCard/myBirdCard',
                })
              }
            } else if (res.cancel) {
            //   var pages = getCurrentPages();
            //   var beforePage = pages[pages.length - 2];
            //  // 调用列表页的获取数据函数
            //   beforePage.showMyRecord();
              that.setData({
                watchBirdStage:0,
                picLabels:''
              })
              console.log('用户点击取消')
              that.onLoad()
            }
          }
        })
        console.log('[数据库] [修改记录消耗步数] 成功: ',res)

      }
    })
  },

  incReserveRecord: function(){
    const db = wx.cloud.database()
    const _ = db.command
    const name=app.globalData.reserve

    if(name=='beidaihe'){
     this.seeBirdInBDHAndAddRecord()
    }
    if(name=='changli'){
      this.seeBirdInCLAndAddRecord()
    }
    if(name=='shanhaiguan'){
      this.seeBirdInSHGAndAddRecord()
    }

  },
  async upLoadRecordToDatabase(){
    const db = wx.cloud.database()
                  db.collection('record').add({
                  data: {
                       time:this.data.thistime,
                       PicPath: 'cloud://qhdyouthbird-g36pv.7168-qhdyouthbird-g36pv-1305024006/'+app.globalData.openid+this.data.thistime,
                       picLabels:this.data.picLabels,
                       reserve:app.globalData.reserve
                  },
                     success: res => {
                       this.incReserveRecord()
                       
                       
                      //  wx.showToast({
                      //   title: '新增记录成功',
                      //  })
                       
                      }
                  })
  },
  async picAnalyse(){
    return new Promise((resolve,rejcet)=>{
    // 调用云函数
    wx.cloud.callFunction({
      name: 'picAnalyse',
      data: { 
        "ImageBase64":this.data.imagebase64
      },
      success: res => {
        this.hideAnalyzeModal()
        console.log('[云函数] [picAnalyse] : ', res.result)
        var labels=[]
        for (var i = 0; i < res.result.Labels.length; ++i) {
          console.log(res.result.Labels[i].Name)
          if(res.result.Labels[i].SecondCategory=='鸟类'){
            var isBird=1
            labels.push(res.result.Labels[i])
          }
        }
        if(isBird==1){
          this.setData({
            picLabels:labels
          })
          console.log('图片内容为鸟')
          resolve(res)
        }else{
          wx.showModal({
            title: '未检测到鸟类',
            content: '请重新拍摄',
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
        console.error('[云函数] [picAnalyse] 调用失败', err)
       
      }
    })
  })
  },
  // async chooseTobase64AndUpL(){
  //   var date= new Date();
  //   return new Promise((resolve,rejcet)=>{
  //     var time=date.getTime();
  //     this.setData({
  //       thistime: time,
  //    })
  //     wx.chooseImage({
  //       success: chooseResult => {
  //         this.setData({
  //           filePath:chooseResult.tempFilePaths[0]
  //         })

  //         wx.getFileSystemManager().readFile({
  //           filePath: chooseResult.tempFilePaths[0], //选择图片返回的相对路径
  //           encoding: 'base64', //编码格式
  //           success: res => { //成功的回调
  //             console.log(res.data)
  //              this.setData({
  //                        imagebase64: res.data,
  //                     })
  //           }
  //         })
  //         wx.showModal({
  //           title: '上传图片',
  //           content: '确定要上传图片？',
  //           showCancel: true,//是否显示取消按钮
  //           cancelText:"否",//默认是“取消”
  //           cancelColor:'skyblue',//取消文字的颜色
  //           confirmText:"是",//默认是“确定”
  //           confirmColor: 'skyblue',//确定文字的颜色
  //           success: function (res) {
  //              if (res.cancel) {
  //                 //点击取消,默认隐藏弹框
  //              } else {
  //                 //点击确定
  //                 // 将图片上传至云存储空间
  //                 wx.cloud.uploadFile({
  //                   // 指定上传到的云路径
  //                   cloudPath: `${app.globalData.openid}${time}`,
  //                   // 指定要上传的文件的小程序临时文件路径
  //                   filePath: chooseResult.tempFilePaths[0],
  //                   // 成功回调
  //                   success: res => {
  //                     // this.setData({
  //                     //    cloudPath: `${app.globalData.openid}${time}`,
  //                     //    filePath: chooseResult.tempFilePaths[0],
  //                     // })
  //                     console.log('上传成功', res)
  //                     resolve(res)                                          

  //                   },
  //                 })
  //             }
  //           }
  //         })        
  //       },
  //     })
  //   })
  // },
  async Tobase64AndUpL(){
    var date= new Date();
    return new Promise((resolve,rejcet)=>{
      var time=date.getTime();
      this.setData({
        thistime: time,
     })
          wx.getFileSystemManager().readFile({
            filePath: this.data.filePath, //选择图片返回的相对路径
            encoding: 'base64', //编码格式
            success: res => { //成功的回调
              console.log(res.data)
               this.setData({
                         imagebase64: res.data,
                      })
                      wx.cloud.uploadFile({
                        // 指定上传到的云路径
                        cloudPath: `${app.globalData.openid}${time}`,
                        // 指定要上传的文件的小程序临时文件路径
                        filePath: this.data.filePath,
                        // 成功回调
                        success: res => {
                          // this.setData({
                          //    cloudPath: `${app.globalData.openid}${time}`,
                          //    filePath: chooseResult.tempFilePaths[0],
                          // })
                          console.log('上传成功', res)
                          resolve(res)                                          
    
                        },
                      })
            }
          })

        },
    )
    
  },
  // async PicChooseAndAnalyse(){
  //   const do1=await this.chooseTobase64AndUpL();
  //   const do2=await this.picAnalyse();
  //   const do3=await this.upLoadRecordToDatabase();

  // },
  async PicUpLoadAndAnalyse(){
    const do1=await this.Tobase64AndUpL();
    const do2=await this.picAnalyse();
    const do3=await this.upLoadRecordToDatabase();

  },
  upLoadPic: function(){
    this.showAnalyzeModal ()
    this.PicUpLoadAndAnalyse()
  },

 
  redirectToMe:function(){
    wx.switchTab({
      url: '../me/me',
    })
  },

  seeBirdInBDHAndAddRecord: function(){
    const db = wx.cloud.database()
    const _ = db.command
    const rand=Math.random()
    console.log('随机数值为：',rand)
    if(rand<0.6){
      var name='haiou'
    }else if(rand<0.8){
      var name='zhendanyaque'
    }else if(rand<0.9){
      var name='xiangsiniao'
    }else if(rand<0.97){
      var name='huatianji'
    }else{
      var name='dandinghe'
    }
    this.addVisitReserveDetail(name)
    if(name=='haiou'){
      db.collection('reserve').where({_openid:app.globalData.openid}).update({
        data: {
          'reserve.beidaihe' : _.inc(1),
          'bird.haiou': _.inc(1)
        },
        success: function(res) {
          console.log(res)
        }
      })
    }
    if(name=='zhendanyaque'){
      db.collection('reserve').where({_openid:app.globalData.openid}).update({
        data: {
          'reserve.beidaihe' : _.inc(1),
          'bird.zhendanyaque': _.inc(1)
        },
        success: function(res) {
          console.log(res)
        }
      })
    }
    if(name=='xiangsiniao'){
      db.collection('reserve').where({_openid:app.globalData.openid}).update({
        data: {
          'reserve.beidaihe' : _.inc(1),
          'bird.xiangsiniao': _.inc(1)
        },
        success: function(res) {
          console.log(res)
        }
      })
    }
    if(name=='huatianji'){
      db.collection('reserve').where({_openid:app.globalData.openid}).update({
        data: {
          'reserve.beidaihe' : _.inc(1),
          'bird.huatianji': _.inc(1)
        },
        success: function(res) {
          console.log(res)
        }
      })
    }
    if(name=='dandinghe'){
      db.collection('reserve').where({_openid:app.globalData.openid}).update({
        data: {
          'reserve.beidaihe' : _.inc(1),
          'bird.dandinghe': _.inc(1)
        },
        success: function(res) {
          console.log(res)
        }
      })
    }
  },
  seeBirdInCLAndAddRecord: function(){
    const db = wx.cloud.database()
    const _ = db.command
    const rand=Math.random()
    console.log('随机数值为：',rand)
    if(rand<0.3){
      var name='bolao'
    }else if(rand<0.6){
      var name='dabao'
    }else if(rand<0.9){
      var name='caiyu'
    }else{
      var name='yiou'
    }
    this.addVisitReserveDetail(name)
    if(name=='bolao'){
      db.collection('reserve').where({_openid:app.globalData.openid}).update({
        data: {
          'reserve.changli' : _.inc(1),
          'bird.bolao': _.inc(1)
        },
        success: function(res) {
          console.log(res)
        }
      })
    }
    if(name=='dabao'){
      db.collection('reserve').where({_openid:app.globalData.openid}).update({
        data: {
          'reserve.changli' : _.inc(1),
          'bird.dabao': _.inc(1)
        },
        success: function(res) {
          console.log(res)
        }
      })
    }
    if(name=='caiyu'){
      db.collection('reserve').where({_openid:app.globalData.openid}).update({
        data: {
          'reserve.changli' : _.inc(1),
          'bird.caiyu': _.inc(1)
        },
        success: function(res) {
          console.log(res)
        }
      })
    }
    if(name=='yiou'){
      db.collection('reserve').where({_openid:app.globalData.openid}).update({
        data: {
          'reserve.changli' : _.inc(1),
          'bird.yiou': _.inc(1)
        },
        success: function(res) {
          console.log(res)
        }
      })
    }
  },
  seeBirdInSHGAndAddRecord: function(){
    const db = wx.cloud.database()
    const _ = db.command
    const rand=Math.random()
    console.log('随机数值为：',rand)
    if(rand<0.3){
      var name='bailu'
    }else if(rand<0.5){
      var name='liuying'
    }else if(rand<0.7){
      var name='heiguan'
    }else if(rand<0.8){
      var name='shiji'
    }else if(rand<0.9){
      var name='diaoxiao'
    }else if(rand<0.95){
      var name='qianya'
    }else{
      var name='baihe'
    }
    this.addVisitReserveDetail(name)
    if(name=='bailu'){
      db.collection('reserve').where({_openid:app.globalData.openid}).update({
        data: {
          'reserve.shanhaiguan' : _.inc(1),
          'bird.bailu': _.inc(1)
        },
        success: function(res) {
          console.log(res)
        }
      })
    }
    if(name=='liuying'){
      db.collection('reserve').where({_openid:app.globalData.openid}).update({
        data: {
          'reserve.shanhaiguan' : _.inc(1),
          'bird.liuying': _.inc(1)
        },
        success: function(res) {
          console.log(res)
        }
      })
    }
    if(name=='heiguan'){
      db.collection('reserve').where({_openid:app.globalData.openid}).update({
        data: {
          'reserve.shanhaiguan' : _.inc(1),
          'bird.heiguan': _.inc(1)
        },
        success: function(res) {
          console.log(res)
        }
      })
    }
    if(name=='shiji'){
      db.collection('reserve').where({_openid:app.globalData.openid}).update({
        data: {
          'reserve.shanhaiguan' : _.inc(1),
          'bird.shiji': _.inc(1)
        },
        success: function(res) {
          console.log(res)
        }
      })
    }
    if(name=='diaoxiao'){
      db.collection('reserve').where({_openid:app.globalData.openid}).update({
        data: {
          'reserve.shanhaiguan' : _.inc(1),
          'bird.diaoxiao': _.inc(1)
        },
        success: function(res) {
          console.log(res)
        }
      })
    }
    if(name=='qianya'){
      db.collection('reserve').where({_openid:app.globalData.openid}).update({
        data: {
          'reserve.shanhaiguan' : _.inc(1),
          'bird.qianya': _.inc(1)
        },
        success: function(res) {
          console.log(res)
        }
      })
    }
    if(name=='baihe'){
      db.collection('reserve').where({_openid:app.globalData.openid}).update({
        data: {
          'reserve.shanhaiguan' : _.inc(1),
          'bird.baihe': _.inc(1)
        },
        success: function(res) {
          console.log(res)
        }
      })
    }
  },
  
})