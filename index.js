//capturamos la cantidad de botones de la clase drum
var numDrumBtn = document.querySelectorAll(".drum").length;

//iteramos para agregar la funcion anonima a cada uno de los botones
for (var i = 0; i < numDrumBtn; i++) {
  //selecciona la clase drum || agrega listener a cada boton de la clase || el nombre del evento va entre "" (click)
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    //  alert("I got clicked");
    var buttonInnerHTML = this.innerHTML; //innerHTML -> asigna inner html (w, a, s ,d... de la calse drum)

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  });

}

document.addEventListener("keydown", function(event) {
  makeSound(event.key); //envio la propiedad key del event

  buttonAnimation(event.key);

});

function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;
    default:
      console.log(buttonInnerHTML);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey); //agregamos el . de la clase (letrua) drum

  activeButton.classList.add("pressed"); //clase de styles.css

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
