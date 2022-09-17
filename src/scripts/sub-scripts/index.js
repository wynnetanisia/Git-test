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