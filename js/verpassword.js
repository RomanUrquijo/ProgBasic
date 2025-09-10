document.addEventListener("DOMContentLoaded", function () {
  const pwd = document.getElementById("password");
  const toggle_password = document.getElementById("toggle_password");

  toggle_password.addEventListener("click", () => {
    if (pwd.type === "password") {
      pwd.type = "text";
      toggle_password.classList.remove("fa-eye");
      toggle_password.classList.add("fa-eye-slash"); // cambia a ojo tachado
    } else {
      pwd.type = "password";
      toggle_password.classList.remove("fa-eye-slash");
      toggle_password.classList.add("fa-eye"); // vuelve al ojo normal
    }
  });
});
