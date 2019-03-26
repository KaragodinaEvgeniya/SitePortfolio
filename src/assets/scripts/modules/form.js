import $ from 'jquery';

    const myForm=document.querySelector('#form');
    const button=document.querySelector('#send');
    // const buttoClear=document.querySelector('#clear');
    
    function validateForm (form){
        let isNotEmpty = false;
        if(validateField(form.elements.name)){
            isNotEmpty = true;
        }else {
            let errorName= document.getElementById('errorName');                 
            errorName.classList.add('open');
            setTimeout(function(){$('.error--name').removeClass('open')},3000); 
        }    
        if(validateField(form.elements.email)){
            isNotEmpty = true;
        } else {
            let errorEmail= document.getElementById('errorEmail');            
            errorEmail.classList.add('open');
            setTimeout(function(){$('.error--email').removeClass('open')},3000); 
        }
        if(validateField(form.elements.comment)){
            isNotEmpty = true;
        } else {
            let errorComment= document.getElementById('errorComment');            
            errorComment.classList.add('open');
            setTimeout(function(){$('.error--comment').removeClass('open')},3000); 
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
                name:  myForm.elements.name.value,
                email:  myForm.elements.email.value,  
                comment:  myForm.elements.comment.value            
            };
            const xhr = new XMLHttpRequest();
                xhr.open('POST', 'https://webdev-api.loftschool.com/');
                xhr.send(JSON.stringify(data));
    
            
        }          
                    
            
        
    
    });

    // buttoClear.addEventListener('click', function(){
    //     document.myForm.reset();
    //   }); 
    
    
    