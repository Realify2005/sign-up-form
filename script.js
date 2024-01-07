const form = document.querySelector(".form");
form.addEventListener("submit", function(e) {
    e.preventDefault();

    const pw = document.getElementById("password").value;
    const confirm_pw = document.getElementById("confirm-password").value;

    const error = document.getElementById("pw-error");

    if (pw != confirm_pw) {
        error.style.display = "block";
        pw.style.outline = "1px solid red";
        confirm_pw.style.outline = "1px solid red";
    }
    else {
        error.style.display = "none";
        pw.style.outline = "1px solid green";
        confirm_pw.style.outline = "1px solid green";
    }
})