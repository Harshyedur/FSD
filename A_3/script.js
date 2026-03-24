// ================= EMAIL VALIDATION =================
function validateEmail() {
    let email = document.getElementById("email").value;
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)) {
        document.getElementById("emailResult").innerText = "Valid Email ✅";
    } else {
        document.getElementById("emailResult").innerText = "Invalid Email ❌";
    }
}


// ================= PASSWORD STRENGTH =================
function checkStrength() {
    let password = document.getElementById("password").value;
    let strength = "";

    if (password.length < 6) {
        strength = "Weak ❌";
    } 
    else if (password.match(/[A-Z]/) && password.match(/[0-9]/) && password.match(/[@$!%*?&]/)) {
        strength = "Strong 💪";
    } 
    else {
        strength = "Medium ⚠️";
    }

    document.getElementById("strengthResult").innerText = strength;
}


// ================= COOKIE FUNCTIONS =================

// Set Cookie
function setCookie() {
    document.cookie = "username=JohnDoe; path=/";
    alert("Cookie Set!");
}

// Get Cookie
function getCookie() {
    let cookies = document.cookie;

    if (cookies === "") {
        document.getElementById("cookieResult").innerText = "No cookies found";
    } else {
        document.getElementById("cookieResult").innerText = cookies;
    }
}


// ================= SESSION STORAGE =================

// Set Session
function setSession() {
    sessionStorage.setItem("user", "JohnDoe");
    alert("Session Stored!");
}

// Get Session
function getSession() {
    let user = sessionStorage.getItem("user");

    if (user === null) {
        document.getElementById("sessionResult").innerText = "No session data found";
    } else {
        document.getElementById("sessionResult").innerText = user;
    }
}