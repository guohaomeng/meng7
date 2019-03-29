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
        list.style.left=parseInt(list.style.left) -250 +'px';
        if (index == 7) {
            index = 1;
        }
        else {
            index += 1;
        }
        showButton();
        if(parseInt(list.style.left)< -(8*250)){
            list.style.left= -250+'px';
        }
    }
    prev.onclick=function prev(){
        list.style.transition="0.7s";
        list.style.left=parseInt(list.style.left) +250 +'px';
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
            if(leftvalue<=-(8*250)){
                list.style.transition="none";
                list.style.left=-250+'px';
            }
            else if(leftvalue>=0){
                list.style.transition="none";
                list.style.left= -(7*250)+'px';
            }
        },800);
    }
    for (var i=0; i< buttons.length; i++ ){
        buttons[i].onclick = function(){
            var myindex= parseInt(this.getAttribute('index'));
            var newprev2 = -250*(myindex);
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
}