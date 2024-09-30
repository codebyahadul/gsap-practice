const nextBtn = document.querySelector('.next-btn')
const prevBtn = document.querySelector('.prev-btn')
const container = document.querySelector('.container')
const slides = Array.from(document.querySelector('.slide'))
console.log(slides);

const indication = document.querySelector('.index-container span:nth-child(1)')
let index = 0;

function animRight(){
    const TLRight = gsap.timeline()
    TLRight
    .to(slides[index], {duration: .6, x:0})

}

animRight()