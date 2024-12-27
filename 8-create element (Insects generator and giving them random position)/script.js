var insects=[
    "https://freepngimg.com/thumb/categories/1286.png",
    "https://www.pngmart.com/files/5/Insect-Transparent-Background.png",
    "https://static.vecteezy.com/system/resources/previews/016/416/049/non_2x/butterfly-insect-illustration-free-png.png",
    "https://freepngimg.com/thumb/fly/3-fly-png-image.png",
]
var btn=document.querySelector('button')
var body=document.querySelector('body')
btn.addEventListener("click",function(){
    var valueX=Math.random()*96;
    var valueY=Math.random()*96;
    var rotate=Math.random()*360;
    var img=document.createElement("img")
    var num=Math.floor(Math.random()*insects.length)
    img.setAttribute('src',insects[num])
    img.style.height='70px';
    img.style.position='absolute';
    img.style.top=valueY+'%';
    img.style.left=valueX+"%"
    
    img.style.rotate=rotate+"deg";
   
    body.appendChild(img)
    
})
