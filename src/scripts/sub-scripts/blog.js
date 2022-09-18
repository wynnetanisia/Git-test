const copySiteLinkToClipboard = async () => {
    const link = window.location.href 
    try 
    {
        await navigator.clipboard.writeText(link)
        // const copied = await navigator.clipboard.readText()
        console.log("Link Copied")

        // Run function to turn copy icon to green
    }
    catch(err)
    {
        console.log("Failed to Copy")
        // console.log(err)
    }
}

const copyLinkBtn = document.querySelector(".copy-link")
if(copyLinkBtn)
{
    copyLinkBtn.addEventListener("click", async (e) => {
        e.preventDefault();

        try {
            await copySiteLinkToClipboard()

            copyLinkBtn.classList.add("copied")
        } catch (err) {
            console.log("Clipboard error")
        }
    })
}

const shareOverlay = document.querySelector(".share-overlay")
const body = document.querySelector("body")

const shareBtn = document.querySelector(".share-btn")
shareBtn.addEventListener("click", () => {

    shareOverlay.classList.add("opened")
    body.classList.add("loading")
})
const closeShareBtn = document.querySelector(".close-share-overlay")
closeShareBtn.addEventListener("click", () => {
    shareOverlay.classList.remove("opened")
    body.classList.remove("loading")

    copyLinkBtn.classList.remove("copied")
})