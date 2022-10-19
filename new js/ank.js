let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let number = document.querySelector(".number");
plus.addEventListener("click", add);
minus.addEventListener("click", sub);
let index;
if(localStorage.getItem("numbervalue")==null){
  index=0 ; 
}
else {
  index= localStorage.getItem("numbervalue") ; 
}
color(index) ; 
number.innerHTML = index ; 
function color(index){
if(index==0){
  number.style.background = "white" ; 
  number.style.color = "black" ; 
}
else if(index>0){
  number.style.background = "green" ; 
  number.style.color = "white" ; 
}
else{
  number.style.background = "red" ; 
  number.style.color = "white" ; 
}
}
function add() {
  index++;
  number.innerHTML = index ; 
  value = index ; 
  localStorage.setItem("numbervalue" , value) ; 
  color(index) ; 
}
function sub() {
  index--;
  number.innerHTML = index ; 
  value = index ; 
  localStorage.setItem("numbervalue" , value) ; 
  color(index) ; 
}