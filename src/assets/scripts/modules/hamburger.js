function ready(){      
       

    
  let btn= document.getElementById('hamburger');
  
  btn.addEventListener('click', function(){
    let menu= document.getElementById('drawer');
    menu.classList.toggle('open');
     btn.classList.toggle('active');
  }); 


    
}   
document.addEventListener("DOMContentLoaded", ready);