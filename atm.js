let debt = document.getElementById('btn1')
let cred = document.getElementById('btn2')
let show = document.getElementById('show')
let avBalance = +prompt("enter your amount")
cred.addEventListener('click', () => {
    let value = +prompt('enter a value')
    if (value < avBalance) {
        avBalance = avBalance - value
    }
    else if (value > avBalance) {
        avBalance = "Insufficient balance"
    }
    show.textContent = avBalance
})
debt.addEventListener('click', () => {
    let value = +prompt('enter a value')
    if (value > 0) {
        avBalance = avBalance + value
    }
    show.innerHTML = avBalance
})