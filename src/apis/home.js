import  httpInstance  from '@/utils/http'

// 获取banner

export function getBannerAPI(params= {}){
  // 默认为1 商品为2
    const { distributionSite = '1' } = params
    return httpInstance({
        url:'/home/banner',
        methods:'get',
        params:{
          distributionSite
        }
    })
} 

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const findNewAPI = () => {
    return httpInstance({
      url:'/home/new',
      methods:'get'
    })
  }

  /**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const getHotAPI = () => {
    return  httpInstance({
        url:'home/hot',
        method: 'get' 
    })
  }

  /**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () => {
    return httpInstance({
      url: '/home/goods'
    })
  }