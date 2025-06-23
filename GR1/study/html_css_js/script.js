document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  document.getElementById("result").textContent = `Chào ${name}, email của bạn là ${email}`;
});
