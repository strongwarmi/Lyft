var lastScrollTop = 0;
  window.addEventListener("scroll", function(){
     var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
     if (currentScroll > lastScrollTop){
       document.getElementById("nav-header").classList.add("header-in");
       Drive.style.color = "#333447";
       Explore.style.color = "#333447";
       Help.style.color = "#333447";
       Login.style.color = "#333447";
       Login.style.border = "1px solid #333447";
       SignUp.style.opacity= 1;
     }
     else {
       document.getElementById("nav-header").classList.add("header-in");
       if(currentScroll<=3){
         document.getElementById("nav-header").classList.remove("header-in");
         Drive.style.color = "#FFF";
         Explore.style.color = "#FFF";
         Help.style.color = "#FFF";
         Login.style.color = "#FFF";
         Login.style.border = "1px solid #FFF";         
         SignUp.style.opacity= 0;
       }
     }
     lastScrollTop = currentScroll;
} ,false);
