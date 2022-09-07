const navToggle = document.querySelector("header .nav-toggle")
const navMobile = document.querySelector(".nav-mobile")

navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("opened")
    navMobile.classList.toggle("opened")
})