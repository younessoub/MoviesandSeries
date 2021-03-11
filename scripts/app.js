const navToggle = document.getElementById("navToggle"); 
const navlinks = document.getElementById("navlinks");
const form = document.getElementById("form");
const showingForm = document.getElementById("showingform");
const hideForm = document.getElementById("hideform");
const type = document.getElementById('type');
const name = document.getElementById('name');
const rating = document.getElementById('Rating');
const submit = document.getElementById('Add');

var MandT = []; //Array holding Tv shows and movies


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
    sortmandt(MandT);
  }
  if(Type==='T'){
    var t = new tvshow(Name,Rating);
    MandT.push(t);
    sortmandt(MandT);
  }
  
  
  /*for(let i=0;i<movies.length;i++){
    console.log(movies[i]);
  } 
  for(let i=0;i<tvshows.length;i++) {
    console.log(tvshows[i]);
  } 
  console.log ;
   console.log (Name);
    console.log (Rating);*/
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
function sortmandt(mandt){
  
  
  //sorting by rating
  for(let i = 0;i<mandt.length;i++){
    for(let j = 0;j<mandt.length-i-1;j++){
      if(mandt[j].rating<mandt[j+1].rating){
        let temp = mandt[j];
        mandt[j] = mandt[j+1];
        mandt[j+1] = temp;
      }
    }
  }
  /* objArray.sort(function(a, b) {
    var textA = a.DepartmentName.toUpperCase();
    var textB = b.DepartmentName.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
});  */
  
  //sorting by name if same rating
  /*for (let i = 0; i < mandt.length; i++) {
    console.log (mandt[i].rating);
  }*/
}