

function updateDateTime() { const now = new Date(); document.getElementById("datetime").innerHTML = now.toLocaleString(); } setInterval(updateDateTime, 1000); updateDateTime();

document.getElementById("accountForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let error = document.getElementById("error");
    error.innerHTML = "";

    if (name === "" && email === "" && password === "") {
        error.innerHTML = "please inter your information";
    }
    else if (name === "") {
        error.innerHTML = "Please enter name";
    }
    else if (email === "") {
        error.innerHTML = "Please enter email";
    }
    else if (password === "") {
        error.innerHTML = "Please enter password";
    }
    else {
        alert("Form Submitted");
    }
});
