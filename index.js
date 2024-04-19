

var buttonColors =["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

$("html").on("keydown", function (){

  if (gamePattern.length === 0) {
    nextSequence();
  }
  else;
  
 
});

function nextSequence() {
    
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColour = buttonColors[randomNumber]; 
  
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);  
  
  var level = gamePattern.length;
  $("h1").text("Level " + level);
  playSound(randomChosenColour);

}

    
    



for (var i=0 ; i < $(".btn").length; i++ ) {

    $(".btn")[i].addEventListener("click", function (event){;
       var userChosenColour = this.id;
       playSound(userChosenColour);
       $("#" + userChosenColour).addClass("pressed");
       setTimeout (function() {
        $("#" + userChosenColour).removeClass("pressed");
},100);

    userClickedPattern.push(userChosenColour); 
    

    if (userClickedPattern.length < gamePattern.length ){
      
    } else 
      if (userClickedPattern.toString() === gamePattern.toString()) {
      
      userClickedPattern = [];
      setTimeout (function () {
       nextSequence();
       
      }, 1000);
    } else {
        $("h1").text("Game Over! Press Any key to restart!");
        var wrong = new Audio("./sounds/wrong.mp3");
        wrong.play();
        $("body").addClass("game-over");
       setTimeout (function() {
        $("body").removeClass("game-over");
        },400);
        gamePattern=[];
        userClickedPattern=[];

    };
  
   });
 
  };

  function playSound (id) {
 
      switch (id) {
          case "green":
              var tom1 = new Audio("./sounds/green.mp3");
              tom1.play();
          break;
  
          case "red":
            var tom2 = new Audio("./sounds/red.mp3");
            tom2.play();
          break;
  
          case "yellow":
              var tom3 = new Audio("./sounds/yellow.mp3");
              tom3.play();
          break;
  
          case "blue":
              var tom4 = new Audio("./sounds/blue.mp3");
              tom4.play();
          break;
          default: console.log("nice try!");
  }
}



  
      