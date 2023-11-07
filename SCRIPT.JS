// VARIABLES
const acc=document.getElementsByClassName("CONTENT-CONTAINER");

for (i = 0; i < acc.length; i++) {
    
    
      acc[i].addEventListener("click",function (){
    
        this.classList.toggle("active");
    })
    
    };