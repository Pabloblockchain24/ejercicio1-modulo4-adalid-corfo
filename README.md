# Ejercicio práctico 1 - Módulo 4 Adalid Corfo

## Descripción del Proyecto

Este proyecto es una aplicación web desarrollada en React que permite a los usuarios agendar citas médicas con diferentes doctores. La aplicación muestra una lista de servicios médicos y proporciona un formulario para que los pacientes puedan seleccionar un doctor, elegir una fecha y hora, y proporcionar su nombre para agendar una cita.


## Instrucciones para ejecutar y probar el Proyecto

Sigue estos pasos para instalar y ejecutar el proyecto localmente:

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/Pabloblockchain24/ejercicio1-modulo4-adalid-corfo.git
   ```
   
   cd ejercicio1-modulo4-adalid-corfo

   npm install -g sass

   sass .\assets\styles\main.scss estilos.css

   npm run dev 

## Estructura de carpetas y archivos

```
ejercicio1-modulo4-adalid-corfo/
├── public/
│   ├── assets/
│   │   ├── img/
│   │   │   ├── appointmentsItem.jpg
│   │   │   ├── emergencyItem.jpg
│   │   │   └── especialityItem.jpg
│   │   └── data/
│   │       └── doctores.json
│   │       └── servicios_medicos.json
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Form.jsx
│   │   ├── DoctorCard.jsx
│   │   ├── DoctorsList.jsx
│   │   └── ServiceCard.jsx
│   │   └── ServiceList.jsx
│   ├── pages/
│   │   ├── AppointmentForm.jsx
│   │   ├── EquipoMedico.jsx
│   │   └── ServicesList.jsx
│   ├── App.jsx
│   ├── index.css
│   └── assets/
│       └── styles/
│            ├── abstracts/
│            ├── base/
│            ├── components/
│            ├── layout/
│            ├── pages/
│            ├── themes/
│            ├── vendors/
│            └── main.scss
├── package.json
└── README.md
```


## Modularización de Estilos

La estructura de los estilos está organizada utilizando SASS, dividiendo los estilos en archivos parciales para mejorar la organización y modularidad del código. Los archivos parciales están agrupados por funcionalidades, como layout, componentes, páginas, temas, entre otros. 

- `abstracts/_variables.scss`: Define los breakpoints a utilizar.
- `base/_fonts.scss`: Contiene las definiciones de fuentes utilizadas en el proyecto.
- `components/_buttons.scss`: Define estilos para los botones.
- `components/doctor-card.scss`: Define estilos tarjetas de doctores a renderizar
- `pages/_form-appointment.scss`: Estilos específicos de la página de reserva de citas.
- `pages/_equipo-medico.scss`: Estilos específicos de la página del equipo médico.
- `pages/_services-list.scss`: Estilos específicos de la página de listado de servicios
- `themes/_theme-adalid.scss`: Estilos para el colores y tema personalizado del sitio.
- `vendors/_reset.scss`: Contiene un reset CSS básico para normalizar estilos entre navegadores.

Todos estos archivos se importan en el archivo principal `main.scss`, que se compila en el archivo CSS final.

## Media Queries

Se han implementado media queries en varios de los archivos parciales para asegurar que el diseño sea completamente responsivo. Los principales puntos de ruptura (`breakpoints`) son:

- 1200px: Para pantallas grandes.
- 1024px: Para pantallas medianas.
- 768px: Para tabletas.
- 576px: Para tabletas pequeñas y moviles grandes
- 420px: Para moviles pequeños

Estos breakpoints se aplican en las secciones necesarias, como el layout y los componentes, para que el sitio funcione correctamente en diferentes tamaños de pantalla.

