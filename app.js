// app.js
import {
  login
} from "./api/index"

App({
  onLaunch() {

    // 登录
    wx.login({
      success: async res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        // const resp = login({
        //   code: res.code
        // });
      }
    })
  },
  globalData: {
    userInfo: null
  }
})