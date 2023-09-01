window.onload = ()=>{
    document.getElementById("hide-on-load").style.opacity = "0"
}

document.getElementById("subscriptionForm").addEventListener("submit", e =>{
    e.preventDefault()
    console.log(e.target.email.value)
    
})