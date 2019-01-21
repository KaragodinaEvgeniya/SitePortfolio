function ready(){      
       

    
    let btn= document.getElementById('authorization');
    
    btn.addEventListener('click', function(){
      let WelcomeContent= document.getElementById('welcome');
      WelcomeContent.classList.add('flip');
       
    }); 
  
  
      
  }   
  document.addEventListener("DOMContentLoaded", ready);