var lastScrollTop = 0;
  window.addEventListener("scroll", function(){
     var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
     if (currentScroll > lastScrollTop){
      /* console.log("down");*/
      //  document.getElementById('nav-background').style.display="none";
       document.getElementById("nav-header").classList.remove("header-in");
       document.getElementById("nav-header").style.opacity = 0;
     } else {
      /* console.log("up");*/
      // document.getElementById('nav-background').style.display="table";
       document.getElementById("nav-header").classList.add("header-in");
       document.getElementById("nav-header").classList.add("solid");
       document.getElementById("nav-header").style.opacity = 1;
       if(currentScroll<=3){
         document.getElementById("nav-header").classList.remove("solid");
         document.getElementById("nav-header").classList.remove("header-in");
       }
     }
     lastScrollTop = currentScroll;
} ,false);
