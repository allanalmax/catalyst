const validate = () => {
    const userid = document.registration.userid;
    const userpass = document.registration.userpass;
    const username = document.registration.username;
    // const address = document.registration.address;
    const useremail = document.registration.useremail;
    if (userid.value == '') {
        alert('enter user id');
        userid.focus();
        userid.style.border = '2px solid red';
        return false;
    }

    //const id = /^[0-9a-zA-Z]+$/

    if (userpass.value == '') {
        alert('enter password');
        userpass.focus();
        userpass.style.border = '2px solid red';
        return false;
    }

    if (username.value == '') {
        alert('enter user name');
        username.focus();
        username.style.border = '2px solid red';
        return false;
    }

    const user = /^[A-Za-z]+$/;
    if (username.value.match(user)) {
        return true;
    } else {
        alert('Your name should not consist a number');
    }

    if (useremail.value == '') {
        alert('enter user email');
        useremail.focus();
        useremail.style.border = '2px solid red';
        return false;
    }

    const email = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

    if (useremail.value.match(email)) {
        return true;
    } else {
        alert('enter user email');
        useremail.style.border = '2px solid red';
    }
    //phone number /^\d{10}$/

    return true;
};