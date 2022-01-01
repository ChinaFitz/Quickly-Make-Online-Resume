import Vue from 'vue'
import App from '@/App.vue'

// 按需引入elementUI
import "@/utils/use_elementUi"
// 个人信息
import myinfo from "@/myInfo"
// 全局字体
import "@/assets/font.less"
// 清除移动端样式
import "@/assets/resetMobile.less"
// 全局的动画样式库
import 'animate.css'



Vue.config.productionTip = false

new Vue({
    render: createEle => createEle(App),
    el: '#app',
    beforeCreate() {
        Vue.prototype.myinfo = myinfo
        document.title = myinfo.global.title
    },
})
