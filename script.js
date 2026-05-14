// select element
const displayPassword = document.getElementById("displayPassword");
const generateBtn = document.getElementById("btn");

// declare 
const passwordLength = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "123456789";
const symbols = "!@#$%^&*()_+-=[]{};':,/<>?|~";
const allChar = upperCase + lowerCase + numbers + symbols

// create password function
generateBtn.addEventListener("click", () => {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];

    while (passwordLength > password.length) {
        password += allChar[Math.floor(Math.random() * allChar.length)];
    } 
    // display result
    displayPassword.value = password;
});