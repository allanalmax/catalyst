/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
const paragraph = document.querySelector('p');
const btn1 = document.querySelector('button');
const btn2 = document.getElementById('button2');
const changeTextlistener = () => {
  paragraph.textContent = 'Why are you clicking the button';
  paragraph.style.color = 'gray';
};
const makeAlert = () => {
  alert('I alerted because of an event listener');
};
const myButton = () => {
  // eslint-disable-next-line no-restricted-globals
  // eslint-disable-next-line no-alert
  confirm('You decided to click this button');
};
btn1.addEventListener('click', changeTextlistener);
btn1.addEventListener('dblclick', makeAlert);
btn2.addEventListener('focus', myButton);