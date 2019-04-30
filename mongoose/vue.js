// window.onload = function () {
//   new Vue({
//     el: '#root',
//     data: {
//       msg: 'hello world'
//     }
//   })
// }

// const vm = new Vue({
//   el: '#root',
//   data: {
//     msg: 'hello world'
//   }
// })

setTimeout(function () {
  console.log(1)
  new Vue({
    el: '#root',
    data: {
      msg: 'hello world'
    }
  })
}, 1000)

// const vm = new Vue({
//   //el: '#root',
//   data: {
//     msg: 'hello world'
//   }
// })
// var div = document.getElementById('root')
// console.log(div)
// vm.$mount('#root')