// Función para actualizar la fecha y hora
function actualizarFechaYHora() {
    const ahora = new Date();
    const fecha = ahora.toLocaleDateString('es-ES');
    const hora = ahora.toLocaleTimeString('es-ES');

    document.getElementById('fecha').textContent = `Fecha: ${fecha}`;
    document.getElementById('hora').textContent = `Hora: ${hora}`;
}

// Actualizar cada segundo
setInterval(actualizarFechaYHora, 1000);
