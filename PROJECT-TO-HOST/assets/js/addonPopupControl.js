const popup = document.getElementById("popup")

popup.addEventListener("click", ()=>{
    popup.classList.add("hidden")

})

document.getElementById("cform").addEventListener("submit", () =>{
    popup.classList.remove("hidden")
    console.log("onsubmit done")
})