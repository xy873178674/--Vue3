<script setup >
import SonCom from './views/SonCom.vue'
import {ref} from 'vue'
const count = ref(0)
const changeCount = ()=>{
  count.value++
}
const getMessage =(msg)=>{
  console.log(msg);
}
</script>

<template>
  <div class="father">
    <h2>我是父组件App</h2>
    <h3>count:{{ count }}</h3>
    <button @click="changeCount">点我count+1</button>
    <SonCom :count="count" @getMessage="getMessage" message="fathre - message"/>
    <hr>
    <el-button type="primary">Primary</el-button>
  </div>
</template>

<style scoped>

</style>
