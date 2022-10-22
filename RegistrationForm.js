document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault();
    checkData();
})

let username = document.getElementById("username")
let name = document.getElementById("name")
let email = document.getElementById("email")
let pass1 = document.getElementById("pass1")
let pass2 = document.getElementById("pass2")


function checkData() {

    let usernameValue = username.value.trim();
    let NameValue = Name.value.trim();
    let emailValue = email.value.trim();
    let pass1Value = pass1.value.trim();
    let pass2Value = pass2.value.trim();
    searchMeal() 
    if (usernameValue == "") {
        setError(username, "Username can't be blank");
    }else if (!isUsername(usernameValue)) {
        setError(username, "Username cannot contain special characters");
    }  else {
        setSuccess(username);
    }

    if (NameValue == "") {
        setError(Name, "Name can't be blank");
    }else if (!isName(NameValue)) {
        setError(Name, "Name cannot contain special characters and numbers");
    } else {
        setSuccess(Name);
    }

    if (emailValue == "") {
        setError(email, "Email can't be blank");
    } else if (!isEmail(emailValue)) {
        setError(email, "Invalid email address");
    } else {
        setSuccess(email);
    }

    if (pass1Value == "") {
        setError(pass1, "Password can't be blank");
    } else if (!isPass1(pass1Value)) {
        setError(pass1, "Please create strong Password");
    } else {
        setSuccess(pass1);
    }

    if (pass2Value == "") {
        setError(pass2, "Password can't be blank");
    }else if (pass1Value !== pass2Value) {
        setError(pass2, "Password does not match");
    } else {
        setSuccess(pass2);
    }
}

function setError(u, msg) {
    let parentBox = u.parentElement;
    parentBox.className = "input-field error";
    let span = parentBox.querySelector("span");
    let fa = parentBox.querySelector(".fa");
    span.innerText = msg;
    fa.className = "fa fa-solid fa-circle-exclamation";
}

function setSuccess(u) {
    let parentBox = u.parentElement;
    parentBox.className = "input-field success";
    let fa = parentBox.querySelector(".fa");
    fa.className = "fa fa-sharp fa-solid fa-circle-check";
}

function isUsername(un) {
    let reg = /^[a-zA-Z0-9]+$/;
    return reg.test(un);
}

function isName(n) {
    let reg = /^[a-zA-Z ]+$/;
    return reg.test(n);
}

function isEmail(e) {
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return reg.test(e);
}

function isPass1(p) {
    let reg = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return reg.test(p);
}

