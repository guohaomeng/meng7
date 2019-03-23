window.onload=function(){
    var content1= document.getElementById("content1");
    var content2= document.getElementById("content2");
    var content3= document.getElementById("content3");
    var content4= document.getElementById("content4");
    var content5= document.getElementById("content5");
    var content6= document.getElementById("content6");
    var content7= document.getElementById("content7");
    var tag1= document.getElementById("tab1");
    var tag2= document.getElementById("tab2");
    var tag3= document.getElementById("tab3");
    var tag4= document.getElementById("tab4");
    var tag5= document.getElementById("tab5");
    var tag6= document.getElementById("tab6");
    var tag7= document.getElementById("tab7");
    tag1.onclick=function meng1(){
        content1.style.display="block";
        content2.style.display="none";
        content3.style.display="none";
        content4.style.display="block";
        content5.style.display="none";
        content6.style.display="none";
        content7.style.display="none";
    }
    tag2.onclick=function meng2(){
        content1.style.display="none";
        content2.style.display="block";
        content3.style.display="none";
        content4.style.display="block";
        content5.style.display="none";
        content6.style.display="none";
        content7.style.display="none";
    }
    tag3.onclick=function meng3(){
        content3.style.display="block";
        content2.style.display="none";
        content1.style.display="none";
        content4.style.display="block";
        content5.style.display="none";
        content6.style.display="none";
        content7.style.display="none";
    }
    tag4.onclick=function meng4(){
        content4.style.display="block";
        content2.style.display="none";
        content3.style.display="none";
        content1.style.display="block";
        content5.style.display="none";
        content6.style.display="none";
        content7.style.display="none";
    }
    tag5.onclick=function meng5(){
        content5.style.display="block";
        content2.style.display="none";
        content1.style.display="block";
        content3.style.display="none";
        content4.style.display="none";
        content6.style.display="none";
        content7.style.display="none";
    }
    tag6.onclick=function meng6(){
        content6.style.display="block";
        content2.style.display="none";
        content1.style.display="block";
        content3.style.display="none";
        content5.style.display="none";
        content4.style.display="none";
        content7.style.display="none";
    }
    tag7.onclick=function meng7(){
        content7.style.display="block";
        content2.style.display="none";
        content1.style.display="block";
        content3.style.display="none";
        content5.style.display="none";
        content6.style.display="none";
        content4.style.display="none";
    }
}
