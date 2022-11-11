let index = 1
showSlides(index)

function advanceSlide(btn) {
    showSlides(index += btn)
}

function currentSlide(k) {
    showSlides(index = k)
}

function showSlides(k) {
    let slides = document.getElementsByClassName('slide')
    let dots = document.getElementsByClassName('dot')
    if (k>slides.length) {index = 1}
    if (k<1) {index = slides.length}
    for (let i=0; i< slides.length; i++) {
        slides[i].style.display = 'none'
    }
    for (let i=0; i<dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "")
    }

    slides[index-1].style.display = 'block'
    dots[index-1].style.display = 'active'
}

let slideIndex = 0 
slideShowAuto()

function slideShowAuto() {
    let slides = document.getElementsByClassName('slide')
    for (let i=0; i<slides.length; i++) {
        slides[i].style.display = 'none'
    }
    slideIndex++
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = 'block'
    setTimeout(slideShowAuto, 2000)
}