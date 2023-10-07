const signupForm = document.getElementById("signup-form");
const loginForm = document.getElementById("login-form");

signupForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
  window.location.href = "quiz.html"; // Redirect to the quiz page
});

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");
  if (username === storedUsername && password === storedPassword) {
    window.location.href = "quiz.html"; // Redirect to the quiz page
  } else {
    alert("Invalid credentials. Please try again.");
  }
});
