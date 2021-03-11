const navToggle = document.getElementById("navToggle"); 
const navlinks = document.getElementById("navlinks");
const form = document.getElementById("form");
const formToggle = document.getElementById("showingform");

navToggle.addEventListener("click",function (){
  navlinks.classList.toggle("active");
});

formToggle.addEventListener("click",function (){
  console.log('test');
  
  form.classList.toggle("displayform");
});