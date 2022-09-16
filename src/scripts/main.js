// mobile navigation
const navToggle = document.querySelector("header .nav-toggle")
const navMobile = document.querySelector(".nav-mobile")
if(navToggle && navMobile)
{
    navToggle.addEventListener("click", () => {
        navToggle.classList.toggle("opened")
        navMobile.classList.toggle("opened")
    })
}

// scroll to top 
const scrollToTopBtn = document.querySelector("footer .scroll-to-top")
if(scrollToTopBtn)
{
    scrollToTopBtn.addEventListener('click', (e) => {
        e.preventDefault()
    
        window.scrollTo(0, 0)
    })
}

// loading animation
const stopLoadingAnimation = () => {
    const body = document.querySelector("body")
    const loaderContainer = document.querySelector(".loaderContainer")

    body.classList.remove("loading")
    loaderContainer.classList.add("hide-animation")
}

window.addEventListener("load", () => {
    stopLoadingAnimation();
})

// Animate On Scroll functionality 
const aosObjects = document.querySelectorAll(".aos-base")
if(aosObjects)
{
    // offset for customize on what height I want to make the animation active
    const elInView = (el, offset) => {
        let elementTop = el.getBoundingClientRect().top
        
        // return true of false
        return (
            elementTop <= ((window.innerHeight || document.documentElement.clientHeight) - offset)
        )
    }

    const addAnimation = (el) => el.classList.add("scrolled")

    const removeAnimation = (el) => el.classList.remove("scrolled")

    const runAnimation = () => {
        aosObjects.forEach(obj => {
            if(elInView(obj, 50)) addAnimation(obj)
        })
    }

    window.addEventListener("scroll", () => runAnimation())
}