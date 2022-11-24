let searchBtn = document.querySelector("#searchBtn")
    
searchBtn.onclick = function(e){
    e.preventDefault();
    let search = document.querySelector("#search")
   if( search.style.display == "none"){
    search.style.display = "block";
   }
   else{
    search.style.display = "none";
   }
}
let mark = document.querySelector("#mark")
mark.onclick = function(){
    let search = document.querySelector("#search")
    search.style.display = "none";
}
