
// 没有数量限制
getwxacodeunlimit() {
  let _this = this
  wx.request({
    url:
      "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx0f96353582b8c7b0&secret=b94620f3e31e22c8964ae7dd3b7cc0d2", //如果找不到，去小程序后台复制
    header: {
      "content-type": "application/json",
    },
    method: "get",
    success: function (re) {
      let access_token = re.data.access_token //首先获取到  access_token
      let path = encodeURI("page/test/index")
      wx.request({
        // url: `https://api.weixin.qq.com/cgi-bin/wxaapp/createwxaqrcode?access_token=${第一步获取的access_token}`, //小程序二维码
        url: `https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token=${access_token}`, //小程序码
        method: "post",
        responseType: "arraybuffer", //关键是这里如果不写返回图片是二进制，写上就是64进制的图片
        data: {
          "scene": "page/test/index",
        },
        header: {
          "Content-Type": "application/json;charset=utf-8",
          "Accept": "application/json"
        },
        success: function (r) {
          console.log(r); //  获取到小程序码
          var base64 = wx.arrayBufferToBase64(r.data); //转换base 64
          _this.imgSrc = base64
          // 传递后端即可
        },
      });
    },
  });

}

generatQrcode() {
  let _this = this
  wx.request({
    url:
      "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx0f96353582b8c7b0&secret=b94620f3e31e22c8964ae7dd3b7cc0d2", //如果找不到，去小程序后台复制
    header: {
      "content-type": "application/json",
    },
    method: "get",
    success: function (re) {
      console.log(re.data.access_token); //首先获取到  access_token
      let access_token = re.data.access_token
      wx.request({
        // url: `https://api.weixin.qq.com/cgi-bin/wxaapp/createwxaqrcode?access_token=${第一步获取的access_token}`, //小程序二维码
        url: `https://api.weixin.qq.com/wxa/getwxacode?access_token=${access_token}`, //小程序码
        method: "post",
        responseType: "arraybuffer", //关键是这里如果不写返回图片是二进制，写上就是64进制的图片
        data: {
          path: `pages/test/index`, // 这个就是我们设置的地址
          width: 106, //大小
        },
        header: {
          "content-type": "application/json",
        },
        success: function (r) {
          console.log(r); //  获取到小程序码
          var base64 = wx.arrayBufferToBase64(r.data); //转换base 64
          _this.imgSrc = base64
          // 传递后端即可
        },
      });
    },
  });
},