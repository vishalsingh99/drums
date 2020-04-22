/*
Basic way of calling click event function
function clickHandle(){
  alert("i got clicked");
}
// clickHandle instead of clickHandle(), because clickHandle() runs automatically everytime document loaded.
document.querySelector("button").addEventListener("click",clickHandle);

======================================================================
only applicable for first button
document.querySelector(".drum").addEventListener("click",function(){
  alert("I got clicked");
  console.log(this) //<button class="s drum">s</button>
  console.log(this.innerHTML) //s
});
========================================================================
//Audio add
var audio = new Audio("sounds/tom-1.mp3");
audio.play();
===================================================================


*/


//Keyboard pressed
document.addEventListener("keypress",function(event){
  //console.log(event);  KeyboardEvent {isTrusted: true, key: "u", code: "KeyU", location: 0, ctrlKey: false, …}
  //console.log(event.key); U
  var keyPressed= (event.key);
  // makeSound(event.key);
  makeSound(keyPressed);
});

// Button Click  Detecting Button pressed
// Add EventListener to all the keys of drum on click.
var button=document.querySelectorAll(".drum").length;
for (var i=0;i<button;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
     //console.log(this);
     //console.log(this.innerHTML);
    var buttonClicked= this.innerHTML;
    makeSound(buttonClicked);

  });
}

function makeSound(key){
  switch (key) {
    case "w":
           var crash = new Audio("sounds/crash.mp3");
           crash.play();
           break;
    case "a":
           var tom1 = new Audio("sounds/tom-1.mp3");
           tom1.play();
           break;
     case "s":
           var tom3 = new Audio("sounds/tom-3.mp3");
           tom3.play();
           break;
     case "d":
           var tom4 = new Audio("sounds/tom-4.mp3");
           tom4.play();
           break;
     case "j":
           var tom2 = new Audio("sounds/tom-2.mp3");
           tom2.play();
           break;
     case "k":
           var snare = new Audio("sounds/snare.mp3");
           snare.play();
           break;
     case "l":
           var kick = new Audio("sounds/kick-bass.mp3");
           kick.play();
           break;

    default: console.log(this.innerHTML);
  }
}
