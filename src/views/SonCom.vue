<template>
      <hr>
    <div class="son">
        <h3>我是子组件</h3>
        <div>
            父组件传入的数据：{{ message }}
            <!-- <button @click="changeCount">点我count+1</button> -->
            <button @click="setMessage">点我向父组件传递信息</button>
            <br/>
            父组件中传过来的count:{{ count }}
        </div>
    </div>
</template>

<script setup>
import {ref} from "vue"
    const props = defineProps({
        message: String,
        count:Number,
    })
    const num =ref(0)
    const emit = defineEmits([
        'getMessage',
    ])
    // 子组件触发自定义事件 传数据给父组件
    const setMessage=()=>{
        emit('getMessage','message from son')
    }
console.log(props.message);
</script>

<style scoped>

</style>