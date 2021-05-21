$(document).ready(function(){
    $(window).scroll(function() { 
      if ($(document).scrollTop() > 20) { 
        $(".navigation-bar").css("background-color", "#0B0D17"); 
        $(".navigation-bar ul li a").css("color", "white");
        $(".logo").css("color", "white");  
        $(".openbtn").css("color", "white"); 
      
      
      } else {
        $(".navigation-bar").css("background-color", "transparent");
        $(".navigation-bar ul li a").css("color", "#000000");
        $(".logo").css("color", "#000000"); 
        $(".openbtn").css("color", "#000000"); 

      }
    });
  });

  function scrollToTop (id) {
    scrollingElement.scrollTop = 0;
 }
 
 //Require jQuery
 function scrollSmoothToBottom () {

   window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
   
 }