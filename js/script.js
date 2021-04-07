//ricreare lo slider visto in jquery, con tecnologia Vue
function initVue(){
 new Vue({
   el: '#app',
   data : {
     'imagines': ['./img/Tokyo.jfif', './img/Roma.jpg', './img/Russia.jpg' ],
     'index': 0

   },
   methods:{
    left : function(){
     this.index--;
     if (this.index < 0){
       this.index= this.imagines.length - 1
     }


    },

    right : function(){
      this.index++;           // 2
      if (this.index > this.imagines.length -1){
         this.index= 0;

      }
    }
   }

  });
}



// function initVue(){
//  new Vue({
//    el: '#app',
//    data : {
//      'img': './img/Tokyo.jfif'
//
//    },
//    methods:{
//     left : function(){
//       if(this.img ==  './img/Tokyo.jfif' ){
//         this.img = './img/Roma.jpg'
//       }
//       else if (this.img == './img/Roma.jpg' ) {
//         this.img = './img/Russia.jpg'
//
//       }else if (this.img == './img/Russia.jpg') {
//         this.img = './img/Tokyo.jfif'
//       }
//
//     },
//
//     right : function(){
//       if(this.img ==  './img/Tokyo.jfif' ){
//         this.img = './img/Roma.jpg'
//       }
//       else if (this.img == './img/Roma.jpg' ) {
//         this.img = './img/Russia.jpg'
//
//       }else if (this.img == './img/Russia.jpg') {
//         this.img = './img/Tokyo.jfif'
//       }
//
//
//     }
//    }
//
//   });
// }



function init(){
  initVue();
}
document.addEventListener('DOMContentLoaded', init);
