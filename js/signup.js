// ACRB Smart Phones Signup

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const mobile = document.querySelector('input[type="tel"]').value;
    const password = document.querySelectorAll('input[type="password"]')[0].value;
    const confirmPassword = document.querySelectorAll('input[type="password"]')[1].value;

    if(name === ""  email === ""  mobile === ""  password === ""  confirmPassword === ""){
        alert("Please fill all fields.");
        return;
    }

    if(password !== confirmPassword){
        alert("Passwords do not match.");
        return;
    }

    alert("Account Created Successfully!");

    window.location.href = "login.html";

});