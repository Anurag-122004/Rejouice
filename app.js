

function lenisAnimation() {
    let tl = gsap.timeline() 

    tl.to(".animated-element", {
        
    })

    //lenis----------------------
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
    console.log(e)
    })

    function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
}

lenisAnimation();
function mouseEffect() {
    let page1Content = document.querySelector("#page1-content");
    let cursor = document.querySelector("#cursor");

page1Content.addEventListener("mousemove", (dets) => {
    gsap.to(cursor, {
        x: dets.x,
        y:dets.y
    })
})

page1Content.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
        scale: 1,
        opacity:1
    })
})

page1Content.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
        scale: 0,
        opacity:0
    })
})
}

mouseEffect();

function page2Animation() {
    gsap.from(".elem #shifted-h1", {
        y: -120,
        stagger: 0.25,
        duration: 1,
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            start: "top 80%", // Adjusted start value
            end: "top 53%", // Adjusted end value
            scrub: 2
        }
    });
}

page2Animation();
