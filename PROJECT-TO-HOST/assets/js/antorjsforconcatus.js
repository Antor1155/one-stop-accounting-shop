// url for the backend
const url = "http://localhost:5000/formdata/"

// handle big-form on home page 
document.getElementById("cform").addEventListener("submit", e=>{
    e.preventDefault()
    const data = {name: e.target.name.value,
                email: e.target.email.value,
                phone: e.target.phone.value,
                message: e.target.message.value,
    }

    console.log(data)

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