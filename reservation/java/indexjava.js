 function preloadingfun(){
        document.getElementById('preloader').style.display="none";
    }
//        model show in load on page
	$(document).ready(function(){
		$("#myModal").modal('show');
	});
    
        
        $('#myModal').modal({
    backdrop: 'static',
    keyboard: false  // to prevent closing with Esc button (if you want this too)
});

function exchangelocation(){
    var fromlocation=document.getElementById('fromlocation').value;
    var tolocation=document.getElementById('tolocation').value;
    console.log(fromlocation);
    console.log(tolocation);
    document.getElementById('fromlocation').value=tolocation;
    document.getElementById('tolocation').value=fromlocation;
};
function tick(){
    var months = [
        "January", "February", "March", "April", "May",
        "June", "July", "August", "September", "October",
        "November", "December"
    ];
    
    let currentDate = new Date();
        let cDay = currentDate.getDate();
        let cMonth = currentDate.getMonth();
        let cYear = currentDate.getFullYear();
        let cHour= currentDate.getHours();
        let cMinute= currentDate.getMinutes();
        let cSecond= currentDate.getSeconds();
                 document.getElementById('date').innerHTML=cDay + "-" + months[cMonth] + "-" + cYear;                 
    if( cHour<10 && cMinute<10 && cSecond<10 )
        {
            
            document.getElementById('time').innerHTML="[" + "0" + cHour + ":" +"0"+ cMinute + ":" + "0" + cSecond + "]";
        }
    else if(cHour<10){
        document.getElementById('time').innerHTML="[" + "0" + cHour + ":" + cMinute + ":"  + cSecond + "]";
        
    }
    else if(cMinute<10){
        document.getElementById('time').innerHTML="[" + cHour + ":" + "0" + cMinute + ":"  + cSecond + "]";

    }
    else if(cSecond<10){
        document.getElementById('time').innerHTML="[" + cHour + ":" + cMinute + ":"  + "0" + cSecond + "]";

    }
    else
        {

                            document.getElementById('time').innerHTML="[" + cHour + ":" + cMinute + ":" + cSecond + "]";
        }
    window.setTimeout(tick,1000);
};
function menuopen(){
    document.getElementById('nav').style.display="block";
    document.getElementById('close').style.display="block";
     document.getElementById('menu_bar').style.display="none";
    
}
function menuclose(){
    document.getElementById('nav').style.display="none";
    document.getElementById('close').style.display="none";
     document.getElementById('menu_bar').style.display="block";
    
}

//-----------------------------------------  footer work ------------------------------------------------------------------------------------------

$(document).ready(function(){
    var font_size=16;
    $('.IRCTC_trains_footer_li').click(function(){
        $('.IRCTC_trains_footer_li_ul').toggle();
    });
    
    $('.Important_Information_footer_li').click(function(){
        $('.Important_Information_footer_li_ul').toggle(1000);
    });
    
       $('.general_Information_footer_li').click(function(){
        $('.general_Information_footer_li_ul').toggle(1000);
    });
    
        $('.agents_footer_li').click(function(){
        $('.agents_footer_li_ul').toggle(1000);
    });
    
    
    $('li').css('cursor','pointer');
    
    
     $('.A-').click(function(){
         font_size=font_size-2;
         console.log(font_size);
        $('.font-size').css('font-size',font_size+"px");
         $('h1').css('font-size',font_size+"px");
         $('.font-size').css('font-size',font_size+"px");
    });
    
    
});














        
            
