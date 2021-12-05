const usname = document.registration.username;
const usid = document.registration.userid;
const usemail = document.registration.useremail;
const uspassword = document.registration.userpassword;

const userid = (event) => {
    event.preventdefault();
    if (usid.value == '') {
        alert('enter user id')
        usid.focus();
        usid.style.border = '2px solid red';
        return false;
    }
};

const username = () => {
    if (usname.value == '') {
        alert('enter user username')
        usid.focus();
        return false;
    }
};

const form = document.getElementById('form')
form.addEventListener('submit', userid)
form.addEventListener('submit', username)

