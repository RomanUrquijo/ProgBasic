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

    const date_ejm = new Date();

    console.log(date_ejm);
    console.log("DIA SEMANA: " + date_ejm.getDay());
    console.log("DIA MES: " + date_ejm.getDate());
    console.log("MES: " + (date_ejm.getMonth() + 1));
    console.log("AÑO: " + date_ejm.getFullYear());
    console.log("HORA: " + date_ejm.getHours());
    console.log("MINUTOS: " + date_ejm.getMinutes());
    console.log("SEGUNDOS: " + date_ejm.getSeconds());
    console.log("MILISEGUNDOS: " + date_ejm.getMilliseconds());
    console.log("" + date_ejm.getTimezoneOffset());
    console.log(""+date_ejm.getTime());

    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
               "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    var dias =["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

        
       const hoy = new Date();

// Obtener índices
let diaSemana = hoy.getDay();    // 0 = domingo ... 6 = sábado
let diaMes = hoy.getDate();      // número del día (1-31)
let mese = hoy.getMonth();

console.log("Día de la semana: " + (dias[diaSemana - 1 ]));
console.log("Día del mes: " + diaMes);
console.log("Mes del año: " + meses[mese]);

}
