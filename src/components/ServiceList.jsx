import { useEffect, useState } from "react"
import ServiceCard from "./ServiceCard";


function ServiceList() {

    const [services, setServices] = useState([]);

      useEffect(() => {
        async function loadServices() {
            try {
                const response = await fetch('/assets/data/servicios_medicos.json'); 
                const servicios_medicos = await response.json();
                setServices(servicios_medicos)
            }catch (error) {
                console.error('Error al cargar los doctores:', error);
            }
        }
        loadServices()
    }, [])

  return (
    <div className="services__list">
    {services.length > 0 ? (
        services.map((service, index) => (
            <ServiceCard key={index} {...service} />
        ))
    ) : (
        <p>Cargando servicios...</p>
    )}
</div>
  )
}

export default ServiceList