import Vue from 'vue'
import router from 'vue-router'
import LearningTest from './components/LearningTest'
import index from './components/index'
//import signSet from './components/signSet'
import userList from './components/userList'
import userType from './components/userType'
import signRecord from './components/signRecord'
import signSet from './components/signSet'
import visualData from './components/visualData'
import intro from './components/intro'
import faceContent from './components/faceContent'

Vue.use(router)

const routers = new router({
  routes: [
    { path: '/face', component: faceContent },
    { path: '/', redirect: '/index/intro' },
    { path: '/learn', component: LearningTest },
    {
      path: '/index',
      component: index,
      children: [
        { path: 'intro', name: 'intro', component: intro },
        { path: 'userList', name: 'userList', component: userList },
        { path: 'userType', name: 'userType', component: userType },
        { path: 'signRecord', name: 'signRecord', component: signRecord },
        { path: 'signSet', name: 'signSet', component: signSet },
        { path: 'visualData', name: 'visualData', component: visualData }
      ]
    }
  ]
})

export default routers
