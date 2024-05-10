// gsap.to("#bottom",{
//     left:"0",
//     del
// })

var btn = document.querySelector(".nav-right button");
var popf = document.querySelector("#page1 #popup-form");

btn.addEventListener("click",function(){
    popf.style.top = "50%";
    
});

var closebtn = document.querySelector(".btn-close-popup")
closebtn.addEventListener("click",function(){
    popf.style.top = "-50%";
    
})