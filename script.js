const name = document.getElementById("name");
const password = document.getElementById("password");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");

form.addEventListener("submit" , (e) => {
    let messages = [];

    if(messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(" ,");
    }
})