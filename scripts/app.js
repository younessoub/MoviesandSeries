const navToggle = document.getElementById("navToggle"); 
const navlinks = document.getElementById("navlinks");
const form = document.getElementById("form");
const showingForm = document.getElementById("showingform");
const hideForm = document.getElementById("hideform");
const type = document.getElementById('type');
const name = document.getElementById('name');
const rating = document.getElementById('Rating');
const submit = document.getElementById('Add');
const home = document.getElementById('home');
const movies = document.getElementById('movies');
const tvshows = document.getElementById('tvshows');
const sorted = document.getElementById('sorted');
const sortedmovies= document.getElementById('sortedmovies');
const sortedtvshows = document.getElementById('sortedtvshows');
const title = document.getElementById('title');
const list = document.getElementById('list');
const movieslist = document.getElementById('movieslist');
const tvshowslist = document.getElementById('tvshowslist');


var MandT = []; //Array holding Tv shows and movies

title.addEventListener('click',function (){
  sorted.style.display = 'block';
  sortedmovies.style.display = 'none';
  sortedtvshows.style.display = 'none';
});

home.addEventListener('click',function (){
  sorted.style.display = 'block';
  sortedmovies.style.display = 'none';
  sortedtvshows.style.display = 'none';
  navlinks.classList.toggle("active");
});

movies.addEventListener('click',function (){
  sorted.style.display = 'none';
  sortedmovies.style.display = 'block';
  sortedtvshows.style.display = 'none';
  navlinks.classList.toggle("active");
});

tvshows.addEventListener('click',function (){
  sorted.style.display = 'none';
  sortedmovies.style.display = 'none';
  sortedtvshows.style.display = 'block';
  navlinks.classList.toggle("active");
});

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
  var Rating = parseFloat(rating.value) ;
  name.value='';
  
  if(Type==='M'){
    var m = new movie(Name,Rating);
    MandT.push(m);
    sortAll(MandT);
  }
  if(Type==='T'){
    var t = new tvshow(Name,Rating);
    MandT.push(t);
    sortAll(MandT);
  }
  

});



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


//sorting movies and TV shows
function sortAll(mandt){
  
  
  //sorting by rating
  mandt.sort(function(a, b) {
    
    var ratingA = a.rating;
    var ratingB = b.rating;
    return (ratingA > ratingB) ? -1 : (ratingA < ratingB) ? 1 : 0;
 
  });  
  
  
  //sorting by name if (same rating)
  mandt.sort(function(a, b) {
    if(a.rating===b.rating){
      var textA = a.name.toUpperCase();
      var textB = b.name.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    } 
    else{
      return 0;
    }
  });  
  
 display(mandt);
}

function display(arr){
  list.innerHTML = "";
  movieslist.innerHTML="";
  tvshowslist.innerHTML="";
  for(var l in arr){
    list.innerHTML += "<hr /><li>"+arr[l].name +" <span>"+arr[l].rating+"</span></li>";
    if(arr[l].type==="M"){
      movieslist.innerHTML += "<hr /><li>"+arr[l].name +" <span>"+arr[l].rating+"</span></li>";
    }
    if(arr[l].type==="T"){
      tvshowslist.innerHTML += "<hr /><li>"+arr[l].name +" <span>"+arr[l].rating+"</span></li>";
    }
  }
 
  
}