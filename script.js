const crsr=document.querySelector(".cursor");
const blur=document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function(e){
    crsr.style.left = e.clientX + 'px';
    crsr.style.top = e.clientY + 'px';
    blur.style.left = e.clientX-250 + 'px';
    blur.style.top = e.clientY-250 + 'px';
})



gsap.to("#nav", {
    backgroundColor:"#000",
    duration:.5,
    height:"110px",
    scrollTrigger: {
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"bottom 10%",
        scrub:2
    }
}) 


gsap.to("main", {
    backgroundColor:"#000",

    scrollTrigger:{
        trigger:"main",
        scroller:"body",
       
        start:"top -20%",
        end:"top -70%",
        scrub:2
    }
})


gsap.from("#colon1",{
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers:true,
        start: "top 55%",
        end: "top 45%",
        scrub: 4,

    }
})


gsap.from("#colon2",{
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#colon2",
        scroller: "body",
 
        start: "top 85%",
        end: "top 85%",
        scrub: 4,

    }
})

//To be modified later

// var h4all = document.querySelectorAll("#nav h4");
// h4all.forEach(function (elem) {
//   elem.addEventListener("mouseenter", function () {
//     crsr.style.scale = 3;
//     crsr.style.border = "1px solid #fff";
//     crsr.style.backgroundColor = "transparent";
//   });
//   elem.addEventListener("mouseleave", function () {
//     crsr.style.scale = 1;
//     crsr.style.border = "0px solid #95C11E";
//     crsr.style.backgroundColor = "#95C11E";
//   });
// });

//

gsap.from(".page4 h1",{
   y:50,
    scrollTrigger: {
        trigger: ".page4 h1",
        scroller: "body",
        // markers:true,
        start: "top 75%",
        end: "top 70%",
        scrub: 3,

    }
})

