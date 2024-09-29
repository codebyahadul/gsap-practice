const tl = gsap.timeline()
tl.from('#logo h2', {
    y: -50,
    duration: 1,
    opacity: 0,
})
tl.from('ul li', {
    y: -50,
    autoAlpha: 1,
    duration: 1,
    opacity: 0,
    stagger: .2
})


 const button = document.getElementById('button')
function animation() {
    button.style.visibility = 'hidden'
    const tl = gsap.timeline({ repeat: -1 })
    tl
        .from('.text-container p', {
            autoAlpha: 0,
            y: 100,
            stagger: .75,
            duration: .75,
        })
        .to('.text-container p', {
            autoAlpha: 0,
            y: -100,
            stagger: .75,
            duration: .75
        }, 0.75)

}
