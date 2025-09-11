// document.addEventListener("DOMContentLoaded", function () {
//   const pwd = document.getElementById("password");
//   const toggle_password = document.getElementById("toggle_password");

//   toggle_password.addEventListener("click", () => {
//     if (pwd.type === "password") {
//       pwd.type = "text";
//       toggle_password.classList.remove("fa-eye");
//       toggle_password.classList.add("fa-eye-slash"); // cambia a ojo tachado
//     } else {
//       pwd.type = "password";
//       toggle_password.classList.remove("fa-eye-slash");
//       toggle_password.classList.add("fa-eye"); // vuelve al ojo normal
//     }
//   });
// });

// otra manera de hacerlo

const password = document.getElementById("password");

toggle_password.addEventListener("click", () => {
    const type = password.type === "password" ? "text" : "password";
    password.type = type;
    toggle_password.classList.toggle("fa-eye");
    toggle_password.classList.toggle("fa-eye-slash");
});

function validar(){
  let password = document.getElementById("password").value;
  let lowercase = /[a-z]/.test(password);
  let uppercase = /[A-Z]/.test(password);
  let number = /\d/.test(password);
  let specialchar = /[\W_]/.test(password);
  if (password.length < 8) {
    swal.fire(
      "Error",
      "la contraseña debe tener al menos 8 caracteres.",
      "error"
    );

    return
  }
  if(specialchar && lowercase && uppercase && number){
    swal.fire(
      "Correcto",
      "la contraseña cumple las condiciones",
      "success"
    );
  }
  else{
    swal.fire({
      icon: "error",
      title: "contraseña invalida",
      html: `
      <ul style= "text-align:left; margin-left:20px;">
        <li>${number ?  "✅" : "❌" } Al menos un numero</li>
        <li>${lowercase ?  "✅" : "❌" } Al menos una minuscula</li>
        <li>${uppercase ?  "✅" : "❌" } Al menos una mayuscula</li>
        <li>${specialchar ?  "✅" : "❌" } Al menos un caracter especial</li>
      </ul>
    `
      
    })
  }
}