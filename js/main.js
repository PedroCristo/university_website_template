// TOGGLE MENU

var navLinks = document.getElementById("navLinks");

function showMenu(){
    navLinks.style.right = "0";
    navLinks.style.transition = "0.7s"
 
}

function hideMenu(){
    navLinks.style.right = "-250px";
    navLinks.style.transition = "0.4s"
}


  
//PARALLAX

$(window).scroll(function(){
    parallax();
    })
    function parallax(){
    
    var wScroll = $(window).scrollTop();
    
    
    $(".parallax").css("background-position",
    "center "+(wScroll*0.50)+"px")
    }


    
//NAVBAR BACKGROUND COLOR CHANGES WHEN WE SCROLL

$(document).ready(function(){
  $(window).scroll(function() {
   if ($(document).scrollTop() >10) { 
        $(".nav-links").css("background-color", "white").css("margin-top", "-5px"); 
        $(".nav-links a").css("font-size", "13px").css({color:"black"});
        $(".logo-blue").css("display", "block");
        $(".logo").css("display", "none");
     
    } else {
      $(".nav-links").css("background-color", "transparent").css("margin-top", "10px"); 
      $(".nav-links a").css("font-size", "15px").css("color", "white");
      $(".logo-blue").css("display", "none");
      $(".logo").css("display", "block");
    }
  });
});
