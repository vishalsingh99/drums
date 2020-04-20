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

// Add EventListener to all the keys of drum on click.
var button=document.querySelectorAll(".drum").length;
for (var i=0;i<button;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
     console.log(this);
  });
}
