const tareaInput = document.getElementById("tareaInput")
const agregarBtn = document.getElementById("agregarBtn")
const listaTareas = document.getElementById("listaTareas")

//colocar el cursor dentro del input de texto
window.onload = function(){

    tareaInput.focus()
}

// agregar evento al boton
agregarBtn.addEventListener("click", agregarTarea)

// agregar el evento con la tecla enter
tareaInput.addEventListener("keypress", function(event) {
    if(event.key == "Enter"){
        agregarTarea()
    }
})

function agregarTarea(){
    const textoTarea =tareaInput.value.trim()

    if (textoTarea === "") {
    Swal.fire({
        icon: "warning",
        title: "Campo vacío",
        text: "Por favor escriba una tarea",
        confirmButtonColor: "#7c5cff"
    });
    return;
}

    const li = document.createElement("li")
    li.textContent = textoTarea


    const btnEliminar = document.createElement("button")
    btnEliminar.innerHTML= ('<i class="fa-solid fa-x"></i>')
    btnEliminar.classList.add('btn-eliminar')
    
    btnEliminar.addEventListener("click", function(){
        listaTareas.removeChild(li)
    })
    li.appendChild(btnEliminar)

//agregar elemento li dentro del ul
    listaTareas.appendChild(li)



//limpiar y enfocar
tareaInput.value = ""
tareaInput.focus()
}




