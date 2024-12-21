
function ServiceCard({ ...service }) {
  return (
    <div className="service__card">
      <img src={service.imagen} alt={service.nombre_servicio} className="service__card__image" />
      <div className="service__card__content">
        <h3 className="service__card__title">{service.nombre_servicio}</h3>
        <p className="service__card__description">{service.descripcion}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
