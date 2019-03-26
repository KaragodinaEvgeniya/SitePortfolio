


var links = document.querySelectorAll('.blog__item');
var textsOffset = [];
var texts = document.querySelectorAll('.article__item');

texts.forEach(function(text){
    textsOffset.push(text.offsetTop);
})

window.addEventListener('scroll', function(){
    textsOffset.forEach(function(offset, i){
        if (window.pageYOffset >= offset) {
            links.forEach(function(el, i){
                el.classList.remove('blog-active');
            })
            links[i].classList.add('blog-active');
        }
        for (let i = 0; i < links.length; i++) {
            links[i].addEventListener("click", function(e) {               
                links[i].classList.add("blog-active")   
                e.preventDefault();
                
                for (let j = 0; j < links.length; j++) {
                    if (j !== i) {
                        links[j].classList.remove("blog-active");

                    }
                }
                
            })      

        }
        
    })
})

const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
      animationTime = 500,
      framesCount = 20;

anchors.forEach(function(item) {  
  item.addEventListener('click', function(e) {    
    e.preventDefault();
    
    
    let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top;    
    let scroller = setInterval(function() {      
      let scrollBy = coordY / framesCount;
      
     
      if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        
        window.scrollBy(0, scrollBy);
      } else {        
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
   
    }, animationTime / framesCount);
  });
});

let btn= document.getElementById('openMenu');

btn.addEventListener('click', function(){
    let menu= document.getElementById('mobailMenu');
    menu.classList.toggle('menu--open');
});
    

