// Configuración
const mongoose = require('mongoose');
const express = require('express');
const api = express();
const PORT = process.env.PORT || 3000;

// Conexion a Base de Datos
mongoose.connect('mongodb://maui:abc123def@cintanegra-shard-00-00-efwi5.mongodb.net:27017,cintanegra-shard-00-01-efwi5.mongodb.net:27017,cintanegra-shard-00-02-efwi5.mongodb.net:27017/test?ssl=true&replicaSet=CintaNegra-shard-0&authSource=admin&retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected!'))
  .catch(() => console.log('Error connecting to database...'));

// Endpoints
api.get('/', (req, res) => res.status(200).json({ message: "it's alive!" }));

// Create
api.post('/api/animales', (req, res) => {
  // 1) Recibir el animal que se quiere crear desde el cliente
  // 2) Pedirle a la base de datos que guarde el nuevo animal
  // 3) Con la respuesta que recibamos de la base de datos, le respondemos al cliente
  const animal = { id: 'A1', nombre: 'Firulais', edad: 4 };
  res.status(201).json({ animal });
});

// Read

// Update

// Delete

// Encender el servidor
api.listen(PORT, () => console.log(`Listening on ${PORT}`));