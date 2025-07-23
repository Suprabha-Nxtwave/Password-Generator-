const passwordOutput = document.getElementById("passwordOutput");
const copyIcon = document.getElementById("copyIcon");
const generateBtn = document.getElementById("generateBtn");
const notification = document.getElementById("notification");

const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const lengthInput = document.getElementById("length");

const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+-=[]{}|;:,.<>?/";

function generatePassword() {
    let charSet = "";
    if (uppercase.checked) charSet += upperChars;
    if (lowercase.checked) charSet += lowerChars;
    if (numbers.checked) charSet += numberChars;
    if (symbols.checked) charSet += symbolChars;

    const length = parseInt(lengthInput.value);
    if (charSet.length === 0 || length < 4) {
        passwordOutput.value = "⚠️ Invalid settings";
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomChar = charSet[Math.floor(Math.random() * charSet.length)];
        password += randomChar;
    }

    passwordOutput.value = password;
}

function copyToClipboard() {
    const password = passwordOutput.value;
    if (!password || password.includes("Invalid")) return;

    navigator.clipboard.writeText(password).then(() => {
        notification.classList.remove("opacity-0");
        notification.classList.add("opacity-100");

        setTimeout(() => {
            notification.classList.remove("opacity-100");
            notification.classList.add("opacity-0");
        }, 2000);
    });
}

generateBtn.addEventListener("click", generatePassword);
copyIcon.addEventListener("click", copyToClipboard);