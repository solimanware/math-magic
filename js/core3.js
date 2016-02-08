/** vars **/
var level = 1;
var score = 0; //
var time  = 1000 ; // milliseconds
var timeBar  = 1000 ; // milliseconds
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
    myTimer();
}

function checkAnswer(num1 , sign , num2 , result , answer) {
   var answer = ( answer == "correct" ) ? true : false;
   // تمام برافو :D ركز هنا بقى
   if( ( eval(num1 + sign + num2) == result ) == answer ){
      correctAnswer();
   }else {
      gameOver();
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
    myStopFunction();
    swal({   
            title: "Your Answer was Wrong",
            text: "You lost and your score is " + score,   
            type: "warning",   
            showCancelButton: true,   
            confirmButtonColor: "#DD6B55",   
            confirmButtonText: "Play again",   
            cancelButtonText: "X",   
            closeOnConfirm: false,   
            closeOnCancel: true }, 
             function(isConfirm){   
            if (isConfirm) {
                         window.location.href='game3.html'  
                } else { //window.location.href='main.html' ;
        } });

}


function myTimer(){
    myTimer = setInterval(function(){ 
        swal({   
            title: "Your Time is Over",
            text: "You lost and your score is " + score,   
            type: "warning",   
            showCancelButton: true,   
            confirmButtonColor: "#DD6B55",   
            confirmButtonText: "Play again",   
            cancelButtonText: "X",   
            closeOnConfirm: false,   
            closeOnCancel: false }, 
             function(isConfirm){   
            if (isConfirm) {
                         window.location.href='game3.html'  
                } else { window.location.href='main.html' ;
        } }); }, 1000);
}
function myStopFunction() {
    clearInterval(myTimer);
}

$(document).ready(function() {
    $("#bar").animate({width: '0%'}, 1000);
    $(".answer").on('touchstart', function(){
        $("#bar").stop();
        $("#bar").css("width", "100%");
        $("#bar").animate({
          width: '0%'
        }, 1000);
        myStopFunction();
        againTimer();
        });
});

function againTimer(){
    myTimer = setInterval(function(){ 
        swal({   
            title: "Your Time is Over",
            text: "You lost and your score is " + score,   
            type: "warning",   
            showCancelButton: true,   
            confirmButtonColor: "#DD6B55",   
            confirmButtonText: "Play again",   
            cancelButtonText: "X",   
            closeOnConfirm: false,   
            closeOnCancel: false }, 
             function(isConfirm){   
            if (isConfirm) {
                         window.location.href='game3.html'  
                } else { window.location.href='main.html' ;
        } }); }, 1000);
}



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
