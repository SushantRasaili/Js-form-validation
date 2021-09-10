const form = document.getElementById('forms');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');


const functions = (usernameVal) => {
        let formCon = document.getElementsByClassName('form-control');
        const namee = usernameVal;
    var count = formCon.length;
    var cnt = 0;
    for(var i=0;i<formCon.length;i++) {
    const classs =  formCon[i].className;
    if(classs === "form-control success") {
        cnt++;

        func(cnt,count,namee);
    }
    else {
        return false;
    }
    }
}
 
function func(Succes,count,namee) {
    if(Succes === count ) {
        swal("Welcome " + namee , "You have successfully been registered", "success");
        // location.href=`success.html?username=${namee}`;
    }
}



form.addEventListener('submit',(event) => {
    event.preventDefault();
    validate();

});

const validate = () => {

    const usernameVal = username.value.trim();
const emailVal = email.value.trim();
const phoneVal = phone.value.trim();
const passwordVal = password.value.trim();
const cpasswordVal = cpassword.value.trim();

//  EROROR MESSAGE FUNC
 const  setErrorMsg = (input, errormsg) => {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector('small');
    small.innerText = errormsg;
}

// SUCCESS MESSAGE FUNC

const setSuccessMsg = (inp) => {
    const formControl = inp.parentElement;
    formControl.className = "form-control success";

}

// USERNAME VALIDATION

if(usernameVal === "") {
    setErrorMsg(username,"Username can't be blank");
}
else if(usernameVal.length < 3) {
    setErrorMsg(username,"Name must have more than 3 letters");
}
else {
    setSuccessMsg(username);
}

// Email Validation

const isEmail = (emails) => {
    var atSymbol = emails.indexOf('@');
    var dot = emails.lastIndexOf('.');
    if(atSymbol < 1) {
        return false;
    }
    else if(dot <= atSymbol + 3) {
        return false;
    }
    else if(dot === emails.length - 1)  {
        return false;
    }
    else {
        return true;
    }
    
}

  
if(emailVal === "") {
    setErrorMsg(email,"Email must be filled");
}
else if(!isEmail(emailVal))
{
    setErrorMsg(email,"Invalid email");
}
else {
    setSuccessMsg(email);
}


// phone validation

if(phoneVal === "") {
    setErrorMsg(phone,"Phone number can't be blank");
}
else if(phoneVal.length != 10) {
    setErrorMsg(phone,"Invalid phone number");
}
else {
    setSuccessMsg(phone);
}


// password validation

if(passwordVal === "") {
    setErrorMsg(password,"Password can't be blank");
}
else if(passwordVal.length <= 5) {
    setErrorMsg(password,"Password must contain atleast 6 letters");
}
else {
    setSuccessMsg(password);
}


// confirm password validation

if(cpasswordVal === "") {
    setErrorMsg(cpassword,"Password can't be blank");
}
else if(cpasswordVal != passwordVal) {
    setErrorMsg(cpassword,"Passwords are not matching");
}
else {
    setSuccessMsg(cpassword);
}

functions(usernameVal);

}