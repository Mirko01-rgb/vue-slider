//ricreare lo slider visto in jquery, con tecnologia Vue
function initVue(){
 new Vue({
   el: '#app',
   data : {

   },
   methods:{
    left : function(){
      console.log('left');
    },

    right : function(){
      console.log('right');
    }
   }

  });
}


function init(){
  initVue();
}
document.addEventListener('DOMContentLoaded', init);
