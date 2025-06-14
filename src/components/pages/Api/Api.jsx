// src/components/pages/Api/Api.jsx (o un archivo de servicio dedicado)
import React, { useState, useEffect } from 'react';

function Api() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Asegúrate de que esta URL sea la de tu backend de Spring Boot
                // Por ejemplo: http://localhost:8080/api/datos_analitica
                const response = await fetch('http://localhost:8080/api/some_endpoint');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); // El array vacío asegura que se ejecute solo una vez al montar

    if (loading) return <div>Cargando datos...</div>;
    if (error) return <div>Error al cargar los datos: {error.message}</div>;

    return (
        <div>
            <h2>Datos de la API</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
            {/* Aquí puedes renderizar los datos de forma más estructurada */}
        </div>
    );
}

export default Api;