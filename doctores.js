const tablaDoctores = document.getElementById("tabla-doctores")
const cuerpoTabla = tablaDoctores.querySelector("tbody");

const doctoresCookie = JSON.parse(obtenerCookie("doctores"))

for (let i = 0; i < doctoresCookie.length; i++ ){
    let doctor = doctoresCookie[i];
    const fila = cuerpoTabla.insertRow();
    const nombreDoctor = fila.insertCell();
    nombreDoctor.textContent = doctor.nombre;
    const apellidoDoctor = fila.insertCell();
    apellidoDoctor.textContent = doctor.apellido;
    const cedula = fila.insertCell();
    cedula.textContent = doctor.cedula;
    const especialidad = fila.insertCell();
    especialidad.textContent = doctor.especialidad;
    const consultorio = fila.insertCell();
    consultorio.textContent = doctor.consultorio;
    const correoContacto = fila.insertCell();
    correoContacto.textContent = doctor.correo;
    }

    function obtenerCookie(nombre) {
        const cookies = document.cookie.split("; ")
        for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split("=");
        if (cookie[0] === nombre) {
        return decodeURIComponent(cookie[1]);
        }
        }
        return "";
        }