
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'


// 引入初始化的样式文件
import "@/styles/common.scss"
// 引用懒加载指令插件并注册
import { lazyPlugin } from '@/directives'
// 引入全局组件插件
import { componentPlugin } from '@/components'

const app = createApp(App)
const pinia = createPinia()

// 注册持久化插件
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
// app.use(createPinia())
app.use(router)
app.mount('#app')
app.use(lazyPlugin)
app.use(componentPlugin)
// 我在这里测试一下git
// git 测试
