window.onload =function lunbotu(){
    var lunbotu = document.getElementById('lunbotu');
    var list = document.getElementById('list');
    var buttons = document.getElementById('buttons').getElementsByTagName('span');
    var prev=document.getElementById('prev');
    var next=document.getElementById('next');
    var timer;
    var index=1;
    function showButton() {
        for (var i = 0; i < buttons.length ; i++) {
            if( buttons[i].className == 'on'){
                buttons[i].className = '';
                break;
            }
        }
        buttons[index-1].className = 'on';
    }
    function play(){
        timer=setInterval( function(){
            next.onclick();
        },3000);
    }
    function stop(){
        clearInterval(timer);
    }
    next.onclick=function next(){
        list.style.transition="0.7s";
        list.style.left=parseInt(list.style.left) -940 +'px';
        if (index == 7) {
            index = 1;
        }
        else {
            index += 1;
        }
        showButton();
        if(parseInt(list.style.left)< -(8*940)){
            list.style.left= -940+'px';
        }
    }
    prev.onclick=function prev(){
        list.style.transition="0.7s";
        list.style.left=parseInt(list.style.left) +940 +'px';
        if (index == 1) {
            index = 7;
        }
        else {
            index -= 1;
        }
        showButton();
    }
    function play2(){//计时器二，在最后一张出现后返回第一张...
        timer2=setInterval( function(){
            var leftvalue= parseInt(list.style.left);
            if(leftvalue<=-(8*940)){
                list.style.transition="none";
                list.style.left=-940+'px';
            }
            else if(leftvalue>=0){
                list.style.transition="none";
                list.style.left= -(7*940)+'px';
            }
        },800);
    }
    for (var i=0; i< buttons.length; i++ ){
        buttons[i].onclick = function(){
            var myindex= parseInt(this.getAttribute('index'));
            var newprev2 = -940*(myindex);
            list.style.transition= "0.7s";//debug
            list.style.left= newprev2 +'px';
            index=myindex;
            showButton();
        }
    }
    lunbotu.onmouseover=stop;
    lunbotu.onmouseleave=play;
    play();
    play2();
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
    /*下面是显示时间的js代码*/
    
}