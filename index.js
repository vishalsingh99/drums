/*
Basic way of calling click event function
function clickHandle(){
  alert("i got clicked");
}
// clickHandle instead of clickHandle(), because clickHandle() runs automatically everytime document loaded.
document.querySelector("button").addEventListener("click",clickHandle);
*/

/*
only applicable for first button
document.querySelector(".drum").addEventListener("click",function(){
  alert("I got clicked");
});
*/

// Add EventListener to all the keys of drum on click.
var button=document.querySelectorAll(".drum").length;
for (var i=0;i<button;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    alert("I got clicked");
  });
}
