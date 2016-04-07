$(document).ready(function(){
          $(".flip-container").on('touchstart', function(){
           $(".flipper",this).css("transform","rotateY(540deg)");           
        });
        $(".footer").on('click touchstart',function(){
          location.href="page2.html";
        });
        $(".page_back").on('click touchstart',function(){
          location.href="webapp.html";
        });
     })


     function ToUrl(x)   
{   
      location.href=x;   
} 