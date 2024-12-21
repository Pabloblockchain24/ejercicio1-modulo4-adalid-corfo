import { useState, useEffect } from "react";
function Form() {
  const [patientName, setPatientName] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    async function loadDoctors() {
      try {
        const response = await fetch("/assets/data/doctores.json");
        const doctores = await response.json();
        setDoctors(doctores);
      } catch (error) {
        console.error("Error al cargar los doctores:", error);
      }
    }
    loadDoctors();
  }, []);

  const validateForm = () => {
    setIsFormValid(
      patientName !== "" &&
        selectedDoctor !== "" &&
        appointmentDate !== "" &&
        appointmentTime !== ""
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "patientName":
        setPatientName(value);
        break;
      case "selectedDoctor":
        setSelectedDoctor(value);
        break;
      case "appointmentDate":
        setAppointmentDate(value);
        break;
      case "appointmentTime":
        setAppointmentTime(value);
        break;
      default:
        break;
    }
    validateForm();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Cita agendada con el Dr. ${selectedDoctor} el ${appointmentDate} a las ${appointmentTime}`
    );
    setPatientName("");
    setSelectedDoctor("");
    setAppointmentDate("");
    setAppointmentTime("");
    setIsFormValid(false)
  };

  return (
    <>
    {doctors.length > 0 ? (
      <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="patientName">Nombre del paciente:</label>
        <input
          type="text"
          id="patientName"
          name="patientName"
          value={patientName}
          onChange={handleInputChange}
          placeholder="Nombre del paciente"
          required
        />
      </div>

      <div>
        <label htmlFor="selectedDoctor">Seleccionar Doctor:</label>
        <select
          id="selectedDoctor"
          name="selectedDoctor"
          value={selectedDoctor}
          onChange={handleInputChange}
          required
        >
          <option value="">Seleccione un doctor</option>
          {doctors.map((doctor, key) => (
            <option key={key} value={doctor.nombre}>
              Dr. {doctor.nombre} - {doctor.especialidad}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="appointmentDate">Fecha de la cita:</label>
        <input
          type="date"
          id="appointmentDate"
          name="appointmentDate"
          value={appointmentDate}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <label htmlFor="appointmentTime">Hora de la cita:</label>
        <input
          type="time"
          id="appointmentTime"
          name="appointmentTime"
          value={appointmentTime}
          onChange={handleInputChange}
          required
        />
      </div>

      <button type="submit" disabled={!isFormValid}>
        Agendar cita
      </button>
    </form>
  ) : (
      <p>Cargando Formulario...</p>
  )}
    </>
  );
}

export default Form;
