function firstpageadmin() {
    var t1 = gsap.timeline();
    t1.from(".animation-elem", {
        y:0,
        ease: expo.easeInOut,
        duration: 1.5,
        delay: -1,
        stagger: .2
    })
}
firstpageadmin();