const navToggle = document.getElementById("navToggle"); 
const navlinks = document.getElementById("navlinks");

navToggle.addEventListener("click",function (){
  navlinks.classList.toggle("active");
});