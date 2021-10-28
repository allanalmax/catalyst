const p = document.querySelector('p');
const button = document.querySelector('button');
const input = document.getElementById('txt')

const change_text = () => {
    p.textContent = 'You have clicked me'
    p.style.color = 'red'
}

const alert_text = () => {
    alert("Alerted by an event listener")
}

const btn2 = () => {
    confirm('Form submitted')
}

button.addEventListener('click', change_text)
button.addEventListener('dblclick', alert_text)
input.addEventListener('mouseover', btn2)
