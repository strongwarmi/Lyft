var lastScrollTop = 0;
  window.addEventListener("scroll", function(){
     var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
     if (currentScroll > lastScrollTop){
       document.getElementById("nav-header").classList.add("header-in");
       Drive.style.color = "#333447";
       Explore.style.color = "#333447";
       Help.style.color = "#333447";
       Login.style.color = "#333447";
     }
     else {
       document.getElementById("nav-header").classList.add("header-in");
       if(currentScroll<=3){
         document.getElementById("nav-header").classList.remove("header-in");
         Drive.style.color = "#FFF";
         Explore.style.color = "#FFF";
         Help.style.color = "#FFF";
         Login.style.color = "#FFF";
       }
     }
     lastScrollTop = currentScroll;
} ,false);
