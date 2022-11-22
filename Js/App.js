
function portal() {
    document.getElementById("karyera").style.backgroundColor = "#0056c1";
    document.getElementById("karyera").style.color = "white"
   
}
function smth() {
    document.getElementById("karyera").style.backgroundColor = "white";
    document.getElementById("karyera").style.color = "#666"
   
}
 


    


function under_line() {
    let mydiv = document.getElementById("nav-left");
    let btns = document.getElementsByClassName("a");
   
    for (let i = 0; i < array.length; i++) {
   
       btns[i].addEventListener("onmouseover", function() {
   
           var current = document.getElementsByClassName("active");
           current[0].className = current[0].className.replace(" active", "");
           this.className += " active";
       
       });
   
     
    }
}

