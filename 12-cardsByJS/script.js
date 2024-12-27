const user=[
    {
        name:'Tanishk',
        age:20,
        city:'Bhopal'
    },
    {
        name:'Jay',
        age:21,
        city:'Bhopal'
    },
    {
        name:'Vipul',
        age:24,
        city:'Indore'
    },
    {
        name:'Raghav',
        age:23,
        city:'Bhopal'
    }
]
var sum=''
user.forEach(function(elem){
    sum=sum+`<div class="card">
            <h1>${elem.name}</h1>
            <h4>${elem.age}, ${elem.city}</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>`
})
var main=document.querySelector('.main')
main.innerHTML=sum;