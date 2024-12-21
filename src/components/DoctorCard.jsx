function DoctorCard({ ...doctor }) {
  return (
    <div className="profesionales">
      <div className="card__doctor">
        <img
          src={doctor.imagen}
          alt={doctor.nombre}
          className="doctor__imagen"
        />
        <div className="card-body">
          <h5 className="card-title">{doctor.nombre}</h5>
          <p className="card-text">{doctor.especialidad}</p>
          <p className="card-text">{doctor.experiencia} años de experiencia.</p>
          <p className="card-text">{doctor.descripcion}</p>
        </div>
      </div>
    </div>
  );
}

export default DoctorCard;
