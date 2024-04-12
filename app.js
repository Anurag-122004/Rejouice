function locoscroll() {
        
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });


    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}

locoscroll();
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
    gsap.from(".elem h1", {
        y: 120,
        stagger: 0.25,
        duration: 4,
        // ease:"back.out",
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            start: "top 45%", // Adjusted start value
            end: "top 40%", // Adjusted end value
            // markers: true,
            scrub: 2
        }
    });
}

page2Animation();

function imageSlider () {
    let swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay : 2000,
            disableOnInteraction: false,
        }
    });
}

imageSlider();