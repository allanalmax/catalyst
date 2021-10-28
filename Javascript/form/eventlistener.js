const usname = document.registration.usname;
const usid = document.registration.userid;
const usemail = document.registration.useremail;
const uspassword = document.registration.userpassword;

const userid = () => {
    if (usid.value == '') {
        alert('enter user id')
        usid.focus();
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

