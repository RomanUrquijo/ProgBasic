function CalcularEdad(){
    const input = document.getElementById("fecha_nac").value;
    const resultado = document.getElementById("resultado");

    if (!input){
        resultado.textContent = "Por favor ingresa una fecha de nacimiento";
        return;
    }
    const fecha = new Date(input);
    const today = new Date();
    
    let edad = today.getFullYear() - fecha.getFullYear();
    let mes = today.getMonth() - fecha.getMonth();

    if(mes < 0 || (mes === 0 && today.getDate() < fecha.getDate())){
        edad--;
    }
    resultado.textContent = `Tienes ${edad} años`;

}