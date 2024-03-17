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