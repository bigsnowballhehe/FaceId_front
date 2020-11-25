import Vue from 'vue'
import App from './App.vue'
import routers from './router'
import './plugins/ant-design'
import store from './vuex'
import './plugins/echarts'


Vue.config.productionTip = false



new Vue({
    router: routers,
    store,

    render: h => h(App),
}).$mount('#app')