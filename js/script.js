//ricreare lo slider visto in jquery, con tecnologia Vue
function initVue(){
 new Vue({
   el: '#app',
   data : {
     'img': './img/Tokyo.jfif'

   },
   methods:{
    left : function(){
      if(this.img ==  './img/Tokyo.jfif' ){
        this.img = './img/Roma.jpg'
      }
      else if (this.img == './img/Roma.jpg' ) {
        this.img = './img/Russia.jpg'

      }else if (this.img == './img/Russia.jpg') {
        this.img = './img/Tokyo.jfif'
      }

    },

    right : function(){
      if(this.img ==  './img/Tokyo.jfif' ){
        this.img = './img/Roma.jpg'
      }
      else if (this.img == './img/Roma.jpg' ) {
        this.img = './img/Russia.jpg'

      }else if (this.img == './img/Russia.jpg') {
        this.img = './img/Tokyo.jfif'
      }


    }
   }

  });
}

// function initVue(){
//  new Vue({
//    el: '#app',
//    data : {
//     0: './img/Tokyo.jfif',
//     1: './img/Russia.jpg',
//     2: './img/Roma.jpg',
//      'counter': 0,
//    },
//
//    methods:{
//      left : function(){
//       if (this.counter == 0){
//         this.counter++;
//
//       }
//
//      }
//
//    }
//
//   });
// }

function init(){
  initVue();
}
document.addEventListener('DOMContentLoaded', init);
