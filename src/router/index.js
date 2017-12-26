import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Map from '@/components/Map'
import Balance from '@/components/Balance'
import TransferEther from '@/components/TransferEther'
import TransferSubstitute from '@/components/TransferSubstitute'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/',
      name: 'map',
      component: Map
    }, {
      path: '/balance',
      name: 'Balance',
      component: Balance
    }, {
      path: '/transfer-ether',
      name: 'TransferEther',
      component: TransferEther
    }, {
      path: '/transfer-ether',
      name: 'TransferEther',
      component: TransferEther
    }, {
      path: '/transfer-substitute',
      name: 'TransferSubstitute',
      component: TransferSubstitute
    }
  ]
})
