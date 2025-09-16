/***************************************
 * SELECCIÓN DE ELEMENTOS DEL FORMULARIO
 ***************************************/
const nameInput = document.getElementById("name");             // Nombre
const apellidoInput = document.getElementById("apellido");     // Apellido
const mailInput = document.getElementById("mail");             // Correo electrónico
const documentoInput = document.getElementById("document");    // Número de documento
const fechaInput = document.getElementById("fecha_nac");       // Fecha de nacimiento
const telefonoInput = document.getElementById("telefono");     // Teléfono
const pwd1 = document.getElementById("pwd1");                  // Contraseña
const pwd2 = document.getElementById("pwd2");                  // Confirmar contraseña
const togglePwd1 = document.getElementById("togglePwd1");      // Emoji contraseña 1
const togglePwd2 = document.getElementById("togglePwd2");      // Emoji contraseña 2
const form = document.querySelector("form");                   // Formulario completo

/***************************************
 * EXPRESIONES REGULARES
 ***************************************/
const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;             // Solo letras y espacios
const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;          // Email básico válido
const soloNumeros = /^[0-9]{1,10}$/;                        // Solo números, max 10 dígitos

/***************************************
 * VALIDACIÓN CAMPOS TEXTO (NOMBRE Y APELLIDO)
 ***************************************/
function validarCampo(input) {
  if (input.value === "") {
    input.classList.remove("valid", "error");               // Campo vacío → sin estilos
  } else if (soloLetras.test(input.value)) {
    input.classList.add("valid");                           // Correcto → borde verde
    input.classList.remove("error");
  } else {
    input.classList.add("error");                           // Incorrecto → borde rojo
    input.classList.remove("valid");
  }
}

nameInput.addEventListener("input", () => validarCampo(nameInput));
apellidoInput.addEventListener("input", () => validarCampo(apellidoInput));

/***************************************
 * VALIDACIÓN CORREO
 ***************************************/
function validarCorreo(input) {
  if (input.value === "") {
    input.classList.remove("valid", "error");
  } else if (correoValido.test(input.value)) {
    input.classList.add("valid");
    input.classList.remove("error");
  } else {
    input.classList.add("error");
    input.classList.remove("valid");
  }
}

mailInput.addEventListener("input", () => validarCorreo(mailInput));

/***************************************
 * VALIDACIÓN DOCUMENTO (NÚMEROS, MAX 10)
 ***************************************/
function validarDocumento(input) {
  if (input.value === "") {
    input.classList.remove("valid", "error");
  } else if (soloNumeros.test(input.value)) {
    input.classList.add("valid");
    input.classList.remove("error");
  } else {
    input.classList.add("error");
    input.classList.remove("valid");
  }
}

documentoInput.addEventListener("input", () => validarDocumento(documentoInput));

/***************************************
 * VALIDACIÓN FECHA DE NACIMIENTO
 ***************************************/
// Limitar fecha máxima al día actual
const hoy = new Date();
const yyyy = hoy.getFullYear();
const mm = String(hoy.getMonth() + 1).padStart(2, "0");
const dd = String(hoy.getDate()).padStart(2, "0");
fechaInput.max = `${yyyy}-${mm}-${dd}`;

/***************************************
 * VALIDACIÓN TELÉFONO (10 NÚMEROS)
 ***************************************/
telefonoInput.addEventListener("input", () => {
  telefonoInput.value = telefonoInput.value.replace(/\D/g, ""); // Solo números
  if (telefonoInput.value.length === 10) {
    telefonoInput.classList.add("valid");
    telefonoInput.classList.remove("error");
  } else {
    telefonoInput.classList.add("error");
    telefonoInput.classList.remove("valid");
  }
  if (telefonoInput.value.length > 10) {
    telefonoInput.value = telefonoInput.value.slice(0, 10);     // Limitar 10 dígitos
  }
});

/***************************************
 * VALIDACIÓN CONTRASEÑAS
 ***************************************/
