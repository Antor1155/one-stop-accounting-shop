// url for the backend

// const url = "http://localhost:5000/formdata/"
const url = "https://us-central1-one-stop-accounting-published.cloudfunctions.net/app/formdata/"


window.onload = ()=>{
    document.getElementById("hide-on-load").style.opacity = "0"
}


// handle email submit for subscribe in home page 
document.getElementById("subscriptionForm").addEventListener("submit", e =>{
    e.preventDefault()
    const data ={
        email: e.target.email.value
    } 
    
    fetch(`${url}subscription`, {
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res =>{
        
        e.target.reset()
    })
    .catch(error => {
        console.log(error)
        e.target.reset()
    })
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

    popup.classList.toggle("hidden");

    fetch(`${url}indexbig`, {
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res =>{
        
        e.target.reset()
    })
    .catch(error => {
        console.log(error)
        e.target.reset()
    })

})
