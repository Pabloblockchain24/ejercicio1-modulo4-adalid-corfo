import { useEffect, useState } from "react"
import DoctorCard from "./DoctorCard"; 

function DoctorsList() {
    const [doctors, setDoctors] = useState([]);

      useEffect(() => {
        async function loadDoctors() {
            try {
                const response = await fetch('/assets/data/doctores.json'); 
                const doctores = await response.json();
                setDoctors(doctores)
            }catch (error) {
                console.error('Error al cargar los doctores:', error);
            }
        }
        loadDoctors()
    }, [])


    return (
        <div>
            <h3>Nuestro equipo médico</h3>
            <div className="doctors__list">
                {doctors.length > 0 ? (
                    doctors.map((doctor, index) => (
                        <DoctorCard key={index} {...doctor} />
                    ))
                ) : (
                    <p>Cargando doctores...</p>
                )}
            </div>
        </div>
    )
}

export default DoctorsList