const minLength = document.getElementById("minLength");
const upperCase = document.getElementById("upperCase");
const lowerCase = document.getElementById("lowerCase");
const number = document.getElementById("number");
const specialChar = document.getElementById("specialChar");

function validarPassword() {
  const val = pwd1.value;

  // Requisitos de contraseña
  val.length >= 10 ? minLength.classList.add("valid") : minLength.classList.remove("valid");
  /[A-Z]/.test(val) ? upperCase.classList.add("valid") : upperCase.classList.remove("valid");
  /[a-z]/.test(val) ? lowerCase.classList.add("valid") : lowerCase.classList.remove("valid");
  /\d/.test(val) ? number.classList.add("valid") : number.classList.remove("valid");
  /[\W_]/.test(val) ? specialChar.classList.add("valid") : specialChar.classList.remove("valid");

  // Borde del input según requisitos
  if (val.length >= 10 && /[A-Z]/.test(val) && /[a-z]/.test(val) && /\d/.test(val) && /[\W_]/.test(val)) {
    pwd1.classList.add("valid");
    pwd1.classList.remove("error");
  } else {
    pwd1.classList.add("error");
    pwd1.classList.remove("valid");
  }

  // Validar coincidencia con la segunda contraseña
  if (pwd2.value !== "") {
    if (pwd1.value === pwd2.value) {
      pwd2.classList.add("valid");
      pwd2.classList.remove("error");
    } else {
      pwd2.classList.add("error");
      pwd2.classList.remove("valid");
    }
  }
}

pwd1.addEventListener("input", validarPassword);
pwd2.addEventListener("input", validarPassword);

/***************************************
 * ENVÍO DEL FORMULARIO CON SWEETALERT
 ***************************************/
form.addEventListener("submit", function(e) {
  e.preventDefault(); // Evitar envío real

  // Validaciones finales
  if (![pwd1, pwd2].every(el => el.classList.contains("valid"))) {
    return Swal.fire('Error', 'Las contraseñas deben cumplir los requisitos y coincidir.', 'error');
  }
  if (![documentoInput, telefonoInput].every(el => el.classList.contains("valid"))) {
    return Swal.fire('Error', 'Número de documento o teléfono inválido.', 'error');
  }
  if (![nameInput, apellidoInput, mailInput].every(el => el.classList.contains("valid"))) {
    return Swal.fire('Error', 'Nombre, apellido o correo inválido.', 'error');
  }
  const generoSeleccionado = document.querySelector('input[name="genero"]:checked');
  if (!generoSeleccionado) return Swal.fire('Error', 'Debes seleccionar un género.', 'error');

  // Capturar datos
  const datos = {
    Nombre: nameInput.value,
    Apellido: apellidoInput.value,
    Correo: mailInput.value,
    TipoDocumento: document.getElementById("lang").value,
    NumeroDocumento: documentoInput.value,
    FechaNacimiento: fechaInput.value,
    Telefono: telefonoInput.value,
    Genero: generoSeleccionado.value,
    Contraseña: pwd1.value
  };

  // Mostrar SweetAlert
  let htmlDatos = '';
  for (const key in datos) htmlDatos += `<strong>${key}:</strong> ${datos[key]}<br>`;

  Swal.fire({
    title: 'Datos del formulario',
    html: htmlDatos,
    icon: 'success',
    confirmButtonText: 'Aceptar'
  });
});

/***************************************
 * MOSTRAR / OCULTAR CONTRASEÑA CON EMOJI
 ***************************************/
function togglePassword(input, toggle) {
  if (input.type === "password") {
    input.type = "text";
    toggle.textContent = "🙉"; // Monito destapando
  } else {
    input.type = "password";
    toggle.textContent = "🙈"; // Monito tapando
  }
}

togglePwd1.addEventListener("click", () => togglePassword(pwd1, togglePwd1));
togglePwd2.addEventListener("click", () => togglePassword(pwd2, togglePwd2));
