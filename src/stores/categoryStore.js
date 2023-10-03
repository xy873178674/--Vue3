import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '../apis/layout'

export const useCategoryStore = defineStore('category', () => {
// 导航列表的逻辑
const categoryList = ref([])

const getCategory = async () => {
  const res = await getCategoryAPI()
  // console.log(res.result);
  categoryList.value = res.result
  // console.log(categoryList);
}
return {
    categoryList,
    getCategory
}

})
