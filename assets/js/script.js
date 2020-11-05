var button = document.querySelector("#button-pass");
var pass = document.querySelector("#pass");
var confirm = document.querySelector("#confirmPass");

button.addEventListener('click', function() {
    if (pass.value === confirm.value) {
        pass.style.borderColor = "green";
        confirm.style.borderColor ="green";
    } else {
        pass.style.borderColor = "red";
        confirm.style.borderColor ="red";
    }
});

