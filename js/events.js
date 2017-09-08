//define functions here
function getIt(){
  $("p").on("click", alert("HEY!"))
}

function frameIt(){
  $("img").on("load", function(){
    $(this).addClass("tasty")
  })
}

function submitIt(){
  $("form").on("submit", alert("Your form is going to be submitted now."))
}

function pressIt(){
    $("#typing").on("keydown", function(e){
      if(e.which === 71){
        alert("You pressed 'g'!")
      }
    })
}

$(document).ready(function(){
// call functions here
});
