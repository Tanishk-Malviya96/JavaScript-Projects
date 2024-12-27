var btn=document.querySelector("button")
var img=document.querySelector("img")
var h1=document.querySelector("h1")
var flag=0;
btn.addEventListener("click",function(){
  
    h1.innerHTML='Requesting...'
    setTimeout(() => {
        if(flag==0){
        h1.innerHTML='Friends'
        img.style.border='4px solid green';
        btn.innerHTML='Remove Friend';
        btn.style.backgroundColor='red'
        flag=1;
        }else{
        h1.innerHTML='stranger'
        img.style.border='4px solid red';
        btn.innerHTML='Add Friend';
        btn.style.backgroundColor='green'
        flag=0;
        }
    }, 3000);
    
})

