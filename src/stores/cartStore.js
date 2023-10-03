// 封装购物车模块

import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useUserStore } from './userStore'
import { insertCartAPI, findNewCartListAPI, delCartAPI } from '../apis/cart'

export const useCartStore = defineStore('cart', () => {
  const useStore = useUserStore()
  const isLogin = computed(() => useStore.userInfo.token)
  // 1、 定义state - cartList
  const cartList = ref([])

  // 获取最新购物车的action
  const updateNewList = async () => {
    const res = await findNewCartListAPI()
    cartList.value = res.result
  }

  // 2、 定义action 
  const addCart = async (goods) => {
    // 添加购物车操作
    // 以添加过 - count+1
    // 没添加过 - 直接push
    // 通过匹配传过来的商品对象中的skuId能不能再cartList中找到，找到了就是添加过的商品
    const { skuId, count } = goods
    if (isLogin.value) {
      // 登入之后的加入购物车逻辑
      await insertCartAPI({ skuId, count })
      updateNewList()
    } else {
      const item = cartList.value.find((item) => goods.skuId === item.skuId)
      if (item) {
        //找到了
        item.count++
        //   console.log('以添加过',goods);
      } else {
        //没找到
        cartList.value.push(goods)
        //   console.log('没添加过',goods);

      }
    }
  }
  // 删除购物车
  const delCart = async (skuId) => {
    if (isLogin.value) {
      // 调用接口实现接口购物车中的删除功能
      await delCartAPI([skuId])
      updateNewList()
    } else {
      // 1、 找到要删除的下标项 - splice
      // 2、 使用数组的过滤方法 - filter
      const idx = cartList.value.findIndex((item) => skuId === item.skuId)
      cartList.value.splice(idx, 1)
    }
  }

  const clearCart = () => {
    cartList.value = []
  }
  // 单选功能
  const singleCheck = (skuId, selected) => {
    // 通过skuId找到要修改的那一项 然后把它的selected修改为传过来的selected
    const item = cartList.value.find((item) => item.skuId === skuId)
    item.selected = selected
  }
  // 全选功能action
  const allCheck = (selected) => {
    // 把cartList中的每一项的selected都设置为当前的全选框状态
    cartList.value.forEach(item => item.selected = selected)
  }



  // 计算属性
  // 1、总数 所有count之和
  const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))
  // 2、总价 所有项的count*price之和
  const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0))
  // 3. 已选择数量
  const selectedCount = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count, 0))
  // 4. 已选择商品价钱合计
  const selectedPrice = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count * c.price, 0))
  // 是否全选计算属性
  const isAll = computed(() => cartList.value.every((item) => item.selected))
  return {
    cartList,
    allCount,
    allPrice,
    isAll,
    selectedCount,
    selectedPrice,
    addCart,
    delCart,
    singleCheck,
    allCheck,
    clearCart,
    updateNewList,
  }
},
  {
    persist: true,
  })