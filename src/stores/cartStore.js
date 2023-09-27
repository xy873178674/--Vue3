// 封装购物车模块
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
    // 1、 定义state - cartList
    const cartList = ref([])

    // 2、 定义action 
    const addCart = (goods) =>{
        // 添加购物车操作
        // 以添加过 - count+1
        // 没添加过 - 直接push
        // 通过匹配传过来的商品对象中的skuId能不能再cartList中找到，找到了就是添加过的商品
     const item =   cartList.value.find((item)=>goods.skuId === item.skuId)
        if(item){
          //找到了
          item.count++ 
        //   console.log('以添加过',goods);
        }else{
          //没找到
          cartList.value.push(goods) 
        //   console.log('没添加过',goods);

        }
    }
    // 删除购物车
    const delCart = (skuId)=>{
        // 1、 找到要删除的下标项 - splice
        // 2、 使用数组的过滤方法 - filter

       const idx = cartList.value.findIndex((item) => skuId === item.skuId)
       cartList.value.splice(idx,1)
    }
    // 计算属性
    // 1、总数 所有count之和
    const allCount = computed(()=>cartList.value.reduce((a,c)=> a + c.count, 0))
    // 2、总价 所有项的count*price之和
    const allPrice = computed(()=>cartList.value.reduce((a,c)=> a + c.count*c.price, 0))
    return{
        cartList,
        addCart,
        delCart,
        allCount,
        allPrice
    }
},{
    persist: true,
})