import Vue from 'vue'
import router from 'vue-router'
import LearningTest from '../components/LearningTest'


Vue.use(router)

const routers = new router({
    routes: [{
        path: '/learn',
        component: LearningTest
    }]


})

export default routers