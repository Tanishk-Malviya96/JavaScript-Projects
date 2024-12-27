var btn=document.querySelector("button")
var light=document.querySelector(".light")
btn.addEventListener("click",function(){
    var r=Math.floor(Math.random()*256)
    var g=Math.floor(Math.random()*256)
    var b=Math.floor(Math.random()*256)
    
    light.style.backgroundColor=`rgb(${r},${g},${b})`
    
})
