// Save credentials to localStorage
function register() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("error");

  if (username && password) {
    localStorage.setItem(username, password);
    error.textContent = "Registered successfully! Now login.";
  } else {
    error.textContent = "Please enter valid credentials!";
  }
}

function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("error");

  const storedPassword = localStorage.getItem(username);
  if (storedPassword === password) {
    window.location.href = "main.html";
  } else {
    error.textContent = "Invalid username or password!";
  }
}
