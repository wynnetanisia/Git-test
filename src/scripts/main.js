const navToggle = document.querySelector("header .nav-toggle")
const navMobile = document.querySelector(".nav-mobile")

navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("opened")
    navMobile.classList.toggle("opened")
})

const scrollToTopBtn = document.querySelector("footer .scroll-to-top")
scrollToTopBtn.addEventListener('click', (e) => {
    e.preventDefault()

    window.scrollTo(0, 0)
})