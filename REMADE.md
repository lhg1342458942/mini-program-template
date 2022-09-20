>区分开发环境，生成环境请求路径	utils/env.js

```javascript
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

export const BASE_URL = baseApi[env]
```

> 接口交互

1. 接口定义

   ```javascript
   // 登录
   export function login(data) {
     return request({
       url: "/login",
       method: "post",
       data
     })
   }
   ```

   

2. 接口调用

   ```javascript
   import {login} from "./api/index.js"
   
   async onLoad(){
       const resp = await login({
           username,
           password
       });
   }
   ```



>在页面中使用使用dayjs

```javascript
import dayJs from "./lib/dayjs.min";

dayjs().format();                                     // 2020-09-08T13:42:32+08:00
dayjs().format('YYYY-MM-DD');                         // 2020-09-08
dayjs().format('YYYY-MM-DD HH:mm:ss');                // 2020-09-08 13:47:12
dayjs(1318781876406).format('YYYY-MM-DD HH:mm:ss');   // 2011-10-17 00:17:56
```

