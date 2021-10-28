const changeText = () => {
    const p = document.querySelector('p');
    p.textContent = 'I changed because of an inline event handler';
    p.style.color = 'green'
    const div = document.querySelector('div');
    div.textContent = 'I changed because of an inline event handler';
    div.style.color = 'green'
    div.style.border = '2px solid green'
}
