window.addEventListener("scroll", () => {
    // runAnimation()

    // counting animation on the data section
    const CountingDataNumberElements = document.querySelectorAll(".data-stats .data.scrolled span")
    var speed = 25
    const activateCount = () => {
        CountingDataNumberElements.forEach( number => {
            const updateCount = () => {
                const target = +number.getAttribute("data-target")
                const count = +number.innerText
    
                // example. If the target number is 1000, then the number animation will be multiply by 100
                const increment = target / speed
    
                if(count < target)
                {
                    number.innerText = count + increment
                    setTimeout(updateCount, 200)
                }else number.innerText = target

            }
    
            // run the function
            updateCount()
        })
    } 

    setTimeout(activateCount, 750)
})

// INTERSECTION OBSERVER (for heading)
const header = document.querySelector("header.header.header-main");
const navMobileBtn = document.querySelector("header.header.header-main .nav-toggle .bar")
const sectionOne = document.querySelector(".image-background.main");

const sectionOneOptions = { 
    rootMargin : "-80px 0px 0px 0px"
 }

const sectionOneObserver = new IntersectionObserver(function(
    entries, 
    sectionOneObserver
    ) {
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                header.classList.remove("transparent")
            }
            else {
                header.classList.add("transparent")
            }
        })
}, sectionOneOptions)

sectionOneObserver.observe(sectionOne)
