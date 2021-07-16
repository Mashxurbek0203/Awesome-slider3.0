const upBtn = document.querySelector('.up-button')

const downBtn = document.querySelector('.down-button')

const mainSlide = document.querySelector('.main-slide')

const slidesQuantity = mainSlide.querySelectorAll('div').length

const sidebar = document.querySelector('.sidebar')

const container = document.querySelector('.container')

let activeSlideIndex = 0;




sidebar.style.top = `-${(slidesQuantity - 1) * 100}vh`

upBtn.addEventListener('click', () => {
    changeSlide('up')
})
downBtn.addEventListener('click', () => {
    changeSlide('down')
})

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === slidesQuantity) {
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesQuantity - 1
        }
    }
    const height = container.clientHeight
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}