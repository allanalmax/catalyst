// Custom business logic

// const Counter = {
//     data() {
//       return {
//         counter: 0
//       }
//     }
//   }

// Vue.createApp({
//     data: function () {
//         return {
//             name: "Allan",
//             age: 20
//         }
//     }
// }).mount('#app')

Vue.createApp(
    {
      data:function(){
        return {
          greeting: "Hello Catalyst!"
        }
      },
  
      methods: {
        greetMethod:function(){
          alert(this.greet);
        }
      }
  
    }
  ).mount("#app")
  