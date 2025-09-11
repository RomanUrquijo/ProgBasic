// const password = document.getElementById("password");

// // Lógica  para ver y ocultar contraseña
// toggle_password.addEventListener("click", () => {
//     const type = password.type === "password" ? "text" : "password";
//     password.type =  type;
//     toggle_password.classList.toggle("fa-eye");
//     toggle_password.classList.toggle("fa-eye-slash");
// });

// function validar(){
//     let password    = document.getElementById("password").value;
//     let lowercase   = /[a-z]/.test(password);
//     let uppercase   = /[A-Z]/.test(password);
//     let number      = /\d/.test(password);
//     let specialchar = /[\W_]/.test(password);
//     if(password.length < 8){
//         Swal.fire(
//             "Error",
//             "La contraseña debe tener al menos 8 caracteres.",
//             "error"
//         );

//         return
//     }
//     if(specialchar && lowercase && uppercase && number){
//         Swal.fire(
//             "Correcto",
//             "La contraseña cumple con las condiciones.",
//             "success"
//         );                    
//     }
//     else{
//         Swal.fire({
//             icon: "error",
//             title: "Contraseña Invalida",
//             html: `
//                 <ul style="text-align:left; margin-left:20px;">
//                     <li>${number ? "✅" : "❌" } Al menos un número</li>
//                     <li>${lowercase ? "✅" : "❌" } Al menos una minúscula</li>
//                     <li>${uppercase ? "✅" : "❌" } Al menos una mayúscula</li>
//                     <li>${specialchar ? "✅" : "❌" } Al menos un caracter especial</li>
//                 </ul>
//             `
//         });                 
//     }
// } 

// const password1 = document.getElementById("password1");

// // Lógica  para ver y ocultar contraseña
// toggle_password.addEventListener("click", () => {
//     const type = password.type === "password" ? "text" : "password";
//     password.type =  type;
//     toggle_password.classList.toggle("fa-eye");
//     toggle_password.classList.toggle("fa-eye-slash");
// });

// function validar() {
 
//     // Ontenemos los valores de los campos de contraseñas 
//     password1 = document.getElementById('password1');
//     password2 = document.getElementById('password2');
 
//     // Verificamos si las constraseñas no coinciden 
//     if (password1.value != password2.value) {
 
//         // Si las constraseñas no coinciden mostramos un mensaje 
//         document.getElementById("error").classList.add("mostrar");
 
//         return false;
//     } else {
 
//         // Si las contraseñas coinciden ocultamos el mensaje de error
//         document.getElementById("error").classList.remove("mostrar");
 
//         // Mostramos un mensaje mencionando que las Contraseñas coinciden 
//         document.getElementById("ok").classList.remove("ocultar");
 
//         // Desabilitamos el botón de login 
//         document.getElementById("login").disabled = true;
 
//         // Refrescamos la página (Simulación de envío del formulario) 
//         setTimeout(function() {
//             location.reload();
//         }, 3000);
 
//         return true;
//     }
 
// }
 
// Seleccionamos todos los íconos de "ver/ocultar contraseña"
// Obtenemos referencias de los inputs, íconos y mensaje
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const toggle1 = document.getElementById("toggle_password1");
const toggle2 = document.getElementById("toggle_password2");
const mensaje = document.getElementById("mensaje");

// Lógica para ver/ocultar contraseña 1
toggle1.addEventListener("click", () => {
    const type = password1.type === "password" ? "text" : "password";
    password1.type = type;
    toggle1.classList.toggle("fa-eye");
    toggle1.classList.toggle("fa-eye-slash");
});

// Lógica para ver/ocultar contraseña 2
toggle2.addEventListener("click", () => {
    const type = password2.type === "password" ? "text" : "password";
    password2.type = type;
    toggle2.classList.toggle("fa-eye");
    toggle2.classList.toggle("fa-eye-slash");
});

// Validación en tiempo real para ambos campos
function validarEnTiempoReal() {
    if (password1.value === "" && password2.value === "") {
        password1.classList.remove("error", "ok");
        password2.classList.remove("error", "ok");
        mensaje.textContent = ""; // sin mensaje
        return;
    }

    if (password1.value === password2.value && password1.value !== "") {
        // Coinciden → verde
        password1.classList.remove("error");
        password2.classList.remove("error");
        password1.classList.add("ok");
        password2.classList.add("ok");
        mensaje.textContent = "✅ Las contraseñas coinciden";
        mensaje.className = "msg ok-text";
    } else {
        // No coinciden → rojo
        password1.classList.remove("ok");
        password2.classList.remove("ok");
        password1.classList.add("error");
        password2.classList.add("error");
        mensaje.textContent = "❌ Las contraseñas no coinciden";
        mensaje.className = "msg error-text";
    }
}

// Escuchar eventos input en ambos campos
password1.addEventListener("input", validarEnTiempoReal);
password2.addEventListener("input", validarEnTiempoReal);

// Validación final al hacer clic en el botón
function validar() {
    if (password1.value !== password2.value || password1.value === "") {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Las contraseñas no coinciden"
        });
        return false;
    } else {
        Swal.fire({
            icon: "success",
            title: "Correcto",
            text: "Las contraseñas coinciden"
        });
        return true;
    }
}
