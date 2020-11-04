var button = document.querySelector("#button-pass");
var pass = document.querySelector("#pass");
var confirm = document.querySelector("#confirm-pass");

button.addEventListener('click', function(e) {
    let value = e.target.value;
    if (pass.value === confirm.value) {
        pass.style.borderColor = "green";
        confirm.style.borderColor ="green";
    } else {
        pass.style.borderColor = "red";
        confirm.style.borderColor ="red";
    }
});

