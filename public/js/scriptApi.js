// Este script se ejecuta cuando la página se carga

// Utilizamos la función fetch para hacer una petición a la ruta '/api/message' de nuestra API
fetch('/api/message')
    .then(response => response.json()) // Convertimos la respuesta a formato JSON
    .then(data => {
        // Buscamos el elemento con id 'api-message' en el HTML
        const messageElement = document.getElementById('api-message');
        // Colocamos el mensaje recibido de la API dentro de ese elemento
        messageElement.textContent = data.message;
    })
    .catch(error => console.error('Error fetching data:', error)); // Manejamos los errores si ocurre algún problema con la petición
