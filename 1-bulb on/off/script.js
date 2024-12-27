var btn=document.querySelector('button');
var box=document.querySelector(".box")
var flag=0;
btn.addEventListener("click",()=>{
    if(flag==0){
    box.style.backgroundColor='yellow';
    btn.innerHTML='OFF'
    flag=1;
    }
    else{
     box.style.backgroundColor='Black';
    btn.innerHTML='ON'
    flag=0;
    }
})