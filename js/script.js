// toggle menu 
let icons  = document.querySelector(".icons");
let menu = document.querySelector(".menu");
let active_menu = document.querySelector(".active-navbar"); 

// cross lcon 
let icon_bar_1 = document.querySelector('.icon-bar-1');
let icon_bar_2 = document.querySelector('.icon-bar-2'); 
let icon_bar_3 = document.querySelector('.icon-bar-3'); 



icons.addEventListener("click", function(){ 
//    toggle menu 
    menu.classList.toggle("active-navbar");
   
    // cross lcon 
    icon_bar_1.classList.toggle('line-1');
    icon_bar_2.classList.toggle('line-2');
    icon_bar_3.classList.toggle('line-3');



})
