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

// // LIGHTBOX LOGIC
// const child = document.querySelectorAll(".child")
// const body = document.querySelector('body')
// const lightBoxTitle = document.querySelector(".lightboxTitle")
// const lightBox = document.querySelector(".lightbox")
// const lightBoxDisplay = document.querySelector('#display')

// // initial image number
// var activeImageIndex

// // display the lightbox
// function displayLightbox (imageIndex) 
// {
//     activeImageIndex = imageIndex
//     changeImage(activeImageIndex)

//     // open the lightbox    
//     lightBox.style.display = "flex"
//     body.style.overflow = "hidden"
// }

// // close the lightbox
// function closeLightbox () 
// {
//     var displayedImage = document.querySelector("#displayedImage")
//     displayedImage.remove()
//     lightBox.style.display = "none"
//     body.style.overflow = "auto"
// }

// // add or change the image that displayed on the lightbox
// function changeImage(currentIndex)
// {
//     var imageSrc = "../assets/img4/" + currentIndex + ".jpg"
//     var img = document.createElement("img")
//     img.id = "displayedImage"
//     img.src = imageSrc 
//     lightBoxDisplay.appendChild(img)
//     var title = "Gambar ke-" + currentIndex + " dari " + maxImageNumber
//     lightBoxTitle.innerHTML = title
// }

// // for the onclick next image button
// function nextImage ()
// {
//     // reset the image that displayed before
//     var displayedImage = document.querySelector("#displayedImage")
//     displayedImage.remove()

//     // increase the index
//     activeImageIndex++

//     // check how big is the activeImageIndex
//     if (activeImageIndex > maxImageNumber) 
//     {
//         activeImageIndex = minImageNumber
//         changeImage(activeImageIndex)
//     } else changeImage(activeImageIndex)
// }

// // for the onclick previous image button
// function previousImage ()
// {
//     // reset the image that displayed before
//     var displayedImage = document.querySelector("#displayedImage")
//     displayedImage.remove()

//     // decrease the index
//     activeImageIndex--

//     // check how big is the activeImageIndex
//     if (activeImageIndex < minImageNumber) 
//     {
//         activeImageIndex = maxImageNumber
//         changeImage(activeImageIndex)
//     } else changeImage(activeImageIndex)
// }
// // LIGHTBOX LOGIC

const lightboxContainer = document.querySelector("#lightbox-container")
const body = document.querySelector("body")

// Closing the Lightbox
const closeLightboxBtn = document.querySelector("#lightbox .close")
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
    
    var currentImageNumber = document.querySelector("#lightbox .imageNumber .current")
    var totalImageNumber = document.querySelector("#lightbox .imageNumber .totalNumber")

    currentImageNumber.innerHTML = imageIndex
    totalImageNumber.innerHTML = maxImageNumber

    body.classList.add("overflow-hidden")
    lightboxContainer.classList.remove("closed")
}

// Switching the Lightbox Image
const switchImage = (imageIndex) => {
    var newSrc = `../../assets/pictures/blog-pics/${imageIndex}.jpg`

    const lightboxImage = document.querySelector("#lightbox-container #lightbox img")
    lightboxImage.src = newSrc
}

// CONTINUE HERE
// const nextImage = (currentImageIndex) => {
//     switchImage(currentImageIndex + 1)
// } 