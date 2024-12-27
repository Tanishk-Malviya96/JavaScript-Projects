var h2=document.querySelector("h2")
var btn=document.querySelector("button")
var flag=0
btn.addEventListener("click",()=>{
    
  h2.innerHTML=" Requesting ... ";
  setTimeout(function(){
     if(flag==0){
      h2.innerHTML="friends";
     btn.style.background='black';
     btn.style.color='white';
     btn.innerHTML="remove friend"
     flag=1;
     }else{
      h2.innerHTML="----";
     btn.style.background='rgb(15, 240, 68)';
     btn.style.color='black';
     btn.innerHTML="Add friend"
     flag=0
     }
  },3000)
})
