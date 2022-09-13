const picsContainerMobile = document.querySelector("#picsContainerMobile")
const picsContainerTablet1 = document.querySelector("#picsContainerTablet .col-1")
const picsContainerTablet2 = document.querySelector("#picsContainerTablet .col-2")
const picsContainerDesktop1 = document.querySelector("#picsContainerDesktop .col-1")
const picsContainerDesktop2 = document.querySelector("#picsContainerDesktop .col-2")
const picsContainerDesktop3 = document.querySelector("#picsContainerDesktop .col-3")

// GENERATE IMAGE FUNCTION 
const generateImage = (index, device) => {
    const img = document.createElement('img')
    const imgSrc = "../../assets/pictures/blog-pics/" + index + ".jpg"
    const imgAlt = "Nature and Future Pics"
    img.src = imgSrc
    img.id = index
    img.alt = imgAlt
    img.setAttribute("onclick", "openLightbox(this.id)")
    
    // what type is the device
    if(device === "mobile") picsContainerMobile.appendChild(img)
    else if(device === "tabletCol1") picsContainerTablet1.appendChild(img)
    else if(device === "tabletCol2") picsContainerTablet2.appendChild(img)
    else if(device === "desktopCol1") picsContainerDesktop1.appendChild(img)
    else if(device === "desktopCol2") picsContainerDesktop2.appendChild(img)
    else if(device === "desktopCol3") picsContainerDesktop3.appendChild(img)
    else console.error("ERR : unknown device argument generateImage()")
}

const minImageNumber = 1 
const maxImageNumber = 12

// mobile gallery 
for(var i = minImageNumber; i <= maxImageNumber; i++) generateImage(i, "mobile")

// tablet gallery
for(var i = minImageNumber; i <= maxImageNumber; i++)
{
    if(i <= Math.round(maxImageNumber/2)) generateImage(i, "tabletCol1")
    else if(i > Math.round(maxImageNumber/2) && i <= maxImageNumber) generateImage(i, "tabletCol2")
    else console.error("ERR : while generating image (tablet gallery)")
}

// desktop gallery
for(var i = minImageNumber; i <= maxImageNumber; i++)
{
    if(i <= maxImageNumber/3) generateImage(i, "desktopCol1")
    else if(i > maxImageNumber/3 && i <= (maxImageNumber*2)/3) generateImage(i, "desktopCol2")
    else if(i > (maxImageNumber*2)/3) generateImage(i, "desktopCol3")
    else console.error("ERR : while generating image (desktop gallery)")
}

// LIGHTBOX
const lightboxContainer = document.querySelector("#lightbox-container")
const body = document.querySelector("body")

// Closing the Lightbox
const closeLightboxBtn = document.querySelector("#lightbox-container .close")
if(closeLightboxBtn && lightboxContainer)
{
    closeLightboxBtn.addEventListener("click", () => {

        lightboxContainer.classList.add("closed")
        body.classList.remove("overflow-hidden")
    })
}

// Opening the Lightbox
const openLightbox = (imageIndex) => {
    switchImage(imageIndex)

    body.classList.add("overflow-hidden")
    lightboxContainer.classList.remove("closed")
}

// Switching the Lightbox Image
const switchImage = (imageIndex) => {
    var newSrc = `../../assets/pictures/blog-pics/${imageIndex}.jpg`
    var currentImageNumber = document.querySelector("#lightbox-container .imageNumber .current")
    var totalImageNumber = document.querySelector("#lightbox-container .imageNumber .totalNumber")

    const lightboxImage = document.querySelector("#lightbox-container #lightbox img")
    lightboxImage.src = newSrc
    lightboxImage.id = imageIndex

    currentImageNumber.innerHTML = imageIndex
    totalImageNumber.innerHTML = maxImageNumber
}

// Next and Previous Image button
const nextImage = (currentImageIndex) => {
    if(+currentImageIndex + 1 > maxImageNumber)
    {
        switchImage(1)
    } 
    else switchImage(+currentImageIndex + 1)

} 
const prevImage = (currentImageIndex) => {
    if(+currentImageIndex - 1 < minImageNumber)
    {
        switchImage(maxImageNumber)
    }
    else switchImage(+currentImageIndex - 1)
}