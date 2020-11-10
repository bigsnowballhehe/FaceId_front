import Vue from 'vue'
import router from 'vue-router'
import LearningTest from './components/LearningTest'
import index from './components/index'

Vue.use(router)

const routers = new router({
    routes: [
        { path: '/', redirect: '/index' },
        { path: '/learn', component: LearningTest },
        { path: '/index', component: index }
    ]


})

export default routers