// Importamos el módulo Express
const express = require('express');
// Creamos una instancia de una aplicación Express
const app = express();
// Definimos el puerto en el que nuestro servidor escuchará
const port = 3000;

// Servimos archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

// Definimos una ruta para la API que retorna un mensaje simple
app.get('/api/message', (req, res) => {
  res.json({ message: '¡Hola desde private! Saludos, Ian, Paula, y Caste' });
});

//Esto define una ruta para la URL raíz (/) que envía el archivo index.html al cliente.
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/public/index.html")
});
// Iniciamos el servidor para que escuche en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
