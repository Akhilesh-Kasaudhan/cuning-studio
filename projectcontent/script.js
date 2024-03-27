const cursor = document.querySelector('#circle');
document.body.addEventListener('mousemove',function(details) {

    let valueX = details.clientX;
    let valueY = details.clientY;
    // console.log(details);
    setTimeout(() => {
        circle.style.top = details.pageY +'px';
        circle.style.left = details.pageX +'px';   
    }, 100);
   
});
var tl = gsap.timeline();
tl.from(".navlogo img",{
    opacity:0,
    scale:0,
    y:-100,
    duration:0.2,
    delay:1
})
tl.from(".navmenu",{
    y:-100,
    duration:0.2
})
tl.from(" .hero-section #hero-title",{
    opacity:0,
    scale:3,
    x:-500,
    duration:0.7
})
tl.from(".about-section .about-desc,.about-section .about-media",{
    scale:0,
    opacity:0,
    scrollTrigger:{
        trigger:".about-section .about-desc",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 70%",
        scrub:1
    }
})
tl.from(".leaders-section .leaders",{
    scale:0.9,
    duration:0.5,
    delay:1,
    repeat:-1,
    stagger:0.5,
    yoyo:true

})
tl.from(".service-section .service",{
    opacity:0,
    x:-300,
    duration:2,
    stagger:0.5,
    scrollTrigger:{
        trigger:".service-section .service",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 40%",
        scrub:3
    }
})
tl.from(".testimonial-section .testimonial",{
    opacity:0,
    scale:0,
    y:100,
    stagger:1,
    scrollTrigger:{
        trigger:".testimonial-section .testimonial",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end:"top 80%",
        scrub:3
    }
})


$(document).ready(()=>{
    $('#link2').click(function(e){
        e.target.href = `#${e.target.dataset.link}`
    });
    $('#link3').click(function(e){
        e.target.href = `#${e.target.dataset.link}`
    });
    $('#link4').click(function(e){
        e.target.href = `#${e.target.dataset.link}`
    });
    $('#link5').click(function(e){
        e.target.href = `#${e.target.dataset.link}`
    });
})

