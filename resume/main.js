
$(document).ready(function(){

    $("nav ul li").hover(function(){
        $("em",this).css("height","1px");
        $("em",this).animate({
            width:"100px",
            left:0,            
            right:0
        },500)
    },function(){
         $("em",this).stop().animate({
            left:"50px",
            width:0
         },500)
    })

    $("#header_p1").hover(function(){
    	$(this).text("前端工程师")
    },function(){
    	$(this).text("赵永卫")
    }); 
    $("#header_p2").hover(function(){
    	$(this).text("resume")
    },function(){
    	$(this).text("简历")
    });

    $(".asidebar ul li a").click(function(){
    	$(".asidebar ul li a").removeClass("red")
    	$(this).addClass("red")
    })

     $(".home .second").hover(function(){
		$(this).fadeTo(1000,0);		
		},function(){
			$(this).stop(true,false).fadeTo(1000,1);
	});
     $(".skill .htmlinfo").hide();
     $(".skill .cssinfo").hide();
     $(".skill .jsinfo").hide();
     $(".skill .HL").click(function(){
        $(".skill .cssinfo").slideUp();
        $(".skill .jsinfo").slideUp();
        $(".skill .htmlinfo").slideDown();
        $(".skill .CS span,.skill .JA span").text("▼");
        $("span",this).text("▲");
     })
     $(".skill .CS").click(function(){
        $(".skill .jsinfo").slideUp();
        $(".skill .htmlinfo").slideUp();
        $(".skill .cssinfo").slideDown();
        $(".skill .HL span,.skill .JA span").text("▼");
        $("span",this).text("▲");
     })
     $(".skill .JA").click(function(){
        $(".skill .htmlinfo").slideUp();
        $(".skill .cssinfo").slideUp();
        $(".skill .jsinfo").slideDown();
        $(".skill .CS span,.skill .HL span").text("▼");
        $("span",this).text("▲");
     })
      
      var index=0;
      $(".left").click(function(){        
        index--;
        if(index<=-1||index>=2){index=0}
        $(".work .view").animate({
        right:700*index+"px"
     },200)
      })
      $(".right").click(function(){        
        index++;
        if(index>=3||index<=-1){index=2}
        $(".work .view").animate({
        right:700*index+"px"
     },200)
      })
     
     $(".color ul li").click(function(){
         $(".color ul li").text("");
         $(".color ul li").eq($(".color ul li").index(this)).text("✔");
         $("body").removeClass("color1 color2 color3 color4 color5");
         $("body").addClass(($(".color ul li").eq($(".color ul li").index(this)).attr("class")));
      }) 
      

})
