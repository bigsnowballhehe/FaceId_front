import Vue from 'vue'
import App from './App.vue'
import routers from './components/router'


Vue.config.productionTip = false


new Vue({
    routers,
    render: h => h(App),
}).$mount('#app')