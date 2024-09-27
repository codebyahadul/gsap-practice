const tl = gsap.timeline()
tl.from('#logo h2', {
    y: -50,
    duration: 1,
    opacity: 0,
})
tl.from('ul li', {
    y: -50,
    duration: 1,
    opacity: 0,
    stagger: .2
})

tl.from('#banner', {
    y: 10,
    opacity: 0,
    duration: .5,
    scale: .5,
})