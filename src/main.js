import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

export const enventBus = new Vue ({
  data: {
    product: [
      {
        id: '1',
        img:'https://cdn.comparez-malin.fr/cache/product/img/gigabyte/2021/26910/gigabyte-aero-17-2021-2.jpg',
        title:'AERO 17',
        description: 'AERO 17 description',
        price: '4 229€',
      },
    {
      id: '2',
      img:'https://static.fnac-static.com/multimedia/Images/FR/MDM/80/38/d4/13908096/1505-1/tsp20211122102519/Apple-MacBook-Air-13-256-Go-D-8-Go-RAM-Puce-M1-Gris-sideral-Nouveau.jpg',
      title:'Macbook',
      description: 'Mac description',
      price: '999€',
    },
    {
      id: '3',
      img:'https://www.hp.com/fr-fr/shop/Html/Merch/Images/c06754203_1750x1285.jpg?imwidth=869',
      title:'Le Z',
      description: 'Hp Z book',
      price: '3 304€',
    }
  ]
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
