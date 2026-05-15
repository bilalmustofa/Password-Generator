// select element
const displayPassword = document.getElementById("displayPassword");
const generateBtn = document.getElementById("btn");
const copyIcon = document.getElementById("copyIcon");

// declare 
const passwordLength = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "123456789";
const symbols = "!@#$%^&*()_+-=[]{};':,/<>?|~";
const allChar = upperCase + lowerCase + numbers + symbols

// create password 
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

// copy password
copyIcon.addEventListener("click", () => {
    const password = displayPassword.value;
    displayPassword.select(); //Select the text field
    navigator.clipboard.writeText(password).then(() => {
        generateBtn.textContent = "Copied...";
        setTimeout(() => {
            generateBtn.textContent = "Generate";
        }, 1000);
    });
});