import {
  BASE_URL
} from "../config/env";
// 接口白名单
const whiteList = [""]
const timeout = 1000 * 30;


export const request = (options = {}) => {

  let header = {};
  // 获取token
  const token = wx.getStorageSync('token') ? wx.getStorageSync('token') : "";
  // 是否需要设置token
  const isToken = whiteList.includes(options.url);
  if (!isToken) {
    header = {
      'Authorization': 'Bearer ' + token
    }
  }

  return new Promise((resolve, reject) => {
    wx.showLoading({
      title: '加载中...',
      mask: true
    });
    wx.request({
      url: BASE_URL + options.url,
      method: options.method.toUpperCase() || 'GET',
      data: options.data,
      timeout: timeout,
      header: header,
      dataType: 'json',
      success: (response) => {
        const code = response.data.code;
        const message = response.data.msg;
        if (code === 500) {
          wx.showToast({
            title: message || '系统错误',
            icon: 'none'
          });
          reject('error');
        } else if (code === 401) {
          wx.showToast({
            title: message || '登录失效',
            icon: 'none'
          });
          resolve(response.data);
        } else {
          resolve(response.data);
        }
      },
      fail: (error) => {
        wx.showToast({
          title: '接口请求失败',
          icon: 'none',
          duration: 2000
        })
        reject(error.msg);
      },
      complete: () => {
        wx.hideLoading();
      }
    })
  });
}