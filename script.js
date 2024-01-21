var tl = gsap.timeline()

tl.from(".load h1,.load h2",{
    y:120,
    duration:0.7,
    delay:0.2,
    stagger:0.2
})
tl.to(".load",{
    opacity:0,
    delay:2.8,
    duration:1,
    stagger:-0.2
})
tl.to("#loader",{
    top:"-100%",
    duration:2,
    ease:"power4.out"
})

var time=document.querySelector(".timer h3")
let grow=0;
setInterval(function(){
     if(grow<100){
        grow++;
     }
     time.innerHTML=grow
},50)
setTimeout(function(){
    clearInterval(int)
},3000)