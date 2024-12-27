var body=document.querySelector('body')
var img=document.querySelector('#img1')
moveX=0;
moveY=0;
body.addEventListener("keydown",(dets)=>{
    if(dets.code=='ArrowRight'){
        moveX++;
        img.style.left= moveX+"%";
        console.log("moved right");
    }else if(dets.code=="ArrowLeft"){
        moveX--;
        img.style.left= moveX+'%';  
        console.log("moved left");
        
    }if(dets.code=='ArrowDown'){
        moveY++;
        img.style.top= moveY+"%";
        console.log("moved down");
    }else if(dets.code=="ArrowUp"){
        moveY--;
        img.style.top= moveY+'%';  
        console.log("moved up");
        
    }

    

})