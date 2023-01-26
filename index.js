let serverContent = document.getElementsByClassName("server-content")[0];

function updateContent() {
    serverContent.textContent = "your mom";

    var opened = window.open("");
    opened.document.write("<!DOCTYPE html><html lang'en'><head><meta charset='UTF-8'><meta http-equiv='X-UA-Compatible' content='IE=edge'><meta name='viewport' content='width=device-width, initial-scale=1.0'><title>Louis</title><link rel='stylesheet' href='styles.css'></head><body><div class='top-section'><div>logo placeholder</div><div>search bar placeholder</div></div><div class='bottom-section'><div class='nav-bar'><div class='server'><button onclick='updateContent()'>Server 1</button></div><div class='server'><button>Server 2</button></div><div class='server'><button>Server 2</button></div></div><div class='server-content'>your mom</div></div><script src='index.js'></script></body></html>");
}

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
