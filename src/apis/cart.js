// 封装登入后购物车相关接口

import httpInstance from '@/utils/http'

export const insertCartAPI = ({ skuId, count }) => {
    return httpInstance({
        url: '/member/cart',
        method: 'post',
        data: {
            skuId,
            count
        }
    })
}

// 获取最新的购物车列表
export const findNewCartListAPI = () =>{
    return httpInstance({
        url:'/member/cart',
        method:'get'
    })
}


// 删除-购物车商品
export const delCartAPI = (ids) =>{
    return httpInstance({
        url:'/member/cart',
        method:'delete',
        data:{
            ids
        }

    })
}

// 合并购物车
export const mergeCartAPI = (data)=>{
    return httpInstance({
        url:'/member/cart/merge',
        method:'post',
        data
    })
}