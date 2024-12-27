var btn=document.querySelector("button")
var h1=document.querySelector('h1')
var growth=document.querySelector(".grow")
var num=Math.floor(Math.random()*100)
var grow=0;
btn.addEventListener('click',function(){
    
    btn.style.pointerEvents='none';
    
    var growInterval=setInterval(function(){
        grow++;
       
        h1.innerHTML=grow +'%';
    growth.style.width=grow +'%';
    },num);

    setTimeout(function(){
     clearInterval(growInterval)
     btn.innerHTML='downloaded'
     btn.style.opacity=0.6;
     btn.style.pointerEvents='none';
    },num*100)
    
})