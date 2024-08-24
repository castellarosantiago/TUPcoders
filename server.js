require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Configuración de la conexión a PostgreSQL
const pool = new Pool({
  host: process.env.PG_HOST,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  port: 5432,
});

// Crear tabla si no existe
pool.query(`
  CREATE TABLE IF NOT EXISTS emails (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL
  );
`, (err) => {
  if (err) {
    console.error('Error creating table:', err);
  } else {
    console.log('Table created or already exists');
  }
});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/message', (req, res) => {
  res.json({ message: '¡Hola desde la API! Saludos, Ian, Paula, y Caste' });
});

app.post('/api/contact', async (req, res) => {
  const { email } = req.body;
  try {
    await pool.query('INSERT INTO emails (email) VALUES ($1)', [email]);
    res.status(200).json({ message: 'Correo recibido' });
  } catch (err) {
    console.error('Error al guardar el correo:', err);
    res.status(500).json({ message: 'Error al guardar el correo' });
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
