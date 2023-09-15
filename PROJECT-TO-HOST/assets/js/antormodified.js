window.onload = ()=>{
    document.getElementById("hide-on-load").style.opacity = "0"
}

document.getElementById("subscriptionForm").addEventListener("submit", e =>{
    e.preventDefault()
    console.log(e.target.email.value)
    
})

const popup = document.getElementById("submit-popup")
popup.addEventListener("click", ()=>{
    popup.classList.toggle("hidden")
})

const indexBigForm = document.getElementById("index-big-form")

// indexBigForm.submit((e)=>{
//     e.preventDefault()
//     console.log(e.target)
// })