gsap.from(".load h1",{
    y:120,
    opacity:0,
    duration:0.9,
    delay:0.4,
    stagger:0.4
})

var time=document.querySelector(".timer h3")
let grow=0;
setInterval(function(){
     if(grow<100){
        grow++;
     }
     time.innerHTML=grow
},50)