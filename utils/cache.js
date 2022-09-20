class LocalCache {
  // constructor(expire = 3600) {
  //   this.expire = new Date().getTime() + expire * 1000;
  // }

  setItem(key, value, expire = 0) {
    const data = {
      expire,
      value
    };

    try {
      wx.setStorageSync(key, data);
    } catch (error) {

    }
  }

  getItem(key) {
    if (this.has(key)) {
      return wx.getStorageSync(key).value;
    }
    return null;
  }
  // 永久

  forever(key, value) {

    let expire = new Date().getTime() + 9999999999 * 1000;
    let data = {
      expire,
      value
    };
    // 设置缓存
    try {
      wx.setStorageSync(key, data);
    } catch (error) {}

  }
  // 判断是否存在缓存

  hasItem(key) {

    // 获取当前时间
    let time = new Date().getTime();
    // 缓存数据
    let data = wx.getStorageSync(key);
    if (data != '') {
      if (time > data.expire) { // 缓存过期
        // 删除过期缓存
        wx.removeStorageSync(key);
        return false;
      }
      return true;
    }
    return false;
  }

  // 删除

  delItem(key) {
    try {
      wx.removeStorageSync(key);
    } catch (error) {

    }
  }

}

export default new LocalCache()