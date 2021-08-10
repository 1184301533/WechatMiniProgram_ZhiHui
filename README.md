## 智喙观鸟家项目说明

项目中运用了腾讯云AI的语音识别和图像标签能力，调用方法对应recordAnalyse和picAnalyse两个云函数。测试时请在
该云函数中填写自己腾讯与控制台的secretID和secretKey

### 扫描二维码体验小程序：

![MiniProgramQRCode](https://i.loli.net/2021/08/10/ugiIWrhTmltMeLH.jpg)

项目使用了小程序自带云开发功能
-数据库集合有
record
reserve
visitReserveDetail
-还有三个用于存储观鸟名词的集合
wordsBirdWatching
wordsEcologyBehavior
wordsShape
