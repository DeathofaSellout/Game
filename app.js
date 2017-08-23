$(document).ready(function(){
  let marioSteps = 80; //starting point for mario
  let princessSteps = 80; //starting point for princess
  let width = $(window).width() - 20;

  $(document).on("keyup", function(event){

    if(marioSteps >= (width - 100)){
      alert("Mario has won!!!!")
    } else if( princessSteps >= (width - 100)){
      alert("The Princess has won!!!");
    }
    if(event.which === 16){
      princessSteps = princessSteps + 20;

      //left shift keypress princess
      if(princessSteps < (width - 100)){
        $("#princess").animate({
          "margin-left": "+=20px"
        }, 5);
      }
    } else if(event.which === 39 ){
      marioSteps += 20;

      //left right arrow keypress mario
      if(princessSteps < (width - 100)){
        $("#mario").animate({
          "margin-left": "+=20px"
        }, 5);
      }
    }
   // do animate step instead jQuery
    //event.which shows keycode
  });
});
