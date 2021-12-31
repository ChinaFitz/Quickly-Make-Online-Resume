import Vue from 'vue'
import App from './App.vue'

import { 
    Button ,
} from 'element-ui'

Vue.component(Button.name, Button)

Vue.config.productionTip = false

new Vue({
    render: createEle => createEle(App),
    el: '#app',
})
