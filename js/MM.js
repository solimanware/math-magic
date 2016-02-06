/** Math Magic **/

var MM = {
   addition : function(){
      var ran1  = Math.floor((Math.random() * 10) + 1) ;// Random 1 -> 10
      var ran2  = Math.floor((Math.random() * 10) + 1) ;// Random 1 -> 10
      var result ;
      var now = new Date();
      if (now.getMilliseconds() % 2 == 0) {
         result = ran1  + ran2;
      }else{
         result =  Math.floor((Math.random() * 10) + 1) ;
      }
      return [ran1, ran2 , result];
   }
};
