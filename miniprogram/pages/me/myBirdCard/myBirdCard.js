// miniprogram/pages/me/myBirdCard/myBirdCard.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
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
    baihe:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.queryMyBirdCard()
  },

  setBirdCardData: function(){
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
      baihe:app.globalData.myBirdCard.baihe
    })
  },
  queryMyBirdCard: function(){
    const db = wx.cloud.database()
     db.collection('reserve').where({_openid:app.globalData.openid}).get({
       success: res => {
         app.globalData.myBirdCard=res.data[0].bird
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