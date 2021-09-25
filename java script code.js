let inputElement = document.getElementById("inputElement");
let signInTextElement = document.getElementById("signInText");

function signIn() {
    let inputValue = inputElement.value;
    let verifyText = "Hi " + inputValue + "." + " Your Doctor Book Appointment Success";
    signInTextElement.textContent = verifyText;
}