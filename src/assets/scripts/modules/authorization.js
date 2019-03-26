function ready(){      
       

    
    let btn = document.getElementById('authorization');
    let close = document.getElementById('close');
    
    btn.addEventListener('click', function(){
      let WelcomeContent= document.getElementById('welcome');
      WelcomeContent.classList.add('flip');
       
    }); 
    
    close.addEventListener('click', function(){
      let WelcomeContent= document.getElementById('welcome');
      WelcomeContent.classList.remove('flip');
       
    }); 
  }   
  document.addEventListener("DOMContentLoaded", ready);