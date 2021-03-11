const navToggle = document.getElementById("navToggle"); 
const navlinks = document.getElementById("navlinks");
const form = document.getElementById("form");
const showingForm = document.getElementById("showingform");
const hideForm = document.getElementById("hideform");
const type = document.getElementById('type');
const name = document.getElementById('name');
const rating = document.getElementById('Rating');
const submit = document.getElementById('Add');



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

submit.addEventListener('click',function (e){
  e.preventDefault();
  var Type = type.value;
  var Name = name.value;
  var Rating = rating.value;
  name.value='';
  
  if(Type==='M'){
    var m = new movie(Name,Rating);
    movies.push(m);
  }
  if(Type==='T'){
    var t = new tvshow(Name,Rating);
    tvshows.push(t);
  }
  
  
  for(let i=0;i<movies.length;i++){
    console.log(movies[i]);
  } 
  for(let i=0;i<tvshows.length;i++) {
    console.log(tvshows[i]);
  } 
  /*console.log ;
   console.log (Name);
    console.log (Rating);*/
});

function sort(t,n,r){
  
}

function movie(n,r){
  
  this.type = "M";
  this.name = n;
  this.rating = r;
}

function tvshow(n,r){
  this.type = "T";
  this.name = n;
  this.rating = r;
}

var movies = [];
var tvshows = [];