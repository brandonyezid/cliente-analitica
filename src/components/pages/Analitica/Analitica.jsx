import React from 'react';
// Asegúrate de que las rutas a tus imágenes sean correctas desde Analitica.jsx
// Si Analitica.jsx está en src/components/pages/Analitica/
// y las imágenes están en src/assets/img/
// Necesitas subir 3 niveles (../../../) para llegar a src/ y luego entrar en assets/img/

// !!! IMPORTANTE: Asegúrate de que tienes estas imágenes en tu carpeta assets/img
// con estos nombres exactos y extensiones.
import analiticaImagen1 from '../../../assets/img/analiticaImagen1.jpg'; // O el nombre real de tu imagen
import analiticaImagen2 from '../../../assets/img/analiticaImagen2.jpg'; // O el nombre real de tu imagen
import analiticaImagen3 from '../../../assets/img/analiticaImagen3.jpg'; // O el nombre real de tu imagen
import analiticaImagen4 from '../../../assets/img/analiticaImagen4.jpg'; // O el nombre real de tu imagen
import analiticaImagen5 from '../../../assets/img/analiticaImagen5.jpg'; // O el nombre real de tu imagen

// Si tienes un archivo CSS para esta página, impórtalo aquí
import './Analitica.css'; // Crea este archivo si no existe para estilizar las imágenes

export function Analitica() { // Esta es una EXPORTACIÓN CON NOMBRE
    return (
        <div>
            <h2>Página de Analítica</h2>
            {/* ... cualquier otro contenido que tengas ... */}

            <div className="analitica-image-grid"> {/* Contenedor para las imágenes */}
                <img src={analiticaImagen1} alt="Imagen de analítica 1" className="analitica-image" />
                <img src={analiticaImagen2} alt="Imagen de analítica 2" className="analitica-image" />
                <img src={analiticaImagen3} alt="Imagen de analítica 3" className="analitica-image" />
                <img src={analiticaImagen4} alt="Imagen de analítica 4" className="analitica-image" />
                <img src={analiticaImagen5} alt="Imagen de analítica 5" className="analitica-image" />
            </div>

            {/* ... más contenido si es necesario ... */}
        </div>
    );
}