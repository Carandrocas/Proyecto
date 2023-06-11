const formularioPacientes = document.getElementById('registro-pacientes-form')
formularioPacientes.addEventListener('submit', (event) =>{
event.preventDefault();
const datosPaciente = {
nombre: document.getElementById('nombre').value,
apellido: document.getElementById('apellido').value,
cedula: document.getElementById('cedula').value,
edad: document.getElementById('edad').value,
telefono : document.getElementById('telefono').value,
especialidad: document.getElementById('especialidad').value,

}

guardarCookies(datosPaciente)
const confirmacion = confirm("¿Desea ver los datos de los pacientes?")
if(confirmacion == true){
window.location.href = "pacientes.html"
}else{
formularioPacientes.reset()
}

})

function guardarCookies(paciente) {
//las cookies antiguas
let datos = obtenerCookie("pacientes");
if (datos === "") {
datos = "[]";
}
//objeto
let pacientesObjetos = []
pacientesObjetos = JSON.parse(datos);
//añadir nuevas
pacientesObjetos.push(paciente);
const jsonDatos = JSON.stringify(pacientesObjetos)
cambiarCookie("pacientes", jsonDatos)

}

function obtenerCookie(nombre) {
const cookies = document.cookie.split("; ")
for (let i = 0; i < cookies.length; i++) {
const cookie = cookies[i].split("=");

if (cookie[0] === nombre) {
return decodeURIComponent(cookie[1]);
}
}
return "";
}

function cambiarCookie(nombre, valor) {
document.cookie = `${nombre}=${encodeURIComponent(valor)}`;
}

