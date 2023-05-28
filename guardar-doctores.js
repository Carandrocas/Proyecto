const formularioDoctores = document.getElementById('registro-doctores-form')
formularioDoctores.addEventListener('submit', (event) =>{
event.preventDefault();
const datosDoctor = {
nombre: document.getElementById('nombre').value,
apellido: document.getElementById('apellido').value,
cedula: document.getElementById('cedula').value,
especialidad: document.getElementById('especialidad').value,
consultorio: document.getElementById('consultorio').value,
correo: document.getElementById('correo').value,
}

guardarCookies(datosDoctor)
const confirmacion = confirm("¿Desea ver los datos de los doctores?")
if(confirmacion == true){
window.location.href = "doctores.html"
}else{
formularioMascotas.reset()
}

})

function guardarCookies(doctor) {
//las cookies antiguas
let datos = obtenerCookie("doctores");
if (datos === "") {
datos = "[]";
}
//objeto
let pacientesObjetos = []
pacientesObjetos = JSON.parse(datos);
//añadir nuevas
pacientesObjetos.push(doctor);
const jsonDatos = JSON.stringify(pacientesObjetos)
cambiarCookie("doctores", jsonDatos)

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

