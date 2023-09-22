// url for the backend
const url = "https://us-central1-one-stop-accounting-published.cloudfunctions.net/app/formdata/"


window.onload = ()=>{
    document.getElementById("hide-on-load").style.opacity = "0"
}


// handle big-form on home page 
document.getElementById("cform").addEventListener("submit", e=>{
    e.preventDefault()
    const data = {name: e.target.name.value,
                email: e.target.email.value,
                phone: e.target.phone.value,
                message: e.target.message.value,
    }

    fetch(`${url}cform`, {
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