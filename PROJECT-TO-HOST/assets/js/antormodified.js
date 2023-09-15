window.onload = ()=>{
    document.getElementById("hide-on-load").style.opacity = "0"
}

// handle email submit for subscribe in home page 
document.getElementById("subscriptionForm").addEventListener("submit", e =>{
    e.preventDefault()
    console.log(e.target.email.value)
    
})

const popup = document.getElementById("submit-popup")
popup.addEventListener("click", ()=>{
    popup.classList.toggle("hidden")
})

// handle big-form on home page 
document.getElementById("index-big-form").addEventListener("submit", e=>{
    e.preventDefault()
    const data = {name: e.target.name.value,
                email: e.target.email.value,
                phone: e.target.phone.value,
                business: e.target.business.value,
                dateTime: e.target.time.value,
    }

    e.target.name.value=""
    popup.classList.toggle("hidden")

})
