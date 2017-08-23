$(document).ready(function(){
  let marioSteps = 80; //starting point for mario
  let princessSteps = 80; //starting point for princess
  let width = $(window).width();

  $(document).on("keyup", function(event){
    if(marioSteps >= (width - 120)){
      alert("Mario has won!!!! Please try again!");
    } else if( princessSteps >= (width - 120)){
      alert("The Princess has won!!! Please try again!");
    }

    if(event.which === 16){
      princessSteps = princessSteps + 20;
      //left shift keypress princess
      if(princessSteps < (width - 120)){
        $("#princess").animate({
          "margin-left": "+=20px"
        }, 5);
      }
    } else if(event.which === 39 ){
      marioSteps += 20;
      //left right arrow keypress mario
      if(princessSteps < (width - 120)){
        $("#mario").animate({
          "margin-left": "+=20px"
        }, 5);
      }
    }
  });
  $("button").on("click", function(){
    location.reload();
  });
});
