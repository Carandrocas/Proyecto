const tablaPacientes = document.getElementById("tabla-pacientes")
const cuerpoTabla = tablaPacientes.querySelector("tbody");

const pacientesCookie = JSON.parse(obtenerCookie("pacientes"))

for (let i = 0; i < pacientesCookie.length; i++ ){
    let paciente = pacientesCookie[i];
    const fila = cuerpoTabla.insertRow();
    const nombrePaciente = fila.insertCell();
    nombrePaciente.textContent = paciente.nombre;
    const apellidoPaciente = fila.insertCell();
    apellidoPaciente.textContent = paciente.apellido;
    const cedula = fila.insertCell();
    cedula.textContent = paciente.cedula;
    const edad = fila.insertCell();
    edad.textContent = paciente.edad;
    const telefono = fila.insertCell();
    telefono.textContent = paciente.telefono;
    const especialidad = fila.insertCell();
    especialidad.textContent = paciente.especialidad;
    
    
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