// hide nav bar
document.addEventListener("DOMContentLoaded", function(){

    el_autohide = document.querySelector('.autohide');
    
    if(el_autohide){
      var last_scroll_top = 0;
      window.addEventListener('scroll', function() {
            let scroll_top = window.scrollY;
           if(scroll_top < last_scroll_top) {
                el_autohide.classList.remove('scrolled-down');
                el_autohide.classList.add('scrolled-up');
            }
            else {
                el_autohide.classList.remove('scrolled-up');
                el_autohide.classList.add('scrolled-down');
            }
            last_scroll_top = scroll_top;
      }); 
    }
  }); 

// preloader
var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
  loader.style.display = "none";
}
)

// go to the top arrow
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
}
)

// go to discover arrow
const todown = document.querySelector(".to-down");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    todown.classList.add("active");
  } else {
    todown.classList.remove("active");
  }
})