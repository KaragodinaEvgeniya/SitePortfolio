import $ from 'jquery';

    const myForm=document.querySelector('#auhtForm');
    const button=document.querySelector('#welcome-nav__btn');
    // var close = document.querySelector('.button--close');   
    
    function validateForm (auhtForm){
        let isNotEmpty = false;
        if(validateField(auhtForm.elements.login)){
            isNotEmpty = true;
        } else {
            var errorLog= document.getElementById('errorLogin');                 
            errorLog.classList.add('open');
            setTimeout(function(){$('.error_login').removeClass('open')},3000);  
        } 
        if(validateField(auhtForm.elements.password)){
            isNotEmpty = true;
        }else {
            var errorPass= document.getElementById('errorPass');            
            errorPass.classList.add('open');
            setTimeout(function(){$('.error_password').removeClass('open')},3000); 
        }    
        return isNotEmpty;
    }
    
    function validateField(field){

        if (!field.checkValidity()){           
            field.nextElementSibling.textContent=field.validationMessage   
                

                
        } 
        field.nextElementSibling.textContent = field.validationMessage;           
            return field.checkValidity();  
            
       
    }


    
    button.addEventListener('click', function(event){
        event.preventDefault();
    
        if (validateForm(myForm)){
            
            const data = {
                login:  myForm.elements.login.value,
                password:  myForm.elements.password.value            
            };
            const xhr = new XMLHttpRequest();
                xhr.open('POST', 'https://webdev-api.loftschool.com/');
                xhr.send(JSON.stringify(data));
    
            // if (xhr.status===404){
            //     var error=document.querySelector('.modal--error');
            //     error.classList.add('active--modal');            
            // }
            // else{
            //     var modal=document.querySelector('.modal');
            //     modal.classList.add('active--modal');              
            // }       
            
        }       
              
                    
            // close.addEventListener('click', function(){
            //     let modal=document.querySelector('.modal');
            //     modal.classList.remove('active--modal');
            // });
           
        
    
    });
    
    
    
    
    