// 封装所有和用户相关的接口函数
import httpInstance from "../utils/http";

export const loginAPI =( {account, password})=>{
    return httpInstance({
        url:'/login',
        method:'post',
        data:{
            account,
            password
        }
    })
}

// 个人中心模块猜你喜欢
export const getLikeListAPI = ({ limit = 4 }) => {
    return httpInstance({
      url:'/goods/relevant',
      params: {
        limit 
      }
    })
  }