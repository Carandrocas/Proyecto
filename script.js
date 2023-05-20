// Función para capturar los datos del formulario de doctores
function submitDoctorForm(event) {
  event.preventDefault();

  const doctorName = document.getElementById('doctorName').value;
  const doctorLastName = document.getElementById('doctorLastName').value;
  const doctorCedula = document.getElementById('doctorCedula').value;
  const doctorSpecialty = document.getElementById('doctorSpecialty').value;
  const doctorOffice = document.getElementById('doctorOffice').value;
  const doctorEmail = document.getElementById('doctorEmail').value;

  const doctor = {
    nombre: doctorName,
    apellido: doctorLastName,
    cedula: doctorCedula,
    especialidad: doctorSpecialty,
    consultorio: doctorOffice,
    correo: doctorEmail
  };

  saveDataToJson(doctor, 'doctores.json');
  document.getElementById('doctorForm').reset();
}

// Función para capturar los datos del formulario de pacientes
function submitPatientForm(event) {
  event.preventDefault();

  const patientName = document.getElementById('patientName').value;
  const patientLastName = document.getElementById('patientLastName').value;
  const patientCedula = document.getElementById('patientCedula').value;
  const patientAge = document.getElementById('patientAge').value;
  const patientPhone = document.getElementById('patientPhone').value;
  const patientSpecialty = document.getElementById('patientSpecialty').value;

  const patient = {
    nombre: patientName,
    apellido: patientLastName,
    cedula: patientCedula,
    edad: patientAge,
    telefono: patientPhone,
    especialidad: patientSpecialty
  };

  saveDataToJson(patient, 'pacientes.json');
  document.getElementById('patientForm').reset();
}
