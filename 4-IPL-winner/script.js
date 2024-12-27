var teams = ["CSK", "MI", "KKR", "GT", "SRH", "RR", "LSG", "PBKS", "DC"];
var btn=document.querySelector("button");
var h1=document.querySelector("h1")
var box=document.querySelector(".box")
btn.addEventListener("click",function(){
    var a=Math.floor(Math.random()*teams.length)
    h1.innerHTML="Predicting..."
    setTimeout(() => {
        h1.innerHTML=teams[a];
        box.style.backgroundColor='green';
        btn.style.backgroundColor='white'
        btn.style.color='white'
        btn.style.backgroundColor='black'
        btn.innerHTML="Get New Winner"
    },3000);
    
})