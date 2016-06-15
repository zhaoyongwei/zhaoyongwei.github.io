
$(document).ready(function(){

var speed=1;
        function move(){
            $(".contain_rotate").css("transform","rotateX("+speed+"deg)");
            speed++;
            if(speed==360){speed=0}
        }
        var timer=setInterval(move,20);
        $(".section_rotate span").hover(function(){
           // clearInterval(timer);
           $(this).addClass("select");
        },function(){
           // timer=setInterval(move,20);
           $(this).removeClass("select");
        })

function timer1(){ 
             var date=new Date();
             var hour=date.getHours();
             var minute=date.getMinutes();
             var second=date.getSeconds();
             //init
             $(".hour").html(hour+"时");
             $(".minute").html(minute+"分");
             //判断
             if(0<=hour&&hour<12){
            //hour
               $(".view_hour .left_front").css("transform","rotateZ(0deg)"); //左边不转
               $(".view_hour .view_right").show(); //右边转
               $(".view_hour .second").html("0"+hour+"时");;
               if(0<=hour&&hour<10){$(".view_hour .hour").html("0"+hour+"时");}
               $(".view_hour .view_right").css("transform","rotateZ(0)"); 
               $(".view_hour .view_right").css("transform","rotateZ("+(hour+1)*15+"deg)");   //右边转的规律
             }                     
             if(12<=hour&&hour<24){
            //hour
                $(".view_hour .hour").html(hour+"时");
                $(".view_hour .view_right").css("transform","rotateZ(0deg)"); //右边保持固定位置不转
                $(".view_hour .view_right").hide();
                $(".view_hour .left_front").css("transform","rotateZ("+(hour-11)*15+"deg)"); //左边转的规律
              } 

             if(0<=minute&&minute<30){
            //minute
               $(".view_minute .left_front").css("transform","rotateZ(0deg)"); //左边不转
               $(".view_minute .view_right").show(); //右边转
               $(".view_minute .second").html(minute+"分");
               if(0<=minute&&minute<10){$(".view_minute .minute").html("0"+minute+"分");}
               $(".view_minute .view_right").css("transform","rotateZ(0)"); 
               $(".view_minute .view_right").css("transform","rotateZ("+(minute+1)*6+"deg)");   //右边转的规律
             }                     
             if(30<=minute&&minute<60){
            //minute
                $(".view_minute .minute").html(minute+"分");
                $(".view_minute .view_right").css("transform","rotateZ(0deg)"); //右边保持固定位置不转
                $(".view_minute .view_right").hide();
                $(".view_minute .left_front").css("transform","rotateZ("+(minute-29)*6+"deg)"); //左边转的规律
              }   

             if(0<=second&&second<30){
            //second
               $(".view_second .left_front").css("transform","rotateZ(0deg)"); //左边不转
               $(".view_second .view_right").show(); //右边转
               $(".view_second .second").html(second+"秒");
               if(0<=second&&second<10){$(".view_second .second").html("0"+second+"秒");}
               $(".view_second .view_right").css("transform","rotateZ(0)"); 
               $(".view_second .view_right").css("transform","rotateZ("+(second+1)*6+"deg)");   //右边转的规律
             }                     
             if(30<=second&&second<60){
            //second
                $(".view_second .second").html(second+"秒");
                $(".view_second .view_right").css("transform","rotateZ(0deg)"); //右边保持固定位置不转
                $(".view_second .view_right").hide();
                $(".view_second .left_front").css("transform","rotateZ("+(second-29)*6+"deg)"); //左边转的规律
              }
              setTimeout(timer1,1000);         
         }
         timer1();

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
