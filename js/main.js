function addTopping(topping) {

  console.log('my topping', topping);
  var sauce1 = new Image();

  var c=document.getElementById("painter");
  var context=c.getContext("2d");

  sauce1.onload=function(){
    var width = 700;
    var height = 700;
    context.drawImage(sauce1,0,0, width, height);
  }

  sauce1.src = topping;

}


function hoverFunction(name) {
  console.log('i am hover function');
  button = document.getElementById(name);
  button.style.height = "68px";


}

function hoverOff(name) {
  console.log('i am hover out function');
  button = document.getElementById(name);
  button.style.height = "34px";

}
