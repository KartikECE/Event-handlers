let emailInput = document.getElementById("emailInput");
let pwdInput = document.getElementById('pwdInput');
let submitBtn = document.getElementById('submitBtn');

let emailMessage = document.getElementById('email-message');
let passMessage = document.getElementById('password-message');
let correctMessage = document.getElementById('correct-message');

function onChange() {
    let email = emailInput.value;
    let pwd = pwdInput.value;
    if (email.length > 3 && email.includes('@') && email.includes('.') && pwd.length > 8) {
        passMessage.innerText = "";
        emailMessage.innerText = "";
        correctMessage.innerText = "All good to go!";
        correctMessage.style.color = "green";
        return true;
    }

    else {
        emailMessage.innerText = "Make sure that email has more than 3 characters and has @ and a.";
        emailMessage.style.color = "red";

        passMessage.innerText = "Make sure that password is more than 8 characters";
        passMessage.style.color = "red";
        return false;
    }
}

function signup() { //this function for submit button
    let validation = onChange();
    if (validation == true) {
        let confirmation = confirm("Are you sure, do you want to submit?");//confirm is a property in alert
        if (confirmation == true)
            alert("Successfull signup")
        else
            location.reload();//to rediret on the same age and clear both input fields
    }
}
pwdInput.addEventListener('input', onChange);//we are applying function on password field bcoz when user type password then it will also check for email
// input is event 
submitBtn.addEventListener('click', signup);