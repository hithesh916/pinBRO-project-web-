function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("error");

  // Demo credentials
  if (username === "admin" && password === "1234") {
    window.location.href = "main.html";
  } else {
    error.textContent = "Invalid username or password!";
  }
}
