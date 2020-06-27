// Configuración
require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const api = express();
const PORT = process.env.PORT || 3000;

// Conexion a Base de Datos
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected!'))
  .catch(() => console.log('Error connecting to database...'));

/*
  Ejercicio de diseño de base de datos (por votacion): 
  Un aeropuerto busca controlar los vuelos que llegan al lugar, desea conocer los vuelos que existen, a qué aerolínea pertenecen, las características del avión y el lugar de procedencia. Ayuda al aeropuerto a solucionar su problema.
*/

// Generar un esquema -> Definicion de las reglas de una coleccion
const flightsSchema = new mongoose.Schema({
  airline: {
    type: String,
    required: true,
  },
  aircraft_name: {
    type: String,
    required: true,
  },
  aircraft_model: Number,
  flight_from: {
    type: String,
    required: true,
  },
});

// Generar un modelo a partir del esquema -> Objeto que nos permite interactuar con la colección
const Flights = mongoose.model('Flights', flightsSchema);

api.use(express.urlencoded({ extended: true }));
api.use(express.json({ extended: true }));

// Endpoints
api.get('/', (req, res) => res.status(200).json({ message: "it's alive!" }));

// Create
api.post('/api/flights', (req, res) => {
  // 1) Recibir la informacion de vuelo que se quiere crear desde el cliente
  console.log(req.body);

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