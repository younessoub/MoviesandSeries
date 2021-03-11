const navToggle = document.getElementById("navToggle"); 
const navlinks = document.getElementById("navlinks");
const form = document.getElementById("form");
const showingForm = document.getElementById("showingform");
const hideForm = document.getElementById("hideform");

navToggle.addEventListener("click",function (){
  navlinks.classList.toggle("active");
});

showingForm.addEventListener("click",function (){
  hideForm.style.display = "block";
  showingForm.style.display = "none";
  form.style.display = "block";
  
});

hideForm.addEventListener("click",function(){
  hideForm.style.display="none";
  showingForm.style.display="block";
  form.style.display="none";
});