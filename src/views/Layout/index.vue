<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutSticky from './components/LayoutSticky.vue'

// 触发获取导航列表的action
import { useCategoryStore } from '@/stores/categoryStore'
import { onMounted } from 'vue'

const categoryStore = useCategoryStore()
onMounted(()=>categoryStore.getCategory())

</script>

<template>
    <LayoutSticky />
    <LayoutNav />
    <LayoutHeader />
    <!-- 添加一个key 破坏组件的复用机制-->
    <!-- <RouterView :key="$route.fullPath"/> -->
    <RouterView/>
    <LayoutFooter />
</template>@/stores/categoryStore