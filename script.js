const hourElement = document.getElementById("hour")
const minuteElement = document.getElementById("minute")
const secondElement = document.getElementById("second")
const ampmElement = document.getElementById("ampm")

const clockUpdate = ()=> {
    let hour = new Date().getHours()
    let minutes = new Date().getMinutes()
    let seconds = new Date().getSeconds()
    let ampm = "AM"

    if (hour>12) {
        hour = hour - 12
    }

    if (hour>=12) {
        ampm = "PM"
    }

    
    hour = hour<10 ? "0" + hour : hour
    seconds = seconds<10 ? "0" + seconds : seconds
    minutes = minutes<10 ? "0" + minutes : minutes
    
    hourElement.innerText = hour
    minuteElement.innerText = minutes
    secondElement.innerText = seconds
    ampmElement.innerText = ampm

    setTimeout(()=> {
        clockUpdate()
    }, 1000)
}

clockUpdate()

