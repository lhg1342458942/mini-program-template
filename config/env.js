const accountInfo = wx.getAccountInfoSync();
const env = accountInfo.miniProgram.envVersion;

const baseApi = {
  //开发版
  develop: "",
  //体验版
  trial: "",
  //正式版
  release: ""
};
export const BASE_URL = baseApi[env];
 