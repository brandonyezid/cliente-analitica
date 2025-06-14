import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home } from "../../pages/Home/Home";
// IMPORTACIÓN CON NOMBRE (usa las llaves) porque Analitica.jsx tiene 'export function Analitica'
import { Analitica } from "../../pages/Analitica/Analitica";

import { Menu } from '../../common/Menu/Menu'; // Asegúrate de que esta ruta sea correcta

// Si Api también usa 'export function Api', impórtala con llaves
import Api from '../../pages/Api/Api'; // Asegúrate de que esta ruta sea correcta y el componente se exporte así

// Si tu componente DashboardAdmin o cualquier otro no usa 'export function NombreComponente',
// sino 'export default NombreComponente', entonces impórtalo SIN llaves:
// import DashboardAdmin from '../../pages/Admin/DashboardAdmin'; // Ejemplo de importación por defecto

export function Rutas() {
    return (
        <>
            <Menu /> {/* Tu componente de menú */}
            <Routes>
                <Route path="/" element={<Home />} />
                {/* Asegúrate de que el path de la ruta coincida con el enlace en tu menú */}
                <Route path="/analitica" element={<Analitica />} /> {/* Aquí usas Analitica correctamente */}
                <Route path="/api" element={<Api />} />
                {/* Puedes añadir más rutas aquí, como la de DashboardAdmin si la tienes */}
                {/* <Route path="/dashboard-admin" element={<DashboardAdmin />} /> */}
            </Routes>
        </>
    );
}