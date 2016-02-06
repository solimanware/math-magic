/** vars **/
var level = 1;
var score = null; //
var time  = 3000 ; // milliseconds
var timeBar  = 3000 ; // milliseconds
var pause = false;
var lives = 3;
var sign  = "+";
var isStarted = false;

/** Functions **/

function updateData() {
   var values = MM.addition() ;
   $("#num1")  .html(values[0]);
   $("#num2")  .html(values[1]);
   $("#result").html(values[2]);
   $("#score") .html(score);
}

function checkAnswer(num1 , sign , num2 , result , answer) {
   var answer = ( answer == "correct" ) ? true : false;
   // تمام برافو :D ركز هنا بقى
   if( ( eval(num1 + sign + num2) == result ) == answer ){
      correctAnswer();
      timer();
   }else {
      wrongAnswer();
      gameOver();
      timer();
   }
}



function correctAnswer() {
   score += level * 1;
   updateData();
}

function wrongAnswer() {
   if (score > 0) {
      score -= level * 1;
      
   }
   updateData();
}

function gameOver() {
    if (score == 0 ){
        alert("Game Over")
    }
}

//function timer(){
//    setTimeout(function(){ alert("Game Timer Over"); }, 3000);
//}

(function timeBar() {
    $('.answer').on('touchstart', function(){
          $('.progress').animate({ width: '0%' }, 3000); 
       });
    $('.answer').on('touchend', function(){
          $('.progress').animate({ width: '100%' }, 0); 
       });
})();


// Main function
function init(){
   // In the new versions , we will use  random sign in the start depending on th level
   // 1 => + , 2 => + || - , 3 => + || - || * , 4 => + || - || * || /
   $("#sign").html(sign);

   updateData();

   $(".answer").on('touchstart', function(){
      checkAnswer(
         $("#num1").html(),
         $("#sign").html() ,
         $("#num2").html(),
         $("#result").html(),
         $(this).attr("id")
      );
   });


}

// Start the game ..
window.onload = init ;
