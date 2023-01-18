
function Username() { 
    var username = prompt("Enter your username:", "");

    if (username.toString().length > 2) {
        localStorage.setItem("username", username);
    }

    else {
        alert("Your username is stupid");
        Username();
    }

}